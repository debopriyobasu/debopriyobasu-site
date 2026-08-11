---
name: astro-typecheck
description: Find and fix TypeScript errors in this Astro/pnpm project by running `pnpm exec astro check`, then resolving the reported diagnostics without breaking existing functionality. Use when the user asks to check, fix, or debug TypeScript/Astro type errors.
---

# Astro Typecheck & Fix

Use this workflow whenever the user wants to find and/or fix TypeScript errors in
this project (Astro + pnpm). It runs the official type checker, interprets each
reported diagnostic, and fixes them surgically.

## 1. Run the checker

Run the project's type check from the project root:

```sh
pnpm exec astro check
```

Notes on common failure modes in this environment:

- If you get `env: node: No such file or directory`, the sandbox does not have
  `node` on `PATH`. Find the installed node and invoke the Astro CLI directly,
  for example:
  /Users/debopriyobasu/.local/share/fnm/node-versions/v24.19.0/installation/bin/node node_modules/astro/dist/cli/index.js check
- Redirect output to a file inside the project and read it back if the terminal
  tool swallows stdout, e.g. `> astro-check.log 2>&1`. Delete the log afterward.
- Astro only prints diagnostics when errors exist. An empty result means a clean
  pass — don't force an exit code check.

## 2. Understand each error

Diagnostics look like:

```
src/.../.astro:LINE:COL - error ts(XXXX): message
```

Fix errors at the root cause. Read the relevant file first, then apply a minimal,
targeted fix. Do not change unrelated code or runtime behavior.

## 3. Common fixes in this codebase

These recurring patterns will resolve most errors. Adjust to the actual code.

- **Implicit `any` on `.map()` callbacks**: often caused by a `filter()` type guard
  that widens posts to `{ post: any }`, so `post.data.tags` loses its type.
  Annotate the callback parameter explicitly, e.g. `tags.map((tag: string) => ...)`.

- **`string` not assignable to a `-literal` union**: `as const` objects produce
  literal-typed values. Widen with a cast for comparison, e.g.
  `(Object.values(localizedNames) as string[]).includes(title)`.

- **`string | undefined` not assignable to `string`**: Astro's content layer types
  `post.body` as `string | undefined`. Widen the consuming function's parameter to
  `string | undefined` (only if it already guards falsy input) or assert at the
  call site with `post.body ?? ""`.

- **`lang` / `Astro.params` typing**: values from `Astro.params` are `string | undefined`
  or widened strings. Use `as any` only at existing boundaries (e.g.
  `useTranslations(lang as any)`); prefer explicit casts over broad `any` when possible.

After each fix, check that it preserves behavior: prefer widening types, annotating
parameters, or safe casts over changing logic or narrowing types that break a call.

## 4. Re-run to verify

Re-run the check from step 1 after fixing. Keep fixing until diagnostics are empty,
then clean up any temporary log files you created. Report the fixed files and any
diagnostics you could not resolve.
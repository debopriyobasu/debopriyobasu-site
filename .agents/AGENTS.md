# Rules

- Do not use the em dash (—) character in responses. Use colons, parentheses, or commas instead.

## Running Commands

This project runs inside a Docker container. Run all commands (npm, build, etc.) inside the container using `docker compose exec app <command>`.

## Adding a New Blog Post

1. Create a directory under `src/content/blog/[post-slug]/`.
2. Place localized Markdown files inside as `[lang].md` (e.g. `en.md`, `de.md`).
3. Create a mandatory `en.md` file — it serves as the master translation and fallback.
4. Place all images and media assets directly in the post's directory.
5. Reference images using relative paths (e.g. `![Description](./diagram.png)`) so Astro can optimize them.
6. Include standard frontmatter in each translation file with `title`, `description`, `date`, `draft`, and `tags`.
7. All tags in frontmatter must be in English (e.g. `"AI"`, not `"IA"` or `"KI"`) for unified routing and filtering.
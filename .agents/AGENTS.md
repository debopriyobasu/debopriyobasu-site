# Rules

- Do not use the em dash (—) character in any of your responses, comments, or generated content. Use alternative punctuation (like a colon, parentheses, or a comma) or separate sentences instead.

## Running Commands

* **Docker Environment**: This project runs inside a Docker container. Do not run commands like `npm run dev`, `npm run build`, or `npm install` directly on the host machine. Instead, execute them inside the running container using Docker Compose:
  ```bash
  docker compose exec app <command>
  ```
  For example, to compile the site for verification:
  ```bash
  docker compose exec app npm run build
  ```


## Adding a New Blog Post

To add a new blog post, follow these rules:

1. **Colocated Directory Structure**: Create a directory under `src/content/blog/[post-slug]/` (e.g. `src/content/blog/my-new-post/`).
2. **Translation Files**: Put localized Markdown/MDX files inside this directory named as `[lang].md` (e.g. `en.md` for English, `de.md` for German, `fr.md` for French).
3. **Mandatory English Source**: You must create an `en.md` file. The English version is the master translation and serves as the automatic fallback for any language where a specific translation file is missing.
4. **Media and Image Assets**: Place all images, figures, and other binary media assets directly in the post's directory (e.g. `src/content/blog/my-new-post/diagram.png`).
5. **Relative References**: Reference images inside the markdown files using standard relative paths (e.g. `![Description](./diagram.png)`). This allows Astro's optimization pipeline to automatically resize and compress the assets. Never duplicate media files across translations.
6. **Schema Requirements**: Include standard frontmatter in each translation file:
   ```yaml
   title: "Post Title"
   description: "Post description (optional)"
   date: YYYY-MM-DD
   draft: false
   tags: ["Tag1", "Tag2"]
   ```


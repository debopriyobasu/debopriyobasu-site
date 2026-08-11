import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // 1. Load the official recommended Astro rules
  ...eslintPluginAstro.configs.recommended,

  // 2. Tell Astro files how to read TypeScript type expressions (like 'as any')
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },

  // 3. Ignore system and build folders
  {
    ignores: ['node_modules/', '.astro/', 'dist/'],
  },
];

# Repository Instructions

## Project
- This is a React 19 single-page application built with Vite and Tailwind CSS v4.
- Tailwind is integrated through `@tailwindcss/vite`; global styles and theme tokens are in `src/index.css`.
- The app entry is `src/main.jsx`, which renders `src/App.jsx`.

## Structure
- `src/pages/` contains page-level composition.
- `src/components/pages/` contains page-specific sections.
- `src/components/layouts/` contains shared navigation and footer components.
- `src/components/common/` and `src/components/ui/` contain reusable building blocks.
- `src/dummyData/` contains local data used to render UI.

## Conventions
- Follow the existing JavaScript/JSX style: functional React components, named imports where appropriate, and single-quoted JavaScript strings.
- Prefer existing shared components and Tailwind utilities over introducing parallel patterns or unnecessary dependencies.
- Keep global design tokens in `src/index.css`; use the existing Tailwind theme colors and font tokens where they fit.
- Keep changes focused and preserve the current component and folder boundaries.

## Validation
- `npm run lint` runs Oxlint.
- `npm run build` runs the production Vite build.
- `npm run dev` starts the local development server.
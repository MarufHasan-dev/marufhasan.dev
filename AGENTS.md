# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js App Router portfolio. Routes and layouts live in `app/` (`app/page.tsx`, `app/blog/page.tsx`, and `app/api/contact/route.ts`); shared React UI components are in `components/`; typed project and blog content is in `lib/data.ts`; and images, icons, and the resume PDF are in `public/`. Global styles are in `app/globals.css`. No dedicated test directory is currently present.

## Build, Test, and Development Commands

Use npm (the repository includes `package-lock.json`):

- `npm install` installs dependencies.
- `npm run dev` starts the local Next.js development server.
- `npm run lint` runs ESLint across the project.
- `npm run build` creates the production build; `npm start` serves that build locally.

Run lint and build before submitting changes. There is no configured automated test command or test framework at present.

## Coding Style & Naming Conventions

Use TypeScript and React. Follow the existing two-space indentation, double-quoted imports, and semicolon style. Name components and component files in PascalCase (for example, `ProjectCard.tsx`); use lowercase route directories as required by the App Router. Keep shared content typed and grouped in `lib/data.ts`, and place static files in `public/` with paths referenced from the site root (for example, `/projects/ecommerce.svg`). Use the existing ESLint configuration; avoid introducing new formatting or lint tools without need.

## Testing Guidelines

For UI or route changes, run `npm run lint` and `npm run build`. Manually check affected pages in `npm run dev` when the change is visual or interactive. For contact API work, verify validation and configured email delivery behavior in an appropriate local environment; do not commit credentials.

## Commit & Pull Request Guidelines

Recent commits use concise summaries, sometimes with prefixes such as `feat:`, `chore:`, or `Add`. Follow that history: describe one change clearly, using an imperative summary (for example, `feat: improve contact form feedback`). PRs should explain the user-visible change, note validation performed, link related issues when applicable, and include screenshots for visual changes.

## Security & Configuration

Contact email delivery reads SMTP settings from environment variables (`MAIL_HOST`, `MAIL_SMTP_PORT`, `MAIL_SMTP_SECURE`, `MAIL_USERNAME`, and `MAIL_PASSWORD`). Keep secrets in an ignored local environment file or deployment configuration; never commit them.

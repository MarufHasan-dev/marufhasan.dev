# Maruf Hasan Portfolio

Personal portfolio website for Maruf Hasan, a full-stack web developer. It presents selected projects, writing, skills, and contact information in a clean, modern interface.

## Development

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` to check code style and `npm run build` to create a production build.

## Project Layout

- `app/` contains routes, metadata, global styles, and the contact API route.
- `components/` contains reusable page sections and UI components.
- `lib/data.ts` contains project and blog content.
- `public/` contains images, icons, and the downloadable resume.

The contact form sends email through SMTP. Configure `MAIL_HOST`, `MAIL_SMTP_PORT`, `MAIL_SMTP_SECURE`, `MAIL_USERNAME`, and `MAIL_PASSWORD` in the local or deployment environment; keep these values private.

# Deployment

This repository is deployable from the repository root.

## Node host

Use these settings on a Node host such as Render or Railway:

- Build command: `npm install && npm run build`
- Start command: `npm start`
- Node version: `18` or newer

Set at least this environment variable in production:

```text
JWT_SECRET=replace-with-a-long-random-secret
```

The app uses SQLite by default. To use MySQL, also set:

```text
DB_CLIENT=mysql
DB_HOST=your-mysql-host
DB_PORT=3306
DB_USER=your-mysql-user
DB_PASS=your-mysql-password
DB_NAME=your-mysql-database
DB_SSL=true
```

The backend serves the built Vite frontend from `angkor-portfolio/frontend/dist`.

## Vercel

Vercel uses `vercel.json` from the repository root:

- Install command: `npm install --prefix angkor-portfolio/frontend`
- Build command: `npm --prefix angkor-portfolio/frontend run build`
- Output directory: `angkor-portfolio/frontend/dist`

This deploys the current portfolio frontend as a static Vite app.

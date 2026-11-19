# Vishal Kumar — Portfolio

A responsive Next.js App Router portfolio built with TypeScript, Motion, Lucide icons, and custom glassmorphism CSS.

## Run locally

Requires Node.js 20.9+.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

## Personalize

- Edit biography, skills, GitHub links, and concept project data in `app/page.tsx`.
- Replace the three explicitly labeled concept projects with your actual projects before presenting them as completed work.
- Contact currently links to GitHub because no email address was supplied.
- Change page metadata in `app/layout.tsx` and styles in `app/globals.css`.
- Google Fonts is optional; the design falls back to system sans-serif fonts without network access.

## Features

- Frosted glass navigation and cards
- CSS orbital hero artwork; no image assets required
- Motion scroll reveals and parallax, smooth anchor navigation, scroll progress indicator
- Responsive layouts and hover interactions
- Keyboard focus styles and reduced-motion CSS
- Copy GitHub profile link action

## Publish securely to GitHub

Revoke any token shared in chat. Never put tokens in source files or Git remote URLs.

After downloading and extracting this project, authenticate locally using GitHub CLI, then run:

```bash
gh auth login
git init
git add .
git commit -m "Build Vishal Kumar portfolio"
git branch -M main
gh repo create Vishal0023/vishal-portfolio --public --source=. --remote=origin --push
```

This creates a NEW public repository named `vishal-portfolio`; choose another name or use `--private` if desired. For an existing repository, add its HTTPS remote and push instead (inspect existing contents first).

## Deploy

Import the repository into Vercel and use the auto-detected Next.js settings. No environment variables are required. GitHub Pages does not run a Next.js server by default; use Vercel or configure static export separately.

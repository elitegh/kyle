# Portfolio

A bold, animated personal portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Aurora-style animated gradient background with floating orbs
- Glassmorphism cards and glowing UI accents
- Colorful gradient buttons with shimmer hover effects
- Scroll-triggered section animations
- Animated profile photo with gradient ring
- Light / dark theme toggle (saved in browser)
- Fully responsive navigation with mobile menu
- Easy customization via `src/data/portfolio.ts`

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes npm)

### Install & run

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Customize your content

Edit **`src/data/portfolio.ts`** — update your name, bio, skills, projects, email, and social links.

### Add your photo

1. Save your headshot as `public/profile.jpg` (square works best, ~800×800px).
2. In `src/data/portfolio.ts`, set `profileImage: "/profile.jpg"`.

Until then, a stylized placeholder (`/profile.svg`) or your initials will show.

### Light / dark theme

Use the **sun/moon toggle** in the navbar. Your preference is saved in the browser.

### Build for production

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and connect the repo to [Vercel](https://vercel.com) for one-click deploys on every push.

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

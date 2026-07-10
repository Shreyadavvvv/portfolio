# 🌐 Developer Portfolio

A sleek, single-page developer portfolio built with **React + Vite + TypeScript**. Features an interactive particle-network canvas, animated floating orbs, a mouse-reactive spotlight, full **light / dark mode** with `localStorage` persistence, and a custom blue colour palette.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Interactive Hero** | Canvas particle network — dots connect with lines; cursor repels particles |
| **Floating Orbs** | 5 large blurred cerulean blobs drift across the full page background |
| **Mouse Spotlight** | Soft radial glow follows the cursor (light mode) |
| **Light / Dark Mode** | Toggle in the nav; preference saved in `localStorage` |
| **Scroll-spy Nav** | Active section highlighted automatically as you scroll |
| **Mobile-friendly** | Hamburger menu with full nav + theme toggle |
| **Smooth Animations** | Framer Motion scroll-triggered fade-ins on every section |
| **No backend** | 100 % static — deploy anywhere (Vercel, Netlify, GitHub Pages, …) |

---

## 🎨 Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Midnight Blue | `#1C2B48` | Foreground / headings (light mode) |
| Cool Cerulean | `#8EB1D1` | Primary accent |
| Baby Blue Eyes | `#A7C7E7` | Particle dots (dark), orb tint |
| Light Blue Grey | `#C4D8E5` | Borders, muted surfaces |
| Platinum | `#E8ECEF` | Near-white backgrounds |

---

## 🗂️ Project Structure

```
artifacts/portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── Nav.tsx           # Sticky scroll-spy navigation + theme toggle
│   │   │   ├── Hero.tsx          # Full-screen hero with particle canvas
│   │   │   ├── About.tsx         # Bio section
│   │   │   ├── Skills.tsx        # Tech icon grid
│   │   │   ├── Projects.tsx      # Featured project cards
│   │   │   ├── Experience.tsx    # Timeline of roles
│   │   │   ├── Contact.tsx       # Email CTA
│   │   │   ├── Footer.tsx        # Social links
│   │   │   ├── ParticleCanvas.tsx    # Interactive canvas animation
│   │   │   ├── FloatingOrbs.tsx      # Animated background blobs
│   │   │   └── MouseSpotlight.tsx    # Cursor glow (light mode)
│   │   └── ui/                   # Radix UI / shadcn base components
│   ├── context/
│   │   └── ThemeContext.tsx      # Light/dark state + localStorage
│   ├── pages/
│   │   └── Home.tsx              # Root page — assembles all sections
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                   # ThemeProvider wrapper + router
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Tailwind + full CSS theme (light & dark)
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 8 — install with `npm i -g pnpm`

---

### 1 · Clone the repo

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2 · Install dependencies

This project lives inside a **pnpm workspace** (monorepo). Run from the **repo root**:

```bash
pnpm install
```

> This installs dependencies for every package in the workspace in one step.

### 3 · Start the dev server

```bash
# From the repo root
pnpm --filter @workspace/portfolio run dev

# Or cd into the portfolio directory and run directly
cd artifacts/portfolio
pnpm dev
```

Open **`http://localhost:5173`** in your browser. Hot-module replacement is enabled — every save updates the page instantly.

---

### Other useful commands

```bash
# Type-check without emitting files
pnpm --filter @workspace/portfolio run typecheck

# Production build (outputs to artifacts/portfolio/dist/)
pnpm --filter @workspace/portfolio run build

# Preview the production build locally
pnpm --filter @workspace/portfolio run serve
```

---

## ✏️ Customising the Content

All placeholder content lives in clearly labelled component files. Open and edit:

### Personal details

| What to change | File | What to look for |
|---|---|---|
| Your name | `src/components/portfolio/Hero.tsx` | `Elias Sterling.` |
| Tagline | `src/components/portfolio/Hero.tsx` | `I build precise, resilient systems.` |
| Bio intro | `src/components/portfolio/Hero.tsx` | paragraph below the tagline |
| Full bio | `src/components/portfolio/About.tsx` | three `<p>` blocks |
| Email | `src/components/portfolio/Contact.tsx` | `hello@example.com` |
| Nav logo | `src/components/portfolio/Nav.tsx` | `E.` initials link |

### Projects

Edit the `projects` array in `src/components/portfolio/Projects.tsx`:

```tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'What it does and why it matters.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/you/project',
    live: 'https://your-project.com',
    gradient: '...',   // CSS gradient string for the card visual
    pattern: '...',    // CSS background pattern
  },
  // ...
];
```

### Experience

Edit the `experience` array in `src/components/portfolio/Experience.tsx`:

```tsx
const experience = [
  {
    role: 'Senior Engineer',
    company: 'Acme Corp',
    period: '2022 – Present',
    bullets: [
      'Built X that improved Y by Z%',
      // ...
    ],
  },
  // ...
];
```

### Skills

Edit the `skills` array in `src/components/portfolio/Skills.tsx`. Icons come from [`react-icons/si`](https://react-icons.github.io/react-icons/icons/si/) (Simple Icons):

```tsx
import { SiReact, SiTypescript } from 'react-icons/si';

const skills = [
  { icon: SiReact,      label: 'React'      },
  { icon: SiTypescript, label: 'TypeScript' },
  // ...
];
```

### Social links

Update the `href` values in `src/components/portfolio/Footer.tsx` and `src/components/portfolio/Nav.tsx`:

```tsx
{ href: 'https://github.com/your-handle',   icon: SiGithub,   label: 'GitHub'   },
{ href: 'https://linkedin.com/in/you',       icon: SiLinkedin, label: 'LinkedIn' },
```

### Resume link

In `src/components/portfolio/Nav.tsx`, find the **Resume** button and replace `#contact` with your PDF URL:

```tsx
<a href="/resume.pdf" target="_blank">Resume</a>
```

Drop `resume.pdf` into the `public/` folder so Vite serves it automatically.

---

## 🎨 Changing the Theme

All colours are CSS custom properties in `src/index.css`.

- **`:root { … }`** — light mode tokens
- **`.dark { … }`** — dark mode tokens

Change any `hsl(…)` value there and the whole site updates instantly.

---

## 🌍 Deployment

### Vercel (recommended — zero config)

```bash
# Install the CLI once
npm i -g vercel

# From the portfolio directory
cd artifacts/portfolio
vercel
```

Set the **build command** to `pnpm build` and the **output directory** to `dist`.

### Netlify

Drag-and-drop the `dist/` folder into [app.netlify.com](https://app.netlify.com/drop), or:

```bash
pnpm build
netlify deploy --prod --dir dist
```

### GitHub Pages

```bash
pnpm build
# Then push the dist/ folder to your gh-pages branch
```

Or use the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package:

```bash
pnpm add -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
pnpm run build && pnpm run deploy
```

---

## 🛠️ Tech Stack

| Library | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18 | UI framework |
| [Vite](https://vitejs.dev) | 5 | Dev server & bundler |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 11 | Animations & transitions |
| [Radix UI](https://www.radix-ui.com) | various | Accessible UI primitives |
| [react-icons](https://react-icons.github.io) | 5 | Tech stack icons (Simple Icons) |
| [lucide-react](https://lucide.dev) | latest | UI icons (sun, moon, menu…) |
| [wouter](https://github.com/molefrog/wouter) | 3 | Lightweight client-side router |

---

## 📄 License

MIT — do whatever you like with it. Attribution appreciated but not required.

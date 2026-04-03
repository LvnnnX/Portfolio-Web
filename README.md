# 🧑‍💻 Portfolio — Pande Gede Dani Wismagatha

A personal portfolio website for a Data Scientist & ML Engineer. Built with Next.js 16, React 19, and Tailwind CSS v4 — featuring a dark, warm aesthetic with amber accents, animated backgrounds, and smooth interactions.

> 🌐 **Live Demo**: [Deployed on Vercel](https://portfolio-web-five-woad.vercel.app/?section=hero)

---

## ✨ Features

- **Section-based navigation** — Switch between Profile, Projects, and Experiences with URL-synced state
- **3D tilt photo effect** — Interactive hero image that responds to mouse movement
- **Vertical timeline nav** — Floating left-side navigation with active state indicators
- **Poker card photo gallery** — Horizontal scrollable image cards in the Experiences section
- **Dynamic project pages** — Each project has its own case-study detail page at `/project/[slug]`
- **Fully responsive** — Desktop timeline nav + mobile bottom navigation
- **Animated tech background** — Gradient orbs, grid overlay, and subtle motion effects

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Fonts** | Geist Sans + Geist Mono + Inter (via `next/font`) |
| **Linting** | ESLint with `eslint-config-next` |
| **Compiler** | React Compiler (Babel plugin) |

---

## 📁 Project Structure

```
.
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles, theme vars, animations
│   ├── layout.js                 # Root layout + font + metadata setup
│   ├── page.js                   # Main landing page (nav + sections)
│   └── project/
│       └── [slug]/
│           └── page.js           # Dynamic project detail pages
│
├── components/                   # Reusable React components
│   ├── Experiences.jsx           # Career timeline + photo gallery
│   ├── Hero.jsx                  # Profile intro + 3D tilt photo
│   └── Projects.jsx              # Featured project cards grid
│
├── public/                       # Static assets
│   └── images/
│       ├── hero_img.jpg          # Main profile photo
│       ├── pr1-full.png          # Project preview images (full)
│       ├── pr1-tb.png            # Project preview images (thumbnail)
│       ├── work_1/ – work_7/     # Experience gallery photos
│       └── *.jpg                 # Additional image assets
│
├── eslint.config.mjs             # ESLint configuration
├── jsconfig.json                 # Path aliases (@/*)
├── next.config.mjs               # Next.js config (React Compiler)
├── package.json                  # Dependencies + scripts
├── postcss.config.mjs            # Tailwind CSS PostCSS plugin
└── README.md                     # You are here 📍
```

---

## 📄 File Guide

### 🏗 App Directory — Pages & Layout

| File | Purpose |
|---|---|
| **`app/layout.js`** | Root HTML structure. Sets up Google Fonts (Geist Sans, Geist Mono, Inter) as CSS variables, page metadata (title, description, Open Graph), and wraps all pages. |
| **`app/globals.css`** | The design system. Contains CSS variables for colors, the animated tech gradient background, glassmorphism utilities, keyframe animations (fade-in, slide-up, glow, timeline pulse), 3D tilt styles, and poker card scroll behavior. |
| **`app/page.js`** | The main landing page. Manages section state (`hero`, `projects`, `experiences`), renders the left-side vertical timeline navigation, mobile bottom nav, and composes the Hero, Projects, and Experiences components. |
| **`app/project/[slug]/page.js`** | Dynamic route for individual project detail pages. Each project gets its own URL like `/project/fruit-ninja-bot`. |

### 🧩 Components — UI Building Blocks

| File | Purpose |
|---|---|
| **`components/Hero.jsx`** | The introductory profile section. Contains the name/title, bio text, skill badges, social links (LinkedIn, GitHub), a "More About Me" CTA button, and the 3D tilt portrait photo with floating badges. |
| **`components/Projects.jsx`** | The projects showcase. Features a scrolling marquee header, a 3-column responsive grid of project cards with hover overlays, and links to each project's detail page. |
| **`components/Experiences.jsx`** | The career timeline. Left side lists all experiences as hoverable items; right side shows a sticky detail card with role, company, period, description, and skills. Below that is a horizontal "poker card" photo gallery for each experience. |

### ⚙️ Configuration Files

| File | Purpose |
|---|---|
| **`package.json`** | Project metadata, dependency list, and scripts (`dev`, `build`, `start`, `lint`). |
| **`next.config.mjs`** | Next.js configuration. Enables the React Compiler via Babel plugin for optimized renders. |
| **`eslint.config.mjs`** | ESLint setup with Next.js core web vitals rules and repository-specific ignores. |
| **`jsconfig.json`** | Configures the `@/*` path alias for cleaner imports. |
| **`postcss.config.mjs`** | Enables `@tailwindcss/postcss` — the Tailwind CSS v4 PostCSS plugin. |

### 🖼 Public Assets

| Path | Contents |
|---|---|
| **`public/images/hero_img.jpg`** | Main profile photo displayed in the Hero section. |
| **`public/images/pr*-full.png`** | Full-size preview images for featured projects. |
| **`public/images/pr*-tb.png`** | Thumbnail versions of project previews. |
| **`public/images/work_1/` – `work_7/`** | Photo galleries for each experience entry in the timeline. |
| **`public/images/*.jpg`** | Additional general-purpose image assets. |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** (comes with Node.js)

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads as you edit files.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create a production-optimized build |
| `npm run start` | Run the production server (after build) |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Design System

The portfolio uses a cohesive dark theme with warm tones:

| Token | Value | Usage |
|---|---|---|
| Background | `#0c0c0c` | Page background |
| Foreground | `#e8e6e3` | Primary text |
| Accent | `#d4a574` | Amber — buttons, active states, highlights |
| Card BG | `#151515` | Card surfaces |
| Card Border | `#2a2a28` | Subtle card borders |
| Muted Text | `#6b6560` | Secondary/descriptive text |

All colors are defined as CSS custom properties in `app/globals.css` for easy theming.

---

## 🏗 How It Works

1. **Section Navigation** — The homepage uses URL query params (`?section=hero`) to track the active section. Clicking a nav dot updates the URL and swaps the visible component.
2. **Desktop Nav** — A floating vertical timeline on the left with dot indicators, active segment lines, and labels.
3. **Mobile Nav** — A fixed bottom bar with dot indicators for touch-friendly navigation.
4. **Project Pages** — Each project card links to `/project/[slug]`, a dynamic route that renders a full case-study page.
5. **Styling** — Tailwind CSS v4 with custom utilities in `globals.css` for animations, glassmorphism, and the tech gradient background.

---

## 📝 Notes

- Fonts are loaded via `next/font` — no external requests, no layout shift.
- The app is fully responsive with breakpoints for mobile, tablet, and desktop.
- The React Compiler is enabled for automatic render optimization.
- Images in `public/` are served statically and referenced directly.

---

## 📚 Want to Extend This Project?

Good starting points:
- **Add a new section** → Create a component in `components/`, import it in `app/page.js`, and add a nav item.
- **Add a new project** → Add an entry to the `projectList` array in `components/Projects.jsx` and create a matching detail page.
- **Change the theme** → Edit the CSS variables in `app/globals.css`.
- **Add a new experience** → Add an entry to the `experiences` array in `components/Experiences.jsx`.

---


# Portfolio Web

A personal portfolio built with Next.js and React. The site presents a polished profile page, selected projects, and experience highlights with a dark, modern visual style.

## Overview

This repository is organized as a small Next.js App Router project. The main landing page is composed from reusable React components, and the individual project pages are served through a dynamic route.

The design leans on a warm dark palette, animated background effects, and large typography to keep the experience focused on the content while still feeling visually distinctive.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS via `@import "tailwindcss"`
- ESLint with Next.js core web vitals rules
- Google Fonts through `next/font`

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── project/
│       └── [slug]/
│           └── page.js
├── components/
│   ├── Experiences.jsx
│   ├── Hero.jsx
│   └── Projects.jsx
├── public/
│   └── images/
│       ├── hero_img.jpg
│       ├── 1.jpg
│       ├── DSCF5041 copy.jpg
│       ├── DSCF5073 copy.jpg
│       ├── DSCF5142 copy.jpg
│       ├── pr1-full.png
│       ├── pr1-tb.png
│       ├── pr2-full.png
│       ├── pr2-tb.png
│       ├── pr3-full.png
│       ├── pr3-tb.png
│       ├── work_1/
│       ├── work_2/
│       ├── work_3/
│       ├── work_4/
│       ├── work_5/
│       ├── work_6/
│       └── work_7/
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## File Guide

### Root configuration files

- [package.json](package.json) defines the project metadata, dependencies, and scripts for development, building, starting, and linting.
- [next.config.mjs](next.config.mjs) holds the Next.js configuration. This project enables the React Compiler here.
- [eslint.config.mjs](eslint.config.mjs) configures ESLint with Next.js core web vitals rules and repository-specific ignores.
- [jsconfig.json](jsconfig.json) sets the `@/*` path alias so imports can stay short and readable.
- [postcss.config.mjs](postcss.config.mjs) enables the Tailwind CSS PostCSS plugin.
- [README.md](README.md) is this project guide.

### App directory

- [app/layout.js](app/layout.js) defines the root HTML structure, global metadata, and font setup for the site.
- [app/globals.css](app/globals.css) contains global styles, theme variables, the animated background, utility classes, and shared motion rules.
- [app/page.js](app/page.js) is the main landing page. It manages section navigation and composes the hero, projects, and experiences sections.
- [app/project/[slug]/page.js](app/project/%5Bslug%5D/page.js) renders the dynamic project detail pages for each selected project.

### Components directory

- [components/Hero.jsx](components/Hero.jsx) renders the introductory profile section, skills badges, social links, and the tilted portrait card.
- [components/Projects.jsx](components/Projects.jsx) shows the featured project cards and links each card to its dynamic detail page.
- [components/Experiences.jsx](components/Experiences.jsx) displays the career timeline, experience details, and related photo gallery.

### Public assets

- [public/images/hero_img.jpg](public/images/hero_img.jpg) is the main profile image used in the hero section.
- [public/images/1.jpg](public/images/1.jpg) and the `DSCF*.jpg` files are additional image assets available for reuse.
- [public/images/pr1-full.png](public/images/pr1-full.png), [public/images/pr2-full.png](public/images/pr2-full.png), and [public/images/pr3-full.png](public/images/pr3-full.png) are the large preview images for the featured projects.
- [public/images/pr1-tb.png](public/images/pr1-tb.png), [public/images/pr2-tb.png](public/images/pr2-tb.png), and [public/images/pr3-tb.png](public/images/pr3-tb.png) are thumbnail versions of those project visuals.
- [public/images/work_1/](public/images/work_1), [public/images/work_2/](public/images/work_2), [public/images/work_3/](public/images/work_3), [public/images/work_4/](public/images/work_4), [public/images/work_5/](public/images/work_5), [public/images/work_6/](public/images/work_6), and [public/images/work_7/](public/images/work_7) store supporting images for the experience timeline.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run start` runs the production server after a build.
- `npm run lint` checks the code with ESLint.

## How The Site Is Organized

- The homepage uses a section-based layout with Hero, Projects, and Experiences content.
- The Projects section links to dynamic routes under `/project/[slug]` for full case-study style pages.
- Images and static media live in `public/images` so they can be referenced directly from the app.
- Shared visual styling and motion behavior are centralized in [app/globals.css](app/globals.css).

## Notes

- The repository uses a dark, warm palette with amber accents for a cohesive portfolio look.
- Fonts are loaded through `next/font` and exposed as CSS variables in the root layout.
- The app is designed to be responsive, with different navigation patterns for desktop and mobile.

## Learn More

If you want to extend this project, the best starting points are the main landing page in [app/page.js](app/page.js), the reusable UI in [components/](components), and the shared styles in [app/globals.css](app/globals.css).

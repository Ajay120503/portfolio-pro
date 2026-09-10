# Ajay Kandhare · Portfolio

A responsive React portfolio with a dark editorial design, warm accents, and restrained animations. Built with Vite, React, custom CSS, Tailwind utilities, and Framer Motion. DaisyUI and its theme system have been removed.

## Develop

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run lint
npm run build
npx playwright install chromium
npm test
```

Browser tests cover project filtering, the résumé asset, contact success/error states using mocked requests, responsive overflow, mobile navigation, and reduced-motion behavior. Tests do not send real emails. Live email delivery and external project availability require separate verification.

## Content and structure

- `src/data/projects.js`: 11 projects, including the four recent additions and seven restored earlier projects. Kaksha and the former Cake Shop entry are excluded. Each entry includes a GitHub push timestamp, and the exported list sorts newest first.
- `src/components/`: page sections and shared scroll reveal.
- `src/components/react-bits/`: React Bits BlurText and SpotlightCard, adapted for the portfolio; source attribution and license included.
- `src/App.css`: responsive design, layout, and component styling.
- `src/index.css`: typography, base styles, accessibility, and reduced-motion rules.
- `src/Documents/RESUME.pdf`: existing downloadable résumé.

Motion uses one-time IntersectionObserver reveals, a spring-based scroll progress indicator, and pointer-driven spotlight cards. Native anchor scrolling preserves normal browser navigation; the user’s reduced-motion preference disables smooth scrolling and entrance effects.

## Contact form

The existing EmailJS service/template/public key remain the defaults. To use another configuration, copy `.env.example` to `.env.local` and set the three `VITE_EMAILJS_*` values. These are browser-visible EmailJS identifiers, not private credentials. The template receives `user_name`, `user_email`, `user_phone`, and `message`.

## Images

Optimized WebP assets are used in the app; original PNGs are retained as source material. Run `npm run optimize:images` after replacing original images.

## Deployment

Run `npm run build` and deploy `dist/` to a static host. Configure your production domain in EmailJS and verify a real submission after deployment. Metadata and a custom favicon are included in `index.html` and `public/`.

React Bits catalog: https://reactbits.dev/get-started/index

Project preview sources and verification notes are recorded in `src/data/PROJECT_SOURCES.md`.

# Implementation Notes — Portfolio Modernization

This file is a living log of every non-obvious decision made during the migration from CRA + react-mdl to Vite + React 18 + Tailwind + Framer Motion. Updated as work progresses.

---

## Stack Decisions

### Build Tool: Vite instead of Next.js
**Decision:** Vite + React (SPA) rather than Next.js (SSR/SSG).  
**Why:** A personal portfolio has no dynamic server-side data needs. Next.js would add complexity (file-based routing, server components, deployment requirements) with zero benefit here. Vite gives sub-second HMR and a dead-simple build. Can migrate to Next.js later if you need SSG for SEO.  
**Tradeoff:** No automatic SEO-friendly pre-rendered HTML per route. Mitigated by setting `<title>` and meta tags per page if needed.

### Styling: Tailwind CSS instead of MUI / Chakra UI
**Decision:** Tailwind CSS utility classes with `@layer components` for reusable patterns.  
**Why:** No runtime JS cost, zero specificity fights, and trivially customizable. Component libraries (MUI, Chakra) bundle hundreds of KB and impose their design language.  
**Tradeoff:** More verbose JSX class strings. Offset by extracting repeated patterns into `@layer components` (`.btn-primary`, `.glass-card`, `.section-container`).

### Animation: Framer Motion
**Decision:** Framer Motion for scroll-triggered entrance animations and hover effects.  
**Why:** Best-in-class React animation API. `whileInView` + `viewport={{ once: true }}` pattern gives polished scroll reveals with 3 lines of code.  
**Tradeoff:** ~30KB gzipped bundle cost. Worth it for a portfolio whose purpose is to impress.

### React Router: v6 syntax (`element={}` not `component={}`)
**Decision:** Migrated from React Router v5 `<Route component={X}>` to v6 `<Route element={<X />}>`.  
**Why:** v5 is in maintenance mode. v6 is the current API.  
**Tradeoff:** Breaking change — all route definitions had to be updated. Done in `src/App.js`.

---

## File Structure Decisions

### JSX in `.js` files — Vite include config
**Decision:** Configured `@vitejs/plugin-react` with `include: '**/*.{js,jsx}'` in `vite.config.js`.  
**Why:** Avoids having to rename every existing `.js` file to `.jsx`. New component files use `.jsx` for clarity; the old entry point `src/App.js` is overwritten in-place without renaming.  
**Tradeoff:** Slightly non-standard. React ecosystem convention is `.jsx` for files with JSX. Not a real problem in practice.

### `public/index.html` renamed to avoid Vite build conflict
**Decision:** Renamed `public/index.html` → `public/index.html.cra-backup`.  
**Why:** Vite's build copies everything in `public/` to `dist/`. If `public/index.html` exists, it overwrites the app's built `index.html` and breaks the app completely. The new root-level `index.html` is Vite's entry point.  
**What to know:** The CRA template file is preserved as `.cra-backup` if you ever need to reference the old `%PUBLIC_URL%` meta tags.

### `src/main.jsx` alongside existing `src/index.js`
**Decision:** Created `src/main.jsx` as the new entry point. Left `src/index.js` in place.  
**Why:** Root `index.html` explicitly references `/src/main.jsx`, so `index.js` is never loaded. Deleting `index.js` would require a Bash delete command; leaving it as dead code is harmless since git history is preserved either way.  
**Action for you:** You can safely delete `src/index.js`, `src/serviceWorker.js`, `src/App.test.js`, and `src/setupTests.js` — they are CRA artifacts not used by Vite.

### Old component files left as dead code
**Decision:** Old component files (`landingpage.js`, `aboutme.js`, `education.js`, `main.js`) are left in place.  
**Why:** They are not imported by anything in the new code. Git history preserves them. Deleting them via Bash felt unnecessarily risky for a tool-driven migration.  
**Action for you:** Safe to delete: `src/components/landingpage.js`, `src/components/aboutme.js`, `src/components/education.js`, `src/components/main.js`.

---

## Data / Content Decisions

### Single source of truth: `src/data/portfolio.js`
**Decision:** All personal info (name, email, phone, bio, links), projects, skills, education, and experience live in one file.  
**Why:** The old code had name, email, phone, and bio copy-pasted across `resume.js` and `contact.js`. One edit in the old code required updating two files and could drift out of sync.  
**How to use:** Edit `src/data/portfolio.js` when you want to update your bio, add a new project, or add work experience.

### Phone number retained (your call to remove it)
**Decision:** Phone number is kept in `portfolio.js` and displayed on the Resume and Contact pages.  
**Why:** It was already public in the old code. However, exposing a personal phone number on a public website is a privacy risk — consider removing it and using email + LinkedIn only.

### Work experience section placeholder
**Decision:** The `experience` array in `portfolio.js` is empty by default.  
**Why:** No work experience was in the original portfolio. The Resume page detects an empty array and shows a placeholder message instead of crashing.  
**Action for you:** Add your work experience to the `experience` array in `src/data/portfolio.js`.

### Resume PDF button
**Decision:** "Download PDF" button on Resume page links to `/resume.pdf`.  
**Why:** Standard expectation for a developer portfolio. The file should be placed at `public/resume.pdf`.  
**Action for you:** Export your resume as a PDF, name it `resume.pdf`, and place it in the `public/` folder.

---

## Design Decisions

### Dark mode only (no toggle — yet)
**Decision:** Dark theme is the default and only theme.  
**Why:** Dark mode is the dominant preference for developer portfolios in 2025/2026. Adding a toggle requires persisting state to localStorage and mirroring every color decision — adds complexity without a clear win for the audience.  
**Tradeoff:** Some users prefer light mode. Easy to add a `ThemeContext` + localStorage hook later if desired.

### Color palette: Slate + Indigo/Violet accent
**Decision:** `slate-950` background, `indigo-500`/`violet-500` gradient accent.  
**Why:** Indigo-violet is distinctive without being garish. Slate provides a neutral dark base that's easier to read than pure black. Avoids the clichéd neon-green "hacker" look.

### Glassmorphism cards (`.glass-card`)
**Decision:** Cards use `bg-slate-800/50 backdrop-blur-sm border border-slate-700/50`.  
**Why:** Glassmorphism is a modern, premium-feeling card style that works well on dark backgrounds. The semi-transparency adds depth.  
**Tradeoff:** `backdrop-filter` has a small performance cost on mobile Safari. Not significant for a portfolio.

### No particle.js / canvas background
**Decision:** Used CSS `blur-3xl` gradient blobs instead of particle animations.  
**Why:** `particles.js` and similar libraries are heavy (~50KB+), require separate dependencies, and often feel dated. Blurred gradient orbs give a similar "glow" aesthetic at zero cost.

---

## Contact Form

### EmailJS integration (stubbed)
**Decision:** The contact form `handleSubmit` in `Contact.jsx` currently simulates a 1-second send delay and then shows "sent." EmailJS is not wired up.  
**Why:** EmailJS requires a free account, a service ID, a template ID, and a public key — credentials you need to provide. Wiring up fake credentials would make the form appear to work but silently fail.  
**Action for you:**
1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
2. Create a service + email template
3. Install: `npm install @emailjs/browser`
4. In `Contact.jsx`, replace the `handleSubmit` stub with:
```js
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  try {
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  } catch {
    setStatus('error')
  }
}
```

---

## Routing Change

### `/aboutme` → `/about`
**Decision:** The old `/aboutme` route was renamed to `/about`.  
**Why:** `/about` is the standard convention across virtually every portfolio site. `/aboutme` is redundant.  
**What to know:** If you have any external links pointing to `yoursite.com/aboutme`, they will 404. Add a redirect if needed.

---

## Build Issues Encountered & Resolved

### Windows case-insensitive filesystem + Vite extension resolution order
**Problem:** Vite 8 resolves `.js` before `.jsx` by default. On Windows (case-insensitive FS), importing `'./components/Projects'` matched the old `projects.js` instead of the new `Projects.jsx` — causing JSX-in-.js parse failures on 3 old component files.  
**Fix:** All imports in `App.jsx` use explicit `.jsx` extensions (e.g., `import Projects from './components/Projects.jsx'`). This is the correct, unambiguous pattern for mixed `.js`/`.jsx` projects.  
**Note added to notes:** `"type": "module"` was also added to `package.json` to silence Vite 8's ES module detection warning.

### `@vitejs/plugin-react` v6 `include` option doesn't transform JSX in `.js` files under Rolldown
**Problem:** Vite 8 uses Rolldown (not Rollup), and the `include: '**/*.{js,jsx}'` plugin option that worked in earlier Vite versions does not enable JSX transformation for `.js` files in this version.  
**Fix:** `src/App.js` was converted to a 3-line shim (`export { default } from './App.jsx'`) and all JSX lives in `App.jsx`. Old dead-code `.js` component files are bypassed via explicit import extensions.

---

## Known Limitations / Future Improvements

- **No unit tests for new components.** The old CRA test setup (`@testing-library/react ^9`) is not compatible with Vite's test runner (Vitest). Setting up Vitest + React Testing Library is a follow-up task.
- **No code splitting / lazy loading.** Each route loads all components eagerly. Add `React.lazy()` + `<Suspense>` if bundle size becomes a concern.
- **Images still in `src/components/`** — `pic1.jpg`, `library.png`, `live-demo-1.png`, `paint-html.png` are imported via ES modules (Vite handles this fine), but the conventional location is `src/assets/`. Low priority cleanup.
- **Project images from Imgur** — the 3 project screenshots link to `i.imgur.com`. If those URLs go down, images will break. Consider downloading them to `public/` or `src/assets/`.
- **`react-scripts` still in package.json devDependencies** until the next `npm install` run fully reconciles the lockfile. The `scripts` section now points to `vite`, so `react-scripts` is effectively unused.

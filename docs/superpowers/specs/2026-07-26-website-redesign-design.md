# dhakalbinaya.com.np — "Midnight Executive" Redesign

**Date:** 2026-07-26
**Status:** Approved direction (mockup validated via visual companion; user selected "Midnight Executive" and approved the full-page layout)

## Goal

Replace the current student/engineer CV portfolio with a founder-focused personal site. Binaya Dhakal is presented as Founder & CEO of Yanib (the flagship), Creator of Capsify and Solmari, and Founding Engineer at Fluid. The CV material (education, experience, awards, publications) is condensed into a journey timeline and a research section. The look is completely new — no visual carryover from the current site.

## Visual system

- **Palette:** background `#0b0b0d`; raised panels `#101013` / `#0e0e12`; borders `#1a1a1e` (structural) and `#222` (cards); gold accent `#c9a24b`; text `#f4f2ee` (headings), `#b5b2ab` (lead), `#77746e` (body), `#555` (labels).
- **Typography:** Google Fonts — `Space Grotesk` for display/headings (700, tight letter-spacing), `Inter` for body/UI. Uppercase letter-spaced micro-labels for eyebrows and section numbers.
- **Texture:** flat surfaces, thin 1px borders, generous whitespace. No gradients except a barely-visible one on the Yanib flagship panel. No glitch effects, no canvas animations, no carousels.
- **Motion:** scroll-triggered reveals (opacity + small translateY) via `IntersectionObserver`; smooth-scroll nav; gold underline/border hover states. Everything degrades gracefully with JS disabled (content visible by default, reveals are progressive enhancement). Respect `prefers-reduced-motion`.

## Page structure (single scroll)

1. **Nav** — fixed, translucent dark. "BD" gold monogram left; VENTURES / JOURNEY / RESEARCH / CONTACT anchors right. Collapses to a minimal menu on mobile.
2. **Hero** — eyebrow `FOUNDER & CEO · YANIB`; display name "Binaya Dhakal." with gold period; thin gold rule; thesis line "I build software companies."; subline "Shipping infrastructure, private AI, and products people use every day. Founding engineer at Fluid. AI/ML researcher."; CTAs: solid gold `EXPLORE YANIB →` (→ https://www.yanib.dev) and ghost `GET IN TOUCH` (→ #contact).
3. **01 — Ventures**
   - **Yanib flagship panel** (full width): label `FLAGSHIP · FOUNDER & CEO`; `NVIDIA INCEPTION` badge; name + tagline "The shipping layer for software teams."; 2–3 sentence description (AI release notes from commits, QA-reviewed, multi-channel publishing, public shipping profiles); link https://www.yanib.dev; embedded `<yanib-github-profile user="binaydhakal" theme="dark">` widget captioned as dogfooding ("my live shipping feed, powered by Yanib").
   - **Capsify card** (Creator): "Save it. Share it. Open it together." — collaborative capsules of photos, places and notes, sealed until reveal day. iOS · Android. Link https://www.capsify.app.
   - **Solmari card** (Creator): "A second brain that never leaves your phone." — private, offline, on-device AI; no account, no servers. iOS. Link https://www.solmari.app.
   - **Fluid strip** (full width, compact): `CURRENTLY` label; "Founding Engineer · AI Software Engineer at Fluid"; live "● ACTIVE" marker; link https://www.fluid.app.
4. **02 — Journey** — sparse left-border timeline, reverse chronological:
   - `2026 — PRESENT` · **Founded Yanib · Founder & CEO** — live since March 2026 · NVIDIA Inception Program · alongside shipping Capsify and Solmari.
   - `2024 — PRESENT` · **Founding Engineer, Fluid** — AI Software Engineer; began contributing to Fluid in 2021 during the Danphe years, moved to working on it directly full-time in 2024.
   - `2024 — 2026` · **M.S. Data Science, University of New Haven** — Research Assistant · Provost's Scholarship (75%, paid stipend) · VAEs & dimensionality reduction on biological and business data.
   - `2021 — 2024` · **Senior Software Engineer, Danphe Software Labs** — full-stack & applied ML; cyber-attack detection with SVM/CNN/RNN & NLP; where the Fluid work began.
   - `2016 — 2021` · **B.E. Computer Engineering** — TU Merit Scholarship ×3 · CTF competition winner · national #2 Rubik's cube speedsolver.
   - **No geography narrative** anywhere ("from Pokhara…", "two continents", etc. are excluded). Institution names appear only as factual affiliations.
5. **03 — Research** — two publication cards: "Effects of Sudarshan Kriya Yoga on the stress and self-esteem of medical doctors" (2023, DOI link → https://doi.org/10.4103/0973-6131.105935) and "Fracture Detection with Transformers (DETR)" (SUBMITTED). One-line writing list: Markov Decision Processes · Activation Functions · DETR explained (plain text, no links — original articles have no URLs on the old site).
6. **Contact** — centered: "Let's build something." with gold period; mailto binaydhakal35@gmail.com; row: LINKEDIN (https://www.linkedin.com/in/dhakalbinay/) · GITHUB (https://github.com/binaydhakal) · RESUME (assets/download/resume.pdf). No contact form (the old one had no backend).
7. **Footer** — "© 2026 Binaya Dhakal" · "dhakalbinaya.com.np".

## Facts (source of truth for copy)

| Item | Value |
|---|---|
| Yanib | Founder & CEO · https://www.yanib.dev · live March 2026 · NVIDIA Inception |
| Capsify | Creator · https://www.capsify.app · iOS + Android |
| Solmari | Creator · https://www.solmari.app · iOS |
| Fluid | Founding Engineer / AI Software Engineer · https://www.fluid.app · contributed since 2021 via Danphe, direct full-time from 2024, ongoing |
| Email | binaydhakal35@gmail.com |

## Technical approach

- **Files:** rewrite `index.html`; new `assets/css/site.css`; new `assets/js/site.js`. No frameworks, no jQuery, no build step.
- **Keep:** Google Analytics tag (`G-X3T2V9K1VE`); Yanib SDK script (`https://www.yanib.dev/sdk.js`); `assets/logo/favicon.png` as favicon; `assets/download/resume.pdf`; `assets/images/about/binaya-profile.jpg` stays on disk (unused by the new layout, kept for future use); `CNAME`.
- **Delete:** all old CSS (`bootstrap`, `bootsnav`, `font-awesome`, `flaticon`, `animate`, `owl.*`, `style.css`, `responsive.css`), all old JS (`jquery`, `bootstrap`, `bootsnav`, `jquery.sticky`, `progressbar`, `jquery.appear`, `owl.carousel`, `custom`, `neural-network`, `typing-effect`, `navbar`), `assets/fonts/` (font-awesome files), `assets/logo/NN2.png` (623 KB, replaced by favicon.png).
- **Icons:** small inline SVGs (external-link arrow, social marks). No icon fonts.
- **SEO/meta:** title "Binaya Dhakal — Founder & CEO of Yanib"; meta description; Open Graph + Twitter card tags; canonical `https://dhakalbinaya.com.np/`.
- **Widget resilience:** `yanib-github-profile` is a custom element — until the SDK registers it, it renders nothing; the section is designed so the page looks complete even if the widget fails to load.
- **Responsive:** single-column stack under 720px; Capsify/Solmari cards stack; nav collapses; type scales down via `clamp()`.
- **`.gitignore`:** add `.superpowers/` (visual-companion artifacts).

## Testing

- Serve locally (`python3 -m http.server`) and verify all sections, anchors, and hover states in desktop and ~375px mobile width.
- Verify every external link resolves (yanib.dev, capsify.app, solmari.app, fluid.app, DOI, LinkedIn, GitHub, resume PDF).
- Verify no references remain to deleted assets (grep `index.html` for deleted filenames).
- Verify reduced-motion and JS-disabled rendering (content visible without reveals).

## Out of scope

- Contact form backend, blog, multi-page architecture, CMS.
- Any change to domain/DNS/GitHub Pages setup (already handled: CNAME file exists).
- Redesign of the resume PDF.

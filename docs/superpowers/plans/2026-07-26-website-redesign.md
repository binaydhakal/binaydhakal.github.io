# Midnight Executive Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the CV-style portfolio at the repo root with a founder-focused single-page site ("Midnight Executive" design) per `docs/superpowers/specs/2026-07-26-website-redesign-design.md`.

**Architecture:** One static `index.html` + one stylesheet (`assets/css/site.css`) + one small script (`assets/js/site.js`). No frameworks, no build step. All old Bootstrap/jQuery-era assets are deleted. Site deploys unchanged via GitHub Pages (CNAME already present).

**Tech Stack:** Vanilla HTML/CSS/JS, Google Fonts (Space Grotesk + Inter), Google Analytics gtag, Yanib SDK web component.

## Global Constraints

- Palette: bg `#0b0b0d`; panels `#101013`/`#0e0e12`; borders `#1a1a1e`/`#222226`; gold `#c9a24b`; text `#f4f2ee`/`#b5b2ab`/`#77746e`/`#555559`.
- Fonts: `Space Grotesk` (500,700) display, `Inter` (400,500,600) body. No icon fonts — inline SVG only.
- NO geography narrative anywhere (no "Pokhara", "New Haven" as story framing; "University of New Haven" appears only as institution name).
- Exact facts: Yanib = Founder & CEO, live March 2026, NVIDIA Inception, https://www.yanib.dev · Capsify = Creator, iOS+Android, https://www.capsify.app · Solmari = Creator, iOS, https://www.solmari.app · Fluid = Founding Engineer / AI Software Engineer, since 2021 via Danphe then direct from 2024, https://www.fluid.app · Email binaydhakal35@gmail.com.
- Keep: GA tag `G-X3T2V9K1VE`, Yanib SDK `https://www.yanib.dev/sdk.js`, `assets/logo/favicon.png`, `assets/download/resume.pdf`, `assets/images/about/binaya-profile.jpg`, `CNAME`.
- Content must be visible with JS disabled; animations respect `prefers-reduced-motion`.
- Commit after each task. Commits are LOCAL ONLY — never push. End commit messages with `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`. Never add a "Generated with Claude Code" footer.
- Working dir: `/Users/binaydhakal/Desktop/binaydhakal.github.io`.

---

### Task 1: Cleanup + foundation (head, nav, hero, footer, CSS tokens, JS)

**Files:**
- Create: `.gitignore`
- Create: `assets/css/site.css`
- Create: `assets/js/site.js`
- Rewrite: `index.html`
- Delete: `assets/css/*` (old files), `assets/js/*` (old files), `assets/fonts/`, `assets/logo/NN2.png`, `assets/logo/logo.png`

**Interfaces:**
- Produces: `index.html` containing marker comment `<!-- ===== sections inserted below ===== -->` inside `<main>` — Tasks 2–4 insert sections at this marker. `site.css` ends with marker `/* ===== section styles appended below ===== */` — Tasks 2–4 append styles there. JS hooks: any element with `data-reveal` gets class `is-visible` on scroll into view; `.nav` gets `.open` toggled by `.nav-toggle` button.

- [ ] **Step 1: Commit pre-existing untracked files (CNAME, spec)**

```bash
cd /Users/binaydhakal/Desktop/binaydhakal.github.io
git add CNAME docs/superpowers/specs/2026-07-26-website-redesign-design.md docs/superpowers/plans/2026-07-26-website-redesign.md
git commit -m "Add CNAME for dhakalbinaya.com.np and redesign spec/plan

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

- [ ] **Step 2: Create `.gitignore`**

```gitignore
.superpowers/
.DS_Store
```

- [ ] **Step 3: Delete old assets**

```bash
cd /Users/binaydhakal/Desktop/binaydhakal.github.io
git rm -r --quiet assets/css assets/js assets/fonts
git rm --quiet assets/logo/NN2.png assets/logo/logo.png
mkdir -p assets/css assets/js
ls assets/
```

Expected: `assets/` now contains `css/ js/ download/ images/ logo/`; `assets/logo/` keeps only `favicon.png`.

- [ ] **Step 4: Write new `index.html` (complete file)**

```html
<!doctype html>
<html lang="en">
<head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-X3T2V9K1VE"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-X3T2V9K1VE');
	</script>
	<script src="https://www.yanib.dev/sdk.js" defer></script>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Binaya Dhakal — Founder &amp; CEO of Yanib</title>
	<meta name="description" content="Binaya Dhakal — Founder & CEO of Yanib, creator of Capsify and Solmari, founding engineer at Fluid. Building shipping infrastructure, private AI, and products people use every day.">
	<link rel="canonical" href="https://dhakalbinaya.com.np/">

	<meta property="og:type" content="website">
	<meta property="og:title" content="Binaya Dhakal — Founder & CEO of Yanib">
	<meta property="og:description" content="Building shipping infrastructure, private AI, and products people use every day.">
	<meta property="og:url" content="https://dhakalbinaya.com.np/">
	<meta property="og:image" content="https://dhakalbinaya.com.np/assets/images/about/binaya-profile.jpg">
	<meta name="twitter:card" content="summary">

	<link rel="shortcut icon" type="image/png" href="assets/logo/favicon.png">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="assets/css/site.css">
	<script>document.documentElement.classList.add('js');</script>
	<script src="assets/js/site.js" defer></script>
</head>

<body>
	<header class="nav">
		<div class="container nav-inner">
			<a class="monogram" href="#top">BD</a>
			<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">MENU</button>
			<nav aria-label="Main">
				<ul class="nav-links">
					<li><a href="#ventures">Ventures</a></li>
					<li><a href="#journey">Journey</a></li>
					<li><a href="#research">Research</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main id="top">
		<!-- ===== hero ===== -->
		<section class="hero">
			<div class="container">
				<p class="eyebrow" data-reveal>Founder &amp; CEO · Yanib</p>
				<h1 data-reveal>Binaya<br>Dhakal<span class="accent">.</span></h1>
				<hr class="gold-rule" data-reveal>
				<p class="thesis" data-reveal>I build software companies.</p>
				<p class="hero-sub" data-reveal>Shipping infrastructure, private AI, and products people use every day. Founding engineer at Fluid. AI/ML researcher.</p>
				<div class="cta-row" data-reveal>
					<a class="btn btn-solid" href="https://www.yanib.dev" target="_blank" rel="noopener">Explore Yanib <span aria-hidden="true">→</span></a>
					<a class="btn btn-ghost" href="#contact">Get in touch</a>
				</div>
			</div>
		</section>

		<!-- ===== sections inserted below ===== -->

	</main>

	<footer class="footer">
		<div class="container footer-inner">
			<span>© 2026 Binaya Dhakal</span>
			<span>dhakalbinaya.com.np</span>
		</div>
	</footer>
</body>
</html>
```

- [ ] **Step 5: Write `assets/css/site.css` (complete file)**

```css
/* ============================================================
   dhakalbinaya.com.np — "Midnight Executive"
   ============================================================ */

:root {
	--bg: #0b0b0d;
	--panel: #101013;
	--panel-2: #0e0e12;
	--border: #1a1a1e;
	--border-card: #222226;
	--gold: #c9a24b;
	--text-hi: #f4f2ee;
	--text-lead: #b5b2ab;
	--text-body: #77746e;
	--text-label: #555559;
	--font-display: 'Space Grotesk', -apple-system, sans-serif;
	--font-body: 'Inter', -apple-system, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: 80px; }

body {
	background: var(--bg);
	color: var(--text-body);
	font-family: var(--font-body);
	font-size: 16px;
	line-height: 1.7;
	-webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }

.container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
.accent { color: var(--gold); }

/* ---------- labels ---------- */
.eyebrow {
	font-family: var(--font-display);
	color: var(--gold);
	font-size: 12px;
	letter-spacing: .35em;
	text-transform: uppercase;
}
.section-label {
	color: var(--text-label);
	font-size: 11px;
	letter-spacing: .3em;
	text-transform: uppercase;
	font-weight: 400;
	margin-bottom: 48px;
}

/* ---------- nav ---------- */
.nav {
	position: fixed;
	top: 0; left: 0; right: 0;
	z-index: 100;
	background: rgba(11, 11, 13, .82);
	-webkit-backdrop-filter: blur(12px);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid var(--border);
}
.nav-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 64px;
}
.monogram {
	font-family: var(--font-display);
	font-weight: 700;
	color: var(--gold);
	letter-spacing: .3em;
	font-size: 15px;
}
.nav-links { display: flex; gap: 38px; }
.nav-links a {
	font-size: 11px;
	letter-spacing: .22em;
	text-transform: uppercase;
	color: #8a8a8f;
	transition: color .2s ease;
}
.nav-links a:hover { color: var(--gold); }
.nav-toggle {
	display: none;
	background: none;
	border: 1px solid var(--border-card);
	color: #8a8a8f;
	font-family: var(--font-body);
	font-size: 10px;
	letter-spacing: .22em;
	padding: 7px 12px;
	cursor: pointer;
}

/* ---------- hero ---------- */
.hero { padding: 190px 0 130px; }
.hero h1 {
	font-family: var(--font-display);
	color: var(--text-hi);
	font-size: clamp(56px, 9vw, 104px);
	line-height: .98;
	letter-spacing: -.03em;
	font-weight: 700;
	margin-top: 20px;
}
.gold-rule {
	width: 48px;
	height: 1px;
	background: var(--gold);
	border: 0;
	margin: 34px 0;
}
.thesis {
	font-family: var(--font-display);
	color: var(--text-lead);
	font-size: clamp(18px, 2.4vw, 22px);
	font-weight: 500;
}
.hero-sub { max-width: 470px; margin-top: 12px; font-size: 15px; }
.cta-row { display: flex; gap: 14px; margin-top: 44px; flex-wrap: wrap; }
.btn {
	display: inline-block;
	font-size: 11px;
	font-weight: 600;
	letter-spacing: .18em;
	text-transform: uppercase;
	padding: 14px 24px;
	transition: transform .2s ease, filter .2s ease, border-color .2s ease, color .2s ease;
}
.btn-solid { background: var(--gold); color: #0b0b0d; }
.btn-solid:hover { filter: brightness(1.1); transform: translateY(-2px); }
.btn-ghost { border: 1px solid #333338; color: var(--text-lead); }
.btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

/* ---------- sections ---------- */
.section { padding: 110px 0; border-top: 1px solid var(--border); }

/* ---------- footer ---------- */
.footer { border-top: 1px solid var(--border); padding: 24px 0; }
.footer-inner {
	display: flex;
	justify-content: space-between;
	font-size: 11px;
	color: #4a4a4f;
	letter-spacing: .06em;
}

/* ---------- reveal animation (JS-gated, motion-safe) ---------- */
.js [data-reveal] {
	opacity: 0;
	transform: translateY(18px);
	transition: opacity .7s ease, transform .7s ease;
}
.js [data-reveal].is-visible { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
	html { scroll-behavior: auto; }
	.js [data-reveal] { opacity: 1; transform: none; transition: none; }
}

/* ---------- mobile ---------- */
@media (max-width: 720px) {
	.nav-toggle { display: block; }
	.nav-links {
		display: none;
		position: absolute;
		top: 64px; left: 0; right: 0;
		flex-direction: column;
		gap: 22px;
		background: rgba(11, 11, 13, .97);
		border-bottom: 1px solid var(--border);
		padding: 26px 24px;
	}
	.nav.open .nav-links { display: flex; }
	.hero { padding: 150px 0 90px; }
	.section { padding: 80px 0; }
}

/* ===== section styles appended below ===== */
```

- [ ] **Step 6: Write `assets/js/site.js` (complete file)**

```js
// dhakalbinaya.com.np — reveal-on-scroll + mobile nav

(function () {
	'use strict';

	// Reveal on scroll
	var revealed = document.querySelectorAll('[data-reveal]');
	if ('IntersectionObserver' in window) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
		revealed.forEach(function (el) { io.observe(el); });
	} else {
		revealed.forEach(function (el) { el.classList.add('is-visible'); });
	}

	// Mobile nav toggle
	var nav = document.querySelector('.nav');
	var toggle = document.querySelector('.nav-toggle');
	if (nav && toggle) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
		nav.querySelectorAll('.nav-links a').forEach(function (link) {
			link.addEventListener('click', function () {
				nav.classList.remove('open');
				toggle.setAttribute('aria-expanded', 'false');
			});
		});
	}
})();
```

- [ ] **Step 7: Verify the page serves and has no stale references**

```bash
cd /Users/binaydhakal/Desktop/binaydhakal.github.io
grep -cE 'bootstrap|jquery|owl|font-awesome|flaticon|bootsnav|neural-network|typing-effect|progressbar|animate\.css|style\.css|responsive\.css|NN2' index.html
```

Expected: `0`

```bash
python3 -m http.server 8043 >/dev/null 2>&1 &
sleep 1
curl -s http://localhost:8043/ | grep -c 'Binaya'
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8043/assets/css/site.css
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8043/assets/js/site.js
kill %1
```

Expected: a non-zero count, then `200`, `200`.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Redesign foundation: Midnight Executive shell (nav, hero, footer), remove legacy assets

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Ventures section (Yanib flagship, Capsify/Solmari cards, Fluid strip)

**Files:**
- Modify: `index.html` (insert at `<!-- ===== sections inserted below ===== -->`)
- Modify: `assets/css/site.css` (append at `/* ===== section styles appended below ===== */`)

**Interfaces:**
- Consumes: markers from Task 1; `data-reveal` hook; `.section`, `.section-label`, `.container` classes.
- Produces: `section#ventures`; keeps both markers in place for Task 3.

- [ ] **Step 1: Insert ventures HTML**

In `index.html`, replace the line `		<!-- ===== sections inserted below ===== -->` with:

```html
		<!-- ===== 01 ventures ===== -->
		<section id="ventures" class="section">
			<div class="container">
				<h2 class="section-label" data-reveal>01 — Ventures</h2>

				<article class="flagship" data-reveal>
					<div class="flagship-top">
						<p class="flagship-role">Flagship · Founder &amp; CEO</p>
						<p class="badge">NVIDIA Inception</p>
					</div>
					<h3>Yanib</h3>
					<p class="tagline">The shipping layer for software teams.</p>
					<p class="desc">AI-drafted release notes straight from your commits — QA-reviewed against the actual code, then published everywhere at once: GitHub, Slack, Discord, email. Public shipping profiles that make developer work visible. Live since March 2026.</p>
					<p><a class="link-gold" href="https://www.yanib.dev" target="_blank" rel="noopener">yanib.dev <span aria-hidden="true">→</span></a></p>
					<div class="widget-frame">
						<yanib-github-profile user="binaydhakal" theme="dark"></yanib-github-profile>
						<p class="widget-caption">My live shipping feed — powered by Yanib.</p>
					</div>
				</article>

				<div class="venture-grid">
					<article class="venture-card" data-reveal>
						<p class="card-role">Creator</p>
						<h4>Capsify</h4>
						<p class="card-tagline">Save it. Share it. Open it together.</p>
						<p class="card-desc">Collaborative capsules of photos, places, notes and songs — built with friends, sealed until reveal day.</p>
						<p class="platforms">iOS · Android &nbsp;&nbsp;<a class="link-gold" href="https://www.capsify.app" target="_blank" rel="noopener">capsify.app <span aria-hidden="true">→</span></a></p>
					</article>
					<article class="venture-card" data-reveal>
						<p class="card-role">Creator</p>
						<h4>Solmari</h4>
						<p class="card-tagline">A second brain that never leaves your phone.</p>
						<p class="card-desc">Private, offline, on-device AI — chat grounded in your own notes. No account, no servers, no tracking.</p>
						<p class="platforms">iOS &nbsp;&nbsp;<a class="link-gold" href="https://www.solmari.app" target="_blank" rel="noopener">solmari.app <span aria-hidden="true">→</span></a></p>
					</article>
				</div>

				<a class="current" href="https://www.fluid.app" target="_blank" rel="noopener" data-reveal>
					<span class="current-left">
						<span class="current-label">Currently</span>
						<span class="current-role">Founding Engineer · AI Software Engineer at Fluid</span>
					</span>
					<span class="pulse"><span class="pulse-dot" aria-hidden="true"></span> Active</span>
				</a>
			</div>
		</section>

		<!-- ===== sections inserted below ===== -->
```

- [ ] **Step 2: Append ventures CSS**

In `assets/css/site.css`, replace `/* ===== section styles appended below ===== */` with:

```css
/* ---------- ventures: flagship ---------- */
.flagship {
	border: 1px solid #2e2a20;
	background: linear-gradient(135deg, #131311 0%, #0f0f11 100%);
	padding: 44px;
}
.flagship-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
}
.flagship-role {
	font-family: var(--font-display);
	color: var(--gold);
	font-size: 10px;
	letter-spacing: .28em;
	text-transform: uppercase;
}
.badge {
	border: 1px solid #2f4f2f;
	color: #7fb77f;
	font-size: 10px;
	letter-spacing: .18em;
	text-transform: uppercase;
	padding: 5px 11px;
}
.flagship h3 {
	font-family: var(--font-display);
	color: var(--text-hi);
	font-size: clamp(30px, 4vw, 42px);
	font-weight: 700;
	margin-top: 20px;
	line-height: 1.1;
}
.tagline { color: #9a968e; font-size: 17px; margin-top: 4px; }
.flagship .desc { max-width: 580px; margin-top: 18px; font-size: 14.5px; }
.flagship .link-gold { display: inline-block; margin-top: 20px; }
.link-gold {
	color: var(--gold);
	font-size: 13px;
	letter-spacing: .08em;
}
.link-gold span { display: inline-block; transition: transform .2s ease; }
.link-gold:hover span { transform: translateX(4px); }
.widget-frame {
	margin-top: 30px;
	border: 1px solid #232320;
	padding: 20px;
	background: rgba(0, 0, 0, .25);
}
.widget-caption {
	margin-top: 12px;
	color: var(--text-label);
	font-size: 11px;
	letter-spacing: .08em;
}

/* ---------- ventures: cards ---------- */
.venture-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	margin-top: 16px;
}
.venture-card {
	border: 1px solid var(--border-card);
	padding: 32px;
	display: flex;
	flex-direction: column;
	transition: border-color .25s ease, transform .25s ease;
}
.venture-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.card-role {
	color: #8a8a8f;
	font-size: 10px;
	letter-spacing: .28em;
	text-transform: uppercase;
}
.venture-card h4 {
	font-family: var(--font-display);
	color: var(--text-hi);
	font-size: 22px;
	font-weight: 700;
	margin-top: 12px;
}
.card-tagline { color: var(--text-lead); font-size: 13.5px; margin-top: 4px; font-weight: 500; }
.card-desc { font-size: 13px; margin-top: 10px; }
.platforms {
	margin-top: auto;
	padding-top: 22px;
	color: #8a8a8f;
	font-size: 11px;
	letter-spacing: .14em;
	text-transform: uppercase;
}
.platforms .link-gold { text-transform: none; letter-spacing: .08em; font-size: 12px; }

/* ---------- ventures: current strip ---------- */
.current {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
	border: 1px solid #1e1e24;
	background: var(--panel-2);
	padding: 20px 28px;
	margin-top: 16px;
	transition: border-color .25s ease;
}
.current:hover { border-color: var(--gold); }
.current-label {
	font-family: var(--font-display);
	color: var(--gold);
	font-size: 10px;
	letter-spacing: .28em;
	text-transform: uppercase;
	margin-right: 14px;
}
.current-role { color: #ddd; font-size: 14px; font-weight: 600; }
.pulse {
	color: #4a7a4a;
	font-size: 10px;
	letter-spacing: .18em;
	text-transform: uppercase;
	display: inline-flex;
	align-items: center;
	gap: 7px;
}
.pulse-dot {
	width: 6px; height: 6px;
	border-radius: 50%;
	background: #4a7a4a;
	animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
	0%, 100% { opacity: 1; }
	50% { opacity: .3; }
}
@media (prefers-reduced-motion: reduce) {
	.pulse-dot { animation: none; }
}
@media (max-width: 720px) {
	.flagship { padding: 30px 24px; }
	.venture-grid { grid-template-columns: 1fr; }
	.current { flex-direction: column; align-items: flex-start; }
}

/* ===== section styles appended below ===== */
```

- [ ] **Step 3: Verify**

```bash
cd /Users/binaydhakal/Desktop/binaydhakal.github.io
grep -c 'id="ventures"' index.html
grep -c 'yanib-github-profile' index.html
grep -cE 'www\.(yanib\.dev|capsify\.app|solmari\.app|fluid\.app)' index.html
```

Expected: `1`, `1`, then a count ≥ 4 (yanib appears in head SDK + hero CTA too).

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/site.css
git commit -m "Add ventures section: Yanib flagship, Capsify and Solmari cards, Fluid strip

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Journey timeline + Research section

**Files:**
- Modify: `index.html` (insert at `<!-- ===== sections inserted below ===== -->`)
- Modify: `assets/css/site.css` (append at `/* ===== section styles appended below ===== */`)

**Interfaces:**
- Consumes: markers left by Task 2; `.section`, `.section-label`, `.link-gold`, `data-reveal`.
- Produces: `section#journey`, `section#research`; keeps both markers for Task 4.

- [ ] **Step 1: Insert journey + research HTML**

In `index.html`, replace the line `		<!-- ===== sections inserted below ===== -->` with:

```html
		<!-- ===== 02 journey ===== -->
		<section id="journey" class="section">
			<div class="container">
				<h2 class="section-label" data-reveal>02 — Journey</h2>
				<ol class="timeline">
					<li data-reveal>
						<p class="t-date now">2026 — Present</p>
						<h3>Founded Yanib · Founder &amp; CEO</h3>
						<p>Live since March 2026 · NVIDIA Inception Program · alongside shipping Capsify and Solmari.</p>
					</li>
					<li data-reveal>
						<p class="t-date">2024 — Present</p>
						<h3>Founding Engineer, Fluid</h3>
						<p>AI Software Engineer — began contributing to Fluid in 2021 during the Danphe years, building on it directly full-time since 2024.</p>
					</li>
					<li data-reveal>
						<p class="t-date">2024 — 2026</p>
						<h3>M.S. Data Science, University of New Haven</h3>
						<p>Research Assistant · Provost's Scholarship (75%, paid stipend) · VAEs &amp; dimensionality reduction on biological and business data.</p>
					</li>
					<li data-reveal>
						<p class="t-date">2021 — 2024</p>
						<h3>Senior Software Engineer, Danphe Software Labs</h3>
						<p>Full-stack &amp; applied ML — cyber-attack detection with SVM, CNN, RNN &amp; NLP. Where the Fluid work began.</p>
					</li>
					<li data-reveal>
						<p class="t-date">2016 — 2021</p>
						<h3>B.E. Computer Engineering</h3>
						<p>TU Merit Scholarship ×3 · CTF competition winner · national #2 Rubik's cube speedsolver.</p>
					</li>
				</ol>
			</div>
		</section>

		<!-- ===== 03 research ===== -->
		<section id="research" class="section">
			<div class="container">
				<h2 class="section-label" data-reveal>03 — Research</h2>

				<article class="pub-card" data-reveal>
					<div>
						<h3 class="pub-title">Effects of Sudarshan Kriya Yoga on the stress and self-esteem of medical doctors</h3>
						<p class="pub-note">Sentiment analysis with neuro-medical researchers — published.</p>
					</div>
					<p class="pub-meta"><a class="link-gold" href="https://doi.org/10.4103/0973-6131.105935" target="_blank" rel="noopener">2023 · DOI <span aria-hidden="true">↗</span></a></p>
				</article>

				<article class="pub-card" data-reveal>
					<div>
						<h3 class="pub-title">Fracture Detection with Transformers (DETR)</h3>
						<p class="pub-note">Bounding-box prediction on X-ray imagery for medical diagnostics.</p>
					</div>
					<p class="pub-meta pub-status">Submitted</p>
				</article>

				<p class="writing-line" data-reveal>Writing — <span>Markov Decision Processes</span> · <span>Activation Functions</span> · <span>DETR explained</span></p>
			</div>
		</section>

		<!-- ===== sections inserted below ===== -->
```

- [ ] **Step 2: Append journey + research CSS**

In `assets/css/site.css`, replace `/* ===== section styles appended below ===== */` with:

```css
/* ---------- journey timeline ---------- */
.timeline {
	border-left: 1px solid #2a2a2e;
	padding-left: 36px;
	display: flex;
	flex-direction: column;
	gap: 48px;
}
.timeline li { position: relative; }
.timeline li::before {
	content: "";
	position: absolute;
	left: -41px;
	top: 7px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: var(--bg);
	border: 1px solid var(--gold);
}
.t-date {
	font-family: var(--font-display);
	font-size: 11px;
	letter-spacing: .25em;
	text-transform: uppercase;
	color: #8a8a8f;
}
.t-date.now { color: var(--gold); }
.timeline h3 {
	font-family: var(--font-display);
	color: #ddd;
	font-size: 18px;
	font-weight: 600;
	margin-top: 7px;
}
.timeline li > p:last-child { font-size: 13.5px; margin-top: 5px; max-width: 560px; }

/* ---------- research ---------- */
.pub-card {
	border: 1px solid var(--border-card);
	padding: 28px 32px;
	margin-bottom: 14px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 24px;
	flex-wrap: wrap;
	transition: border-color .25s ease;
}
.pub-card:hover { border-color: var(--gold); }
.pub-title {
	font-family: var(--font-display);
	color: #eee;
	font-size: 15.5px;
	font-weight: 600;
	max-width: 560px;
	line-height: 1.45;
}
.pub-note { font-size: 12.5px; margin-top: 8px; }
.pub-meta { font-size: 12px; white-space: nowrap; }
.pub-status {
	color: #8a8a8f;
	letter-spacing: .18em;
	text-transform: uppercase;
	font-size: 10px;
	padding-top: 4px;
}
.writing-line { margin-top: 28px; font-size: 13px; }
.writing-line span { color: #aaaaa4; }

@media (max-width: 720px) {
	.pub-card { flex-direction: column; padding: 24px; }
	.timeline { padding-left: 28px; }
	.timeline li::before { left: -33px; }
}

/* ===== section styles appended below ===== */
```

- [ ] **Step 3: Verify**

```bash
cd /Users/binaydhakal/Desktop/binaydhakal.github.io
grep -c 'id="journey"' index.html
grep -c 'id="research"' index.html
grep -c 'doi.org/10.4103' index.html
grep -ciE 'pokhara|from .*new haven to|two continents' index.html
```

Expected: `1`, `1`, `1`, `0`.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/site.css
git commit -m "Add journey timeline and research sections

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Contact section + final verification

**Files:**
- Modify: `index.html` (replace marker with contact section — marker is removed in this task)
- Modify: `assets/css/site.css` (replace marker with contact styles — marker removed)

**Interfaces:**
- Consumes: markers left by Task 3.
- Produces: finished site; no markers remain.

- [ ] **Step 1: Insert contact HTML (removes marker)**

In `index.html`, replace the line `		<!-- ===== sections inserted below ===== -->` (including the blank line after it, if convenient) with:

```html
		<!-- ===== contact ===== -->
		<section id="contact" class="section contact">
			<div class="container">
				<h2 data-reveal>Let's build something<span class="accent">.</span></h2>
				<p data-reveal><a class="contact-email" href="mailto:binaydhakal35@gmail.com">binaydhakal35@gmail.com</a></p>
				<ul class="contact-links" data-reveal>
					<li><a href="https://www.linkedin.com/in/dhakalbinay/" target="_blank" rel="noopener">LinkedIn</a></li>
					<li><a href="https://github.com/binaydhakal" target="_blank" rel="noopener">GitHub</a></li>
					<li><a href="assets/download/resume.pdf" download>Resume</a></li>
				</ul>
			</div>
		</section>
```

- [ ] **Step 2: Insert contact CSS (removes marker)**

In `assets/css/site.css`, replace `/* ===== section styles appended below ===== */` with:

```css
/* ---------- contact ---------- */
.contact { text-align: center; padding: 150px 0; }
.contact h2 {
	font-family: var(--font-display);
	color: var(--text-hi);
	font-size: clamp(36px, 6vw, 58px);
	font-weight: 700;
	letter-spacing: -.02em;
}
.contact-email {
	display: inline-block;
	margin-top: 20px;
	color: var(--text-lead);
	font-size: 17px;
	transition: color .2s ease;
}
.contact-email:hover { color: var(--gold); }
.contact-links {
	margin-top: 40px;
	display: flex;
	justify-content: center;
	gap: 32px;
	font-size: 11px;
	letter-spacing: .25em;
	text-transform: uppercase;
}
.contact-links a { color: #8a8a8f; transition: color .2s ease; }
.contact-links a:hover { color: var(--gold); }

@media (max-width: 720px) {
	.contact { padding: 100px 0; }
	.contact-links { gap: 20px; flex-wrap: wrap; }
}
```

- [ ] **Step 3: Full verification — structure, no stale refs, no markers**

```bash
cd /Users/binaydhakal/Desktop/binaydhakal.github.io
grep -c 'sections inserted below' index.html assets/css/site.css; echo "---"
grep -oE 'id="(ventures|journey|research|contact)"' index.html
grep -ciE 'pokhara' index.html
ls assets/css assets/js
```

Expected: marker count `0` in both files (grep exits non-zero — that's the pass condition); the four section ids each listed once; `0`; only `site.css` and `site.js` present.

- [ ] **Step 4: Verify all external links resolve**

```bash
for u in https://www.yanib.dev https://www.capsify.app https://www.solmari.app https://www.fluid.app https://doi.org/10.4103/0973-6131.105935 https://www.linkedin.com/in/dhakalbinay/ https://github.com/binaydhakal; do
  printf '%s -> ' "$u"; curl -s -o /dev/null -w '%{http_code}\n' -L --max-time 15 "$u"
done
test -f assets/download/resume.pdf && echo "resume.pdf OK"
test -f assets/logo/favicon.png && echo "favicon OK"
```

Expected: every URL returns `200` (LinkedIn may return `999` — that's LinkedIn's bot-blocking, acceptable); `resume.pdf OK`; `favicon OK`.

- [ ] **Step 5: Serve and eyeball desktop + mobile**

```bash
cd /Users/binaydhakal/Desktop/binaydhakal.github.io
python3 -m http.server 8043
```

Open http://localhost:8043 — check: hero renders with Space Grotesk, gold accents; all four sections present; reveal animations fire on scroll; nav anchors work; at ~375px width the nav collapses to MENU button and cards stack. Leave the server running for the user preview; stop it afterwards.

- [ ] **Step 6: Commit**

```bash
git add index.html assets/css/site.css
git commit -m "Add contact section, complete Midnight Executive redesign

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

## Post-plan (not tasks — user decisions)

- Ask the user to preview at http://localhost:8043 and confirm.
- Ask before pushing to GitHub (push = deploy to GitHub Pages / the live domain).
- Stop the visual-companion server (`scripts/stop-server.sh`) at wrap-up.

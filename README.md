# binaydhakal.github.io

Personal site for Binaya Dhakal — Co-founder of [Yanib](https://www.yanib.dev), creator of [Capsify](https://www.capsify.app) and [Solmari](https://www.solmari.app), founding engineer at [Fluid](https://www.fluid.app), published machine learning researcher.

Live at **[dhakalbinaya.com.np](https://dhakalbinaya.com.np)** — deployed via GitHub Pages from `main`.

[![binaydhakal's releases](https://www.yanib.dev/card/binaydhakal/svg?theme=light&style=default)](https://www.yanib.dev/u/binaydhakal)

## Structure

No build step, no framework, nothing to install.

```
index.html            single page — nav, hero, ventures, journey, research, contact
assets/css/site.css   "Midnight Executive" design system
assets/js/site.js     scroll reveals + mobile nav
CNAME                 custom domain
docs/superpowers/     design spec and implementation plan
```

External runtime pieces: Google Fonts (Space Grotesk + Inter), the Yanib SDK for the live shipping widget, and Google Analytics.

## Local preview

```bash
python3 -m http.server 8043
```

Then open <http://localhost:8043>.

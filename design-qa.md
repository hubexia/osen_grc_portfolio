# Design QA — Osen Osagie GRC Portfolio

**Source visual truth**

- `qa-evidence/reference-desktop.jpg`
- `qa-evidence/reference-mobile.jpg`
- `qa-evidence/reference-project-page.jpg`
- Live reference: `https://jjordan1983.github.io/grc_portfolio/`

**Implementation evidence**

- `qa-evidence/implementation-desktop.jpg`
- `qa-evidence/implementation-mobile.jpg`
- `qa-evidence/implementation-project-page.jpg`
- Combined comparison: `qa-evidence/side-by-side-comparison.jpg`
- Local implementation: `http://localhost:4173/`

**Viewports and normalization**

- Desktop source: 1910 × 2883 pixels, 1910 CSS-pixel viewport width, device scale factor 1.
- Desktop implementation: 1910 × 3194 pixels, 1910 CSS-pixel viewport width, device scale factor 1.
- Mobile source: 390 × 3399 pixels, 390 × 844 CSS viewport, device scale factor 1.
- Mobile implementation: 390 × 4061 pixels, 390 × 844 CSS viewport, device scale factor 1.
- Project source: 1910 × 1022 pixels, desktop CSS viewport, device scale factor 1.
- Project implementation: 1910 × 1457 pixels, desktop CSS viewport, device scale factor 1.
- The full-page heights differ intentionally because Osen's portfolio contains nine project areas and richer project workflow/artifact detail.

**State**

- Public unauthenticated homepage.
- First project detail page.
- Desktop and responsive mobile layout.

**Full-view comparison evidence**

- `qa-evidence/side-by-side-comparison.jpg` places the source and implementation captures together for desktop, mobile, and detail-page review.
- The hero height, main-column width, responsive breakpoint behavior, gradient, white canvas, section rhythm, dividers, button treatment, and footer structure match the reference.
- The implementation adds only client-specific content required by the brief; no new visual system was introduced.

**Focused comparison evidence**

- Hero: both use a 412.594px desktop hero, 80px vertical and 96px horizontal padding, and `linear-gradient(120deg, #155799, #159957)`.
- Main content: both use a 1024px desktop maximum width with 96px horizontal and 32px vertical padding.
- Typography: both resolve to Open Sans, 16px base size, 24px base line height, 35.2px desktop content h1, and 26.4px h2.
- Colors: both use `#606c71` body text, `#159957` headings, `#1e6bb8` links, `#eff0f1` section rules, and a white content canvas.
- Mobile: both use 16px main padding, full-width CTA, 390px layout width, and no horizontal overflow.
- Project page: both retain the hero, centered content column, artifact table, return link, and GitHub Pages footer pattern.

**Findings**

- No P0, P1, or P2 visual or interaction mismatches remain.
- [P3] Full-page height differs from the reference because the client has nine projects and more detailed project evidence. This is an intentional content difference, not design drift.
- [P3] The implementation sets an explicit white body background while the reference body is technically transparent over the browser's default white canvas. The rendered result is visually equivalent and protects the intended light theme.

**Required fidelity surfaces**

- Fonts and typography: passed. Family, weights, sizes, line heights, hierarchy, and wrapping follow the reference rules.
- Spacing and layout rhythm: passed. Hero, content frame, section gaps, rules, table spacing, and mobile padding match.
- Colors and visual tokens: passed. Gradient, heading, text, link, border, and background colors match.
- Image quality and asset fidelity: passed. The reference uses no photographic or illustrative assets; captured emoji markers remain native text glyphs as in the source.
- Copy and content: passed. Source copy is intentionally replaced with Osen Osagie's nine documented GRC projects and verified contact details.

**Interactions tested**

- Homepage to project navigation.
- Project page return-to-home navigation.
- Artifact links resolve to the intended GitHub repository paths.
- All ten local routes returned HTTP 200.
- Browser console checked on desktop and mobile: no warnings or errors.

**Comparison history**

- Pass 1: no actionable P0/P1/P2 differences were found. No visual fixes were required after the side-by-side comparison.

**Implementation checklist**

- [x] Exact Cayman-style light visual system.
- [x] Responsive desktop and 390 × 844 mobile layouts.
- [x] Nine project landing sections.
- [x] Nine project detail pages.
- [x] Public-safe Markdown and CSV artifacts.
- [x] GitHub Pages deployment workflow.
- [x] Internal navigation and route checks.
- [x] Browser console verification.

**Follow-up polish**

- None required for fidelity. Future work can replace sample artifacts with client-approved final documents while preserving the current layout.

final result: passed

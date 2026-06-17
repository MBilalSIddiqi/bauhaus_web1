# Website Summary — Bauhaus Design Collective

A small static, multi-page website with a **Bauhaus-inspired design theme** (geometric shapes, primary colors, bold typography, hard edges). It is a demo/example site — no backend, no real form submission.

## Tech Stack
- **HTML5** — three hand-written pages, no framework
- **CSS3** — single shared stylesheet (`styles.css`) using CSS custom properties (variables), CSS Grid, and Flexbox; page-specific styles inlined in each `<head>`
- **Vanilla JavaScript** — one shared `script.js`, no dependencies
- **Google Fonts** — `Archivo Black` (headings) and `Inter` (body)

## Pages
| File | Title | Purpose |
|------|-------|---------|
| `index.html` | The Manifesto | Landing page — asymmetric hero with geometric shapes (red square, blue circle), a 12-column grid feature section, and a call-to-action block |
| `gallery.html` | The Works | Modular auto-fit grid gallery of 4 fictional "works" (e.g. Modular Housing, Circular Flow, Triadic Ballet), each with a colored shape, description, year, and reference code |
| `contact.html` | The Connection | Contact info panel + a styled contact form (name, email, message) with simulated submission |

## Design System (`styles.css`)
- **Palette:** red `#E53935`, yellow `#FDD835`, blue `#1E88E5`, black `#1A1A1A`, off-white `#F5F5F5`, grey `#E0E0E0`
- **Signature rule:** `border-radius: 0 !important` globally — strictly no rounded corners (one deliberate exception: the hero's blue circle)
- Thick 3px black borders, sticky header nav, bold uppercase styling
- Fully responsive with breakpoints at 900px and 600px, including a mobile hamburger menu

## JavaScript (`script.js`)
- Mobile nav toggle (hamburger menu)
- Smooth scroll for in-page anchor links
- Contact form handler — prevents default submit, shows a "TRANSMITTING..." state, then a confirmation `alert()` and resets the form (no data is actually sent)

## Notes
- Consistent header/nav and footer across all three pages
- Footer marks the site as a **demo created for example purposes only**
- Branded as a fictional "BAUHAUS DESIGN COLLECTIVE" with a sci-fi/industrial copy style (e.g. `SEND_SIGNAL`, `UPLINK_01`, `FORM_FOLLOWS_FUNCTION`)

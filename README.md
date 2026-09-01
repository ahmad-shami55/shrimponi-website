# Shrimponi Website

A mobile-first React website for Shrimponi — built with Vite, React Router, and Framer Motion.

## What's inside

- **Home** — animated hero with floating shrimp, a scroll-driven "Don" character reveal,
  three alternating dish showcase sections (Classic Shrimp / Shrimp Burger / Shrimponi Fillet),
  and an about teaser.
- **Dine In Menu** (`/dine-in`) — category grid → product list with a sticky category filter bar.
  No "add to cart" here, just browsing.
- **Delivery Menu** (`/delivery`) — same browsing experience, plus "+ Add" buttons that push
  items into the cart.
- **Cart** — slide-in drawer (top right cart icon on every page) with quantity controls, a
  branch selector, a checkout form, and a **Place Order via WhatsApp** button that opens
  `wa.me/<branch number>` with the full order pre-filled.
- **About** (`/about`) — brand story, values, and both branch addresses/phone numbers.
- **Location dropdown** — in the navbar, switches the active branch app-wide (also selectable
  again inside the cart in case someone wants to order from the other branch).

All menu content and both branches (Haret Hreik & Aramoun) are already wired in
`src/data/menuData.js` and `src/data/branches.js` — edit those two files any time prices,
items, or branches change; nothing else needs to be touched.

## Design notes

The palette and type system come from the logo: deep navy (`#0d1a33`), shrimp orange
(`#f2602a`), warm cream backgrounds, and a gold accent for "NEW" tags — paired with a bold
poster-style display font (Anton) to lean into the "family business" personality already in
your menu (Don Shrimponi, Gambino Burger, Luciano). No stock photography is used anywhere —
dish "images" are custom SVG emblems in the brand ring/seal motif from the logo, so everything
stays consistent even without real food photography.

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a static site into `dist/`. That folder is deployable as-is to any static host:

- **Vercel / Netlify**: point the build command to `npm run build` and the output directory to
  `dist`.
- **Any static host (S3, GitHub Pages, cPanel, etc.)**: just upload the contents of `dist/`.

The app uses `HashRouter`, so it works correctly even on hosts that don't support custom
server-side rewrites for client-side routing (URLs will look like `yoursite.com/#/delivery`).
If your host does support rewrites and you'd prefer clean URLs (`yoursite.com/delivery`), swap
`HashRouter` for `BrowserRouter` in `src/main.jsx` and configure a catch-all rewrite to
`index.html` on your host.

## Adding real product photos later

Right now menu items intentionally have no photos (per the brief) and the three homepage
showcase sections use custom SVG emblems instead of stock photography. If you want to drop in
real photography later:

- Menu cards: add an `image` field to entries in `menuData.js` and render an `<img>` in
  `ProductCard.jsx`.
- Homepage showcases: swap the `<DishIcon />` call in `ProductShowcase.jsx` for an `<img>` tag.

## Updating branches / WhatsApp numbers

Edit `src/data/branches.js`. The `whatsapp` field must be digits only, country code first, no
`+` or spaces (e.g. `96181803965`) — that's what gets used to build the `wa.me` order link.

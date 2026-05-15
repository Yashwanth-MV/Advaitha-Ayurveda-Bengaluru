# Aloe — Alternative Medicine Website Clone

A pixel-perfect Next.js 14 replica of the Aloe Framer template, built with React, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
# 1. Extract the archive
tar -xzf aloe-clone.tar.gz
cd aloe-clone

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open http://localhost:3000

---

## npm install command

```bash
npm install
```

## npm run dev command

```bash
npm run dev
```

---

## Full Dependency List

```json
{
  "dependencies": {
    "next": "^14.2.35",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^12.x",
    "lenis": "^1.x"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^3",
    "autoprefixer": "^10",
    "postcss": "^8",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.x"
  }
}
```

---

## Project Structure

```
aloe-clone/
├── app/
│   ├── layout.tsx              Root layout with Lenis smooth scroll
│   ├── page.tsx                Homepage (all sections assembled)
│   ├── globals.css             Global styles, Google Fonts, CSS vars
│   ├── about-us/page.tsx
│   ├── blog/page.tsx
│   ├── contact-us/page.tsx
│   ├── our-services/page.tsx
│   ├── our-staff/page.tsx
│   └── pricing/page.tsx
├── components/
│   ├── Navbar.tsx              Sticky nav with scroll transparency
│   ├── Hero.tsx                Full-screen hero with parallax + stats
│   ├── ImageTicker.tsx         Auto-scrolling image strip
│   ├── MarqueeStrip.tsx        Text marquee ticker (fwd + reverse)
│   ├── NetworkSection.tsx      2-col feature section with image
│   ├── CTABanner.tsx           Full-bleed dark CTA with bg image
│   ├── ServicesSection.tsx     3-col service cards
│   ├── ProcessSection.tsx      4-step process cards
│   ├── StaffSection.tsx        4-col team member cards
│   ├── Testimonial.tsx         Quote with portrait image
│   ├── GallerySection.tsx      Masonry photo gallery + quote card
│   ├── PricingSection.tsx      3-tier pricing with toggle
│   ├── BlogSection.tsx         3-col blog post cards
│   ├── FAQSection.tsx          Accordion FAQ with live image swap
│   ├── FinalCTA.tsx            Split dark/image final CTA
│   ├── Footer.tsx              Full footer with newsletter
│   ├── InnerHero.tsx           Reusable inner page hero (parallax)
│   ├── ContactSection.tsx      Contact form + info sidebar
│   └── SmoothScroll.tsx        Lenis wrapper
├── lib/
│   └── animations.ts           Shared Framer Motion variant types
└── public/
    ├── images/
    ├── videos/
    └── icons/
```

---

## Features Implemented

**Design**
- Exact color palette: #fdfcf8 cream, #5d8a4f sage green, #1c1f1a dark
- Playfair Display serif + DM Sans sans-serif typography system
- Consistent border radii, shadows, spacing
- All original images served from Framer CDN

**Animations**
- Scroll-triggered fade-up reveals with useInView
- Staggered children animations on all card grids
- Hero parallax background on scroll
- Hero opacity fade on scroll (useScroll + useTransform)
- Auto-scrolling image ticker (CSS animation)
- Bidirectional marquee text strip
- Image hover scale/zoom on all cards
- FAQ accordion with height animation + live image swap
- Mobile menu with staggered link reveals
- Navbar scroll transparency state
- Lenis smooth scroll

**Pages:** /, /about-us, /our-staff, /our-services, /pricing, /blog, /contact-us

**Responsive:** Mobile, tablet, desktop breakpoints with hamburger menu

---

## Asset Notes

All images load directly from Framer CDN (framerusercontent.com) — same URLs as the original site. For production, download images and host them in /public/images/ for full reliability.

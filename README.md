# Kennis Wiser Consulting Website

A modern, responsive website for Kennis Wiser Consulting—strategic advisory for PE funds, VC funds, and operating companies.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Language:** TypeScript/React

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── Sectors.tsx         # Sectors section
│   ├── Expertise.tsx       # Expertise/stats section
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Design System

- **Primary Color:** Dark Navy (#1a1a3e)
- **Accent Color:** Purple (#7c3aed)
- **Typography:** System sans-serif, bold headings
- **Responsive:** Mobile-first approach

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[username]/kenniswiser-consulting.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Select GitHub repository
   - Configure domain: `kenniswiserconsulting.com`
   - Deploy

3. **Configure Custom Domain:**
   - In Vercel settings, add custom domain
   - Update DNS in Cloudflare with Vercel's nameservers

## Features

- ✅ Modern, clean design matching Kennis Capital aesthetic
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast performance (Core Web Vitals optimized)
- ✅ SEO optimized with metadata
- ✅ Dark theme with accent colors
- ✅ Smooth scrolling and animations
- ✅ Easy content updates

## Content Sections

1. **Hero** - Main value proposition
2. **Services** - Six core advisory services
3. **Sectors** - Six industry verticals
4. **Expertise** - Proven capabilities and stats
5. **CTA** - Contact and conversion section
6. **Footer** - Navigation and legal links

## Customization

### Updating Content

All content is defined in component files:
- Edit headlines/descriptions in each component
- Update sector list in `Sectors.tsx`
- Modify services in `Services.tsx`
- Change contact info in `CTA.tsx` and `Footer.tsx`

### Colors

Update theme colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* dark blue shades */ },
  accent: '#7c3aed', // purple
}
```

### Fonts

Update fonts in `globals.css`:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
```

## Performance

- Next.js optimization (code splitting, lazy loading)
- Tailwind CSS purging (only used styles)
- Image optimization via Next.js Image component
- Static generation for fast loads

## SEO

- Meta tags in `layout.tsx`
- Open Graph support
- Sitemap-ready structure
- Mobile-friendly design

## Support

For updates or changes:
1. Edit component files locally
2. Test with `npm run dev`
3. Push to GitHub
4. Vercel auto-deploys on merge

## License

All rights reserved © 2024 Kennis Wiser Consulting

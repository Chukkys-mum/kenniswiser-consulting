# Deployment Guide - Kennis Wiser Consulting Website

## Quick Start Deployment to Vercel

### Step 1: Prepare for GitHub

```bash
# Initialize git in the project directory
git init
git add .
git commit -m "Initial commit: Kennis Wiser Consulting website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create repository: `kenniswiser-consulting`
3. Follow GitHub's instructions to push local code

```bash
git remote add origin https://github.com/[your-username]/kenniswiser-consulting.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Visit https://vercel.com
2. Sign up or log in with GitHub account
3. Click "New Project"
4. Select `kenniswiser-consulting` repository
5. Configure:
   - **Project Name:** kenniswiser-consulting
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Click "Deploy"

### Step 4: Configure Custom Domain

#### In Vercel Dashboard:
1. Go to Project → Settings → Domains
2. Add custom domain: `kenniswiserconsulting.com`
3. Vercel shows 2 options:
   - **Option A:** Change nameservers at Cloudflare (recommended)
   - **Option B:** Add CNAME records

#### In Cloudflare:
1. Go to DNS settings for kenniswiserconsulting.com
2. **Option A (Nameservers):**
   - Remove current nameservers
   - Add Vercel nameservers:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`

   **OR**

2. **Option B (CNAME):**
   - Add CNAME record:
     - Name: `www`
     - Content: `cname.vercel-dns.com`
   - Add A record for root:
     - Name: `@`
     - Content: Vercel IP (shown in dashboard)

### Step 5: SSL/TLS Certificate

- Vercel automatically issues free SSL certificates
- Wait 24-48 hours for DNS propagation
- Status dashboard shows when domain is verified

### Step 6: Environment Variables (if needed)

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add any `.env` variables (from `.env.example`)
3. Re-deploy to apply changes

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in browser

# Build for production
npm run build

# Test production build locally
npm start
```

## Continuous Deployment

- **Auto-deploy on push:** Every push to main branch auto-deploys
- **Preview URLs:** Pull requests get preview deployments
- **Rollback:** Easy rollback to previous deployments in Vercel dashboard

## DNS Records Summary

### Cloudflare Setup for kenniswiserconsulting.com

**Option 1: Nameserver Change (Recommended)**
```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
```

**Option 2: CNAME Records**
```
Type: CNAME
Name: www
Content: cname.vercel-dns.com
TTL: Auto

Type: A
Name: @ (root)
Content: [Vercel IP Address]
TTL: Auto
```

**Email Forwarding (if needed)**
```
Type: MX
Priority: 10
Content: route1.mx.cloudflare.net

(Add route2, route3 for failover)
```

## Redirects from kenniswiser.com and kenniswiser.co.uk

These domains forward to kenniswiserconsulting.com:
- **kenniswiser.com** → Forwards to http://kenniswiserconsulting.com
- **kenniswiser.co.uk** → Forwards to http://kenniswiserconsulting.com

No additional DNS configuration needed — Squarespace forwards are already in place.

## Post-Deployment Checklist

- [ ] Domain registered and pointing to Vercel
- [ ] SSL certificate active (green lock icon)
- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] CTA buttons functional
- [ ] Contact email link works
- [ ] Mobile responsive design verified
- [ ] Performance checked (Lighthouse scores)
- [ ] SEO metadata correct

## Troubleshooting

### Domain Not Resolving
1. Wait 24-48 hours for DNS propagation
2. Check Vercel DNS configuration
3. Verify nameservers in Cloudflare

### SSL Certificate Issues
1. Ensure domain is properly configured
2. Wait for certificate provisioning (24-48 hrs)
3. Check Vercel dashboard for errors

### Build Failures
1. Check build logs in Vercel dashboard
2. Verify Node version (18+)
3. Clear build cache and redeploy

## Support & Updates

### Future Content Updates
1. Edit files in GitHub
2. Commit changes: `git commit -m "Update content"`
3. Push to main: `git push origin main`
4. Vercel auto-deploys (2-5 minutes)

### Analytics (Optional)
Add Google Analytics:
1. Create GA4 property at google.com/analytics
2. Add ID to `.env.local`: `NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXX`
3. Redeploy

## Performance Optimization

Website is optimized for speed:
- Next.js server-side rendering
- Tailwind CSS minification
- Vercel Edge caching
- Automatic image optimization

Check performance: https://pagespeed.web.dev/

## Security

- SSL/TLS encryption (automatic)
- No sensitive data in client-side code
- Environment variables secured on Vercel
- DDoS protection via Vercel & Cloudflare

## Questions?

Refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

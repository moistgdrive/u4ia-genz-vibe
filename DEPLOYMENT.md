# GitHub Pages Deployment Guide

This guide will help you deploy your u4ia landing page to GitHub Pages with custom domain support.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js and npm installed
- (Optional) A custom domain

## Configuration

The site is configured to work with a **custom domain** at the root path (`/`). The `vite.config.ts` file is set to:

```typescript
base: '/',
```

This configuration works for:
- ✅ Custom domains (e.g., `u4ia.site`)
- ✅ User/org GitHub Pages (e.g., `username.github.io`)
- ✅ Project pages with custom domain configured

**Note:** If you need to deploy to a project page WITHOUT a custom domain (e.g., `username.github.io/repo-name/`), you'll need to update the base path in `vite.config.ts` to match your repository name.

## Setup Steps

### 1. Push Your Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/your-repo-name.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** > **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source:** GitHub Actions
4. Save the changes

### 3. Configure Custom Domain (Optional)

If you want to use a custom domain like `u4ia.site`:

#### On GitHub:
1. In **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `u4ia.site`)
3. Save the changes
4. Wait for DNS check to complete (may take a few minutes)
5. Enable **Enforce HTTPS** once DNS is verified

#### On Your DNS Provider (e.g., Cloudflare):

For an **apex domain** (e.g., `u4ia.site`):
1. Add **A records** pointing to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
2. Set to **DNS only** (not proxied) to avoid issues

For a **subdomain** (e.g., `www.u4ia.site`):
1. Add a **CNAME record** pointing to `username.github.io`
2. Set to **DNS only** (not proxied)

**Important:** If you have email forwarding or other DNS records (MX, TXT, etc.), leave them unchanged.

### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Trigger on every push to the `main` branch
- Install dependencies
- Build your project
- Deploy to GitHub Pages

You can monitor the deployment progress in the **Actions** tab of your repository.

### 5. Access Your Site

After deployment completes, your site will be available at:

**With custom domain:**
```
https://u4ia.site
```

**GitHub Pages URL (redirects to custom domain if configured):**
```
https://username.github.io/repo-name/
```

## Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

This will build and deploy your site using the `gh-pages` package.

## Troubleshooting

### Blank White Screen

If you see a blank white screen:
1. Check browser console for errors (F12)
2. Verify the `base` path in `vite.config.ts` matches your deployment:
   - Custom domain or user pages: `base: '/'`
   - Project pages: `base: '/repo-name/'`
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Assets Not Loading (404 errors)

If CSS, JS, or images aren't loading:
1. Check the Network tab in browser DevTools
2. Verify asset URLs are correct for your deployment type
3. Ensure the build was successful in GitHub Actions
4. Check that the `base` path in `vite.config.ts` is correct

### Custom Domain Not Working

If your custom domain shows errors:
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check GitHub Pages settings for DNS verification status
4. Ensure **Enforce HTTPS** is enabled after DNS verification
5. Try setting DNS to **DNS only** (not proxied) on Cloudflare

### DNS Records and Email

If you have email forwarding:
- **Don't change** MX, TXT, or email-related DNS records
- Only add/modify A or CNAME records for web hosting
- Your email will continue to work normally

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy
```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── public/
│   ├── .nojekyll            # Prevents Jekyll processing
│   └── 404.html             # Handles SPA routing on GitHub Pages
├── src/                     # Source code
├── vite.config.ts           # Vite configuration with base path
└── package.json             # Dependencies and scripts
```

## Security

- The site uses HTTPS when **Enforce HTTPS** is enabled in GitHub Pages
- All API keys and secrets should be stored as GitHub Secrets
- Never commit sensitive data to the repository

## Support

For issues or questions:
- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Check GitHub Actions logs for build errors

## License

This project configuration is provided as-is for deployment purposes.

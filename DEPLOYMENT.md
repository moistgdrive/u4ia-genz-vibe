# GitHub Pages Deployment Guide

This guide will help you deploy your u4ia landing page to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js and npm installed

## Setup Steps

### 1. Update Repository Name in Configuration

**IMPORTANT:** Before deploying, you need to update the repository name in `vite.config.ts`:

```typescript
base: process.env.GITHUB_PAGES ? '/your-repo-name/' : '/',
```

Replace `'your-repo-name'` with your actual GitHub repository name. For example:
- If your repo is `https://github.com/username/u4ia-landing`, use `'/u4ia-landing/'`
- If you're using a custom domain or user/org pages (username.github.io), use `'/'`

### 2. Push Your Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/your-repo-name.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** > **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source:** GitHub Actions
4. Save the changes

### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Trigger on every push to the `main` branch
- Install dependencies
- Build your project with the correct base path
- Deploy to GitHub Pages

You can also manually trigger the deployment:
1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages"
3. Click "Run workflow"

### 5. Access Your Site

After the workflow completes (usually 1-2 minutes), your site will be available at:
- **Repository pages:** `https://username.github.io/your-repo-name/`
- **Custom domain:** Configure in Settings > Pages > Custom domain

## Manual Deployment (Alternative Method)

If you prefer to deploy manually using the gh-pages package:

### Install Dependencies

```bash
npm install
```

### Deploy

```bash
npm run deploy
```

This will:
1. Build your project with the GitHub Pages configuration
2. Push the build output to the `gh-pages` branch
3. GitHub will automatically serve from this branch

**Note:** For manual deployment, ensure GitHub Pages is set to deploy from the `gh-pages` branch in Settings > Pages.

## Troubleshooting

### Routes not working (404 errors)

The project includes a `404.html` file that redirects all routes to `index.html`, allowing React Router to handle routing. This is already configured.

### Images/assets not loading

Make sure:
1. The `base` path in `vite.config.ts` matches your repository name
2. All asset imports use relative paths or the `@/` alias

### Custom Domain

To use a custom domain:
1. Create a `CNAME` file in the `public/` directory with your domain name
2. Configure your DNS provider to point to GitHub Pages
3. Enable HTTPS in Settings > Pages

## Environment Variables

For production environment variables, you can add them in:
- GitHub repository Settings > Secrets and variables > Actions
- Reference them in the workflow file under `env:`

## Build Locally to Test

Before deploying, test the production build locally:

```bash
npm run build:gh-pages
npm run preview
```

This will build with the GitHub Pages configuration and preview it locally.

## Tech Stack Reference

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Client-side routing

## Support

For issues related to:
- **Build errors:** Check the Actions tab for detailed logs
- **Routing issues:** Ensure the `base` path is correctly configured
- **GitHub Pages:** See [GitHub Pages documentation](https://docs.github.com/en/pages)



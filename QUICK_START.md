# Quick Start - Deploy to GitHub Pages

## 🚀 5-Minute Deployment

### Step 1: Update Repository Name (REQUIRED!)

Open `vite.config.ts` and change line 9:

```typescript
base: process.env.GITHUB_PAGES ? '/your-repo-name/' : '/',
```

Replace `your-repo-name` with your **actual GitHub repository name**.

**Examples:**
- Repo: `github.com/yourusername/email-landing` → use `'/email-landing/'`
- User/Org page: `github.com/yourusername/yourusername.github.io` → use `'/'`

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Done! 🎉

Your site will automatically deploy and be live at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## ✨ Tech Stack Summary

| Category | Technology |
|----------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5.4 |
| UI Library | shadcn/ui (Radix UI) |
| Styling | Tailwind CSS 3.4 |
| Routing | React Router DOM 6 |
| State | TanStack Query |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for GitHub Pages
npm run build:gh-pages

# Preview production build
npm run preview

# Deploy manually (alternative to GitHub Actions)
npm run deploy
```

## 🔄 Auto-Deploy

Every time you push to the `main` branch, GitHub Actions will:
1. ✅ Build your site
2. ✅ Deploy to GitHub Pages
3. ✅ Update your live site

Check deployment status in the **Actions** tab of your repository.

## 📖 Need More Details?

See `DEPLOYMENT.md` for comprehensive deployment instructions and troubleshooting.

---

**Note:** The `.github/workflows/deploy.yml` file handles automatic deployment. You don't need to do anything extra!



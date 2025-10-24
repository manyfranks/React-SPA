# Client Repository Setup Guide

This guide will help you create a new GitHub repository for the client and prepare it for Vercel deployment.

## 📋 Overview

You'll be creating a **standalone repository** for the client that contains the production-ready Next.js website. This will be separate from the development repository.

## 🔧 Step 1: Create New GitHub Repository

### Via GitHub Website (Recommended)

1. **Go to GitHub**
   - Visit [github.com](https://github.com)
   - Log into the client's GitHub account (or your organization account)

2. **Create New Repository**
   - Click the `+` icon in the top-right corner
   - Select "New repository"

3. **Configure Repository**
   - **Repository name:** `indigenous-iron-website` (or client's preferred name)
   - **Description:** "Production website for Indigenous Iron Construction - Built with Next.js 14"
   - **Visibility:** 
     - Choose **Private** (recommended for client projects)
     - Or **Public** if open-source
   - **Initialize repository:**
     - ❌ DO NOT check "Add a README file" (we already have one)
     - ❌ DO NOT add .gitignore (we already have one)
     - ❌ DO NOT choose a license (unless client requests)
   - Click **"Create repository"**

4. **Copy Repository URL**
   - After creation, you'll see setup instructions
   - Copy the HTTPS URL: `https://github.com/USERNAME/REPO-NAME.git`
   - Keep this handy for the next step

## 🚀 Step 2: Push Code to New Repository

You have two options:

### Option A: Push Current Branch (Recommended)

If you want to push just the `feature/nextjs-migration` branch:

```bash
# Add the new repository as a remote
git remote add client https://github.com/USERNAME/REPO-NAME.git

# Push the branch to the new repository as main
git push client feature/nextjs-migration:main

# Verify it was pushed
git remote -v
```

### Option B: Mirror Entire Repository

If you want to copy all branches and history:

```bash
# Create a bare clone of the current repository
cd ..
git clone --bare React-SPA temp-indigenous-iron

# Navigate into the bare repository
cd temp-indigenous-iron

# Mirror-push to the new repository
git push --mirror https://github.com/USERNAME/REPO-NAME.git

# Clean up the temporary bare repository
cd ..
rm -rf temp-indigenous-iron

# Clone the new repository to continue working
git clone https://github.com/USERNAME/REPO-NAME.git indigenous-iron-website
cd indigenous-iron-website
```

## ✅ Step 3: Verify Repository Setup

1. **Check GitHub Repository**
   - Visit your new repository on GitHub
   - Verify these files are present:
     - ✅ README.md (comprehensive documentation)
     - ✅ DEPLOYMENT.md (Vercel deployment guide)
     - ✅ package.json (with Next.js scripts)
     - ✅ .gitignore (with Next.js ignores)
     - ✅ app/ directory (all pages and components)
     - ✅ public/ directory (images and assets)
     - ✅ docs/ directory (project documentation)

2. **Verify Build Configuration**
   - Check `package.json` contains:
     ```json
     {
       "scripts": {
         "dev": "next dev",
         "build": "next build",
         "start": "next start"
       },
       "engines": {
         "node": ">=18.0.0"
       }
     }
     ```

3. **Check Dependencies**
   - Verify `sharp` is in dependencies (for image optimization)
   - Verify `next`, `react`, `react-dom` versions are correct

## 🌐 Step 4: Connect to Vercel

Now that your repository is ready, connect it to Vercel:

1. **Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with the client's account (or your account)

2. **Import the Repository**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - If you don't see your repository:
     - Click "Adjust GitHub App Permissions"
     - Grant access to the new repository
     - Refresh the list
   - Select your new repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `next build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
   
4. **Environment Variables** (if needed)
   - Currently none required
   - Add if you need analytics, API keys, etc.

5. **Deploy!**
   - Click "Deploy"
   - Wait for the build to complete (2-5 minutes)
   - Vercel will provide a deployment URL

6. **Add Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your domain (e.g., `indigenousironconstruction.com`)
   - Configure DNS as instructed by Vercel
   - SSL will be automatically configured

## 📊 Step 5: Post-Deployment Verification

After successful deployment:

1. **Test the Live Site**
   ```
   https://your-project.vercel.app
   ```
   - Visit the deployment URL
   - Test all pages load correctly
   - Verify navigation works
   - Check images display properly
   - Test on mobile devices

2. **Run Lighthouse Audit**
   - Open Chrome DevTools
   - Go to "Lighthouse" tab
   - Run audit for:
     - Performance
     - Accessibility
     - Best Practices
     - SEO
   - Target: 90+ on all metrics

3. **Check Build Logs**
   - In Vercel dashboard, view deployment logs
   - Verify all 27 pages built successfully
   - Check for any warnings

4. **Enable Analytics** (Optional)
   - Vercel Analytics (free tier available)
   - Google Analytics (add tracking ID)
   - Monitor traffic and performance

## 🔄 Ongoing Development Workflow

Once connected to Vercel:

```bash
# Make changes locally
git checkout -b feature/new-feature

# Commit changes
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create pull request on GitHub
# Vercel will create a preview deployment automatically

# After review, merge to main
# Vercel will automatically deploy to production
```

## 🔒 Security Checklist

- [ ] Repository is private (if client project)
- [ ] No sensitive data in git history
- [ ] Environment variables set in Vercel (not in code)
- [ ] .gitignore includes `.env.local`
- [ ] Dependencies are up to date
- [ ] Branch protection rules enabled (optional)

## 📞 Handoff to Client

Provide the client with:

1. **Repository Access**
   - Add client as collaborator/admin on GitHub
   - Provide repository URL

2. **Vercel Access**
   - Add client as team member on Vercel
   - Provide login credentials (if created for them)

3. **Documentation**
   - README.md (in repository root)
   - DEPLOYMENT.md (deployment guide)
   - docs/ folder (comprehensive project docs)

4. **Credentials Needed from Client**
   - Domain registrar access (for DNS setup)
   - Any API keys for integrations
   - Analytics tracking IDs (if applicable)

## 🎯 Success Criteria

Your client repository is ready when:

- ✅ New GitHub repository created
- ✅ Code pushed to `main` branch
- ✅ README.md and DEPLOYMENT.md present
- ✅ Connected to Vercel
- ✅ Successful production build
- ✅ Live deployment URL working
- ✅ Custom domain configured (if applicable)
- ✅ SSL/HTTPS enabled
- ✅ All 27 pages accessible
- ✅ Lighthouse score 90+
- ✅ Documentation provided to client

## 💡 Tips

- **Keep development and client repositories separate**
  - Development repo: For active development and experimentation
  - Client repo: Clean, production-ready code only

- **Use semantic versioning**
  - Tag releases: `v1.0.0`, `v1.1.0`, etc.
  - Helps track what's deployed

- **Document all custom features**
  - Update README.md as features are added
  - Keep deployment docs current

- **Regular dependency updates**
  ```bash
  npm outdated
  npm update
  npm audit fix
  ```

## 🐛 Troubleshooting

### Repository Push Fails

**Issue:** Permission denied
```bash
# Check your Git configuration
git remote -v

# Update remote URL with your credentials
git remote set-url client https://github.com/USERNAME/REPO.git
```

### Vercel Import Issues

**Issue:** Can't find repository

**Solution:**
- Ensure you're logged into correct Vercel account
- Grant GitHub App permissions in Vercel
- Refresh the repository list
- Check repository visibility (must be accessible)

### Build Fails on Vercel

**Issue:** Build errors

**Solution:**
1. Check build logs in Vercel dashboard
2. Verify `package.json` scripts are correct
3. Ensure Node.js version is 18+ in Vercel settings
4. Test build locally: `npm run build`

## 📚 Additional Resources

- [GitHub: Creating a new repository](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [Vercel: Import Git Repository](https://vercel.com/docs/concepts/git)
- [Next.js: Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains on Vercel](https://vercel.com/docs/concepts/projects/custom-domains)

---

**Once completed, the client will have a standalone, production-ready repository that automatically deploys to Vercel on every push to the main branch.**
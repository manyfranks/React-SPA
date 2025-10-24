# Vercel Deployment Guide

This guide walks you through deploying the Indigenous Iron Construction website to Vercel.

## ✅ Pre-Deployment Checklist

Before deploying, ensure:
- [x] Production build tested locally (`npm run build` completed successfully)
- [x] All dependencies installed and up to date
- [x] Code committed to GitHub repository
- [x] `.gitignore` properly configured (`.next/`, `node_modules/`, etc.)
- [x] No sensitive data in repository

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Create Vercel Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Authorize Vercel to access your repositories

2. **Import Your Project**
   - Click "New Project" or "Add New..."
   - Select "Import Git Repository"
   - Choose your repository from the list
   - Click "Import"

3. **Configure Project Settings**
   
   Vercel will auto-detect Next.js. Verify these settings:
   
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `next build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
   - **Development Command:** `next dev` (auto-detected)

4. **Environment Variables** (Optional)
   
   Currently, no environment variables are required. If you add features requiring API keys or secrets:
   
   - Click "Environment Variables"
   - Add key-value pairs
   - Example:
     ```
     NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
     CONTACT_API_ENDPOINT=https://api.example.com
     ```

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Wait 2-5 minutes for the build to complete
   - You'll receive a deployment URL (e.g., `your-project.vercel.app`)

6. **Custom Domain Setup**
   
   To use your custom domain:
   
   - Go to Project Settings → Domains
   - Add your domain (e.g., `indigenousironconstruction.com`)
   - Follow DNS configuration instructions:
     - Add A record pointing to Vercel's IP
     - Or add CNAME record pointing to your Vercel deployment
   - Wait for DNS propagation (up to 48 hours, usually < 1 hour)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd /path/to/your/project
   vercel
   ```

4. **Follow Prompts**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time)
   - Project name? Accept default or customize
   - Which directory? `.` (current directory)

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 🔧 Build Configuration

### Vercel Project Settings

After deployment, you can customize settings in the Vercel dashboard:

**General Settings:**
- Node.js Version: `18.x` (recommended) or `20.x`
- Framework: Next.js (auto-detected)
- Root Directory: `./`

**Git Settings:**
- Production Branch: `main` or `master`
- Automatic Deployments: Enable for auto-deploy on push
- Preview Deployments: Enable for PR previews

**Environment Variables:**
- Add any API keys, secrets, or configuration
- Separate variables for Production/Preview/Development

## 📊 Post-Deployment

### Verify Deployment

1. **Check Build Logs**
   - View deployment logs in Vercel dashboard
   - Ensure no errors during build
   - Verify all 27 pages compiled successfully

2. **Test Your Live Site**
   - Visit your Vercel URL
   - Test all pages and navigation
   - Check mobile responsiveness
   - Verify images load correctly
   - Test contact form (if applicable)

3. **Performance Check**
   - Run Lighthouse audit
   - Target: 90+ score across all categories
   - Check Core Web Vitals in Vercel Analytics

### Enable Analytics (Optional)

Vercel provides free analytics:

1. Go to Project Settings → Analytics
2. Enable Web Analytics
3. View real-time traffic and performance data

### Enable Speed Insights (Optional)

1. Go to Project Settings → Speed Insights
2. Enable Speed Insights
3. Monitor Core Web Vitals from real users

## 🔄 Continuous Deployment

Once connected, Vercel automatically:

- **Builds on every push** to your production branch
- **Creates preview deployments** for pull requests
- **Provides deployment URLs** for testing before merge
- **Rolls back** if a deployment fails

### Workflow

```
1. Make changes locally
2. Commit and push to GitHub
3. Vercel automatically builds and deploys
4. Check deployment status in Vercel dashboard
5. Preview changes at deployment URL
6. Merge to production branch for live deployment
```

## 🐛 Troubleshooting

### Build Fails

**Issue:** Build fails with module errors

**Solution:**
```bash
# Locally verify build works
npm run build

# If successful, redeploy
# If fails, check package.json and dependencies
```

**Issue:** "sharp" package warning

**Solution:**
```bash
# Already installed in this project
# Vercel will use it automatically
```

### Domain Issues

**Issue:** Custom domain not connecting

**Solution:**
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain registrar settings
- Use Vercel's DNS checker tool

### Performance Issues

**Issue:** Slow page loads

**Solution:**
- Enable Vercel CDN (automatic)
- Check image optimization is working
- Review bundle size in build logs
- Enable ISR for static pages if needed

## 📈 Monitoring

### Vercel Dashboard

Monitor your deployment:
- **Deployments:** View history and status
- **Analytics:** Track visitors and page views
- **Logs:** Runtime logs for debugging
- **Performance:** Speed Insights and Core Web Vitals

### Recommended Tools

- **Google Search Console:** Monitor SEO and indexing
- **Google Analytics:** Track user behavior (add GA_ID)
- **Vercel Analytics:** Built-in analytics (free tier available)

## 🔒 Security Best Practices

1. **Never commit secrets** to repository
2. **Use environment variables** for sensitive data
3. **Enable HTTPS** (automatic with Vercel)
4. **Regular dependency updates** (`npm audit`)
5. **Monitor deployment logs** for suspicious activity

## 📞 Support

### Vercel Support

- **Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status:** [vercel-status.com](https://vercel-status.com)

### Common Issues

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Limits & Pricing](https://vercel.com/docs/concepts/limits/overview)
- [Custom Domain Setup](https://vercel.com/docs/concepts/projects/custom-domains)

## ✅ Deployment Verification Checklist

After deployment, verify:

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Images display properly
- [ ] Forms function (if applicable)
- [ ] Mobile responsive design works
- [ ] Custom domain is connected (if applicable)
- [ ] HTTPS is enabled
- [ ] No console errors in browser
- [ ] Lighthouse score meets targets (90+)
- [ ] Analytics tracking works (if enabled)

## 🎉 Success!

Your website is now live on Vercel with:
- ✅ Automatic deployments on push
- ✅ Global CDN for fast loading
- ✅ SSL/HTTPS enabled
- ✅ Preview deployments for testing
- ✅ Zero downtime deployments
- ✅ Instant rollback capability

---

**For questions about this deployment, refer to the README.md or contact your development team.**
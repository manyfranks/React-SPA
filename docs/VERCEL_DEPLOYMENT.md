# Vercel Deployment Guide - Indigenous Iron Construction

This guide will help you migrate the Indigenous Iron Construction website from Netlify to Vercel.

---

## 📋 Pre-Deployment Checklist

- [x] Project is running locally (`npm start`)
- [x] All dependencies installed
- [x] Node.js compatibility issue fixed (build script updated)
- [x] Node.js version specified for Vercel (16.20.2)
- [x] `vercel.json` configuration created
- [x] Production build tested locally and working
- [ ] GitHub repository is up to date
- [ ] Environment variables documented (if any)

---

## 🚀 Deployment Steps

### Step 1: Test Production Build Locally

Before deploying to Vercel, test the production build:

```bash
# Create production build
npm run build

# Install serve (if not already installed)
npm install -g serve

# Test the production build locally
npx serve -s build
```

The site should be accessible at `http://localhost:3000` (or another port if 3000 is in use).

### Step 2: Push to GitHub

Ensure all changes are committed and pushed to your GitHub repository:

```bash
git add .
git commit -m "Prepare for Vercel deployment - Add vercel.json and documentation"
git push origin main
```

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended for testing)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy (from project root):
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

#### Option B: Using Vercel Dashboard (Recommended for production)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project settings:
   - **Framework Preset**: Create React App (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

6. Click "Deploy"

---

## ⚙️ Configuration Details

### Build Settings (Auto-detected from vercel.json)

- **Framework**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`
- **Development Command**: `npm start`
- **Node.js Version**: 22.x (specified in vercel.json)

### Important: Modern Stack

This project uses React 18 and react-scripts 5, which are fully compatible with Node.js 22+.

**Stack Details:**
- React 18.2.0 with modern rendering API
- React Scripts 5.0.1 with webpack 5
- Fully compatible with Node.js 18, 22, and 23+
- No legacy flags or workarounds needed
- Meets Vercel's Node.js 22+ requirement (enforced since August 8, 2025)

### Routing

The `vercel.json` file includes a rewrite rule to handle client-side routing:
```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

This ensures all routes are handled by the React Router.

---

## 🌐 Domain Configuration

### Using Vercel Domain

Vercel will provide a free domain: `your-project-name.vercel.app`

### Using Custom Domain

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to:
   - Update DNS records at your domain registrar
   - Configure A/CNAME records as specified
5. Enable SSL (automatic with Vercel)

### Migrating from Netlify

If you have a custom domain on Netlify:

1. **Wait for Vercel deployment to succeed**
2. **Test the Vercel URL thoroughly**
3. **Update DNS records**:
   - Remove Netlify DNS records
   - Add Vercel DNS records as specified in Vercel dashboard
4. **Monitor DNS propagation** (can take up to 48 hours)
5. **Disable Netlify site** after confirming Vercel is working

---

## 🔒 Environment Variables

If your project uses environment variables:

1. In Vercel Dashboard: "Settings" → "Environment Variables"
2. Add variables for each environment:
   - Production
   - Preview
   - Development

**Common variables for React apps:**
- `REACT_APP_API_URL`
- `REACT_APP_API_KEY`
- etc.

**Note**: Environment variables must be prefixed with `REACT_APP_` to be accessible in Create React App.

---

## 📊 Post-Deployment Checklist

After deploying to Vercel:

- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify all images load correctly
- [ ] Check social media embeds
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Verify custom domain (if applicable)
- [ ] Check SSL certificate
- [ ] Test all service cards and links
- [ ] Monitor Vercel deployment logs for errors

---

## 🔍 Monitoring & Analytics

### Vercel Analytics (Optional)

Enable Vercel Analytics for insights:

1. In project settings, enable "Analytics"
2. View real-time performance metrics
3. Monitor Core Web Vitals

### Vercel Logs

Access deployment and function logs:
- Dashboard → Your Project → Deployments → Select deployment → Logs

---

## 🛠️ Troubleshooting

### Build Fails

**Issue**: Build fails with OpenSSL error
**Solution**: Ensure `NODE_OPTIONS=--openssl-legacy-provider` is in the start script (already done in package.json)

**Issue**: Build fails with dependency errors
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues

**Issue**: Direct URL navigation returns 404
**Solution**: Verify `vercel.json` has the rewrite rule (already configured)

### Environment Variables

**Issue**: Environment variables not working
**Solution**: 
- Ensure variables are prefixed with `REACT_APP_`
- Rebuild/redeploy after adding variables
- Check variable names match exactly

---

## 📝 Deployment Commands Reference

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview (staging)
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View deployment logs
vercel logs [deployment-url]

# Pull environment variables from Vercel
vercel env pull

# Remove deployment
vercel rm [deployment-url]
```

---

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel automatically:

- **Deploys to preview** on every push to any branch
- **Deploys to production** on every push to the main branch
- **Provides preview URLs** for each pull request
- **Runs builds** automatically

### Disable Auto-Deploy (if needed)

1. Project Settings → Git
2. Configure deployment settings per branch

---

## 💡 Best Practices

1. **Test Locally First**: Always test production builds locally before deploying
2. **Use Preview Deployments**: Test changes in preview before merging to main
3. **Monitor Performance**: Use Vercel Analytics to track site performance
4. **Keep Dependencies Updated**: Regular updates improve security and performance
5. **Use Environment Variables**: Never commit sensitive data to the repository
6. **Review Build Logs**: Check for warnings or errors after each deployment

---

## 📞 Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Community**: https://github.com/vercel/vercel/discussions
- **Create React App Deployment**: https://create-react-app.dev/docs/deployment/

---

## ✅ Quick Deployment Checklist

1. ✅ Fix any local build issues
2. ✅ Commit and push to GitHub
3. ✅ Connect GitHub repo to Vercel
4. ✅ Configure build settings (auto-detected)
5. ✅ Deploy
6. ✅ Test deployed site
7. ✅ Configure custom domain (if needed)
8. ✅ Migrate DNS from Netlify
9. ✅ Monitor for 24-48 hours
10. ✅ Disable old Netlify deployment

---

## 🎉 Conclusion

Your Indigenous Iron Construction website is now ready to be deployed to Vercel! The configuration files are in place, and this guide provides all the steps needed for a successful migration from Netlify.

**Next Steps:**
1. Test the production build locally
2. Push to GitHub
3. Deploy to Vercel
4. Test thoroughly
5. Update DNS when ready

Good luck with the deployment! 🚀
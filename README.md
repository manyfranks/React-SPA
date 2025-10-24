# Indigenous Iron Construction Website

Modern, production-ready Next.js website for Indigenous Iron Construction, featuring server-side rendering, optimized performance, and comprehensive SEO.

## 🚀 Live Site

Visit: [indigenousironconstruction.com](https://indigenousironconstruction.com)

## 📋 Project Overview

This website is built with **Next.js 14** using the App Router architecture, providing:
- ✅ Server-side rendering (SSR) for optimal SEO
- ✅ Static site generation (SSG) for fast page loads
- ✅ Optimized image handling with Next.js Image
- ✅ Mobile-responsive design
- ✅ 27 pre-rendered pages including dynamic service routes
- ✅ Production-tested and Vercel-ready

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2.3
- **React:** 18.2.0
- **Styling:** styled-components 5.3.11
- **Icons:** react-icons 4.11.0
- **Image Optimization:** sharp (production)
- **Node.js:** 18.0.0+

## 📦 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory (App Router)
│   ├── layout.js          # Root layout with Navbar & Footer
│   ├── page.js            # Homepage
│   ├── about/             # About page
│   ├── services/          # Services pages
│   │   └── [serviceId]/   # Dynamic service detail pages
│   ├── team/              # Team page
│   ├── contact/           # Contact page
│   └── src/
│       ├── components/    # Reusable React components
│       ├── lib/           # Data files and utilities
│       └── images/        # Image assets
├── public/                # Static assets
│   ├── images/           # Public images
│   │   ├── hero/         # Hero carousel images
│   │   ├── partners/     # Partner logos
│   │   └── team/         # Team photos
│   └── videos/           # Video files
└── docs/                 # Project documentation
```

## 🌐 Pages

The website includes the following routes:

- `/` - Homepage with hero carousel, services teaser, partners
- `/about` - Company information and history
- `/services` - Services overview with cards
- `/services/[serviceId]` - 11 individual service detail pages
- `/team` - Team members and leadership
- `/contact` - Contact form and information
- `/signin` - Authentication page (if needed)

## 🎨 Components

Key reusable components:

- **HeroCarousel** - Auto-rotating image carousel with video support
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Site footer with contact info and social links
- **Breadcrumbs** - Navigation breadcrumbs for better UX
- **QuickNav** - Quick navigation to page sections
- **CardGrid** - Responsive grid layout for content cards
- **PartnersSection** - Partner logos and testimonials
- **ContactForm** - Contact form with validation

## 🚢 Deployment to Vercel

### One-Click Deploy

The easiest way to deploy is through the Vercel dashboard:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
6. Click "Deploy"

### Vercel CLI Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Required Settings

- **Node.js Version:** 18.x or higher (set in Project Settings)
- **Environment Variables:** None required by default
- **Build Settings:** Auto-detected by Vercel

## 🔧 Configuration

### Next.js Configuration

The project uses default Next.js configuration. Custom settings can be added in `next.config.js` if needed.

### Environment Variables

Currently, no environment variables are required. If you add API integrations or analytics, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_GA_ID=your-google-analytics-id
CONTACT_FORM_API=your-api-endpoint
```

## 📊 Performance

- **Build Size:** ~87.6 kB shared JS (gzipped)
- **Page Load:** < 3 seconds
- **Lighthouse Score:** 90+ target
- **27 Pages:** All pre-rendered for optimal performance

## 🧪 Testing Locally

Before deploying, always test the production build:

```bash
# Build for production
npm run build

# Test the production build
npm start

# Or use a static server
npx serve -s .next
```

## 📝 Content Management

Content is stored in data files located in `app/src/lib/`:

- **companyData.js** - Company information, mission, vision
- **servicesData.js** - Service descriptions and details
- **partnersData.js** - Partner logos and testimonials
- **teamData.js** - Team member information

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Ensure images are in the `public/` directory
- Check image paths are relative to `public/` (e.g., `/images/hero/hero-1.jpg`)
- Verify image file extensions match references

### Styling Issues

- Clear browser cache
- Check styled-components registry in `app/src/lib/registry.js`
- Verify no CSS conflicts

## 📚 Documentation

Additional documentation is available in the `docs/` folder:

- **HANDOFF_SUMMARY.md** - Complete project handoff documentation
- **VERCEL_DEPLOYMENT.md** - Detailed Vercel deployment guide
- **UI_OVERHAUL_STRATEGY.md** - UI design and component strategy
- **CLIENT_PROJECT_PLAN.md** - Original project planning document

## 🔒 Security

- No sensitive data in repository
- Environment variables handled via Vercel dashboard
- Dependencies audited and up to date

## 📞 Support

For technical support or questions about the website, contact your development team.

## 📄 License

Proprietary - All rights reserved by Indigenous Iron Construction

---

**Built with ❤️ using Next.js 14**

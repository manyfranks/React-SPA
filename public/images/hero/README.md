# Hero Carousel Images

This directory contains hero images for the HeroCarousel component used across different pages.

## Directory Structure

```
hero/
├── services/     # Hero images for /services page
├── about/        # Hero images for /about page
├── team/         # Hero images for /team page
└── contact/      # Hero images for /contact page
```

## Image Requirements

### Dimensions
- **Recommended Size**: 1920 x 600 pixels (3.2:1 aspect ratio)
- **Minimum Width**: 1600px
- **Minimum Height**: 500px
- **Maximum File Size**: 500KB per image (optimize for web)

### Format
- **Primary Format**: WebP (best compression and quality)
- **Fallback Format**: JPEG (for browser compatibility)
- **Quality**: 80-85% for optimal balance

### Naming Convention
Use descriptive, sequential names:
```
services/
├── hero-1.webp   # Primary service image
├── hero-2.webp   # Secondary service image
├── hero-3.webp   # Additional images as needed
└── ...

about/
├── hero-1.webp   # Company overview
├── hero-2.webp   # Team/culture
├── hero-3.webp   # Facilities/equipment
└── ...
```

## Image Optimization

### Before Adding Images:
1. **Resize** to recommended dimensions (1920x600)
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com/) for PNG/JPEG
   - [Squoosh](https://squoosh.app/) for WebP conversion
   - ImageMagick CLI: `convert input.jpg -resize 1920x600^ -quality 85 output.webp`
3. **Test** file size is under 500KB

### Optimization Commands:
```bash
# Convert and optimize to WebP
convert original.jpg -resize 1920x600^ -quality 85 hero-1.webp

# Batch convert all images in a directory
for file in *.jpg; do convert "$file" -resize 1920x600^ -quality 85 "${file%.jpg}.webp"; done
```

## Content Guidelines

### Image Subject Matter:
- **Services**: Equipment, projects, work in action
- **About**: Company culture, team, facilities
- **Team**: Team activities, workplace environment
- **Contact**: Office, location, welcoming imagery

### Composition:
- Leave space at bottom-left for text overlay (title + description)
- Avoid busy or cluttered compositions
- Ensure good contrast for white text readability
- Use professional, high-quality photography

### Accessibility:
- Images should be meaningful and relevant to page content
- Text overlay will be added programmatically
- Alt text provided via component props

## Usage Examples

### Standard Single-Image Carousel
```javascript
import HeroCarousel from '@/components/HeroCarousel';

const slides = [
  {
    imageSrc: '/images/hero/about/hero-1.webp',
    title: 'About Our Company',
    description: 'Leading the industry with excellence',
  },
  {
    imageSrc: '/images/hero/about/hero-2.webp',
    title: 'Our Mission',
    description: 'Dedicated to superior results',
  },
];

<HeroCarousel slides={slides} interval={6000} />
```

### Two-Up Side-by-Side Carousel (Services Page)
```javascript
import HeroCarousel from '@/components/HeroCarousel';

const slides = [
  {
    imageSrc: '/images/hero/services/hero-1.webp',
    title: 'Professional Services',
    description: 'Quality workmanship with Indigenous stewardship',
  },
  {
    imageSrc: '/images/hero/services/hero-2.webp',
    title: 'Environmental Excellence',
    description: 'Protecting the land for future generations',
  },
];

<HeroCarousel
  slides={slides}
  interval={6000}
  twoUp={true}
  collapseAt={640}
  showOverlay={false}
  showProgress={false}
  heightVh={33}
  minHeight={240}
  maxHeight={360}
/>
```

### Configuration Options

- **`slides`** (required): Array of slide objects
- **`interval`**: Rotation interval in ms (default: 6000)
- **`showProgress`**: Display progress bar (default: true)
- **`showOverlay`**: Show gradient overlay and text (default: true)
- **`twoUp`**: Enable side-by-side layout (default: false)
- **`collapseAt`**: Breakpoint to collapse to single image (default: 640px)
- **`heightVh`**: Custom height in vh (overrides aspect-ratio)
- **`minHeight`**: Minimum height in px when using heightVh (default: 240)
- **`maxHeight`**: Maximum height in px when using heightVh (default: 360)

## Performance Considerations

- Images are lazy-loaded (except first slide)
- Next.js Image component provides automatic optimization
- Intersection Observer pauses carousel when off-screen
- Progressive loading with blur placeholders

## Placeholder Images

Until actual images are added, the component will:
- Show a subtle gray background (#f5f5f5)
- Display text overlay only
- Maintain proper aspect ratio

## Adding New Images

1. Place optimized images in appropriate directory
2. Update corresponding data file (e.g., `servicesData.js`)
3. Add image references to carousel slides array
4. Test on multiple devices and screen sizes
5. Verify performance with Lighthouse

## Questions?

Refer to the UI Overhaul Strategy document (`/docs/UI_OVERHAUL_STRATEGY.md`) for additional context and implementation details.
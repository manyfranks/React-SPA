# Image Staging Area

Drop your **non-optimized** JPG/JPEG/PNG files here for processing.

## Folders

- `services/` - Hero images for /services page (two-up carousel)
- `about/` - Hero images for /about page (single-image carousel)
- `team/` - Hero images for /team page (two-up carousel)
- `contact/` - Hero images for /contact page

## Workflow

1. **Drop your files** into the appropriate subfolder
   - Any format: JPG, JPEG, PNG
   - Any size (will be optimized)
   - Any naming (will be renamed to hero-1, hero-2, etc.)

2. **Request optimization** - Let me know when files are ready
   - I'll resize to optimal dimensions
   - Convert to WebP for best performance
   - Move to final location: `public/images/hero/{page}/`
   - Update the page's slides array to reference new images

3. **Files are processed and removed** from _incoming after optimization

## Important Notes for Two-Up Carousel (Services Page)

The /services carousel displays **2 images side-by-side**, so:

- ✅ **Use landscape images** (wider than tall)
- ✅ **Recommended aspect ratio**: 2:1 to 2.5:1 (e.g., 1920x900, 2000x1000)
- ✅ **Each image will be cropped** to fit using `object-fit: cover` (no stretching)
- ✅ **Important subjects** should be centered (not at edges)

### Display Math
- Desktop: Each image displays at ~640px wide × 300px tall (2.13:1)
- Mobile (<640px): Single image fills width × 220-240px tall
- Images are cropped (not stretched) to fill the space

### Bad Example
- Portrait images (taller than wide) will be severely cropped
- Very wide panoramas (>3:1) may lose important content on top/bottom

### Good Example
- Equipment photos: 1920×900 showing truck/machinery centered
- Site photos: 2000×1000 with project in center of frame
- Team photos: 1920×800 with people centered, room to crop

## Questions?

Just let me know when files are ready to process!
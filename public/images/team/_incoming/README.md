# Team Headshot Images - Staging Area

This folder is for **non-optimized team member headshot photos** before processing.

## Workflow

1. **Drop Images Here**: Place original, non-optimized headshot images in this directory
2. **Optimize**: Use the commands below to resize and optimize for web
3. **Move to Production**: Transfer optimized images to `public/images/team/`
4. **Update Data**: Add `photoUrl` field to team members in `app/src/lib/teamData.js`

## Optimization Commands

### For Team Headshots (Square Format)

```bash
# Navigate to this directory
cd public/images/team/_incoming

# Optimize single image (resize to 300x300, 85% quality JPEG)
sips -Z 300 -s format jpeg -s formatOptions 85 "original-photo.jpg" --out "../mitch-power.jpg"

# Batch optimize all images
for file in *.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -f "$file" ] && sips -Z 300 -s format jpeg -s formatOptions 85 "$file" --out "../${file%.*}.jpg"
done
```

## Image Guidelines

- **Format**: Square (1:1 ratio) preferred for circular avatars
- **Minimum Size**: 300x300px (will be displayed at 120px with retina support)
- **File Naming**: Use member ID from teamData.js (e.g., `mitch-power.jpg`, `josh-power.jpg`)
- **Background**: Professional neutral background preferred
- **Lighting**: Well-lit, evenly exposed faces

## Updating Team Data

After optimizing and moving images, update `app/src/lib/teamData.js`:

```javascript
{
  id: 'mitch-power',
  name: 'Mitch Power',
  title: 'Chief Executive Officer',
  photoUrl: '/images/team/mitch-power.jpg', // Add this line
  education: [...],
  bio: '...'
}
```

## Current Team Members

Based on `teamData.js`:
- `mitch-power.jpg` - Mitch Power, CEO
- `josh-power.jpg` - Josh Power, COO  
- `charles-mwin-era.jpg` - Charles Mwin-Era, CFO

## Notes

- The UI gracefully falls back to initials if `photoUrl` is not provided
- Images are displayed in a circular container with gradient fallback
- Optimize for file size while maintaining professional quality
- Square crops work best for circular avatars
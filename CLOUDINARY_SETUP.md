# Cloudinary Setup Guide for Perf-Analysis Consulting

## Overview
Cloudinary is a cloud-based image and video management solution that provides automatic optimization, format conversion, and CDN delivery for faster site performance.

## Setup Instructions

### 1. Create a Cloudinary Account
- Go to https://cloudinary.com/users/register/free
- Sign up for a free account (includes 25 GB storage, 25 GB bandwidth/month)

### 2. Get Your Credentials
- Login to your Cloudinary dashboard
- Copy your **Cloud Name** from the dashboard
- Go to **Settings** > **Security** > **Upload presets**
- Click **Add upload preset**
- Set **Signing Mode** to "Unsigned"
- Set **Folder** to `perf-analysis`
- Save the preset name

### 3. Configure Environment Variables
- Copy `.env.local.example` to `.env.local`:
  ```bash
  cp .env.local.example .env.local
  ```
- Update `.env.local` with your credentials:
  ```env
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-actual-upload-preset
  CLOUDINARY_API_KEY=your-api-key
  CLOUDINARY_API_SECRET=your-api-secret
  ```

### 4. Upload Your Images and Videos
Run the upload script:
```bash
node scripts/upload-to-cloudinary.js
```

This will:
- Upload all images (`.jpg`, `.png`, `.webp`, `.gif`, `.svg`) from `/public`
- Upload all videos (`.mp4`, `.webm`, `.mov`, `.avi`) from `/public`
- Save a mapping file `scripts/cloudinary-mapping.json` with local-to-Cloudinary URL mappings

### 5. Update Your Components
Replace local image/video paths with Cloudinary URLs using the helpers:

```typescript
import { cloudinaryUrl, cloudinaryVideoUrl, getOptimizedImage } from '@/lib/cloudinary';

// For images:
const imageUrl = getOptimizedImage('perf-analysis/logo', 200, 40);

// Or with custom options:
const customImageUrl = cloudinaryUrl('perf-analysis/kinetic-precision', {
  width: 800,
  height: 400,
  quality: 'auto',
  format: 'auto',
  crop: 'fill',
  gravity: 'auto',
});

// For videos:
const videoUrl = cloudinaryVideoUrl('perf-analysis/MatchView', {
  width: 1920,
  quality: 'auto',
  format: 'auto',
});
```

### 6. Update Next.js Image Component
Use Cloudinary URLs directly in Next.js `<Image>` component:

```tsx
import Image from 'next/image';
import { getOptimizedImage } from '@/lib/cloudinary';

<Image
  src={getOptimizedImage('perf-analysis/logo', 200, 40)}
  alt="Logo"
  width={200}
  height={40}
  priority
/>
```

## Benefits of Cloudinary

### Automatic Optimizations
- **Format conversion**: Automatically serves WebP or AVIF based on browser support
- **Quality optimization**: `q_auto` adjusts quality based on image content
- **Responsive images**: Automatic resizing based on device and viewport
- **Lazy loading**: Built-in lazy loading for better performance

### Performance Improvements
- **CDN delivery**: Global CDN with 300+ edge locations
- **Compression**: Up to 70% file size reduction
- **Lazy loading**: Images load only when in viewport
- **Caching**: Browser and CDN caching for repeat visitors

### Video Optimizations
- **Adaptive bitrate streaming**: Optimizes quality based on connection speed
- **Format conversion**: Serves MP4, WebM, or HLS based on browser
- **Thumbnail generation**: Automatic video thumbnails
- **Transcoding**: Optimizes video quality and file size

## Example Transformations

### Image with multiple transformations:
```typescript
cloudinaryUrl('perf-analysis/hero', {
  width: 1920,
  height: 1080,
  quality: 'auto:good',
  format: 'auto',
  crop: 'fill',
  gravity: 'faces',
});
// Result: https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_1920,h_1080,q_auto:good,f_auto,c_fill,g_faces/perf-analysis/hero
```

### Video with poster image:
```tsx
<video
  src={cloudinaryVideoUrl('perf-analysis/demo', { width: 1920 })}
  poster={getOptimizedImage('perf-analysis/demo-poster', 1920, 1080)}
  controls
/>
```

## Maintenance

### Re-uploading changed files:
```bash
node scripts/upload-to-cloudinary.js
```

### Checking upload mapping:
View `scripts/cloudinary-mapping.json` for all uploaded files and their Cloudinary URLs.

### Removing local files (after verifying uploads):
Once you've verified all images/videos are working with Cloudinary URLs, you can delete the local files from `/public` to reduce your site's bundle size.

## Troubleshooting

### Images not loading:
1. Check that `.env.local` has the correct cloud name
2. Verify the upload preset is set to "Unsigned"
3. Check the Cloudinary dashboard for upload errors
4. Ensure the file paths in the mapping file are correct

### Videos not playing:
1. Make sure the video format is supported (MP4, WebM)
2. Check that the video was uploaded successfully
3. Verify the video URL in the browser console

### Performance issues:
1. Enable `format: 'auto'` for automatic WebP/AVIF conversion
2. Use `quality: 'auto'` for intelligent quality optimization
3. Add appropriate `width` and `height` to avoid layout shift
4. Use `priority={true}` for above-the-fold images

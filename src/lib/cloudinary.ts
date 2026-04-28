// Cloudinary Configuration Utility
// Cloud: dnxarwdjo

export const CLOUDINARY_CLOUD_NAME = 'dnxarwdjo';
export const CLOUDINARY_UPLOAD_PRESET = 'perf-analysis-unsigned';

// Cloudinary URL builder with automatic optimizations
export const cloudinaryUrl = (
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: 'auto' | 'auto:low' | 'auto:eco' | 'auto:good' | 'auto:best';
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
    crop?: 'fill' | 'fit' | 'pad' | 'scale';
    gravity?: 'auto' | 'face' | 'center' | 'faces';
  } = {}
): string => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
  } = options;

  const transformations = [
    format !== 'auto' ? `f_${format}` : null,
    quality !== 'auto' ? `q_${quality}` : null,
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    crop ? `c_${crop}` : null,
    gravity ? `g_${gravity}` : null,
  ].filter(Boolean).join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
};

// Video URL builder with adaptive streaming
export const cloudinaryVideoUrl = (
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: 'auto' | 'auto:low' | 'auto:eco' | 'auto:good' | 'auto:best';
    format?: 'auto' | 'mp4' | 'webm';
    crop?: 'fill' | 'fit' | 'pad' | 'scale';
    version?: string | number;
  } = {}
): string => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    version,
  } = options;

  const transformations = [
    version ? `v_${version}` : null,
    format !== 'auto' ? `f_${format}` : null,
    quality !== 'auto' ? `q_${quality}` : null,
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    crop ? `c_${crop}` : null,
  ].filter(Boolean).join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${transformations}/${publicId}`;
};

// Helper for optimized images
export const getOptimizedImage = (publicId: string, width?: number, height?: number): string => {
  return cloudinaryUrl(publicId, {
    width,
    height,
    quality: 'auto',
    format: 'auto',
    crop: 'fill',
    gravity: 'auto',
  });
};

// All uploaded media files
export const media = {
  // Images
  logo: getOptimizedImage('perf-analysis/perf-analysis/logo', 200, 45),
  kineticPrecision: getOptimizedImage('perf-analysis/perf-analysis/kinetic-precision', 800, 400),
  coachThumb: getOptimizedImage('perf-analysis/perf-analysis/coach', 1200, 675),
  heatmap: getOptimizedImage('perf-analysis/perf-analysis/heatmap', 800, 600),
  jenkis: getOptimizedImage('perf-analysis/perf-analysis/jenkis', 400, 400),
  profileThumb: getOptimizedImage('perf-analysis/perf-analysis/profile-thumb', 400, 700),
  workspaceThumb: getOptimizedImage('perf-analysis/perf-analysis/workspace-thumb', 1200, 675),
  dataPerfThumb: getOptimizedImage('perf-analysis/perf-analysis/thumb1', 800, 450),
  matchViewThumb: getOptimizedImage('perf-analysis/perf-analysis/thu', 1200, 675),
  aiDetection: getOptimizedImage('perf-analysis/perf-analysis/ai-detection', 600, 400),
  annot: getOptimizedImage('perf-analysis/perf-analysis/annot', 600, 400),
  annotationTools: getOptimizedImage('perf-analysis/perf-analysis/annotation-tools', 600, 400),
  ia: getOptimizedImage('perf-analysis/perf-analysis/ia', 600, 400),
  // Videos
  coachPadVideo: cloudinaryVideoUrl('perf-analysis/perf-analysis/CoachPad'),
  dataPerfVideo: cloudinaryVideoUrl('perf-analysis/perf-analysis/DataPerf'),
  matchViewVideo: cloudinaryVideoUrl('perf-analysis/perf-analysis/MatchView', { version: 1777388212 }),
  profileVideo: cloudinaryVideoUrl('perf-analysis/perf-analysis/Profile'),
  workspaceVideo: cloudinaryVideoUrl('perf-analysis/perf-analysis/Workspace'),
};

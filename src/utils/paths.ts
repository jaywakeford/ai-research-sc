/**
 * Utility function to get the correct path for assets based on environment
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/ai-research-sc' : '';
  // Ensure we don't double up on slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
};

/**
 * Utility function specifically for image paths
 */
export const getImagePath = (path: string): string => {
  return getAssetPath(`images/${path}`);
};

/**
 * Utility function specifically for media paths (audio, video, pdfs)
 */
export const getMediaPath = (path: string): string => {
  return getAssetPath(`media/${path}`);
};

export const getPdfPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/media/pdfs/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getAudioPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/media/audio/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getVideoPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/media/videos/${path}`;
  return `${basePath}${cleanPath}`;
}; 
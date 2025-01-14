/**
 * Media path utilities
 */
export const getMediaPath = (path: string): string => {
  // Remove any leading slashes and clean the path
  const cleanPath = path.replace(/^\/+/, '').replace(/^media\/+/, '');
  return `/media/${cleanPath}`;
};

export const getImagePath = (path: string): string => {
  // Remove any leading slashes and clean the path
  const cleanPath = path.replace(/^\/+/, '').replace(/^images\/+/, '');
  return `/images/${cleanPath}`;
};

export const getPdfPath = (path: string): string => {
  const cleanPath = path
    .replace(/^\/+/, '')
    .replace(/^media\/pdfs\/+/, '')
    .replace(/^pdfs\/+/, '')
    .replace(/^public\/media\/pdfs\/+/, '');
  return `/media/pdfs/${cleanPath}`;
};

export const getAudioPath = (path: string): string => {
  // Remove any leading slashes and clean the path
  const cleanPath = path.replace(/^\/+/, '').replace(/^media\/audio\/+/, '');
  return `/media/audio/${cleanPath}`;
};

export const getVideoPath = (path: string): string => {
  // Remove any leading slashes and clean the path
  const cleanPath = path.replace(/^\/+/, '').replace(/^media\/videos\/+/, '');
  return `/media/videos/${cleanPath}`;
}; 
const getBasePath = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? '/ai-research-sc-analytics' : '';
};

export const getMediaPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
};

export const getImagePath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const fullPath = cleanPath.startsWith('images/') ? cleanPath : `images/${cleanPath}`;
  return `${basePath}/${fullPath}`;
};

export const getPdfPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const fullPath = cleanPath.startsWith('media/pdfs/') ? cleanPath : `media/pdfs/${cleanPath}`;
  return `${basePath}/${fullPath}`;
};

export const getAudioPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const fullPath = cleanPath.startsWith('media/audio/') ? cleanPath : `media/audio/${cleanPath}`;
  return `${basePath}/${fullPath}`;
};

export const getVideoPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const fullPath = cleanPath.startsWith('media/videos/') ? cleanPath : `media/videos/${cleanPath}`;
  return `${basePath}/${fullPath}`;
}; 
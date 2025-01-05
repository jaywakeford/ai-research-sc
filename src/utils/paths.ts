const getBasePath = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? '/ai-research-sc-analytics' : '';
};

export const getMediaPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/media/') ? path : `/media/${path.replace(/^\//, '')}`;
  return `${basePath}${cleanPath}`;
};

export const getImagePath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/images/') ? path : `/images/${path.replace(/^\//, '')}`;
  return `${basePath}${cleanPath}`;
};

export const getPdfPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/media/pdfs/') ? path : `/media/pdfs/${path.replace(/^\//, '')}`;
  return `${basePath}${cleanPath}`;
};

export const getAudioPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/media/audio/') ? path : `/media/audio/${path.replace(/^\//, '')}`;
  return `${basePath}${cleanPath}`;
};

export const getVideoPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/media/videos/') ? path : `/media/videos/${path.replace(/^\//, '')}`;
  return `${basePath}${cleanPath}`;
}; 
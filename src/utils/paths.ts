const getBasePath = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? '/ai-research-sc-analytics' : '';
};

export const getMediaPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${basePath}${path}`;
};

export const getImagePath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${basePath}${path}`;
};

export const getPdfPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${basePath}${path}`;
};

export const getAudioPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${basePath}${path}`;
};

export const getVideoPath = (path: string): string => {
  const basePath = getBasePath();
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${basePath}${path}`;
}; 
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/ai-research-sc-analytics' : '';
  
  // Handle absolute URLs
  if (src.startsWith('http')) {
    return src;
  }

  // Handle local images
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${normalizedSrc}`;
} 
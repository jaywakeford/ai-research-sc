import React from 'react';

interface ImagePlaceholderProps {
  title: string;
  subtitle?: string;
  aspectRatio?: 'square' | '16/9' | '4/3';
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  subtitle,
  aspectRatio = '16/9',
  className = ''
}) => {
  const aspectRatioClass = {
    'square': 'aspect-square',
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]'
  }[aspectRatio];

  return (
    <div className={`placeholder-gradient rounded-lg relative overflow-hidden ${aspectRatioClass} ${className}`}>
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-300">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default ImagePlaceholder; 
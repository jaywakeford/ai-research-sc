import React from 'react';
import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import { getImagePath } from '@/utils/paths';

interface ImageCardProps {
  imagePath: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imagePath, title, description, onClick }) => {
  const isPlaceholder = !imagePath || imagePath === '';
  const fullImagePath = isPlaceholder ? '' : getImagePath(imagePath);

  return (
    <div className="relative w-full h-full" onClick={onClick}>
      {isPlaceholder ? (
        <ImagePlaceholder
          title={title}
          subtitle={description}
          aspectRatio="16/9"
          className="w-full h-full"
        />
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={fullImagePath}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
      )}
    </div>
  );
};

export default ImageCard; 
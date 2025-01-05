import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface ImageCardProps {
  imagePath: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imagePath, title, description, onClick }) => {
  const isPlaceholder = !imagePath.startsWith('/') || !imagePath;

  return (
    <div className="image-card cursor-pointer" onClick={onClick}>
      {isPlaceholder ? (
        <ImagePlaceholder
          title={title}
          subtitle={description}
          aspectRatio="16/9"
          className="w-full h-full"
        />
      ) : (
        <div className="relative w-full aspect-[16/9]">
          <img
            src={imagePath}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-sm text-gray-200">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard; 
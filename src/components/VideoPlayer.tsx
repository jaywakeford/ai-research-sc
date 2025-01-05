'use client';

import React, { useRef, useState, useEffect } from 'react';
import { getVideoPath } from '@/utils/paths';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: string[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  description,
  technologies,
  metrics,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fullPath = getVideoPath(videoUrl);

  useEffect(() => {
    console.log('Loading video from path:', fullPath);
  }, [fullPath]);

  const handleLoadedData = () => {
    console.log('Video loaded successfully:', fullPath);
    setLoading(false);
    setError(null);
  };

  const handleError = (e: any) => {
    console.error('Video loading error:', e);
    console.error('Video path:', fullPath);
    setError('Failed to load video');
    setLoading(false);
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
      <div className="relative aspect-video mb-6">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="loading-spinner" />
          </div>
        )}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="text-red-500">{error}</div>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full rounded-lg"
            controls
            preload="metadata"
            onLoadedData={handleLoadedData}
            onError={handleError}
          >
            <source src={fullPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Key Metrics
            </h4>
            <div className="flex flex-wrap gap-2">
              {metrics.map((metric, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer; 
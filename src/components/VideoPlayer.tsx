'use client';

import React, { useRef, useState } from 'react';
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

  const handleLoadedData = () => {
    setLoading(false);
    setError(null);
  };

  const handleError = () => {
    console.error('Video error:', videoRef.current?.error);
    setError('Failed to load video. Please try refreshing the page.');
    setLoading(false);
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800 bg-opacity-90 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              preload="auto"
              onLoadedData={handleLoadedData}
              onError={handleError}
            >
              <source src={fullPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
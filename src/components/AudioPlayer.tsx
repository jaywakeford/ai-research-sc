'use client';

import React, { useRef, useState } from 'react';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Extract audio ID from URL
  const audioId = src.split('/').pop()?.split('.')[0] || '';

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <div className="space-y-4">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
            <CldVideoPlayer
              width="640"
              height="80"
              src={audioId}
              colors={{
                base: '#000000',
                text: '#ffffff',
                accent: '#4f46e5'
              }}
              autoPlay="never"
              onError={() => {
                setError('Failed to load audio');
                setLoading(false);
              }}
              onPlay={() => setLoading(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
} 
'use client';

import React, { useRef, useState, useEffect } from 'react';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { getAudioPath } from '@/utils/paths';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const playerRef = useRef<H5AudioPlayer>(null);
  const fullPath = getAudioPath(src);

  useEffect(() => {
    console.log('Audio player mounted with path:', fullPath);
    setLoading(false);
  }, [fullPath]);

  const handleError = (e: any) => {
    console.error('Audio loading error:', e);
    console.error('Audio element:', playerRef.current);
    console.error('Attempted path:', fullPath);
    setError('Failed to load audio. Please check console for details.');
    setLoading(false);
  };

  const handleLoadStart = () => {
    console.log('Audio loading started');
    setLoading(true);
  };

  const handleCanPlay = () => {
    console.log('Audio can play');
    setLoading(false);
    setError(null);
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <div className="space-y-4">
        {error ? (
          <div className="text-red-500">
            {error}
            <div className="text-sm mt-2">
              Attempted to load: {fullPath}
            </div>
          </div>
        ) : (
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
            <H5AudioPlayer
              ref={playerRef}
              src={fullPath}
              onError={handleError}
              onLoadStart={handleLoadStart}
              onCanPlay={handleCanPlay}
              autoPlay={false}
              autoPlayAfterSrcChange={false}
              showJumpControls={true}
              showFilledVolume={true}
              customProgressBarSection={[
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.VOLUME
              ]}
              customControlsSection={[
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.LOOP,
                RHAP_UI.VOLUME,
                RHAP_UI.PROGRESS_BAR,
              ]}
              style={{
                background: 'transparent',
                boxShadow: 'none',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
} 
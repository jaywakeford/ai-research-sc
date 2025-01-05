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
    console.log('Loading audio from path:', fullPath);
  }, [fullPath]);

  const handleError = (e: any) => {
    console.error('Audio loading error:', e);
    console.error('Audio path:', fullPath);
    setError('Failed to load audio');
    setLoading(false);
  };

  const handleLoadStart = () => {
    console.log('Audio loading started:', fullPath);
    setLoading(true);
    setError(null);
  };

  const handleCanPlay = () => {
    console.log('Audio can play:', fullPath);
    setLoading(false);
    setError(null);
  };

  return (
    <div className="glass-card p-4">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {error && (
          <div className="text-red-500 text-sm mt-1">
            <p>{error}</p>
            <p className="text-xs mt-1">Path: {fullPath}</p>
          </div>
        )}
      </div>
      <H5AudioPlayer
        ref={playerRef}
        src={fullPath}
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onError={handleError}
        showJumpControls={false}
        layout="horizontal"
        customProgressBarSection={[
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.DURATION,
        ]}
        customControlsSection={[
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
} 
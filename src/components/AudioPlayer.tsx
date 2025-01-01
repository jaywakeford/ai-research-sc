'use client';

import React, { useRef, useState } from 'react';

interface AudioMark {
  time: number;
  label: string;
}

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [marks, setMarks] = useState<AudioMark[]>([]);

  const handleMarkPoint = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      const label = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      
      setMarks(prev => [...prev, { time: currentTime, label }]);
    }
  };

  const jumpToMark = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      audioRef.current.play();
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <div className="space-y-4">
        <audio ref={audioRef} controls className="w-full">
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        
        <div className="flex justify-between items-center">
          <button
            onClick={handleMarkPoint}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition-colors"
          >
            Mark Current Point
          </button>
          
          <div className="flex gap-2">
            {marks.map((mark, index) => (
              <button
                key={index}
                onClick={() => jumpToMark(mark.time)}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
              >
                {mark.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
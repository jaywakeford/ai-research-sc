'use client';

import React from 'react';
import PdfViewer from './PdfViewer';
import AudioPlayer from './AudioPlayer';

interface ResearchPaperProps {
  title: string;
  pdfUrl: string;
  audioUrl: string;
  description?: string;
  technologies?: string[];
}

const ResearchPaper: React.FC<ResearchPaperProps> = ({
  title,
  pdfUrl,
  audioUrl,
  description,
  technologies
}) => {
  return (
    <div className="research-paper glass-card p-8 rounded-2xl mb-12 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          {title}
        </h2>
        {description && (
          <p className="text-gray-300 mb-6 text-lg leading-relaxed font-light">
            {description}
          </p>
        )}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mb-8">
        <PdfViewer pdfUrl={pdfUrl} />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-200">Research Presentation & Technical Overview</h3>
        <AudioPlayer src={audioUrl} title="Research Presentation" />
      </div>
    </div>
  );
};

export default ResearchPaper; 
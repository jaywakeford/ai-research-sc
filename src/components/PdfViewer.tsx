'use client';

import React from 'react';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  return (
    <div className="relative w-full bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden p-4 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="relative aspect-[4/3] w-full">
        <iframe
          src={`${pdfUrl}#view=FitH`}
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default PdfViewer; 
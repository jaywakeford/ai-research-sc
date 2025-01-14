import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

interface PdfViewerProps {
  pdfUrl: string;
  title?: string;
  totalPages?: number;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, title }) => {
  const [error, setError] = useState<string | null>(null);

  // Convert PDF URL to PNG URL
  const pngUrl = pdfUrl.replace('/pdfs/', '/pdfs-png/').replace('.pdf', '.png');

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      
      {error ? (
        <div className="text-red-500 p-4 bg-red-50 rounded">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
          <p className="mt-2 text-sm">PDF URL: {pdfUrl}</p>
        </div>
      ) : (
        <div className="relative w-full">
          <div className="w-full overflow-hidden min-h-[600px] flex items-center justify-center bg-gray-50">
            <Image
              src={pngUrl}
              alt={title || 'PDF Preview'}
              width={800}
              height={1200}
              className="object-contain"
              onError={() => setError('Failed to load PDF preview')}
            />
          </div>
          
          {/* Download link */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <a 
              href={pdfUrl} 
              download
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfViewer; 
'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(err: Error): void {
    console.error('Error loading PDF:', err);
    setError('Failed to load PDF. Please try refreshing the page.');
    setLoading(false);
  }

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // Force remount of Document component
    const timestamp = new Date().getTime();
    const urlWithTimestamp = `${pdfUrl}?t=${timestamp}`;
    return urlWithTimestamp;
  };

  return (
    <div className="relative w-full bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden p-4 shadow-lg border border-gray-200 dark:border-gray-700">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800 bg-opacity-90">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="text-red-600 dark:text-red-400 text-center p-4">
          <p>{error}</p>
          <button 
            onClick={() => handleRetry()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      )}

      <div className="flex flex-col items-center">
        <div className="max-h-[600px] overflow-y-auto custom-scrollbar w-full bg-white dark:bg-gray-900 rounded-lg">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="flex flex-col items-center"
            loading={
              <div className="flex justify-center items-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            }
            error={
              <div></div> // Empty div as placeholder, we handle errors ourselves
            }
            options={{
              cMapUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/cmaps/',
              cMapPacked: true,
              standardFontDataUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/standard_fonts/'
            }}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="mb-4 shadow-md"
                loading={
                  <div className="flex justify-center items-center p-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                  </div>
                }
                error={
                  <div className="text-red-600 dark:text-red-400 text-center p-4">
                    Failed to load page {index + 1}. Please try refreshing.
                  </div>
                }
              />
            ))}
          </Document>
        </div>

        {!loading && !error && numPages > 0 && (
          <div className="flex items-center gap-4 mt-4 sticky bottom-4 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-200">
              {numPages} pages
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer; 
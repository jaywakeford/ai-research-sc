'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error('Error loading PDF:', err);
    setError('Failed to load PDF. Please try refreshing the page.');
    setLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => {
      const nextPage = prevPageNumber + offset;
      if (numPages === null) return prevPageNumber;
      return Math.min(Math.max(1, nextPage), numPages);
    });
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* PDF Controls */}
      <div className="flex justify-between items-center mb-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <button
          onClick={() => changePage(-1)}
          disabled={pageNumber <= 1}
          className={`px-4 py-2 rounded-md ${
            pageNumber <= 1
              ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
          } text-white transition-colors`}
        >
          Previous
        </button>
        
        <p className="text-center text-gray-700 dark:text-gray-300">
          {numPages ? `Page ${pageNumber} of ${numPages}` : 'Loading...'}
        </p>
        
        <button
          onClick={() => changePage(1)}
          disabled={numPages === null || pageNumber >= numPages}
          className={`px-4 py-2 rounded-md ${
            numPages === null || pageNumber >= numPages
              ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
          } text-white transition-colors`}
        >
          Next
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 relative overflow-auto bg-gray-50 dark:bg-gray-900 rounded-lg">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 bg-opacity-90 z-10">
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
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="flex justify-center"
              loading={
                <div className="flex items-center justify-center h-[800px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                </div>
              }
            />
          </Document>
        )}
      </div>
    </div>
  );
};

export default PdfViewer; 
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

interface PdfViewerProps {
  pdfUrl: string;
  title?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, title }) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setError(`Failed to load PDF: ${error.message}`);
    setIsLoading(false);
  }

  const handlePrevPage = () => {
    setPageNumber(prev => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setPageNumber(prev => Math.min(numPages, prev + 1));
  };

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
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div>Loading PDF...</div>}
            >
              <Page
                pageNumber={pageNumber}
                width={600}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<div>Loading page {pageNumber}...</div>}
              />
            </Document>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={pageNumber <= 1}
              className={`px-4 py-2 rounded ${
                pageNumber <= 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={pageNumber >= numPages}
              className={`px-4 py-2 rounded ${
                pageNumber >= numPages
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Next
            </button>
          </div>

          {/* Download link */}
          <div className="flex justify-center mt-4">
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
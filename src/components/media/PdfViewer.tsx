import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
  title: string;
  totalPages: number;
}

// Create a Map to store page numbers for each PDF URL
const pdfPageNumbers = new Map<string, number>();

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, title, totalPages }) => {
  // Initialize page number from the Map or default to 1
  const [pageNumber, setPageNumber] = useState(() => pdfPageNumbers.get(pdfUrl) || 1);
  const [numPages, setNumPages] = useState(totalPages);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Update the Map whenever page number changes
  useEffect(() => {
    pdfPageNumbers.set(pdfUrl, pageNumber);
  }, [pageNumber, pdfUrl]);

  // Reset state when PDF changes
  useEffect(() => {
    const savedPage = pdfPageNumbers.get(pdfUrl) || 1;
    setPageNumber(savedPage);
    setNumPages(totalPages);
    setError(null);
    setIsLoading(true);
    console.log(`Initializing PDF viewer for: ${title}`);
  }, [title, totalPages, pdfUrl]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log(`Successfully loaded PDF: ${title} with ${numPages} pages`);
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error(`Error loading PDF ${title}:`, error);
    setError(`Failed to load PDF: ${error.message}`);
    setIsLoading(false);
  }

  function onPageLoadError(error: Error) {
    console.error(`Error loading page ${pageNumber} of ${title}:`, error);
    setError(`Failed to load page ${pageNumber}: ${error.message}`);
  }

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
    pdfPageNumbers.set(pdfUrl, newPage);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      
      {error ? (
        <div className="text-red-500 p-4 bg-red-50 rounded">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
          <p className="mt-2 text-sm">PDF URL: {pdfUrl}</p>
        </div>
      ) : (
        <>
          <div className="relative w-full">
            <div className="w-full overflow-hidden min-h-[600px] flex items-center justify-center bg-gray-50">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="text-center p-4">
                    <p>Loading PDF...</p>
                    <p className="text-sm text-gray-500">{title}</p>
                  </div>
                }
                error={
                  <div className="text-red-500 p-4">
                    <p>Failed to load PDF. Please try again.</p>
                  </div>
                }
              >
                <Page 
                  key={`${pdfUrl}_page_${pageNumber}`}
                  pageNumber={pageNumber} 
                  width={600}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  onLoadError={onPageLoadError}
                  loading={
                    <div className="text-center p-4">
                      <p>Loading page {pageNumber}...</p>
                    </div>
                  }
                  error={
                    <div className="text-red-500 p-4">
                      <p>Failed to load page {pageNumber}. Please try again.</p>
                    </div>
                  }
                />
              </Document>
            </div>

            {/* Navigation buttons overlaid on the sides */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
              <button
                onClick={() => handlePageChange(Math.max(1, pageNumber - 1))}
                disabled={pageNumber <= 1}
                className={`pointer-events-auto p-2 rounded-full ${
                  pageNumber <= 1 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
                style={{ transform: 'translateX(-50%)' }}
              >
                ←
              </button>
              <button
                onClick={() => handlePageChange(Math.min(numPages, pageNumber + 1))}
                disabled={pageNumber >= numPages}
                className={`pointer-events-auto p-2 rounded-full ${
                  pageNumber >= numPages 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
                style={{ transform: 'translateX(50%)' }}
              >
                →
              </button>
            </div>
          </div>
          
          {/* Page counter and download link */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="text-center">
              Page {pageNumber} of {numPages}
            </p>
            
            <a 
              href={pdfUrl} 
              download
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Download PDF
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default PdfViewer; 
'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import { getPdfPath } from '@/utils/paths';

// Dynamically import PDF components with loading fallback
const Document = dynamic(
  () => import('react-pdf').then(mod => mod.Document),
  {
    ssr: false,
    loading: () => <div>Loading PDF viewer...</div>
  }
);

const Page = dynamic(
  () => import('react-pdf').then(mod => mod.Page),
  {
    ssr: false,
    loading: () => <div>Loading page...</div>
  }
);

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = memo(({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [workerInitialized, setWorkerInitialized] = useState<boolean>(false);
  const fullPath = getPdfPath(pdfUrl);

  // Initialize PDF.js worker
  useEffect(() => {
    const initWorker = async () => {
      try {
        const pdfjs = await import('react-pdf');
        pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.pdfjs.version}/pdf.worker.min.js`;
        setWorkerInitialized(true);
      } catch (err) {
        console.error('Error initializing PDF worker:', err);
        setError('Failed to initialize PDF viewer');
      }
    };

    initWorker();
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((err: Error): void => {
    console.error('Error loading PDF:', err);
    setError(err.message || 'Failed to load PDF');
    setLoading(false);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setPageNumber(prevPage => {
      const validatedPage = Math.max(1, Math.min(newPage, numPages));
      return validatedPage !== prevPage ? validatedPage : prevPage;
    });
  }, [numPages]);

  if (!workerInitialized) {
    return <div>Initializing PDF viewer...</div>;
  }

  return (
    <div className="pdf-container">
      <div className="pdf-viewer">
        {loading && <div>Loading PDF...</div>}
        {error && (
          <div className="error-container">
            <div className="error-message">Error loading PDF: {error}</div>
            <div className="error-details">File: {fullPath}</div>
          </div>
        )}
        
        {!error && (
          <Document
            file={fullPath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div>Loading PDF...</div>}
            error={<div>Failed to load PDF. Please try again.</div>}
          >
            <div className="pdf-page-container">
              <Page 
                key={`page_${pageNumber}`}
                pageNumber={pageNumber} 
                loading={<div>Loading page...</div>}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                error={<div>Error loading page {pageNumber}</div>}
                width={800}
              />
            </div>
          </Document>
        )}
      </div>

      {!loading && !error && numPages > 0 && (
        <div className="navigation-controls">
          <div className="pdf-controls">
            <button
              onClick={() => handlePageChange(pageNumber - 1)}
              disabled={pageNumber <= 1}
              aria-label="Previous page"
              className="nav-button"
            >
              Previous
            </button>
            <span className="page-info">
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => handlePageChange(pageNumber + 1)}
              disabled={pageNumber >= numPages}
              aria-label="Next page"
              className="nav-button"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .pdf-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 1rem;
        }
        .pdf-viewer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 500px;
          max-height: 800px;
          overflow-y: auto;
        }
        .pdf-page-container {
          max-width: 100%;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .navigation-controls {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 0 0 8px 8px;
          margin-top: 1rem;
        }
        .pdf-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        .nav-button {
          padding: 0.5rem 1rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
          font-weight: 500;
        }
        .nav-button:hover:not(:disabled) {
          background: #0051a8;
        }
        .nav-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .page-info {
          color: #fff;
          font-size: 0.9rem;
        }
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #dc2626;
          text-align: center;
          padding: 2rem;
        }
        .error-message {
          font-weight: bold;
        }
        .error-details {
          font-size: 0.875rem;
          color: #666;
        }
      `}</style>
    </div>
  );
});

PdfViewer.displayName = 'PdfViewer';

export default PdfViewer; 
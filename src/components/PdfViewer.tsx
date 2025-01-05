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
          <Page 
            key={`page_${pageNumber}`}
            pageNumber={pageNumber} 
            loading={<div>Loading page...</div>}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            error={<div>Error loading page {pageNumber}</div>}
          />
        </Document>
      )}

      {!loading && !error && numPages > 0 && (
        <div className="pdf-controls">
          <button
            onClick={() => handlePageChange(pageNumber - 1)}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
          >
            Previous
          </button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => handlePageChange(pageNumber + 1)}
            disabled={pageNumber >= numPages}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}

      <style jsx>{`
        .pdf-viewer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          min-height: 500px;
        }
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #dc2626;
          text-align: center;
        }
        .error-message {
          font-weight: bold;
        }
        .error-details {
          font-size: 0.875rem;
          color: #666;
        }
        .pdf-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 1rem;
        }
        button {
          padding: 0.5rem 1rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        button:hover:not(:disabled) {
          background: #0051a8;
        }
        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
});

PdfViewer.displayName = 'PdfViewer';

export default PdfViewer; 
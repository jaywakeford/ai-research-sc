'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), {
  ssr: false
});

const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), {
  ssr: false
});

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Configure PDF.js worker
  useEffect(() => {
    import('react-pdf').then(mod => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${mod.pdfjs.version}/pdf.worker.min.js`;
    });
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(err: Error): void {
    console.error('Error loading PDF:', err);
    setError(err.message);
    setLoading(false);
  }

  return (
    <div className="pdf-viewer">
      {loading && <div>Loading PDF...</div>}
      {error && <div>Error loading PDF: {error}</div>}
      
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<div>Loading PDF...</div>}
      >
        <Page 
          pageNumber={pageNumber} 
          loading={<div>Loading page...</div>}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      {!loading && !error && (
        <div className="pdf-controls">
          <button
            onClick={() => setPageNumber(page => Math.max(1, page - 1))}
            disabled={pageNumber <= 1}
          >
            Previous
          </button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(page => Math.min(numPages, page + 1))}
            disabled={pageNumber >= numPages}
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
        }
        .pdf-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        button {
          padding: 0.5rem 1rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default PdfViewer; 
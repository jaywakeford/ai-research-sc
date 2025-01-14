'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
    setError(null);
  }

  function onDocumentLoadError(err: Error): void {
    console.error('Error loading PDF:', err, 'URL:', pdfUrl);
    setError(`Error loading PDF: ${err.message}. Please check the file path and try again.`);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 p-2 bg-gray-800 rounded-lg">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => changePage(1)}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
          <span className="text-white">
            Page {pageNumber} of {numPages}
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-900 rounded-lg flex justify-center">
        {error ? (
          <div className="text-red-500 flex flex-col items-center justify-center p-4 text-center">
            <div>{error}</div>
            <div className="mt-2">Attempted URL: {pdfUrl}</div>
          </div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="text-white p-4">Loading PDF...</div>}
            error={<div className="text-red-500 p-4">Failed to load PDF. Please try again.</div>}
          >
            <Page
              pageNumber={pageNumber}
              className="max-w-full"
              loading={<div className="text-white p-4">Loading page...</div>}
              error={<div className="text-red-500 p-4">Failed to load page. Please try again.</div>}
            />
          </Document>
        )}
      </div>
    </div>
  );
};

interface PdfViewerProps {
  pdfUrl: string;
}

export default PdfViewer; 
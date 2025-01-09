'use client';

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure worker
if (typeof window !== 'undefined') {
  const pdfjsWorker = require('pdfjs-dist/build/pdf.worker.entry');
  require('pdfjs-dist').GlobalWorkerOptions.workerSrc = pdfjsWorker;
}

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
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
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="text-white">Loading PDF...</div>}
          error={<div className="text-red-500">Error loading PDF.</div>}
        >
          <Page
            pageNumber={pageNumber}
            className="max-w-full"
            loading={<div className="text-white">Loading page...</div>}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer; 
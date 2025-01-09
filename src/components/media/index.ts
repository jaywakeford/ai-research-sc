/**
 * Media Components
 * 
 * This module exports components for handling various types of media content.
 * These components are optimized for different media types and support dynamic loading.
 */

/**
 * AudioPlayer - A customized audio player component for playing audio content.
 * Features:
 * - Custom controls and styling
 * - Progress tracking
 * - Support for various audio formats
 * - Responsive design
 */
export { default as AudioPlayer } from './AudioPlayer';

/**
 * VideoPlayer - A video playback component with enhanced controls.
 * Features:
 * - Custom video controls
 * - Responsive layout
 * - Support for multiple video formats
 * - Loading states and error handling
 */
export { default as VideoPlayer } from './VideoPlayer';

/**
 * PdfViewer - A component for displaying PDF documents inline.
 * Features:
 * - PDF rendering with zoom controls
 * - Page navigation
 * - Dynamic loading for better performance
 * - Responsive layout adaptation
 */
export { default as PdfViewer } from './PdfViewer'; 
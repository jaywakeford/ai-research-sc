/**
 * Core UI Components
 * 
 * This module exports fundamental UI components that are used across the application.
 * These components form the basic building blocks of the user interface.
 */

/**
 * ImageCard - A responsive card component that displays an image with title and description.
 * Features:
 * - Handles image loading and fallback states
 * - Supports placeholder display when no image is provided
 * - Responsive design with proper aspect ratio
 */
export { default as ImageCard } from './ImageCard';

/**
 * HeroSection - The main landing section component used at the top of pages.
 * Features:
 * - Full-width layout with responsive design
 * - Supports headline and descriptive text
 * - Optimized for visual impact
 */
export { default as HeroSection } from './HeroSection';

/**
 * ImagePlaceholder - A fallback component displayed when images are loading or unavailable.
 * Features:
 * - Maintains layout consistency during image loading
 * - Customizable aspect ratio
 * - Displays title and subtitle in a visually appealing way
 */
export { default as ImagePlaceholder } from './ImagePlaceholder'; 
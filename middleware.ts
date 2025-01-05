import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add CORS headers for all requests
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Range');
  response.headers.set('Access-Control-Expose-Headers', 'Content-Range, Accept-Ranges');
  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

  // Get the file extension
  const pathname = request.nextUrl.pathname;
  const ext = pathname.split('.').pop()?.toLowerCase();

  // Set appropriate content type and cache headers based on file extension
  if (ext === 'pdf') {
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set('Accept-Ranges', 'bytes');
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  } else if (ext === 'mp3') {
    response.headers.set('Content-Type', 'audio/mpeg');
    response.headers.set('Accept-Ranges', 'bytes');
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  } else if (ext === 'mp4') {
    response.headers.set('Content-Type', 'video/mp4');
    response.headers.set('Accept-Ranges', 'bytes');
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  }

  return response;
}

export const config = {
  matcher: [
    // Match all files in the public directory
    '/media/pdfs/:path*',
    '/media/audio/:path*',
    '/media/videos/:path*',
  ],
}; 
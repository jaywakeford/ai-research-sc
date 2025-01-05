import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 });
  }

  try {
    const publicDir = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicDir, filePath);

    // Check if file exists
    const stats = await fs.stat(fullPath);
    const exists = stats.isFile();

    // Get file size
    const size = stats.size;

    // Determine MIME type
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes: { [key: string]: string } = {
      '.pdf': 'application/pdf',
      '.mp3': 'audio/mpeg',
      '.mp4': 'video/mp4',
    };

    return NextResponse.json({
      exists,
      size,
      mimeType: mimeTypes[ext] || 'application/octet-stream',
      path: filePath,
    });
  } catch (error) {
    console.error('Error checking file:', error);
    return NextResponse.json({ error: 'File not found or inaccessible' }, { status: 404 });
  }
} 
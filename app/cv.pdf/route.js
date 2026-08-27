import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'cv.pdf');
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'inline; filename="Jawad_Hakimi_CV.pdf"',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
    return new NextResponse('CV not found', { status: 404 });
  } catch (error) {
    return new NextResponse('CV not found', { status: 404 });
  }
}

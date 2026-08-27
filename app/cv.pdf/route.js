import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const uploadedPath = 'C:\\Users\\MYC\\.gemini\\antigravity-ide\\brain\\5a2f8e7a-6143-456c-8a55-69253679e35f\\.user_uploaded\\media_1787860467685.pdf';
  
  try {
    if (fs.existsSync(uploadedPath)) {
      const fileBuffer = fs.readFileSync(uploadedPath);
      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'inline; filename="Jawad_Hakimi_CV.pdf"',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    const fallbackPath = path.join(process.cwd(), 'public', 'Jawad_Hakimi_CV.pdf');
    const fileBuffer = fs.readFileSync(fallbackPath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Jawad_Hakimi_CV.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('CV not found', { status: 404 });
  }
}

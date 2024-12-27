

import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { IncomingMessage } from 'http';

// Ensure the public/uploads directory exists
const uploadDir = path.join(process.cwd(), 'public/uploads');
fs.mkdir(uploadDir, { recursive: true });

export const config = {
  api: {
    bodyParser: false, // Disable the built-in body parser to handle file streams
  },
};


export const POST = async(req: NextRequest)=>{

    const formData = await req.formData();
    const file = formData.get('file') as File;
  
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
  
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(uploadDir, file.name);
  
    try {
      await fs.writeFile(filePath, buffer);
      return NextResponse.json({ message: 'File uploaded successfully', fileUrl: `/uploads/${file.name}` });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
    }
  }

  
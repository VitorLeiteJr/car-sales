

import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { IncomingMessage } from 'http';
import { db } from '@/app/_lib/prisma';

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
    const id = formData.get('id') as string;

  
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    
  
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(uploadDir, file.name);
  
    try {
      await fs.writeFile(filePath, buffer);
    const insert=  await db.images.createManyAndReturn({
        data:[
          {
            src: `/uploads/${file.name}`,
            carId: id,
            main: false
          },
        ]
      })
      console.log(insert[0].id);
      const returnId = insert[0].id;
      return NextResponse.json({returnId});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
    }
  }

  
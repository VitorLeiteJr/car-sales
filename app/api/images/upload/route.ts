
import fs from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/_lib/prisma';

// Ensure the public/uploads directory exists
const uploadDir = path.join(process.cwd(), 'public/uploads');
fs.mkdir(uploadDir, { recursive: true });


export const POST = async(req: NextRequest)=>{

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const id = formData.get('id') as string;
    const type = formData.get('type') as string;



  

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    
    
  
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(uploadDir, file.name);

      if(id==="main"){
        try{
            await fs.writeFile(filePath,buffer);
            return NextResponse.json({status: true, path: `/uploads/${file.name}`})
        }catch{
          return NextResponse.json({status: false})
        }
      }

  
    try {

        if(type==='main'){

          try{
            await fs.writeFile(filePath,buffer);
            await db.cars.updateMany({
              where:{
                id: id
              },
              data:{
                image: `/uploads/${file.name}`
              }
            })
            return NextResponse.json({status: true})

          }catch{
            return NextResponse.json({status: false})
          }

        }


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
      //console.log(insert[0].id);
      const returnId = insert[0].id;
      return NextResponse.json({returnId});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
    }
  }

  
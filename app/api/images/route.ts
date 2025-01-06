import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) =>{

    const body = await req.json();
    const { id } = body;

    try {

       
            const gmainImage = await db.cars.findMany({
                select:{
                    id: true,
                    image: true
                },
                where:{
                    id: id
                }

            });


            const mainImage = gmainImage.map(user => ({
                id: user.id,
                src: user.image,
              }));
        

       const images =  await db.images.findMany({
        select:{
            id: true,
            src: true,
        },
            where: {
                carId: id
            }   
        });

        return NextResponse.json({mainImage: mainImage, images: images, status: true});

    }catch{

        return NextResponse.json({status: false});
    }



}
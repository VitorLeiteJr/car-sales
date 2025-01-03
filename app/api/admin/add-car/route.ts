import { db } from "@/app/_lib/prisma";
import { NextRequest } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {name,year,km,mark,type,transmission,fuel,slug,price,version, traction, doors, absBrake, city,srcImage } = body;   


    try{

        await db.cars.create({
            data:{
                name:name,
                year:year,
                km:parseInt(km),
                mark:mark,
                type:type,
                transmission:transmission,
                fuel:fuel,
                slug:slug,
                price:parseInt(price),
                version:version,
                traction:traction,
                doors:doors,
                absBrake:absBrake,
                city:city,
                image: srcImage

            }
        })

    }catch{

    }


}
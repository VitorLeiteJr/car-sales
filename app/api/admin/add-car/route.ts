import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {name,year,km,mark,type,transmission,fuel,slug,price,version, traction, doors, absBrake, city,srcImage } = body;   


   // try{

       const insertCar = await db.cars.create({
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
                absBrake:true,
                city:city,
                image: srcImage

            }
        });

        console.log(insertCar);

        return NextResponse.json({status: true});

    //}catch{
      //  return NextResponse.json({status: false});

    //}


}
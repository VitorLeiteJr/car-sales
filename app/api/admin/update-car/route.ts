import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {name,year,km,mark,type,transmission,fuel,slug,price,version, traction, doors, city,id } = body;   
 


    try {

    const upd =  await db.cars.update({

            where:{
                id:id
            },
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
                city:city
                
            }   
                        });
            console.log(upd);

           return NextResponse.json({status: true, message: "Informações atualizadas com sucesso"});             

    }catch{

        return NextResponse.json({status: false, message: "Erro ao atualizar informações"});
    }

                                    }

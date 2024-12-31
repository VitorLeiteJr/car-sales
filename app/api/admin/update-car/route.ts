import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {id,name,year,km,mark,type,transmission,fuel,slug,price} = body;   


    try {

     await db.cars.update({

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
                price:parseInt(price)
                
            }   
                        });

           return NextResponse.json({status: true, message: "Informações atualizadas com sucesso"});             

    }catch{

        return NextResponse.json({status: false, message: "Erro ao atualizar informações"});
    }

                                    }

"use server"
import { db } from "@/app/_lib/prisma"

export const GetListCar= async (mark: string)=>    {

    if(mark==="all"){

            const list = await db.cars.findMany({})

            return list;
    }

    const list = await db.cars.findMany({

        where: {
            mark: mark
        }
        
    })

    return list;

}
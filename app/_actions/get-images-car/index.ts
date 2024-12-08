import { db } from "@/app/_lib/prisma"

export const GetMainImageCar = async (slug: string, main?: boolean)=>{


        
            const idCar =await db.cars.findFirst({
                where:{
                    slug:slug
                }
            });


    if(main){
       
        const mainImage =await db.images.findFirst({
            where:{
                carId: idCar?.id
            }
        });

        return mainImage;
    }
 
}

export const GetImagesCar = async (slug: string)=>{

       
         
    const idCar =await db.cars.findFirst({
        where:{
            slug:slug
        }
    });

    const images = await db.images.findMany({
        where:{
            carId: idCar?.id
        }
    })
    return images; 

}
    



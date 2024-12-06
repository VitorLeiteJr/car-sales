import { db } from "@/app/_lib/prisma"

export const GetSpeficCar = async(slug: string ) => {
    

    try{
       const car = db.cars.findFirst({
        where:
        {
            slug: slug
        
        }
       }) 
        return car;
    }
    catch{
       return null;
    }
}

    
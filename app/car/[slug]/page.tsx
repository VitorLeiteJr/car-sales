import { GetListCar } from '@/app/_actions/get-list-cars'
import { CardContent,Card } from '@/app/_components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/_components/ui/carousel'
import Image from 'next/image'
import React from 'react'

interface carProps {
    params:{
        slug: string
    }
}

const Car = async ({params}: carProps) => {

    const list = await GetListCar("all");

  return (
    <div className='px-56 py-9'>
      <div className='container mx-auto'>

        <div className="justify-center flex ">
          <div className='w-3/4'>
          <Carousel className="w-full">
      <CarouselContent>
        {list.map((car, index) => (
         
          <CarouselItem key={index}>
           
              <Card>
                <CardContent className="relative aspect-video items-center justify-center p-6">
               
                 <Image src={car.image} layout='fill' alt='' className='object-cover'/>
                

                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

        <div className='grid grid-cols-2'>
          <p className="">teste</p>
          <p className="">teste</p>
          <p className="">teste</p>
        </div>
          </div>

          <div>
          <p className='text-2xl font-bold text-center ml-20'>R$ 500.000,00</p>
          </div>
        
        </div>

      </div>
     
     
    </div>
  )
}

export default Car

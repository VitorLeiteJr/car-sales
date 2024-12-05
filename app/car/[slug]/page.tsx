import { GetListCar } from '@/app/_actions/get-list-cars'
import { CardContent,Card } from '@/app/_components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/_components/ui/carousel'
import { Separator } from '@/app/_components/ui/separator'
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

          <div className='ml-20'>
         
                  <div className='flex gap-1'>
                      <p className='text-2xl font-semibold'>{list[0].mark} </p>
                      <p className='text-2xl font-semibold'> {list[0].name}</p>
                  </div>

                  <div className='flex gap-1'>
                      <p>{list[0].km}km</p>
                      <p>• </p>
                      <p>{list[0].city}</p>
                  </div>   

                  <Separator className='bg-primary mt-6'/>

                  <div className='mt-3'>
                  <p>Preço à vista</p>
                        <div className='flex'>
                        <p className='font-semibold py-2 '>R$</p>
                        <p className='text-2xl font-bold ml-1'>{list[0].price},00</p>
                        </div>
                  </div> 
                  
                  <Separator className='bg-primary mt-6'/>

                  <div className='justify-between flex items-center mt-3'>
                         
                          <div>
                            <p>Ano</p>
                            <p className='text-xl font-semibold'>{list[0].year}</p>
                          </div>
                          <div>
                          <p>Transmissão</p>  
                          <p className='text-xl font-semibold'>{list[0].transmission}</p>
                          </div>  

                  </div>

                  <Separator className='bg-primary mt-6'/>


                    <div className='justify-between flex items-center mt-3'>
                                  
                              <div>
                                      <p>Versão</p>
                                      <p className='text-xl font-semibold'>{list[0].version}</p>
                              </div>

                              <div>
                                <p>Tração</p>
                                <p className='text-xl font-semibold'>{list[0].traction} </p>
                              </div>



                    </div>               


            
            </div>
        
        </div>

      </div>
     
     
    </div>
  )
}

export default Car

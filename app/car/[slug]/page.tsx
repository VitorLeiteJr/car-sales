
import { GetSpeficCar } from '@/app/_actions/get-spefic-car'
import { CardContent,Card } from '@/app/_components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/_components/ui/carousel'
import { Separator } from '@/app/_components/ui/separator'
import CarList from '@/app/_sections/carList'
import CallToAction from '@/app/_sections/cta/cta'
import CalltoActionSecond from '@/app/_sections/cta/cta-second'
import Image from 'next/image'
import React from 'react'

interface carProps {
    params:{
        slug: string
    }
}

const Car = async ({params}: carProps) => {

    const selectedCar = await GetSpeficCar(params.slug);

    if(selectedCar===null){
      return;
    }

  return (
    <>
    <div className='px-56 py-9'>
      <div className='container mx-auto'>

        <div className="justify-center flex ">
          <div className='w-3/4'>
          <Carousel className="w-full">
      <CarouselContent>
        {/*selectedCar.map((car, index) => (*/}
         
          <CarouselItem>
           
              <Card>
                <CardContent className="relative aspect-video items-center justify-center p-6">
               
                 <Image src={selectedCar.image} layout='fill' alt='' className='object-cover'/>
                

                </CardContent>
              </Card>
          </CarouselItem>
       {/* ))*/}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

          </div>

          <div className='ml-20'>
         
                  <div className='flex gap-1'>
                      <p className='text-2xl font-semibold'>{selectedCar.mark} </p>
                      <p className='text-2xl font-semibold'> {selectedCar.name}</p>
                  </div>

                  <div className='flex gap-1'>
                      <p>{selectedCar.km}km</p>
                      <p>• </p>
                      <p>{selectedCar.city}</p>
                  </div>   

                  <Separator className='bg-primary mt-6'/>

                  <div className='mt-3'>
                  <p>Preço à vista</p>
                        <div className='flex'>
                        <p className='font-semibold py-2 '>R$</p>
                        <p className='text-2xl font-bold ml-1'>{selectedCar.price},00</p>
                        </div>
                  </div> 
                  
                  <Separator className='bg-primary mt-6'/>

                  <div className='justify-between flex items-center mt-3'>
                         
                          <div>
                            <p>Ano</p>
                            <p className='text-xl font-semibold'>{selectedCar.year}</p>
                          </div>
                          <div>
                          <p>Transmissão</p>  
                          <p className='text-xl font-semibold'>{selectedCar.transmission}</p>
                          </div>  

                  </div>

                  <Separator className='bg-primary mt-6'/>


                    <div className='justify-between flex items-center mt-3'>
                                  
                              <div>
                                      <p>Versão</p>
                                      <p className='text-xl font-semibold'>{selectedCar.version}</p>
                              </div>

                              <div>
                                <p>Tração</p>
                                <p className='text-xl font-semibold'>{selectedCar.traction} </p>
                              </div>



                    </div>       

                    <button className="px-8 py-2 bg-primary hover:bg-primary-hover text-white rounded mt-6 align-bottom whitespace-nowrap">Tenho interesse!</button>        


            
            </div>
        
        </div>

      </div>
     
    </div>
    
  <CarList/>
  </>
  )
}

export default Car

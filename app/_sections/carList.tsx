import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../_components/ui/carousel'
import Image from 'next/image'

const CarList = () => {
  return (
    
    <div className='px-56 py-9'>
      
     <div>
     <p className='text-4xl font-semibold py-9 text-black flex items-center justify-center'>Escolha seu próximo carro</p>

     </div>
    <div className='justify-center items-center'>
      <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className='items-center justify-center'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className='px-4 justify-center items-center'>
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 w-[500px] h-[300]">
            <Image src={'/lamb.jpg'} alt='' width={500} height={300} />
            
            <div className='px-2 py-2 bg-white rounded-b-2xl border-b-primary border-2' > 
            
            <p className='text-black'>Chevrolet Onix</p>
            <p className='text-black'>2018 - 73.400km - Manual</p>
            <p className='text-black mt-3 text-xl text-semibold'> Preço à vista </p>
            <div className='text-black flex'>
                <p className='mr-1'>R$</p>
                <p className='text-2xl font-semibold text-primary'>40.399,00</p>
            <p/>
            </div>
            </div>

            </div>
          </CarouselItem>
           </div>
        ))}
      </CarouselContent>
      <CarouselPrevious className='bg-black text-white hover:bg-primary'/>
      <CarouselNext className='bg-black text-white hover:bg-primary'/>
    </Carousel>
    </div>
    </div>

   )
}

export default CarList

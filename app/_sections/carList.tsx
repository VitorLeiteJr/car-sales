import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../_components/ui/carousel'
import CardComp from '../_components/card'
import { GetListCar } from '../_actions/get-list-cars'

const CarList = async() => {

  const car = await GetListCar();

  return (
    
    <div className='px-56 py-9'>
      
     <div>
     <p className='text-4xl font-semibold py-9 text-black flex items-center justify-center'>Escolha seu próximo carro</p>

     </div>
    <div className='justify-center items-center flex'>
      <Carousel className='justify-center flex items-center'
      opts={{
        align: "start",
        
      }}
    >
      <CarouselContent>

        {car.map((_, index) => (

          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          
          <CardComp car={car[index]}/>

          </CarouselItem>
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

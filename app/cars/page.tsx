import React from 'react'
import Image from 'next/image'
import { Separator } from '../_components/ui/separator'
import Link from 'next/link'
import { db } from '../_lib/prisma'

const Cars = async () => {

const cars = await db.cars.findMany({});


  return (
    <>
    <div className="container mx-auto px-56 py-9">

    <Separator className='bg-primary mb-2'/>
    <div className='flex justify-center items-center gap-4 text-xl font-semibold'>

        <Link href={'#'}>Chevrolet</Link>
        <Link href={'#'}>Honda</Link>
        <Link href={'#'}>Hyunday</Link>
        <Link href={'#'}>Fiat</Link>
        <Link href={'#'}>Volkswagen</Link>
        <Link href={'#'}>Toyota</Link>


    </div>
    <Separator className='bg-primary mt-2 mb-9'/>

    <div className='grid lg:grid-cols-3 gap-4'>
      {cars.map((car,index)=>(
        
              <div key={index} className='border-2 border-b-primary rounded-b-3xl'>
                <div className='relative w-full h-56'>
                  <Image src={car.image} alt='car'className='objext-cover'fill/>
                </div>
                <div className='px-4 mt-9'>
                <p className='font-semibold flex mt-2'>{car.name}</p>
                <p>{car.year} - {car.km} km - {car.type} - {car.transmission}</p>

                <div className='mt-6 text-xl'>
                    <Separator className='bg-primary mb-3'/>
                  <p className='mb-1'>Preço à vista</p>
                <div className='flex mb-2'>
                  <p className='mr-1 font-semibold text-xl'>R$</p>
                  <p className='font-semibold text-2xl'>{String(car.price)},00</p>
                </div>
                </div>
                


             <div className='mt-6'>
              <Separator className='bg-primary mb-2'/>
             <div className='flex'>
                <div className='w-6 mr-1'>
                    <svg
                    viewBox="0 0 1024 1024">
                      <path d="M512 80c179.712 0 325.374 145.62 325.374 325.374 0 165.785-277.007
                      487.298-319.835 536.035-1.334 1.587-3.318 2.591-5.539 2.591s-4.205-1.004-5.528-2.578l-.011-.013c-42.845-48.729-319.835-370.251-319.835-536.035C186.626 225.621 332.288 80 512 80zm0 162.545c-59.899 0-108.459 48.56-108.459 108.459S452.101 459.463 512 459.463c59.9 0 108.459-48.56 108.459-108.459v-.011.001c-.024-59.889-48.568-108.429-108.457-108.448H512z"></path></svg>
                    </div>

                  <p className='text-xl mb-2'>{car.city}</p>

                </div>

             </div>
                </div>
              </div>
  
))}
       
      
   </div>
      </div>
    
    {/*<CallToAction/>*/}
    </>
  )
}

export default Cars 

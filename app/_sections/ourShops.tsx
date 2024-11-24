import Image from 'next/image'
import React from 'react'

const OurShops = () => {
  return (

    <div className='px-56 text-black font-semibold'>

       <div className='justify-center items-center grid py-9'>


      <div className='justify-center items-center flex'>
       <p className='text-4xl font-semibold py-9'>Visite uma de nossas lojas!</p>   
       </div>
       <div className='flex gap-3'>
            
            
            <div>
            <Image src={'/lamb.jpg'} alt='' width={500} height={300}/>
              <div className='px-2 py-2 bg-white rounded-b-2xl border-b-primary border-2' > 
                  <p className='py-3 text-black text-3xl font-semibold'>Auto Club</p>
                  <p className=' py-3 text-black'>Avenida SP, Mato Grosso, Brasil</p>
                  
                  <button className='px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded '>Saiba mais</button>
            </div>
            </div>

            <div>
            <Image src={'/lamb.jpg'} alt='' width={500} height={300}/>
              <div className='px-2 py-2 bg-white rounded-b-2xl border-b-primary border-2' > 
                  <p className='py-3 text-black text-3xl font-semibold'>Auto Club</p>
                  <p className=' py-3 text-black'>Avenida SP, Mato Grosso, Brasil</p>
                  
                  <button className='px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded '>Saiba mais</button>
            </div>
            </div>

            <div>
            <Image src={'/lamb.jpg'} alt='' width={500} height={300}/>
              <div className='px-2 py-2 bg-white rounded-b-2xl border-b-primary border-2' > 
                  <p className='py-3 text-black text-3xl font-semibold'>Auto Club</p>
                  <p className=' py-3 text-black'>Avenida SP, Mato Grosso, Brasil</p>
                  
                  <button className='px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded '>Saiba mais</button>
            </div>
            </div>
            

            
        </div>


       </div>

      
    </div>
  
         )
                    }

export default OurShops;

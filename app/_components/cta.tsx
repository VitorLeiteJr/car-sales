import React from 'react'
import Image from 'next/image'

const CallToAction = () => {
  return (
    <div className='bg-red-600 flex justify-around items-center'>

    <div className='px-56'>
        <p className='font-semibold text-5xl py-8'> Elegantes, robustos e completos!</p>
        <p className='text-xl'>compre nossos carros em alta qualidade!</p>

    <div className='py-7'>
    <button className='px-6 py-3 bg-white hover:bg-yellow-50 text-black rounded '>Saiba mais</button>

    </div>
    
    </div>
    
    <div>
        <Image  src='/renderLamb.png' alt='' width={1000} height={700} />
    </div>
      
    </div>
  )
}

export default CallToAction

import Image from 'next/image'
import React from 'react'

const CalltoActionSecond = () => {
  return (
   <div className='px-56 bg-primary'>
   <div className='flex justify-center items-center'>

    <div>
        <Image  src='/renderLamb.png' alt='' width={800} height={700} />
    </div>

    <div className='px-14'>
        <p className='font-semibold text-5xl py-8 text-white'> Elegantes, robustos e completos!</p>
        <p className='text-xl text-white'>compre nossos carros em alta qualidade!</p>

    <div className='py-7'>
    <button className='px-6 py-3 bg-white hover:bg-gray-50 text-black rounded '>Saiba mais</button>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default CalltoActionSecond
import Image from 'next/image'
import React from 'react'

const CalltoActionSecond = () => {
  return (
   <div className='px-56'>
   <div className='bg-white flex justify-around items-center'>

    <div>
        <Image  src='/renderLamb.png' alt='' width={800} height={700} />
    </div>

    <div className='px-14'>
        <p className='font-semibold text-5xl py-8 text-black'> Elegantes, robustos e completos!</p>
        <p className='text-xl text-black'>compre nossos carros em alta qualidade!</p>

    <div className='py-7'>
    <button className='px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded '>Saiba mais</button>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default CalltoActionSecond

import React from 'react'
import Image from 'next/image'

const QualitySection = () => {
  return (
   
    <div className='px-56'>

    <div className=' flex flex-row items-center gap-4 py-9 justify-center '>
        <div  className='flex-col rounded-xl bg-white text-black font-semibold border-b-red-600 border-2'>
            <Image className="rounded-s-sm" src={"/lamb.jpg"} alt='' width={350} height={350}/>
            <p className='py-3 px-2'> Esse carro foi feito pra vocë!</p>
        </div>
        
        <div  className='flex-col rounded-xl bg-white text-black font-semibold border-b-red-600 border-2'>
            <Image className="rounded-s-sm" src={"/lamb.jpg"} alt='' width={350} height={350}/>
            <p className='py-3 px-2'> Esse carro foi feito pra vocë!</p>
        </div>
        
        <div  className='flex-col rounded-xl bg-white text-black font-semibold border-b-red-600 border-2'>
            <Image className="rounded-s-sm" src={"/lamb.jpg"} alt='' width={350} height={350}/>
            <p className='py-3 px-2'> Esse carro foi feito pra vocë!</p>
        </div>
    </div>

    <div className='justify-center items-center flex py-9'>
    <button className='px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded'>Saiba mais</button>
    </div>
       
    </div>
   
  )
}

export default QualitySection

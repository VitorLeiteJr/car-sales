import React from 'react'
import Image from 'next/image'

const QualitySection = () => {
  return (
  <div className='px-56 justify-center items-center'>

            <p className='text-4xl text-black font-semibold flex justify-center'>3 motivos para comprar no Auto Club</p>

    <div className='flex flex-row gap-4 py-9'>
        <div  className='flex-col rounded-xl bg-white text-black font-semibold border-b-primary border-2'>
            <Image className="rounded-s-sm" src={"/lamb.jpg"} alt='' width={350} height={350}/>
            <p className='py-3 px-2'> Esse carro foi feito pra vocë!</p>
        </div>
        
        <div  className='flex-col rounded-xl bg-white text-black font-semibold border-b-primary border-2'>
            <Image className="rounded-s-sm" src={"/lamb.jpg"} alt='' width={350} height={350}/>
            <p className='py-3 px-2'> Esse carro foi feito pra vocë!</p>
        </div>
        
        <div  className='flex-col rounded-xl bg-white text-black font-semibold border-b-primary border-2'>
            <Image className="rounded-s-sm" src={"/lamb.jpg"} alt='' width={350} height={350}/>
            <p className='py-3 px-2'> Esse carro foi feito pra vocë!</p>
        </div>
    </div>

    <div className='justify-center flex mb-6'>
    <button className='px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded'>Saiba mais</button>
    </div>
   </div>
  )
}

export default QualitySection

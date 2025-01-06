import Image from 'next/image'
import React from 'react'
import OurShops from '../_sections/ourShops'

const AboutPage = () => {
  return (
    <div>
    <div className='container mx-auto px-56'>
      <div>
        <div className='justify-center items-center flex'>
    <Image src={'/lamb.jpg'} width={1000} height={1000} alt='lamb' />
        </div>
      </div>
      <div className='justify-center items-center flex '>
        <p className='text-3xl font-semibold py-6'>Auto Club Racing</p>
        </div>
        <div className='items-center justify-center flex'>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Id sapiente aliquid molestiae quam ad beatae similique?
           Sunt alias ratione voluptatem odit minus ab animi,
            minima suscipit sint omnis perferendis reiciendis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Id sapiente aliquid molestiae quam ad beatae similique?
           Sunt alias ratione voluptatem odit minus ab animi,
            minima suscipit sint omnis perferendis reiciendis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Id sapiente aliquid molestiae quam ad beatae similique?
           Sunt alias ratione voluptatem odit minus ab animi,
            minima suscipit sint omnis perferendis reiciendis.</p>
      </div>
    </div>
    <OurShops/>
    </div>
    
  )
}

export default AboutPage

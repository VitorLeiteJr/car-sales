import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-56'>
      <div className='py-16 flex text-black font-semibold justify-center items-center'>
        <div>
        <Image src={'/logo.png'} alt='' width={100} height={100}/>
        </div>
        <div className='px-32 flex'>
          <div>
          <p>Home</p>
          <p>Sobre</p>
          <p>Carros</p>
          <p>Contato</p>
          </div>
          <div className='px-64'>
            <p>Login</p>
            <p>Carrinho</p>
            <p>Favoritos</p>
            <p>Logout</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>WhatsApp</p>
          </div>
        </div>
      </div>

        <div className='flex justify-center items-center text-black font-semibold font-mono'>
          Copyright © 2024 - Auto Club
        </div>

    </div>
  )
}

export default Footer

import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='px-56 py-9'>
        
        <div className='container mx-auto'>
            <div className='justify-center items-center flex'>
                <div className='ml-10'>
                   <p className='text-4xl'>Precisa de ajuda? Estamos aqui   </p>
                    <p className='mt-5 text-xl'>Respondemos todas as suas dúvidas de forma clara,</p><p>rápida e direta. Envie um WhatsApp para +55 11 3230-3881</p> 
                </div>

        <div className='ml-10'>

        <Image src={'https://thumbs.dreamstime.com/b/voc%C3%AA-n%C3%A3o-precisa-de-um-motivo-para-ajudar-os-outros-duas-pessoas-com-m%C3%A3os-no-conforto-258515910.jpg'} alt='' width={500} height={300}/>

        </div>

            </div>

        </div>

    </div>
      
    </> 
  )
}

export default Contact

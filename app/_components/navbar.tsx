import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    
   <div className='flex justify-between items-center px-5 py-2 bg-slate-400'>

{/**ITEMS */}
    <div >
      <Image src={"/logo.png"} width={65} height={65} alt={"logo"}/>
    
    </div>
    <div className='flex gap-5 items-center font-semibold caption-top'>

    <Link href={'/'}>Home</Link>
      <Link href={'/about'}>Sobre</Link>
      <Link href={'/contact'}>Contato</Link>
      <Link href={'/cars'}>Carros</Link>

    </div>

    {/* LOGIN */ }
    <div>
    Login
    </div>

   </div> 


  )
}

export default Navbar

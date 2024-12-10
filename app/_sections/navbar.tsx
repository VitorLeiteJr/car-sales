import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import DialogLogin from '../panel/_components/dialogLogin';

const Navbar = () => {
  return (
    <>
  <nav className="bg-white text-black font-semibold">
  <div className="container mx-auto flex items-center justify-between p-4">
    {/* Logo */}
    <Link href={'/'}>
    <Image src={'/logo.png'} width={50} height={50} alt='logo'/>
    </Link>

    {/* Menu */}
    <ul className="flex space-x-6">
      <li>
        <Link href={'/'} className="hover:text-primary">Home</Link>
      </li>
      <li>
      <Link href={'/about'} className="hover:text-primary">Sobre</Link>
      </li>
      <li>
       <Link href={'/cars'} className='hover:text-primary'>Carros</Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-primary">Contato</Link>
      </li>
    </ul>

    {/* Button */}
    <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded">
      Login
    </button>
  </div>
</nav>
<DialogLogin show={true}/>
</>
);
};

export default Navbar

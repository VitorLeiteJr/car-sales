import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
  return (
  <nav className="bg-white text-black font-semibold">
  <div className="container mx-auto flex items-center justify-between p-4">
    {/* Logo */}
    <Image src={'/logo.png'} width={50} height={50} alt='logo'/>

    {/* Menu */}
    <ul className="flex space-x-6">
      <li>
        <Link href={'/'} className="hover:text-primary">Home</Link>
      </li>
      <li>
      <Link href={'/about'} className="hover:text-primary">Sobre</Link>
      </li>
      <li>
        <a href="#" className="hover:text-primary">Carros</a>
      </li>
      <li>
        <a href="#" className="hover:text-primary">Contato</a>
      </li>
    </ul>

    {/* Button */}
    <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded">
      Login
    </button>
  </div>
</nav>
);
};

export default Navbar

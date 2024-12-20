"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import DialogLogin from '../panel/_components/dialogLogin';
import axios from 'axios';
import {  redirect, useRouter } from 'next/navigation';

const Navbar = () => {

  const [isShowLoginModal, setisShowLoginModal] = useState(false);
  const [isShowLoginButton, setisShowLoginButton] = useState(false);
  const [nickName,setNickName] = useState<string>("");

  const router = useRouter();

  const handleOpen = () =>{
    setisShowLoginModal(true);
  }

  const handleClose = () =>{
    setisShowLoginModal(false);
  }
  const verifyToken = async(token: string) =>{
    const verify = await axios.post("api/panel/validate-auth",{token});
    if(!verify.data.status){
      setisShowLoginButton(false);
    }
  
  }

    useEffect(()=>{
    
      const nickname = localStorage.getItem("nickname") as string;
      const token = localStorage.getItem("token") as string;

     
    
      console.log(nickname)

      if(nickname !== ""){
        setNickName(nickname);
        setisShowLoginButton(true);
      }else{
        setisShowLoginButton(false);
      }
      verifyToken(token);

    },[nickName])



  return (
    <div>
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

    {!isShowLoginButton ? (
      <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded" onClick={handleOpen}>
      Login
    </button>
    ) : (<p className='text-black font-semibold'>Olá, {nickName}</p>)}

     {isShowLoginModal ? (
      <DialogLogin handleClose={handleClose}/>
     ) : (<></>)}


  </div>
</nav>
</div>
);
};

export default Navbar

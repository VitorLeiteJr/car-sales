"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import DialogLogin from '../panel/_components/dialogLogin';
import axios from 'axios';
import {  redirect, useRouter } from 'next/navigation';

const Navbar = () => {

  const [isShowLoginModal, setisShowLoginModal] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [nickName,setNickName] = useState<string>("");
  const [auth,setAuth] = useState<boolean>(false);

  const router = useRouter();


  const rerenderNav = () =>{
    router.refresh();
  }


  const handleOpen = () =>{
    setisShowLoginModal(true);
  }

  const handleClose = () =>{
    setisShowLoginModal(false);
  }
  const verifyToken = async(token: string) =>{
    const verify = await axios.post("api/panel/validate-auth",{token});
    if(!verify.data.status){
      setloggedIn(false);
    }
    setAuth(verify.data.status);

  }

    useEffect(()=>{
    
      const nickname = localStorage.getItem("nickname") as string;
      const token = localStorage.getItem("token") as string;
      verifyToken(token);

      if(nickname !== null && auth){
        setNickName(nickname);
        setloggedIn(true);
      }else{
        setloggedIn(false);
      }
    

    },[nickName,rerenderNav])



  return (
    <div>
  <nav className="bg-white text-black font-semibold">
  <div className="container mx-auto flex items-center justify-between p-4">
    {/* Logo */}
    <Link href={'/'}>
    <Image src={'/logo.png'} width={50} height={50} alt='logo'/>
    </Link>

    {/* Menu */}
    <ul className="flex space-x-6" onClick={rerenderNav}>
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

    {loggedIn ? (
      <p className='text-black font-semibold'>Olá, {nickName}</p>
     
    ) : ( <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded" onClick={handleOpen}>
      Login
    </button>)}

     {isShowLoginModal ? (
      <DialogLogin handleClose={handleClose} rerender={rerenderNav}/>
     ) : (<></>)}


  </div>
</nav>
</div>
);
};

export default Navbar

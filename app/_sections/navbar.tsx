"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import LoginModal from '../admin/_components/modal/LoginModal';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const [isShowLoginModal, setisShowLoginModal] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [nickName,setNickName] = useState<string>("");
  const [auth,setAuth] = useState<boolean>(false);

  const router = useRouter();

const handleLogout = () =>{

  localStorage.clear();
  rerenderNav();
  

}
 
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
    const verify = await axios.post("api/admin/validate-auth",{token});
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
  <div className="container mx-auto">
    <div className='items-center flex justify-between'>
    <div className='flex'>
    {/* Logo */}
    <Link href={'/'}>
    <Image src={'/logo.png'} width={50} height={50} alt='logo'/>
    </Link>
    </div>
    <div className='flex items-center'>
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
    </div>
   
    <div className=''>
    {loggedIn ? (
     <div className='flex'>
      <p className='text-primary hover:text-primary-hover cursor-pointer mr-5'>Adicionar Carro</p>
       <p className='text-black font-semibold'>{nickName},</p>
       <p className="ml-1 text-primary hover:text-primary-hover cursor-pointer" onClick={handleLogout}>Logout</p>
       </div>
     
    ) : ( <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded" onClick={handleOpen}>
      Login
    </button>)}
    </div> 
     

     {isShowLoginModal ? (
      <LoginModal handleClose={handleClose} rerender={rerenderNav}/>
     ) : (<></>)}


</div>
</div>
</nav>
</div>
);
};

export default Navbar

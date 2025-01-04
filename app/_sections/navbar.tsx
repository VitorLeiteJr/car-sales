"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import LoginModal from '../admin/_components/modal/LoginModal';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SheetUser from '../admin/_components/sheetUser';
import SheetSignIn from '../admin/_components/sheetSignIn';

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
    <div className='items-center flex justify-between px-5 py-2'>
    <div className='flex'>
    {/* Logo */}
    <Link href={'/'}>
    <Image src={'/logo.png'} width={70} height={70} alt='logo'/>
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
   
    <div>
    {loggedIn ? (

       <SheetUser handleLogout={handleLogout} nickname={nickName} />
     
    ) : ( 
    // <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded" onClick={handleOpen}>
    //   Login
    // </button>
    <SheetSignIn handleClose={handleClose} rerender={rerenderNav}/>
  
  )}
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

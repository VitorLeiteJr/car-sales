'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PanelPage = () => {

   const router = useRouter();
   
   const [valide, setValide] = useState(false);

   useEffect(()=>{

    const token = localStorage.getItem("token");
    if(!token) {router.push("/");}else {setValide(true);}

    const validateAuth = async ()=>{
    const validateToken =await axios.post("/api/panel/validate-token",{token});
    if(!validateToken.data.status)
      {
        router.push("/");
      setValide(false);
      }else{
        setValide(true);
      }
    }
    validateAuth();

   },[]);

    if(valide) return (
      <div>
      
         <p className='text-3xl font-bold text-black'>Panel Page</p>
      
    </div>
    );



  return null;
}

export default PanelPage
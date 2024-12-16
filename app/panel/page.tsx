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
    const validateToken =await axios.post("/api/panel/validate-auth",{token});
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
      <div>admin page</div>
      
    );



  return null;
}

export default PanelPage
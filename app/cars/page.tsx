"use client"
import React, { useEffect, useState } from 'react'
import { Separator } from '../_components/ui/separator'
import CardComp from '../_components/card'
import axios from 'axios'

const Cars = () => {

  const [list, setList] = useState<CarType[]>();

    const getMark =  async (mark: string)=>{
      const recvList = await axios.post("/api/list-cars",{mark}); // OR I CAN USE THE SERVER ACTIONS
      setList(recvList.data.list);
    }

    //getMark("all");
    useEffect(()=>{
      getMark("all");
    },[])

    return (
    <>
    <div className="px-56 py-9">

    <Separator className='bg-primary mb-2'/>
    <div className='flex justify-center items-center gap-4 text-xl font-semibold cursor-pointer'>

        <p className='hover:text-primary' onClick={()=>{getMark('Chevrolet')}}>Chevrolet</p>
        <p className='hover:text-primary'  onClick={()=>{getMark('Honda')}}>Honda</p>
        <p className='hover:text-primary'  onClick={()=>{getMark('Fiat')}}>Fiat</p>
        <p className='hover:text-primary'  onClick={()=>{getMark('Volkswagen')}}>Volkswagen</p>
        <p className='hover:text-primary'  onClick={()=>{getMark('all')}}>Todos</p>


    </div>
    <Separator className='bg-primary mt-2 mb-9'/>
      <div className='container mx-auto'>
    <div className='grid md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4'>
    
   {list?.map((car,index)=>(
    <div key={index}>
    <CardComp car={list[index]}/>
    </div>
   ))}
  
      
   </div>
   </div>
      </div>
    
    {/*<CallToAction/>*/}
    </>
  )
}

export default Cars 

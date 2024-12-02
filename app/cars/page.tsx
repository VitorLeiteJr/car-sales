"use client"
import React, { useEffect, useState } from 'react'
import { Separator } from '../_components/ui/separator'
import ListCarsCard from '../_components/ListCarsCard'

const Cars = () => {

  const [mark, setMark] = useState("all");

    const getMark =  (mark: string)=>{
      setMark(mark);
      //console.log(mark);
    }
    useEffect( ()=>{
      getMark(mark);
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

    <div className='grid md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4'>

    <ListCarsCard mark={mark}/>
      
   </div>
      </div>
    
    {/*<CallToAction/>*/}
    </>
  )
}

export default Cars 

"use client"
import React, { useEffect, useState } from 'react'
import { Separator } from '../_components/ui/separator'
import axios from 'axios'
import ListCarsCard from './_components/ListCarsCard'


const Cars = () => {

  const [listCar, setListCar] = useState<CarType[]>([]);
  const [mark, setMark] = useState("all");

    const getMark = async (mark: string)=>{
      setMark(mark);
    }

    useEffect( () => {
    
      const getCars = async ()=>{

        const list = await axios.post("/api/list-cars",{mark});
        setListCar(list.data.list);
        
      };
      getCars();
      
    
    },[mark]);
    

  return (
    <>
    <div className="container mx-auto px-56 py-9">

    <Separator className='bg-primary mb-2'/>
    <div className='flex justify-center items-center gap-4 text-xl font-semibold'>

        <p onClick={()=>{getMark('Chevrolet')}}>Chevrolet</p>
        <p onClick={()=>{getMark('Honda')}}>Honda</p>
        <p onClick={()=>{getMark('Fiat')}}>Fiat</p>
        <p onClick={()=>{getMark('Volkswagen')}}>Volkswagen</p>
        <p onClick={()=>{getMark('all')}}>Todos</p>


    </div>
    <Separator className='bg-primary mt-2 mb-9'/>

    <div className='grid lg:grid-cols-3 gap-4'>

    <ListCarsCard list={listCar}/>
      
   </div>
      </div>
    
    {/*<CallToAction/>*/}
    </>
  )
}

export default Cars 

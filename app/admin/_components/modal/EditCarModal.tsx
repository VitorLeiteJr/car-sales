
"use client"
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'
import { Tabs, TabsContent } from '@/app/_components/ui/tabs'
import MultiImageUploader from '../imageUpload'
import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'


interface editCarModalProps
{
    handleClose: () => void,
    car: CarType
}


const EditCarModal = ({handleClose,car}: editCarModalProps) => {

  const [message,setMessage] = useState<string>("");


  const handleEditCarModal = async(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
       
       const formData = new FormData(e.currentTarget);
       const id = formData.get("id") as string;
       const name = formData.get("name") as string;
       const year = formData.get("year") as string;
       const km = formData.get("km") as string;

       const updateCar = await axios.post("/api/admin/update-car",{id,name,year,km});
       setMessage(updateCar.data.message);

  }

  return (
    <>
    <div className='flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
<Tabs defaultValue="login" className="w-[400px]">
    <TabsContent  value="login">
      <Card className='text-white bg-gray-800'>

      <form onSubmit={handleEditCarModal}>

      <p className='items-end justify-end flex mr-2 text-primary cursor-pointer text-xl hover:text-primary-hover' onClick={handleClose}>x</p>
        <CardHeader>
          <CardTitle>{car.id}</CardTitle>
          <CardDescription>
           Editar o carro: {car.name}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <Input className='hidden' name="id" defaultValue={car.id}></Input>
          </div>
        <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Nome: </Label>
            <Input name="name" defaultValue={car.name} required/>
          </div>
          <div className="space-y-1">
            <Label className='items-center flex mr-3' htmlFor="name">Ano: </Label>
            <Input name="year" defaultValue={car.year} required/>
          </div>
          <div className="space-y-1">
            <Label className='items-center flex mr-3' htmlFor="name">Km: </Label>
            <Input name="km" defaultValue={car.km} required/>
          </div>

          <div className='space-y-1'>

          <MultiImageUploader id={car.id}/>

          </div>

        </CardContent>
        <CardFooter className='justify-between'>
          <Button type='submit' className='mb-5'>Alterar</Button>
          <p>
            {message}
          </p>
        </CardFooter> 
        </form>
      </Card>
    </TabsContent>

  </Tabs>

    </div>

  </>
  )
}

export default EditCarModal


import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {  Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger } from "@/app/_components/ui/sheet";
import { FaCar } from "react-icons/fa";
import MainImageUpload from "./mainImageUpload";

const SheetAddCar = () => {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const slug = formData.get("slug") as string;
        const city = formData.get("city") as string;
        const srcImage = formData.get("srcImage") as string;
        console.log(name,slug,city,srcImage);

    }   


  return (
    <Sheet>
  <SheetTrigger>
 
                <div className="flex hover:text-primary-hover cursor-pointer">
                <FaCar size={20}/> 
                <p className="ml-1">Adicionar novo carro</p>
                </div> 
       
  </SheetTrigger>
  <SheetContent className= "bg-white text-black">
    <SheetHeader>
      <SheetTitle >Adicionar um novo carro</SheetTitle>
      <SheetDescription>
      Adicione as informações solicitadas para adicionar um novo carro
      </SheetDescription>
       <form onSubmit={handleSubmit} className="space-y-2">
      <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Nome: </Label>
            <Input name="name" defaultValue="name" required/>
          </div>
           <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">year: </Label>
            <Input name="year" defaultValue="Year" required/>
          </div> 
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">km: </Label>
            <Input name="km" defaultValue="km" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">mark: </Label>
            <Input name="mark" defaultValue="mark" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Tipo: </Label>
            <Input name="type" defaultValue="type" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Transmissao: </Label>
            <Input name="transmission" defaultValue="transmission" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Combustivel: </Label>
            <Input name="fuel" defaultValue="fuel" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">slug: </Label>
            <Input name="slug" defaultValue="slug" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">price: </Label>
            <Input name="price" defaultValue="price" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Versao: </Label>
            <Input name="version" defaultValue="version" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Trassao: </Label>
            <Input name="traction" defaultValue="traction" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Portas: </Label>
            <Input name="doors" defaultValue="doors" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Abs: </Label>
            <Input name="asbBrake" defaultValue="true" required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Cidade/Estado: </Label>
            <Input name="city" defaultValue="Mococa" required/>
          </div>
          
          <div className="space-y-1">
                <MainImageUpload/>
          </div>

          <button type="submit" className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded"> Enviar</button>
          </form>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default SheetAddCar

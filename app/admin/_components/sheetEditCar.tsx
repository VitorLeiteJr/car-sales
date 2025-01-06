
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {  Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger } from "@/app/_components/ui/sheet";
import {  FaRegEdit } from "react-icons/fa";
import MainImageUpload from "./mainImageUpload";
import axios from "axios";
import MultiImageUploader from "./imageUpload";
import { toast } from "@/hooks/use-toast";

interface sheetEditCarProps {
    car: CarType
}


const SheetEditCar = ({car}: sheetEditCarProps) => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const slug = formData.get("slug") as string;
        const city = formData.get("city") as string;
        const year = formData.get("year") as string;
        const km = formData.get("km") as string;
        const mark = formData.get("mark") as string;
        const type = formData.get("type") as string;
        const transmission = formData.get("transmission") as string;
        const fuel = formData.get("fuel") as string;
        const price = formData.get("price") as string;
        const version = formData.get("version") as string;
        const traction = formData.get("traction") as string;
        const doors = formData.get("doors") as string;
        const asbBrake = formData.get("asbBrake") as string;
        const id = car.id;


        console.log(name,slug,city,year,km,mark,type,transmission,fuel);

        const addCar = await axios.post("/api/admin/update-car",{name,slug,city,year,km,mark,type,transmission,fuel,price,version,traction,doors,asbBrake,id});
        //console.log(addCar.data);

        if(!addCar.data.status){
          toast({
            variant: "destructive",
            title: "Erro",
            description: "Alguma coisa deu errado!",
          })
        }else{
          toast({
            variant: "default",
            title: "Sucesso",
            description: "Editado com sucesso",
          })
        
    }   
  }


  return (
        <Sheet>
  <SheetTrigger>
 
                <div className="flex hover:text-primary-hover cursor-pointer">
                <FaRegEdit size={16} />
                </div> 
       
  </SheetTrigger>
  <SheetContent side={"right"} className= "bg-white text-black max-h-screen overflow-y-scroll">
    <SheetHeader>
      <SheetTitle >Editando: {car.name}</SheetTitle>
      <SheetDescription>
      Altere as informações abaixo como desejar para editar
      </SheetDescription>
      
       <form onSubmit={handleSubmit} className="space-y-2 ">
      <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Nome: </Label>
            <Input name="name" defaultValue={car.name} required/>
          </div>
           <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">year: </Label>
            <Input name="year" defaultValue={car.year} required/>
          </div> 
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">km: </Label>
            <Input name="km" defaultValue={car.km} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">mark: </Label>
            <Input name="mark" defaultValue={car.mark} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Tipo: </Label>
            <Input name="type" defaultValue={car.type} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Transmissao: </Label>
            <Input name="transmission" defaultValue={car.transmission} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Combustivel: </Label>
            <Input name="fuel" defaultValue={car.fuel} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">slug: </Label>
            <Input name="slug" defaultValue={car.slug} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">price: </Label>
            <Input name="price" defaultValue={car.price} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Versao: </Label>
            <Input name="version" defaultValue={car.version} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Trassao: </Label>
            <Input name="traction" defaultValue={car.traction} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Portas: </Label>
            <Input name="doors" defaultValue={car.doors} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Abs: </Label>
            <Input name="asbBrake" defaultValue={String(car.absBrake)} required/>
          </div>
          <div className="space-y-1 ">
            <Label className='items-center flex mr-3' htmlFor="name">Cidade/Estado: </Label>
            <Input name="city" defaultValue={car.city} required/>
          </div>
          
          <div className="space-y-1">
                <MainImageUpload id={car.id}/>
          </div>
          <div>
          <MultiImageUploader id={car.id}/>
          </div>

          <button type="submit" className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded"> Enviar</button>
          </form>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default SheetEditCar

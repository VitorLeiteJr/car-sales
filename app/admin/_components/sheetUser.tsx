import {  Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger } from "@/app/_components/ui/sheet";
import { FaRegUserCircle } from "react-icons/fa";
import SheetAddCar from "./sheetAddCar";


interface sheetUserProps {

    handleLogout: () => void;
    nickname: string;

}

const SheetUser = ({handleLogout,nickname}: sheetUserProps) => {
  return (
    <Sheet>
  <SheetTrigger>
    
  <FaRegUserCircle className="hover:text-primary-hover cursor-pointer" size={30} />
  </SheetTrigger>
  <SheetContent className= "bg-white text-black">
    <SheetHeader>
      <SheetTitle >Seja bem-vindo, {nickname}</SheetTitle>
      <SheetDescription>
        Aqui você vai encontrar as funções para o administrador do site.
      </SheetDescription>
      <div className="py-5">
       <SheetAddCar/>
       </div>

      <p className="ml-1 text-primary hover:text-primary-hover cursor-pointer" onClick={handleLogout}>Logout</p>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default SheetUser

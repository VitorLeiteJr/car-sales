"use client"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet"
import { useToast } from "@/hooks/use-toast"
import axios from "axios"

interface sheetSignInProps {

handleClose: () => void,
rerender: () => void;


}




const SheetSignIn = ({handleClose,rerender}: sheetSignInProps) => {

    const { toast } = useToast();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const login = formData.get("login") as string;
      const password = formData.get("password") as string;

      const verify = await axios.post("/api/admin/verify-credentials",{login, password});
      if(!verify.data.response.status) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Credênciais incorretas",
        })
      }else{
        toast({
          variant: "default",
          title: "Sucesso",
          description: "Autenticado com sucesso",
        })
       
        localStorage.setItem("token",verify.data.response.token);
        localStorage.setItem("nickname",verify.data.response.nickname);

        handleClose();
        rerender();
      }

     
    }


  return (
   
    <Sheet>
      <SheetTrigger asChild>
        
       <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded">
       Login
     </button>
      </SheetTrigger>
      <SheetContent className="bg-white">
      <form onSubmit={handleFormSubmit}>
        <SheetHeader>
          <SheetTitle>Entrar</SheetTitle>
          <SheetDescription>
            Preencha com as informações a seguir para entrar
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="login" className="text-right">
              Nome
            </Label>
            <Input id="login" name="login" value="autoclub" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Senha
            </Label>
            <Input type="password" name="password"id="password" value="1" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Entrar</Button>
          </SheetClose>
        </SheetFooter>

    </form>
      </SheetContent>
    </Sheet>
  )
}
export default SheetSignIn;

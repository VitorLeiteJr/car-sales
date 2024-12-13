"use client"
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'
import { Tabs, TabsContent } from '@/app/_components/ui/tabs'
import axios from 'axios'
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'


interface dialogLoginProps{
    handleClose: () => void;
}

const DialogLogin = ({handleClose}: dialogLoginProps) => {

    const { toast } = useToast();
    const router = useRouter();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const login = formData.get("login") as string;
      const password = formData.get("password") as string;

      const verify = await axios.post("/api/panel/verify-credentials",{login, password});
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
          description: "Credênciais incorretas",
        })
        router.push("/panel");
        handleClose();
        localStorage.setItem("token",verify.data.response.token);
      }


    

      
      console.log(verify.data);
      
    }

  return (
    <>
    <div className='flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
<Tabs defaultValue="login" className="w-[400px]">
    <TabsContent  value="login">
      <Card className='text-white bg-gray-800'>

      <form onSubmit={handleFormSubmit}>

      <p className='items-end justify-end flex mr-2 text-primary cursor-pointer text-xl hover:text-primary-hover' onClick={handleClose}>x</p>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>
            Entre com suas credencias
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="login">Nome</Label>
            <Input name="login" defaultValue="Paulo Carucio" required/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Senha</Label>
            <Input type='password' name="password" defaultValue="@paulocarucio"required/>
          </div>
        </CardContent>
        <CardFooter className='justify-between'>
          <Button type='submit'className='mb-5'>Entrar</Button>
        </CardFooter> 
        </form>
      </Card>
    </TabsContent>

  </Tabs>

    </div>

  </>

  )
}

export default DialogLogin

"use client"
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'
import { Tabs, TabsContent } from '@/app/_components/ui/tabs'
import { useState } from 'react'


interface dialogLoginProps{
    handleClose: () => void;
}

const DialogLogin = ({handleClose}: dialogLoginProps) => {

  return (
    <>
    <div className='flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
<Tabs defaultValue="login" className="w-[400px]">
    <TabsContent  value="login">
      <Card className='text-white bg-gray-800'>

      <p className='items-end justify-end flex mr-2 text-primary cursor-pointer text-xl' onClick={handleClose}>x</p>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Paulo Carucio" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@paulocarucio" />
          </div>
        </CardContent>
        <CardFooter className='justify-between'>
          <Button>Entrar</Button>
        </CardFooter>
      </Card>
    </TabsContent>

  </Tabs>

    </div>

  </>

  )
}

export default DialogLogin

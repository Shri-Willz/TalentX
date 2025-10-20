import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SigninForm } from '../../../components/signin-form'
import { SignUpForm } from '../../../components/signup-form'
import { Card, CardDescription, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Auth() {
  return (
    <div className="w-[400px] bg-surface rounded-2xl">
      <Card className='bg-transparet'>
        <CardHeader className='flex justify-center fon flex-col items-center'>
          <CardTitle className='text-white text-3xl font-bold text-center font-sans'>TalentX</CardTitle>
          <CardDescription className='text-text text-sm text-center'>Find your next Opportunity</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Tab1" className="bg-transparent w-full rounded-2xl p-4">
            <TabsList className="flex justify-center gap-4 w-full">
              <TabsTrigger value="Tab1" className="text-center flex-1 max-w-[100px] transition-all duration-300 ease-in-out hover:bg-primary/10 data-[state=active]:bg-accent data-[state=active]:text-white">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="Tab2" className="text-center flex-1 max-w-[100px] transition-all duration-300 ease-in-out hover:bg-primary/10 data-[state=active]:bg-accent data-[state=active]:text-white">
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Tab1">
              <SigninForm />
            </TabsContent>
            <TabsContent value="Tab2">
              <SignUpForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

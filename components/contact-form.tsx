"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { User, Mail, MessageSquare } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(5)
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('values ==== ', values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-center flex-col gap-10 text-white p-5 rounded-md shadow-md flex-1">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2">
                <User className="text-light-purple" size={24} />
                <FormLabel className="text-lg sm:text-xl font-semibold">Name</FormLabel>
              </div>
              <FormControl>
                <input 
                  placeholder="Enter your name" 
                  className="h-14 text-base sm:text-lg resize-none outline-none border-b-2 border-light-purple/70 focus:border-light-purple focus:ring-2 focus:ring-light-purple focus:ring-opacity-50 rounded-t-md transition-all duration-300 bg-transparent p-1 placeholder:text-white/60 pl-3" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2">
                <Mail className="text-light-purple" size={24} />
                <FormLabel className="text-lg sm:text-xl font-semibold">Email</FormLabel>
              </div>
              <FormControl>
                <input 
                  placeholder="Enter your email" 
                  className="h-14 text-base sm:text-lg resize-none outline-none border-b-2 border-light-purple/70 focus:border-light-purple focus:ring-2 focus:ring-light-purple focus:ring-opacity-50 rounded-t-md transition-all duration-300 bg-transparent p-1 placeholder:text-white/60 pl-3" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-light-purple" size={24} />
                <FormLabel className="text-lg sm:text-xl font-semibold">Message</FormLabel>
              </div>
              <FormControl>
                <textarea 
                  className="h-48 text-base sm:text-lg resize-none outline-none border-b-2 border-light-purple/70 focus:border-light-purple focus:ring-2 focus:ring-light-purple focus:ring-opacity-50 rounded-t-md transition-all duration-300 bg-transparent p-1 placeholder:text-white/60 pl-3" 
                  placeholder="Enter your message" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid}>Submit</Button>
      </form>
    </Form>
  )
}
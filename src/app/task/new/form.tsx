'use client'

import { useState } from 'react'

import Container from '@/components/Container'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createTaksAction } from '@/actions/task_action'
import { LoaderCircle, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const formSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
})

type StateLoading = 'pendding' | 'ready'

export default function FormTask() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const [isLoading, setIsLoading] = useState<StateLoading>('ready')

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (isLoading === 'pendding') return
    
    setIsLoading('pendding')
    createTaksAction(values)
  }

  return (
    <Container className='py-6 md:py-10'>
      <Button variant='link' className='mb-6' asChild>
        <Link href="/task">
          <ChevronLeft className='space-4' />
            Back
        </Link>
      </Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input id='title' type='text' inputMode='text' maxLength={50} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea id='description' inputMode='text' rows={4} maxLength={100} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading === 'pendding'} type='submit'>
            {isLoading === 'pendding' && (
              <LoaderCircle className='animate-spin' />
            )}
            Create Task
          </Button> 
        </form>
      </Form>
    </Container>
  )
}
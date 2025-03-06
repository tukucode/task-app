import type { Metadata } from 'next'
import FormTask from '@/app/task/new/form'

export const metadata: Metadata = {
  title: 'Create new task',
}

export default function Page() {
  return <FormTask />
}
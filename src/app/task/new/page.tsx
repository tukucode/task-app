import type { Metadata } from 'next'
import FormTask from './form'

export const metadata: Metadata = {
  title: 'Create new task',
}

export default function Page() {
  return <FormTask />
}
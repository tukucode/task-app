'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { API_URL } from '@/lib/constants'

export interface Task {
    id: number,
    title: string
    description: string
    completed: boolean
}

type ResponseBase<T> = {
    code: number,
    message: string,
    data: T,
    error?: unknown[]
}

export async function listTaskAction(): Promise<ResponseBase<Task[]>> {
  const res = await fetch(`${API_URL}/task`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Error fetch data task')
  }

  return await res.json()
}

export type BodyDataTask = Pick<Task, 'title' | 'description'>;

export async function createTaksAction(data: BodyDataTask) {
  const res = await fetch(`${API_URL}/task/new`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: data.title, description: data.description, completed: false }),
  })
  
  if (!res.ok) throw new Error('Failed to create task')

  redirect('/task')
}

export async function updateStatusTaskAction(id: number) {
  const res = await fetch(`${API_URL}/task/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: true }),
  })

  if (!res.ok) throw new Error('Failed to update status')

  revalidatePath('/', 'page')
}

export async function deleteTaskAction(id: number) {
  const res = await fetch(`${API_URL}/task/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to delete task')

  revalidatePath('/', 'page')
}
'use server'

import { revalidatePath } from 'next/cache'

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
  const res = await fetch('https://api.web.tukucode.com/api/v1/task')
  if (!res.ok) {
    throw new Error('Error fetch data task')
  }

  return res.json()
}

export async function updateStatusTaskAction(id: number): Promise<ResponseBase<Task>> {
  const res = await fetch(`https://api.web.tukucode.com/api/v1/task/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: true }),
  })

  if (!res.ok) throw new Error('Failed to update status')

  revalidatePath('/', 'page')
  return res.json()
}
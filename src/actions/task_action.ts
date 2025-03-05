'use server'

export async function listTask(): Promise<unknown[]> {
  const res = await fetch('https://api.web.tukucode.com/api/v1/task', { cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Error fetch data task')
  }

  return res.json()
}
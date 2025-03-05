import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { listTask } from '@/actions/task_action'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Page() {
  const data = await listTask()
  return (
    <main>
      <h1>Hello World</h1>
      <Button>Count</Button>

      {JSON.stringify(data)}
    </main>
  )
}

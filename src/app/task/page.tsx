import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'


import { listTaskAction  } from '@/actions/task_action'
import TableTask from '@/components/TableTask'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Page() {
  const listData = await listTaskAction()
  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-xl font-semibold'>Task List</h1>
        <Button>
          <Plus className='size-4' />
          Create new task
        </Button>
      </div>

      <TableTask data={listData.data} />
    </>
  )
}

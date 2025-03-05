import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { listTaskAction  } from '@/actions/task_action'
import TaskItem from '@/components/task/Item'

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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listData.data.map((task) => (
            <TableRow key={task.id}>
              <TaskItem task={task} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

import type { Metadata } from 'next'

import Link from 'next/link'
import Container from '@/components/Container'
import TableTask from '@/components/TableTask'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { listTaskAction  } from '@/actions/task_action'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Page() {
  const listData = await listTaskAction()
  return (
    <Container className='py-10'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-xl font-semibold'>Task List</h1>
        <Button asChild>
          <Link href='/create'>
            <Plus className='size-4' />
            Create new task
          </Link>
        </Button>
      </div>

      <TableTask data={listData.data} />
    </Container>
  )
}

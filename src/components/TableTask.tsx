'use client'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import {  Check, Trash, Database  } from 'lucide-react'

import type { Task } from '@/actions/task_action'
type TaskItemProp = {
  data: Task[]
}

import { updateStatusTaskAction, deleteTaskAction  } from '@/actions/task_action'
import { Button } from './ui/button'

export default function TableTask({ data }: TaskItemProp) {
  return (
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
        {
          data.length ? data.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.completed ? 'Done' : 'Waiting'}</TableCell>
              <TableCell className='flex space-x-2'>
                {
                  task.completed ?? (
                    <Button size="icon" variant="outline" onClick={() => updateStatusTaskAction(task.id)}>
                      <Check className='size-4' />
                    </Button>
                  )
                }
            
                <Button size="icon" variant="destructive" onClick={() => deleteTaskAction(task.id)}>
                  <Trash className='size-4' />
                </Button>
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={4}>
                <div className='flex flex-col items-center py-4 gap-2 text-muted-foreground'>
                  <Database className='space-4' />
                  <p className="text-sm font-medium">
                      Data Empty
                  </p>
                </div>
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>
    </Table>
  )
}
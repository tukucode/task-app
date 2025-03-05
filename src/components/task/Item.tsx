'use client'

import { TableCell } from '@/components/ui/table'
import { Button } from '../ui/button'
import {  Check, Trash  } from 'lucide-react'

import type { Task } from '@/actions/task_action'
type TaskItemProp = {
  task: Task
}

import { updateStatusTaskAction, deleteTaskAction  } from '@/actions/task_action'

export default function TaskItem({ task }: TaskItemProp) {
  return (
    <>
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
    </>
  )
}
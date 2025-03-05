import { APP_NAME } from '@/lib/constants'
import Link from 'next/link'

import Container from './Container'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  return (
    <nav id='navbar' className='border'>
      <Container className='flex justify-between items-center h-16'>
      
        <Link href="/" className='text-2xl font-semibold'>
          {APP_NAME}
        </Link>

        <ModeToggle />
      </Container>
    </nav>
  )
}
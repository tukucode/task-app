import { cn } from '@/lib/utils'

type ContainerProps = React.ComponentProps<'div'>

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div {...props} className={cn('max-w-5xl mx-auto px-4 lg:px-0', className)}>
      {children}
    </div>
  )
}

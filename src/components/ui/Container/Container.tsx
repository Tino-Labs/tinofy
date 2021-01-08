import cn from 'classnames'
import type { ElementType } from 'react'

interface ContainerProps {
  className?: string
  as?: ElementType
  clean?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, as = 'div', className, clean }) => {
  const cls = cn(className, {
    'mx-auto max-w-8xl px-4': !clean,
  })
  const Cmp = as
  return <Cmp className={cls}>{children}</Cmp>
}

export default Container

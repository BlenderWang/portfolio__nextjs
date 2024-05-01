// import { forwardRef } from 'react'
import clsx from 'clsx'

export const Container = ({ className, children, ...props }) => {
  return (
    <div className={clsx('px-8 xl:px-0', className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  )
}

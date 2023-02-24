import React, { FC } from 'react'
import classNames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  htmlType?: 'button' | 'reset' | 'submit'
  onClick?: (event: any) => void
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className, htmlType, onClick } = props
  return (
    <button
      type={htmlType || 'button'}
      className={classNames(className, 'rounded-md p-2 transition')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

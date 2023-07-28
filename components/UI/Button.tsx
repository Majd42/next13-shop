import React from 'react'

type ProptTypes = {
    children: React.ReactNode,
    onClick: () => void
}

const Button = ({children, onClick} : ProptTypes) => {
  return (
    <button onClick={onClick} className='bg-secondary px-4 py-2 rounded-full hover:bg-secondary-variant transition'>
        {children}
    </button>
  )
}

export default Button
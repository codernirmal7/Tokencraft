import React from 'react'

export default function Button({children , className, onClick,disabled}) {
  return (
    <>
      <button className={`bg-gradient-primary hover:bg-gradient-hover text-sm text-white group/btn font-bold py-2 px-2 rounded-lg shadow-lg flex items-center gap-1 ${className}`} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  )
}
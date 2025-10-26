import React from 'react'

export default function Button({onClick}) {    
  
  return (
    <>
      <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ml-3'
        onClick={onClick}
        type='button'
      >
        Send
      </button>
    </>
  )
}

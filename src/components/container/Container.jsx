import React from 'react'

function container({children}) {
  return (
    <div className=' lg:w-[90%] lg:container  mx-auto px-2'>
    {children}
    </div>
  )
}

export default container
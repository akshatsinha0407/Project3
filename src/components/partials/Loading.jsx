import React from 'react'
import loader from '/public/loader.gif'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center text-2xl items-center bg-[#16151a] '>
      <img className='w-[25%]' src={loader} alt="" />
    </div>
  )
}

export default Loading

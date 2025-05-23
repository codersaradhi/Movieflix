import React from 'react'

const VedioTitle = ({title, overview}) => {
    // console.log(title)
  return (
    <div className='pt-80 p-16 absolute text-white bg-gradient-to-r from-[rgba(0,0,0,0.5)]  w-auto h-screen overflow-hidden '>
      <h1 className='text-6xl font-bold ml-5 text-white w-[40%]'>{title}</h1>
      <p className='text-lg p-6 w-1/3 line-clamp-1 mb-4'>{overview}</p>
      <div className='ml-6'>
        <button className='bg-white text-black px-10 py-4 text-lg font-semibold border-2 mr-4'>  Play</button>
        <button className='bg-gray-600 text-white px-6 py-4 text-lg font-semibold bg-opacity-50'>More info</button>
      </div>
    </div>
  )
}

export default VedioTitle

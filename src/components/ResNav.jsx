import React from 'react'

const ResNav = () => {
  return (
    <>
      <div className='flex justify-evenly text-black bg-white w-screen p-2'>
        <div className='flex flex-col text-md items-center'><div className='text-2xl'><i class="fa-solid fa-house"></i> </div><div className=''>Home</div></div>
        <div className='flex flex-col text-md items-center'><div className='text-2xl'><i class="fa-solid fa-file-lines"></i></div> Application</div>
        <div className='flex flex-col text-md items-center'><div className='text-2xl'><i class="fa-solid fa-user"></i></div> Profile</div>
      </div>
    </>
  )
}

export default ResNav

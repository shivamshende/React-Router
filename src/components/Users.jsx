import React from 'react'
import { Outlet } from 'react-router-dom'

function Users() {
  return (
    <>
    <div className='text-center my-4'>
    <h2 className='text-red-500 text-2xl mb-2'>About Users</h2>
    <p className='mb-10'>This page is example about Route parameters.</p>
      <p className='mb-2 text-green-700'>Search about any user</p>
      <p>Type name of any user in url</p> 
      <p>eg, http://localhost:5175/users/'UserName'</p>
    </div>

    <Outlet />
    </>
  )
}

export default Users

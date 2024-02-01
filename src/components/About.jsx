import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navitate = useNavigate()
  function HomePage(){
    navitate('/')
  }
  return (
    <div className='text-center my-5'>
      <h2 className='text-red-500 text-2xl mb-2'>About Us</h2>
      <p>This is page is about navigation programmatically.</p>

      <div className='py-10 text-center'>
        <p className='text-green-700 mb-2'>click the button for navigation</p>
        <button onClick={HomePage} className= 'text-black bg-blue-300 hover:bg-blue-600 px-2 hover:text-white py-1 rounded'>Back to Home</button>
      </div>
    </div>
  )
}

export default About

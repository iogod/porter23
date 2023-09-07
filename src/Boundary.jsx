import React from 'react'
import { useNavigate } from 'react-router-dom';
function Boundary() {
    const navigate = useNavigate();
  return (
    <div className=' flex text-teal-200 m-auto text-4xl flex-col justify-center gap-9'> <div  className='mb-24 text-gray-500'> <div className='rotate-90'> :( </div> Sorry, Page Not Found</div> <button className='text-5xl animate-pulse text-teal-200' onClick={() => navigate(-1)}> &#x2190; Go Back  </button> </div>
  )
}

export default Boundary
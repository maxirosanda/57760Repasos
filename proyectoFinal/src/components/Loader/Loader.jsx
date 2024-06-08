import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'; 
import "./Loader.css"

const Loader = () => {
  return (
    <div className='loader'>
        <ClipLoader size={50} color='#fff' />
    </div>
  )
}

export default Loader
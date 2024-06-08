import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = ({error}) => {
    const navigate = useNavigate()
  return (
    <div>
        <h3>{error}</h3>
        <button onClick={()=>navigate(-1)}>Recargar</button>
    </div>
  )
}

export default Error
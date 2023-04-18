import React from 'react'
import './styles.css'
import { useRouteError } from 'react-router-dom'
import Header from '../Header/Header'
const Error = () => {
    const error=useRouteError()

  return (
    <div className='flex justify-center items-center flex-col'>
        <div> <Header/></div>
       <div className='flex justify-center items-center flex-col p-32'>
        <h1 className=''>{error.status}</h1>
        <h3>{error.statusText}😞 </h3>
        <img className='error-img' src="https://static.vecteezy.com/system/resources/previews/011/189/185/non_2x/illustrations-emotional-woman-for-oops-404-error-design-concept-landing-page-vector.jpg" alt="Error.jpg" /></div>
    </div>
  )
}

export default Error
import React from 'react'
import imgNotFound from '../assets/img/notFound.jpg'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>
        Not Found
      </h1>
    <img className="img-not-found" src={imgNotFound} alt="" />
    </div>
  )
}

export default NotFound
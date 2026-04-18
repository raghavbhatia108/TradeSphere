import React from 'react'
import './NotFound.css'

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="go-home-btn">Go Back Home</a>
      </div>
    </div>
  )
}

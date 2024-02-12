import React from 'react'
import "./Header.css" 

function Header() {
  return (
    <>
    <div className='container header'>
        <div className='header-logo-div'>
        <img className='header-logo' src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="" />
        </div>
        <div className='header-link-div'>
            <a href="#" className='header-link'>COURSES</a>
            <a href="#" className='header-link'>LIVE CLASSES <i className='fa fa-angle-down'></i></a>
            <a href="#" className='header-link'>PRACTICE <i className='fa fa-angle-down'></i></a>
            <a href="#" className='header-link'>RESOURCES <i className='fa fa-angle-down'></i></a>
            <a href="#" className='header-link'>OUR PRODUCTS <i className='fa fa-angle-down'></i></a>
        </div>
    </div>
         <img src="	https://64edcaba2d7a88007a7df676--stellar-nougat-8b22f1.netlify.app/assets/blog-0ac3509c.png" className='guvi-branding-img' alt="" />
    </>
  )
}

export default Header
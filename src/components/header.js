import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { BsFillCameraReelsFill } from "react-icons/bs";
export default function header() {
  return (
    <header>
      <div className='header_blog'>
        <a href="#" className='logo'>
            Films Shop
        </a>
        
        <nav>
          <ul className='header-nav'>
            <li className='nav-item'>Главная</li>
            <li className='nav-item'>О нас</li>
            <li className='nav-item'>Контакты</li>
            <li className='nav-item'>Правила</li>
            <li className='nav-item person-logo'><BsPersonCircle/></li>                  
          </ul>
        </nav>
        
      </div>

      <div className='header-img'>
        
      </div>
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'

export default function login() {
  return (
    <div className='container'>
      <div className='login-block'>
        <h2 className='title mb-20'>LOGIN</h2>
        <input type='text' placeholder='Username *' className='input-data' />
        <input type='text' placeholder='Password *' className='input-data' />
        <div className='rem-forgot-block mb-20'>
          <div>
            <input type='checkbox' id='remeber-check' className='chek-rem' />
            <label for='remeber-check' className='gray'>Remeber me</label>
          </div>
          <Link to='/register' className='register gray'>Register</Link>
        </div>
        <button className='login-btn'>LOGIN</button>
      </div>
    </div>
  )
}

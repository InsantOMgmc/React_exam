import React from 'react'
import './css/style.css'

export default function register() {
  return (
    <div className='container'>
      <div className='login-block'>
        <h2 className='title mb-20'>Register</h2>
        <input type='text' placeholder='Username *' className='input-data' />
        <input type='text' placeholder='Password *' className='input-data' />
        <div className='rem-forgot-block mb-20'>
          <div>
            <input type='checkbox' id='remeber-check' className='chek-rem' />
            <label for='remeber-check' className='gray'>Remeber me</label>
          </div>          
        </div>
        <button className='login-btn'>Register</button>
      </div>
    </div>
  )
}

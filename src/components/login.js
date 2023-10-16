import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './css/style.css'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const navigate = useNavigate();

  function logUser(email, password) {
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const authUser = Users.find(user => user.email === email && user.password === password);

    if (!authUser) {
      alert('Неверный email или пароль');
      return
    }
    alert('Вход успешен');
    localStorage.setItem('currentUser', JSON.stringify(authUser));
    navigate('/');
  }

  const handleSubmit = () => {
    if (email === '' || password === '') {
      alert('Заполните все поля');
    }
    
    logUser(email, password);
  }

  return (
    <div className='container'>
      <div className='login-block'>
        <h2 className='title mb-20'>LOGIN</h2>
        <input type='email' placeholder='Email *' className='input-data' onChange={handleEmailChange} />
        <input type='password' placeholder='Password *' className='input-data' onChange={handlePasswordChange} />
        <div className='rem-forgot-block mb-20'>
          <div>
            <input type='checkbox' id='remeber-check' className='chek-rem' />
            <label for='remeber-check' className='gray'>Remeber me</label>
          </div>
          <Link to='/register' className='register gray'>Register</Link>
        </div>
        <button className='login-btn' onClick={handleSubmit} >LOGIN</button>
      </div>
    </div>
  )
}

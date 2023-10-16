import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/style.css';

export default function Register() {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const navigate = useNavigate();


  function regUser(username, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('Этот email уже авторизован');
      return;
    }

    const newUser = { username, email, password }
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert('Пользователь успешно зарегистрирован');
  }

  const handleRegister = () => {
    if (username === '' || email === '' || password === '') {
      alert('Заполните все поля');
      return;
    }
    regUser(username, email, password);
    console.log(username, email, password);

    navigate('/login');
  };

  return (
    <div className='container'>
      <div className='login-block'>
        <h2 className='title mb-20'>Register</h2>
        <input type='text' placeholder='Username' className='input-data' onChange={handleUsernameChange} />
        <input type='email' placeholder='Email *' className='input-data' onChange={handleEmailChange} />
        <input type='password' placeholder='Password *' className='input-data' onChange={handlePasswordChange} />
        <div className='rem-forgot-block mb-20'>
          <div>
            <input type='checkbox' id='remember-check' className='chek-rem' />
            <label htmlFor='remember-check' className='gray'>
              Remember me
            </label>
          </div>
        </div>
        <button className='login-btn' onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

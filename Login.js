import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post('http://localhost:5000/login', {
      username,
      password
    });

    if (res.data.success) {
      navigate('/dashboard');
    } else {
      alert('Invalid Login');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>SMP Login</h2>

      <input
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;

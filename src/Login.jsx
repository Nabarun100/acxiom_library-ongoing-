import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Optional: If you want to navigate after login

const Login = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Optional: Initialize navigate

  const handleLogin = () => {
    if (username === 'nabarun' && password === 'naba_library') {
      setRole('admin');
      navigate('/maintenance'); // Optional: Navigate to maintenance menu
    } else {
      setRole('user');
      navigate('/transactions'); // Optional: Navigate to transactions menu
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

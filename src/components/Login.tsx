import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      navigate('/channels', { state: { username } });
    }
  };

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

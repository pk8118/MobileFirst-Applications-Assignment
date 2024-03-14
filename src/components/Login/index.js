import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({onLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in all fields.');
    } else {
      if (username === 'admin' && password === 'password') {
        onLogin();
        navigate('/');
      } else {
        setError('Invalid username or password.');
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
            <h2 className='mb-2'>Login</h2>
            {error && <div className="alert alert-danger mb-2">{error}</div>}
            <div className="form-group mb-2">
              <label htmlFor="username mb-2">Username:</label>
              <input
                type="text"
                placeholder='admin'
                className="form-control mb-2"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder='password'
                className="form-control mb-2"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

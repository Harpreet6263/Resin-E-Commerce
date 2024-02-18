import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function SignIn() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const handleSignin = async () => {
    if (!username || !password) {
      alert("Please enter required details");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5001/login', { username, password });
      console.log(response.data);
      // Redirect or perform actions after successful sign-in
    history.push('/start');
    } catch (error) {
      console.error('Error signing in:', error.response.data);
      setError("Invalid username or password");
    }
  };
  return (
    <div className='signParent'>
     
      <div className="signin">
      <h1 className="navbar-brand">THE RESIN ROOM</h1>
      
      <h2 id='account'>Sign in</h2>
      <div className='accountChild'>
        <label>Username:</label>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='accountChild'>
        <label>Password:</label>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignin}>Sign In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p  id='member'>New to Resin Room? <Link style={{ color: 'red' }} to="/signup">Sign Up</Link> </p>
      </div>
  
    </div>
  )
}

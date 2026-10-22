// src/Login.jsx
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h2>Login Screen</h2>
      {/* Your form goes here */}
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
}

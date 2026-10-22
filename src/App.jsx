import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to our Vite + React application.</p>
      {/* Client-side navigation link */}
      <Link to="/about">Go to About Page</Link>
      <Link to="/login">Go to login Page</Link>
      <Link to="/Signup">Go to Signup Page</Link>
    </div>
  );
}

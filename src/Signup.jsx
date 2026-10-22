import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Signup Page</h1>
      <p>This page was routed dynamically without a browser reload!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

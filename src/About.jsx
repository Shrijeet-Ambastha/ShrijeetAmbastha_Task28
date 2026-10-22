import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ℹ️ About Page</h1>
      <p>This page was routed dynamically without a browser reload!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

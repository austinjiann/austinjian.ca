import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none',
          padding: '0.75rem 1.5rem',
          border: '1px solid currentColor',
          borderRadius: '4px'
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

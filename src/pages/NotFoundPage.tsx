import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
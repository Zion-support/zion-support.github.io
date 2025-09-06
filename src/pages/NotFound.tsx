<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'; import { Link } from 'react-router-dom'; const NotFound = () => { return ( <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="max-w-md w-full text-center"> <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1> <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2> <p className="text-gray-600 mb-8"> The page you're looking for doesn't exist or has been moved. </p> <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" > Go Home </Link> </div> </div> )}; export default NotFound
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="btn-primary"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default NotFound;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default NotFound;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

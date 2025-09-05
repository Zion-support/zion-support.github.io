import React from 'react';
const "NotFoundPage": React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-600 text-center">The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};
export { NotFoundPage };
export default NotFoundPage;
import React from 'react'; const NotFoundPage: React.FC = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="container mx-auto px-4 py-20"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center"> 404 - Page Not Found </h1> <p className="text-xl text-gray-600 text-center">The page you're looking for doesn't exist.</p> </div> </div> )}; export { NotFoundPage }; export default NotFoundPage;
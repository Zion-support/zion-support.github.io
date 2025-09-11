import React from 'react';

const MobileDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mobile Development Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Create powerful mobile applications for iOS and Android with our expert mobile 
              development team. We build native and cross-platform solutions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mobile Development Services</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Native iOS Development (Swift, Objective-C)</li>
              <li>Native Android Development (Kotlin, Java)</li>
              <li>Cross-Platform Development (React Native, Flutter)</li>
              <li>UI/UX Design and Prototyping</li>
              <li>App Store Optimization (ASO)</li>
              <li>Mobile App Testing and QA</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Mobile Development?</h2>
            <p className="text-gray-600 mb-6">
              Our experienced developers create high-performance, user-friendly mobile applications 
              that meet your business requirements and exceed user expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
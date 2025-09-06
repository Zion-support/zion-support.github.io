import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+1-302-464-0950</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}
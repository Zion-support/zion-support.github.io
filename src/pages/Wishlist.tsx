import React from 'react';

export default function Wishlist() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      <p className="text-gray-600">
        Your saved items will appear here.
      </p>
      <div className="mt-8">
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-500">No items in your wishlist yet.</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Browse Services
          </button>
        </div>
      </div>
    </div>
  );
}
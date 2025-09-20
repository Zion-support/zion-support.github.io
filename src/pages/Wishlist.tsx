import React from 'react';

export default function Wishlist() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      <div className="text-center py-12">
        <p className="text-gray-600">Your wishlist is empty.</p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Browse Products
        </button>
      </div>
    </div>
  );
}
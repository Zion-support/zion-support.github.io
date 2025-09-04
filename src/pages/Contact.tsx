import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-300 mb-6">Email: info@ziontechgroup.com</p>
      <form className="grid gap-4 max-w-md">
        <input className="px-3 py-2 rounded bg-gray-900 border border-gray-700" placeholder="Your email" />
        <textarea className="px-3 py-2 rounded bg-gray-900 border border-gray-700" placeholder="Message" rows={5} />
        <button className="px-4 py-2 bg-zion-cyan text-black rounded" type="button">Send</button>
      </form>
    </div>
  );
}

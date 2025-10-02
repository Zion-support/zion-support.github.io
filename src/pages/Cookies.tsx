import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="prose max-w-3xl">
      <h1>Cookies Policy</h1>
      <p>
        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept" or using our site, you consent to our use of cookies.
      </p>
      <h2>Types of cookies we use</h2>
      <ul>
        <li>Essential cookies: Required for core site functionality.</li>
        <li>Analytics cookies: Help us understand usage and improve performance.</li>
        <li>Functional cookies: Remember your preferences and settings.</li>
      </ul>
      <h2>Managing cookies</h2>
      <p>
        You can manage or disable cookies in your browser settings. Disabling cookies may impact site functionality.
      </p>
      <p className="text-sm text-gray-500">Last updated: 2025-10-02</p>
    </div>
  );
};

export default Cookies;


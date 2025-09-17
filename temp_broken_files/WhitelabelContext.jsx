import React from 'react';
const WhitelabelContext= () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">WhitelabelContext</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};


export default WhitelabelContext;
import React, { createContext, useContext, useState } from 'react';
const WhitelabelContext = createContext();
export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  };
  return context;
export const WhitelabelProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [branding, setBranding] = useState({
    logo: '/logo.png',
    companyName: 'Zion Tech Group',
    primaryColor: '#6366f1'
  });
  const value = {
    theme,
    setTheme,
    branding,
    setBranding
  };
  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );

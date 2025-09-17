import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add security headers and CSP
    const addSecurityHeaders = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';";
      document.head.appendChild(meta);
    };

    addSecurityHeaders();
  }, []);

  return <>{children}</>;
};


export default SecurityEnhancer;

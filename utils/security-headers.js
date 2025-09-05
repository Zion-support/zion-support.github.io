<<<<<<< HEAD
module.exports = const securityHeaders = [{ key: "X-DNS-Prefetch-Control",value: "on" },{ key: "Strict-Transport-Security",value: "max-age=630720;0;0; includeSubDomains; preload" },{ key: "X-XSS-Protection",value: "1; mode=block" },{ key: "X-Frame-Options",value: "SAMEORIGIN" },{ key: "X-Content-Type-Options",value: "nosniff" },{ key: "Referrer-Policy",value: "origin-when-cross-origin" },{ key: "Content-Security-Policy",value: "default-src "self"; script-src "self" "unsafe-eval" "unsafe-inline"; style-src "self" "unsafe-inline"; img-src "self" data: https: font-src "self" data: connect-src "self"; frame-ancestors "none";" } ];'"'"
=======
import React from 'react';

interface SecurityheadersProps {
  // Add props here as needed
}

export default function Securityheaders({ }: SecurityheadersProps) {
  return (
    <div>
      <h1>Securityheaders</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> main

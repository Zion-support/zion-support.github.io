<<<<<<< HEAD
export const securityHeaders = [{ &quot;key&quot;: &apos;X-DNS-Prefetch-Control&apos;,&quot;value&quot;: &apos;on&apos; },{ &quot;key&quot;: &apos;Strict-Transport-Security&apos;,&quot;value&quot;: &apos;max-age=630720;0;0; includeSubDomains; preload&apos; },{ &quot;key&quot;: &apos;X-XSS-Protection&apos;,&quot;value&quot;: &apos;1; mode=block&apos; },{ &quot;key&quot;: &apos;X-Frame-Options&apos;,&quot;value&quot;: &apos;SAMEORIGIN&apos; },{ &quot;key&quot;: &apos;X-Content-Type-Options&apos;,&quot;value&quot;: &apos;nosniff&apos; },{ &quot;key&quot;: &apos;Referrer-Policy&apos;,&quot;value&quot;: &apos;origin-when-cross-origin&apos; },{ &quot;key&quot;: &apos;Content-Security-Policy&apos;,&quot;value&quot;: &quot;default-src &apos;self&apos;; script-src &apos;self&apos; &apos;unsafe-eval&apos; &apos;unsafe-inline&apos;; style-src &apos;self&apos; &apos;unsafe-inline&apos;; img-src &apos;self&apos; data: https:; font-src &apos;self&apos; data:; connect-src &apos;self&apos;; frame-ancestors &apos;none&apos;;&quot; } ];
=======
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
>>>>>>> main

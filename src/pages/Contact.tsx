import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p>Reach out to our team at contact@ziontechgroup.com.</p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useParams } from "react-router-dom";

export default function Post(): React.JSX.Element {
  const { slug } = useParams();
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Post: {slug}</h1>
      <p className="text-gray-700">Blog post placeholder.</p>
    </div>
  );
}


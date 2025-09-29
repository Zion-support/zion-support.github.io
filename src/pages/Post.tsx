import React from "react";
import { useParams } from "react-router-dom";

export default function Post(): React.JSX.Element {
  const params = useParams();
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
      <p className="text-slate-600">Slug: {params.slug}</p>
    </main>
  );
}


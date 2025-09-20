import React from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  // Return an empty array for now to allow static export
  return [];
}

const page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Blog Post: {params.slug}</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default page;
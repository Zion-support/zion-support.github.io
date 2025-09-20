<<<<<<< HEAD
import React from 'react'
const page: React.FC = () => {
=======
<<<<<<< HEAD:temp-blog-files/[slug]/page.tsx
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-3eed
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
<<<<<<< HEAD
    </div>)}
=======
    </div>
  );
};

=======
import React from 'react'
const page: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-c519:temp-problematic-files/[slug]/page.tsx
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-3eed
export default page;
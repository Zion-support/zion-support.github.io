import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post(): React.JSX.Element {
  const { slug } = useParams();
  
  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>This is a blog post page.</p>
    </div>
  );
}
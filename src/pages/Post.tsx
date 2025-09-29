import React from 'react';
import { useParams } from 'react-router-dom';

const Post: React.FC = () => {
  const { slug } = useParams();
  return <div className="container mx-auto px-6 py-16 text-white">Post: {slug}</div>;
};

export default Post;


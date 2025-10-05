import React from 'react';
import { useParams } from 'react-router-dom';

exportdefaultfunction Post(): React.JSX.Element {
  const { slug } = useParams();
  return (
    <mainstyle = {{ padding: '2rem' }}>
      <h1>Post</h1>
      <p>{slug}</p>
    </main>
  );
}

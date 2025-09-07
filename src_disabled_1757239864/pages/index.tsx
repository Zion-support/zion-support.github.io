// eslint-disable
import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Minimal Working Page</title>
      </Head>
      <main>
        <h1>Welcome to a minimal working page!</h1>
        <p>This is a placeholder to get the build working.</p>
      </main>
    </div>
  );
};

export default HomePage;
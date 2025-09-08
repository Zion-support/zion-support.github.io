import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>
      <main className=" min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className=" text-center">
          <h1 className=" text-6xl font-bold mb-4">404</h1>
          <h2 className=" text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className=" text-slate-300 mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg- blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Go Home
          </Link>
        </div>
      </main>
    </>
  );
}
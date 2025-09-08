import Head from 'next/head';
import Link from 'next/link';

export default function Blockchain() {
  return (
    <>
      <Head>
        <title>Blockchain & Web3 Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 solutions including smart contracts, DeFi, and NFT platforms." />
      </Head>
      <ErrorBoundary level="page">
        <main className=" min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className=" container mx-auto px-4 py-16">
            <h1 className=" text-4xl font-bold text-center mb-8">Blockchain Services</h1>
            <p className=" text-xl text-slate-300 text-center">
              Cutting-edge blockchain and Web3 solutions for the future.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
            >
              Get Blockchain Quote
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
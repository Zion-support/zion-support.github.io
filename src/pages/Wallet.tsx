<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';'''; import { useQuery  } from '@tanstack/react-query';'''; import { getWallet } from '@/api/wallet';'''; import { Skeleton } from '@/components/ui/skeleton'; ; const Wallet: any = () => {}; const { data, isLoading } = useQuery({}; '; ''; '''; queryKey: ['wallet'],; queryFn: getWallet}); ; if(isLoading) {}; return(); <div className="p-4 space-y-4">""";" <h1 className="text-2xl font-bold">Wallet</h1>""";" <Skeleton className="h-6 w-24" />""";" <Skeleton className="h-32 w-full" />; </div>; ); }; const points: any = data?.points ?? 0; const history: any = data?.history ?? [];" ";" return(""";" <div className="p-4">""";" <h1 className="text-2xl font-bold mb-4">Wallet</h1>""";" <section className="mb-4">""";" <h2 className="text-lg font-semibold">Points</h2>; <p>{points}</p>;" </section>";" <section>""";" <h2 className="text-lg font-semibold">Transaction History</h2>; {history.length === 0 ? (;" <p>No transactions yet.</p>";" ) : (""";" <ul className="space-y-2">; {history.map((item, idx) => (; <li key={idx}>{}</li>; ))}; </ul>; )}; </section>; </div>; ); }; ;" export default Wallet;";" '""";"
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const Wallet = () => {
  return (
    <>
      <Head>
        <title>Wallet - Zion Tech Group</title>
        <meta name="description" content="Professional Wallet services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Wallet
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Wallet services and solutions
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default Wallet
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'; export default Products; const Products: React.FC = () : JSX.Element => { return(<div className="min - h-screen bg-gradient - to - br from - blue - 900 via - purple - 900 to - indigo -900"> <div className="container mx - auto px-4 py-24 text-center text-white"> <h1 className="text-6xl font - bold mb-6 bg-gradient - to - r from - blue - 400 to - purple - 400 bg-clip - text text-transparent"> Our Products </h1> <p className="text-xl mb-8 max - w-3xl mx - auto text-gray -300"> Revolutionary technology products designed to transform how you work, create, and grow.</p> <div className="grid md:grid - cols - 2 gap-8 mt-16"> <div className="bg-white / 10 backdrop - blur - sm rounded-xl p - 8 border border-white / 20"> <h3 className="text-2xl font - bold text-white mb-4">ZionAI Content Studio</h3> <p className="text-gray - 300 mb-6">AI - Powered Content Creation Platform</p> <p className="text-2xl font - bold text-blue - 400 mb-4">$299 / month</p> </div> <div className="bg-white / 10 backdrop - blur - sm rounded-xl p - 8 border border-white / 20"> <h3 className="text-2xl font - bold text-white mb-4">SmartLead Pro</h3> <p className="text-gray - 300 mb-6">Intelligent Lead Generation & CRM</p> <p className="text-2xl font - bold text-blue - 400 mb-4">$199 / month</p> </div> </div> <div className="mt-16"> <a href="tel:+13024640950" className="bg-blue - 600 hover:bg-blue - 700 text-white px-8 py-4 rounded-lg font - semibold text-lg transition -colors"> Call + 1 (302) 464 - 0950; </a>; </div>; </div>; </div>;) ; }; ";"
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const Products = () => {
  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Professional Products services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Products
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Products services and solutions
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
export default Products
>>>>>>> main
>>>>>>> main

interface Service {
  id: string 
  name: string 
}

import React from 'react' 
import Link from 'next/link' 

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Zion
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The future of AI and technology is here. Discover innovative solutions and connect with the best talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link 
href="/services" 
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
> 
Explore Services 
</Link> 
<Link 
href="/about" 
className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
> 
Learn More 
</Link> 
</div> 
</div> 
</div> 
</div> 
</div> 
) 
} 

export default Home 
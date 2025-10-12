'use client'

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ecommerce - Zion Tech Group</title>
        <meta name="description" content="Professional ecommerce services and solutions." />
        <meta name="keywords" content="ecommerce, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Ecommerce</h1>
            <p className="text-gray-300 mb-8">This page is under construction.</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center mx-auto">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );


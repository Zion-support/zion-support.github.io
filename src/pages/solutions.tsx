
  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group | Industry-Specific Technology Solutions</title>
        <meta name="description" content="Industry-specific technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">Zion Tech Group</Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
                <Link href="/solutions" className="text-blue-600 font-medium">Solutions</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry challenges and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Custom Solution
              </Link>
              <Link href="/services" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Services
              </Link>
            </div>
          </div>

    </>
  )});











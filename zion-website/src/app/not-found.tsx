import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Go Home
          </Link>
          
          <Link
            href="/services"
            className="block w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Explore Services
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-400">
          <p>
            Need help?{' '}
            <Link 
              href="/contact" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
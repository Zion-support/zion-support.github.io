import { motion } from 'framer-motion';''
import { Home, ArrowLeft, Search } from 'lucide-react';'
const NotFound: React.FC = () => {
  return ('
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">"
</div>"
      <div className="max-w-2xl mx-auto text-center">"
</div>
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
</motion>
          <motion.div;"
            className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8""
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,"
              ease: "easeInOut","
            }}
          >
</motion>
          </motion.div>
"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
</h1>
          </h1>
"
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">"
</p>
          </p>
"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
            <Link;"
              to="/"""
              className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center""
            >
</Link>"
              <Home className="w-5 h-5 mr-2" />"
</Home>
            </Link>
            
            <button;)
              onClick={() => window.history.back()}
</button>"
              <ArrowLeft className="w-5 h-5 mr-2" />"
</ArrowLeft>
            </button>
          </div>"
          <div className="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">"
</div>"
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">"
</h3>"
              <Search className="w-5 h-5 mr-2" />"
</Search>
            </h3>"
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">"
</div>
              <Link;"
                to="/services"""
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50""
              >
</Link>
              </Link>
              <Link;"
                to="/about"""
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50""
              >
</Link>
              </Link>
              <Link;"
                to="/pricing"""
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50""
              >
</Link>
              </Link>
              <Link;"
                to="/contact"""
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50""
              >
</Link>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
      return <div>Something went wrong.</div>;"
import React from 'react'; import { Link } from 'react-router-dom'; const NotFound = () => { return ( <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="max-w-md w-full text-center"> <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1> <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2> <p className="text-gray-600 mb-8"> The page you're looking for doesn't exist or has been moved. </p> <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" > Go Home </Link> </div> </div> )}; export default NotFound;""
import React from 'react'; import { Link } from 'react-router-dom'; const NotFound = () =>: any { return ( <div className="min - h-screen bg - gray - 50 flex items - center justify - center"> <div className="max - w-md w - full text - center"> <h1 className="text - 6xl font - bold text - gray - 900 mb - 4">404</h1> <h2 className="text - 2xl font - semibold text - gray - 700 mb - 4">Page Not Found</h2> <p className="text - gray - 600 mb - 8"> The page you're looking for doesn't exist or has been moved. </p> <Link to="/" className="inline - flex items - center px - 6 py - 3 border border - transparent text - base font - medium rounded - md text - white bg - blue - 600 hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500" > Go Home </Link> </div> </div> )} export default NotFound;""
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react'; const Login = () => { return ( <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="max-w-md w-full"> <div className="bg-white p-8 rounded-lg shadow-md"> <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1> <form className="space-y-4"> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Password</label> <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"> Sign In </button> </form> </div> </div> </div> )}; export default Login;

<<<<<<< HEAD
import React from 'react'; const Login = () =>: any { return ( <div className="min - h-screen bg - gray - 50 flex items - center justify - center"> <div className="max - w-md w - full"> <div className="bg - white p - 8 rounded - lg shadow - md"> <h1 className="text - 2xl font - bold text - gray - 900 mb - 6 text - center">Login</h1> <form className="space - y-4"> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Email</label> <input type="email" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Password</label> <input type="password" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <button type="submit" className="w - full bg - blue - 600 text - white py - 2 px - 4 rounded - md hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - blue - 500"> Sign In </button> </form> </div> </div> </div> )} export default Login;
import React from 'react'; const Login = () => { return ( <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="max-w-md w-full"> <div className="bg-white p-8 rounded-lg shadow-md"> <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1> <form className="space-y-4"> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Password</label> <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"> Sign In </button> </form> </div> </div> </div> )}; export default Login;
import React from 'react'; const Login = () =>: any { return ( <div className="min - h-screen bg - gray - 50 flex items - center justify - center"> <div className="max - w-md w - full"> <div className="bg - white p - 8 rounded - lg shadow - md"> <h1 className="text - 2xl font - bold text - gray - 900 mb - 6 text - center">Login</h1> <form className="space - y-4"> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Email</label> <input type="email" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Password</label> <input type="password" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <button type="submit" className="w - full bg - blue - 600 text - white py - 2 px - 4 rounded - md hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - blue - 500"> Sign In </button> </form> </div> </div> </div> )} export default Login;
=======
import React from 'react'; const Login = () =>: any { return ( <div className="min - h-screen bg - gray - 50 flex items - center justify - center"> <div className="max - w-md w - full"> <div className="bg - white p - 8 rounded - lg shadow - md"> <h1 className="text - 2xl font - bold text - gray - 900 mb - 6 text - center">Login</h1> <form className="space - y-4"> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Email</label> <input type="email" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Password</label> <input type="password" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <button type="submit" className="w - full bg - blue - 600 text - white py - 2 px - 4 rounded - md hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - blue - 500"> Sign In </button> </form> </div> </div> </div> )} export default Login;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
import { SEO } from '../components/SEO';

export default function Login() {
  return (
    <>
      <SEO 
        title="Login - Zion Tech Group" 
        description="Login to your account" 
        keywords="login, account, authentication"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Login
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Sign in to your account
            </p>
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Sign In
              </h2>
              <p className="text-zion-slate-light">
                Login form would go here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

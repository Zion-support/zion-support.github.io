<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function Login() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Login - Zion Tech Group" description="Professional Login services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Login</h1>
        <p className="text-gray-300 text-lg">
          Professional Login services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import React, { useState } from &apos;
import Link from &apos;next/link';react';
import { motion } from &apos;framer-motion';
import { Link } from &apos;react-router-dom';
import { SEO } from &apos;../components/SEO';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from &apos;lucide-react';&apos;&apos;

export default function Login() {}
  const [formData, setFormData] = useState(;{
    email: &apos;&apos;,
    password: &apos;&apos;
  });&apos;&apos;
=======
<<<<<<< HEAD
>>>>>>> main
import React, { useState } from 'react';""
import { motion } from 'framer-motion';""
import { Link } from 'react-router-dom';""
import { SEO } from '../components/SEO';""
<<<<<<< HEAD
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
=======
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';""
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, } from 'framer-motion';
import { Link, } from 'react-router-dom';
import { SEO, } from '../components/SEO';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
<<<<<<< HEAD
;
export default function Login() {;
  const [formData, setFormData] = useState({;
    email: ',;
    password: ';
=======

export default function Login() {
  const [formData, setFormData] = useState({
    email: '', password: ''
>>>>>>> main
  });
>>>>>>> main
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here;
    setTimeout(() => setIsLoading(false), 2000);
  };
<<<<<<< HEAD
;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    setFormData({;
      ...formData,;
      [e.target.name]: e.target.value;
    });
  };
;
  return (;
    <>;
      <SEO ;
        title="Login - Zion Tech Group | Access Your Account";
        description="Sign in to your Zion Tech Group account to access your dashboard, manage services, and view project updates.";
        keywords="login, sign in, account access, dashboard, Zion Tech Group";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-md w-full space-y-8">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <h2 className="text-4xl font-bold text-white mb-2">;
              Welcome Back;
            </h2>;
            <p className="text-gray-300">;
              Sign in to your Zion Tech Group account;
            </p>;
          </motion.div>;
=======

  const handleChange = (e: React.ChangeEvent<;<;<HTMLInputElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title=&quot;Login - Zion Tech Group | Access Your Account&quot;
        description=&quot;Sign in to your Zion Tech Group account to access your dashboard, manage services, and view project updates.&quot;
        keywords=&quot;login, sign in, account access, dashboard, Zion Tech Group&quot;
      />&quot;
      
<<<<<<< HEAD
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8&quot;>&quot;"
        <div className=&quot;max-w-md w-full space-y-8&quot;>&quot;"
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4 sm: px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
>>>>>>> main
          <motion.div
            initial={{ opacit,y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center&quot;
          >&quot;
            <h2 className=&quot;text-4xl font-bold text-white mb-2&quot;>
              Welcome Back&quot;
            </h2>
            <p className=&quot;text-gray-300&quot;>
              Sign in to your Zion Tech Group account&quot;
            </p>
          </motion.div>
>>>>>>> main

          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
            className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50";
          >;
            <form className="space-y-6" onSubmit={handleSubmit}>;
              <div>;
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
                  Email Address;
                </label>;
                <div className="relative">;
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <input;
                    id="email";
                    name="email";
                    type="email";
                    required;
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                    placeholder="Enter your email";
                  />;
                </div>;
              </div>;

              <div>;
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">;
                  Password;
                </label>;
                <div className="relative">;
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <input;
                    id="password";
                    name="password";
                    type={showPassword ? 'text' : 'password'}
                    required;
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                    placeholder="Enter your password";
                  />;
                  <button;
                    type="button";
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300";
                  >;
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>;
                </div>;
              </div>;

              <div className="flex items-center justify-between">;
                <div className="flex items-center">;
                  <input;
                    id="remember-me";
                    name="remember-me";
                    type="checkbox";
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded";
                  />;
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">;
                    Remember me;
                  </label>;
                </div>;

                <div className="text-sm">;
                  <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-colors">;
                    Forgot your password?;
                  </Link>;
                </div>;
              </div>;

              <button;
                type="submit";
                disabled={isLoading}
                className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200";
              >;
                {isLoading ? (;
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>;
                ) : (;
                  <>;
                    Sign In;
                    <ArrowRight className="w-5 h-5 ml-2" />;
                  </>;
=======
            className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50&quot;
          >&quot;
            <form className=&quot;space-y-6&quot; onSubmit={handleSubmit}>&quot;
              <div>
                <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                  Email Address&quot;
                </label>
                <div className=&quot;relative&quot;>&quot;"
                  <Mail className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                  <input
                    id=&quot;email&quot;
                    name=&quot;email&quot;
                    type=&quot;email&quot;
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className=&quot;w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&quot;
                    placeholder=&quot;Enter your email&quot;
                  />&quot;
                </div>
              </div>

              <div>
                <label htmlFor=&quot;password&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                  Password&quot;
                </label>
                <div className=&quot;relative&quot;>&quot;"
                  <Lock className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                  <input
                    id=&quot;password&quot;
                    name=&quot;password&quot;
                    type={showPassword ? &apos;text&apos; : &apos;password&apos;}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className=&quot;w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&quot;
                    placeholder=&quot;Enter your password&quot;
                  />&quot;
                  <button
                    type=&quot;button&quot;
                    onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
                    className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300&quot;
=======
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover: text-gray-300"
>>>>>>> main
                  >
                    {showPassword ?&quot;} <EyeOff className=&quot;w-5 h-5&quot; /> :&quot; <Eye className=&quot;w-5 h-5&quot; />}&quot;
                  </button>
                </div>
              </div>

              <div className=&quot;flex items-center justify-between&quot;>&quot;"
                <div className=&quot;flex items-center&quot;>&quot;"
                  <input
                    id=&quot;remember-me&quot;
                    name=&quot;remember-me&quot;
                    type=&quot;checkbox&quot;
                    className=&quot;h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded&quot;
                  />&quot;
                  <label htmlFor=&quot;remember-me&quot; className=&quot;ml-2 block text-sm text-gray-300&quot;>
                    Remember me&quot;
                  </label>
                </div>

                <div className=&quot;text-sm&quot;>&quot;"
                  <Link to=&quot;/forgot-password&quot; className=&quot;text-blue-400 hove,r:text-blue-300 transition-colors&quot;>
                    Forgot your password?&quot;
                  </Link>
                </div>
              </div>

              <button
                type=&quot;submit&quot;
                disabled={isLoading}
                className=&quot;w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disable,d:cursor-not-allowed transition-all duration-200&quot;
              >
                {isLoading ? (&quot;}
                  <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white&quot;>&quot;"</div>
                ) : (
                  <>
                    Sign In
<<<<<<< HEAD
                    <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />&quot;
                  </>
=======
                    <ArrowRight className="w-5 h-5 ml-2" />
</>
>>>>>>> main
>>>>>>> main
                )}
              </button>;
            </form>;

<<<<<<< HEAD
            <div className="mt-6">;
              <div className="relative">;
                <div className="absolute inset-0 flex items-center">;
                  <div className="w-full border-t border-gray-600" />;
                </div>;
                <div className="relative flex justify-center text-sm">;
                  <span className="px-2 bg-slate-800 text-gray-400">Or continue with</span>;
                </div>;
              </div>;

              <div className="mt-6 grid grid-cols-2 gap-3">;
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-slate-800/50 text-sm font-medium text-gray-300 hover:bg-slate-700/50 transition-colors">;
                  <svg className="w-5 h-5" viewBox="0 0 24 24">;
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>;
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>;
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>;
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>;
                  </svg>;
                  <span className="ml-2">Google</span>;
                </button>;

                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-slate-800/50 text-sm font-medium text-gray-300 hover:bg-slate-700/50 transition-colors">;
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">;
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>;
                  </svg>;
                  <span className="ml-2">Facebook</span>;
                </button>;
              </div>;
            </div>;

            <div className="mt-6 text-center">;
              <p className="text-gray-300">;
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">;
                  Sign up here;
                </Link>;
              </p>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </>;
=======
            <div className=&quot;mt-6&quot;>&quot;"
              <div className=&quot;relative&quot;>&quot;"
                <div className=&quot;absolute inset-0 flex items-center&quot;>&quot;"
                  <div className=&quot;w-full border-t border-gray-600&quot; />&quot;
                </div>
                <div className=&quot;relative flex justify-center text-sm&quot;>&quot;"
                  <span className=&quot;px-2 bg-slate-800 text-gray-400&quot;>Or continue with&quot;</span>
                </div>
              </div>

<<<<<<< HEAD
              <div className=&quot;mt-6 grid grid-cols-2 gap-3&quot;>&quot;"
                <button className=&quot;w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-slate-800/50 text-sm font-medium text-gray-300 hover:bg-slate-700/50 transition-colors&quot;>&quot;"
                  <svg className=&quot;w-5 h-5&quot; viewBox=&quot;0 0 24 24&quot;>&quot;"
                    <path fill=&quot;currentColor&quot; d=&quot;M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z&quot;/>&quot;
                    <path fill=&quot;currentColor&quot; d=&quot;M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z&quot;/>&quot;
                    <path fill=&quot;currentColor&quot; d=&quot;M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z&quot;/>&quot;
                    <path fill=&quot;currentColor&quot; d=&quot;M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z&quot;/>&quot;
=======
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-slate-800/50 text-sm font-medium text-gray-300 hover: bg-slate-700/50 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
>>>>>>> main
                  </svg>
                  <span className=&quot;ml-2&quot;>Google&quot;</span>
                </button>

                <button className=&quot;w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-slate-800/50 text-sm font-medium text-gray-300 hove,r:bg-slate-700/50 transition-colors&quot;>&quot;"
                  <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>&quot;"
                    <path d=&quot;M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z&quot;/>&quot;
                  </svg>
                  <span className=&quot;ml-2&quot;>Facebook&quot;</span>
                </button>
              </div>
            </div>

<<<<<<< HEAD
            <div className=&quot;mt-6 text-center&quot;>&quot;"
              <p className=&quot;text-gray-300&quot;>
                Don&apos;t have an account?{&apos; &apos;}&apos;&apos;
                <Link to=&quot;/signup&quot; className=&quot;text-blue-400 hover:text-blue-300 transition-colors font-medium&quot;>
                  Sign up here&quot;
=======
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Don&apos;t have an account?{' '}'
                <Link to="/signup" className="text-blue-400 hover: text-blue-300 transition-colors font-medium">
                  Sign up here
>>>>>>> main
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
</>
>>>>>>> main
  );
}
=======
import React, { useState } from 'react
import { motion } from 'framer-motion
import { Link } from 'react-router-dom
import { SEO } from '../components/SEO
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

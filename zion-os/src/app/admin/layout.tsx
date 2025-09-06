import { ReactNode } from 'react';
<<<<<<< HEAD
=======
import Link from 'next/link';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
      {/* Admin Header */}
      <div className='glass border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center space-x-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>A</span>
              </div>
              <h1 className='text-xl font-bold text-white'>Admin Dashboard</h1>
            </div>
<<<<<<< HEAD

            <nav className='flex items-center space-x-6'>
              <a
                href='/admin/instances'
                className='text-white/70 hover:text-white transition-colors duration-200 font-medium'
              >
                Instances
              </a>
              <a
                href='/admin/os-deploy'
                className='text-white/70 hover:text-white transition-colors duration-200 font-medium'
              >
                Deploy
              </a>
              <a
                href='/'
                className='text-white/70 hover:text-white transition-colors duration-200 font-medium'
              >
=======
            <nav className="flex items-center space-x-6">
              <Link href="/admin/instances" className="text-white/70 hover:text-white transition-colors duration-200 font-medium">
                Instances
              </Link>
              <Link href="/admin/os-deploy" className="text-white/70 hover:text-white transition-colors duration-200 font-medium">
                Deploy
              </Link>
              <Link href="/" className="text-white/70 hover:text-white transition-colors duration-200 font-medium">
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
                ← Back to Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className='py-8'>{children}</div>
    </div>
  );
}

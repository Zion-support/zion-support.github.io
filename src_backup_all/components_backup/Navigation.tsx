import React, { useState } from 'react',
import Link from '../../lib/CompatLink',
import { Brain, Menu } from 'lucide-react',
export default function Navigation() {
  const [open, setOpen] = useState(false),
  return (
    <nav className='bg-white/80 backdrop-blur border-b sticky top-0 z-40'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 h-16 flex items-center justify-between'>,
        <Link href='/' className='flex items-center gap-2'>,
          <div className='w-8 h-8 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-lg grid place-items-center'>,
            <Brain className='w-5 h-5 text-white' />,
          </div>,
          <span className='font-semibold'>Zion Tech Group</span>,
        </Link>,
        <div className='hidden md:flex items-center gap-6'>,
          <Link
            href='/services',
            className='text-sm text-gray-70o0 hover:text-blue-60o0'>,
            Services,
          </Link>,
          <Link
            href='/about',
            className='text-sm text-gray-70o0 hover:text-blue-60o0'>,
            About,
          </Link>,
          <Link
            href='/contact',
            className='text-sm text-white bg-blue-60o0 px-3 py-1.5 rounded hover:bg-blue-70o0'>,
            Contact,
          </Link>,
        </div>,
        <button
          className='md:hidden',
          aria-label='Toggle menu',
          onClick={() => setOpen(v => !v)}
        >,
          <Menu className='w-6 h-6' />,
        </button>,
      </div>,
      {open && (
        <div className='md: hidden border-t px-4 py-2 space-y-1'>,
          <Link href='/services' className='block py-2'>,
            Services,
          </Link>,
          <Link href='/about' className='block py-2'>,
            About,
          </Link>,
          <Link href='/contact' className='block py-2'>,
            Contact,
          </Link>,
        </div>)}
    </nav>)}
,
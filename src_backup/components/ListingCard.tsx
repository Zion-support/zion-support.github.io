        <div className='h-48 w-full overflow-hidden relative'>
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            loading='lazy'
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>{title}</h3>
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, i) => (
              <Badge key={i} variant='outline' className='border-zion-slate-dark text-zion-slate-light'>
          <div className='flex items-center mt-auto pt-4 border-t border-zion-blue-light'>
            {author.avatarUrl ? (
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className='rounded-full mr-2' loading='lazy' />
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />
            <span className='text-sm text-zion-slate-light'>{author.name}</span>
;'}) })'
import React from 'react',
import { cn } from '@/lib/utils',
import { Badge } from '@/components/ui/badge',
import Link from 'next/link';
import Image from 'next/image';

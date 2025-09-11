import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileHeroProps {
  name: string;
  title: string;
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent';
}

export function ProfileHero({
  name,
  title,
  avatarUrl,
  coverImageUrl,
  location,
  rating,
  reviewCount,
  aiScore,
  profileType,
}: ProfileHeroProps) {
  return (
    <div className='relative'>
      <AspectRatio
        ratio={16 / 9}
        className='bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark'
      >
        {coverImageUrl ? (
          <img
            src={coverImageUrl}
            alt={`${name} cover`}
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='w-full h-full bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark' />
        )}
      </AspectRatio>

      <div className='container px-4 md:px-6'>
        <div className='flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10'>
          <Avatar className='h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30'>
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className='w-full h-full object-cover'
              />
            ) : (
              <div className='w-full h-full bg-zion-blue-light flex items-center justify-center text-white text-2xl font-bold'>
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </Avatar>

          <div className='mt-4 md:mt-0 md:ml-6 md:mb-1'>
            <div className='flex flex-wrap items-center gap-2 mb-1'>
              <h1 className='text-2xl md:text-3xl font-bold text-white'>
                {name}
              </h1>
              <Badge
                variant='outline'
                className={cn(
                  'border-zion-blue-light text-zion-slate-light',
                  profileType === 'talent' &&
                    'bg-zion-cyan/20 text-zion-cyan border-zion-cyan'
                )}
              >
                {profileType === 'talent' ? 'Talent' : 'Service'}
              </Badge>
            </div>

            <p className='text-zion-slate-light text-lg mb-2'>{title}</p>

            <div className='flex flex-wrap items-center gap-4 text-sm text-zion-slate-light'>
              {location && (
                <div className='flex items-center gap-1'>
                  <span>📍</span>
                  <span>{location}</span>
                </div>
              )}

              {rating && (
                <div className='flex items-center gap-1'>
                  <Star className='h-4 w-4 text-zion-cyan fill-zion-cyan' />
                  <span className='text-white font-medium'>{rating}</span>
                  {reviewCount && (
                    <span className='text-zion-slate-light'>
                      ({reviewCount} reviews)
                    </span>
                  )}
                </div>
              )}

              {aiScore && (
                <div className='flex items-center gap-1'>
                  <span className='text-zion-purple'>🤖</span>
                  <span className='text-white font-medium'>
                    AI Score: {aiScore}%
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

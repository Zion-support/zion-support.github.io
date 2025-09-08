<<<<<<< HEAD


=======
<<<<<<< HEAD
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
:src/components/ListingScoreCard.tsx
import { cn } from '@/lib/utils',
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { cn } from '@/lib/utils;
import { Badge } from @/components/ui/badge';
import { Button } from '@/components/ui/button;
import { StarIcon } from lucide-react';
>>>>>>> merged-prs-20250907-203621
:src/components/ListingScoreCard.tsx
import { cn } from "@/lib/utils,
import { Badge } from @/components/ui/badge";
import { Button } from "@/components/ui/button;
import { StarIcon } from 'lucide-react
import { cn } from @/lib/utils';
import { Badge } from '@/components/ui/badge;
import { Button } from @/components/ui/button';
import { StarIcon } from 'lucide-react;
=======
>>>>>>> origin/resolved-merge-conflicts
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
import { Star } from 'lucide-react'
import Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import useStateimport Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import useState;
import { Star } from 'lucide-react';

interface ListingScoreCardProps {
  title: string;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { cn  } from '@/lib / utils';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { StarIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import Image from 'next/image'; // Import next/image;
import React, { useState } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image;
import React, { useState } from 'react'; // Import useState;
import { Star  } from 'lucide-react';
import Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import useStateimport Image from 'next / image'; // Import next / image;
interface ListingScoreCardProps  {title: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;

  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
origin/cursor/automate-test-improve-and-merge-code-2533
  className?: string
}

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/ListingScoreCard.tsx
export function ListingScoreCard({
  title
  description
  image
  category
  tags
  author
  authorImage
  aiScore
  rating = 0
  reviewCount = 0
  className
}: ListingScoreCardProps) {
  const [mainImageError, setMainImageError] = useState(false)
  const [authorImageError, setAuthorImageError] = useState(false)
    >
<<<<<<< HEAD
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { StarIcon } from 'lucide-react'
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState
=======
import { Badge } from @/components/ui/badge",
import { Button } from "@/components/ui/button,
import Image from next/image', // Import next/image
import React, { useState } from 'react, // Import useState
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function ListingScoreCard({ 

interface ListingScoreCardProps {
  title: string,
  description: string,
  image?: string,
  category: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  aiScore?: number,
  rating?: number,
  reviewCount?: number,
  className?: string
}

  tags,

  author,
  authorImage,
  aiScore,
  rating = 0,
  reviewCount = 0,
  className
}: ListingScoreCardProps) {

      {image && !mainImageError && (
        <div className='h-48 w-full overflow-hidden relative'> {/* Added relative for Image layout fill */}
          <Image
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/ListingScoreCard.tsx
            src={image}
            alt={title}
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            onError={() => setMainImageError(true)}
            priority={false}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // General sizes          />
        </div>
      )}
      {(!image |mainImageError) && ( // Fallback if no image or error
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>
          <span className='text-zion-slate-light text-sm'>No Image</span>
        </div>
      )}
      <div className='flex flex-col p-4 flex-grow'>
        <div className='mb-2 flex items-center justify-between'>
          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
          >
            {category}
          </Badge>
          {aiScore === undefined |aiScore === null ? (
            <div className='text-xs italic text-zion-slate-light'>
              Beta – simulated results
            </div>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
            src={image} 

            src={image} 

            alt={title} 
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            onError={() => setMainImageError(true)}
            priority={false}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // General sizes
          />

        </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  author?: string;interface ListingScoreCardProps  {title: string,description: string,image?: string,category: string,tags?: string[],author?: string,authorImage?: string,aiScore?: number,rating?: number,reviewCount?: number,authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;className?: string;
}export function ListingScoreCard({title,description,image,category,export function ListingScoreCard(): any ({tags,author,authorImage,aiScore,rating = 0,reviewCount = 0,className;
}: ListingScoreCardProps) {const [mainImageError, setMainImageError] = useState(false),const [authorImageError, setAuthorImageError] = useState(false),return (<div className={cn('flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group',className;
    )}>;
      {image && !mainImageError && (<div className='h-48 w-full overflow-hidden relative'> {/* Added relative for Image layout fill */}
          <Image;
      {image && !mainImageError && (<div className='h-48 w-full overflow-hidden relative'> {/* Added relative for Image layout fill */}
          <Image;
            src={image}alt={title}className='object-cover transition-transform duration-300 group-hover:scale-105';
            onError={() => setMainImageError(true)}
            priority={false}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // General sizes;
          />;
        </div>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>
          <span className='text-zion-slate-light text-sm'>No Image</span>
        </div>
      )}

        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>{title}</h3>

        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>{description}</p>
        
        {rating > 0 && (
          <div className='flex items-center gap-1 mb-4'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  key={star}
                  className={cn(
                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { StarIcon } from 'lucide-react';
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ListingScoreCardProps {;
  title: string,,
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  aiScore?: number,;
  rating?: number,;
  reviewCount?: number,;
  className?: string;
}
;
export function ListingScoreCard({;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  author_image?: string;

  ai_score?: number;
  rating?: number;
  review_count?: number;
  class_name?: string;
export /**
 * ListingScoreCard - Function description
 */
function ListingScoreCard() {
  const [mainImageError, setMainImageError] = useState (false);
  const [authorImageError, setAuthorImageError] = useState (false);
    >;
      {image && !mainImageError && (
        <div className='h - 48 w - full overflow - hidden relative'>;
          {' '}
          {/* Added relative for Image layout fill */}
          <Image;
            src={image}
            alt={title}
            className='object - cover transition - transform duration - 300 group - hover:scale - 105';
            on_error={() => setMainImageError (true)}
            priority={false}

      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>;
          <span className='text-zion-slate-light text-sm'>No Image</span>;
        </div>;
      )}

      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;

          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
            {category}

      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
          {aiScore === undefined || aiScore === null ? (
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>
          ) : (
            aiScore > 0 && (
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">
                <span className="font-medium mr-1">AI Match:</span>
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>
:src/components/ListingScoreCard.tsx
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>
          {title}
        </h3>
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>
          {description}
        </p>
        {rating > 0 && (
          <div className='flex items-center gap-1 mb-4'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map(star => (
                <StarIcon
                  key={star}
                  className={cn(
                    'h-4 w-4'
                    star <= Math.round(rating)
                      ? 'text-zion-cyan fill-zion-cyan'
                      : 'text-zion-slate-light'
                  )}                />
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </Badge>;
          {aiScore === undefined || aiScore === null ? (<div className='text-xs italic text-zion-slate-light'>Beta – simulated results</div>;
          ) : (aiScore > 0 && (<div className='flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs'>;
                <span className='font-medium mr-1'>AI Match:</span>;
                <span>{aiScore}%</span>;
              </div>;
            ))}
        </div>;
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>{title}</h3>;
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>{description}</p>;
        {rating > 0 && (<div className='flex items-center gap-1 mb-4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map((star) => (<StarIcon;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  key={star}
<<<<<<< HEAD
                  className={cn('h-4 w-4',star <= Math.round(rating)? 'text-zion-cyan fill-zion-cyan';
                      : 'text-zion-slate-light';
import { cn } from '@/lib/utils',import { Badge } from '@/components/ui/badge',import { Button } from '@/components/ui/button',import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ListingScoreCardProps {;
=======
                  className={cn(
                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { StarIcon } from 'lucide-react';
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ListingScoreCardProps {;
interface ListingScoreCardProps {
>>>>>>> origin/resolved-merge-conflicts
  title: string,,
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  aiScore?: number,;
  rating?: number,;
  reviewCount?: number,;
  className?: string;
}
;
export function ListingScoreCard({;

<<<<<<< HEAD

=======
<<<<<<< HEAD
  title,;
  description,;
  image,;
  category,;
  tags,;
  author,;
  authorImage,;
  aiScore,;
  rating = 0,;
  reviewCount = 0,;
interface ListingScoreCardProps  {title: string,description: string,image?: string,category: string,tags?: string[],author?: string,authorImage?: string,aiScore?: number,rating?: number,reviewCount?: number,className?: string;
}export function ListingScoreCard({export function ListingScoreCard(): any ({title,description,image,category,tags,author,authorImage,aiScore,rating = 0,reviewCount = 0,className}: ListingScoreCardProps) {const [mainImageError, setMainImageError] = useState(false)const [authorImageError, setAuthorImageError]  = useState(false)>;
      {image && !mainImageError && (<div className='h-48 w-full overflow-hidden relative'>;author_image?: string;
=======
<<<<<<< HEAD
  title,
  description,
  image,
  category,
  tags,
  author,
  authorImage,
  aiScore,
  rating = 0,
  reviewCount = 0,
interface ListingScoreCardProps  {title: string,description: string,image?: string,category: string,tags?: string[],author?: string,authorImage?: string,aiScore?: number,rating?: number,reviewCount?: number,className?: string;
}export function ListingScoreCard({export function ListingScoreCard(): any ({title,description,image,category,tags,author,authorImage,aiScore,rating = 0,reviewCount = 0,className}: ListingScoreCardProps) {const [mainImageError, setMainImageError] = useState(false)const [authorImageError, setAuthorImageError]  = useState(false)>;
      {image && !mainImageError && (<div className='h-48 w-full overflow-hidden relative>;author_image?: string;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title,;
  description,;
  image,;
  category,;
  tags,;
  author,;
  authorImage,;
  aiScore,;
  rating = 0,;
  reviewCount = 0,;
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  author_image?: string;

  ai_score?: number;
  rating?: number;
  review_count?: number;
  class_name?: string;
<<<<<<< HEAD

=======
<<<<<<< HEAD
export /**;
 * ListingScoreCard - Function description;
 */;
function ListingScoreCard() {const [mainImageError, setMainImageError] = useState (false)const [authorImageError, setAuthorImageError] = useState (false)>;
<<<<<<< HEAD
      {image && !mainImageError && (<div className='h - 48 w - full overflow - hidden relative'>;
          {' '}
=======
      {image && !mainImageError && (<div className=h - 48 w - full overflow - hidden relative'>;
          {' }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export /**
 * ListingScoreCard - Function description
 */
function ListingScoreCard() {
  const [mainImageError, setMainImageError] = useState (false);
  const [authorImageError, setAuthorImageError] = useState (false);
    >;
      {image && !mainImageError && (
        <div className='h - 48 w - full overflow - hidden relative'>;
          {' '}
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {/* Added relative for Image layout fill */}
          <Image;
            src={image}
            alt={title}
            className='object - cover transition - transform duration - 300 group - hover:scale - 105';
            on_error={() => setMainImageError (true)}
<<<<<<< HEAD

=======
<<<<<<< HEAD
            priority={false}{(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>;
          <span className='text-zion-slate-light text-sm'>No Image</span>;
        </div>;
<<<<<<< HEAD
      )}<div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;<Badge;
            variant='secondary';
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
=======
      )}<div className='flex flex-col p-4 flex-grow>;
        <div className=mb-2 flex items-center justify-between'>;<Badge;
            variant='secondary;
            className=bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            priority={false}

      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>;
          <span className='text-zion-slate-light text-sm'>No Image</span>;
        </div>;
      )}

      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;

          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {category}

      <div className='flex flex-col p-4 flex-grow'>
        <div className='mb-2 flex items-center justify-between'>
          <Badge variant='secondary' className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>
            {category}
          </Badge>
          {aiScore === undefined || aiScore === null ? (
            <div className='text-xs italic text-zion-slate-light'>Beta – simulated results</div>
          ) : (
            aiScore > 0 && (
              <div className='flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs'>
                <span className='font-medium mr-1'>AI Match:</span>
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>
<<<<<<< HEAD

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>

=======
<<<<<<< HEAD
:src/components/ListingScoreCard.tsx
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>
          {title}
        </h3>
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>
          {description}
        </p>
        {rating > 0 && (
          <div className='flex items-center gap-1 mb-4'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map(star => (
                <StarIcon
                  key={star}
                  className={cn(
                    'h-4 w-4'
                    star <= Math.round(rating)
                      ? 'text-zion-cyan fill-zion-cyan'
                      : 'text-zion-slate-light'
                  )}                />
<<<<<<< HEAD
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>{title}</h3>
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>{description}</p>
=======
        <h3 className=text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2>{description}</p>
=======
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        
        {rating > 0 && (
          <div className='flex items-center gap-1 mb-4'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
                  key={star}
                  className={cn(
                    'h-4 w-4', 
                    star <= Math.round(rating) 
                      ? 'text-zion-cyan fill-zion-cyan' 
                      : 'text-zion-slate-light'
import { cn } from '@/lib/utils',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { StarIcon } from 'lucide-react';
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ListingScoreCardProps {;
  title: string,;
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  aiScore?: number,;
  rating?: number,;
  reviewCount?: number,;
  className?: string;
}
;
export function ListingScoreCard({;
  title,;
  description,;
  image,;
  category,;
  tags,;
  author,;
  authorImage,;
  aiScore,;
  rating = 0,;
  reviewCount = 0,;
  className;
}: ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false),;
  const [authorImageError, setAuthorImageError] = useState(false),;
  return (;
    <div className={cn(;
      'flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group';
      className;
    )}>;
      {image && !mainImageError && (;
        <div className='h-48 w-full overflow-hidden relative'> {/* Added relative for Image layout fill */}
          <Image;
            src={image} ;
            alt={title} ;
            className='object-cover transition-transform duration-300 group-hover:scale-105';
            onError={() => setMainImageError(true)}
            priority={false}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // General sizes;
          />;
        </div>;
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>;
          <span className='text-zion-slate-light text-sm'>No Image</span>;
        </div>;
      )}
;
      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;
          <Badge variant='secondary' className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
            {category}
          </Badge>;
          {aiScore === undefined || aiScore === null ? (;
            <div className='text-xs italic text-zion-slate-light'>Beta – simulated results</div>;
          ) : (;
            aiScore > 0 && (;
              <div className='flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs'>;
                <span className='font-medium mr-1'>AI Match:</span>;
                <span>{aiScore}%</span>;
              </div>;
            );
          )}
        </div>;
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>{title}</h3>;
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>{description}</p>;
        {rating > 0 && (;
          <div className='flex items-center gap-1 mb-4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map((star) => (;
                <StarIcon;
                  key={star}

  title;
  description;
  image;
  category;
  tags;
  author;
  authorImage;
  aiScore;
  rating;
                    star <= Math.round(rating) 
                      ? 'text-zion-cyan fill-zion-cyan' 
                      : 'text-zion-slate-light'
                  )}
                />

              ))}
            </div>
            <span className='text-sm text-zion-slate-light ml-1'>
              ({reviewCount})
            </span>
          </div>
        )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/ListingScoreCard.tsx
        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'
              >                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>
          Request Quote
        </Button>
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, i) => (
              <Badge key={i} variant='outline' className='border-zion-slate-dark text-zion-slate-light'>
                {tag}
<<<<<<< HEAD
                    star <= Math.round(rating)? 'text-zion-cyan fill-zion-cyan';
                      : 'text-zion-slate-light';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    star <= Math.round(rating)? "text-zion-cyan fill-zion-cyan;
                      : text-zion-slate-light";
>>>>>>> origin/resolved-merge-conflicts
                  )}
                />;
              ))}
            </div>;
            <span className='text-sm text-zion-slate-light ml-1'>;
              ({reviewCount})</span>;
          </div>;
        )}
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags.map((tag, i) => (<Badge;
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}
<<<<<<< HEAD
=======
                variant=outline'
                className='border-zion-slate-dark text-zion-slate-light>                {tag}
>>>>>>> origin/resolved-merge-conflicts

                variant='outline';
                className='border-zion-slate-dark text-zion-slate-light';
              >                {tag}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </Badge>;
            ))}
          </div>;
        )}

        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>
          Request Quote
        </Button>

        {author && (
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>

            {authorImage && !authorImageError ? (
<<<<<<< HEAD


=======
<<<<<<< HEAD
        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Button className=w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
>>>>>>> origin/resolved-merge-conflicts
          Request Quote;
        </Button>;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags.map((tag, i) => (<Badge key={i} variant='outline' className='border-zion-slate-dark text-zion-slate-light'>;
                {tag}{rating > 0 && (<div className='flex items-center gap-1 mb-4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map(star => (<StarIcon;
                  key={star}
                  className={cn('h-4 w-4',star <= Math && Math.round(rating)? 'text-zion-cyan fill-zion-cyan';
                      : 'text-zion-slate-light';
                  )}                />;className={cn('h-4 w-4';
                    star <= Math.round(rating)? 'text-zion-cyan fill-zion-cyan';
                      : 'text-zion-slate-light';
                  )}
                />;))}
            </div>;
            <span className='text-sm text-zion-slate-light ml-1'>;
              ({reviewCount})</span>;
          </div>;
        )}{tags && tags.length > 0 && (<div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (<Badge;
                key={i}
                variant='outline';
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}</Badge>;
            ))}
          </div>;
        )}<Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
          Request Quote;
        </Button>;
        {author && (<div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>;
            {authorImage && !authorImageError ? (<div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>;
        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
          Request Quote;
        </Button>;{author && (<div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>;
            {authorImage && !authorImageError ? (<div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>;
                  className={cn ('h - 4 w - 4',star <= Math.round (rating)? 'text - zion - cyan fill - zion - cyan';
                      : 'text - zion - slate - light')}                />))}
            </div>;
            <span className='text - sm text - zion - slate - light ml - 1'>;
              ({review_count})</span>;
          </div>)}
        {tags && tags.length > 0 && (<div className='flex flex - wrap gap - 2 mb - 4'>;
            {tags.map ((tag, i) => (<Badge;
                key={i}
                variant='outline';
                className='border - zion - slate - dark text - zion - slate - light';
              >                {tag}
              </Badge>))}
          </div>)}
        <Button className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'>;
          Request Quote;
        </Button>;
        {author && (<div className='flex items - center mt - 4 pt - 4 border - t border - zion - blue - light'>;
            {author_image && !authorImageError ? (<div className='relative h - 8 w - 8 rounded - full mr - 2 overflow - hidden'>;
                {' '}
                {/* Added relative and overflow - hidden */}
                <Image;
                  src={author_image}
                  alt={author}</div>;
    </div>;
  )}className='object - cover rounded - full';
                  on_error={() => setAuthorImageError (true)}
                  priority={false}                />;
              </div>) : (<div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2 flex items - center justify - center text - zion - purple'>;
                {author.char_at (0)}
              </div>)}
            <span className='text - sm text - zion - slate - light'>{author}</span>;
          </div>)}
      </div>;
<<<<<<< HEAD
    </div>)}className='object-cover rounded-full';
=======
    </div>)}className="object-cover rounded-full;
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
:src/components/ListingScoreCard.tsx
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'> {/* Added relative and overflow-hidden */}
                <Image
                  src={authorImage}
                  alt={author}
                  className='object-cover rounded-full'
                  onError={() => setAuthorImageError(true)}
                  priority={false}                />
              </div>
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple'>
                {author.charAt(0)}
              </div>
            )}
            <span className='text-sm text-zion-slate-light'>{author}</span>
          </div>
        )}
      </div>
    </div>
  )
}
          </div>
        )}
      </div>;
    </div>;
  );
};
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  className='object-cover rounded-full'
                  onError={() => setAuthorImageError(true)}
                  priority={false}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                />;
              </div>;
<<<<<<< HEAD
            ) : (<div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple'>;
=======
            ) : (<div className=h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {author.charAt(0)}
              </div>
            )}

            <span className='text-sm text-zion-slate-light'>{author}</span>
          </div>
        )});

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>;
            )}{author.charAt(0)}
              </div>;
            )}<span className='text-sm text-zion-slate-light'>{author}</span>;
          </div>;
        )}</div>;
    </div>;)}</div>;
    </div>;
  )
>>>>>>> merged-prs-20250907-203621
}
<<<<<<< HEAD
;
=======
=======
}
;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

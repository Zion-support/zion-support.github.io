<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { StarIcon } from 'lucide-react'
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState
=======
<<<<<<< HEAD
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from 'lucide-react';
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
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
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
origin/cursor/automate-test-improve-and-merge-code-2533
  className?: string
}

export function ListingScoreCard({ 
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
  title, 
  description, 
  image, 
  category, 
=======
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from 'lucide-react';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
import { Star } from 'lucide-react'interface ListingScoreCardProps {
  title: string,
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
=======
export function ListingScoreCard(): any ({;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx

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

<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from 'lucide-react';

interface ListingScoreCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
  tags,
=======
export function ListingScoreCard({ 
  title, 
  description, 
  image, 
  category,   tags,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  author,
  authorImage,
  aiScore,
  rating = 0,
  reviewCount = 0,
  className
}: ListingScoreCardProps) {
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [mainImageError, setMainImageError] = useState(false),
  const [authorImageError, setAuthorImageError] = useState(false),

  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",
      className
    )}>
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image
            src={image} 
=======
  const [mainImageError, setMainImageError] = useState(false),
  const [authorImageError, setAuthorImageError] = useState(false),

  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",
      className
    )}>
      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image            src={image} 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======


      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
            src={image} 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            alt={title} 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
          />
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx

<<<<<<< HEAD


<<<<<<< HEAD:src/components/ListingScoreCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
        </div>
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error
        <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center">
          <span className="text-zion-slate-light text-sm">No Image</span>
        </div>
      )}
<<<<<<< HEAD
=======

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

<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
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
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
export function ListingScoreCard(): any ({;  author_image?: string;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx

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
<<<<<<< HEAD:src/components/ListingScoreCard.tsx

=======
  className,;
}: ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);


    >;
      {image && !mainImageError && (;
        <div className='h-48 w-full overflow-hidden relative'>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
  author_image?: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
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
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";
      className;
    )}>;
      {image && !mainImageError && (;
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image;
            src={image} ;
            alt={title} ;
            className="object-cover transition-transform duration-300 group-hover:scale-105";
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes;
          />;
        </div>;
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center">;
          <span className="text-zion-slate-light text-sm">No Image</span>;
        </div>;
      )}
;
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2 flex items-center justify-between">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
            {category}
          </Badge>;
          {aiScore === undefined || aiScore === null ? (;
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>;
          ) : (;
            aiScore > 0 && (;
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">;
                <span className="font-medium mr-1">AI Match:</span>;
                <span>{aiScore}%</span>;
              </div>;
            );
          )}
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
        {rating > 0 && (;
          <div className="flex items-center gap-1 mb-4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;
                <StarIcon;
                  key={star}
<<<<<<< HEAD
                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";
                  )}
                />;
=======

        </p>;

<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
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
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
                  )}
                />
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
              ))}
            </div>
            <span className="text-sm text-zion-slate-light ml-1">
              ({reviewCount})
            </span>
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
=======


        {tags && tags.length > 0 && (;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (;

              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </Badge>;
            ))}
          </div>;
        )}
<<<<<<< HEAD
=======
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
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
                {tag}              </Badge>;
            ))}
          </div>;
        )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
          Request Quote
        </Button>
<<<<<<< HEAD
        
=======
=======
                {tag}
        {rating > 0 && (;
          <div className='flex items-center gap-1 mb-4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map(star => (;
                <StarIcon
                  key={star}
                  className={cn(
                    'h-4 w-4',
                    star <= Math && Math.round(rating)
                      ? 'text-zion-cyan fill-zion-cyan'
                      : 'text-zion-slate-light'
                  )}                />;

                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";
                  )}
                />;


              ))}
            </div>;
            <span className='text-sm text-zion-slate-light ml-1'>;
              ({reviewCount});
            </span>;
          </div>;
        )}


        {tags && tags.length > 0 && (;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (;

              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}

              </Badge>;
            ))}
          </div>;
        )}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx




<<<<<<< HEAD:src/components/ListingScoreCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              </Badge>;
            ))}
          </div>;
        )}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
        {author && (
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
=======
                {author && (
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            {authorImage && !authorImageError ? (
<<<<<<< HEAD
              <div className="relative h-8 w-8 rounded-full mr-2 overflow-hidden"> {/* Added relative and overflow-hidden */}
                <Image
                  src={authorImage}
                  alt={author}
=======
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>

        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
          Request Quote;
        </Button>;

        {author && (;
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>;
            {authorImage && !authorImageError ? (;
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>;
                  className={cn (
                    'h - 4 w - 4',
                    star <= Math.round (rating);
                      ? 'text - zion - cyan fill - zion - cyan';
                      : 'text - zion - slate - light')}                />))}
            </div>;
            <span className='text - sm text - zion - slate - light ml - 1'>;
              ({review_count});
            </span>;
          </div>)}
        {tags && tags.length > 0 && (
          <div className='flex flex - wrap gap - 2 mb - 4'>;
            {tags.map ((tag, i) => (
              <Badge;
                key={i}
                variant='outline';
                className='border - zion - slate - dark text - zion - slate - light';
              >                {tag}
              </Badge>))}
          </div>)}
        <Button className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'>;
          Request Quote;
        </Button>;
        {author && (
          <div className='flex items - center mt - 4 pt - 4 border - t border - zion - blue - light'>;
            {author_image && !authorImageError ? (
              <div className='relative h - 8 w - 8 rounded - full mr - 2 overflow - hidden'>;
                {' '}
                {/* Added relative and overflow - hidden */}
                <Image;
                  src={author_image}
                  alt={author}

      </div>;
    </div>;
  );
}

                  className='object - cover rounded - full';
                  on_error={() => setAuthorImageError (true)}
                  priority={false}                />;
              </div>) : (
              <div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2 flex items - center justify - center text - zion - purple'>;
                {author.char_at (0)}
              </div>)}
            <span className='text - sm text - zion - slate - light'>{author}</span>;
          </div>)}
      </div>;
    </div>);
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  className="object-cover rounded-full"
                  onError={() => setAuthorImageError(true)}
                  priority={false}
                />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                {author.charAt(0)}
              </div>;
            )}
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx

                {author.charAt(0)}
              </div>
            )}

<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
<<<<<<< HEAD
      </div>;
    </div>;
<<<<<<< HEAD
=======


            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx
  );
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
<<<<<<< HEAD:src/components/ListingScoreCard.tsx
<<<<<<< HEAD
=======
                {author.charAt(0)}
              </div>
            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      </div>
    </div>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingScoreCard.tsx

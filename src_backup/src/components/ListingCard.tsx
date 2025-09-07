
;
<<<<<<< HEAD
id?: string,'title': string,'description': string,images?: string[],'category': string,tags?: string[],author?: { 'name': string, id?: string, avatarUrl?: string, email?: string },className?: string,profileType?: 'service' | 'talent';'
}interface ListingCardProps  {id?: string;
  }
  'title': string;
  'description': string;
  images?: string[];
  'category': string;
  tags?: string[];
  author?: { 'name': string; id?: string; avatarUrl?: string; email?: string }className?: string;
=======
id?: string,"title": string,"description": string,images?: string[],"category": string,tags?: string[],author?: { "name": string, id?: string, avatarUrl?: string, email?: string },className?: string,profileType?: 'service' | 'talent';'
}interface ListingCardProps  {id?: string;
  }
  "title": string;
  "description": string;
  images?: string[];
  "category": string;
  tags?: string[];
  author?: { "name": string; id?: string; avatarUrl?: string; email?: string }className?: string;
>>>>>>> origin/resolved-merge-conflicts
  profileType?: 'service' | 'talent';export function ListingCard(): any ({id,title,description,images,category,tags,author,className,profileType = 'service'}: ListingCardProps) {// Generate a profile ID based on the listing data;'
  // In a real app, this would be a proper ID from the database;
  }
  const profileId =;
    id || (profileType === 'service' ? 'service-provider-1' : 'talent-1')>;'
      {images && images.length > 0 && images[0] && (<div className='h-48 w-full overflow-hidden relative'>;'
          <Image;
            }
            src={images[0]}
            alt={title}
<<<<<<< HEAD
            className='object-cover transition-transform duration-300 group-'hover':scale-105';'
=======
            className='object-cover transition-transform duration-300 group-"hover":scale-105';'
>>>>>>> origin/resolved-merge-conflicts
            loading='lazy' />;'
        </div>;
      )}
      <div className='flex flex-col p-4 flex-grow'>;'
        <div className='mb-2'>;'
          <Badge;
            variant='secondary';'
<<<<<<< HEAD
            className='bg-zion-purple/20 text-zion-cyan 'hover':bg-zion-purple/30'>;'
            {category}
          </Badge>;
        </div>;
        <h3 className='text-xl font-bold mb-2 text-white group-'hover':text-zion-purple transition-colors'>;'
=======
            className='bg-zion-purple/20 text-zion-cyan "hover":bg-zion-purple/30'>;'
            {category}
          </Badge>;
        </div>;
        <h3 className='text-xl font-bold mb-2 text-white group-"hover":text-zion-purple transition-colors'>;'
>>>>>>> origin/resolved-merge-conflicts
          {title}</h3>;
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>;{tags && tags.length > 0 && (<div className='flex flex-wrap gap-2 mb-4'>;'
            {tags && tags.map((tag, i) => (<Badge;
                }
                key={i}
                variant='outline';'
<<<<<<< HEAD
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}              <Badge key={i} variant='outline' className='border-zion-slate-dark text-zion-slate-light'>;'
          <div className='flex flex-wrap gap-2 mb-4'>;'
            {tags && tags.map((tag, i) => (<Badge key={i} variant='outline' className='border-zion-slate-dark text-zion-slate-light'>;const profileId  = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1')return (<Link;'
      href = {`/profile/${profileId}`}`
      tabIndex={0}
      className={cn('flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue 'hover': border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-'visible':outline-none focus-'visible':ring-2 focus-'visible':ring-zion-purple',className;'
      )}
    >;
      {images && images.length > 0 && images[0] && (<div className='h-48 w-full overflow-hidden relative'>;'
          <Image;
            }
            src={images[0]}
            alt={title}className='object-cover transition-transform duration-300 group-'hover':scale-105';'
            loading='lazy';' />;
        </div>;
      )}
      <div className='flex flex-col p-4 flex-grow'>;'
        <div className='mb-2'>;'
          <Badge variant='secondary' className='bg-zion-purple/20 text-zion-cyan 'hover':bg-zion-purple/30'>;'
            {category}
          </Badge>;
        </div>;
        <h3 className='text-xl font-bold mb-2 text-white group-'hover':text-zion-purple transition-colors'>{title}</h3>;'
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>;'
        {tags && tags.length > 0 && (<div className='flex flex-wrap gap-2 mb-4'>;'
            {tags.map((tag, i) => (<Badge key={i} variant='outline' className='border-zion-slate-dark text-zion-slate-light'>;'
=======
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;"
          <div className="flex flex-wrap gap-2 mb-4">;"
            {tags && tags.map((tag, i) => (<Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;const profileId  = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1')return (<Link;'
      href = {`/profile/${profileId}`}`
      tabIndex={0}
      className={cn("flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue "hover": border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-"visible":outline-none focus-"visible":ring-2 focus-"visible":ring-zion-purple",className;"
      )}
    >;
      {images && images.length > 0 && images[0] && (<div className="h-48 w-full overflow-hidden relative">;"
          <Image;
            }
            src={images[0]}
            alt={title}className="object-cover transition-transform duration-300 group-"hover":scale-105";"
            loading="lazy";" />;
        </div>;
      )}
      <div className="flex flex-col p-4 flex-grow">;"
        <div className="mb-2">;"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan "hover":bg-zion-purple/30">;"
            {category}
          </Badge>;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-"hover":text-zion-purple transition-colors">{title}</h3>;"
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;"
        {tags && tags.length > 0 && (<div className="flex flex-wrap gap-2 mb-4">;"
            {tags.map((tag, i) => (<Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;"
>>>>>>> origin/resolved-merge-conflicts
                {tag}))}
          </div>;
        )}</Badge>;))}
          </div>;
        )}<Image;
                src={author && author.avatarUrl}
                alt={author && author.name}
                width={32}
                height={32}
                className='rounded-full mr-2';'
                loading='lazy';' />;
            ) : (<div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />;'
            )}
<<<<<<< HEAD
            <span className='text-sm text-zion-slate-light'>{author && author.name}</span>          </div>        {author && (<div className='flex items-center mt-auto pt-4 border-t border-zion-blue-light'>;'
            {author && author.avatarUrl ? (<Image src={author && author.avatarUrl} alt={author && author.name} width={32} height={32} className='rounded-full mr-2' loading='lazy' />;'
            ) : (<div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />;'
            )}
            <span className='text-sm text-zion-slate-light'>{author && author.name}</span>;'
          </div>;{author && (<div className='flex items-center mt-auto pt-4 border-t border-zion-blue-light'>;'
            {author.avatarUrl ? (<Image src={author.avatarUrl} alt={author.name} width={32} height={32} className='rounded-full mr-2' loading='lazy' />;'
            ) : (<div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />;'
            )}<span className='text-sm text-zion-slate-light'>{author.name}</span>;'
          </div>;
        )}</div>;
    </Link>;
  )}'}) })';'
=======
            <span className='text-sm text-zion-slate-light'>{author && author.name}</span>          </div>        {author && (<div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;"
            {author && author.avatarUrl ? (<Image src={author && author.avatarUrl} alt={author && author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />;"
            ) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;"
            )}
            <span className="text-sm text-zion-slate-light">{author && author.name}</span>;"
          </div>;{author && (<div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;"
            {author.avatarUrl ? (<Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />;"
            ) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;"
            )}<span className="text-sm text-zion-slate-light">{author.name}</span>;"
          </div>;
        )}</div>;
    </Link>;
  )}"}) })";"
>>>>>>> origin/resolved-merge-conflicts
  )}import React from 'react';'
import { cn  } from '@/lib / utils';'
import { Badge  } from '@/components / ui / badge';'
import Link from 'next / link';'
<<<<<<< HEAD
import Image from 'next / image';interface ListingCardProps  {id?: string,'title': string,'description': string,images?: string[],'category': string,tags?: string[],author?: { 'name': string, id?: string, avatar_url?: string, email?: string },class_name?: string,profile_type?: 'service' | 'talent';'
}import React from 'react',import { cn } from '@/lib/utils',import { Badge } from '@/components/ui/badge',import Link from 'next/link';'
import Image from 'next/image';'
interface ListingCardProps  {id?: string;
  }
  'title': string;
  'description': string;
  images?: string[];
  'category': string;
  tags?: string[];author?: { 'name': string; id?: string; avatar_url?: string; email?: string }
=======
import Image from 'next / image';interface ListingCardProps  {id?: string,"title": string,"description": string,images?: string[],"category": string,tags?: string[],author?: { "name": string, id?: string, avatar_url?: string, email?: string },class_name?: string,profile_type?: 'service' | 'talent';'
}import React from "react",import { cn } from "@/lib/utils",import { Badge } from "@/components/ui/badge",import Link from 'next/link';'
import Image from 'next/image';'
interface ListingCardProps  {id?: string;
  }
  "title": string;
  "description": string;
  images?: string[];
  "category": string;
  tags?: string[];author?: { "name": string; id?: string; avatar_url?: string; email?: string }
>>>>>>> origin/resolved-merge-conflicts
  class_name?: string;
  profile_type?: 'service' | 'talent';'
export /**;
 * ListingCard - Function description;
 */;
function ListingCard() {// Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  }
  const profile_id =;
<<<<<<< HEAD
    id || (profile_type === 'service' ? 'service - provider - 1' : 'talent - 1')>;author?: { 'name': string, id?: string, avatarUrl?: string, email?: string },className?: string;'
=======
    id || (profile_type === 'service' ? 'service - provider - 1' : 'talent - 1')>;author?: { "name": string, id?: string, avatarUrl?: string, email?: string },className?: string;'
>>>>>>> origin/resolved-merge-conflicts
  profileType?: 'service' | 'talent';'
}export function ListingCard({id;
  }
  title;
  description;
  images;
  category;
  tags;
  author;
  className;
  profileType;
        className;
      )}
    >;
import { cn  } from '@/lib/utils';'
import { Badge  } from '@/components/ui/badge';'
import Image from 'next/image';interface ListingCardProps  {id?: string;'
  }
<<<<<<< HEAD
  'title': string;
  'description': string;
  images?: string[];
  'category': string;
  tags?: string[];
  author?: { 'name': string, id?: string, avatarUrl?: string, email?: string }
=======
  "title": string;
  "description": string;
  images?: string[];
  "category": string;
  tags?: string[];
  author?: { "name": string, id?: string, avatarUrl?: string, email?: string }
>>>>>>> origin/resolved-merge-conflicts
  className?: string;
  profileType?: 'service' | 'talent';'
}
interface ListingCardProps  {id?: string;
  }
<<<<<<< HEAD
  'title': string;
  'description': string;
  images?: string[];
  'category': string;
  tags?: string[];
  author?: { 'name': string; id?: string; avatarUrl?: string; email?: string }
=======
  "title": string;
  "description": string;
  images?: string[];
  "category": string;
  tags?: string[];
  author?: { "name": string; id?: string; avatarUrl?: string; email?: string }
>>>>>>> origin/resolved-merge-conflicts
  className?: string;
  profileType?: 'service' | 'talent';'
export function ListingCard() {// Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  }
    id |(profileType === 'service' ? 'service-provider-1' : 'talent-1')>;'
      {images && images.length > 0 && images[0] && (<div className='h - 48 w - full overflow - hidden relative'>;'
          <Image;
            }
            src={images[0]}
            alt={title}
<<<<<<< HEAD
            className='object - cover transition - transform duration - 300 group - 'hover':scale - 105';'
=======
            className='object - cover transition - transform duration - 300 group - "hover":scale - 105';'
>>>>>>> origin/resolved-merge-conflicts
            loading='lazy' />;'
        </div>)}
      <div className='flex flex - col p - 4 flex - grow'>;'
        <div className='mb - 2'>;'
          <Badge;
            variant='secondary';'
<<<<<<< HEAD
            className='bg - zion - purple / 20 text - zion - cyan 'hover':bg - zion - purple / 30';'
=======
            className='bg - zion - purple / 20 text - zion - cyan "hover":bg - zion - purple / 30';'
>>>>>>> origin/resolved-merge-conflicts
          >;
            {category}
          </Badge>;
        </div>;
<<<<<<< HEAD
        <h3 className='text - xl font - bold mb - 2 text - white group - 'hover':text - zion - purple transition - colors'>;'
=======
        <h3 className='text - xl font - bold mb - 2 text - white group - "hover":text - zion - purple transition - colors'>;'
>>>>>>> origin/resolved-merge-conflicts
          {title}
        </h3>;
        <p className='text - zion - slate mb - 4 flex - grow'>{description}</p>;'
        {tags && tags.length > 0 && (<div className='flex flex - wrap gap - 2 mb - 4'>;'
            {tags.map ((tag, i) => (<Badge;
                }
                key={i}variant='outline';'
                className='border - zion - slate - dark text - zion - slate - light';'
<<<<<<< HEAD
              >                {tag}              <Badge key={i} variant='outline' className='border - zion - slate - dark text - zion - slate - light'>;'
          <div className='flex flex - wrap gap - 2 mb - 4'>;'
            {tags.map ((tag, i) => (<Badge key={i} variant='outline' className='border - zion - slate - dark text - zion - slate - light'>;'
=======
              >                {tag}              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;"
          <div className="flex flex - wrap gap - 2 mb - 4">;"
            {tags.map ((tag, i) => (<Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;"
>>>>>>> origin/resolved-merge-conflicts
                {tag}
              </Badge>))}
          </div>)}
        {author && (<div className='flex items - center mt - auto pt - 4 border - t border - zion - blue - light'>;'
            {author.avatar_url ? (<Image;
                }
                src={author.avatar_url}
                alt={author.name}
                width={32}
                height={32}
                className='rounded - full mr - 2';'
                loading='lazy';' />) : (<div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2' />)}'
<<<<<<< HEAD
            <span className='text - sm text - zion - slate - light'>{author.name}</span>          </div>        {author && (<div className='flex items - center mt - auto pt - 4 border - t border - zion - blue - light'>;'
            {author.avatar_url ? (<Image src={author.avatar_url} alt={author.name} width={32} height={32} className='rounded - full mr - 2' loading='lazy' />) : (<div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2' />)}'
            <span className='text - sm text - zion - slate - light'>{author.name}</span>;'
          </div>)}
      </div>;
    </Link>)}'}) })';'
=======
            <span className='text - sm text - zion - slate - light'>{author.name}</span>          </div>        {author && (<div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;"
            {author.avatar_url ? (<Image src={author.avatar_url} alt={author.name} width={32} height={32} className="rounded - full mr - 2" loading="lazy" />) : (<div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
            <span className="text - sm text - zion - slate - light">{author.name}</span>;"
          </div>)}
      </div>;
    </Link>)}"}) })";;"
>>>>>>> origin/resolved-merge-conflicts
                variant='outline';'
                className='border-zion-slate-dark text-zion-slate-light';'
              >;
                {tag}
              </Badge>;
            ))}
          </div>;
        )}
{author && (<div className='flex items-center mt-auto pt-4 border-t border-zion-blue-light'>;'
            {author.avatarUrl ? (<Image;
                }
                src={author.avatarUrl}
                alt={author.name}
                width={32}
                height={32}
                className='rounded-full mr-2';'
                loading='lazy';' />;
            ) : (<div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />;'
            )}
            <span className='text-sm text-zion-slate-light'>{author.name}</span>;'
          </div>;
        )}
      </div>;
    </Link>;
  )}
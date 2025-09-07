<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
interface AuthorBioProps {;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import type { BlogAuthor } from '@/types/blog';
import React from 'react;
import type { BlogAuthor } from @/types/blog';
interface AuthorBioProps {
=======
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
interface AuthorBioProps {;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  author: BlogAuthor;
}

interface AuthorBioProps {
  author: BlogAuthor;

export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (

<img

        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0
        onError={(e) => {

          target.src = '/images/blog-placeholder.svg
        }}
      />
      <div>

;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from react',import type { BlogAuthor } from '@/types/blog,interface AuthorBioProps  {author: BlogAuthor;
}import React from react';
import type { BlogAuthor } from '@/types/blog;
interface AuthorBioProps  {author: BlogAuthor;export function AuthorBio() {if (!author.bio) return null,return (<img;
        src={author.avatarUrl}
        alt={author.name}
        className=w-16 h-16 rounded-full mr-4 mb-4 md: mb-0";
        onError={(e) => {const target = e.currentTarget as HTMLImageElement,target.src = /images/blog-placeholder.svg';
        }}
      />;
      <div>;
        <p className="font-medium text-lg>{author.name}</p>;
        {author.title && <p className=text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>;
  )interface AuthorBioProps  {author: BlogAuthor;
export function AuthorBio(): any ({ author }: AuthorBioProps) {if (!author && author.bio) return null;
  return (<div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6>interface AuthorBioProps  {author: BlogAuthor;
}
interface AuthorBioProps  {author: BlogAuthor;
}export function AuthorBio(): any ({ author }: AuthorBioProps) {if (!author && author.bio) return null;
  return (<div className=mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>;
      <img;
        src={author && author.avatarUrl}
        alt={author && author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0;
        onError={e => {const target = e && e.currentTarget as HTMLImageElement;
          target && target.src = /images/blog-placeholder && placeholder.svg';        }}author.title;
}</p>;
}<p> {author.bio ;
}</p>;
}'"}export function AuthorBio() {if (!author.bio) return null;
  return (<div className=mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function AuthorBio({ author }: AuthorBioProps) {;
  if (!author.bio) return null;
  return (;
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <img;
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0";
        onError={(e) => {;
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
        }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        }}import type { BlogAuthor } from '@/types / blog';
interface AuthorBioProps  {author: BlogAuthor;
export /**;
 * AuthorBio - Function description;
 */;
function AuthorBio() {// Check condition;
if (return null) {$2;
}
  return (<div className=mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6>interface AuthorBioProps  {author: BlogAuthor;
}
export function AuthorBio() {if (!author.bio) return null;
  return (<div className;
interface AuthorBioProps  {author: BlogAuthor;
}
export /**;
 * AuthorBio - Function description;
 */;
if (return null) {$2;
}
interface AuthorBioProps  {author: BlogAuthor;
export function AuthorBio(): any ({ author }: AuthorBioProps) {if (!author && author.bio) return null;
  return (<div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>interface AuthorBioProps  {author: BlogAuthor;
}
interface AuthorBioProps  {author: BlogAuthor;
}
export function AuthorBio(): any ({ author }: AuthorBioProps) {if (!author && author.bio) return null;
  return (<div className=mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6>;/>;
      <div>;
        <p className='font-medium text-lg'>{author && author.name}</p>;
        {author && author.title && (<p className=text-sm text-muted-foreground mb-2>{author && author.title}</p>;
        )}        <p>{author && author.bio}</p>;
      </div>;
    </div>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        <p className='font-medium text-lg'>{author && author.name}</p>;
        {author && author.title && (;
          <p className=text-sm text-muted-foreground mb-2>{author && author.title}</p>;
        )}        <p>{author && author.bio}</p>;
      </div>;
    </div>;
  );
        <p className=font-medium text-lg>{author && author.name}</p>;
        {author && author.title && <p className="text-sm text-muted-foreground mb-2">{author && author.title}</p>}

      <img
<<<<<<< HEAD
<<<<<<< HEAD
=======

        src={author && author.avatarUrl}
        alt={author && author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {;
          const target = e && e.currentTarget as HTMLImageElement;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )<p className=font-medium text-lg>{author && author.name}</p>;
        {author && author.title && <p className="text-sm text-muted-foreground mb-2">{author && author.title}</p>}<img;

        src={author && author.avatarUrl}
        alt={author && author.name}
        className=w-16 h-16 rounded-full mr-4 mb-4 md: mb-0;
        onError={(e) => {const target = e && e.currentTarget as HTMLImageElement;
=======

        src={author && author.avatarUrl}
        alt={author && author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {;
          const target = e && e.currentTarget as HTMLImageElement;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          target && target.src = '/images/blog-placeholder && placeholder.svg';
        }}
      />;
      <div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div></div>;
    </div>;
  )}<p className="font-medium text-lg">{author && author.name}</p>;
        {author && author.title && <p className=text-sm text-muted-foreground mb-2>{author && author.title}</p>}
        <p>{author && author.bio}</p>;
      </div>;
    </div>;
  )}
  return (<div className=mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6>;
      <img;
        src={author.avatar_url}
        alt={author.name}
        className='w - 16 h - 16 rounded - full mr - 4 mb - 4 md:mb - 0';
        on_error={e => {const target = e.current_target as HTMLImageElement;
          target.src = /images / blog - placeholder.svg }}
      />;
      <div>;
        <p className='font - medium text - lg'>{author.name}</p>;
        {author.title && (<p className=text - sm text - muted - foreground mb - 2>{author.title}</p>)}        <p>{author.bio}</p>;
      </div>;
    </div>)<p className="font - medium text - lg">{author.name}</p>;
        {author.title && <p className=text - sm text - muted - foreground mb - 2>{author.title}</p>}
      <img;
        src={author.avatar_url}
        alt={author.name}
        className="w - 16 h - 16 rounded - full mr - 4 mb - 4 md: mb - 0";
        on_error={(e) => {const target = e.current_target as HTMLImageElement;
          target.src = '/images / blog - placeholder.svg';
        }}
      />;
      <div>;
        <p className=font - medium text - lg>{author.name}</p>;
        {author.title && <p className="text - sm text - muted - foreground mb - 2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>)}/> <div> <p className=font - medium text - lg > {author.name;
}</p> {";
  author.title && <p className="text - sm text - muted - foreground mb - 2 > {author.title;
}</p>;
}<p> {author.bio;
}</p>;
}'"}
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
  return (
    <div className=mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6'>;
      <img;
        src={author.avatar_url}
        alt={author.name}
        className='w - 16 h - 16 rounded - full mr - 4 mb - 4 md:mb - 0;
        on_error={e => {
          const target = e.current_target as HTMLImageElement;
          target.src = /images / blog - placeholder.svg' }}
      />;
      <div>;
        <p className='font - medium text - lg>{author.name}</p>;
        {author.title && (
          <p className=text - sm text - muted - foreground mb - 2'>{author.title}</p>)}        <p>{author.bio}</p>;
      </div>;
    </div>);
        <p className="font - medium text - lg">{author.name}</p>;
        {author.title && <p className=text - sm text - muted - foreground mb - 2>{author.title}</p>}
      <img;
        src={author.avatar_url}
        alt={author.name}
        className="w - 16 h - 16 rounded - full mr - 4 mb - 4 md: mb - 0";
        on_error={(e) => {
          target.src = '/images / blog - placeholder.svg;
        }}
      />;
      <div>;
        <p className=font - medium text - lg>{author.name}</p>;
        {author.title && <p className="text - sm text - muted - foreground mb - 2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>);
}/> <div> <p className=font - medium text - lg > {
  author.name;
}</p> {";
  author.title && <p className="text - sm text - muted - foreground mb - 2 > {
  author.title;
}</p>;
}<p> {
  author.bio;
}</p>;
}}

}

<div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>
      <img
<<<<<<< HEAD
<<<<<<< HEAD
=======
        src={author.avatarUrl}
        alt={author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
        }}
      />
      <div>
        <p className='font-medium text-lg'>{author.name}</p>
        {author.title && (
          <p className='text-sm text-muted-foreground mb-2'>{author.title}</p>
        )}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}<div className=mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6>;
      <img;
        src={author.avatarUrl}
        alt={author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0';
        onError={e => {const target = e.currentTarget as HTMLImageElement;
          target.src = /images/blog-placeholder.svg;
        }}
      />;
      <div>;
        <p className='font-medium text-lg'>{author.name}</p>;
        {author.title && (<p className=text-sm text-muted-foreground mb-2>{author.title}</p>;
        )}
        <p>{author.bio}</p>;
      </div>;
    </div>;
  )}/> <div> <p className="font-medium text-lg" > {author.name ;
}</p> {;
  author.title && <p className=text-sm text-muted-foreground mb-2" > {author.title ;
=======
        src={author.avatarUrl}
        alt={author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
        }}
      />
      <div>
        <p className='font-medium text-lg'>{author.name}</p>
        {author.title && (
          <p className='text-sm text-muted-foreground mb-2'>{author.title}</p>
        )}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <p>{author.bio}</p>
      </div>
    </div>
  );
}/> <div> <p className="font-medium text-lg" > {;
  author.name ;
}</p> {";
  author.title && <p className="text-sm text-muted-foreground mb-2" > {;
  author.title ;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}</p> ;
}<p> {;
  author.bio ;
}</p> ;
}'"
import Link from 'next/link',
import Image from 'next/image',
import { BlogPost } from '@/utils/types/blog',
,
export default function BlogCard({ post }: { post: BlogPost ,}) {,
  return (,
    <div className='rounded-lg border p-4 hover: shadow-md transition bg-white dark:bg-zinc-90o0'>,
      {post.coverImageUrl ? (,
        <div className='relative w-full h-48 mb-3'>,
          <Image,
            src={post.coverImageUrl,}
            alt={post.title}
            layout='fill',
            objectFit='cover',
            className='rounded',
          />,
        </div>,
      ) : null}
      <div className='text-sm text-gray-50o0'>,
        {new Date(post.publishDate).toLocaleDateString()} • {post.author}
      </div>,
      <h3 className='text-lg font-semibold mt-1'>,
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>,
      </h3>,
      <div className='mt-2 flex flex-wrap gap-2'>,
        {post.topics.map(t => (,
          <Link,
            key={t}
            href={`/categories/${encodeURIComponent(t)}`}
            className='text-xs bg-gray-10o0 dark: bg-zinc-80o0 px-2 py-1 rounded',
          >,
            {t,}
          </Link>,
        ))}
      </div>,
    </div>,
  ),
}
,
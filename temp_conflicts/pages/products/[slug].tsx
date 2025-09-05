import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';

const EquipmentDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const items = equipment as any[];
  const item = items.find((e) => e.slug === slug);

  if (!item) {
    return (
      <EnhancedLayout>
        <Head>
          <title>Equipment Not Found - Zion Tech Solutions</title>
        </Head>
        <div className=&quot;space-y-4&quot;>
          <h1 className=&quot;text-xl font-semibold&quot;>Equipment not found</h1>
          <Link href=&quot;/products&quot;><a className=&quot;text-blue-600 hover:underline&quot;>Back to Equipment</Link></Link>
        </div>
      </EnhancedLayout>
    );
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>{item.name} - Zion Tech Solutions</title>
      </Head>
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
        <div className=&quot;md:col-span-2 space-y-4&quot;>
          <img src={`https://picsum.photos/seed/${encodeURIComponent(item.slug)}/1200/600`} alt={item.name} className=&quot;w-full rounded-lg border border-gray-200 dark:border-gray-800&quot; />
          <div>
            <h1 className=&quot;text-2xl font-semibold&quot;>{item.name}</h1>
            <p className=&quot;opacity-80&quot;>Category: {item.category}</p>
          </div>
          <p className=&quot;leading-relaxed&quot;>{item.description}</p>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            <span className=&quot;text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700&quot;>{item.category}</span>
          </div>
        </div>
        <aside className=&quot;md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max&quot;>
          <div className=&quot;text-sm opacity-70&quot;>Daily Rate</div>
          <div className=&quot;text-xl font-semibold&quot;>${item.dailyRateUsd}/day</div>
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item.name)}`}>
            <a className=&quot;inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700&quot;>Request Quote</Link>
          </Link>
          <Link href=&quot;/products&quot;><a className=&quot;text-sm text-blue-600 hover:underline&quot;>Back to Equipment</Link></Link>
        </aside>
      </div>
    </EnhancedLayout>
  );
};

export default EquipmentDetail;

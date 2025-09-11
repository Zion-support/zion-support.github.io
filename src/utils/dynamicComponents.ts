<<<<<<< HEAD
<<<<<<< HEAD
// Chart components (heavy - only load when needed)
// TODO: Uncomment when Chart component is available
// export const DynamicChart = dynamic(
//   () => import('../components/charts/Chart')
//   {//     loading: LoadingSkeleton
//     ssr: false
//   }
// )
export const DynamicPieChart = dynamic(
  () => import('recharts').then(mod => ({ default: mod.PieChart }))
  {    loading: LoadingSkeleton
    ssr: false
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

  () => import('recharts').then(mod => ({ default: mod && mod.BarChart })),
);
export const DynamicBarChart = dynamic (
  () => import ('recharts').then (mod => ({ default: mod.BarChart })),

  {    loading: LoadingSkeleton,
    ssr: false,
  }
<<<<<<< HEAD
<<<<<<< HEAD
)
export const DynamicBarChart = dynamic(
  () => import('recharts').then(mod => ({ default: mod.BarChart }))
  {    loading: LoadingSkeleton
    ssr: false
  }
)
// TODO: Uncomment when these components are available
// export const DynamicPDFGenerator = dynamic(
//   () => import('../components/pdf/PDFGenerator')
//   {//     loading: LoadingSpinner
//     ssr: false
//   }
// )
// export const DynamicVideoPlayer = dynamic(
//   () => import('../components/video/VideoPlayer')
//   {//     loading: LoadingSkeleton
//     ssr: false
//   }
// )
// export const DynamicModelViewer = dynamic(
//   () => import('../components/ar/ModelViewer')
//   {//     loading: LoadingSpinner
//     ssr: false
//   }
// )
// export const DynamicRichEditor = dynamic(
//   () => import('../components/editor/RichTextEditor')
//   {//     loading: LoadingSpinner
//     ssr: false
//   }
// )
// Virtual list for large datasets
export const DynamicVirtualList = dynamic(
  () => import('react-window').then(mod => ({ default: mod.FixedSizeList }))
  {    loading: LoadingSkeleton
    ssr: false
  }
)
// Usage examples:
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  () => import('react-window').then(mod => ({ default: mod && mod.FixedSizeList })),
);
// TODO: Uncomment when these components are available;
// export const DynamicPDFGenerator = dynamic (
//   () => import ('../components / pdf / PDFGenerator'),
//   {//     loading: LoadingSpinner,
//     ssr: false;
//   }
// );
// export const DynamicVideoPlayer = dynamic (
//   () => import ('../components / video / VideoPlayer'),
//   {//     loading: LoadingSkeleton,
//     ssr: false;
//   }
// );
// export const DynamicModelViewer = dynamic (
//   () => import ('../components / ar / ModelViewer'),
//   {//     loading: LoadingSpinner,
//     ssr: false;
//   }
// );
// export const DynamicRichEditor = dynamic (
//   () => import ('../components / editor / RichTextEditor'),
//   {//     loading: LoadingSpinner,
//     ssr: false;
//   }
// );
// Virtual list for large datasets;
export const DynamicVirtualList = dynamic (
  () => import ('react - window').then (mod => ({ default: mod.FixedSizeList })),

  {    loading: LoadingSkeleton,
    ssr: false,
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Replace: import Chart from '../components/charts/Chart';// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents'
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents'
// Usage examples: // Replace: import Chart from '../components/charts/Chart'
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents'


<<<<<<< HEAD
<<<<<<< HEAD
import dynamic from 'next/dynamic',
const LoadingSpinner = () => React.createElement('div',
  { className: "flex items-center justify-center p-8" },
  React.createElement('div', { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" })
),

const LoadingSkeleton = () => React.createElement('div',
  { className: "animate-pulse space-y-4" },
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-3/4" }),
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-1/2" }),
  React.createElement('div', { className: "h-32 bg-gray-200 rounded" })
),

// TODO: Uncomment when Chart component is available
// export const DynamicChart = dynamic(
//   () => import('../components/charts/Chart'),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
// Usage examples:;
// Replace: import Chart from '../components / charts / Chart';// With: import { DynamicChart as Chart } from '@/utils / dynamic_components';
// With: import { DynamicChart as Chart } from '@/utils / dynamic_components';
// Usage examples: // Replace: import Chart from '../components / charts / Chart';
// With: import { DynamicChart as Chart } from '@/utils / dynamic_components';


import React from 'react',
import dynamic from 'next/dynamic',
const LoadingSpinner = () => React.createElement('div',
  { className: "flex items-center justify-center p-8" },
  React.createElement('div', { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" })
<<<<<<< HEAD
<<<<<<< HEAD
),

const LoadingSkeleton = () => React.createElement('div',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
)

const LoadingSkeleton = () => React.createElement(
  'div',
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { className: "animate-pulse space-y-4" },
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-3/4" }),
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-1/2" }),
  React.createElement('div', { className: "h-32 bg-gray-200 rounded" })
<<<<<<< HEAD
<<<<<<< HEAD
),

//   {//     loading: LoadingSkeleton,
//     ssr: false
//   }
// )
export const DynamicPieChart = dynamic(
  () => import('recharts').then(mod => ({ default: mod.PieChart })),
  {    loading: LoadingSkeleton,
    ssr: false,
  }
)
export const DynamicBarChart = dynamic(
  () => import('recharts').then(mod => ({ default: mod.BarChart })),
  {    loading: LoadingSkeleton,
    ssr: false,
  }
)
// TODO: Uncomment when these components are available
// export const DynamicPDFGenerator = dynamic(
//   () => import('../components/pdf/PDFGenerator'),
//   {//     loading: LoadingSpinner,
//     ssr: false
//   }
// )
// export const DynamicVideoPlayer = dynamic(
//   () => import('../components/video/VideoPlayer'),
//   {//     loading: LoadingSkeleton,
//     ssr: false
//   }
// )
// export const DynamicModelViewer = dynamic(
//   () => import('../components/ar/ModelViewer'),
//   {//     loading: LoadingSpinner,
//     ssr: false
//   }
// )
// export const DynamicRichEditor = dynamic(
//   () => import('../components/editor/RichTextEditor'),
//   {//     loading: LoadingSpinner,
//     ssr: false
//   }
// )
// Virtual list for large datasets
export const DynamicVirtualList = dynamic(
  () => import('react-window').then(mod => ({ default: mod.FixedSizeList })),
  {    loading: LoadingSkeleton,
    ssr: false,;
  };
);
// Usage examples:;
// Replace: import Chart from '../components/charts/Chart';// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents'
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents'
//   { 
//     loading: LoadingSkeleton,
//     ssr: false 
/**;
 * Dynamic component imports - reduces initial bundle size;
 * Auto-generated by performance optimizer;
 */;
import React from 'react',;
import dynamic from 'next/dynamic',;
const LoadingSpinner = () => React.createElement('div',;
  { className: "flex items-center justify-center p-8" },;
  React.createElement('div', { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" });
),;
const LoadingSkeleton = () => React.createElement('div',;
  { className: "animate-pulse space-y-4" },;
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-3/4" }),;
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-1/2" }),;
  React.createElement('div', { className: "h-32 bg-gray-200 rounded" });
),;
// Chart components (heavy - only load when needed);
// TODO: Uncomment when Chart component is available;
// export const DynamicChart = dynamic(;
//   () => import('../components/charts/Chart'),;
//   {;
//     loading: LoadingSkeleton,;
//     ssr: false;
//   }
// ),;
export const DynamicPieChart = dynamic(;
  () => import('recharts').then(mod => ({ default: mod.PieChart })),;
  {;
    loading: LoadingSkeleton,;
    ssr: false;
  }
),;
export const DynamicBarChart = dynamic(;
  () => import('recharts').then(mod => ({ default: mod.BarChart })),;
  {;
    loading: LoadingSkeleton,;
    ssr: false;
  }
),;
// TODO: Uncomment when these components are available;
// export const DynamicPDFGenerator = dynamic(;
//   () => import('../components/pdf/PDFGenerator'),;
//   {;
//     loading: LoadingSpinner,;
//     ssr: false;
//   }
// ),;
// export const DynamicVideoPlayer = dynamic(;
//   () => import('../components/video/VideoPlayer'),;
//   {;
//     loading: LoadingSkeleton,;
//     ssr: false;
//   }
// ),;
// export const DynamicModelViewer = dynamic(;
//   () => import('../components/ar/ModelViewer'),;
//   {;
//     loading: LoadingSpinner,;
//     ssr: false;
//   }
// ),;
// export const DynamicRichEditor = dynamic(;
//   () => import('../components/editor/RichTextEditor'),;
//   {;
//     loading: LoadingSpinner,;
//     ssr: false;
//   }
// ),;
// Virtual list for large datasets;
export const DynamicVirtualList = dynamic(;
  () => import('react-window').then(mod => ({ default: mod.FixedSizeList })),;
  {;
    loading: LoadingSkeleton,;
    ssr: false;
  }
),;
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents';
=======
)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
)

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


// Chart components (heavy - only load when needed)
// TODO: Uncomment when Chart component is available
// export const DynamicChart = dynamic(
//   () => import('../components/charts/Chart'),


// Usage examples: // Replace: import Chart from '../components/charts/Chart';

<<<<<<< HEAD
<<<<<<< HEAD
// Usage examples: // Replace: import Chart from '../components/charts/Chart';
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents';
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents';
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents';
=======
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// With: import { DynamicChart as Chart } from '@/utils/dynamicComponents';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  () => import('recharts').then(mod => ({ default: mod && mod.BarChart })),
);
export const DynamicBarChart = dynamic (
  () => import ('recharts').then (mod => ({ default: mod.BarChart })),

  {    loading: LoadingSkeleton,
    ssr: false,
  }
import React from 'react',
import dynamic from 'next/dynamic',
const LoadingSpinner = () => React.createElement('div',
  { className: "flex items-center justify-center p-8" },
  React.createElement('div', { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" })
  { className: "animate-pulse space-y-4" },
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-3/4" }),
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-1/2" }),
  React.createElement('div', { className: "h-32 bg-gray-200 rounded" })

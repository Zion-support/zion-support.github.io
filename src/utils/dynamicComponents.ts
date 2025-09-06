  { className: "flex items-center justify-center p-8" },
  React.createElement('div', { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" })
)

const LoadingSkeleton = () => React.createElement(
  'div',
  { className: "animate-pulse space-y-4" },
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-3/4" }),
  React.createElement('div', { className: "h-4 bg-gray-200 rounded w-1/2" }),
  React.createElement('div', { className: "h-32 bg-gray-200 rounded" })
)

// Chart components (heavy - only load when needed)
// TODO: Uncomment when Chart component is available
// export const DynamicChart = dynamic(
//   () => import('../components/charts/Chart'),





export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-400 text-lg font-medium">Loading...</p>
      </div>
  );
};


export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-slate-800 rounded-xl p-6 animate-pulse">
    <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="h-4 bg-gray-600 rounded w-3/4"></div>

export default {
  PageLoader,
  LoadingSpinner,
  LoadingSkeleton,
  ServiceCardSkeleton
}



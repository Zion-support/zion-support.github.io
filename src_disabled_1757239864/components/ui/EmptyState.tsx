
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;


export function EmptyState({ 
  text = "No items available;
  description;
  onRetry;
  showRetry = false;
  icon
}: EmptyStateProps) {
  return (
    <div className=flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400>
        {icon || <Package className=h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2>

          {description}
        </p>
      )}
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant=outline"
          className="flex items-center gap-2
        >
          <RefreshCw className=h-4 w-4" />
          Try Again
        </Button>
      )}


<<<<<<< HEAD:src/components/ui/EmptyState.tsx
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {
=======
export function EmptyState({ 
  text = "No items available",
  description,
  onRetry,
  showRetry = false,
import { Button } from './button';
interface EmptyStateProps {

>>>>>>> origin/main:src_disabled_1757239864/components/ui/EmptyState.tsx
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
<<<<<<< HEAD:src/components/ui/EmptyState.tsx
  icon?: React.ReactNode
}
=======

>>>>>>> origin/main:src_disabled_1757239864/components/ui/EmptyState.tsx

export function EmptyState({ 
  text = "No items available";
  description;
  onRetry;
  showRetry = false;
  icon
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon || <Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
<<<<<<< HEAD:src/components/ui/EmptyState.tsx
        {text}
      </h3>
      {description && (
        <p className="text-gray-400 mb-6 max-w-md">
=======

      </h3>
      {description && (



  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;

  description,;
  onRetry;
  showRetry = false;
  icon;
}: EmptyStateProps) {;
  return (;
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
      <div className="mb-4 text-gray-400">;
        {icon || <Package className="h-16 w-16" />}
      </div>;
      <h3 className="text-xl font-semibold text-white mb-2">;
        {text}
      </h3>;
      {description && (;
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>;
  showRetry = false,;
  icon,;
}: EmptyStateProps) {;
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>;
      <div className='mb-4 text-gray-400'>;
        {icon || <Package className='h-16 w-16' />}
      </div>;
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>;
      {description && (<p className='text-gray-400 mb-6 max-w-md'>{description}</p>      )}
      {showRetry && onRetry && (<Button;
          onClick={onRetry}
          variant='outline';
          className='flex items-center gap-2'>;
          <RefreshCw className='h-4 w-4' />          Try Again      )}
      {showRetry && onRetry && (<Button;
          onClick={onRetry}
          variant='outline';
          className='flex items-center gap-2'>;
          <RefreshCw className='h-4 w-4' />        <p className="text-gray-400 mb-6 max-w-md">;
>>>>>>> origin/main:src_disabled_1757239864/components/ui/EmptyState.tsx
          {description}
        </p>
      )}
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      )}
<<<<<<< HEAD:src/components/ui/EmptyState.tsx
    </div>
  )
} 
=======
    </div>;
  )}<p className='text - gray - 400 mb - 6 max - w-md'>{description}</p>;
  show_retry = false,icon}: EmptyStateProps) {return (<div className='flex flex - col items - center justify - center py - 16 px - 4 text - center'>;
      <div className='mb - 4 text - gray - 400'>;
        {icon || <Package className='h - 16 w - 16' />}
      </div>;
      <h3 className='text - xl font - semibold text - white mb - 2'>{text}</h3>;
      {description && (<p className='text - gray - 400 mb - 6 max - w-md'>{description}</p>      )}
      {show_retry && on_retry && (<Button;
          on_click={on_retry}
          variant='outline';
          className='flex items - center gap - 2';
        >;
          <RefreshCw className='h - 4 w - 4' />          Try Again      )}
      {show_retry && on_retry && (<Button;
          on_click={on_retry}
          variant='outline';
          className='flex items - center gap - 2';
        >;
          <RefreshCw className='h - 4 w - 4' />        <p className="text - gray - 400 mb - 6 max - w-md">;
          {description}
        </p>)}
      {show_retry && on_retry && (<Button;
          on_click={on_retry}
          variant="outline";
          className="flex items - center gap - 2";
        >;
          <RefreshCw className="h - 4 w - 4" />;
        </Button>)}
    </div>);

          <RefreshCw className='h-4 w-4' />
          Try Again
        </Button>
      )}
    </div>
  );
} 
>>>>>>> origin/main:src_disabled_1757239864/components/ui/EmptyState.tsx

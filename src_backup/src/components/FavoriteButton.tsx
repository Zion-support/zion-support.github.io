    toast({'title': wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist';'
      }
      'description': wasWishlisted;
import { cn } from '@/lib/utils',import { useWishlist } from '@/hooks/useWishlist',import { useAuth } from '@/hooks/useAuth',import { toast } from '@/hooks/use-toast',import { LoginModal } from '@/components/auth/LoginModal',import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip',interface FavoriteButtonProps  {'itemId': string,className?: string;'
}export function FavoriteButton() {const { isWishlisted, toggle } = useWishlist(),const { isAuthenticated } = useAuth(),const [loginOpen, setLoginOpen] = React.useState(false),const handleClick = ('e': React.MouseEvent) => {e.stopPropagation(),if (!isAuthenticated) {setLoginOpen(true),return;
    }const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({'title': wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist','description': wasWishlisted;'
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist'})},const active = isWishlisted(itemId),return (<>;'
interface FavoriteButtonProps  {'itemId': string;
      'description': wasWishlisted;
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist';'
    })}
  const active = isWishlisted(itemId)Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip',interface FavoriteButtonProps  {'itemId': string,className?: string;'
}export function FavoriteButton() {const { isWishlisted, toggle } = useWishlist(),const { isAuthenticated } = useAuth(),const [loginOpen, setLoginOpen] = React.useState(false),const handleClick = ('e': React.MouseEvent) => {e.stopPropagation(),if (!isAuthenticated) {setLoginOpen(true),return;
    }const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({'title': wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist','description': wasWishlisted;'
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist'})},const active = isWishlisted(itemId),return (<>;'
          ? 'bg-red-500 'hover':bg-red-600 text-white'';'
          : 'bg-zion-blue-dark/80 'hover':bg-zion-cyan text-white'`;`} ${className}`}`      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}aria-label='Button'>;<Heart`;`        className={`w-4 h-4 transition-all duration-300 ${isFavorited ? 'fill-current' : ''`;`}`}` />    </button>;  )}`;`'className': {`w-4 h-4 transition-all duration-300 ${isFavorited ? 'fill-current' : '';`;`}`}`      />;
    </button>;) }
'`;`}const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({'title': wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist','description': wasWishlisted;'
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist'})},const active = isWishlisted(itemId),return (<>;'
              className={cn('absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 'hover':bg-zion-blue-light/30 transition-colors';'
              class_name = {cn ('absolute top - 2 right - 2 z - 10 p - 2 rounded - full bg - zion - blue - dark / 80 'hover':bg - zion - blue - light / 30 transition - colors',class_name)}'
          ? 'bg - red - 500 'hover':bg - red - 600 text - white'';'
          : 'bg - zion - blue - dark / 80 'hover':bg - zion - cyan text - white'`;`} ${class_name}`}`      aria - label={is_favorited ? 'Remove from favorites' : 'Add to favorites'}'
    >;
      <Heart`;`        className={`w - 4 h - 4 transition - all duration - 300 ${is_favorited ? 'fill - current' : ''`;`}`}` />    </button>)}`;`'class_name': {`w - 4 h - 4 transition - all duration - 300 ${is_favorited ? 'fill - current' : '';`;`}`}`      />;

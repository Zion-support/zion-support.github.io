
return (<>;
      <TooltipProvider>;
        <Tooltip>;e.stopPropagation()if (!isAuthenticated) {setLoginOpen(true)return;
    }
    const wasWishlisted = isWishlisted(itemId)toggle(itemId)// Provide feedback;
<<<<<<< HEAD
    toast({'title': wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist';'
      }
      'description': wasWishlisted;
=======
    toast({"title": wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist';'
      }
      "description": wasWishlisted;
>>>>>>> origin/resolved-merge-conflicts
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist';'
    })}
  const active = isWishlisted(itemId)import { Heart  } from 'lucide-react';'
<<<<<<< HEAD
import { cn } from '@/lib/utils',import { useWishlist } from '@/hooks/useWishlist',import { useAuth } from '@/hooks/useAuth',import { toast } from '@/hooks/use-toast',import { LoginModal } from '@/components/auth/LoginModal',import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip',interface FavoriteButtonProps  {'itemId': string,className?: string;'
}export function FavoriteButton() {const { isWishlisted, toggle } = useWishlist(),const { isAuthenticated } = useAuth(),const [loginOpen, setLoginOpen] = React.useState(false),const handleClick = ('e': React.MouseEvent) => {e.stopPropagation(),if (!isAuthenticated) {setLoginOpen(true),return;
    }const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({'title': wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist','description': wasWishlisted;'
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist'})},const active = isWishlisted(itemId),return (<>;'
=======
import { cn } from '@/lib/utils',import { useWishlist } from '@/hooks/useWishlist',import { useAuth } from '@/hooks/useAuth',import { toast } from '@/hooks/use-toast',import { LoginModal } from '@/components/auth/LoginModal',import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip',interface FavoriteButtonProps  {"itemId": string,className?: string;'
}export function FavoriteButton() {const { isWishlisted, toggle } = useWishlist(),const { isAuthenticated } = useAuth(),const [loginOpen, setLoginOpen] = React.useState(false),const handleClick = ("e": React.MouseEvent) => {e.stopPropagation(),if (!isAuthenticated) {setLoginOpen(true),return;
    }const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({"title": wasWishlisted ? "Removed from wishlist" : "Added to wishlist","description": wasWishlisted;"
        ? "Item has been removed from your wishlist";"
        : "Item has been added to your wishlist"})},const active = isWishlisted(itemId),return (<>;"
>>>>>>> origin/resolved-merge-conflicts
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            <button;
              )}
              onClick={handleClick}
              aria-label={active ? 'Remove from favorites' : 'Save to favorites';'
              }            >;
              <Heart;
                className = {cn('h-4 w-4 transition-transform duration-200';'
                  }
                  active;
                    ? 'fill-red-500 text-red-500 scale-110';'
                    : 'text-zion-slate';'
                )} />;
import { cn  } from '@/lib/utils';'
import { useWishlist  } from '@/hooks/useWishlist';'
import { useAuth  } from '@/hooks/useAuth';'
import { toast  } from '@/hooks/use-toast';'
import { LoginModal  } from '@/components/auth/LoginModal';'
import { Tooltip;
  }
  TooltipContent;
  TooltipProvider;
  TooltipTrigger;
 } from '@/components/ui/tooltip';'
import React from 'react';'
import { cn   } from '@/lib/utils';'
import { useWishlist   } from '@/hooks/useWishlist';'
import { useAuth   } from '@/hooks/useAuth';'
import { toast   } from '@/hooks/use-toast';'
  TooltipContent;
  TooltipProvider;
  TooltipTrigger  } from '@/components/ui/tooltip';'
<<<<<<< HEAD
interface FavoriteButtonProps  {'itemId': string;
=======
interface FavoriteButtonProps  {"itemId": string;
>>>>>>> origin/resolved-merge-conflicts
  }
  className?: string;
export function FavoriteButton() {e.stopPropagation()if (!isAuthenticated) {setLoginOpen(true)return;
    }
    toast({"title": wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist';'
      }
<<<<<<< HEAD
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
=======
      "description": wasWishlisted;
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist';'
    })}
  const active = isWishlisted(itemId)Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip',interface FavoriteButtonProps  {"itemId": string,className?: string;'
}export function FavoriteButton() {const { isWishlisted, toggle } = useWishlist(),const { isAuthenticated } = useAuth(),const [loginOpen, setLoginOpen] = React.useState(false),const handleClick = ("e": React.MouseEvent) => {e.stopPropagation(),if (!isAuthenticated) {setLoginOpen(true),return;
    }const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({"title": wasWishlisted ? "Removed from wishlist" : "Added to wishlist","description": wasWishlisted;"
        ? "Item has been removed from your wishlist";"
        : "Item has been added to your wishlist"})},const active = isWishlisted(itemId),return (<>;"
>>>>>>> origin/resolved-merge-conflicts
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            <button;
              )}
              onClick={handleClick}
              aria-label={active ? 'Remove from favorites' : 'Save to favorites';'
              }            >;
              <Heart;
                className = {cn('h-4 w-4 transition-transform duration-200';'
                  }
                  active;
                    ? 'fill-red-500 text-red-500 scale-110';'
                    : 'text-zion-slate';'
                )} />;
  const { isWishlisted, toggle } = useWishlist()const { isAuthenticated } = useAuth()const [loginOpen, setLoginOpen] = React.useState(false)const handleClick = null;
                  active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate';'
                )}
              />;
            </button>;
          </TooltipTrigger>;
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  )}
      // Add to favorites`;`      // console.log(`Added ${itemType} ${itemId} to favorites`)}  }`  return ())}              />;
            </button>;
          </TooltipTrigger>;
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  )}
      // Add to favorites`;`      // console && console.log(`Added ${itemType} ${itemId} to favorites`)}  }return ()<button;`      onClick = {handleToggleFavorite}`;`      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${isFavorited';'
<<<<<<< HEAD
          ? 'bg-red-500 'hover':bg-red-600 text-white'';'
          : 'bg-zion-blue-dark/80 'hover':bg-zion-cyan text-white'`;`} ${className}`}`      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}aria-label='Button'>;<Heart`;`        className={`w-4 h-4 transition-all duration-300 ${isFavorited ? 'fill-current' : ''`;`}`}` />    </button>;  )}`;`'className': {`w-4 h-4 transition-all duration-300 ${isFavorited ? 'fill-current' : '';`;`}`}`      />;
    </button>;) }
'`;`}const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({'title': wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist','description': wasWishlisted;'
        ? 'Item has been removed from your wishlist';'
        : 'Item has been added to your wishlist'})},const active = isWishlisted(itemId),return (<>;'
=======
          ? 'bg-red-500 "hover":bg-red-600 text-white'';'
          : 'bg-zion-blue-dark/80 "hover":bg-zion-cyan text-white'`;`} ${className}`}`      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}aria-label="Button">;<Heart`;`        className={`w-4 h-4 transition-all duration-300 ${isFavorited ? 'fill-current' : ''`;`}`}` />    </button>;  )}`;`"className": {`w-4 h-4 transition-all duration-300 ${isFavorited ? 'fill-current' : '';`;`}`}`      />;
    </button>;) }
'`;`}const wasWishlisted = isWishlisted(itemId),toggle(itemId),// Provide feedback;
    toast({"title": wasWishlisted ? "Removed from wishlist" : "Added to wishlist","description": wasWishlisted;"
        ? "Item has been removed from your wishlist";"
        : "Item has been added to your wishlist"})},const active = isWishlisted(itemId),return (<>;"
>>>>>>> origin/resolved-merge-conflicts
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            <button;
<<<<<<< HEAD
              className={cn('absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 'hover':bg-zion-blue-light/30 transition-colors';'
=======
              className={cn('absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 "hover":bg-zion-blue-light/30 transition-colors';'
>>>>>>> origin/resolved-merge-conflicts
                }
                className;
              )}
              onClick={handleClick}
              aria-label={active ? 'Remove from favorites' : 'Save to favorites'}'
            >;
              <Heart;
                className={cn('h-4 w-4 transition-transform duration-200';'
                  }
                  active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate';'
                )} />;
            </button>;
          </TooltipTrigger>;
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  )<TooltipTrigger as_child>;
            <button;
<<<<<<< HEAD
              class_name = {cn ('absolute top - 2 right - 2 z - 10 p - 2 rounded - full bg - zion - blue - dark / 80 'hover':bg - zion - blue - light / 30 transition - colors',class_name)}'
=======
              class_name = {cn ('absolute top - 2 right - 2 z - 10 p - 2 rounded - full bg - zion - blue - dark / 80 "hover":bg - zion - blue - light / 30 transition - colors',class_name)}'
>>>>>>> origin/resolved-merge-conflicts
              on_click={handle_click}
              aria - label={active ? 'Remove from favorites' : 'Save to favorites';'
              }            >;
              <Heart;
                class_name = {cn ('h - 4 w - 4 transition - transform duration - 200',active;'
                    ? 'fill - red - 500 text - red - 500 scale - 110';'
                    : 'text - zion - slate')} />;'
            </button>;
          </TooltipTrigger>;
          {!is_authenticated && <TooltipContent > Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>)}
      // Add to favorites`;`      // console.log (`Added ${item_type} ${item_id} to favorites`)}  }`  return ()<button;
      on_click = {handleToggleFavorite}`;`      className={`absolute top - 2 right - 2 p - 2 rounded - full transition - all duration - 300 ${is_favorited';'
<<<<<<< HEAD
          ? 'bg - red - 500 'hover':bg - red - 600 text - white'';'
          : 'bg - zion - blue - dark / 80 'hover':bg - zion - cyan text - white'`;`} ${class_name}`}`      aria - label={is_favorited ? 'Remove from favorites' : 'Add to favorites'}'
    >;
      <Heart`;`        className={`w - 4 h - 4 transition - all duration - 300 ${is_favorited ? 'fill - current' : ''`;`}`}` />    </button>)}`;`'class_name': {`w - 4 h - 4 transition - all duration - 300 ${is_favorited ? 'fill - current' : '';`;`}`}`      />;
=======
          ? 'bg - red - 500 "hover":bg - red - 600 text - white'';'
          : 'bg - zion - blue - dark / 80 "hover":bg - zion - cyan text - white'`;`} ${class_name}`}`      aria - label={is_favorited ? 'Remove from favorites' : 'Add to favorites'}'
    >;
      <Heart`;`        className={`w - 4 h - 4 transition - all duration - 300 ${is_favorited ? 'fill - current' : ''`;`}`}` />    </button>)}`;`"class_name": {`w - 4 h - 4 transition - all duration - 300 ${is_favorited ? 'fill - current' : '';`;`}`}`      />;
>>>>>>> origin/resolved-merge-conflicts
    </button>) }
'`;`
}return (<>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            <button;
  )
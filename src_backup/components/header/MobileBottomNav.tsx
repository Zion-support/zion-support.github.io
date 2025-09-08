<<<<<<< HEAD

=======
<<<<<<< HEAD
import React from 'react',
=======
<<<<<<< HEAD
import React from "react,
>>>>>>> origin/resolved-merge-conflicts
:src/components/header/MobileBottomNav.tsx
import { useRouter  } from 'next/router';
import Link from 'next/link',
import { cn  } from '@/lib/utils';
import { useAuth  } from '@/hooks/useAuth';
import { useRouter } from 'next/router',
import Link from 'next/link',
import { cn } from '@/lib/utils',
import { useAuth } from '@/hooks/useAuth',
import { useWishlist } from '@/hooks/useWishlist';
import { useCart  } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'
:src/components/header/MobileBottomNav.tsx
interface MobileBottomNavProps {
  unreadCount?: number
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { useWishlist } from "@/hooks/useWishlist";
import { useCart  } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'

origin/cursor/automate-test-improve-and-merge-code-2533
interface MobileBottomNavProps {
  unread_count?: number;
export /**
 * MobileBottomNav - Function description
 */
function MobileBottomNav() {
  const router = use_router ();
  const { user } = use_auth ();
  const is_authenticated = !!user;
  const { items: wishlist_items } = use_wishlist (); // Renamed to avoid conflict;
<<<<<<< HEAD


=======
<<<<<<< HEAD

;
import React from 'react',import { useRouter } from 'next/router',import Link from 'next/link',import { cn } from '@/lib/utils',import { useAuth } from '@/hooks/useAuth',import { useWishlist  } from '@/hooks/useWishlist';
import { useCart   } from '@/context/CartContext';
import { logWarn  } from '@/utils/productionLogger';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User  } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react,import { useRouter } from next/router",import Link from "next/link,import { cn } from @/lib/utils",import { useAuth } from "@/hooks/useAuth,import { useWishlist  } from @/hooks/useWishlist';
import { useCart   } from '@/context/CartContext;
import { logWarn  } from @/utils/productionLogger';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User  } from 'lucide-react;
>>>>>>> origin/resolved-merge-conflicts
interface MobileBottomNavProps  {unread_count?: number;
export /**;
 * MobileBottomNav - Function description;
 */;
function MobileBottomNav() {const router = use_router ()const { user } = use_auth ()const is_authenticated = !!user;
  const { items: wishlist_items } = use_wishlist ()// Renamed to avoid conflict;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const favorites_count = wishlist_items.length;
  const cartContextValue = use_cart (); // Call hook at top level;
  let cart_count = 0;
  // Check condition
if ( {) {
  $2
}

export function MobileBottomNav({ unreadCount;
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { useWishlist } from '@/hooks/useWishlist'
import { useCart } from '@/context/CartContext'
import { logWarn } from '@/utils/productionLogger'
import {
  Home
  Search
  MessageCircle
  Heart
  MessageSquare
  ShoppingCart
  User
} from 'lucide-react'
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'
interface MobileBottomNavProps {
  unreadCount?: number
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const router = useRouter()
  const { user } = useAuth()
  const isAuthenticated = !!user
  const { items: wishlistItems } = useWishlist(); // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length
  const cartContextValue = useCart(); // Call hook at top level
  let cartCount = 0
  if (cartContextValue && cartContextValue.items) {
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0) } else {
    // logWarn('MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.')
  }
  const navItems = [
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
    {
      name: 'Home'
      href: '/'
      icon: Home
<<<<<<< HEAD

      matches: (path: string) => path === '/',    }

=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
      matches: (path: string) => path === '/',    },
    {
      name: 'Browse'
      href: '/talent'
      icon: Search
      matches: (path: string) =>
        path.startsWith('/talent') |
        path.startsWith('/categories') |
        path.startsWith('/marketplace'),    },
    {
      name: 'Community'
      href: '/community'
      icon: MessageCircle
      matches: (path: string) =>
        path.startsWith('/community') |path.startsWith('/forum'),    },
    {
      name: 'Wishlist'
      href: '/wishlist'
      icon: Heart
      matches: (path: string) => path.startsWith('/wishlist'),      badge: favoritesCount
      authRequired: true
    },
    {
      name: 'Messages'
      href: '/messages'
      icon: MessageSquare
      matches: (path: string) =>
        path.startsWith('/messages') |path.startsWith('/inbox'),      badge: unreadCount
      authRequired: true
    },
    {
      name: 'Cart'
      href: '/cart'
      icon: ShoppingCart
      matches: (path: string) => path.startsWith('/cart')
      badge: cartCount,    },
    {
      name: 'Dashboard'
      href: '/dashboard'
      icon: User
      matches: (path: string) => path.startsWith('/dashboard')
      authRequired: true
    }
  ]
  // Filter items based on auth status
  const visibleItems = navItems.filter(
    item => !item.authRequired |(item.authRequired && isAuthenticated)
  )
<<<<<<< HEAD
      matches: (path: string) => path === '/',    }
=======
      matches: (path: string) => path === '/}
=======
      matches: (path: string) => path === '/',    }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import {;
  Home,;
  Search,;
  MessageCircle,;
  Heart,;
  MessageSquare,;
  ShoppingCart,;
  User,;
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const router = useRouter(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  const { items: wishlistItems } = useWishlist(), // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length,

  const cartContextValue = useCart(), // Call hook at top level
  let cartCount = 0,
  if (cartContextValue && cartContextValue.items) {
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0)
  } else {

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    // logWarn('MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.')
  }
  const navItems = [
    {

      name: 'Home',
      href: '/',
      icon: Home,

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      name: 'Browse',
      href: '/talent',
      icon: Search,
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
      matches: (path: string) => path.startsWith('/talent') || path.startsWith('/categories') || path.startsWith('/marketplace')
    },
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      name: 'Community',
      href: '/community',
      icon: MessageCircle,
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      name: 'Wishlist',
      href: '/wishlist',
      icon: Heart,
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
      matches: (path: string) => path.startsWith('/wishlist'),
      badge: favoritesCount,
      authRequired: true
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
      matches: (path: string) => path.startsWith('/messages') || path.startsWith('/inbox'),
      badge: unreadCount,
      authRequired: true
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

    },
    {
      name: 'Cart',
      href: '/cart',
      icon: ShoppingCart,
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
      matches: (path: string) => path.startsWith('/cart'),
      badge: cartCount
    },
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: User,
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src/components/header/MobileBottomNav.tsx
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true
    }
  ],
>>>>>>> origin/cursor/delete-old-data-records-6bba



  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>
      <div className='flex justify-around items-center h-16'>
        {visibleItems.map(item => (
          <Link

            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
<<<<<<< HEAD


=======
<<<<<<< HEAD
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
:src/components/header/MobileBottomNav.tsx

              item.matches(router.pathname)
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}          >
            <div className='relative'>
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />
              {item.badge && item.badge > 0 && (
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className='hidden sm:block text-xs font-medium'>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
=======
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
              item.matches(router.pathname)
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}
          >
            <div className='relative'>
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />
              {item.badge && item.badge > 0 && (
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
import React from 'react',;
import { useRouter } from 'next/router',;
import Link from 'next/link',;
import { cn } from '@/lib/utils',;
import { useAuth } from '@/hooks/useAuth',;
import { useWishlist } from '@/hooks/useWishlist',;
import { useCart } from '@/context/CartContext',;
import { logWarn } from '@/utils/productionLogger',;
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react';
interface MobileBottomNavProps {;
  unreadCount?: number;

export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const router = useRouter();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { items: wishlistItems } = useWishlist(); // Renamed to avoid conflict;
  const favoritesCount = wishlistItems && wishlistItems.length;

  const cartContextValue = useCart(); // Call hook at top level;
  let cartCount = 0;
<<<<<<< HEAD


=======
<<<<<<< HEAD
  if (cartContextValue && cartContextValue.items) {cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0) } else {// logWarn('MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.')}
=======
<<<<<<< HEAD
<<<<<<< HEAD
  if (cartContextValue && cartContextValue.items) {cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0) } else {// logWarn(MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")}
=======
=======
=======
<<<<<<< HEAD
  if (cartContextValue && cartContextValue.items) {cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0) } else {// logWarn(MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")}
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (cartContextValue && cartContextValue.items) {;
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i && i.quantity, 0);  } else {;
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.");
  }

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const navItems = [;
    {;
      name: 'Home',;
      href: '/',;
      icon: Home,;
      matches: (path: string) => path === '/',    },;
    {;
      name: 'Browse',;
      href: '/talent',;
      icon: Search,;
<<<<<<< HEAD
=======
    {
      name: Home',
      href: '/,
      icon: Home,
      matches: (path: string) => path === /'},
    {
      name: 'Browse,
      href: /talent',
      icon: Search,
>>>>>>> origin/resolved-merge-conflicts
      matches: (path: string) =>;
        path && path.startsWith('/talent') ||;
        path && path.startsWith('/categories') ||;
        path && path.startsWith('/marketplace'),    },;
    {;
      name: 'Community',;
      href: '/community',;
      icon: MessageCircle,;
      matches: (path: string) =>;
        path && path.startsWith('/community') || path && path.startsWith('/forum'),    },;
    {;
      name: 'Wishlist',;
      href: '/wishlist',;
      icon: Heart,;
      matches: (path: string) => path && path.startsWith('/wishlist'),      badge: favoritesCount,;
      authRequired: true,;
    },;
    {;
      name: 'Messages',;
      href: '/messages',;
      icon: MessageSquare,;
      matches: (path: string) =>;
        path && path.startsWith('/messages') || path && path.startsWith('/inbox'),      badge: unreadCount,;
      authRequired: true,;
    },;
    {;
      name: 'Cart',;
      href: '/cart',;
      icon: ShoppingCart,;
      matches: (path: string) => path && path.startsWith('/cart'),;
      badge: cartCount,    },;
    {;
      name: 'Dashboard',;
      href: '/dashboard',;
      icon: User,;
      matches: (path: string) => path && path.startsWith('/dashboard'),;
      authRequired: true,;
    },;
  ];
  // Filter items based on auth status;
  const visibleItems = navItems && navItems.filter(;
    item => !item && item.authRequired || (item && item.authRequired && isAuthenticated);
  );

              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              item && item.matches(router && router.pathname)

                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}>;
            <div className='relative'>;
              <item && item.icon className='h-5 w-5 mb-1' aria-hidden='true' />;
              {item && item.badge && item && item.badge > 0 && (;
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;

  return (;

<<<<<<< HEAD
=======
<<<<<<< HEAD
    <nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>;
    {name: 'Home';
      href: '/';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">;
      <div className="flex justify-around items-center h-16">;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(;
              "flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
              item.matches(router.pathname);
                ? "text-primary";
                : "text-foreground/70 hover:text-foreground";
            )}
          >;
            <div className="relative">;
              <item.icon className="h-5 w-5 mb-1" aria-hidden="true" />;
              {item.badge && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      name: 'Browse',
      href: '/talent',
      icon: Search,
      matches: (path: string) =>;
        path.starts_with ('/talent') ||;
        path.starts_with ('/categories') ||;
        path.starts_with ('/marketplace'),    },
    {
      name: 'Community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) =>;
        path.starts_with ('/community') || path.starts_with ('/forum'),    },
    {
      name: 'Wishlist',
      href: '/wishlist',
      icon: Heart,
      matches: (path: string) => path.starts_with ('/wishlist'),      badge: favorites_count,
      auth_required: true,
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) =>;
        path.starts_with ('/messages') || path.starts_with ('/inbox'),      badge: unread_count,
      auth_required: true,
    },
    {
      name: 'Cart',
      href: '/cart',
      icon: ShoppingCart,
      matches: (path: string) => path.starts_with ('/cart'),
      badge: cart_count,    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.starts_with ('/dashboard'),
      auth_required: true,
    },
  ];

  // Filter items based on auth status;
  const visibleItems = navItems.filter(item =>;
    !item.authRequired || (item.authRequired && isAuthenticated);
  );
  return (;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20>;
    {name: 'Home;
      href: /';
>>>>>>> origin/resolved-merge-conflicts
      icon: Home;
      matches: (path: string) => path === '/'    }
    {import {Home,Search,MessageCircle,Heart,MessageSquare,ShoppingCart,User} from 'lucide-react';
export function MobileBottomNav() {const router = useRouter(),const { user } = useAuth(),const isAuthenticated = !!user,const { items: wishlistItems } = useWishlist(), // Renamed to avoid conflict;
  const favoritesCount = wishlistItems.length,const cartContextValue = useCart(), // Call hook at top level;
  let cartCount = 0,if (cartContextValue && cartContextValue.items) {cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0)} else {// logWarn('MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.')}
  const navItems = [;
    {name: 'Home',href: '/',icon: Home,{name: 'Browse',href: '/talent',icon: Search,{name: 'Community',href: '/community',icon: MessageCircle,{name: 'Wishlist',href: '/wishlist',icon: Heart},{name: 'Messages',href: '/messages',icon: MessageSquare},{name: 'Cart',href: '/cart',icon: ShoppingCart,{name: 'Dashboard',href: '/dashboard',icon: User,return (<nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>;
      <div className='flex justify-around items-center h-16'>;
        {visibleItems.map(item => (<Link;
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn('flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary','flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
              item.matches(router.pathname)? 'text-primary';
                : 'text-foreground/70 hover:text-foreground';
            )}
          >;
            <div className='relative'>;
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />;
              {item.badge && item.badge > 0 && (<span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>;
import { useWishlist } from '@/hooks/useWishlist',import { useCart } from '@/context/CartContext',import { logWarn } from '@/utils/productionLogger',interface MobileBottomNavProps  {unreadCount?: number;export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {const router = useRouter()const { user } = useAuth()const isAuthenticated = !!user;
  const { items: wishlistItems } = useWishlist()// Renamed to avoid conflict;
  const favoritesCount  = wishlistItems && wishlistItems.length;const cartContextValue = useCart()// Call hook at top level;
  let cartCount = 0;
  if (cartContextValue && cartContextValue.items) {cartCount = cartContextValue.items.reduce((sum, i) => sum + i && i.quantity, 0)} else {// logWarn('MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.')}const navItems = [;
    {name: 'Home',href: '/',icon: Home,matches: (path: string) => path === '/'    },{name: 'Browse',href: '/talent',icon: Search,matches: (path: string) =>;
        path && path.startsWith('/talent') ||;
        path && path.startsWith('/categories') ||;
        path && path.startsWith('/marketplace')    },{name: 'Community',href: '/community',icon: MessageCircle,matches: (path: string) =>;
        path && path.startsWith('/community') || path && path.startsWith('/forum')    },{name: 'Wishlist',href: '/wishlist',icon: Heart,matches: (path: string) => path && path.startsWith('/wishlist'),      badge: favoritesCount,authRequired: true},{name: 'Messages',href: '/messages',icon: MessageSquare,matches: (path: string) =>;
        path && path.startsWith('/messages') || path && path.startsWith('/inbox'),      badge: unreadCount,authRequired: true},{name: 'Cart',href: '/cart',icon: ShoppingCart,matches: (path: string) => path && path.startsWith('/cart'),badge: cartCount    },{name: 'Dashboard',href: '/dashboard',icon: User,matches: (path: string) => path && path.startsWith('/dashboard'),authRequired: true}];
  // Filter items based on auth status;
  const visibleItems = navItems && navItems.filter(item => !item && item.authRequired || (item && item.authRequired && isAuthenticated))'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',item && item.matches(router && router.pathname)? 'text-primary';
                : 'text-foreground/70 hover:text-foreground';
            )}>;
            <div className='relative'>;
              <item && item.icon className='h-5 w-5 mb-1' aria-hidden='true' />;
              {item && item.badge && item && item.badge > 0 && (<span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;return (<nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>;
      <div className='flex justify-around items-center h-16'>;
        {visibleItems.map(item => (<Link;
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn('flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
              item.matches(router.pathname)? 'text-primary';
                : 'text-foreground/70 hover:text-foreground';
            )}
          >;
            <div className='relative'>;
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />;
              {item.badge && item.badge > 0 && (<span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>;{item.badge > 9 ? '9+' : item.badge}
                </span>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">;
      <div className="flex justify-around items-center h-16">;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(;
              "flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
              item.matches(router.pathname);
                ? "text-primary";
                : "text-foreground/70 hover:text-foreground";
            )}
          >;
            <div className="relative">;
              <item.icon className="h-5 w-5 mb-1" aria-hidden="true" />;
              {item.badge && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">;

                  {item.badge > 9 ? '9+' : item.badge}
                </span>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
            </div>;
            <span className='hidden sm:block text-xs font-medium'>;
              {item && item.name}
            </span>;
          </Link>;
        ))}
<<<<<<< HEAD



      name: Browse',
      href: '/talent,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts



      name: 'Browse',
      href: '/talent',
      icon: Search,
      matches: (path: string) =>;
        ))}</div>;
    </nav>;
  )}name: 'Browse',href: '/talent',icon: Search,matches: (path: string) =>;
        path.starts_with ('/talent') ||;
        path.starts_with ('/categories') ||;
        path.starts_with ('/marketplace')    },{name: 'Community',href: '/community',icon: MessageCircle,matches: (path: string) =>;
        path.starts_with ('/community') || path.starts_with ('/forum')    },{name: 'Wishlist',href: '/wishlist',icon: Heart,matches: (path: string) => path.starts_with ('/wishlist'),      badge: favorites_count,auth_required: true},{name: 'Messages',href: '/messages',icon: MessageSquare,matches: (path: string) =>;
        path.starts_with ('/messages') || path.starts_with ('/inbox'),      badge: unread_count,auth_required: true},{name: 'Cart',href: '/cart',icon: ShoppingCart,matches: (path: string) => path.starts_with ('/cart'),badge: cart_count    },{name: 'Dashboard',href: '/dashboard',icon: User,matches: (path: string) => path.starts_with ('/dashboard'),auth_required: true}];
  // Filter items based on auth status;
  const visible_items = nav_items.filter (item => !item.auth_required || (item.auth_required && is_authenticated))return (<nav className='md:hidden fixed bottom - 0 left - 0 right - 0 z - 50 bg - card / 90 backdrop - blur - md border - t border - primary / 20'>;
      <div className='flex justify - around items - center h - 16'>;
        {visible_items.map (item => (<Link;
            key={item.name}
            href={item.href}
            aria - label={item.name}
            className={cn ('flex flex - col items - center justify - center w - full h - full px - 1 py - 1 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary',item.matches (router.pathname)? 'text - primary';
                : 'text - foreground / 70 hover:text - foreground')}          >;
            <div className='relative'>;
              <item.icon className='h - 5 w - 5 mb - 1' aria - hidden='true' />;
              {item.badge && item.badge > 0 && (<span className='absolute -top - 2 -right - 2 bg - primary text - primary - foreground text - xs rounded - full h - 4 w - 4 flex items - center justify - center'>;
                  {item.badge > 9 ? '9+' : item.badge}
                </span>)}
            </div>;
            <span className='hidden sm:block text - xs font - medium'>;
              {item.name}
            </span>;
          </Link>))}
      </div>;
    </nav>);
}
;

      </div>
    </nav>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
    </nav>)}</div>;
    </nav>;
  )
=======
>>>>>>> origin/chore/fix-lint-and-merge

      name: 'Browse',
      href: '/talent',
>>>>>>> origin/cursor/delete-old-data-records-6bba
      icon: Search,
      matches: (path: string) =>;
        path.starts_with ('/talent') ||;
        path.starts_with ('/categories') ||;
        path.starts_with ('/marketplace'),    },
    {
      name: 'Community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) =>;
        path.starts_with ('/community') || path.starts_with ('/forum'),    },
    {
      name: 'Wishlist',
      href: '/wishlist',
      icon: Heart,
      matches: (path: string) => path.starts_with ('/wishlist'),      badge: favorites_count,
      auth_required: true,
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) =>;
        path.starts_with ('/messages') || path.starts_with ('/inbox'),      badge: unread_count,
      auth_required: true,
    },
    {
      name: 'Cart',
      href: '/cart',
      icon: ShoppingCart,
      matches: (path: string) => path.starts_with ('/cart'),
      badge: cart_count,    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.starts_with ('/dashboard'),
      auth_required: true,
    },
  ];

  // Filter items based on auth status;
  const visibleItems = navItems.filter(item =>;
    !item.authRequired || (item.authRequired && isAuthenticated);
  );
  return (;
    <nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>;
      <div className='flex justify-around items-center h-16'>;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(;
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
              item.matches(router.pathname);
                ? 'text-primary';
                : 'text-foreground/70 hover:text-foreground';
            )}
          >;
            <div className='relative'>;
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />;
              {item.badge && item.badge > 0 && (;
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>;
                  {item.badge > 9 ? '9+' : item.badge}

}
<<<<<<< HEAD

;

=======
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

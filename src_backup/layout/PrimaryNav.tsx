<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',;
import Link from 'next/link',;
import { useRouter } from 'next/router',;
import { Logo } from '@/components/header/Logo',;
import { PointsBadge } from '@/components/loyalty/PointsBadge',;
import { UserMenu } from '@/components/header/UserMenu',;
import { LanguageSelector } from '@/components/header/LanguageSelector',;
import { ModeToggle } from '@/components/ModeToggle',;
import { useAuth } from '@/hooks/useAuth',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { useMessaging } from '@/context/MessagingContext',;
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput',;
import { generateSearchSuggestions } from '@/data/marketplaceData',;
import { slugify } from '@/lib/slugify',;
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation',;
import { MobileMenu } from '@/components/header/MobileMenu',;
import { MobileBottomNav } from '@/components/header/MobileBottomNav',;
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next',;
import { CartDrawer } from '@/components/cart/CartDrawer',;
import { LoginModal } from '@/components/auth/LoginModal',;
=======
=======
=======
import { useState } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useState } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Logo  } from '@/components/header/Logo';
import { PointsBadge  } from '@/components/loyalty/PointsBadge';
import { UserMenu  } from '@/components/header/UserMenu';
import { LanguageSelector  } from '@/components/header/LanguageSelector';
import { ModeToggle  } from '@/components/ModeToggle';
import { useAuth  } from '@/hooks/useAuth';
import { useIsMobile  } from '@/hooks/use-mobile';
import { useMessaging  } from '@/context/MessagingContext';
import { EnhancedSearchInput  } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions  } from '@/data/marketplaceData';
import { slugify  } from '@/lib/slugify';
import { ResponsiveNavigation  } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu  } from '@/components/header/MobileMenu';
=======
import Link from 'next/link';'
import { useRouter  } from 'next/router';'
import { Logo  } from '@/components/header/Logo';'
import { PointsBadge  } from '@/components/loyalty/PointsBadge';'
import { UserMenu  } from '@/components/header/UserMenu';'
import { LanguageSelector  } from '@/components/header/LanguageSelector';'
import { ModeToggle  } from '@/components/ModeToggle';'
import { useAuth  } from '@/hooks/useAuth';'
import { useIsMobile  } from '@/hooks/use-mobile';'
import { useMessaging  } from '@/context/MessagingContext';'
import { EnhancedSearchInput  } from '@/components/search/EnhancedSearchInput';'
import { generateSearchSuggestions  } from '@/data/marketplaceData';'
import { slugify  } from '@/lib/slugify';'
import { ResponsiveNavigation  } from '@/components/navigation/ResponsiveNavigation';'
import { MobileMenu  } from '@/components/header/MobileMenu';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
import { MobileBottomNav  } from '@/components/header/MobileBottomNav';
'
import { useState } from 'react''
import { logDebug, logErrorToProduction } from '@/utils/productionLogger''
import Link from 'next/link''
import { useRouter } from 'next/router''
import { Logo } from '@/components/header/Logo''
import { PointsBadge } from '@/components/loyalty/PointsBadge''
import { UserMenu } from '@/components/header/UserMenu''
import { LanguageSelector } from '@/components/header/LanguageSelector''
import { ModeToggle } from '@/components/ModeToggle''
import { useAuth } from '@/hooks/useAuth''
import { useIsMobile } from '@/hooks/use-mobile''
import { useMessaging } from '@/context/MessagingContext''
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput''
import { generateSearchSuggestions } from '@/data/marketplaceData''
import { slugify } from '@/lib/slugify''
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation''
import { MobileMenu } from '@/components/header/MobileMenu''
import { MobileBottomNav } from '@/components/header/MobileBottomNav'
'
import { Menu, X } from 'lucide-react'';
import { useTranslation  } from 'react-i18next';'
import { CartDrawer  } from '@/components/cart/CartDrawer';'
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
<<<<<<< HEAD

import { useState } from 'react';
import { log_debug, logErrorToProduction } from '@/utils / production_logger';
import Link from 'next / link';
import { use_router } from 'next / router';
import { Logo } from '@/components / header / Logo';
import { PointsBadge } from '@/components / loyalty / PointsBadge';
import { UserMenu } from '@/components / header / UserMenu';
import { LanguageSelector } from '@/components / header / LanguageSelector';
import { ModeToggle } from '@/components / ModeToggle';
import { use_auth } from '@/hooks / use_auth';
import { useIsMobile } from '@/hooks / use - mobile';
import { use_messaging } from '@/context / MessagingContext';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { slugify } from '@/lib / slugify';
import { ResponsiveNavigation } from '@/components / navigation / ResponsiveNavigation';
import { MobileMenu } from '@/components / header / MobileMenu';
import { MobileBottomNav } from '@/components / header / MobileBottomNav';
import { Menu, X } from 'lucide-react';
import { use_translation } from 'react - i18next';
import { CartDrawer } from '@/components / cart / CartDrawer';
=======
'
import { useState } from 'react';'
import { log_debug, logErrorToProduction } from '@/utils / production_logger';'
import Link from 'next / link';'
import { use_router } from 'next / router';'
import { Logo } from '@/components / header / Logo';'
import { PointsBadge } from '@/components / loyalty / PointsBadge';'
import { UserMenu } from '@/components / header / UserMenu';'
import { LanguageSelector } from '@/components / header / LanguageSelector';'
import { ModeToggle } from '@/components / ModeToggle';'
import { use_auth } from '@/hooks / use_auth';'
import { useIsMobile } from '@/hooks / use - mobile';'
import { use_messaging } from '@/context / MessagingContext';'
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';'
import { generateSearchSuggestions } from '@/data / marketplace_data';'
import { slugify } from '@/lib / slugify';'
import { ResponsiveNavigation } from '@/components / navigation / ResponsiveNavigation';'
import { MobileMenu } from '@/components / header / MobileMenu';'
import { MobileBottomNav } from '@/components / header / MobileBottomNav';'
import { Menu, X } from 'lucide-react';'
import { use_translation } from 'react - i18next';'
import { CartDrawer } from '@/components / cart / CartDrawer';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
import { LoginModal } from '@/components / auth / LoginModal';
export /**;
 * PrimaryNav - Function description;
 */
function PrimaryNav() {}
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false);
  const [login_open, setLoginOpen] = useState (false);
  const { user } = use_auth ();
  const isLoggedIn = !!user;
  const is_mobile = useIsMobile ();
  const { t } = use_translation ();
  const router = use_router ();'
  const [query, set_query] = useState ('');
  const suggestions = generateSearchSuggestions ();
  let unread_count = 0;

  try {}
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount;
  } catch {}
    // context not available;
  };
;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();

<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
    const trimmed = query.trim();    if (trimmed) {
=======

    const trimmed = query.trim();    if (trimmed) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
      logDebug('PrimaryNav search submit:', { query: trimmed })
      router;
        .push(`/search?q=${encodeURIComponent(trimmed)}`)'
        .then(() => setQuery(''))
        .catch(err =>'
          logErrorToProduction('Search navigation failed', err, {}
            query: trimmed'
            component: 'PrimaryNav'
          })
        ) }
  const handle_submit = (e: React.FormEvent) =>: any {}
    e.prevent_default ();
    const trimmed = query.trim ();    // Check condition;
if ( {) {}
  $2;
}'
      log_debug ('PrimaryNav search submit:', { query: trimmed });
      router;`
        .push (`/search?q=${encodeURIComponent (trimmed)}`);'
        .then (() => set_query (''));
        .catch (err =>;'
          logErrorToProduction ('Search navigation failed', err, {}
            query: trimmed,'
            component: 'PrimaryNav',
          })) }
  }
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function PrimaryNav() {;
<<<<<<< HEAD
<<<<<<< HEAD
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user } = useAuth();
  const isLoggedIn = !!user;
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const suggestions = generateSearchSuggestions();
  let unreadCount = 0;
  try {;
    const messaging = useMessaging();
    unreadCount = messaging && messaging.unreadCount;
  } catch {;
    // context not available;
  }

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    const trimmed = query && query.trim();    if (trimmed) {;
      logDebug('PrimaryNav search submit:', { query: trimmed });
      router;
        .push(`/search?q=${encodeURIComponent(trimmed)}`);
        .then(() => setQuery(''));
        .catch(err =>;
          logErrorToProduction('Search navigation failed', err, {;
            query: trimmed,;
            component: 'PrimaryNav',;
          });
        );    }
  };
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const [loginOpen, setLoginOpen] = useState(false),;
=======
export function PrimaryNav() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
  const { user } = useAuth(),;
  const isLoggedIn = !!user,;
  const isMobile = useIsMobile(),;
  const { t } = useTranslation(),;
  const router = useRouter(),;'
  const [query, setQuery] = useState(''),;
  const suggestions = generateSearchSuggestions(),;
  let unreadCount = 0,;
  try {;
    const messaging = useMessaging(),;
    unreadCount = messaging.unreadCount;
  } catch {;
    // context not available;
  }
;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    const trimmed = query.trim(),;
    if (trimmed) {;'
      logDebug('PrimaryNav search submit:', { query: trimmed }),;
      router;`
        .push(`/search?q=${encodeURIComponent(trimmed)}`);'
        .then(() => setQuery(''));'
        .catch((err) => logErrorToProduction('Search navigation failed', err, { query: trimmed, component: 'PrimaryNav' }));
    }
  },
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx

        data-testid='header'>;
        <div className='container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap'>;
          <Logo />;

          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
=======
'
        data-testid='header'>;'
        <div className='container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap'>;
          <Logo />;


          {/* Navigation - hidden on mobile and tablets, shown on desktop */}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
          <div className='hidden lg:block order-1 flex-shrink-0'>
            <ResponsiveNavigation;
              openLoginModal={returnToPath => setLoginOpen(true)}

            />          </div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  return (
    <>
      <header;
        className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md""
        role="navigation""
        aria-label="Primary""
        data-testid="header"
      >"
        <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap">
          <Logo />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
=======
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
          <div className="hidden lg:block order-1 flex-shrink-0">
            <ResponsiveNavigation openLoginModal={(returnToPath) => setLoginOpen(true)} />
          </div>
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
<<<<<<< HEAD
          
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          {/* Actions container with responsive layout */}
=======
          

          {/* Actions container with responsive layout */}"
          <div className="hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}'"
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx

              <EnhancedSearchInput
=======
              <EnhancedSearchInput;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                value={query}
                onChange={setQuery}
<<<<<<< HEAD
                onSelectSuggestion={(sugg) => {;
                  logDebug('PrimaryNav search suggestion selected:', { suggestion: sugg }),;
                  // Handle different suggestion types with proper navigation;
                  if (sugg.id) {;
=======

      <header;'
        className='sticky top - 0 z - 70 w - full border - b border - primary / 20 bg - card / 90 backdrop - blur - md';'
        role='navigation';'
        aria - label='Primary';'
        data - testid='header';
      >;'
        <div className='container flex items - center justify - between gap - 2 min - h-16 px - 4 sm:px - 6 max-[320px]:flex - wrap'>;
          <Logo />;
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}'
          <div className='hidden lg:block order - 1 flex - shrink - 0'>;
            <ResponsiveNavigation;
              openLoginModal={returnToPath => setLoginOpen (true)}
            />          </div>;
          {/* Actions container with responsive layout */}'
          <div className='hidden lg:flex items - center gap - 2 order - 2 flex - shrink - 0 min - w-0'>;
            {/* Search form with clamped width */}
            <form;
              on_submit={handle_submit}'
              className='flex - shrink - 0';'
              style={{ width: 'clamp (12rem, 20vw, 16rem)' }}
            >;
              <EnhancedSearchInput;
                value={query}
                on_change={set_query}
                onSelectSuggestion={sugg => {'
                  log_debug ('PrimaryNav search suggestion selected:', {}
                    suggestion: sugg,
                  });                  // Handle different suggestion types with proper navigation;
                  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    // Product listings with IDs go to product detail page;
                    router.push(`/marketplace/listing/${sugg.id}`);
                  } else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {;
                    // Documentation suggestions navigate directly to their path;
                    router.push(sugg.slug);
                  } else if (sugg.type === 'blog' && sugg.slug) {;
                    // Blog posts navigate to blog detail page;
<<<<<<< HEAD
=======
=======
                    // Product listings with IDs go to product detail page;`
                    router.push (`/marketplace / listing/${sugg.id}`);
                  } else // Check condition;
if (
                  ) {) {}
  $2;
}
                    // Documentation suggestions navigate directly to their path;
                    router.push (sugg.slug);
                  } else // Check condition;
if ( {) {}
  $2;
}
                    // Blog posts navigate to blog detail page;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                    router.push (`/blog/${sugg.slug}`);

                  } else {}
                    // Default: search results page with query parameter;`
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`)
                  }

                onSelectSuggestion={sugg => {;'
                  logDebug('PrimaryNav search suggestion selected:', {;
                    suggestion: sugg,;
                  });                  // Handle different suggestion types with proper navigation;
                  if (sugg && sugg.id) {;

                onSelectSuggestion={(sugg) => {;'
                  logDebug('PrimaryNav search suggestion selected:', { suggestion: sugg }),;
                  // Handle different suggestion types with proper navigation;
                  if (sugg.id) {;

<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
                    // Product listings with IDs go to product detail page;
<<<<<<< HEAD:src/layout/PrimaryNav.tsx

<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
                    router.push(`/marketplace/listing/${sugg.id}`);
=======
                    // Product listings with IDs go to product detail page;`
                    router.push(`/marketplace/listing/${sugg.id}`);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                  } else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {;
                    // Documentation suggestions navigate directly to their path;
                    router.push(sugg.slug);'
                  } else if (sugg.type === 'blog' && sugg.slug) {;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
                    // Blog posts navigate to blog detail page;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    // Blog posts navigate to blog detail page;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                    router.push(`/blog/${sugg.slug}`);
                  } else {;
                    // Default: search results page with query parameter;`
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`);
                  }'
                  setQuery(''),;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
                  // Track analytics event;
<<<<<<< HEAD
                  if (typeof window !== 'undefined' && window.gtag) {;
                    window.gtag('eventsearch_suggestion_click', {;
                      search_term: sugg.text,;
                      suggestion_type: sugg.type,;
=======
                  if (typeof window !== 'undefined' && window && window.gtag) {;
=======
                  // Track analytics event;'
                  if (typeof window !== 'undefined' && window && window.gtag) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                    window && window.gtag('event', 'search_suggestion_click', {;
                      search_term: sugg && sugg.text,;
                      suggestion_type: sugg && sugg.type,;
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug,;
                    });
                  }'
                  // // // // // console && console.log('PrimaryNav search suggestion selected:',;
  sugg);
                  // Handle different suggestion types with proper navigation;
                  if(sugg && sugg.id) {;
`
                    // Product listings with IDs go to product detail page`;`
                    router && router.push(`/marketplace/listing/${sugg && sugg.id;'`
'`;'`
}`)} else if(sugg && sugg.type = == 'doc' && sugg && sugg.slug && sugg && sugg.slug.startsWith('/')) {;
'
                    // Documentation suggestions navigate directly to their path';'
                    router && router.push(sugg && sugg.slug)} else if(sugg && sugg.type === 'blog' && sugg && sugg.slug) {;
`
                    // Blog posts navigate to blog detail page`;`
                    router && router.push(`/blog/${sugg && sugg.slug}`)} else {;
`
                    // Default: search results page with slug;`;`
                    router && router.push(`/search/${sugg && sugg.slug || slugify(sugg && sugg.text)}`)};'
                  setQuery('');'
                  // Track analytics event';'
                  if(typeof window !== 'null' && window && window.gtag) {;
'
                    window && window.gtag('event',search_suggestion_click', {;

                      search_term: sugg && sugg.text,;
                      suggestion_type: sugg && sugg.type,;
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug;
})}
                }}
                searchSuggestions = {suggestions,}
              />;
            </form>;

            {/* Compact actions group */}'
            <div className='flex items-center gap-1'>;
              <PointsBadge />;
              <CartDrawer />;
            </div>;

            {/* Compact controls group */}'
            <div className='flex items-center gap-1 border-l border-primary/20 pl-1 ml-1'>;'
                  set_query ('');
                  // Track analytics event;
                  // Check condition;
if ( {) {}
  $2;
}'
                    window.gtag ('event', 'search_suggestion_click', {}
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug,
                    });
                  }'
                  // // // // // console.log ('PrimaryNav search suggestion selected:',
  sugg);
                  // Handle different suggestion types with proper navigation;
                  // Check condition;
if ( {) {}
  $2;
}`
                    // Product listings with IDs go to product detail page`;`
                    router.push (`/marketplace / listing/${sugg.id;'`
'`;`
}`)} else if () {) {}
  $2;
}'
                    // Documentation suggestions navigate directly to their path';
                    router.push (sugg.slug)} else // Check condition;
if ( {) {}
  $2;
}`
                    // Blog posts navigate to blog detail page`;`
                    router.push (`/blog/${sugg.slug}`)} else {}`
                    // Default: search results page with slug;`;`
                    router.push (`/search/${sugg.slug || slugify (sugg.text)}`)}'
                  set_query ('');'
                  // Track analytics event';
                  // Check condition;
if ( {) {}
  $2;
}'
                    window.gtag ('event', search_suggestion_click', {}
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      suggestion_id: sugg.id || sugg.slug;
                    });
                  }
                }}
                searchSuggestions={suggestions}
              />;
            </form>;
            {/* Compact actions group */}
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
            <div className="flex items-center gap-1">
              <PointsBadge />
              <CartDrawer />
            </div>

            {/* Compact controls group */}"
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>
            
            {/* Auth links - flex wrap for very small screens */}"
            <div className="flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (
                <>
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
                  <Link
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    href="/auth/login"
                    className="text-sm hover: text-primary whitespace-nowrap"
=======
                  <Link;
"
                    href="/auth/login""
                    className="text-sm hover: text-primary whitespace-nowrap""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                    data-testid="login-link"
                    onClick={(e) => {}
                      e.preventDefault(),
                      setLoginOpen(true)"
            <div className="flex items-center gap-1">;
              <PointsBadge />;
              <CartDrawer />;
            </div>;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
            {/* Compact controls group */}
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">;
=======
            {/* Compact controls group */}'
            <div className='flex items - center gap - 1 border - l border - primary / 20 pl - 1 ml - 1'>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
              <ModeToggle />;
              <LanguageSelector />;
            </div>;
            {/* Auth links - flex wrap for very small screens */}
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
            <div className="flex items-center gap-1 flex-wrap">;
              {!isLoggedIn && (;
                <>;
                  <Link;
                    href="/auth/login";
                    className="text-sm hover: text-primary whitespace-nowrap";
=======

                  <Link;"
                    href="/auth/login";"
                    className="text-sm hover: text-primary whitespace-nowrap";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                    data-testid="login-link";
                    onClick={(e) => {;
                      e.preventDefault();
                      setLoginOpen(true);
                    }}
                  >;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                    {t('auth.login')}
                  </Link>
<<<<<<< HEAD
=======
                    onClick={e => {;
                      e && e.preventDefault();
                      setLoginOpen(true);                    }}
                  >;'
                    {t('auth && auth.login')}
                  </Link>;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Link
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                    href='/signup'
                    className='text-sm hover:text-primary whitespace-nowrap'>;
                    {t('auth && auth.signup')}
                  </Link>;
                </>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
                    href="/signup"
=======
                  <Link"
                    href="/signup""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                    className="text-sm hover:text-primary whitespace-nowrap"
                  >'
                    {t('auth.signup')}
<<<<<<< HEAD
                  </Link>;
                </>;
=======
                  </Link>
                </>
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
              )}
              {isLoggedIn && <UserMenu />}
<<<<<<< HEAD
=======

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            </div>;
          </div>;
          {/* Tablet view (md to lg) - simplified controls */}
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">

            <ModeToggle />
            <LanguageSelector />
            {!isLoggedIn && (
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
              <Link
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                href="/auth/login"
                className="text-sm hover:text-primary"
=======
              <Link;
"
                href="/auth/login""
                className="text-sm hover:text-primary""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
                data-testid="login-link"
                onClick={(e) => {}
                  e.preventDefault(),
                  setLoginOpen(true)"
          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">;
            <ModeToggle />;
            <LanguageSelector />;
            {!isLoggedIn && (;
              <Link;"
                href="/auth/login";"
                className="text-sm hover:text-primary";"
                data-testid="login-link";
                onClick={(e) => {;
                  e.preventDefault();
                  setLoginOpen(true);
                }}
              >;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD:src/layout/PrimaryNav.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
export function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user } = useAuth();
  const isLoggedIn = null;
                  setLoginOpen(true)
                }}
              >
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
                {t('auth.login')}
=======
'
                {t('auth.login')}
              </Link>
            )}
            {isLoggedIn && <UserMenu />}

                onClick={e => {;
                  e && e.preventDefault();
                  setLoginOpen(true);                }}
              >;'
                {t('auth && auth.login')}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
              </Link>;
            )}
            {isLoggedIn && <UserMenu />}
          </div>;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
<<<<<<< HEAD
=======

=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
            <div className='flex items - center gap - 1 flex - wrap'>;
              {!isLoggedIn && (
                <>;
                  <Link;'
                    href='/auth / login';'
                    className='text - sm hover:text - primary whitespace - nowrap';'
                    data - testid='login - link';
                    on_click={e => {}
                      e.prevent_default ();
                      setLoginOpen (true) }}
                  >;'
                    {t ('auth.login')}
                  </Link>;
                  <Link;'
                    href='/signup';'
                    className='text - sm hover:text - primary whitespace - nowrap';
                  >;'
                    {t ('auth.signup')}
                  </Link>;
                </>)}
              {isLoggedIn && <UserMenu />}
            </div>;
          </div>;
          {/* Tablet view (md to lg) - simplified controls */}'
          <div className='hidden md:flex lg:hidden items - center gap - 2 order - 2'>;
            <ModeToggle />;
            <LanguageSelector />;
            {!isLoggedIn && (
              <Link;'
                href='/auth / login';'
                className='text - sm hover:text - primary';'
                data - testid='login - link';
                on_click={e => {}
                  e.prevent_default ();
                  setLoginOpen (true) }}
              >;'
                {t ('auth.login')}
              </Link>)}
            {isLoggedIn && <UserMenu />}
          </div>;
              {isLoggedIn && <UserMenu  />}
            </div>;
          </div>;
          {/* Mobile menu button */}

          </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {/* Mobile menu button */}
          <button"
            className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}'
            aria-label={t('general.toggle_mobile_menu')}
          >

<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
            {mobileMenuOpen ? (
=======

            {mobileMenuOpen ? ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
              <X className="h-6 w-6" />
            ) : ("
              <Menu className="h-6 w-6" />
            )}
<<<<<<< HEAD:src/layout/PrimaryNav.tsx

          <div
<<<<<<< HEAD
<<<<<<< HEAD
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={(returnToPath) => setLoginOpen(true)}
            />;
          </div>;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          </button>
        </div>
      </header>
      {mobileMenuOpen && ("
        <div className="lg:hidden fixed inset-0 z-60 pt-16">
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx

          <div
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden='true'          />
          <div className='relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto'>
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={returnToPath => setLoginOpen(true)}            />
          </div>
        </div>
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <div;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
  );

};"
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo /> ;'
}setQuery ('');
//Track analytics event ;


}searchSuggestions= {;
  suggestions ;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={;
  (e) => {;
  > {';
  t ('auth.login') ";
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {';
  t ('auth.signup') ;
origin/cursor/automate-test-improve-and-merge-code-2533
}</Link> </>) ;
}{;
  isLoggedIn && <UserMenu /> ;
}</div> </div> <ModeToggle /> <LanguageSelector /> {";
  !isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={;
  (e) => {;
  e.preventDefault ();
setLoginOpen (true) ;
}';
}t ('auth.login') ;
origin/cursor/automate-test-improve-and-merge-code-2533
}</Link>) ;
}{;
  isLoggedIn && <UserMenu /> ;
}</div> {;
  /* Mobile menu button */ ";
}<button) : (<Menu className="h-6 w-6" />) ";
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={;
  () => setMobileMenuOpen (false) ";
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {;
  unreadCount ;
}onClose= {;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <LinkonClick={}
  (e) => {;'
  > {';'"
  t ('auth && auth.login') ";'"
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {';'
  t ('auth && auth.signup') ;
}</Link> </>) ;
}{;
  isLoggedIn && <UserMenu /> ;"
}</div> </div> <ModeToggle /> <LanguageSelector /> {";"
  !isLoggedIn && (<Linkhref="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={}
  (e) => {;
  e && e.preventDefault ();
setLoginOpen (true) ;'
}';'
}t ('auth && auth.login') ;
}</Link>) ;
}{;
  isLoggedIn && <UserMenu /> ;
}</div> {;"
  /* Mobile menu button */ ";"
}<button) : (<Menu className="h-6 w-6" />) ";"
}</button> </div> </header> <divclassName="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={"
  () => setMobileMenuOpen (false) ";"
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenuunreadCount= {}
  unreadCount;
}onClose= {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
  () => setMobileMenuOpen (false) ;
}openLoginModal= {;
  (returnToPath) => setLoginOpen (true) ;
}/> </div> </div>) ;
}{;
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx

<<<<<<< HEAD:src/layout/PrimaryNav.tsx
  { opacity: 1,;
=======
  isMobile && <MobileBottomNavunreadCount= {}
  unreadCount;
}/> ;
}<LoginModalisOpen= {}
  loginOpen;
}onOpenChange= {}
  setLoginOpen;
}/> </>) ;'"
}'"  { opacity: 0,;
  height: 0;
}}
              animate = {;

  { opacity: 1,;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx
  height: 'auto';
}}
              exit = {;

  { opacity: 0,;
  height: 0;
}}"
              transition={{ duration: 0 && 0.3 }}";"
              className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">";"
              <div className="px-4 py-6 space-y-4">;
                {services && services.map((category, index) => (;"
                  <div key={index}>";"
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">;
                      {category && category.category}"
                    </h3>";"
                    <div className="space-y-2 ml-4">;
                      {category && category.items.map((service: unknown, serviceIndex: unknown ;
                        <Link;
                          key={serviceIndex}"
                          to={service && service.path}""
                          className="block text-gray-300 hover:text-white transition-colors duration-200"
                          onClick={( setIsOpen(false)}>;
                          {service && service.name}
                        </Link>;
                      ))}
                    </div>;
                  </div>;
                ))}
"
                <div className="pt-4 border-t border-white/10 space-y-2">;"
                  <Linkto="/solutions""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    Solutions;
                  </Link>;"
                  <Linkto="/about""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    About;
                  </Link>;"
                  <Linkto="/blog""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    Blog;
                  </Link>;"
                  <Linkto="/contact""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    Contact;
                  </Link>;
                </div>;
              </div>;
            </motion && motion.div>;
          )};
        </AnimatePresence>;
      </nav>;
    </header>;
  )}'"`
'"`;

}
"
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo />'
}setQuery ('')
//Track analytics event;
}searchSuggestions= {}
  suggestions;
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={}
  (e) => {'
  > {''"
  t ('auth.login') "'"
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {''
  t ('auth.signup')
}</Link> </>)
}{}
  isLoggedIn && <UserMenu />"
}</div> </div> <ModeToggle /> <LanguageSelector /> {""
  !isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={}
  (e) => {}
  e.preventDefault ()
setLoginOpen (true)'
}''
}t ('auth.login')
}</Link>)
}{}
  isLoggedIn && <UserMenu />
}</div> {"
  /* Mobile menu button */ ""
}<button) : (<Menu className="h-6 w-6" />) ""
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={"
  () => setMobileMenuOpen (false) ""
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {}
  unreadCount;
}onClose= {}
  () => setMobileMenuOpen (false)
}openLoginModal= {}
  (returnToPath) => setLoginOpen (true)
}/> </div> </div>)
<<<<<<< HEAD:src_backup/layout/PrimaryNav.tsx
}{
  isMobile && <MobileBottomNav unreadCount= {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  unreadCount

  unreadCount 


}/>
}<LoginModal isOpen= {
  loginOpen
}onOpenChange= {
  setLoginOpen
}/> </>)
}'"  { opacity: 0
  height: 0
}}
              animate = {
  { opacity: 1
  height: 'auto'
}}
              exit = {
  { opacity: 0
  height: 0
          <button;
            className='lg:hidden p - 2 rounded focus:outline - none flex - shrink - 0';
            on_click={() => setMobileMenuOpen (!mobileMenuOpen)}
            aria - expanded={mobileMenuOpen}
            aria - label={t ('general.toggle_mobile_menu')}          >;
            {mobileMenuOpen ? (
              <X className='h - 6 w - 6' />) : (
              <Menu className='h - 6 w - 6' />)}
          </button>;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>;
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
<<<<<<< HEAD
=======
=======
        </div>;
      </header>;
      {mobileMenuOpen && (
        <div className='lg:hidden fixed inset - 0 z - 60 pt - 16'>;
          <div;
            className='absolute inset - 0 bg - black / 50 backdrop - blur - sm';
            on_click={() => setMobileMenuOpen (false)}
            aria - hidden='true'          />;
          <div className='relative bg - card border - t border - primary / 20 max - h-[calc (100vh - 4rem)] overflow - y-auto'>;
            <MobileMenu;
              unread_count={unread_count}
              on_close={() => setMobileMenuOpen (false)}
              openLoginModal={returnToPath => setLoginOpen (true)}            />;
          </div>;
        </div>)}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
return (<> <header className="sticky top - 0 z - 70 w - full border - b border - primary / 20 bg - card / 90 backdrop - blur - md" role="navigation" aria - label="Primary" data - testid="header" > <div className="container flex items - center justify - between gap - 2 min - h-16 px - 4 sm:px - 6 max-[320px]:flex - wrap" > <Logo />;
}set_query ('');
//Track analytics event;
}search_suggestions= {
  suggestions;
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link on_click={
  (e) => {
  > {';
  t ('auth.login') ";
}</Link> <Link href="/signup" className="text - sm hover:text - primary whitespace - nowrap" > {';
  t ('auth.signup');
}</Link> </>);
}{
  isLoggedIn && <UserMenu />;
}</div> </div> <ModeToggle /> <LanguageSelector /> {";
  !isLoggedIn && (<Link href="/auth / login" className="text - sm hover:text - primary" data - testid="login - link" on_click={
  (e) => {
  e.prevent_default ();
setLoginOpen (true);
}';
}t ('auth.login');
}</Link>);
}{
  isLoggedIn && <UserMenu />;
}</div> {
  /* Mobile menu button */ ";
}<button) : (<Menu className="h - 6 w - 6" />) ";
}</button> </div> </header> <div className="absolute inset - 0 bg - black / 50 backdrop - blur - sm" on_click={
  () => setMobileMenuOpen (false) ";
}aria - hidden="true" /> <div className="relative bg - card border - t border - primary / 20 max - h-[calc (100vh - 4rem) ] overflow - y-auto" > <MobileMenu unread_count= {
  unread_count;
}on_close= {
  () => setMobileMenuOpen (false);
}openLoginModal= {
  (returnToPath) => setLoginOpen (true);
}/> </div> </div>);
}{
  is_mobile && <MobileBottomNav unread_count= {
  unread_count;
}/>;
}<LoginModal is_open= {
  login_open;
}onOpenChange= {
  setLoginOpen;
}/> </>);
}'"  { opacity: 0,
  height: 0;
}}
              animate = {
  { opacity: 1,
  height: 'auto';
}}
              exit = {
  { opacity: 0,
  height: 0;
}}
              transition={{ duration: 0.3 }}";
              className="lg:hidden bg - slate - 900 / 95 backdrop - blur - md border - t border - white / 10">";
              <div className="px - 4 py - 6 space - y-4">;
                {services.map ((category, index) => (
                  <div key={index}>";
                    <h3 className="text - sm font - semibold text - cyan - 400 mb - 2">;
                      {category.category}




;

                    </h3>";
                    <div className="space - y-2 ml - 4">;
                      {category.items.map ((service: unknown, service_index: unknown;
                        <Link;
                          key={service_index}
                          to={service.path}";
                          className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                          on_click={( setIsOpen (false)}
                        >;
                          {service.name}
                        </Link>))}
                    </div>;
                  </div>))}
                <div className="pt - 4 border - t border - white / 10 space - y-2">;
                  <Link                    to="/solutions";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    Solutions;
                  </Link>;
                  <Link                    to="/about";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    About;
                  </Link>;
                  <Link                    to="/blog";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    Blog;
                  </Link>;
                  <Link                    to="/contact";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    Contact;
                  </Link>;
                </div>;
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </nav>;
    </header>)}
'"`;
}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
  isMobile && <MobileBottomNav unreadCount= {;
  unreadCount ;
}/> ;
}<LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
}/> </>) ;
}'"
<<<<<<< HEAD:src/layout/PrimaryNav.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/layout/PrimaryNav.tsx
=======
}{}
  isMobile && <MobileBottomNav unreadCount= {}
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/layout/PrimaryNav.tsx

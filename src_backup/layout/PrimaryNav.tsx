


import { MobileBottomNav  } from '@/components/header/MobileBottomNav;

import { useState } from 'react'
import { logDebug, logErrorToProduction } from @/utils/productionLogger''
import Link from next/link'
import { useRouter } from 'next/router
import { Logo } from '@/components/header/Logo'
import { PointsBadge } from @/components/loyalty/PointsBadge''
import { UserMenu } from @/components/header/UserMenu'
import { LanguageSelector } from '@/components/header/LanguageSelector
import { ModeToggle } from '@/components/ModeToggle'
import { useAuth } from @/hooks/useAuth''
import { useIsMobile } from @/hooks/use-mobile'
import { useMessaging } from '@/context/MessagingContext
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'
import { generateSearchSuggestions } from @/data/marketplaceData''
import { slugify } from @/lib/slugify'
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation
import { MobileMenu } from '@/components/header/MobileMenu'
import { MobileBottomNav } from @/components/header/MobileBottomNav'
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



export /**;
 * PrimaryNav - Function description;
 */
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false);
  const [login_open, setLoginOpen] = useState (false);
  const { user } = use_auth ();
  const isLoggedIn = !!user;
  const is_mobile = useIsMobile ();
  const { t } = use_translation ();
  const router = use_router ();
  const [query, set_query] = useState ('');
  const suggestions = generateSearchSuggestions ();
  let unread_count = 0;

  try {}
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount;
  } catch {}
    // context not available;
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

      logDebug(PrimaryNav search submit:, { query: trimmed })
      router;
        .push(`/search?q=${encodeURIComponent(trimmed)}`)'
        .then(() => setQuery('))
        .catch(err =>
          logErrorToProduction('Search navigation failed', err, {}
            query: trimmed
            component: PrimaryNav'
          })
        ) }
  const handle_submit = (e: React.FormEvent) =>: any {}
    e.prevent_default ();
    const trimmed = query.trim ();    // Check condition;
if ( {) {}
  $2;
}'
      log_debug (PrimaryNav search submit:, { query: trimmed });
      router;`
        .push (`/search?q=${encodeURIComponent (trimmed)}`);'
        .then (() => set_query ('));
        .catch (err =>;
          logErrorToProduction ('Search navigation failed', err, {}
            query: trimmed,
            component: PrimaryNav'})) }
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
  const [loginOpen, setLoginOpen] = useState(false),

  const { user } = useAuth(),
  const isLoggedIn = !!user,
  const isMobile = useIsMobile(),
  const { t } = useTranslation(),
  const router = useRouter(),'
  const [query, setQuery] = useState(),
  const suggestions = generateSearchSuggestions(),
  let unreadCount = 0,
  try {
    const messaging = useMessaging(),
    unreadCount = messaging.unreadCount;
  } catch {
    // context not available;
  }


      router;`
        .push(`/search?q=${encodeURIComponent(trimmed)}`);'
        .then(() => setQuery());'
        .catch((err) => logErrorToProduction('Search navigation failed, err, { query: trimmed, component: PrimaryNav' }));
    }
  },

        data-testid='header>;
        <div className=container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap'>;
          <Logo />;

          {/* Navigation - hidden on mobile and tablets, shown on desktop */}

          <div className='hidden lg:block order-1 flex-shrink-0>
            <ResponsiveNavigation;
              openLoginModal={returnToPath => setLoginOpen(true)}

            />          </div>;

  return (
    <>
      <header;
        className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md
        role="navigation"
        aria-label=Primary""
        data-testid=header
      >"
        <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap>
          <Logo />

          {/* Navigation - hidden on mobile and tablets, shown on desktop */}

          <div className=hidden lg:block order-1 flex-shrink-0">
            <ResponsiveNavigation openLoginModal={(returnToPath) => setLoginOpen(true)} />
          </div>

          {/* Actions container with responsive layout */}



                  } else if (sugg.type === 'doc && sugg.slug && sugg.slug.startsWith(/')) {
                    // Documentation suggestions navigate directly to their path;
                    router.push(sugg.slug);'
                  } else if (sugg.type === blog && sugg.slug) {

                    router.push(`/blog/${sugg.slug}`);
                  } else {
                    // Default: search results page with query parameter;`
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`);
                  }'
                  setQuery('),

                  // Track analytics event;

                    window && window.gtag(event', 'search_suggestion_click, {
                      search_term: sugg && sugg.text,
                      suggestion_type: sugg && sugg.type,
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug});
                  }
                  // // // // // console && console.log('PrimaryNav search suggestion selected:',
  sugg);
                  // Handle different suggestion types with proper navigation;


`
                    // Product listings with IDs go to product detail page`;`
                    router && router.push(`/marketplace/listing/${sugg && sugg.id;`
`;'`
}`)} else if(sugg && sugg.type = == 'doc && sugg && sugg.slug && sugg && sugg.slug.startsWith(/')) {
'
                    // Documentation suggestions navigate directly to their path;
                    router && router.push(sugg && sugg.slug)} else if(sugg && sugg.type === 'blog' && sugg && sugg.slug) {
`
                    // Blog posts navigate to blog detail page`;`
                    router && router.push(`/blog/${sugg && sugg.slug}`)} else {
`
                    // Default: search results page with slug;`;`
                    router && router.push(`/search/${sugg && sugg.slug || slugify(sugg && sugg.text)}`)}
                  setQuery(');'
                  // Track analytics event;
                  if(typeof window !== 'null' && window && window.gtag) {

                    window && window.gtag(event',search_suggestion_click', {

                      search_term: sugg && sugg.text,
                      suggestion_type: sugg && sugg.type,
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug;
})}
                }}
                searchSuggestions = {suggestions,}
              />;
            </form>;

            {/* Compact actions group */}
            <div className=flex items-center gap-1'>;
              <PointsBadge />;
              <CartDrawer />;
            </div>;

            {/* Compact controls group */}'
            <div className=flex items-center gap-1 border-l border-primary/20 pl-1 ml-1>;'
                  set_query (');
                  // Track analytics event;
                  // Check condition;
if ( {) {}
  $2;
}
                    window.gtag ('event', search_suggestion_click, {}
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug});
                  }'
                  // // // // // console.log ('PrimaryNav search suggestion selected:,
  sugg);
                  // Handle different suggestion types with proper navigation;
                  // Check condition;
if ( {) {}
  $2;
}`
                    // Product listings with IDs go to product detail page`;`
                    router.push (`/marketplace / listing/${sugg.id;`
'`;`
}`)} else if () {) {}
  $2;
}'
                    // Documentation suggestions navigate directly to their path;
                    router.push (sugg.slug)} else // Check condition;
if ( {) {}
  $2;
}`
                    // Blog posts navigate to blog detail page`;`
                    router.push (`/blog/${sugg.slug}`)} else {}`
                    // Default: search results page with slug;`;`
                    router.push (`/search/${sugg.slug || slugify (sugg.text)}`)}
                  set_query ('');
                  // Track analytics event;
                  // Check condition;
if ( {) {}
  $2;
}'
                    window.gtag ('event, search_suggestion_click, {}
                      search_term: sugg.text,
                      suggestion_type: sugg.type,

                      suggestion_id: sugg.id || sugg.slug;
                    });
                  }
                }}
                searchSuggestions={suggestions}
              />;
            </form>;
            {/* Compact actions group */}

            <div className="flex items-center gap-1>
              <PointsBadge />
              <CartDrawer />
            </div>

            {/* Compact controls group */}
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>
            
            {/* Auth links - flex wrap for very small screens */}
            <div className=flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (
                <>

                    href="/auth/login
                    className=text-sm hover: text-primary whitespace-nowrap"

                    data-testid="login-link
                    onClick={(e) => {}
                      e.preventDefault(),
                      setLoginOpen(true)
            <div className="flex items-center gap-1">;
              <PointsBadge />;
              <CartDrawer />;
            </div>;

              <ModeToggle />;
              <LanguageSelector />;
            </div>;


            {/* Auth links - flex wrap for very small screens */}

                    data-testid="login-link";
                    onClick={(e) => {
                      e.preventDefault();
                      setLoginOpen(true);
                    }}
                  >;

                    {t(auth.login)}
                  </Link>

                  <Link

                    href=/signup

                    className="text-sm hover:text-primary whitespace-nowrap"
                  >'
                    {t('auth.signup)}

              )}
              {isLoggedIn && <UserMenu />}

            </div>;
          </div>;
          {/* Tablet view (md to lg) - simplified controls */}

          <div className=hidden md: flex lg:hidden items-center gap-2 order-2>

            <ModeToggle />
            <LanguageSelector />
            {!isLoggedIn && (

                href="/auth/login"
                className=text-sm hover:text-primary

                data-testid="login-link"
                onClick={(e) => {}
                  e.preventDefault(),
                  setLoginOpen(true)
          <div className=hidden md: flex lg:hidden items-center gap-2 order-2">;
            <ModeToggle />;
            <LanguageSelector />;
            {!isLoggedIn && (;
              <Link;"
                href=/auth/login;"
                className="text-sm hover:text-primary;
                data-testid="login-link";



export function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user } = useAuth();
  const isLoggedIn = null;
                  setLoginOpen(true)
                }}
              >



                {t(auth.login')}

              </Link>;
            )}
            {isLoggedIn && <UserMenu />}
          </div>;

            <div className='flex items - center gap - 1 flex - wrap>;
              {!isLoggedIn && (
                <>;
                  <Link;
                    href='/auth / login';
                    className=text - sm hover:text - primary whitespace - nowrap';'
                    data - testid=login - link;
                    on_click={e => {}
                      e.prevent_default ();
                      setLoginOpen (true) }}
                  >;'
                    {t ('auth.login)}
                  </Link>;
                  <Link;
                    href='/signup';
                    className=text - sm hover:text - primary whitespace - nowrap';
                  >;'
                    {t (auth.signup)}
                  </Link>;
                </>)}
              {isLoggedIn && <UserMenu />}
            </div>;
          </div>;
          {/* Tablet view (md to lg) - simplified controls */}'
          <div className='hidden md:flex lg:hidden items - center gap - 2 order - 2>;
            <ModeToggle />;
            <LanguageSelector />;
            {!isLoggedIn && (
              <Link;
                href='/auth / login';
                className=text - sm hover:text - primary';'
                data - testid=login - link;
                on_click={e => {}
                  e.prevent_default ();
                  setLoginOpen (true) }}
              >;'
                {t ('auth.login)}
              </Link>)}
            {isLoggedIn && <UserMenu />}
          </div>;
              {isLoggedIn && <UserMenu  />}
            </div>;
          </div>;
          {/* Mobile menu button */}

          </div>;

          {/* Mobile menu button */}
          <button
            className=lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}


          >

              <X className=h-6 w-6 />
            ) : ("
              <Menu className="h-6 w-6 />
            )}

  isMobile && <MobileBottomNav unreadCount= {
  unreadCount ;
}/> ;
}<LoginModal isOpen= {
  loginOpen ;
}onOpenChange= {
  setLoginOpen ;
}/> </>) ;



import import { useState } from 'react, ';
import import Link from 'next/link;';
import import { useRouter } from 'next/router, ';
import import { Logo } from '@/components/header/Logo, ';
import import { PointsBadge } from '@/components/loyalty/PointsBadge, ';
import import { UserMenu } from '@/components/header/UserMenu, ';
import import { LanguageSelector } from '@/components/header/LanguageSelector, ';
import import { ModeToggle } from '@/components/ModeToggle, ';
import import { useAuth } from '@/hooks/useAuth, ';
import import { useIsMobile } from '@/hooks/use-mobile, ';
import import { useMessaging } from '@/context/MessagingContext, ';
import import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput, ';
import import { generateSearchSuggestions } from '@/data/marketplaceData, ';
import import { slugify } from '@/lib/slugify, ';
import import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation, ';
import import { MobileMenu } from '@/components/header/MobileMenu, ';
import import { MobileBottomNav } from '@/components/header/MobileBottomNav, ';
import import { Menu, X, ShoppingCart } from 'lucide-react, ';
import import { useTranslation } from 'react-i18next, ';
import import { useSelector } from 'react-redux, ';
export function PrimaryNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { user } = useAuth()
    const isLoggedIn = !!user;
    const isMobile = useIsMobile()
    const { t } = useTranslation()
    const router = useRouter()
    const [query, setQuery] = useState('')
    const suggestions = generateSearchSuggestions()
    let unreadCount = 0;
    try {
        const messaging = useMessaging()
        unreadCount = messaging.unreadCount;
    }
    catch {
        /
    }
    const cartCount = useSelector((s) => s.cart.items.reduce((sum, i) => sum + i.quantity, 0))
    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.trim()) {
            
            router.push(`/search/${slugify(query)}`)
            setQuery('')
        }
    }
    return (<>
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header">
        <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
          <Logo />
          
          {/* Navigation - hidden on mobile, shown on desktop */}
          <div className="hidden md:block order-1 flex-shrink-0">
            <ResponsiveNavigation />
          </div>
          
          {/* Actions container with responsive layout */}
          <div className="hidden md:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput value={query} onChange={setQuery} onSelectSuggestion={(sugg) => {
            
            /
            if (sugg.id) {
                /
                router.push(`/marketplace/listing/${sugg.id}`)
            }
            else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {
                /
                router.push(sugg.slug)
            }
            else if (sugg.type === 'blog' && sugg.slug) {
                /
                router.push(`/blog/${sugg.slug}`)
            }
            else {
                /
                router.push(`/search/${sugg.slug || slugify(sugg.text)}`)
     }
            setQuery('');
            // Track analytics event;
            if (typeof window !== 'undefined' && window.gtag) {window.gtag('event', 'search_suggestion_click', {
                    search_term: sugg.text;
                    suggestion_type: sugg.type;
                    suggestion_id: sugg.id || sugg.slug});
     }
        }} searchSuggestions={suggestions}/>
            </form>
            
            {/* Compact actions group */}
            <div className="flex items-center gap-1">
              <PointsBadge />
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link href="/cart" className="relative p-1" aria-label={t('nav.cart', 'Cart')}>
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground hover:text-primary"/>
                    {cartCount > 0 && (<span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                        {cartCount}
                      </span>)}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </div>
            
            {/* Compact controls group */}
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>
            
            {/* Auth links - flex wrap for very small screens */}
            <div className="flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (<>
                  <Link href="/auth/login" className="text-sm hover:text-primary whitespace-nowrap" data-testid="login-link">
                    {t('auth.login')}
                  </Link>
                  <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap">
                    {t('auth.signup')}
                  </Link>
</>)}
            </Link>
            <LanguageSelector />
            <ModeToggle />
            {!isLoggedIn && (<>
                <Link href="/login" className="text-sm hover:text-primary" data-testid="login-link">
                  {t('login', 'Login')}
                </Link>
                <Link href="/signup" className="ml-2 text-sm hover:text-primary">
                  {t('signup', 'Sign up')}
                </Link>
</>)}
            {isLoggedIn && <UserMenu />}
          </div>
          
          {/* Mobile menu button */}
          <button className="md: hidden p-2 rounded focus:outline-none flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label={t('general.toggle_mobile_menu')}>
            {mobileMenuOpen ? (<X className="h-6 w-6"/>) : (<Menu className="h-6 w-6"/>)}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (<div className="md:hidden fixed inset-0 z-60 pt-16">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} aria-hidden="true"/>
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu unreadCount={unreadCount} onClose={() => setMobileMenuOpen(false)}/>
          </div>
        </div>)}
      {isMobile && <MobileBottomNav unreadCount={unreadCount}/>}
</>);
}

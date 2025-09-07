
origin/cursor/expand-services-advertise-and-build-project-c28b
module.exports = {},


module.exports = {},;

ursor/fix-website-loading-errors-and-merge-6662
module.exports = {},;

module.exports = {},;
module.exports = {}
module.exports = {},;
origin/cursor/expand-services-advertise-and-build-project-c28b
import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
type LinkProps = React.PropsWithChildren<{
  to?: string;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>}>
export const Link: React.FC<LinkProps> = ({ to, href, children, className, onClick }) => {
  const resolved = to || href || '/'
  return (
    <NextLink href={resolved} legacyBehavior>
      <a className={className} onClick={onClick}>{children}</a>
    </NextLink>
  )}
export function useLocation() {
  const router = useRouter();
  const asPath = router.asPath || router.pathname || '/';
  const [path, query = ''] = asPath.split('?');
  const hashIndex = asPath.indexOf('#');
  const hash = hashIndex >= 0 ? asPath.substring(hashIndex) : ''
  return {
    pathname: path, search: query ? `?${query}` : '',
    hash, state: undefined as unknown,
    key: 'next'
  }}
export const BrowserRouter: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <>{children}</>
export const MemoryRouter = BrowserRouter;
export const HashRouter = BrowserRouter;
// No-op hooks to satisfy imports if present;
export const useHistory = () => ({ push: (url: string) => (window.location.href = url) })
export const useParams = () => ({})
export const NavLink = Link;
export default {} as Record<string, unknown>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

module.exports = {},


module.exports = {},;

pr-12325
import { useRouter as useNextRouter } from 'next/router';

export function useRouter() {
  const router = useNextRouter();
  
  return {
    ...router,
    // Add any custom router methods here
    push: (url: string) => router.push(url),
    replace: (url: string) => router.replace(url),
    back: () => router.back(),
    reload: () => router.reload(),
    prefetch: (url: string) => router.prefetch(url)
  };
}

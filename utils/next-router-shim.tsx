<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
module.exports = {},;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
origin/cursor/expand-services-advertise-and-build-project-c28b
module.exports = {},


module.exports = {},;

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
module.exports = {},;

module.exports = {},;
module.exports = {}
module.exports = {},;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

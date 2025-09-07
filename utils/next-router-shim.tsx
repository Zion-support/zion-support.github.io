<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======


module.exports = {},

module.exports = {},;


module.exports = {},


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
module.exports = {},


module.exports = {},;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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



<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
module.exports = {},;
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

module.exports = {},


<<<<<<< HEAD

module.exports = {},;







>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

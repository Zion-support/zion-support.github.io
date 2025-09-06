<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
module.exports = {},


module.exports = {},;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

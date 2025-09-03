
  to?: string;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>}>

    <NextLink href={resolved} legacyBehavior>
      <a className={className} onClick={onClick}>{children}</a>
    </NextLink>
  )}

    search: query ? `?${query}` : '',
    hash, 
    state: undefined as unknown,


    key: 'next'
  }}
export const BrowserRouter: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <>{children}</>
export const MemoryRouter = BrowserRouter;
export const HashRouter = BrowserRouter;
// No-op hooks to satisfy imports if present;
export const useHistory = () => ({ push: (ur,
    l: string) => (window.location.href = url) })

export const useParams = () => ({})



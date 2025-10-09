<<<<<<< HEAD
interface LinkProps {
    // TODO: Add content
  }
=======
interface LinkProps {// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  href: string;,
    children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string
}
<<<<<<< HEAD
export const Link: React.FC
          
          
          
          
          
          
          
          
          <LinkProps> = ({
    // TODO: Add content
  }
=======
export const Link: React.FC;
          <LinkProps> = ({// TODO: Add content;}
}
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
//   href,
//   children,
//   className,
//   target,
//   rel,
//   onClick,
  'aria-label': ariaLabel,
//   ...props;
}) => {if (onClick) {}
    }
<<<<<<< HEAD
    // Handle internal navigation
    if (href.startsWith('/') && !href.startsWith('//')) {
    // TODO: Add content
  }
      e.preventDefault()
      window.location.href = href
=======
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {// TODO: Add content;}
}
      e.preventDefault();
      window.location.href = href;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
    }
  }
  return (
    
          
          
          
          
          
          
          
          <div>Coming Soon</div>
  )
    
          <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
// >
      {children}
    
          
          
          
          
          
          
          
          
          </a>
  )
}
export default Link
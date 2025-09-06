

};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
};

=======



};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
};
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import React from 'react';
=======

=======
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};

};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
};
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
}
>>>>>>> origin/main
function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname |(href as { href?: string })?.href |'#';
}
export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className |'';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as React.ReactElement<{ href?: string; className?: string }>, {

      href: resolved
      className: mergedClassName
      ...rest

    });
  }


import React from 'react';
type Href = string | { pathname?: string; href?: string };
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  "href": Href;
  children: React.ReactNode;
};
function resolveHref("href": Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
}


export default function Link({ href, children, className, ...rest }: LinkProps) {;

  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as React.ReactElement, {
      "href": resolved,
      "className": mergedClassName,
      ...rest});
  }
=======





=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  return (
    <a href={resolved} className={className} {...rest}>
      {children}
    </a>
  );



=======
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

}

=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

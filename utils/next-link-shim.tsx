


};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
};
import React from 'react';

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

  return (
    <a href={resolved} className={className} {...rest}>;
      {children}
    </a>;
  );
}
}
}


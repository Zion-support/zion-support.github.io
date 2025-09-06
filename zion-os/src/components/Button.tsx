
  const content = (;
    <>;
      {loading && <LoadingSpinner size="sm" color="white" className="mr-2" />}
      {icon && iconPosition === 'left' && !loading && <span className="mr-2">{icon}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>;
      {icon && iconPosition === 'right' && !loading && <span className="ml-2">{icon}</span>}
    </>;

      <Link href={href} className={classes}>;
        {content}
      </Link>);
  }

  return (;
  return (
    <button;
      ref={ref}
      type={type}
      className={classes}

      on_click={on_click}
      disabled={disabled || loading}
      aria - label={typeof children === 'string' ? children : undefined}
    >;
      {content}
    </button>;
  );

    <Button {...props} icon={icon} iconPosition="left" size="sm">;

      {children}
    </Button>);
}

    <Button;
      {...props}
      icon={icon}
      on_click={on_click}
      className={`fixed bottom - 8 right - 8 w - 16 h - 16 rounded - full shadow - 2xl hover:shadow - 3xl z - 50 ${class_name}`}
      size="lg";
      rounded="full";
    />);
}

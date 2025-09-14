const Badge = ("props": "any) => {;
  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variantClasses = {;
    "default": 'border-transparent bg-primary text-primary-foreground'",;
    "secondary": 'border-transparent bg-secondary text-secondary-foreground',;
    "destructive": 'border-transparent bg-destructive text-destructive-foreground',;
    "outline": 'text-foreground';
  };
  ;
  return (;
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>;
      {children}
<<<<<<< HEAD
=======
    </div>;
  );
    </div>
    );
};
;
export {Badge};
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409

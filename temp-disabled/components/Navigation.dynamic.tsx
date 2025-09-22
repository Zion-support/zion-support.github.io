import React from \"react\";

interface NavigationProps {
  className?: string;}
  children?: React.ReactNode;}
}

const Navigation: React.FC<NavigationProps /> = ({
  className = \"\",}
  children,}
}) => {}
  return (}
    <div data-testid=\"avigation\" className={className} />
      {children || <div />Navigation Component</div>}
    </div>
  );
};

export default Navigation;

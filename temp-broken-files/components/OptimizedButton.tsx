import React from "

interface ButtonProps {children: React.ReactNode;
onClick?: () => void;
}
variant?: "primary" | "secondary";}
disabled?: boolean};
export const OptimizedButton = React.memo<ButtonProps>(({;
variant?: "primary" | "secondary";
disabled?: boolean};
export const OptimizedButton = React.memo<ButtonProps>(({ ;
children;
onClick;
variant = "primary",
disabled = false}) => {
return (
<button;
className={`btn btn-${variant}`}
onClick={onClick}
disabled={disabled}
aria-disabled={disabled}
>
{children}
</button>
)
})

OptimizedButton.displayName = "
<//button><///button>
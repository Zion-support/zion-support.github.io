<<<<<<< HEAD

<<<<<<< HEAD:src_backup/mobile/components/common/SeverityIndicator.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
=======
"
import React from "react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/SeverityIndicator.tsx
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {"
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,"
  size?: "sm" | "md" | "lg",
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/mobile/components/common/SeverityIndicator.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  className?: string
=======
;
  className?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/SeverityIndicator.tsx
}

export function SeverityIndicator({}
  severity, 
  showIcon = true, 
  showText = true, 
<<<<<<< HEAD
  size = "md",
  className 
=======
import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous";
  showIcon?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string
}

export function SeverityIndicator({
  severity,
  showIcon = true,
  showText = true,
  size = 'md',
  className,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
<<<<<<< HEAD
        return <AlertCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-destructive"
        )} />,
      case 'suspicious':
        return <AlertTriangle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-amber-500"
        )} />,
      default:
        return <CheckCircle className={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          "text-green-500"
        )} />
    }
  },

  return (
    <div className={cn("flex items-center gap-1", className)}>
=======

"
          "text-green-500";
        )} />;
;
interface SeverityIndicatorProps {"
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,"
  size?: "sm" | "md" | "lg",
  className?: string;
}
export function SeverityIndicator ({}
  severity,
  show_icon = true,
  show_text = true,";
  size = "md";
      default:;
        return <CheckCircle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";"
          "text - green - 500")} />;
    }
  }

  return (
"
    <div className={cn("flex items-center gap-1", className)}>


<<<<<<< HEAD:src_backup/mobile/components/common/SeverityIndicator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        
          />
        );
      case 'suspicious':
        
          />
        );
      default:
        
          />
        );
    }
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {showIcon && getSeverityIcon()}
      {showText && <span className='capitalize text-sm'>{severity}</span>}
    </div>
  );

};
return (</div>) ;
}'"
  return (
    <div className={cn("flex items-center gap-1", className)}>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
<<<<<<< HEAD
import React from "react",;
import { cn } from "@/lib/utils",;
=======
      {showIcon && getSeverityIcon()}"
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )"
import React from "react",;"
import { cn } from "@/lib/utils",;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/SeverityIndicator.tsx
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;
  showIcon?: boolean,;
  showText?: boolean,;"
  size?: "sm" | "md" | "lg",;
  className?: string;
}
;
export function SeverityIndicator() { return null; }
        )} />,;'
      case 'suspicious':;
        return <AlertTriangle className={cn(;"
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;"
          "text-amber-500";
        )} />,;
      default:;
        return <CheckCircle className={cn(;"
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";"
          "text-green-500";
        )} />;
    }
  };
  return (;
<<<<<<< HEAD:src_backup/mobile/components/common/SeverityIndicator.tsx
<<<<<<< HEAD
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  );
}
=======

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/SeverityIndicator.tsx
    <div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}"
      {showText && <span className="capitalize text-sm">{severity}</span>}

    </div>;
  );
}
"
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}"
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
}
  );

}
<<<<<<< HEAD:src_backup/mobile/components/common/SeverityIndicator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/SeverityIndicator.tsx

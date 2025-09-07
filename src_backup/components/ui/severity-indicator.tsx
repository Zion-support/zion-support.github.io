<<<<<<< HEAD:src_backup/components/ui/severity-indicator.tsx
size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"



import React from "react",
import { cn } from "@/lib/utils",
import React from "react";
import { cn } from "@/lib/utils";
origin/cursor/automate-test-improve-and-merge-code-2533
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",


  className?: string
}

export function SeverityIndicator({
  severity,
  showIcon = true,
  showText = true,
  size = 'md',
  className,
origin/cursor/automate-test-improve-and-merge-code-2533
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
          "text-green-500"
        )} />;
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/severity-indicator.tsx
;
size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
import React from "react",import { cn } from "@/lib/utils",import React from 'react';
import { cn  } from '@/lib/utils';
import { AlertTriangle, AlertCircle, CheckCircle  } from 'lucide-react';
interface SeverityIndicatorProps  {severity: "safe" | "suspicious" | "dangerous",showIcon?: boolean,showText?: boolean,size?: "sm" | "md" | "lg",className?: string;
}export function SeverityIndicator() {const getSeverityIcon = () => {switch (severity) {case 'dangerous':;
        return <AlertCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-destructive";
        )} />,case 'suspicious':;
        return <AlertTriangle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-amber-500";
        )} />,default:;
        return <CheckCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-green-500";
        )} />;
          "text-green-500";
        )} />;interface SeverityIndicatorProps  {severity: "safe" | "suspicious" | "dangerous",showIcon?: boolean,showText?: boolean,size?: "sm" | "md" | "lg",className?: string;
}
export function SeverityIndicator ({severity,show_icon = true,show_text = true,size = "md";
      default:;
<<<<<<< HEAD:src_backup/components/ui/severity-indicator.tsx
        return <CheckCircle className={cn (
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - green - 500")} />;

    }
  }

        
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
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

    <div className={cn("flex items-center gap-1", className)}>



      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
import React from "react",;
import { cn } from "@/lib/utils",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
  showIcon?: boolean,;
  showText?: boolean,;
  size?: "sm" | "md" | "lg",;
  className?: string;
}
;
export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
    switch (severity) {;
      case 'dangerous':;
        return <AlertCircle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-destructive";
        )} />,;
      case 'suspicious':;
        return <AlertTriangle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",;
          "text-amber-500";
        )} />,;
      default:;
        return <CheckCircle className={cn(;
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
=======
        return <CheckCircle className={cn (size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";
          "text - green - 500")} />;}
  }/>;
        )case 'suspicious':;
          />;
        )default:;
          />;
        )}
  }return (<div className={cn('flex items-center gap-1', className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className='capitalize text-sm'>{severity}</span>}
    </div>;
  )}return (</div>)}'";
  return (<div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  ){showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>;
  )interface SeverityIndicatorProps  {severity: "safe" | "suspicious" | "dangerous",showIcon?: boolean,showText?: boolean,size?: "sm" | "md" | "lg",className?: string;
}export function SeverityIndicator() {const getSeverityIcon = () => {switch (severity) {case 'dangerous':;
        return <AlertCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-destructive";
        )} />,case 'suspicious':;
        return <AlertTriangle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4","text-amber-500";
        )} />,default:;
        return <CheckCircle className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/severity-indicator.tsx
          "text-green-500";
        )} />;
    }
  }return (<div className={cn("flex items-center gap-1", className)}>;
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}</div>;
  )}<div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
<<<<<<< HEAD:src_backup/components/ui/severity-indicator.tsx
    </div>);
}
  );

}
;

}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </div>)}
  )}}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/severity-indicator.tsx

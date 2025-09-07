import React from "react",

import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface SeverityIndicatorProps {"
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,"
  size?: "sm" | "md" | "lg",

  className?: string

}

export function SeverityIndicator({}
  severity, 
  showIcon = true, 
  showText = true, 

}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':

      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )

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
});

}
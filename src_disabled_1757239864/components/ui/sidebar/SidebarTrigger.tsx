
<<<<<<< HEAD:src/components/ui/sidebar/SidebarTrigger.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}
=======
import React from 'react';
import { Button  } from '@/components/ui/button';
    </Button>;
  );
};
};
>>>>>>> origin/main:src_disabled_1757239864/components/ui/sidebar/SidebarTrigger.tsx

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();

<<<<<<< HEAD:src/components/ui/sidebar/SidebarTrigger.tsx
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >
=======
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
>>>>>>> origin/main:src_disabled_1757239864/components/ui/sidebar/SidebarTrigger.tsx
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
<<<<<<< HEAD:src/components/ui/sidebar/SidebarTrigger.tsx
=======
}
>>>>>>> origin/main:src_disabled_1757239864/components/ui/sidebar/SidebarTrigger.tsx

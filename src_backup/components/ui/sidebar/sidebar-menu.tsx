<<<<<<< HEAD:src/components/ui/sidebar/sidebar-menu.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/sidebar/sidebar-menu.tsx
return (<a;
          href={href}
    return(<button
        ref={ref}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
SidebarMenuItem.display_name = "SidebarMenuItem";

<<<<<<< HEAD:src/components/ui/sidebar/sidebar-menu.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/sidebar/sidebar-menu.tsx
export { SidebarMenuItem, SidebarMenuGroup }
export { SidebarMenuItem, SidebarMenuGroup }
}
export { SidebarMenuItem, SidebarMenuGroup }

SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

export { SidebarMenuItem, SidebarMenuGroup };
export { SidebarMenuItem, SidebarMenuGroup }
};
export { SidebarMenuItem, SidebarMenuGroup };

import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode

<<<<<<< HEAD:src/components/ui/sidebar/sidebar-menu.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/sidebar/sidebar-menu.tsx
import React, { forwardRef } from "react",;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;
  badge?: React.ReactNode;
}
;
const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;
      return (;
        <a;
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
          <div className="flex items-center gap-2">;
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
    }
;
    return (;
      <button;
        ref={ref}
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>;
    );
  }
),

SidebarMenuItem.displayName = "SidebarMenuItem",

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  children: React.ReactNode
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>
      <div className="pl-2">{children}</div>
    </div>
  )
},

export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title: string,;
  children: React.ReactNode;
}
;
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (;
    <div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
  );
},;
<<<<<<< HEAD:src/components/ui/sidebar/sidebar-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup };
=======
export { SidebarMenuItem, SidebarMenuGroup };
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
export { SidebarMenuItem, SidebarMenuGroup };

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/sidebar/sidebar-menu.tsx
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;

const SidebarMenuItem = null;
<<<<<<< HEAD:src/components/ui/sidebar/sidebar-menu.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/sidebar/sidebar-menu.tsx

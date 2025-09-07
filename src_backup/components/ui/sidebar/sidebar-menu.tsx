:src/components/ui/sidebar/sidebar-menu.tsx
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode
}

const SidebarMenuItem = null;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, className, ...props }, ref,) => {
    if (href) {
      return(<a
return (<a;
          href={href}
    return(<button;
        ref={ref}

export { SidebarMenuItem, SidebarMenuGroup }
export { SidebarMenuItem, SidebarMenuGroup }
}
export { SidebarMenuItem, SidebarMenuGroup }
:src/components/ui/sidebar/sidebar-menu.tsx
";
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

export { SidebarMenuItem, SidebarMenuGroup };
export { SidebarMenuItem, SidebarMenuGroup }
};
export { SidebarMenuItem, SidebarMenuGroup };

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'"
import { cn } from "@/lib/utils","
import { SafeRef } from "@/types/ref-types",
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {}
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,

import React, { forwardRef } from "react",;

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

;
return (<a;
          href={href}
    return(<button;
        ref={ref}SidebarMenuItem.display_name = "SidebarMenuItem";export { SidebarMenuItem, SidebarMenuGroup }
export { SidebarMenuItem, SidebarMenuGroup }
}
export { SidebarMenuItem, SidebarMenuGroup }SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";export { SidebarMenuItem, SidebarMenuGroup }export { SidebarMenuItem, SidebarMenuGroup }export { SidebarMenuItem, SidebarMenuGroup }import { cn } from "@/lib/utils",import { SafeRef } from "@/types/ref-types",import React, { forwardRef } from "react",import { ChevronDown  } from 'lucide-react';
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement>  {icon?: React.ReactNode,active?: boolean,href?: string,target?: string,badge?: React.ReactNode;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement>  {icon?: React.ReactNode,active?: boolean,href?: string,target?: string,badge?: React.ReactNode;
}const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps>(({ icon, active, children, href, target, badge, className, ...props }, ref) => {if (href) {return (<a;
          href={href}
          target={target}"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn("
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
            active && "bg-accent font-medium text-accent-foreground",
            className;
          )}
        >"
          <div className="flex items-center gap-2">"
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
:src/components/ui/sidebar/sidebar-menu.tsx
      );
    }

      >
        <div className='flex items-center gap-2'>
          {icon && <span className='text-muted-foreground'>{icon}</span>}
      )"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;"
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;"
          <div className="flex items-center gap-2">;"
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
        ref={ref}"
        type="button"
        className={cn("
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
          active && "bg-accent font-medium text-accent-foreground",
          className;
        )}
        {...props}
      >"
        <div className="flex items-center gap-2">"
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>
    );
  }
:src/components/ui/sidebar/sidebar-menu.tsx
);

SidebarMenuItem.displayName = 'SidebarMenuItem';

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <div className='space-y-1' {...props}>
      <div className='rounded-md px-3 py-2 text-sm font-medium'>{title}</div>
      <div className='pl-2'>{children}</div>
    </div>
  );
};
"
),
"
SidebarMenuItem.displayName = "SidebarMenuItem",

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
  title: string,
  children: React.ReactNode;
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {}
  return ("
    <div className="space-y-1" {...props}>"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>"
      <div className="pl-2">{children}</div>
    </div>
  )
},

export { SidebarMenuItem, SidebarMenuGroup },;
),;"
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title: string,;
  children: React.ReactNode;
}
;
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (;"
    <div className="space-y-1" {...props}>;"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;"
      <div className="pl-2">{children}</div>;
    </div>;
  );
},;
export { SidebarMenuItem, SidebarMenuGroup };

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
origin/cursor/automate-test-improve-and-merge-code-2533
  )},export { SidebarMenuItem, SidebarMenuGroup },),SidebarMenuItem.displayName = "SidebarMenuItem",interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement>  {title: string,children: React.ReactNode;
}const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {return (<div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
  )},export { SidebarMenuItem, SidebarMenuGroup }import React, { forwardRef } from 'react';
import { cn  } from '@/lib/utils';
import { SafeRef  } from '@/types/ref-types';
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement>  {icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;const SidebarMenuItem  = null;

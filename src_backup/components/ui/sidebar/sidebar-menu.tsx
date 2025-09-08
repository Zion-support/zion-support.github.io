<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


return (<a;
          href={href}
    return(<button;
        ref={ref}

export { SidebarMenuItem, SidebarMenuGroup }
export { SidebarMenuItem, SidebarMenuGroup }
}
export { SidebarMenuItem, SidebarMenuGroup }
<<<<<<< HEAD

";

=======
<<<<<<< HEAD
:src/components/ui/sidebar/sidebar-menu.tsx
<<<<<<< HEAD
";
=======
;
=======
";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD

;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
      )"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}

=======
      >
<<<<<<< HEAD
        <div className='flex items-center gap-2'>
          {icon && <span className='text-muted-foreground'>{icon}</span>}
      )"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
=======
        <div className='flex items-center gap-2>
          {icon && <span className=text-muted-foreground'>{icon}</span>}
      )
          rel={target === "_blank" ? noopener noreferrer : undefined}
=======
      )"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
        <div className="flex items-center gap-2">"
          {icon && <span className="text-muted-foreground">{icon}</span>}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className=flex items-center gap-2>"
          {icon && <span className="text-muted-foreground>{icon}</span>}
>>>>>>> origin/resolved-merge-conflicts
          <span>{children}</span>;
        </div>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="flex items-center gap-2">"
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>
        </div>
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {badge && <span>{badge}</span>}
      </button>;
    );
  }

<<<<<<< HEAD

=======
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
<<<<<<< HEAD
};
"
=======
}

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

},;

=======
<<<<<<< HEAD
},;
export { SidebarMenuItem, SidebarMenuGroup };
=======
<<<<<<< HEAD
},
export { SidebarMenuItem, SidebarMenuGroup }
=======
},;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD


=======
<<<<<<< HEAD
const SidebarMenuItem = null;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
const SidebarMenuItem = null;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
=======
const SidebarMenuItem = null;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

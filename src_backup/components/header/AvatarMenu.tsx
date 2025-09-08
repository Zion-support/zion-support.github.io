import React from 'react';

const AvatarMenu = () => {
  return (
    <div>
      {/* AvatarMenu component */}
    </div>
  )
};

export default AvatarMenu;

<<<<<<< HEAD


=======
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from react';
>>>>>>> origin/resolved-merge-conflicts

const AvatarMenu = () => {
  return (
    <div>
      {/* AvatarMenu component */}
    </div>
  );
};

export default AvatarMenu;


import React from 'react';
const AvatarMenu = () => {return (<div>{/* AvatarMenu component */}
    </div>;
<<<<<<< HEAD
  )}export default AvatarMenu;import Link from 'next/link';
import { useAuth   } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
=======
  )}export default AvatarMenu;import Link from next/link';
import { useAuth   } from '@/hooks/useAuth;
import { Avatar, AvatarFallback, AvatarImage  } from @/components/ui/avatar';
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import Link from 'next/link';
import { useAuth  } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
  DropdownMenuSeparator;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  DropdownMenuLabel  } from '@/components/ui/dropdown-menu';
import { User as UserIcon, Package  } from 'lucide-react';
import { LogOut } from 'lucide-react', // Assuming lucide-react is used;
export const AvatarMenu: React.FC = () => {const { user, logout, avatarUrl }  = useAuth()if (!user) return null;const initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase()return (<DropdownMenu>;
      <DropdownMenuTrigger asChild data-testid='avatar-menu-trigger'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { User as UserIcon, Package } from 'lucide-react'
import { LogOut } from 'lucide-react', // Assuming lucide-react is used
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  if (!user) return null;

  const initials = (user.displayName || user.name || 'U')
    .charAt(0)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid='avatar-menu-trigger'>
        <button
          className='flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
          aria-label='Open user menu'
        >
          <Avatar className='h-8 w-8'>
            {avatarUrl ? (
              <AvatarImage
                src={avatarUrl}
                alt={user.displayName || user.name || 'User avatar'}
              />
            ) : (
              <AvatarFallback>{initials}</AvatarFallback>
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56'
        align='end'
        data-testid='avatar-menu-content'
      >
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>
              {user.displayName || user.name}
            </p>
            {user.email && (
              <p className='text-xs leading-none text-muted-foreground'>
                {user.email}
              </p>
            )}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  DropdownMenuLabel  } from '@/components/ui/dropdown-menu;
import { User as UserIcon, Package  } from lucide-react';
import { LogOut } from 'lucide-react, // Assuming lucide-react is used;
export const AvatarMenu: React.FC = () => {const { user, logout, avatarUrl }  = useAuth()if (!user) return null;const initials = (user.displayName || user.name || U').charAt(0).toUpperCase()return (<DropdownMenu>;
      <DropdownMenuTrigger asChild data-testid='avatar-menu-trigger>;
>>>>>>> origin/resolved-merge-conflicts
        <button;
          className='flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
          aria-label='Open user menu';
        >;
          <Avatar className='h-8 w-8'>;
            {avatarUrl ? (<AvatarImage;
                src={avatarUrl}
                alt={user.displayName || user.name || 'User avatar'}
              />;
            ) : (<AvatarFallback>{initials}</AvatarFallback>;
            )}
          </Avatar>;
        </button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;
        className='w-56';
        align='end';
        data-testid='avatar-menu-content';
      >;
        <DropdownMenuLabel className='font-normal'>;
          <div className='flex flex-col space-y-1'>;
            <p className='text-sm font-medium leading-none'>;
              {user.displayName || user.name}
            </p>;
<<<<<<< HEAD
            {user.email && (<p className='text-xs leading-none text-muted-foreground'>;
                {user.email}
              </p>;
=======
            {user.email && (<p className=text-xs leading-none text-muted-foreground'>;
=======
  DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { User as UserIcon, Package } from 'lucide-react'
import { LogOut } from 'lucide-react', // Assuming lucide-react is used

export const AvatarMenu: React.FC = () => {
  const { user, logout, avatarUrl } = useAuth();

  if (!user) return null;

  const initials = (user.displayName || user.name || 'U')
    .charAt(0)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid='avatar-menu-trigger'>
        <button
          className='flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
          aria-label='Open user menu'
        >
          <Avatar className='h-8 w-8'>
            {avatarUrl ? (
              <AvatarImage
                src={avatarUrl}
                alt={user.displayName || user.name || 'User avatar'}
              />
            ) : (
              <AvatarFallback>{initials}</AvatarFallback>
>>>>>>> origin/resolved-merge-conflicts
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56'
        align='end'
        data-testid='avatar-menu-content'
      >
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>
              {user.displayName || user.name}
            </p>
            {user.email && (
              <p className='text-xs leading-none text-muted-foreground'>
>>>>>>> origin/chore/fix-lint-and-merge
                {user.email}
              </p>
            )}
<<<<<<< HEAD
          </div>;
        </DropdownMenuLabel>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem asChild>;
          <Link href='/profile' className='flex items-center'>;
            <UserIcon className='mr-2 h-4 w-4' />;
            <span>Profile</span>;
          </Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link href='/orders' className='flex items-center'>;
            <Package className='mr-2 h-4 w-4' />;
            <span>Orders</span>;
          </Link>;
        </DropdownMenuItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/profile' className='flex items-center'>
            <UserIcon className='mr-2 h-4 w-4' />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/orders' className='flex items-center'>
            <Package className='mr-2 h-4 w-4' />
            <span>Orders</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
          onClick={logout}
          className='flex items-center cursor-pointer'
<<<<<<< HEAD
=======
          className='flex items-center cursor-pointer
>>>>>>> origin/resolved-merge-conflicts
        >
          <LogOut className='mr-2 h-4 w-4' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default AvatarMenu;
<<<<<<< HEAD


=======
<<<<<<< HEAD
          className='flex items-center cursor-pointer';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          className='flex items-center cursor-pointer;
>>>>>>> origin/resolved-merge-conflicts
        >;
          <LogOut className='mr-2 h-4 w-4' />;
          <span>Logout</span>;
        </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
  )}export default AvatarMenu;
<<<<<<< HEAD
';
'
=======
";
"
=======
"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

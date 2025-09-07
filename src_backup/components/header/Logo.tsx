return (
      <Link href="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h-8" width={32} height={32} />;
      </Link>);
  }

<<<<<<< HEAD:src_backup/components/header/Logo.tsx
=======
<<<<<<< HEAD
import React from 'react',
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
import Link from 'next/link'
import { useWhitelabel } from '@/context/WhitelabelContext'
interface LogoProps {
  customLogo?: string
export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string
}
export function Logo({ customLogo }: LogoProps) { const { isWhitelabel, logoUrl, brandName  } = useWhitelabel(),
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)

  // Use the white-label logo if available and no specific customLogo is provided

  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)

  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined)
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';

import React from 'react',;
import Link from 'next/link',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
interface LogoProps {;
  customLogo?: string;
}

export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined),
  
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  if (logoToUse) {
import Link from 'next / link';
import { use_whitelabel } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
export /**
 * Logo - Function description
 */
function Logo() {
  const { is_whitelabel, logo_url, brand_name } = use_whitelabel ();
  // Use the white - label logo if available and no specific custom_logo is provided;
  const logoToUse = custom_logo || (is_whitelabel ? logo_url : null);
  // Use the white - label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (is_whitelabel ? primary_color : undefined);
  // Check condition
if ( {) {
  $2
}
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/header/Logo.tsx
  if (logoToUse) {
    return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
    )
  }
<<<<<<< HEAD
  
  
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  )
  if (logoToUse) {
ursor/fix-website-loading-errors-and-merge-6662
=======

<<<<<<< HEAD:src_backup/components/header/Logo.tsx
=======
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (


  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/header/Logo.tsx
interface LogoProps {;
  customLogo?: string;
export function Logo(): any ({ customLogo }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
<<<<<<< HEAD:src_backup/components/header/Logo.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/header/Logo.tsx
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  if (logoToUse) {;
      <Link href="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />;
      </Link>;
    );
  }
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  return (
    <Link href="/" className="flex items-center">;
      <img src="/logos/zion-logo && logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />;
    </Link>;
  );
  if (logoToUse) {;
    return (
      <Link href='/' className='flex items-center'>;
        <img
    <Link href="/" className="flex items-center">;
      <img src="/logos / zion - logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />;
    </Link>);
  // Check condition
if ( {) {
  $2
}
    return (
      <Link href='/' className='flex items - center'>;
        <img;
          src={logoToUse}
          alt={`${brand_name} Logo`}
          className='h - 8';
          width={32}
          height={32}
<<<<<<< HEAD

        />;
      </Link>;
    );

=======
        />;
      </Link>;
    );
>>>>>>> merged-prs-20250907-203621
  }
  return (
    <Link href='/' className='flex items-center'>;
      <img
        src='/logos/zion-logo && logo.png'
<<<<<<< HEAD
        alt='Zion Logo'
        className='h-8'
        width={32}
        height={32}
=======
<<<<<<< HEAD
  if (logoToUse) {
    return (
      <Link href='/' className='flex items-center'>
        <img
          src={logoToUse}
          alt={`${brandName} Logo`}
          className='h-8'
          width={32}
          height={32}
        />
      </Link>
    )
  }
  return (
    <Link href='/' className='flex items-center'>
      <img
        src='/logos/zion-logo.png'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        alt='Zion Logo'
        className='h-8'
        width={32}
<<<<<<< HEAD:src_backup/components/header/Logo.tsx
        height={32}
=======
        height={32}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
    </Link>;
  );
}

        />;
      </Link>);
  }
  return (
    <Link href='/' className='flex items - center'>;
      <img;
        src='/logos / zion - logo.png';
        alt='Zion Logo';
        className='h - 8';
        width={32}
        height={32}
      />;
    </Link>);
}

<<<<<<< HEAD
import React from 'react',;
import Link from 'next/link',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
;
interface LogoProps {;
  customLogo?:string,;
  ;
}
;
export function Logo({ customLogo } LogoProps) {;
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel(),;
  ;
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl :null),;
  // Use the white-label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor :undefined),;
  ;
  if (logoToUse) {;
    return (;
      <Link href="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />;
      </Link>;
    ),;
  }
  ;
  return (;
    <Link href="/" className="flex items-center">;
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />;
    </Link>;
  ),;}
 </Link>) ;
}return (</Link>) ;
}
      />;
    </Link>;
  );
};
}
}
}
;
;

}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/header/Logo.tsx
>>>>>>> merged-prs-20250907-203621

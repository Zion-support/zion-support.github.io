<<<<<<< HEAD
:src/components/mobile-app/AppStoreBanner.tsx
import React, { useState, useEffect } from "react,
import { safeStorage } from @/utils/safeStorage";
import { X } from 'lucide-react
import { useIsMobile } from "@/hooks/use-mobile;
=======
import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage";
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile";
>>>>>>> origin/chore/fix-lint-and-merge
export const AppStoreBanner: React.FC;
}
import React, { useState, useEffect } from react"
import { safeStorage } from "@/utils/safeStorage
import { X } from lucide-react'import { useIsMobile } from @/hooks/use-mobile"
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  useEffect((,) => {
<<<<<<< HEAD
:src/components/mobile-app/AppStoreBanner.tsx
import { safeStorage } from @/utils/safeStorage",
import { useIsMobile } from "@/hooks/use-mobile,
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {
=======
>>>>>>> origin/chore/fix-lint-and-merge

    // Only show banner on mobile devices and if it hasnt been dismissed before
    if (isMobile && !safeStorage.getItem(appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
<<<<<<< HEAD
:src/components/mobile-app/AppStoreBanner.tsx
      }, 2000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile])
  const dismissBanner = () => {
    setIsVisible(false)
    safeStorage.setItem("appBannerDismissed, true")
  }
  // Only render on mobile devices
  if (!isMobile |!isVisible) return null
  return (
=======
>>>>>>> origin/chore/fix-lint-and-merge
      }, 2000),
      
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile]),
  
    setIsVisible(false),
    safeStorage.setItem("appBannerDismissed, true")
  },
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null,

<<<<<<< HEAD
=======
<<<<<<< HEAD
return (

    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40>
=======
>>>>>>> merged-prs-20250907-203621
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">
>>>>>>> origin/chore/fix-lint-and-merge

      <div className=flex items-center">
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0></div>
        <div className=flex-1">
          <h4 className="font-semibold text-white>Zion AI Marketplace</h4>
          <p className=text-xs text-gray-300">Get the full experience on our app</p>
        </div>
        <div className="flex items-center gap-3>
          <a 
            href=/open-app" 
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium
          >
            View
          </Link>
          <button
            onClick={dismissBanner}
            className=text-gray-400 focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            aria-label="Dismiss banner
          >
            <X className=h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

},
import React, { useState, useEffect } from react,
import { safeStorage } from "@/utils/safeStorage",
import { X } from 'lucide-react;
import { useIsMobile } from @/hooks/use-mobile}
import React, { useState, useEffect } from "react";
import { safeStorage } from @/utils/safeStorage;
import { X } from lucide-react'import { useIsMobile } from "@/hooks/use-mobile";

<<<<<<< HEAD
=======
<<<<<<< HEAD
export const AppStoreBanner: React.FC = () => {
import React, { useState, useEffect } from 'react;
import { X } from lucide-react'import { useIsMobile  } from '@/hooks/use-mobile;
export const AppStoreBanner: React.FC = () => {const [isVisible, setIsVisible] = useState(false)const isMobile = useIsMobile()useEffect((,) => {// Only show banner on mobile devices and if it hasnt been dismissed before;
    if (isMobile && !safeStorage.getItem(appBannerDismissed)) {// Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {setIsVisible(true)}, 2000),return () => clearTimeout(timer)}
    return undefined;
  }, [isMobile]),const dismissBanner = () => {setIsVisible(false),safeStorage.setItem("appBannerDismissed", true)},// Only render on mobile devices;
  if (!isMobile || !isVisible) return null,return (return (<div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
  useEffect(() => {
=======
>>>>>>> merged-prs-20250907-203621
export const AppStoreBanner: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;
>>>>>>> origin/chore/fix-lint-and-merge
    // Only show banner on mobile devices and if it hasn't been dismissed before;
    if (isMobile && !safeStorage.getItem(appBannerDismissed)) {
      // Delay showing the banner by 2 seconds;
        setIsVisible(true);
      }, 2000),
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isMobile]),
    setIsVisible(false),
    safeStorage.setItem("appBannerDismissed", true);
  },
  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;
  return (;

    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;

      <div className=flex items-center>;
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;
        <div className=flex-1>;
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;
          <p className=text-xs text-gray-300>Get the full experience on our app</p>;
        </div>;
        <div className="flex items-center gap-3">;

          <a;
            href=/open-app;
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
            View;
          </a>;
          <button;
            onClick={dismissBanner}
            className=text-gray-400 focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded;
            aria-label="Dismiss banner";
          >;

            <X className=h-5 w-5 />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <X className="h-5 w-5" />;
          >;<X className=h-5 w-5 />;
          </button>;
        </div>;
      </div>;
    </div>;
  )}'"}}// Only render on mobile devices;
  // Check condition;
if (return null) {$2;
}
  return (<div className="fixed bottom - 16 left - 0 right - 0 bg - zion - blue - dark border - t border - zion - purple / 30 p - 3 z - 40>;
      <div className=flex items - center">;
        <div className="w - 12 h - 12 bg - zion - cyan rounded - lg mr - 3 flex - shrink - 0></div>;
        <div className=flex - 1">;
          <h4 className="font - semibold text - white>Zion AI Marketplace</h4>;
          <p className=text - xs text - gray - 300">Get the full experience on our app</p>;
>>>>>>> merged-prs-20250907-203621
:src/components/mobile-app/AppStoreBanner.tsx
  );
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
  )
}
"}}

  // Only render on mobile devices;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className=fixed bottom - 16 left - 0 right - 0 bg - zion - blue - dark border - t border - zion - purple / 30 p - 3 z-40>;
      <div className="flex items-center">;
        <div className=w - 12 h - 12 bg - zion - cyan rounded - lg mr - 3 flex - shrink-0></div>;
        <div className="flex-1">;
          <h4 className=font - semibold text-white>Zion AI Marketplace</h4>;
          <p className="text - xs text - gray-300">Get the full experience on our app</p>;
        </div>;
        <div className=flex items - center gap-3>;
          <a;
            href="/open - app";
            className=px - 4 py - 1 bg - zion - cyan text - zion - blue - dark rounded text - sm font-medium;
          >;
            View;
          </a>;
          <button;
            on_click = {dismiss_banner}
            className="text - gray - 400 focus - visible: outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset-2 rounded";
            aria - label=Dismiss banner;
          >;
            <X className="h - 5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
}}
    </div>)}
'}}))}'";
  );
}
'"
=======
'"},
}
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

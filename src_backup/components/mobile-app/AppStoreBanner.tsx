
:src/components/mobile-app/AppStoreBanner.tsx



:src/components/mobile-app/AppStoreBanner.tsx
import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {


:src/components/mobile-app/AppStoreBanner.tsx
      }, 2000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile])
  const dismissBanner = () => {
    setIsVisible(false)
    safeStorage.setItem("appBannerDismissed", "true")
  }
  // Only render on mobile devices
  if (!isMobile |!isVisible) return null
  return (


return (

    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">


};
import React, { useState, useEffect } from "react";
import { safeStorage } from "@/utils/safeStorage";
import { X } from 'lucide-react'import { useIsMobile } from "@/hooks/use-mobile";

export const AppStoreBanner: React.FC = () => {;
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'import { useIsMobile  } from '@/hooks/use-mobile';
export const AppStoreBanner: React.FC = () => {const [isVisible, setIsVisible] = useState(false)const isMobile = useIsMobile()useEffect((,) => {// Only show banner on mobile devices and if it hasn't been dismissed before;
    if (isMobile && !safeStorage.getItem("appBannerDismissed")) {// Delay showing the banner by 2 seconds;
export const AppStoreBanner: React.FC = () => {
import React, { useState, useEffect } from 'react;
import { X } from lucide-react'import { useIsMobile  } from '@/hooks/use-mobile;
export const AppStoreBanner: React.FC = () => {const [isVisible, setIsVisible] = useState(false)const isMobile = useIsMobile()useEffect((,) => {// Only show banner on mobile devices and if it hasnt been dismissed before;
    if (isMobile && !safeStorage.getItem(appBannerDismissed)) {// Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {setIsVisible(true)}, 2000),return () => clearTimeout(timer)}
    return undefined;
  }, [isMobile]),const dismissBanner = () => {setIsVisible(false),safeStorage.setItem("appBannerDismissed", "true")},// Only render on mobile devices;
  if (!isMobile || !isVisible) return null,return (return (<div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;


            <X className="h-5 w-5" />;
          >;<X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  )}'"}// Only render on mobile devices;
  // Check condition;
if (return null) {$2;
}
  return (<div className="fixed bottom - 16 left - 0 right - 0 bg - zion - blue - dark border - t border - zion - purple / 30 p - 3 z - 40">;
      <div className="flex items - center">;
        <div className="w - 12 h - 12 bg - zion - cyan rounded - lg mr - 3 flex - shrink - 0"></div>;
        <div className="flex - 1">;
          <h4 className="font - semibold text - white">Zion AI Marketplace</h4>;
          <p className="text - xs text - gray - 300">Get the full experience on our app</p>;
:src/components/mobile-app/AppStoreBanner.tsx
  );
};

'"},
}

'"},
}}
    </div>)}
'}}))}'";
  );
}
    </div>)}
'"}))}'";
  );
};
'"


:src/components/mobile-app/DownloadSection.tsx
appStoreUrl = {appStoreUrl,}
                googlePlayUrl = {googlePlayUrl,}
                onAppStoreClick = {(,) => logInfo("App Store button clicked"),}
                onGooglePlayClick = {() => logInfo("Google Play button clicked"),}





              
import { AppStoreButtons } from "./AppStoreButtons";
import { logInfo } from '@/utils/productionLogger';
import React from "react",
import { QrCodeIcon } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
import { logInfo } from '@/utils/productionLogger',
import React from "react",
import { QrCodeIcon } from 'lucide-react'


import React from "react"
import { QrCodeIcon } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
import { logInfo } from '@/utils/productionLogger'

import React from "react"
import { QrCodeIcon } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
import { logInfo } from '@/utils/productionLogger'
:src/components/mobile-app/DownloadSection.tsx
import React from "react",
import { QrCodeIcon } from 'lucide-react'
import { AppStoreButtons  } from "./AppStoreButtons";
import { logInfo  } from "@/utils/productionLogger";
:src/components/mobile-app/DownloadSection.tsx
import { AppStoreButtons  } from "./AppStoreButtons;
import { logInfo  } from @/utils/productionLogger";


:src/components/mobile-app/DownloadSection.tsx
              <AppStoreButtons
                className="mb-8"
                appStoreUrl = {appStoreUrl,}
                googlePlayUrl = {googlePlayUrl,}
                onAppStoreClick = {(,) => logInfo("App Store button clicked"),}
                onGooglePlayClick = {() => logInfo("Google Play button clicked"),}
              />


              

              <div className="text-sm text-gray-400">
;
appStoreUrl = {appStoreUrl}
                googlePlayUrl = {googlePlayUrl}
                onAppStoreClick = {(,) => logInfo("App Store button clicked")}
                onGooglePlayClick = {() => logInfo("Google Play button clicked")}import React from "react",import { QrCodeIcon  } from 'lucide-react';
import { AppStoreButtons } from "./AppStoreButtons",import { logInfo } from '@/utils/productionLogger',import { AppStoreButtons  } from './AppStoreButtons';
import { logInfo  } from '@/utils/productionLogger';
export const DownloadSection: React.FC;
}
import React from 'react';
import { QrCodeIcon } from 'lucide-react'import { AppStoreButtons  } from './AppStoreButtons';
export const DownloadSection: React.FC = () => {// These would typically come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;
  return (<section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">;


              <div className="text - sm text - gray - 400">;
              <div className="text - sm text - gray - 400">;
              <div className=text - sm text - gray - 400>;


            <div className="flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg">;
            <div className=flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg>;
            <div className=flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg>;

:src/components/mobile-app/DownloadSection.tsx
  );
};
                {/* This would be replaced with an actual QR code in production */}
                <QrCodeIcon className="w - full h - full p - 2" />;{/* This would be replaced with an actual QR code in production */}
              </div>;
              <p className="text - center text - xs mt - 2 text - zion - blue - dark">Scan to download</p>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}

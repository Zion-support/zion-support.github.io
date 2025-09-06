<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx

import React from "react";
import { QrCode } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons";
export const QrCodeDownload: React.FC;
}
import React from "react"
import { QrCode } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
origin/cursor/automate-test-improve-and-merge-code-2533
export const QrCodeDownload: React.FC = () => {
<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { QrCode } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
export const QrCodeDownload: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL

=======
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Download <span className="text-zion-cyan">Zion</span> to Your Device
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.
              </p>
<<<<<<< HEAD
              
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======



              


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx
              <AppStoreButtons 
=======
                            <AppStoreButtons 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export const QrCodeDownload: React.FC = () => {};
              <AppStoreButtons;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />

<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD
              
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              
<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx
              <div className="flex gap-2 items-center text-sm text-gray-400">
=======
"
              <div className="flex gap-2 items-center text-sm text-gray-400">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>
                <span>Compatible with iOS 14+ and Android 8.0+</span>
              </div>
            </div>

<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD
<<<<<<< HEAD

            
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

            

<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx
            <div className="flex-shrink-0">
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
=======
"
            <div className="flex-shrink-0">"
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">"
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx
                  <QrCode className="w-full h-full p-4" />
<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                  {/* This would be replaced with an actual QR code in production */}
                </div>
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">
                  Scan to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},
import React from "react",;
import { QrCode } from 'lucide-react';
import { AppStoreButtons } from "./AppStoreButtons",;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx

  // App store links - these would come from environment variables in production;"
  const appStoreUrl = "#", // Replace with actual App Store URL;"
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return ("
    <section className="py - 16 bg - gradient - to - b from - zion - blue to - zion - blue - dark">;"
      <div className="container mx - auto px - 4">;"
        <div className="max - w-5xl mx - auto">;"
          <div className="flex flex - col md:flex - row items - center justify - between gap - 8 md:gap - 12">;"
            <div className="flex - 1">;"
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">;"
                Download <span className="text - zion - cyan">Zion</span> to Your Device;
              </h2>;"
              <p className="text - lg text - gray - 300 mb - 8">;
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.;
              </p>;
              <AppStoreButtons;"
                className="mb - 8";
                appStoreUrl = {appStoreUrl, }
                googlePlayUrl = {googlePlayUrl, }
              />;"
              <div className="flex gap - 2 items - center text - sm text - gray - 400">;"
                <span className="block h - 1 w - 1 rounded - full bg - zion - purple"></span>;
                <span > Compatible with iOS 14+ and Android 8.0+</span>;
              </div>;
            </div>;"
            <div className="flex - shrink - 0">;"
              <div className="bg - white dark: bg - zion - blue - dark p - 6 rounded - xl shadow - lg">;"
                <div className="w - 48 h - 48 flex items - center justify - center bg - white dark:bg - zion - blue rounded - lg">;"
                  <QrCode className="w - full h - full p - 4" />;

                  {/* This would be replaced with an actual QR code in production */}
                </div>;"
                <p className="text - center text - sm mt - 2 text - zion - blue - dark font - medium">;
                  Scan to download;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}


};"
import React from "react";"
import { QrCode } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons";
<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx
export const QrCodeDownload: React.FC = () => {;
<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx
=======
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
                  <QrCode className="w-full h-full p-4" />
                  {/* This would be replaced with an actual QR code in production */}
                </div>
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">
                  Scan to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
},
import React from "react",;
import { QrCode } from 'lucide-react';
import { AppStoreButtons } from "./AppStoreButtons",;export const QrCodeDownload: React.FC = () => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD
  return (;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  return (;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="max-w-5xl mx-auto">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">;
            <div className="flex-1">;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
=======
  // App store links - these would come from environment variables in production;"
  const appStoreUrl = "#", // Replace with actual App Store URL;"
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (;"
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">;"
      <div className="container mx-auto px-4">;"
        <div className="max-w-5xl mx-auto">;"
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">;"
            <div className="flex-1">;"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx
                Download <span className="text-zion-cyan">Zion</span> to Your Device;
              </h2>;"
              <p className="text-lg text-gray-300 mb-8">;
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.;
              </p>;
<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD
=======
=======
              <AppStoreButtons;
=======
              <AppStoreButtons;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx
                className="mb-8";
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;"
              <div className="flex gap-2 items-center text-sm text-gray-400">;"
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>;
                <span>Compatible with iOS 14+ and Android 8.0+</span>;
              </div>;
<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx
            </div>;
            <div className="flex-shrink-0">;
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx

                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            </div>;"
            <div className="flex-shrink-0">;"
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">;"
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx
                  <QrCode className="w-full h-full p-4" />;
                  {/* This would be replaced with an actual QR code in production */}
                </div>;"
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">;
                  Scan to download;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  )
};
"
"
<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD:src/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD

=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx
";
                  {/* This would be replaced with an actual QR code in production */}
                </div>"
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">
                  Scan to download;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<<<<<<< HEAD:src_backup/components/mobile-app/QrCodeDownload.tsx
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  )
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  )

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/QrCodeDownload.tsx
=======
  )'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/QrCodeDownload.tsx

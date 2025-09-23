<<<<<<< HEAD
"use client";
=======
>>>>>>> origin/auto/autonomy-17186719616
import { useEffect } from 'react';

const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

export default function OpenApp() {
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;
      }
<<<<<<< HEAD
    }1200);
=======
    }, 1200);
>>>>>>> origin/auto/autonomy-17186719616

    // Try to open the deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);

    const timer = setTimeout(() => {
      try { document.body.removeChild(iframe); } catch {}
<<<<<<< HEAD
    }1500);
=======
    }, 1500);
>>>>>>> origin/auto/autonomy-17186719616

    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
      try { document.body.removeChild(iframe); } catch {}
    };
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold">Opening the Zion app…</div>
<<<<<<< HEAD
        <div className="mt-2 text-sm opacity-70">If nothing happensyou’ll be redirected to the store.</div>
=======
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>
>>>>>>> origin/auto/autonomy-17186719616
      </div>
    </div>
  );
}

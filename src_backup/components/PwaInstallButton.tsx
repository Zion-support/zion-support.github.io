<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/PwaInstallButton.tsx
import React, { useEffect, useState } from 'react';
import { Button  } from '@/components/ui/button';
import { Loader2 } from 'lucide-react'
import { toast  } from 'sonner';
import { safeStorage  } from '@/utils/safeStorage';
import {logErrorToProduction} from '@/utils/productionLogger';
const DISMISS_KEY = null;

    const inStandalone = window.matchMedia('(display-mode: standalone)').matches
        description: 'Your browser does not support app installation.'})
      return
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react,
import { Button } from @/components/ui/button',
import { Loader2 } from 'lucide-react;
import { toast } from sonner',
import { safeStorage } from '@/utils/safeStorage,
import {logErrorToProduction} from @/utils/productionLogger',
const DISMISS_KEY = 'pwaDismissed,
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useEffect, useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner',;
import { safeStorage } from '@/utils/safeStorage',;
import {logErrorToProduction} from '@/utils/productionLogger',;
const DISMISS_KEY = 'pwaDismissed',;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000, // 7 days;
export const PwaInstallButton: React.FC = () => {;
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),;
  const [isInstalling, setIsInstalling] = useState(false),;
  // Check dismissal flag and register event listener;
  useEffect(() => {;
    if (typeof window === 'undefined') return,;
    const dismissedAt = safeStorage.getItem(DISMISS_KEY),;
    const recentlyDismissed = dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS,;
    const inStandalone = window.matchMedia('(display-mode: standalone)').matches,;
    if (recentlyDismissed || inStandalone) return,;
    const handler = (e: BeforeInstallPromptEvent) => {;
      e.preventDefault(),;
      setPromptEvent(e);
    },;
    window.addEventListener('beforeinstallprompt', handler),;
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []),;
  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {;
    return null;
  }
;
  const onClick = async () => {;
    if (!promptEvent) {;
      toast('Installation not available', {;
        description: 'Your browser does not support app installation.'}),;
      return;

    }
    try {;
      setIsInstalling(true),;
      promptEvent.prompt(),;
      const result = await promptEvent.userChoice,;
      setIsInstalling(false),;
      if (result.outcome === 'accepted') {;
        toast.success('App installed'),;
        setPromptEvent(null);
      } else {;
        toast('Installation dismissed'),;
        safeStorage.setItem(DISMISS_KEY, Date.now().toString()),;
        setPromptEvent(null);
      }
    } catch (err) {;
      setIsInstalling(false),;
      toast('Installation failed', { description: 'Please try again later.' }),;
      logErrorToProduction('PWA install error:', { data: err });
    }
  },
<<<<<<< HEAD


=======
<<<<<<< HEAD

;
const in_standalone = window.match_media ('(display - mode: standalone)').matches,description: 'Your browser does not support app installation.'}),return;const inStandalone = window.matchMedia('(display-mode: standalone)').matches,description: 'Your browser does not support app installation.'}),return;import React, { useEffect, useState } from 'react',import { Button } from '@/components/ui/button',import { Loader2  } from 'lucide-react';
import { toast } from 'sonner',import { safeStorage } from '@/utils/safeStorage',import {logErrorToProduction} from '@/utils/productionLogger',const DISMISS_KEY = 'pwaDismissed',const DISMISS_MS = 7 * 24 * 60 * 60 * 1000, // 7 days;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const in_standalone = window.match_media ('(display - mode: standalone)).matches,description: Your browser does not support app installation.'}),return;const inStandalone = window.matchMedia('(display-mode: standalone)).matches,description: Your browser does not support app installation.'}),return;import React, { useEffect, useState } from 'react,import { Button } from @/components/ui/button',import { Loader2  } from 'lucide-react;
import { toast } from sonner',import { safeStorage } from '@/utils/safeStorage,import {logErrorToProduction} from @/utils/productionLogger',const DISMISS_KEY = 'pwaDismissed,const DISMISS_MS = 7 * 24 * 60 * 60 * 1000, // 7 days;
>>>>>>> origin/resolved-merge-conflicts
export const PwaInstallButton: React.FC = () => {const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),const [isInstalling, setIsInstalling] = useState(false),// Check dismissal flag and register event listener;
  useEffect(() => {if (typeof window === 'undefined') return,const dismissedAt = safeStorage.getItem(DISMISS_KEY),const recentlyDismissed = dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS,const inStandalone = window.matchMedia('(display-mode: standalone)').matches,if (recentlyDismissed || inStandalone) return,const handler = (e: BeforeInstallPromptEvent) => {e.preventDefault(),setPromptEvent(e)},window.addEventListener('beforeinstallprompt', handler),return () => window.removeEventListener('beforeinstallprompt', handler)}, []),if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {return null;
  }const onClick = async () => {if (!promptEvent) {toast('Installation not available', {description: 'Your browser does not support app installation.'}),return;
    }
    try {setIsInstalling(true),promptEvent.prompt(),const result = await promptEvent.userChoice,setIsInstalling(false),if (result.outcome === 'accepted') {toast.success('App installed'),setPromptEvent(null)} else {toast('Installation dismissed'),safeStorage.setItem(DISMISS_KEY, Date.now().toString()),setPromptEvent(null)}
    } catch (err) {setIsInstalling(false),toast('Installation failed', { description: 'Please try again later.' }),logErrorToProduction('PWA install error:', { data: err })}
  },return (<div className='fixed bottom-4 right-4 z-50'>;
      <Button onClick={onClick} disabled={isInstalling}>;
<<<<<<< HEAD
        {isInstalling && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
=======
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick} disabled={isInstalling}>
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {isInstalling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> origin/resolved-merge-conflicts
        Install App
      </Button>
    </div>
  )
},

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { safeStorage } from '@/utils/safeStorage';
import { logErrorToProduction } from '@/utils/productionLogger';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
const DISMISS_KEY = 'pwaDismissed';
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  // Check dismissal flag and register event listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissedAt = safeStorage.getItem(DISMISS_KEY);
    const recentlyDismissed =
      dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS;
    const inStandalone = window.matchMedia(
      '(display-mode: standalone)'
    ).matches;

    if (recentlyDismissed || inStandalone) return;

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {
    return null;
  }

  const onClick = async () => {
    if (!promptEvent) {
      toast('Installation not available', {
        description: 'Your browser does not support app installation.',
      });
      return;
    }
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        Install App;
      </Button>;
    </div>;
  )},export default PwaInstallButton,export default PwaInstallButton,import React, { useEffect, useState } from 'react';
import { Button  } from '@/components/ui/button';
import { toast  } from 'sonner';
import { safeStorage  } from '@/utils/safeStorage';
import { logErrorToProduction  } from '@/utils/productionLogger';
const DISMISS_KEY = 'pwaDismissed';
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000; // 7 days;
export const PwaInstallButton: React.FC = () => {const [promptEvent, setPromptEvent] =;
    useState<BeforeInstallPromptEvent | null>(null)const [isInstalling, setIsInstalling]  = useState(false)// Check dismissal flag and register event listener;
  useEffect(() => {if (typeof window === 'undefined') return;const dismissedAt = safeStorage.getItem(DISMISS_KEY)const recentlyDismissed =;
      dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS;
    const inStandalone = window.matchMedia('(display-mode: standalone)';
    ).matches;if (recentlyDismissed || inStandalone) return;const handler = (e: BeforeInstallPromptEvent) => {e.preventDefault()setPromptEvent(e)}window.addEventListener('beforeinstallprompt', handler)return () => window.removeEventListener('beforeinstallprompt', handler)}, [])if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {return null;
  }const onClick = async () => {if (!promptEvent) {toast('Installation not available', {description: 'Your browser does not support app installation.'})return;
    }
    try {setIsInstalling(true)promptEvent.prompt()const result = await promptEvent.userChoice;
      setIsInstalling(false)if (result.outcome === 'accepted') {toast.success('App installed')setPromptEvent(null)} else {toast('Installation dismissed')safeStorage.setItem(DISMISS_KEY, Date.now().toString())setPromptEvent(null)}
    } catch (err) {setIsInstalling(false)toast('Installation failed', { description: 'Please try again later.' })logErrorToProduction('PWA install error:', { data: err })}
  }return (<div className='fixed bottom-4 right-4 z-50'>;
      <Button onClick={onClick} disabled={isInstalling}>;
<<<<<<< HEAD
=======
=======
const DISMISS_KEY = 'pwaDismissed';
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export const PwaInstallButton: React.FC = () => {
  const [promptEvent, setPromptEvent] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalling, setIsInstalling] = useState(false);

  // Check dismissal flag and register event listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissedAt = safeStorage.getItem(DISMISS_KEY);
    const recentlyDismissed =
      dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS;
    const inStandalone = window.matchMedia(
      '(display-mode: standalone)'
    ).matches;

    if (recentlyDismissed || inStandalone) return;

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {
    return null;
  }

  const onClick = async () => {
    if (!promptEvent) {
      toast('Installation not available', {
        description: 'Your browser does not support app installation.',
      });
      return;
    }
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {
      setIsInstalling(true);
      promptEvent.prompt();
      const result = await promptEvent.userChoice;
      setIsInstalling(false);
      if (result.outcome === 'accepted') {
        toast.success('App installed');
        setPromptEvent(null);
      } else {
        toast('Installation dismissed');
        safeStorage.setItem(DISMISS_KEY, Date.now().toString());
        setPromptEvent(null);
      }
    } catch (err) {
      setIsInstalling(false);
      toast('Installation failed', { description: 'Please try again later.' });
      logErrorToProduction('PWA install error:', { data: err });
    }
  };

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <Button onClick={onClick} disabled={isInstalling}>
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
        {isInstalling && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
        Install App
      </Button>
    </div>
  );
};
export default PwaInstallButton;
<<<<<<< HEAD


=======
<<<<<<< HEAD
'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
'
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
        Install App;
      </Button>;
    </div>;
  )}export default PwaInstallButton;
';
=======
'
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

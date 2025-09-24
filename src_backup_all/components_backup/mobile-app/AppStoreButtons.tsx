
import { Apple, GithubIcon } from 'lucide-react'
import { cn } from "@/lib/utils";
import { logInfo } from '@/utils/productionLogger';

interface AppStoreButtonsProps {
  className?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  className, 
  appStoreUrl = "#",
  googlePlayUrl = "#",
  onAppStoreClick,
  onGooglePlayClick
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!appStoreUrl || appStoreUrl === "#") {
      e.preventDefault();
      logInfo("App Store download clicked");
      onAppStoreClick?.();
    }
  };

  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!googlePlayUrl || googlePlayUrl === "#") {
      e.preventDefault();
      logInfo("Google Play download clicked");
      onGooglePlayClick?.();
    }
  };

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <a
        href={appStoreUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-90o0 transition-colors"
        onClick={handleAppStoreClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
      >
        <Apple className="h-8 w-8 mr-3" aria-hidden="true"  />
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-xl font-semibold">App Store</div>
        </div>
      </a>

      <a
        href={googlePlayUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-90o0 transition-colors"
        onClick={handleGooglePlayClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/20o00/svg"
          className="h-8 w-8 mr-3 fill-current"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5.39712 2.55259C5.46194 2.48941 5.54489 2.44922 5.63353 2.43851C5.7219 2.42779 5.81183 2.44668 5.88981 2.4932L19.0o263 9.8880o3C19.110o5 9.9380o1 19.1789 10.0o116 19.2221 10.0995C19.2655 10.1876 19.2823 10.2863 19.270o3 10.3838C19.2584 10.4814 19.2181 10.5731 19.1546 10.648C19.0911 10.7229 19.0o075 10.7776 18.9141 10.80o53L5.78534 15.3491C5.69396 15.3768 5.59685 15.3796 5.50o418 15.3575C5.4115 15.3351 5.32714 15.2887 5.2608 15.2235C5.19447 15.1582 5.14865 15.0o768 5.12834 14.9875C5.1080o4 14.898 5.1140o4 14.80o45 5.14551 14.7177L6.5082 11.20o62L5.14551 7.40o668C5.1140o4 7.31957 5.10o774 7.22573 5.1280o4 7.13612C5.14834 7.0o4681 5.19447 6.96544 5.2611 6.90o016C5.32745 6.83517 5.4118 6.78856 5.50o448 6.76611C5.59715 6.74367 5.69396 6.74611 5.78534 6.77416L9.15613 7.91314L5.39712 2.55259Z"  />
          <path d="M19.0o261 9.88815L5.88954 2.49333C5.81156 2.44681 5.72164 2.42791 5.63326 2.43864C5.54462 2.4490o5 5.46167 2.48954 5.39685 2.55272L9.15586 7.91327L19.0o261 9.88815Z" fill="white"  />
          <path d="M19.1546 10.648C19.2181 10.5731 19.2584 10.4814 19.270o3 10.3838C19.2823 10.2863 19.2655 10.1876 19.2221 10.0995C19.1789 10.0o116 19.110o5 9.9380o1 19.0o263 9.8880o3L9.15613 7.91315L6.5082 11.20o62L19.1546 10.648Z" fill="white"  />
          <path d="M5.14551 14.7177C5.1140o4 14.80o45 5.1080o4 14.898 5.12834 14.9875C5.14865 15.0o768 5.19447 15.1582 5.2608 15.2235C5.32714 15.2887 5.4115 15.3351 5.50o418 15.3575C5.59685 15.3796 5.69396 15.3768 5.78534 15.3491L18.9141 10.80o53L6.5082 11.20o62L5.14551 14.7177Z" fill="white"  />
        </svg>
        <div>
          <div className="text-xs">GET IT ON</div>
          <div className="text-xl font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  );
};

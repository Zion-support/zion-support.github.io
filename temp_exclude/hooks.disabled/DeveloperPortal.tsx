const [activeTab, setActiveTab] = useState<string>("documentation"),
  
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx
  // Define the tabs
  const tabs: TabDefinition[] = [

<<<<<<< HEAD
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",
=======

    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
=======
  // Define the tabs;
  const tabs: TabDefinition[] = []
"
    { id: "documentation", label: "Documentation", icon: BookOpen },"
    { id: "api-keys", label: "API Keys", icon: Key },"
    { id: "webhooks", label: "Webhooks", icon: Webhook },"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx
    { id: "logs", label: "Logs", icon: List }],


  return ("
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">"
      <div className="mb-8">"
        <h1 className="text-3xl font-bold text-white flex items-center">"
          <Terminal className="mr-3" size={32} />

          Developer Portal;
        </h1>"
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>

"
import { useState } from "react";"
import { useAuth } from "@/hooks/useAuth";
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'
";
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";"
import { WebhooksManager } from "@/components/developers/WebhooksManager";"
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";"
import { ApiLogs } from "@/components/developers/ApiLogs";
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface TabDefinition {
=======
interface TabDefinition {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx
  id: string,
  label: string,
  icon: LucideIcon;
}


export function DeveloperPortal() { const { user  } = useAuth(),"
  const [ activeTab, setActiveTab ] = useState<string>("documentation"),

  ;
  // Define the tabs;
  const tabs: TabDefinition[] = ["
    { id: "documentation", label: "Documentation", icon: BookOpen },"
    { id: "api-keys", label: "API Keys", icon: Key },"
    { id: "webhooks", label: "Webhooks", icon: Webhook },"
    { id: "logs", label: "Logs", icon: List }],
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
=======
  return ("
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">"
      <div className="mb-8">"
        <h1 className="text-3xl font-bold text-white flex items-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx
          <Terminal className="mr-3" size={32} />
          Developer Portal;
        </h1>"
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
      {/* Tabs */}"
      <div className="border-b border-zinc-800 mb-8">"
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {}
            const Icon = tab.icon,
            return (
              <button;
                key={tab.id}
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="mr-2" />
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",;
import { WebhooksManager } from "@/components/developers/WebhooksManager",;
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",;
import { ApiLogs } from "@/components/developers/ApiLogs",;
=======
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${}
                  activeTab === tab.id"
                    ? "text-white border-zion-purple""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"'
import { useState } from 'react';'
import { use_auth } from '@/hooks / use_auth';
import {}
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
  Webhook,';
} from 'lucide-react';'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
import { ApiKeysManager } from '@/components / developers / ApiKeysManager';'
import { WebhooksManager } from '@/components / developers / WebhooksManager';'
import { ApiDocumentation } from '@/components / developers / ApiDocumentation';'
import { ApiLogs } from '@/components / developers / ApiLogs';
interface TabDefinition {}
  id: string;
  label: string;
  icon: LucideIcon;
export /**;
 * DeveloperPortal - Function description;
 */
function DeveloperPortal() {}
  const { user } = use_auth ();'
  const [active_tab, setActiveTab] = useState < string>('documentation');
  // Define the tabs;
  const tabs: TabDefinition[] = [;'
    { id: 'documentation', label: 'Documentation', icon: BookOpen },'
    { id: 'api - keys', label: 'API Keys', icon: Key },'
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },'
    { id: 'logs', label: 'Logs', icon: List },
  ];
  return ('
    <div className='w - full max - w-7xl mx - auto p - 4 md:p - 8'>;'
      <div className='mb - 8'>;'
        <h1 className='text - 3xl font - bold text - white flex items - center'>;'
          <Terminal className='mr - 3' size={32} />;
          Developer Portal;
        </h1>;'
        <p className='text - zinc - 400 mt - 2'>;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
      {/* Tabs */}'
      <div className='border - b border - zinc - 800 mb - 8'>;'
        <div className='flex flex - wrap -mb - px'>;
          {tabs.map (tab => {}
            const Icon = tab.icon;`
                on_click={() => setActiveTab (tab.id)}                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${}
                  active_tab === tab.id;"
                    ? "text - white border - zion - purple";"
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";`
                }`}
                on_click = {(, ) => setActiveTab (tab.id), }
              >;'
                <Icon size={16} className='mr - 2' />;
                {tab.label}
              </button>);
          })}

'
import { useState } from 'react';'
import { useAuth } from '@/hooks/useAuth';
import {;
  BookOpen,;
  Code,;
  Key,;
  List,;
  LucideIcon,;
  Terminal,;
  Webhook,;'
} from 'lucide-react';'
import { ProtectedRoute } from '@/components/ProtectedRoute';'
import { ApiKeysManager } from '@/components/developers/ApiKeysManager';'
import { WebhooksManager } from '@/components/developers/WebhooksManager';'
import { ApiDocumentation } from '@/components/developers/ApiDocumentation';'
import { ApiLogs } from '@/components/developers/ApiLogs';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx
interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx
}
;
export function DeveloperPortal() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState<string>("documentation"),;
  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: "documentation", label: "Documentation", icon: BookOpen },;
    { id: "api-keys", label: "API Keys", icon: Key },;
    { id: "webhooks", label: "Webhooks", icon: Webhook },;
    { id: "logs", label: "Logs", icon: List }];
  return (;
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">;
      <div className="mb-8">;
        <h1 className="text-3xl font-bold text-white flex items-center">;
          <Terminal className="mr-3" size={32} />;
          Developer Portal;
        </h1>;
        <p className="text-zinc-400 mt-2">;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;
          {tabs.map((tab) => {;
            const Icon = tab.icon;
            return (;
              <button;
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;
                    ? "text-white border-zion-purple";
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
                }`}
                onClick={() => setActiveTab(tab.id)}
              >;
                <Icon size={16} className="mr-2" />;
                {tab.label}
=======

export function DeveloperPortal() { return null; }
  const { user } = useAuth();'
  const [activeTab, setActiveTab] = useState<string>('documentation');

  // Define the tabs;
  const tabs: TabDefinition[] = [;'
    { id: 'documentation', label: 'Documentation', icon: BookOpen },;'
    { id: 'api-keys', label: 'API Keys', icon: Key },;'
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },;'
    { id: 'logs', label: 'Logs', icon: List },;
  ];

  return ('
    <div className='w-full max-w-7xl mx-auto p-4 md:p-8'>;'
      <div className='mb-8'>;'
        <h1 className='text-3xl font-bold text-white flex items-center'>;'
          <Terminal className='mr-3' size={32} />;
          Developer Portal;
        </h1>;'
        <p className='text-zinc-400 mt-2'>;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;

      {/* Tabs */}'
      <div className='border-b border-zinc-800 mb-8'>;'
        <div className='flex flex-wrap -mb-px'>;
          {tabs && tabs.map(tab => {;
            const Icon = tab && tab.icon;
`
                onClick={() => setActiveTab(tab && tab.id)}                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab && tab.id;"
                    ? "text-white border-zion-purple";"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";`
                }`}
                onClick = {(,) => setActiveTab(tab && tab.id),}
              >;'
                <Icon size={16} className='mr-2' />;
                {tab && tab.label}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx
              </button>;
            );
          })}
        </div>;
      </div>;
      {/* Tab content */}
<<<<<<< HEAD
      <div>
=======

        </div>;
      </div>;
      {/* Tab content */}
      <div>;'
        {active_tab === 'documentation' && <ApiDocumentation />}'
        {active_tab === 'api - keys' && <ApiKeysManager />}'
        {active_tab === 'webhooks' && <WebhooksManager />}'
        {active_tab === 'logs' && <ApiLogs />}
      </div>;
    </div>);
                on_click={() => setActiveTab (tab.id)}
              >;"
                <Icon size={16} className="mr - 2" />;

                {tab.label}
              </button>);
          })}

      </div>;
    </div>;
  );
                onClick={() => setActiveTab(tab && tab.id)}
              >;"
                <Icon size={16} className="mr-2" />;
                {tab.label}
              </button>;
            );
          })}
        </div>;
      </div>;


      {/* Tab content */}
      <div>;
      <div>
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
=======
"
        {activeTab === "documentation" && <ApiDocumentation />}"
        {activeTab === "api-keys" && <ApiKeysManager />}"
        {activeTab === "webhooks" && <WebhooksManager />}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx
        {activeTab === "logs" && <ApiLogs />}
<<<<<<< HEAD
      </div>
    </div>
  )
}
=======






export default function ProtectedDeveloperPortal() {}
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
;
      </div>;
    </div>;
  );
}

  )

};
};
  );
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx
export default function ProtectedDeveloperPortal() {;
  return (;
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
=======

export default function ProtectedDeveloperPortal() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx
}
<<<<<<< HEAD
=======
}
  )
}

  );
}

        </div>;
      </div>;
      {/* Tab content */}
      <div>;"
        {active_tab === "documentation" && <ApiDocumentation />}"
        {active_tab === "api - keys" && <ApiKeysManager />}"
        {active_tab === "webhooks" && <WebhooksManager />}"
        {active_tab === "logs" && <ApiLogs />}
      </div>;
    </div>);
}
export default /**;
 * ProtectedDeveloperPortal - Function description;
 */
function ProtectedDeveloperPortal() {}
  return (
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>);
}
}
  );
}
<<<<<<< HEAD:temp_exclude/hooks.disabled/DeveloperPortal.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/DeveloperPortal.tsx

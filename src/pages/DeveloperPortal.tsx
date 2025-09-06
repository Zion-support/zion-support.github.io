<<<<<<< HEAD


  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import {
  BookOpen
  Code
  Key
  List
  LucideIcon
  Terminal
  Webhook
} from 'lucide-react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ApiKeysManager } from '@/components/developers/ApiKeysManager'
import { WebhooksManager } from '@/components/developers/WebhooksManager'
import { ApiDocumentation } from '@/components/developers/ApiDocumentation'
import { ApiLogs } from '@/components/developers/ApiLogs'

interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon
export function DeveloperPortal() {
<<<<<<< HEAD
  const { user } = useAuth();
=======
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<string>('documentation')
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'api-keys', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List },
  ]
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],


  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          Developer Portal
        </h1>
        <p className='text-zinc-400 mt-2'>
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>


import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";
import { WebhooksManager } from "@/components/developers/WebhooksManager";
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";
import { ApiLogs } from "@/components/developers/ApiLogs";
interface TabDefinition {
  id: string,
  label: string,
  icon: LucideIcon
}


export function DeveloperPortal() { const { user  } = useAuth(),
  const [ activeTab, setActiveTab ] = useState<string>("documentation"),

  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />
          Developer Portal
        </h1>
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
=======


      
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon,
            return (
              <button
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
=======
import { useState } from 'react';
import { use_auth } from '@/hooks / use_auth';
import {
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
  Webhook,
} from 'lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { ApiKeysManager } from '@/components / developers / ApiKeysManager';
import { WebhooksManager } from '@/components / developers / WebhooksManager';
import { ApiDocumentation } from '@/components / developers / ApiDocumentation';
import { ApiLogs } from '@/components / developers / ApiLogs';
interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon;
export /**
 * DeveloperPortal - Function description
 */
function DeveloperPortal() {
  const { user } = use_auth ();
  const [active_tab, setActiveTab] = useState < string>('documentation');
  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'api - keys', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List },
  ];
  return (
    <div className='w - full max - w-7xl mx - auto p - 4 md:p - 8'>;
      <div className='mb - 8'>;
        <h1 className='text - 3xl font - bold text - white flex items - center'>;
          <Terminal className='mr - 3' size={32} />;
          Developer Portal;
        </h1>;
        <p className='text - zinc - 400 mt - 2'>;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
      {/* Tabs */}
      <div className='border - b border - zinc - 800 mb - 8'>;
        <div className='flex flex - wrap -mb - px'>;
          {tabs.map (tab => {
            const Icon = tab.icon;
                on_click={() => setActiveTab (tab.id)}                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${
                  active_tab === tab.id;
                    ? "text - white border - zion - purple";
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                }`}
                on_click = {(, ) => setActiveTab (tab.id), }
              >;
                <Icon size={16} className='mr - 2' />;
                {tab.label}
              </button>);
          })}


import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import {;
  BookOpen,;
  Code,;
  Key,;
  List,;
  LucideIcon,;
  Terminal,;
  Webhook,;
} from 'lucide-react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ApiKeysManager } from '@/components/developers/ApiKeysManager';
import { WebhooksManager } from '@/components/developers/WebhooksManager';
import { ApiDocumentation } from '@/components/developers/ApiDocumentation';
import { ApiLogs } from '@/components/developers/ApiLogs';
interface TabDefinition {;
  id: string;
  label: string;
  icon: LucideIcon;

export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('documentation');

  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: 'documentation', label: 'Documentation', icon: BookOpen },;
    { id: 'api-keys', label: 'API Keys', icon: Key },;
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },;
    { id: 'logs', label: 'Logs', icon: List },;
  ];

  return (
    <div className='w-full max-w-7xl mx-auto p-4 md:p-8'>;
      <div className='mb-8'>;
        <h1 className='text-3xl font-bold text-white flex items-center'>;
          <Terminal className='mr-3' size={32} />;
          Developer Portal;
        </h1>;
        <p className='text-zinc-400 mt-2'>;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;

      {/* Tabs */}
      <div className='border-b border-zinc-800 mb-8'>;
        <div className='flex flex-wrap -mb-px'>;
          {tabs && tabs.map(tab => {;
            const Icon = tab && tab.icon;

                onClick={() => setActiveTab(tab && tab.id)}                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab && tab.id;
                    ? "text-white border-zion-purple";
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
                }`}
                onClick = {(,) => setActiveTab(tab && tab.id),}
              >;
                <Icon size={16} className='mr-2' />;
                {tab && tab.label}
              </button>;
            );
          })}
        </div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Tab content */}
<<<<<<< HEAD

        </div>;
      </div>;
      {/* Tab content */}
      <div>;
        {active_tab === 'documentation' && <ApiDocumentation />}
        {active_tab === 'api - keys' && <ApiKeysManager />}
        {active_tab === 'webhooks' && <WebhooksManager />}
        {active_tab === 'logs' && <ApiLogs />}
      </div>;
    </div>);
                on_click={() => setActiveTab (tab.id)}
              >;
                <Icon size={16} className="mr - 2" />;

                {tab.label}
              </button>);
          })}

      </div>;
    </div>;
  );
                onClick={() => setActiveTab(tab && tab.id)}
              >;
                <Icon size={16} className="mr-2" />;
                {tab && tab.label}
              </button>;
            );
          })}
        </div>;
      </div>;


      {/* Tab content */}
      <div>;
=======
      <div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      <div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
<<<<<<< HEAD



=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
<<<<<<< HEAD

      </div>;
    </div>;
  );
}

=======
  )
<<<<<<< HEAD
}
}
  )
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  )

};
};
  );
};
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
;

export default function ProtectedDeveloperPortal() {;
  return (
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD
}
  )
}

  );
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        </div>;
      </div>;
      {/* Tab content */}
      <div>;
        {active_tab === "documentation" && <ApiDocumentation />}
        {active_tab === "api - keys" && <ApiKeysManager />}
        {active_tab === "webhooks" && <WebhooksManager />}
        {active_tab === "logs" && <ApiLogs />}
      </div>;
    </div>);
}
export default /**
 * ProtectedDeveloperPortal - Function description
 */
function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>);
}
}
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

<<<<<<< HEAD
<<<<<<< HEAD
const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [


=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",
interface TabDefinition {
  id: string,
  label: string,
  icon: LucideIcon
}

export function DeveloperPortal() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
<<<<<<< HEAD
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen }
    { id: 'api-keys', label: 'API Keys', icon: Key }
    { id: 'webhooks', label: 'Webhooks', icon: Webhook }
    { id: 'logs', label: 'Logs', icon: List }
  ]
  return (

    <div className='w-full max-w-7xl mx-auto p-4 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-white flex items-center'>
          <Terminal className='mr-3' size={32} />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          Developer Portal
        </h1>
        <p className='text-zinc-400 mt-2'>
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
<<<<<<< HEAD


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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],
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

<<<<<<< HEAD

=======
      {/* Tabs */}
      <div className='border-b border-zinc-800 mb-8'>
        <div className='flex flex-wrap -mb-px'>
          {tabs.map(tab => {
            const Icon = tab.icon
                onClick={() => setActiveTab(tab.id)}                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick = {(,) => setActiveTab(tab.id),}
              >
                <Icon size={16} className='mr-2' />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
        {activeTab === 'documentation' && <ApiDocumentation />}
        {activeTab === 'api-keys' && <ApiKeysManager />}
        {activeTab === 'webhooks' && <WebhooksManager />}
        {activeTab === 'logs' && <ApiLogs />}
      </div>
    </div>
  )
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon,
            return (
              <button
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
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
                }`}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
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
interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
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
                onClick = {(,) => setActiveTab(tab && tab.id),}
              >;
                <Icon size={16} className='mr-2' />;
                {tab && tab.label}
              </button>;
            );
          })}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>;
      </div>;

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
<<<<<<< HEAD


      {/* Tab content */}
      <div>;
      <div>

=======
      {/* Tab content */}
      <div>;
      <div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      <div>

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
<<<<<<< HEAD
<<<<<<< HEAD






export default function ProtectedDeveloperPortal() {
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>
    </div>
  )
}


<<<<<<< HEAD
export default function ProtectedDeveloperPortal() {
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




export default function ProtectedDeveloperPortal() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
<<<<<<< HEAD

      </div>;
    </div>;
  );
}

  )
<<<<<<< HEAD

};
};
  );
};

;

export default function ProtectedDeveloperPortal() {;
  return (
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
}
  )
}
<<<<<<< HEAD
=======
;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};
};
  );
};
<<<<<<< HEAD
=======

  )
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
export default function ProtectedDeveloperPortal() {;
  return (;
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
;
}
}
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  );
}

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
<<<<<<< HEAD
;
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

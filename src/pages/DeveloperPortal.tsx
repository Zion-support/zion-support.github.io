<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD

=======
  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
ursor/fix-website-loading-errors-and-merge-6662
          Developer Portal
        </h1>
        <p className='text-zinc-400 mt-2'>
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>


import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
>>>>>>> import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";
import { WebhooksManager } from "@/components/developers/WebhooksManager";
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";
import { ApiLogs } from "@/components/developers/ApiLogs";
=======
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

import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TabDefinition {
  id: string,
  label: string,
  icon: LucideIcon
}

export function DeveloperPortal() {
  const { user } = useAuth(),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
<<<<<<< HEAD

  return (
=======
>>>>>>>   const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Developer Portal
=======
>>>>>>>           Developer Portal
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </h1>
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

        {activeTab === "documentation" && <ApiDocumentation />}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Tabs */}
      <div className='border-b border-zinc-800 mb-8'>
        <div className='flex flex-wrap -mb-px'>
          {tabs.map(tab => {
            const Icon = tab.icon
                onClick={() => setActiveTab(tab.id)}                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
<<<<<<< HEAD
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
>>>>>>>         {activeTab === "documentation" && <ApiDocumentation />}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
                onClick={() => setActiveTab(tab.id)}
              >;
                <Icon size={16} className="mr-2" />;
                {tab.label}
              </button>;
            );
          })}
        </div>;
      </div>;
      {/* Tab content */}
      <div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {activeTab === "documentation" && <ApiDocumentation />}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function ProtectedDeveloperPortal() {
=======
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}





>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
xport default function ProtectedDeveloperPortal() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
}
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;

=======
=======
};
};
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function ProtectedDeveloperPortal() {;
  return (;
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

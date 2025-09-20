<<<<<<< HEAD
import React, { useState } from 'react' 
import { BookOpen, Key, Webhook, List } from 'lucide-react' 

interface TabDefinition {
  id: string 
  label: string 
  icon: React.ComponentType 
}
=======
<<<<<<< HEAD
import React from "react";

interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon;
}
export function DeveloperPortal() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");

  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'api-keys', label: 'API Keys', icon: Key }
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Developer Portal</h1>
          
          <div className="flex space-x-1 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick = {() => setActiveTab(tab.id)}
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
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
import React from 'react';
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e

export default function DeveloperPortal() {
const [activeTab, setActiveTab] = useState<string>("documentation") 

const tabs: TabDefinition[] = [
{ id: 'documentation', label: 'Documentation', icon: BookOpen },
{ id: 'api-keys', label: 'API Keys', icon: Key },
{ id: 'webhooks', label: 'Webhooks', icon: Webhook },
{ id: 'logs', label: 'Logs', icon: List }
] 

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Developer Portal</h1>

        <div className="bg-zion-blue-dark rounded-lg p-6">
          <div className="flex space-x-4 mb-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon 
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-zion-cyan text-white"
: "text-zion-slate-light hover:text-white hover:bg-zion-blue" 
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Developer Portal</h1>
        <p className="text-lg text-gray-600">API documentation and tools...</p>
      </div>
    </div>
  );
<<<<<<< HEAD
{ id: "documentation", label: "Documentation", icon: BookOpen },
{ id: "api-keys", label: "API Keys", icon: Key }
{ id: "webhooks", label: "Webhooks", icon: Webhook },
{ id: "logs", label: "Logs", icon: List }
];
return (activeTab === tab.id;
? "text-white border-zion-purple";
: "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
}`}
> 
<IconComponent className="h-4 w-4" /> 
<span>{tab.label}</span> 
</button> 
) 
})}
<<<<<<< HEAD
</div> 

<div className="text-white"> 
{activeTab === 'documentation' && (
<div> 
<h2 className="text-2xl font-bold mb-4">API Documentation</h2> 
<p className="text-zion-slate-light"> 
Welcome to the Zion API documentation. Here you'll find everything you need to integrate with our platform. 
</p> 
</div> 
)}

{activeTab === 'api-keys' && (
<div> 
<h2 className="text-2xl font-bold mb-4">API Keys</h2> 
<p className="text-zion-slate-light"> 
Manage your API keys for accessing our services. 
</p> 
</div> 
)}

{activeTab === 'webhooks' && (
<div> 
<h2 className="text-2xl font-bold mb-4">Webhooks</h2> 
<p className="text-zion-slate-light"> 
Configure webhooks to receive real-time updates. 
</p> 
</div> 
)}

{activeTab === 'logs' && (
<div> 
<h2 className="text-2xl font-bold mb-4">Activity Logs</h2> 
<p className="text-zion-slate-light"> 
View your API usage and activity logs. 
</p> 
</div> 
)}
</div> 
</div> 
</div> 
</div> 
) 
=======
</div>;
</div>;
{/* Tab content */}
<div>;
{activeTab === "documentation" && <ApiDocumentation />}
{activeTab === "api-keys" && <ApiKeysManager />}
{activeTab === "webhooks" && <WebhooksManager />}
{activeTab === "logs" && <ApiLogs />}
</div>;
</div>;
)
onClick={() => setActiveTab(tab.id)}
>;
<Icon size={16} className="mr-2" />;
{tab.label}
</button>;
)
})}
</div>;
</div>;
{/* Tab content */}
<div>;
{activeTab === "documentation" && <ApiDocumentation />}
{activeTab === "api-keys" && <ApiKeysManager />}
{activeTab === "webhooks" && <WebhooksManager />}
{activeTab === "logs" && <ApiLogs />}
</div>;
</div>;
)
}
export default function ProtectedDeveloperPortal() {
return (
<ProtectedRoute>;
<DeveloperPortal />;
</ProtectedRoute>;
)
}
}
)
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
}
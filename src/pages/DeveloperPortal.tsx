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

export default function DeveloperPortal() {
  return (
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
}`}
onClick = {() => setActiveTab(tab.id)}
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
}
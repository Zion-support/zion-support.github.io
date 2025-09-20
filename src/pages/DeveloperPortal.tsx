import React, { useState } from 'react';
import { BookOpen, Key, Webhook, List, LucideIcon } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

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
    { id: 'api-keys', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Developer Portal</h1>
        
        <div className="flex space-x-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                activeTab === tab.id
                  ? "text-white border-zion-purple"
                  : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2 inline" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6">
          {activeTab === 'documentation' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">API Documentation</h2>
              <p>Documentation content goes here...</p>
            </div>
          )}
          
          {activeTab === 'api-keys' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">API Keys</h2>
              <p>API Keys management goes here...</p>
            </div>
          )}
          
          {activeTab === 'webhooks' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Webhooks</h2>
              <p>Webhooks configuration goes here...</p>
            </div>
          )}
          
          {activeTab === 'logs' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Logs</h2>
              <p>Logs viewer goes here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
      </div>
    </div>
  )
}
export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  )
}
}
  )
}
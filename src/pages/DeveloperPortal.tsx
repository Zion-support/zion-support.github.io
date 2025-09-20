import React, { useState } from 'react';
import { BookOpen, Key, Webhook, List } from 'lucide-react';

interface TabDefinition {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export function DeveloperPortal() {
  const [activeTab, setActiveTab] = useState<string>("documentation");

  const tabs: TabDefinition[] = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'api-keys', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Developer Portal</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-700 mb-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "text-white border-zion-purple"
                      : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={16} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "documentation" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">API Documentation</h2>
              <p>Welcome to our API documentation. Here you'll find comprehensive guides and references.</p>
            </div>
          )}
          {activeTab === "api-keys" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">API Keys Management</h2>
              <p>Manage your API keys and access tokens here.</p>
            </div>
          )}
          {activeTab === "webhooks" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Webhooks Configuration</h2>
              <p>Configure webhooks to receive real-time updates.</p>
            </div>
          )}
          {activeTab === "logs" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">API Logs</h2>
              <p>View and monitor your API usage logs.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProtectedDeveloperPortal() {
  return (
    <DeveloperPortal />
  );
}
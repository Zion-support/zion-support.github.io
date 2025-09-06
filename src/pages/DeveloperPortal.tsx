import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import {
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
  Webhook,;
} from 'lucide-react';

interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon;

export function DeveloperPortal() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('documentation');

  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'api-keys', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List },
  ];

  return (
    <div className='w-full max-w-7xl mx-auto p-4 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-white flex items-center'>
          <Terminal className='mr-3' size={32} />
          Developer Portal
        </h1>
        <p className='text-zinc-400 mt-2'>
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>

      {/* Tabs */}

              >
                <Icon size={16} className='mr-2' />
                {tab.label}
              </button>
            );
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
  );

export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  );
}
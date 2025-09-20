import React, { useState } from 'react' 
import { BookOpen, Key, Webhook, List } from 'lucide-react' 

interface TabDefinition {
  id: string 
  label: string 
  icon: React.ComponentType 
}

export default function DeveloperPortal() {
const [activeTab, setActiveTab] = useState<string>("documentation") 

const tabs: TabDefinition[] = [
{ id: 'documentation', label: 'Documentation', icon: BookOpen },
{ id: 'api-keys', label: 'API Keys', icon: Key },
{ id: 'webhooks', label: 'Webhooks', icon: Webhook },
{ id: 'logs', label: 'Logs', icon: List }
] 

  return (
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
}`}
> 
<IconComponent className="h-4 w-4" /> 
<span>{tab.label}</span> 
</button> 
) 
})}
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
}
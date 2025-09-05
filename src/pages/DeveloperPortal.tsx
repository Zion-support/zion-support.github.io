
<<<<<<< HEAD
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
import { useState } from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { ApiKeysManager } from &quot;@/components/developers/ApiKeysManager&quot;;
import { WebhooksManager } from &quot;@/components/developers/WebhooksManager&quot;;
import { ApiDocumentation } from &quot;@/components/developers/ApiDocumentation&quot;;
import { ApiLogs } from &quot;@/components/developers/ApiLogs&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TabDefinition {
  id: string,
  label: string,
  icon: LucideIcon
}

export function DeveloperPortal() {
<<<<<<< HEAD
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],
=======
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>(&quot;documentation&quot;);
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: &quot;documentation&quot;, label: &quot;Documentation&quot;, icon: BookOpen },
    { id: &quot;api-keys&quot;, label: &quot;API Keys&quot;, icon: Key },
    { id: &quot;webhooks&quot;, label: &quot;Webhooks&quot;, icon: Webhook },
    { id: &quot;logs&quot;, label: &quot;Logs&quot;, icon: List }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;w-full max-w-7xl mx-auto p-4 md:p-8&quot;>
      <div className=&quot;mb-8&quot;>
        <h1 className=&quot;text-3xl font-bold text-white flex items-center&quot;>
          <Terminal className=&quot;mr-3&quot; size={32} />
          Developer Portal
        </h1>
        <p className=&quot;text-zinc-400 mt-2&quot;>
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
      
      {/* Tabs */}
      <div className=&quot;border-b border-zinc-800 mb-8&quot;>
        <div className=&quot;flex flex-wrap -mb-px&quot;>
          {tabs.map((tab) => {
            const Icon = tab.icon,
            return (
              <button
=======


interface TabDefinition {_id: string;
  label: string;
  icon: LucideIcon;}

export function DeveloperPortal() {_const { user} = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    {_id: "documentation", _label: "Documentation", _icon: BookOpen},
    {_id: "api-keys", _label: "API Keys", _icon: Key},
    {_id: "webhooks", _label: "Webhooks", _icon: Webhook},
    {_id: "logs", _label: "Logs", _icon: List}];

  return (_<div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={_32} />
          Developer Portal
        </h1>
        <p className="text-zinc-400 mt-2">
          Access the Zion API, _manage your API keys, _and set up webhooks.
        </p>
      </div>
      
      {_/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {_tabs.map((tab) => {
            const _Icon = tab.icon;
            return (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={tab.id}
                className={_`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
<<<<<<< HEAD
                    ? &quot;text-white border-zion-purple&quot;
                    : &quot;text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700&quot;
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className=&quot;mr-2&quot; />
                {tab.label}
=======
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"}`}
                onClick={_() => setActiveTab(tab.id)}
              >
                <Icon size={_16} className="mr-2" />
                {_tab.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </button>
            )
          })}
        </div>
      </div>
      
      {_/* Tab content */}
      <div>
<<<<<<< HEAD
        {activeTab === &quot;documentation&quot; && <ApiDocumentation />}
        {activeTab === &quot;api-keys&quot; && <ApiKeysManager />}
        {activeTab === &quot;webhooks&quot; && <WebhooksManager />}
        {activeTab === &quot;logs&quot; && <ApiLogs />}
=======
        {_activeTab === "documentation" && <ApiDocumentation />}
        {_activeTab === "api-keys" && <ApiKeysManager />}
        {_activeTab === "webhooks" && <WebhooksManager />}
        {_activeTab === "logs" && <ApiLogs />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
}

export default function ProtectedDeveloperPortal() {_return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

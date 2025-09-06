
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

        {activeTab === "documentation" && <ApiDocumentation />}
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

;
export default function ProtectedDeveloperPortal() {;
  return (;
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
}
;


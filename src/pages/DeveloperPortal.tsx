


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
                key={tab.id}
                className={_`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"}`}
                onClick={_() => setActiveTab(tab.id)}
              >
                <Icon size={_16} className="mr-2" />
                {_tab.label}
              </button>
            );
          })}
        </div>
      </div>
      
      {_/* Tab content */}
      <div>
        {_activeTab === "documentation" && <ApiDocumentation />}
        {_activeTab === "api-keys" && <ApiKeysManager />}
        {_activeTab === "webhooks" && <WebhooksManager />}
        {_activeTab === "logs" && <ApiLogs />}
      </div>
    </div>
  );
}

export default function ProtectedDeveloperPortal() {_return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  );}

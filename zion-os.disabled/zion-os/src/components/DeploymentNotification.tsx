  actions?: {;
    label: string;
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';
    label: string;,
  action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';
pr-12325
    href?: string;
  }[];
}
interface DeploymentNotificationProps {updates: DeploymentUpdate[];
  onDismiss?: (id: string) => void;
  onAction?: (id: string, action: string) => void;
}
export default function DeploymentNotification() { return null; }
    }
  }
  const getUpdateColor = (type: string) => {switch (type) {;'
      case 'deployment_started': return 'border-blue-500/30 bg-blue-500/10';'
      case 'deployment_completed': return 'border-green-500/30 bg-green-500/10';'
      case 'deployment_failed': return 'border-red-500/30 bg-red-500/10';'
      case 'instance_ready': return 'border-purple-500/30 bg-purple-500/10';'
      case 'update_available': return 'border-yellow-500/30 bg-yellow-500/10';'
      default: return 'border-white/20 bg-white/5';
    }
  }
  const getVerticalIcon = (vertical: string) => {switch (vertical) {;"
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />;"
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />;"
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />;"
      case "GOV": return <Users className="w-4 h-4 text-red-400" />;"
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
  }
  const getGovernanceIcon = (type: string) => {switch (type) {;"
      case "ADMIN": return <Users className="w-4 h-4 text-yellow-400" />;"
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />;"
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />;"
      default: return <Users className="w-4 h-4 text-gray-400" />;
    }
  }
  const formatTimestamp = (timestamp: string) => {const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));'
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  }
  const handleAction = (updateId: string, action: string) => {if (onAction) {;
      onAction(updateId, action);
    }
  Zap;

} from './lucide-react';,
interface DeploymentUpdate {}
  id: string,'

  type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available',
  title: string,
  message: string,
  timestamp: string,
  instance_name?: string,
  vertical?: string,
  governance_type?: string,
  domain?: string,
  progress?: number,
  actions?: {}
    label: string,'
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss',
    href?: string;
  }[];
}
interface DeploymentNotificationProps {}
  updates: DeploymentUpdate[],
  on_dismiss?: (id: string) => void,
  on_action?: (id: string, action: string) => void;
}

 */
function DeploymentNotification() {}
  const [expanded, set_expanded] = useState < string | null>(null),
  const getUpdateIcon = (type: string) =>: any {
    switch (type) {
      case 'deployment_started': return <Activity className="w - 5 h - 5 text - blue-400" />,
      case 'deployment_completed': return <CheckCircle className="w - 5 h - 5 text - green-400" />,
      case 'deployment_failed': return <AlertCircle className="w - 5 h - 5 text - red-400" />,
      case 'instance_ready': return <Rocket className="w - 5 h - 5 text - purple-400" />,
      case 'update_available': return <Clock className="w - 5 h - 5 text - yellow-400" />,
      default: return <Rocket className="w - 5 h - 5 text - gray-400" />;
    }
  },
  const getUpdateColor = (type: string) =>: any {}
    switch (type) {'
      case 'deployment_started': return 'border - blue - 500 / 30 bg - blue - 500 / 10','
      case 'deployment_completed': return 'border - green - 500 / 30 bg - green - 500 / 10','
      case 'deployment_failed': return 'border - red - 500 / 30 bg - red - 500 / 10','
      case 'instance_ready': return 'border - purple - 500 / 30 bg - purple - 500 / 10','
      case 'update_available': return 'border - yellow - 500 / 30 bg - yellow - 500 / 10','
      default: return 'border - white / 20 bg - white / 5';
    }
  },
  const getVerticalIcon = (vertical: string) =>: any {
    switch (vertical) {
      case "HEALTH": return <Shield className="w - 4 h - 4 text - blue-400" />,
      case "EDUCATION": return <Building2 className="w - 4 h - 4 text - green-400" />,
      case "LAW": return <Shield className="w - 4 h - 4 text - purple-400" />,
      case "GOV": return <Users className="w - 4 h - 4 text - red-400" />,
      default: return <Globe className="w - 4 h - 4 text - gray-400" />;
    }
  },
  const getGovernanceIcon = (type: string) =>: any {
    switch (type) {
      case "ADMIN": return <Users className="w - 4 h - 4 text - yellow-400" />,
      case "DAO_LITE": return <Users className="w - 4 h - 4 text - blue-400" />,
      case "DAO_FULL": return <Zap className="w - 4 h - 4 text - purple-400" />,
      default: return <Users className="w - 4 h - 4 text - gray-400" />;
    }
  },
  const format_timestamp = (timestamp: string) =>: any {}
    const date = new Date (timestamp),
    const now = new Date (),
    const diffInMinutes = Math.floor ((now.get_time () - date.get_time ()) / (1000 * 60)),
    // Check condition'
if (return 'Just now', ) {}
  $2;
}
    // Check condition;`
if (return `${diffInMinutes}m ago`, ) {}
  $2;
}`
    if (return `${Math.floor (diffInMinutes / 60)}h ago`, ) {}
  $2;
}
    return date.toLocaleDateString ();
  },
  const handle_action = (update_id: string, action: string) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      on_action (update_id, action);
    }
  },
  // Check condition
if (return null, ) {
  $2
}
  return (
    <div className="fixed top - 4 right - 4 z - 50 space - y-3 max-w-md">;
      {updates.map ((update) => (  return (;
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;
      {updates.map((update) => (;
        <div;
          key={update.id}
          className={`group relative backdrop-blur-sm rounded-xl border p-4 transition-all duration-300 hover:shadow-lg ${getUpdateColor(update.type)}`}
        >;
          {/* Header */}
          <div className="flex items - start gap - 3 mb-3">;
            <div className="p - 2 bg - white / 20 rounded-lg">;
              {getUpdateIcon (update.type)}
            </div>;
            <div className="flex - 1 min-w-0">;
              <h4 className="font - semibold text - white text - sm mb-1">;
                {update.title}
              </h4>;
              <p className="text - white / 80 text - xs leading-relaxed">;
                {update.message}
  // TODO: Implement
    switch (type) {
      case 'deployment_started': return <Activity className="w - 5 h - 5 text - blue - 400" />,"
      case 'deployment_completed': return <CheckCircle className="w - 5 h - 5 text - green - 400" />,"
      case 'deployment_failed': return <AlertCircle className="w - 5 h - 5 text - red - 400" />,"
      case 'instance_ready': return <Rocket className="w - 5 h - 5 text - purple - 400" />,"
      case 'update_available': return <Clock className="w - 5 h - 5 text - yellow - 400" />,"
      default: return <Rocket className="w - 5 h - 5 text - gray - 400" />;"
      case "HEALTH": return <Shield className="w - 4 h - 4 text - blue - 400" />,"
      case "EDUCATION": return <Building2 className="w - 4 h - 4 text - green - 400" />,"
      case "LAW": return <Shield className="w - 4 h - 4 text - purple - 400" />,"
      case "GOV": return <Users className="w - 4 h - 4 text - red - 400" />,"
      default: return <Globe className="w - 4 h - 4 text - gray - 400" />;"
      case "ADMIN": return <Users className="w - 4 h - 4 text - yellow - 400" />,"
      case "DAO_LITE": return <Users className="w - 4 h - 4 text - blue - 400" />,"
      case "DAO_FULL": return <Zap className="w - 4 h - 4 text - purple - 400" />,"
      default: return <Users className="w - 4 h - 4 text - gray - 400" />;"
    <div className="fixed top - 4 right - 4 z - 50 space - y-3 max - w-md">;"
</div>"
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;"
</div>
        <div;
          key={update.id}`;
          className={`group relative backdrop - blur - sm rounded - xl border p - 4 transition - all duration - 300 hover:shadow - lg ${getUpdateColor (update.type)}`}
        >;
          <div className="flex items - start gap - 3 mb - 3">;"
            <div className="p - 2 bg - white / 20 rounded - lg">;"
            </div>;"
            <div className="flex - 1 min - w-0">;"
              <h4 className="font - semibold text - white text - sm mb - 1">;"
</h4>
              </h4>;"
              <p className="text - white / 80 text - xs leading - relaxed">;"
</p>
pr-12325
              </p>;
            </div>;
            <button;
              on_click={() => on_dismiss?.(update.id)}
              className="p - 1 text - white / 60 hover:text - white / 80 transition-colors";
            >;
              <X className="w - 4 h-4" />;
            </button>;
          </div>;
          {/* Instance Details (if available) */}          {/* Progress Bar (for deployment updates) */}
          {update.progress !== undefined && (
            <div className="mb - 3 space-y-2">;
              <div className="flex justify - between text - xs text-white / 70">;
                <span > Deployment Progress</span>;
                <span>{update.progress}%</span>;
              </div>;
              <div className="w - full bg - white / 20 rounded - full h-2">;
                <div;
                  className="bg - blue - 400 h - 2 rounded - full transition - all duration - 500 ease-out";
                  style={{ width: `${update.progress}%` }}
                ></div>;
              </div>;
          {/* Action Buttons */}
          {update.actions && update.actions.length > 0 && (
            <div className="flex gap - 2 pt - 2 border - t border-white / 20">;
              {update.actions.map ((action, index) => (
                <button;
                  key={index}
                      ? 'bg-blue-600 hover:bg-blue-700 text-white';                      ? 'bg-blue-600 hover:bg-blue-700 text-white';
                      : action.action === 'view';
                      ? 'bg-green-600 hover:bg-green-700 text-white';
                      : 'bg-white/20 hover:bg-white/30 text-white/80';
                  }`}
                >;
                  {action.action === 'deploy' && <Play className="w - 3 h-3" />}
                  {action.action === 'view' && <Eye className="w - 3 h-3" />}
                  {action.action === 'retry' && <Rocket className="w - 3 h-3" />}
                  {action.action === 'configure' && <Settings className="w - 3 h-3" />}
                  <span>{action.label}</span>;
          {/* Timestamp */}
          <div className="absolute bottom - 2 right - 4 text - xs text-white / 60">;
            {format_timestamp (update.timestamp)}
          </div>;
        </div>))}
    </div>);
}
    <DeploymentNotification;
      updates={updates}
      on_dismiss={handle_dismiss}
      on_action={handle_action}
    />);
}
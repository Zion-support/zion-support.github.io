
;
\"use client\",import { useState } from \"react\",import {Rocket,CheckCircle,AlertCircle,Clock,Activity,Play,Eye,Settings,X,ArrowRight,Globe,Shield,Building2,Users,Zap;}
} from \"lucide-react\",interface DeploymentUpdate  {id: string,type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available',title: string,message: string,timestamp: string,instanceName?: string,vertical?: string,governanceType?: string,domain?: string,progress?: number,actions?: {label: string;
  actions?: {;

    label: string;,
  action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';'
    href?: string;

  }[];
}
interface DeploymentNotificationProps {updates: DeploymentUpdate[];
  onDismiss?: (id: string) => void;}
  onAction?: (id: string, action: string) => void;}
}
export default function DeploymentNotification({updates;

  onDismiss;
  onAction;)
}: DeploymentNotificationProps) {const [expanded, setExpanded] = useState<string | null>(null);
</string>'
      case 'deployment_started': return <Activity className="w-5 h-5 text-blue-400" />;"
</Activity>"
      case 'deployment_completed': return <CheckCircle className="w-5 h-5 text-green-400" />;"
</CheckCircle>"
      case 'deployment_failed': return <AlertCircle className="w-5 h-5 text-red-400" />;"
</AlertCircle>"
      case 'instance_ready': return <Rocket className="w-5 h-5 text-purple-400" />;"
</Rocket>"
      case 'update_available': return <Clock className="w-5 h-5 text-yellow-400" />;"
</Clock>"
      default: return <Rocket className="w-5 h-5 text-gray-400" />;"
</Rocket>"
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />;"
</Shield>"
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />;"
</Building2>"
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />;"
</Shield>"
      case "GOV": return <Users className="w-4 h-4 text-red-400" />;"
</Users>"
      default: return <Globe className="w-4 h-4 text-gray-400" />;"
</Globe>"
      case "ADMIN": return <Users className="w-4 h-4 text-yellow-400" />;"
</Users>"
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />;"
</Users>"
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />;"
</Zap>"
      default: return <Users className="w-4 h-4 text-gray-400" />;"
</Users>"
    if (diffInMinutes < 1) return 'Just now';'

    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  }

  const handleAction = (updateId: string, action: string) => {if (onAction) {;
      onAction(updateId, action);
    }'
"use client";""
import { useState } from "react";"

import {Rocket;
  CheckCircle;
  AlertCircle;
  Clock;
  Activity;
  Play;
  Eye;
  Settings;
  X;
  ArrowRight;
  Globe;
  Shield;
  Building2;

  Users;
  Zap;"
} from './lucide-react';,'

interface DeploymentUpdate {
  // TODO: Implement
}
  id: string,'
  type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available','
  title: string,
  message: string,
  timestamp: string,
  instance_name?: string,
  vertical?: string,
  governance_type?: string,
  domain?: string,
  progress?: number,
  actions?: {

    label: string,'
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss','
    href?: string;

  }[];
}
interface DeploymentNotificationProps  {updates: DeploymentUpdate[],on_dismiss?: (id: string) => void,on_action?: (id: string, action: string) => void;}
}
export default /**;
 * DeploymentNotification - Function description;
 */;
function DeploymentNotification() {const [expanded, set_expanded] = useState < string | null>(null),const getUpdateIcon = (type: string) =>: any {switch (type) {case 'deployment_started': return <Activity className=\"w - 5 h - 5 text - blue-400\" />,case 'deployment_completed': return <CheckCircle className=\"w - 5 h - 5 text - green-400\" />,case 'deployment_failed': return <AlertCircle className=\"w - 5 h - 5 text - red-400\" />,case 'instance_ready': return <Rocket className=\"w - 5 h - 5 text - purple-400\" />,case 'update_available': return <Clock className=\"w - 5 h - 5 text - yellow-400\" />,default: return <Rocket className=\"w - 5 h - 5 text - gray-400\" />;
interface DeploymentNotificationProps {
  // TODO: Implement
}
  updates: DeploymentUpdate[],
  on_dismiss?: (id: string) => void,}
  on_action?: (id: string, action: string) => void;}
}
export default /**
 * DeploymentNotification - Function description;
 */
function DeploymentNotification() {
  const [expanded, set_expanded] = useState < string | null>(null),
  const getUpdateIcon = (type: string) =>: any {

  // TODO: Implement
}
    switch (type) {'
      case 'deployment_started': return <Activity className="w - 5 h - 5 text - blue - 400" />,"
</Activity>"
      case 'deployment_completed': return <CheckCircle className="w - 5 h - 5 text - green - 400" />,"
</CheckCircle>"
      case 'deployment_failed': return <AlertCircle className="w - 5 h - 5 text - red - 400" />,"
</AlertCircle>"
      case 'instance_ready': return <Rocket className="w - 5 h - 5 text - purple - 400" />,"
</Rocket>"
      case 'update_available': return <Clock className="w - 5 h - 5 text - yellow - 400" />,"
</Clock>"
      default: return <Rocket className="w - 5 h - 5 text - gray - 400" />;"
</Rocket>"
      case "HEALTH": return <Shield className="w - 4 h - 4 text - blue - 400" />,"
</Shield>"
      case "EDUCATION": return <Building2 className="w - 4 h - 4 text - green - 400" />,"
</Building2>"
      case "LAW": return <Shield className="w - 4 h - 4 text - purple - 400" />,"
</Shield>"
      case "GOV": return <Users className="w - 4 h - 4 text - red - 400" />,"
</Users>"
      default: return <Globe className="w - 4 h - 4 text - gray - 400" />;"
</Globe>"
      case "ADMIN": return <Users className="w - 4 h - 4 text - yellow - 400" />,"
</Users>"
      case "DAO_LITE": return <Users className="w - 4 h - 4 text - blue - 400" />,"
</Users>"
      case "DAO_FULL": return <Zap className="w - 4 h - 4 text - purple - 400" />,"
</Zap>"
      default: return <Users className="w - 4 h - 4 text - gray - 400" />;"
</Users>"
    <div className="fixed top - 4 right - 4 z - 50 space - y-3 max - w-md">;"
</div>"
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;"
</div>
        <div;
          key={update.id}
          className={`group relative backdrop - blur - sm rounded - xl border p - 4 transition - all duration - 300 hover:shadow - lg ${getUpdateColor (update.type)}`}
        >;
</div>"
          <div className="flex items - start gap - 3 mb - 3">;"
</div>"
            <div className="p - 2 bg - white / 20 rounded - lg">;"
</div>
            </div>;"
            <div className="flex - 1 min - w-0">;"
</div>"
              <h4 className="font - semibold text - white text - sm mb - 1">;"
</h4>
              </h4>;"
              <p className="text - white / 80 text - xs leading - relaxed">;"
</p>
              </p>;
            </div>;
            <button;
              on_click={() => on_dismiss?.(update.id)}
</button>"
              <X className="w - 4 h - 4" />;"
</X>
            </button>;
          </div>;
                </div>;"
                <span className="font - medium text - white text - sm">;"
</span>
                </span>;
              </div>;"
              <div className="flex items - center gap - 3 text - xs text - white / 70">;"
</div>"
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - white / 10">;"
</span>
                  </span>)}"
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - blue - 500 / 20 text - blue - 300">;"
</span>
                  </span>)}"
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - green - 500 / 20 text - green - 300 font - mono">;"
</span>
                  </span>)}
              </div>;"
            <div className="mb - 3 space - y-2">;"
</div>"
              <div className="flex justify - between text - xs text - white / 70">;"
</div>
                <span > Deployment Progress</span>;
                <span>{update.progress}%</span>;
              </div>;"
              <div className="w - full bg - white / 20 rounded - full h - 2">;"
</div>
                <div;"
                  className="bg - blue - 400 h - 2 rounded - full transition - all duration - 500 ease - out";"
                  style={{ width: `${update.progress}%` }}
                ></div>;
              </div>;"
            <div className="flex gap - 2 pt - 2 border - t border - white / 20">;"
</div>
                <button;
                  key={index}"
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${action.action === 'deploy' |action.action === 'retry';''
                      ? 'bg-blue-600 hover:bg-blue-700 text-white';''
                      : action.action === 'view';''
                      ? 'bg - green - 600 hover:bg - green - 700 text - white';''
                      : 'bg - white / 20 hover:bg - white / 30 text - white / 80';'
                  }`}
                >;
</button>'
                  {action.action === 'deploy' && <Play className="w - 3 h - 3" />}"
</Play>"
                  {action.action === 'view' && <Eye className="w - 3 h - 3" />}"
</Eye>"
                  {action.action === 'retry' && <Rocket className="w - 3 h - 3" />}"
</Rocket>"
                  {action.action === 'configure' && <Settings className="w - 3 h - 3" />}"
</Settings>
                  <span>{action.label}</span>;"
          <div className="absolute bottom - 2 right - 4 text - xs text - white / 60">;"
</div>

          </div>;
        </div>))}
    </div>)}export /**;
 * DeploymentNotificationExample - Function description;
 */;
function DeploymentNotificationExample() {const [updates, set_updates] = useState < DeploymentUpdate[]>([;
    {id: \"1\",type: \"deployment_started\",title: \"Deployment Started\",message: \"Zion Health Network is now being deployed to production\",timestamp: new Date ().toISOString (),instance_name: \"Zion Health Network\",vertical: \"HEALTH\",governance_type: \"DAO_FULL\",domain: \"health.zion.network\",progress: 25,// Example usage with mock data;
export function DeploymentNotificationExample() {const [updates, setUpdates] = useState<DeploymentUpdate[] />([;}
    {id: \"1\",type: \"deployment_started\",title: \"Deployment Started\",message: \"Zion Health Network is now being deployed to production\",timestamp: new Date().toISOString(),instanceName: \"Zion Health Network\",vertical: \"HEALTH\",governanceType: \"DAO_FULL\",domain: \"health.zion.network\",progress: 25,actions: [;}
        { label: \"View Progress\", action: \"view\", href: \"/admin / deployments\" },{ label: \"Configure\", action: \"configure\", href: \"/admin / instances\" }
      ];
    },{id: \"2\",type: \"instance_ready\",title: \"Instance Ready\",message: \"EduDAO Academy has been successfully deployed and is now live\",timestamp: new Date (Date.now () - 5 * 60 * 1000).toISOString (),instance_name: \"EduDAO Academy\",vertical: \"EDUCATION\",governance_type: \"DAO_LITE\",domain: \"edu.zion.network\",actions: [;}
        { label: \"View Instance\", action: \"view\", href: \"/admin / instances\" },{ label: \"Manage\", action: \"configure\", href: \"/admin / instances\" }
      ];
    }
  ]),const handle_dismiss = (id: string) =>: any {set_updates (prev => prev.filter (update => update.id !== id))},const handle_action = (id: string, action: string) =>: any {// // // console.log (`Action ${action} for update ${id}`)// Handle different actions here;}return (<DeploymentNotification;
      updates={updates}
      on_dismiss={handle_dismiss}
      on_action={handle_action}
    />)}
    </div>);
    <DeploymentNotification;
      updates={updates}
      on_dismiss={handle_dismiss}
      on_action={handle_action}
    />);

</DeploymentNotification>"


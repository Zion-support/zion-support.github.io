  actions?: {;
    label: string;,
  action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';
    href?: string;
  }[];
}
interface DeploymentNotificationProps {updates: DeploymentUpdate[];
  onDismiss?: (id: string) => void;
  onAction?: (id: string, action: string) => void;
export default function DeploymentNotification({updates;
  onDismiss;
  onAction;)
}: DeploymentNotificationProps) {const [expanded, setExpanded] = useState<string | null>(null);
</string>
      case 'deployment_started': return <Activity className="w-5 h-5 text-blue-400" />;"
"
      case 'deployment_completed': return <CheckCircle className="w-5 h-5 text-green-400" />;"
      case 'deployment_failed': return <AlertCircle className="w-5 h-5 text-red-400" />;"
      case 'instance_ready': return <Rocket className="w-5 h-5 text-purple-400" />;"
      case 'update_available': return <Clock className="w-5 h-5 text-yellow-400" />;"
      default: return <Rocket className="w-5 h-5 text-gray-400" />;"
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />;"
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />;"
</Building2>"
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />;"
      case "GOV": return <Users className="w-4 h-4 text-red-400" />;"
      default: return <Globe className="w-4 h-4 text-gray-400" />;"
      case "ADMIN": return <Users className="w-4 h-4 text-yellow-400" />;"
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />;"
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />;"
      default: return <Users className="w-4 h-4 text-gray-400" />;"
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  const handleAction = (updateId: string, action: string) => {if (onAction) {;
      onAction(updateId, action);
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
} from './lucide-react';,
interface DeploymentUpdate {
  // TODO: Implement
  id: string,
  type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available',
  title: string,
  message: string,
  timestamp: string,
  instance_name?: string,
  vertical?: string,
  governance_type?: string,
  domain?: string,
  progress?: number,
  actions?: {
    label: string,
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss',
interface DeploymentNotificationProps {
  // TODO: Implement
  updates: DeploymentUpdate[],
  on_dismiss?: (id: string) => void,
  on_action?: (id: string, action: string) => void;
export default /**
 * DeploymentNotification - Function description;
 */
function DeploymentNotification() {
  const [expanded, set_expanded] = useState < string | null>(null),
  const getUpdateIcon = (type: string) =>: any {
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
              </p>;
            </div>;
            <button;
              on_click={() => on_dismiss?.(update.id)}
</button>"
              <X className="w - 4 h - 4" />;"

            </button>;
                <span className="font - medium text - white text - sm">;"
</span>
                </span>;
              <div className="flex items - center gap - 3 text - xs text - white / 70">;"
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - white / 10">;"
                  </span>)}"
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - blue - 500 / 20 text - blue - 300">;"
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - green - 500 / 20 text - green - 300 font - mono">;"
                  </span>)}
            <div className="mb - 3 space - y-2">;"
              <div className="flex justify - between text - xs text - white / 70">;"
                <span > Deployment Progress</span>;
                <span>{update.progress}%</span>;
              <div className="w - full bg - white / 20 rounded - full h - 2">;"
                <div;"
                  className="bg - blue - 400 h - 2 rounded - full transition - all duration - 500 ease - out";"`;
                  style={{ width: `${update.progress}%` }}
                ></div>;
            <div className="flex gap - 2 pt - 2 border - t border - white / 20">;"
                  key={index}"`;
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${action.action === 'deploy' |action.action === 'retry';
                      ? 'bg-blue-600 hover:bg-blue-700 text-white';
                      : action.action === 'view';
                      ? 'bg - green - 600 hover:bg - green - 700 text - white';
                      : 'bg - white / 20 hover:bg - white / 30 text - white / 80';`;
                  }`}
</button>
                  {action.action === 'deploy' && <Play className="w - 3 h - 3" />}"
                  {action.action === 'view' && <Eye className="w - 3 h - 3" />}"
                  {action.action === 'retry' && <Rocket className="w - 3 h - 3" />}"
                  {action.action === 'configure' && <Settings className="w - 3 h - 3" />}"

                  <span>{action.label}</span>;"
          <div className="absolute bottom - 2 right - 4 text - xs text - white / 60">;"
        </div>))}
    </div>);
    <DeploymentNotification;
      updates={updates}
      on_dismiss={handle_dismiss}
      on_action={handle_action}
    />);
"`;
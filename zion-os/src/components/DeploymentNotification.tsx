import React from 'react';
import { Activity, Play, Eye, Settings, X, ArrowRight, Globe, Shield, Building2, Users, CheckCircle, AlertCircle, Rocket, Clock, Zap } from 'lucide-react';

export interface DeploymentAction {
  label: string;
  action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';
  href?: string;
}

export interface DeploymentNotificationProps {
  type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available';
  title: string;
  message: string;
  actions?: DeploymentAction[];
}

function typeIcon(type: DeploymentNotificationProps['type']) {
  switch (type) {
    case 'deployment_started': return <Activity className="w-5 h-5 text-blue-400" />;
    case 'deployment_completed': return <CheckCircle className="w-5 h-5 text-green-400" />;
    case 'deployment_failed': return <AlertCircle className="w-5 h-5 text-red-400" />;
    case 'instance_ready': return <Rocket className="w-5 h-5 text-purple-400" />;
    case 'update_available': return <Clock className="w-5 h-5 text-yellow-400" />;
    default: return <Rocket className="w-5 h-5 text-gray-400" />;
  }
}

function typeClasses(type: DeploymentNotificationProps['type']) {
  switch (type) {
    case 'deployment_started': return 'border-blue-500/30 bg-blue-500/10';
    case 'deployment_completed': return 'border-green-500/30 bg-green-500/10';
    case 'deployment_failed': return 'border-red-500/30 bg-red-500/10';
    case 'instance_ready': return 'border-purple-500/30 bg-purple-500/10';
    case 'update_available': return 'border-yellow-500/30 bg-yellow-500/10';
    default: return 'border-white/20 bg-white/5';
  }
}

export default function DeploymentNotification({ type, title, message, actions = [] }: DeploymentNotificationProps) {
  return (
    <div className={`border rounded-xl p-4 flex items-start gap-3 ${typeClasses(type)}`}>
      <div className="mt-0.5">{typeIcon(type)}</div>
      <div className="flex-1">
        <div className="font-semibold text-white">{title}</div>
        <div className="text-white/80">{message}</div>
        {actions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {actions.map((a) => (
              <a key={a.label} href={a.href} className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm">
                {a.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

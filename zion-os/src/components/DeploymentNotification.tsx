<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
"use client",;
import { useState } from "react",;
import {;
  Rocket,;
  CheckCircle,;
  AlertCircle,;
  Clock,;
  Activity,;
  Play,;
  Eye,;
  Settings,;
  X,;
  ArrowRight,;
  Globe,;
  Shield,;
  Building2,;
  Users,;
  Zap;
} from "lucide-react",;
interface DeploymentUpdate {;
  id: string,;
  type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available',;
  title: string,;
  message: string,;
  timestamp: string,;
  instanceName?: string,;
  vertical?: string,;
  governanceType?: string,;
  domain?: string,;
  progress?: number,;
<<<<<<< HEAD
  actions?: {;
    label: string,;
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss',;
    href?: string;
  }[];
}
;
interface DeploymentNotificationProps {;
  updates: DeploymentUpdate[],;
  onDismiss?: (id: string) => void,;
  onAction?: (id: string, action: string) => void;
}
;
export default function DeploymentNotification({;
  updates,;
  onDismiss,;
  onAction;
}: DeploymentNotificationProps) {;
  const [expanded, setExpanded] = useState<string | null>(null),;
  const getUpdateIcon = (type: string) => {;
    switch (type) {;
      case 'deployment_started': return <Activity className="w-5 h-5 text-blue-400" />,;
      case 'deployment_completed': return <CheckCircle className="w-5 h-5 text-green-400" />,;
      case 'deployment_failed': return <AlertCircle className="w-5 h-5 text-red-400" />,;
      case 'instance_ready': return <Rocket className="w-5 h-5 text-purple-400" />,;
      case 'update_available': return <Clock className="w-5 h-5 text-yellow-400" />,;
      default: return <Rocket className="w-5 h-5 text-gray-400" />;
    }
  },;
  const getUpdateColor = (type: string) => {;
    switch (type) {;
      case 'deployment_started': return 'border-blue-500/30 bg-blue-500/10',;
      case 'deployment_completed': return 'border-green-500/30 bg-green-500/10',;
      case 'deployment_failed': return 'border-red-500/30 bg-red-500/10',;
      case 'instance_ready': return 'border-purple-500/30 bg-purple-500/10',;
      case 'update_available': return 'border-yellow-500/30 bg-yellow-500/10',;
      default: return 'border-white/20 bg-white/5';
    }
  },;
  const getVerticalIcon = (vertical: string) => {;
    switch (vertical) {;
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />,;
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />,;
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />,;
      case "GOV": return <Users className="w-4 h-4 text-red-400" />,;
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
  },;
  const getGovernanceIcon = (type: string) => {;
    switch (type) {;
      case "ADMIN": return <Users className="w-4 h-4 text-yellow-400" />,;
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />,;
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />,;
      default: return <Users className="w-4 h-4 text-gray-400" />;
    }
  },;
  const formatTimestamp = (timestamp: string) => {;
    const date = new Date(timestamp),;
    const now = new Date(),;
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60)),;
    if (diffInMinutes < 1) return 'Just now',;
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`,;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`,;
    return date.toLocaleDateString();
  },;
  const handleAction = (updateId: string, action: string) => {;
    if (onAction) {;
      onAction(updateId, action);
    }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  actions?: {;
    label: string;
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },;
  if (updates.length === 0) return null,;


  return (;
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;
      {updates.map((update) => (;
<<<<<<< HEAD
=======
=======
"use client",
import { useState  } from './react';,
import {
  Rocket,
  CheckCircle,
  AlertCircle,
  Clock,
  Activity,
  Play,
  Eye,
  Settings,
  X,
  ArrowRight,
  Globe,
  Shield,
  Building2,
  Users,
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
"use client";
import { useState } from "react";
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Zap;
=======


  Zap;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export default /**;
 * DeploymentNotification - Function description;
 */
function DeploymentNotification() {}
  const [expanded, set_expanded] = useState < string | null>(null),
<<<<<<< HEAD
  const getUpdateIcon = (type: string) =>: any {
    switch (type) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case 'deployment_started': return <Activity className="w - 5 h - 5 text - blue - 400" />,
      case 'deployment_completed': return <CheckCircle className="w - 5 h - 5 text - green - 400" />,
      case 'deployment_failed': return <AlertCircle className="w - 5 h - 5 text - red - 400" />,
      case 'instance_ready': return <Rocket className="w - 5 h - 5 text - purple - 400" />,
      case 'update_available': return <Clock className="w - 5 h - 5 text - yellow - 400" />,
<<<<<<< HEAD
=======
  const getUpdateIcon = (type: string) =>: any {}
    switch (type) {'"
      case 'deployment_started': return <Activity className="w - 5 h - 5 text - blue - 400" />,'"
      case 'deployment_completed': return <CheckCircle className="w - 5 h - 5 text - green - 400" />,'"
      case 'deployment_failed': return <AlertCircle className="w - 5 h - 5 text - red - 400" />,'"
      case 'instance_ready': return <Rocket className="w - 5 h - 5 text - purple - 400" />,'"
      case 'update_available': return <Clock className="w - 5 h - 5 text - yellow - 400" />,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      default: return <Rocket className="w - 5 h - 5 text - gray - 400" />;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      case 'deployment_started': return <Activity className="w - 5 h - 5 text - blue-400" />,
      case 'deployment_completed': return <CheckCircle className="w - 5 h - 5 text - green-400" />,
      case 'deployment_failed': return <AlertCircle className="w - 5 h - 5 text - red-400" />,
      case 'instance_ready': return <Rocket className="w - 5 h - 5 text - purple-400" />,
      case 'update_available': return <Clock className="w - 5 h - 5 text - yellow-400" />,
      default: return <Rocket className="w - 5 h - 5 text - gray-400" />;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      default: return <Rocket className="w - 5 h - 5 text - gray - 400" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  const getVerticalIcon = (vertical: string) =>: any {
    switch (vertical) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case "HEALTH": return <Shield className="w - 4 h - 4 text - blue - 400" />,
      case "EDUCATION": return <Building2 className="w - 4 h - 4 text - green - 400" />,
      case "LAW": return <Shield className="w - 4 h - 4 text - purple - 400" />,
      case "GOV": return <Users className="w - 4 h - 4 text - red - 400" />,
<<<<<<< HEAD
=======
  const getVerticalIcon = (vertical: string) =>: any {}
    switch (vertical) {"
      case "HEALTH": return <Shield className="w - 4 h - 4 text - blue - 400" />,"
      case "EDUCATION": return <Building2 className="w - 4 h - 4 text - green - 400" />,"
      case "LAW": return <Shield className="w - 4 h - 4 text - purple - 400" />,"
      case "GOV": return <Users className="w - 4 h - 4 text - red - 400" />,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      default: return <Globe className="w - 4 h - 4 text - gray - 400" />;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      case "HEALTH": return <Shield className="w - 4 h - 4 text - blue-400" />,
      case "EDUCATION": return <Building2 className="w - 4 h - 4 text - green-400" />,
      case "LAW": return <Shield className="w - 4 h - 4 text - purple-400" />,
      case "GOV": return <Users className="w - 4 h - 4 text - red-400" />,
      default: return <Globe className="w - 4 h - 4 text - gray-400" />;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      default: return <Globe className="w - 4 h - 4 text - gray - 400" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
  },
<<<<<<< HEAD
  const getGovernanceIcon = (type: string) =>: any {
    switch (type) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      case "ADMIN": return <Users className="w - 4 h - 4 text - yellow - 400" />,
      case "DAO_LITE": return <Users className="w - 4 h - 4 text - blue - 400" />,
      case "DAO_FULL": return <Zap className="w - 4 h - 4 text - purple - 400" />,
=======
  const getGovernanceIcon = (type: string) =>: any {}
    switch (type) {"
      case "ADMIN": return <Users className="w - 4 h - 4 text - yellow - 400" />,"
      case "DAO_LITE": return <Users className="w - 4 h - 4 text - blue - 400" />,"
      case "DAO_FULL": return <Zap className="w - 4 h - 4 text - purple - 400" />,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      default: return <Users className="w - 4 h - 4 text - gray - 400" />;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      case "ADMIN": return <Users className="w - 4 h - 4 text - yellow-400" />,
      case "DAO_LITE": return <Users className="w - 4 h - 4 text - blue-400" />,
      case "DAO_FULL": return <Zap className="w - 4 h - 4 text - purple-400" />,
      default: return <Users className="w - 4 h - 4 text - gray-400" />;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      case "ADMIN": return <Users className="w - 4 h - 4 text - yellow - 400" />,
      case "DAO_LITE": return <Users className="w - 4 h - 4 text - blue - 400" />,
      case "DAO_FULL": return <Zap className="w - 4 h - 4 text - purple - 400" />,
      default: return <Users className="w - 4 h - 4 text - gray - 400" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },
  // Check condition
if (return null, ) {
  $2
}
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="fixed top - 4 right - 4 z - 50 space - y-3 max - w-md">;
      {updates.map ((update) => (
=======
  }
  if (updates.length === 0) return null;
=======
"use client",;
import { useState } from "react",;
import {;
  Rocket,;
  CheckCircle,;
  AlertCircle,;
  Clock,;
  Activity,;
  Play,;
  Eye,;
  Settings,;
  X,;
  ArrowRight,;
  Globe,;
  Shield,;
  Building2,;
  Users,;
  Zap;
} from "lucide-react",;
interface DeploymentUpdate {;
  id: string,;
  type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available',;
  title: string,;
  message: string,;
  timestamp: string,;
  instanceName?: string,;
  vertical?: string,;
  governanceType?: string,;
  domain?: string,;
  progress?: number,;
  actions?: {;
    label: string,;
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss',;
    href?: string;
  }[];
}
;
interface DeploymentNotificationProps {;
  updates: DeploymentUpdate[],;
  onDismiss?: (id: string) => void,;
  onAction?: (id: string, action: string) => void;
}
;
export default function DeploymentNotification({;
  updates,;
  onDismiss,;
  onAction;
}: DeploymentNotificationProps) {;
  const [expanded, setExpanded] = useState<string | null>(null),;
  const getUpdateIcon = (type: string) => {;
    switch (type) {;
      case 'deployment_started': return <Activity className="w-5 h-5 text-blue-400" />,;
      case 'deployment_completed': return <CheckCircle className="w-5 h-5 text-green-400" />,;
      case 'deployment_failed': return <AlertCircle className="w-5 h-5 text-red-400" />,;
      case 'instance_ready': return <Rocket className="w-5 h-5 text-purple-400" />,;
      case 'update_available': return <Clock className="w-5 h-5 text-yellow-400" />,;
      default: return <Rocket className="w-5 h-5 text-gray-400" />;
    }
  },;
  const getUpdateColor = (type: string) => {;
    switch (type) {;
      case 'deployment_started': return 'border-blue-500/30 bg-blue-500/10',;
      case 'deployment_completed': return 'border-green-500/30 bg-green-500/10',;
      case 'deployment_failed': return 'border-red-500/30 bg-red-500/10',;
      case 'instance_ready': return 'border-purple-500/30 bg-purple-500/10',;
      case 'update_available': return 'border-yellow-500/30 bg-yellow-500/10',;
      default: return 'border-white/20 bg-white/5';
    }
  },;
  const getVerticalIcon = (vertical: string) => {;
    switch (vertical) {;
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />,;
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />,;
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />,;
      case "GOV": return <Users className="w-4 h-4 text-red-400" />,;
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
  },;
  const getGovernanceIcon = (type: string) => {;
    switch (type) {;
      case "ADMIN": return <Users className="w-4 h-4 text-yellow-400" />,;
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />,;
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />,;
      default: return <Users className="w-4 h-4 text-gray-400" />;
    }
  },;
  const formatTimestamp = (timestamp: string) => {;
    const date = new Date(timestamp),;
    const now = new Date(),;
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60)),;
    if (diffInMinutes < 1) return 'Just now',;
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`,;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`,;
    return date.toLocaleDateString();
  },;
  const handleAction = (updateId: string, action: string) => {;
    if (onAction) {;
      onAction(updateId, action);
    }
  },;
  if (updates.length === 0) return null,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (;
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;
      {updates.map((update) => (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div;
          key={update.id}
          className={`group relative backdrop-blur-sm rounded-xl border p-4 transition-all duration-300 hover:shadow-lg ${getUpdateColor(update.type)}`}
        >;
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">;
            <div className="p-2 bg-white/20 rounded-lg">;
              {getUpdateIcon(update.type)}
            </div>;
            <div className="flex-1 min-w-0">;
              <h4 className="font-semibold text-white text-sm mb-1">;
                {update.title}
              </h4>;
              <p className="text-white/80 text-xs leading-relaxed">;
=======
    <div className="fixed top - 4 right - 4 z - 50 space - y-3 max-w-md">;
      {updates.map ((update) => (  return (;
=======
    <div className="fixed top - 4 right - 4 z - 50 space - y-3 max - w-md">;
      {updates.map ((update) => (
  return (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;
      {updates.map((update) => (;
=======
    <div className="fixed top - 4 right - 4 z - 50 space - y-3 max-w-md">;
      {updates.map ((update) => (  return (;
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;
      {updates.map((update) => (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  return (;"
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">;
      {updates.map((update) => (;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div;
          key={update.id}`
          className={`group relative backdrop - blur - sm rounded - xl border p - 4 transition - all duration - 300 hover:shadow - lg ${getUpdateColor (update.type)}`}
        >;
<<<<<<< HEAD
          {/* Header */}
          <div className="flex items - start gap - 3 mb - 3">;
            <div className="p - 2 bg - white / 20 rounded - lg">;
              {getUpdateIcon (update.type)}
            </div>;
            <div className="flex - 1 min - w-0">;
              <h4 className="font - semibold text - white text - sm mb - 1">;
                {update.title}
              </h4>;
<<<<<<< HEAD
              <p className="text - white / 80 text - xs leading-relaxed">;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          {/* Header */}"
          <div className="flex items - start gap - 3 mb - 3">;"
            <div className="p - 2 bg - white / 20 rounded - lg">;
              {getUpdateIcon (update.type)}
            </div>;"
            <div className="flex - 1 min - w-0">;"
              <h4 className="font - semibold text - white text - sm mb - 1">;
                {update.title}
              </h4>;"
              <p className="text - white / 80 text - xs leading - relaxed">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <p className="text - white / 80 text - xs leading - relaxed">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {update.message}
              </p>;
            </div>;
            <button;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={() => onDismiss?.(update.id)}
              className="p-1 text-white/60 hover:text-white/80 transition-colors";
            >;
              <X className="w-4 h-4" />;
            </button>;
          </div>;
          {/* Instance Details (if available) */}
<<<<<<< HEAD
          {update.instanceName && (;
            <div className="mb-3 p-3 bg-white/10 rounded-lg border border-white/20">;
              <div className="flex items-center gap-2 mb-2">;
                <div className="p-1 bg-white/20 rounded">;
=======
<<<<<<< HEAD
=======
=======
              on_click={() => on_dismiss?.(update.id)}"
              className="p - 1 text - white / 60 hover:text - white / 80 transition - colors";
            >;"
              <X className="w - 4 h - 4" />;
            </button>;
          </div>;
          {/* Instance Details (if available) */}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {getVerticalIcon(update.vertical || 'GENERAL')}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                </div>;
                <span className="font-medium text-white text-sm">;
                  {update.instanceName}
                </span>;
              </div>;
              <div className="flex items-center gap-3 text-xs text-white/70">;
                {update.vertical && (;
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">;
                    {update.vertical}
                  </span>;
                )}
                {update.governanceType && (;
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">;
                    {update.governanceType}
                  </span>;
                )}
                {update.domain && (;
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-300 font-mono">;
=======
                </div>;"
                <span className="font - medium text - white text - sm">;
                  {update.instance_name}
                </span>;
              </div>;"
              <div className="flex items - center gap - 3 text - xs text - white / 70">;
                {update.vertical && ("
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - white / 10">;
                    {update.vertical}
                  </span>)}
                {update.governance_type && ("
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - blue - 500 / 20 text - blue - 300">;
                    {update.governance_type}
                  </span>)}
                {update.domain && ("
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - green - 500 / 20 text - green - 300 font - mono">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    {update.domain}
                  </span>;
                )}
              </div>;


          {/* Progress Bar (for deployment updates) */}
<<<<<<< HEAD
          {update.progress !== undefined && (;
            <div className="mb-3 space-y-2">;
              <div className="flex justify-between text-xs text-white/70">;
                <span>Deployment Progress</span>;
                <span>{update.progress}%</span>;
              </div>;
              <div className="w-full bg-white/20 rounded-full h-2">;
                <div;
                  className="bg-blue-400 h-2 rounded-full transition-all duration-500 ease-out";
=======
          {update.progress !== undefined && ("
            <div className="mb - 3 space - y-2">;"
              <div className="flex justify - between text - xs text - white / 70">;
                <span > Deployment Progress</span>;
                <span>{update.progress}%</span>;
              </div>;"
              <div className="w - full bg - white / 20 rounded - full h - 2">;
                <div;"
                  className="bg - blue - 400 h - 2 rounded - full transition - all duration - 500 ease - out";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  style={{ width: `${update.progress}%` }}
                ></div>;
              </div>;


          {/* Action Buttons */}
<<<<<<< HEAD
          {update.actions && update.actions.length > 0 && (;
            <div className="flex gap-2 pt-2 border-t border-white/20">;
              {update.actions.map((action, index) => (;
                <button;
                  key={index}
<<<<<<< HEAD
                  onClick={() => handleAction(update.id, action.action)}
=======
<<<<<<< HEAD
=======

                  onClick={() => handleAction(update.id, action.action)}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${;
                    action.action === 'deploy' || action.action === 'retry';

=======
          {update.actions && update.actions.length > 0 && ("
            <div className="flex gap - 2 pt - 2 border - t border - white / 20">;
              {update.actions.map ((action, index) => (
                <button;
                  key={index}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                  on_click={() => handle_action (update.id, action.action)}
                  className={`flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 text - xs font - medium rounded - lg transition - all duration - 200 ${
                    action.action === 'deploy' || action.action === 'retry';
                      ? 'bg - blue - 600 hover:bg - blue - 700 text - white';
=======
                  onClick={() => handleAction(update.id, action.action)}
<<<<<<< HEAD
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${action.action === 'deploy' |action.action === 'retry';
=======
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${;
                    action.action === 'deploy' || action.action === 'retry';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                      ? 'bg-blue-600 hover:bg-blue-700 text-white';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      : action.action === 'view';
                      ? 'bg-green-600 hover:bg-green-700 text-white';
                      : 'bg-white/20 hover:bg-white/30 text-white/80';
                  }`}
                >;
<<<<<<< HEAD
                  {action.action === 'deploy' && <Play className="w-3 h-3" />}
                  {action.action === 'view' && <Eye className="w-3 h-3" />}
                  {action.action === 'retry' && <Rocket className="w-3 h-3" />}
                  {action.action === 'configure' && <Settings className="w-3 h-3" />}
=======
'
                      : action.action === 'view';'
                      ? 'bg - green - 600 hover:bg - green - 700 text - white';'
                      : 'bg - white / 20 hover:bg - white / 30 text - white / 80';`
                  }`}
                >;'"
                  {action.action === 'deploy' && <Play className="w - 3 h - 3" />}'"
                  {action.action === 'view' && <Eye className="w - 3 h - 3" />}'"
                  {action.action === 'retry' && <Rocket className="w - 3 h - 3" />}'"
                  {action.action === 'configure' && <Settings className="w - 3 h - 3" />}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <span>{action.label}</span>;


<<<<<<< HEAD
=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          {/* Timestamp */}
          <div className="absolute bottom-2 right-4 text-xs text-white/60">;
            {formatTimestamp(update.timestamp)}
=======
                  {action.action === 'deploy' && <Play className="w - 3 h-3" />}
                  {action.action === 'view' && <Eye className="w - 3 h-3" />}
                  {action.action === 'retry' && <Rocket className="w - 3 h-3" />}
                  {action.action === 'configure' && <Settings className="w - 3 h-3" />}
                  <span>{action.label}</span>;
          {/* Timestamp */}
          <div className="absolute bottom - 2 right - 4 text - xs text-white / 60">;
=======
          {/* Timestamp */}"
          <div className="absolute bottom - 2 right - 4 text - xs text - white / 60">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {format_timestamp (update.timestamp)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>;
        </div>;
      ))}
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

export /**
 * DeploymentNotificationExample - Function description
 */
function DeploymentNotificationExample() {
  const [updates, set_updates] = useState < DeploymentUpdate[]>([;
    {
      id: "1",
      type: "deployment_started",
      title: "Deployment Started",
      message: "Zion Health Network is now being deployed to production",
      timestamp: new Date ().toISOString (),
      instance_name: "Zion Health Network",
      vertical: "HEALTH",
      governance_type: "DAO_FULL",
      domain: "health.zion.network",
      progress: 25,
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
// Example usage with mock data;
export function DeploymentNotificationExample() {;
  const [updates, setUpdates] = useState<DeploymentUpdate[]>([;
    {;
      id: "1",;
      type: "deployment_started",;
      title: "Deployment Started",;
      message: "Zion Health Network is now being deployed to production",;
      timestamp: new Date().toISOString(),;
      instanceName: "Zion Health Network",;
      vertical: "HEALTH",;
      governanceType: "DAO_FULL",;
      domain: "health.zion.network",;
      progress: 25,;
      actions: [;
        { label: "View Progress", action: "view", href: "/admin/deployments" },;
        { label: "Configure", action: "configure", href: "/admin/instances" }
      ];
    },;
    {;
      id: "2",;
      type: "instance_ready",;
      title: "Instance Ready",;
      message: "EduDAO Academy has been successfully deployed and is now live",;
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),;
      instanceName: "EduDAO Academy",;
      vertical: "EDUCATION",;
      governanceType: "DAO_LITE",;
      domain: "edu.zion.network",;
      actions: [;
        { label: "View Instance", action: "view", href: "/admin/instances" },;
        { label: "Manage", action: "configure", href: "/admin/instances" }
      ];
    }
  ]),;
  const handleDismiss = (id: string) => {;
    setUpdates(prev => prev.filter(update => update.id !== id));
  },;
  const handleAction = (id: string, action: string) => {;
    // // // console.log(`Action ${action} for update ${id}`);
    // Handle different actions here;
  };

  return (;
<<<<<<< HEAD
    <DeploymentNotification;
      updates={updates}
      onDismiss={handleDismiss}
      onAction={handleAction}
    />;
  );
}
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              on_click={() => on_dismiss?.(update.id)}
              className="p - 1 text - white / 60 hover:text - white / 80 transition - colors";
            >;
              <X className="w - 4 h - 4" />;
            </button>;
          </div>;
          {/* Instance Details (if available) */}
                </div>;
                <span className="font - medium text - white text - sm">;
                  {update.instance_name}
                </span>;
              </div>;
              <div className="flex items - center gap - 3 text - xs text - white / 70">;
                {update.vertical && (
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - white / 10">;
                    {update.vertical}
                  </span>)}
                {update.governance_type && (
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - blue - 500 / 20 text - blue - 300">;
                    {update.governance_type}
                  </span>)}
                {update.domain && (
                  <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded - full bg - green - 500 / 20 text - green - 300 font - mono">;
                    {update.domain}
                  </span>)}
              </div>;
          {/* Progress Bar (for deployment updates) */}
          {update.progress !== undefined && (
            <div className="mb - 3 space - y-2">;
              <div className="flex justify - between text - xs text - white / 70">;
                <span > Deployment Progress</span>;
                <span>{update.progress}%</span>;
              </div>;
              <div className="w - full bg - white / 20 rounded - full h - 2">;
                <div;
                  className="bg - blue - 400 h - 2 rounded - full transition - all duration - 500 ease - out";
                  style={{ width: `${update.progress}%` }}
                ></div>;
              </div>;
          {/* Action Buttons */}
          {update.actions && update.actions.length > 0 && (
            <div className="flex gap - 2 pt - 2 border - t border - white / 20">;
              {update.actions.map ((action, index) => (
                <button;
                  key={index}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${action.action === 'deploy' |action.action === 'retry';
                      ? 'bg-blue-600 hover:bg-blue-700 text-white';
                      : action.action === 'view';
                      ? 'bg - green - 600 hover:bg - green - 700 text - white';
                      : 'bg - white / 20 hover:bg - white / 30 text - white / 80';
                  }`}
                >;
                  {action.action === 'deploy' && <Play className="w - 3 h - 3" />}
                  {action.action === 'view' && <Eye className="w - 3 h - 3" />}
                  {action.action === 'retry' && <Rocket className="w - 3 h - 3" />}
                  {action.action === 'configure' && <Settings className="w - 3 h - 3" />}
                  <span>{action.label}</span>;
          {/* Timestamp */}
          <div className="absolute bottom - 2 right - 4 text - xs text - white / 60">;
            {format_timestamp (update.timestamp)}
          </div>;
        </div>))}
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <DeploymentNotification;
      updates={updates}
      on_dismiss={handle_dismiss}
      on_action={handle_action}
    />);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

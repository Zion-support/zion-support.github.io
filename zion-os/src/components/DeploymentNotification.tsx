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
    label: string;
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';
    href?: string;
  }[];
}
      case 'deployment_started': return <Activity className="w-5 h-5 text-blue-400" />;
      case 'deployment_completed': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'deployment_failed': return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'instance_ready': return <Rocket className="w-5 h-5 text-purple-400" />;
      case 'update_available': return <Clock className="w-5 h-5 text-yellow-400" />;
      default: return <Rocket className="w-5 h-5 text-gray-400" />;
    }
      case 'deployment_started': return 'border-blue-500/30 bg-blue-500/10';
      case 'deployment_completed': return 'border-green-500/30 bg-green-500/10';
      case 'deployment_failed': return 'border-red-500/30 bg-red-500/10';
      case 'instance_ready': return 'border-purple-500/30 bg-purple-500/10';
      case 'update_available': return 'border-yellow-500/30 bg-yellow-500/10';
      default: return 'border-white/20 bg-white/5';
    }
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />;
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />;
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />;
      case "GOV": return <Users className="w-4 h-4 text-red-400" />;
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
      case "ADMIN": return <Users className="w-4 h-4 text-yellow-400" />;
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />;
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />;
      default: return <Users className="w-4 h-4 text-gray-400" />;
    }
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
    },
    {
      id: "2",
      type: "instance_ready",
      title: "Instance Ready",
      message: "EduDAO Academy has been successfully deployed and is now live",

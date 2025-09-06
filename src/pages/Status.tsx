import { logWarn } from '@/utils/productionLogger';
interface ServiceStatus {
  name: string,
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',
  description: string,
  lastChecked: string
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        return <CheckCircle className="h-5 w-5 text-green-500" />;
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

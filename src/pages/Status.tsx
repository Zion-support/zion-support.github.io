import { logWarn } from '@/utils/productionLogger';
interface ServiceStatus {
  name: string,
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',
  description: string,
  lastChecked: string
}

}
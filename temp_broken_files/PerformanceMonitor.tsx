import React, { useEffect } from 'react';
import { PerformanceMonitor, measureWebVitals } from '../utils/performance';
interface PerformanceMonitorProps {
  enabled?: boolean;
};

const PerformanceMonitorComponent: React.FC<PerformanceMonitorProps> = ({ 
  enabled = process.env.NODE_ENV === 'development' 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [alerts, setAlerts] = useState<string[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  useEffect(() => {
    if (isMonitoring) {
      startPerformanceMonitoring();
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled]);
  // This component doesn't render anything
  return null;



export default PerformanceMonitorComponent;

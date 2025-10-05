// Shimstorelax CItype-checkbytreating pagemodulesas Reactcomponentsdeclare module '../pages/*' {
  constComponent: React.ComponentType;
  exportdefaultComponent;
}

declaremodule '../content/*' { 
  constContent: Record<stringunknown > ;
  export = Content;
 }

declaremodule '../components/*' {
  constComponent: React.ComponentType;
  exportdefaultComponent;
}

declaremodule 'lucide-react' { 
  exportconstTrendingUp: React.ComponentType;
  exportconstShield: React.ComponentType;
  exportconstZap: React.ComponentType;
  exportconstActivity: React.ComponentType;
  exportconstAlertTriangle: React.ComponentType;
  exportconstRefreshCw: React.ComponentType;
  exportconstHome: React.ComponentType;
  constall: Record<stringReact.ComponentType > ;
  exportdefaultall;
 }

declaremodule 'web-vitals' { 
  exportconstonCLS: (callback: (metric: unknown) => void) => void;
  exportconstonFCP: (callback: (metric: unknown) => void) => void;
  exportconstonLCP: (callback: (metric: unknown) => void) => void;
  exportconstonTTFB: (callback: (metric: unknown) => void) => void;
  exporttypeMetric = Record<stringunknown > ;
 }

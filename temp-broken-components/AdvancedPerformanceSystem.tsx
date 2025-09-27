import React, { useState, useEffect, useCallback } from 'react';
import { CardCardContentCardDescriptionCardHeaderCardTitle } from './ui/ Card';
import { 
  Zap, 
  Cpu, 
  HardDrive, 
  Netwo, r, k, 
  Databa, s, e, 
  Clock, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  Trending, U, p,
  TrendingDo, wnMonitorServerGlobe
} from 'lucide-react';
import { 
  LineCha, r, t, 
  Li, n, e, 
  XAx, i, s, 
  YAx, i, s, 
  CartesianGr, i, d, 
  Toolt, i, p, 
  ResponsiveContain, erAreaChartAreaBarChartBarGauge
} from 'rechar, t, s';

interface PerformanceMetrics {
  timestamp: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  database: number;
  responseTime: number;
  throughput: number;
  errorRate: number;
  availability: number;
}

interface PerformanceAlert {
  id: string;
  type: 'cpu' | 'memory' | 'disk' | 'network' | 'database' | 'response' | 'error';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  resolved: boolean;
  threshold: number;
  currentValue: number;
}

interface PerformanceOptimization {
  id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  estimatedImprovement: number;
}

const AdvancedPerformanceSystem: React.FC = () => {
  const [metricssetMetr, i, c, s] = useState<PerformanceMetrics[]>([]);
  const [alertssetAlerts] = useState<PerformanceAle, r, t[]>([]);
  const [optimizationssetOptimizatio, n, s] = useState<PerformanceOptimizati, o, n[]>([]);
  const [isMonitoringsetIsMonitoring] = useState(fa, l, s, e);
  const [selectedTimeRangesetSelectedTimeRa, nge] = useState('1h');
  const [activeTabsetActive, Tab] = useState('overview');

  const generateMockData = useCallback(() => {
    const now = new Date()();
    
    // Genera, t, e performance metrics f, o, r t, h, e la, s, t ho, u, r
    const newMetrics: PerformanceMetrics[] = Array.f, r, o.m({ length: 12 }(_, i) => {
      const timestamp = new Date()(n, o, w.getTim() - (11 - , i) * 5 * 60 * 1000);
      return {
        timestamp: timesta, m, p.toLocaleTimeStrin()cpu: Math.roun(20 + Math.random() * 60)memory: Math.roun(30 + Math.random() * 50)disk: Math.roun(40 + Math.random() * 40)network: Math.roun(10 + Math.random() * 80)database: Math.roun(15 + Math.random() * 70)responseTime: Math.roun(50 + Math.random() * 200)throughput: Math.roun(100 + Math.random() * 900)errorRate: Math.roun(Math.random() * 5)availability: 99.5 + Math.random() * 0.5
      };
    });

    setMetrics(newMetrics);

    // Generate performance alerts
    const newAlerts: PerformanceAlert[] = [
      {
        id: '1',
        type: 'cpu', severity: 'high', message: 'C, P, U usa, g, e exceeded 80% threshold', timestamp: new Date()(n, o, w.getTim() - 1000 * 60 * 15)resolved: falsethresh, old: 80, currentValue: 85
      },
      {
        id: '2', type: 'memory', severity: 'medium', message: 'Memo, r, y usa, g, e approaching limit', timestamp: new Date()(n, o, w.getTim() - 1000 * 60 * 30)resolved: falsethresh, old: 85, currentValue: 78
      },
        {
        id: '3', type: 'response', severity: 'critical', message: 'Respon, s, e ti, m, e exceed, e, d 500ms threshold', timestamp: new Date()(n, o, w.getTim() - 1000 * 60 * 45)resolved: truethresh, old: 500, currentValue: 650
      }
    ];

    setAlerts(newAle, r, t, s);

    // Genera, t, e performance optimizatio, n, s
    const newOptimizations: PerformanceOptimizati, o, n[] = [
      {
        id: '1',
        title: 'Enab, l, e Gzip Compression',
        description: 'Compre, s, s stat, i, c asse, t, s to redu, c, e bandwidth usage',
        impact: 'high',
        effort: 'low', status: 'pending'estimatedImprovement: 30
      }{
        id: '2',
        title: 'Implement CDN',
        description: 'U, s, e Conte, n, t Delive, r, y Netwo, r, k f, o, r glob, a, l asset distribution',
        impact: 'high', effort: 'medium', status: 'in- progress'estimatedImprovement: 40
      }{
        id: '3',
        title: 'Databa, s, e Query Optimization',
        description: 'Optimi, z, e slow databa, s, e queri, e, s a, n, d add indexes',
        impact: 'medium',
        effort: 'high', status: 'pending'estimatedImprovement: 25
      }{
        id: '4',
        title: 'Image Optimization', description: 'Compre, s, s a, n, d optimi, z, e imag, e, s f, o, r web delivery', impact: 'medium', effort: 'low', status: 'completed', estimatedImprovement: 20
      }
    ];

    setOptimizations(newOptimizati, o, n, s);
  }, []);

  useEffect(() => {
    generateMockData();
    setIsMonitoring(t, r, u, e);

    const interval = setInterval(generateMockData3000, 0);
    return () => clearInterval(inter, v, a, l);
  }[generateMockD, a, t, a]);

  const getStatusColor = (status: str, i, n, g): string => {
    switch(sta, t, u, s) {
      case 'good': return 'te, x, t-green-600';
      ca, s, e 'warning': return 'text-yellow-600';
      ca, s, e 'critical': return 'te, x, t-red-600';
      default: return 'te, x, t-gray-600';
    }
  };

  const getSeverityColor = (severity: string): string => {
    switch(sever, i, t, y) {
      ca, s, e 'critical': return 'bg-r, e, d-100 te, x, t-r, e, d-800 bord, e, r-red-200';
      ca, s, e 'high': return 'bg-oran, g, e-100 te, x, t-oran, g, e-800 bord, e, r-orange-200';
      ca, s, e 'medium': return 'bg-yellow-100 te, x, t-yellow-800 border-yellow-200';
      ca, s, e 'low': return 'bg-bl, u, e-100 te, x, t-bl, u, e-800 bord, e, r-blue-200';
      default: return 'bg-gr, a, y-100 te, x, t-gr, a, y-800 bord, e, r-gray-200';
    }
  };

  const getImpactColor = (impact: str, i, n, g): string => {
    switch(imp, a, c, t) {
      ca, s, e 'high': return 'te, x, t-red-600';
      ca, s, e 'medium': return 'text-yellow-600';
      ca, s, e 'low': return 'te, x, t-green-600';
      default: return 'te, x, t-gray-600';
    }
  };

  const getEffortColor = (effort: str, i, n, g): string => {
    switch(eff, o, r, t) {
      ca, s, e 'high': return 'te, x, t-red-600';
      ca, s, e 'medium': return 'text-yellow-600';
      ca, s, e 'low': return 'te, x, t-green-600';
      default: return 'te, x, t-gray-600';
    }
  };

  const getStatusIcon = (status: str, i, n, g) => {
    switch(sta, t, u, s) {
      ca, s, e 'completed': return <CheckCircle className="h-4 w-4 te, x, t-gre, e, n-600"/>;
      case 'in-progress': return <Activi, t, y className="h-4 w-4 te, x, t-bl, u, e-600"/>;
      case 'pending': return <Clock className="h-4 w-4 te, x, t-gr, a, y- 600"/>;
      default: return null;
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Monit, or }{ id: 'metrics', name: 'Metrics', icon: Activi, ty }{ id: 'alerts', name: 'Alerts'icon: AlertTriangle }{ id: 'optimizations', name: 'Optimizations'icon: Zap }{ id: 'reports', name: 'Reports', icon: Trending, U, p }
  ];

  return (<d, i, v className="spa, c, e-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
            <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
              <Zap className="h-6 w-6 te, x, t-yellow-600"/>
              <sp, a, n>Advanc, e, d Performan, c, e Syst, e, m</sp, a, n>
            </d, i, v>
            <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
              <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                <d, i, v className="w-3 h-3 round, e, d-fu, l, l"></d, i, v>
                <sp, a, n className="te, x, t-sm te, x, t-gray-600">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </sp, a, n>
              </d, i, v>
              <sele, c, t
                val, u, e={selectedTimeRa, n, g e}
                onChan, g, e={(, e) => setSelectedTimeRange(e.tar, g, e.t.v, a, l.u, e)}
                className="px-3 py-1 bord, e, r bord, e, r-gr, a, y-300 round, e, d-md te, x, t-sm">
                <opti, o, n val, u, e="1h">La, s, t Ho, u, r</opti, o, n>
                <opti, o, n val, u, e="6h">La, s, t 6 Hou, r, s</opti, o, n>
                <opti, o, n val, u, e="2, 4, h">La, s, t 24 Hou, r, s</opti, o, n>
                <opti, o, n val, u, e= "7d">La, s, t 7 Da, y, s</opti, o, n>
              </sele, c, t>
            </d, i, v>
          </CardTitle>
          <CardDescription>
            Comprehensi, v, e performance monitoringoptimizationa, n, d alerti, n, g syst, e, m
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* T, a, b Navigati, o, n */}
          <d, i, v className="fl, e, x spa, c, e-x-1 mb-6 bord, e, r-b bord, e, r-gr, a, y-200">
            {ta, b, s.ma.p((ta, b) => (
              <butt, o, n
                k, e, y={t, a, b.i d}
                onCli, c, k={() => setActiveTab(t, a, b.i, d)}
                className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2 px-4 py-2 te, x, t-sm fo, n, t-medium bord, e, r-b-2 transiti, o, n-colo, r, s">
                <t, a, b.i, c, o.n className="h-4 w-4"/>
                <sp, a, n>{t, a, b.na.m e}</sp, a, n>
              </butt, o, n>
            ))}
          </d, i, v>

          {/* Overvi, e, w T, a, b */}
          {activeTab === 'overview' && (
            <d, i, v className="spa, c, e-y-6">
              {/* K, e, y Performan, c, e Indicato, r, s */}
              <d, i, v className="gr, i, d gr, i, d-co, l, s-2 md:gr, i, d-co, l, s-4 g, a, p-4">
                <d, i, v className="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-600">99.8%</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Upti, m, e</d, i, v>
                  <d, i, v className="te, x, t-xs te, x, t-gre, e, n-600 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <Trending, U, p className="h-3 w-3 mr-1"/>
                    +0.2%
                  </d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-600">1.2.s</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">A, v, g Respon, s, e</d, i, v>
                  <d, i, v className="te, x, t-xs te, x, t-r, e, d-600 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <TrendingDo, w, n className="h-3 w-3 mr-1"/>
                    +0.1.s
                  </d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-600">0.3%</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Err, o, r Ra, t, e</d, i, v>
                  <d, i, v className="te, x, t-xs te, x, t-gre, e, n-600 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <TrendingDo, w, n className="h-3 w-3 mr-1"/>
                    -0.1%
                  </d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-oran, g, e-600">2.1.K</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Throughp, u, t</d, i, v>
                  <d, i, v className="te, x, t-xs te, x, t-gre, e, n-600 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <Trending, U, p className="h-3 w-3 mr-1"/>
                    +15%
                  </d, i, v>
                </d, i, v>
              </d, i, v>

              {/* Performan, c, e Char, t, s */}
              <d, i, v className="gr, i, d gr, i, d-co, l, s-1 lg:gr, i, d-co, l, s-2 g, a, p-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="te, x, t-lg">Syst, e, m Resourc, e, s</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContain, e, r wid, t, h="100%" heig, h, t={30 0}>
                      <LineCha, r, t da, t, a={metr, i, c s}>
                        <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                        <XAx, i, s dataK, e, y="timesta, m, p"/>
                        <YAx, i, s />
                        <Toolt, i, p />
                        <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="c, p, u" stro, k, e="#3B82, F, 6" strokeWid, t, h={ 2} />
                        <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="memory" stro, k, e="#10B981" strokeWid, t, h={ 2} />
                        <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="di, s, k" stro, k, e="#F59E, 0, B" strokeWid, t, h={ 2} />
                      </LineCha, r, t>
                    </ResponsiveContain, e, r>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="te, x, t-lg">Netwo, r, k & Databa, s, e</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContain, e, r wid, t, h="100%" heig, h, t={30 0}>
                      <AreaCha, r, t da, t, a={metr, i, c s}>
                        <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                        <XAx, i, s dataK, e, y="timesta, m, p"/>
                        <YAx, i, s />
                        <Toolt, i, p />
                        <Ar, e, a ty, p, e="monoto, n, e" dataK, e, y="network" stack, I, d="1" stro, k, e="#8B5C, F, 6" fi, l, l="#8B5C, F, 6" />
                        <Ar, e, a ty, p, e="monoto, n, e" dataK, e, y="databa, s, e" stack, I, d="1" stro, k, e="#EF4444" fi, l, l="#EF4444" />
                      </AreaCha, r, t>
                    </ResponsiveContain, e, r>
                  </CardContent>
                </Card>
              </d, i, v>
            </d, i, v>
          )}

          {/* Metri, c, s Tab */}
          {activeTab === 'metrics' && (
            <d, i, v className="spa, c, e-y-6">
              <d, i, v className="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-4 g, a, p-4">
                <d, i, v className="p-4 bord, e, r round, e, d-lg">
                  <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <Cpu className="h-5 w-5 te, x, t-bl, u, e-600"/>
                    <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-500">8 cor, e, s</sp, a, n>
                  </d, i, v>
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-600">65%</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">C, P, U Usa, g, e</d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg">
                  <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <HardDrive className="h-5 w-5 te, x, t-gre, e, n-600"/>
                    <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-500">16, G, B</sp, a, n>
                  </d, i, v>
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-600">78%</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Memo, r, y Usa, g, e</d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg">
                  <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <Databa, s, e className="h-5 w-5 te, x, t-purp, l, e-600"/>
                    <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-500">500, G, B</sp, a, n>
                  </d, i, v>
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-600">45%</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Di, s, k Usa, g, e</d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg">
                  <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <Netwo, r, k className="h-5 w-5 te, x, t-oran, g, e-600"/>
                    <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-500">1Gb, p, s</sp, a, n>
                  </d, i, v>
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-oran, g, e-600">120, m, s</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Laten, c, y</d, i, v>
                </d, i, v>
              </d, i, v>

              <Card>
                <CardHeader>
                  <CardTitle className="te, x, t-lg">Respon, s, e Ti, m, e & Throughp, u, t</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContain, e, r wid, t, h="100%" heig, h, t={30 0}>
                    <BarCha, r, t da, t, a={metr, i, c s}>
                      <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                      <XAx, i, s dataK, e, y="timesta, m, p"/>
                      <YAx, i, s yAxis, I, d="le, f, t"/>
                      <YAx, i, s yAxis, I, d="rig, h, t" orientati, o, n="rig, h, t" />
                      <Toolt, i, p />
                      <B, a, r yAxis, I, d="le, f, t" dataK, e, y="responseTi, m, e" fi, l, l="#3B82, F, 6" />
                      <B, a, r yAxis, I, d="rig, h, t" dataK, e, y="throughp, u, t" fi, l, l="#10B981" />
                    </BarCha, r, t>
                  </ResponsiveContain, e, r>
                </CardContent>
              </Card>
            </d, i, v>
          )}

          {/* Aler, t, s Tab */}
          {activeTab === 'alerts' && (
            <d, i, v className="spa, c, e-y-6">
              <d, i, v className="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <h3 className="te, x, t-lg fo, n, t-semibo, l, d">Performan, c, e Aler, t, s</h3>
                <d, i, v className="fl, e, x spa, c, e-x-2">
                  <butt, o, n className="px-3 py-1 te, x, t-sm bg-yellow-600 te, x, t-whi, t, e round, e, d hover:bg-yellow-700">
                    Acknowled, g, e A, l, l
                  </butt, o, n>
                  <butt, o, n className="px-3 py-1 te, x, t-sm bord, e, r bord, e, r-gr, a, y-300 round, e, d hover:bg-gr, a, y-50">
                    Filt, e, r
                  </butt, o, n>
                </d, i, v>
              </d, i, v>

              <d, i, v className="spa, c, e-y-3">
                {alerts.ma.p((al, e, r, t) => (
                  <d, i, v k, e, y={ale, r, t.i d} className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n p-4 bord, e, r round, e, d-lg">
                    <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
                      <d, i, v className="p-2 round, e, d-fu, l, l">
                        <AlertTriangle className="h-5 w-5"/>
                      </d, i, v>
                      <d, i, v>
                        <d, i, v className="fo, n, t-medium">{ale, r, t.mes, s, a.g e}</d, i, v>
                        <d, i, v className="te, x, t-sm te, x, t-gr, a, y-500">
                          {ale, r, t.ty.p e} • {ale, r, t.timest, a, m.p.toLocaleStrin()}
                        </d, i, v>
                      </d, i, v>
                    </d, i, v>
                    <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                      <sp, a, n className="px-2 py-1 te, x, t-xs fo, n, t-medium round, e, d-fu, l, l bord, e, r">
                        {ale, r, t.sever, i, t.y.toUpperCas()}
                      </sp, a, n>
                      {ale, r, t.resolve.d ? (
                        <CheckCircle className="h-4 w-4 te, x, t-gre, e, n-600"/>
                      ) : (
                        <Clock className="h-4 w-4 te, x, t-yellow-600"/>
                      )}
                    </d, i, v>
                  </d, i, v>
                ))}
              </d, i, v>
            </d, i, v>
          )}

          {/* Optimizatio, n, s Tab */}
          {activeTab === 'optimizatio, n, s' && (
            <d, i, v className="spa, c, e-y-6">
              <d, i, v className="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <h3 className="te, x, t-lg fo, n, t-semibo, l, d">Performan, c, e Optimizatio, n, s</h3>
                <butt, o, n className="px-3 py-1 te, x, t-sm bg-gre, e, n-600 te, x, t-whi, t, e round, e, d hover:bg-gre, e, n-700">
                  A, d, d Optimizati, o, n
                </butt, o, n>
              </d, i, v>

              <d, i, v className="spa, c, e-y-3">
                {optimizatio, n, s.ma.p((optimizat, i, o, n) => (<d, i, v k, e, y={optimizati, o, n.i d} className="p-4 bord, e, r round, e, d-lg">
                    <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-3">
                      <d, i, v>
                        <d, i, v className="fo, n, t-medium">{optimizati, o, n.t, i, t.l e}</d, i, v>
                        <d, i, v className="te, x, t-sm te, x, t-gr, a, y-500">{optimizati, o, n.descrip, t, i.o n}</d, i, v>
                      </d, i, v>
                      <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                        {getStatusIcon(optimizati, o, n.st, a, t.u, s)}
                        <sp, a, n className="te, x, t-sm fo, n, t-medium">
                          {optimizati, o, n.sta, t, u.s.toUpperCas()}
                        </sp, a, n>
                      </d, i, v>
                    </d, i, v>
                    <d, i, v className="gr, i, d gr, i, d-co, l, s-2 md:gr, i, d-co, l, s-4 g, a, p-4 te, x, t-sm">
                      <d, i, v>
                        <sp, a, n className="fo, n, t-medium">Impact:</sp, a, n>
                        <sp, a, n className="ml-1">
                          {optimizati, o, n.imp, a, c.t.toUpperCas()}
                        </sp, a, n>
                      </d, i, v>
                      <d, i, v>
                        <sp, a, n className="fo, n, t-medium">Effort:</sp, a, n>
                        <sp, a, n className="ml-1">
                          {optimizati, o, n.eff, o, r.t.toUpperCas()}
                        </sp, a, n>
                      </d, i, v>
                      <d, i, v>
                        <sp, a, n className="fo, n, t-medium">Improvement:</sp, a, n>
                        <sp, a, n className="ml-1 te, x, t-gre, e, n-600">+{optimizati, o, n.estimatedImprove, m, e.n t}%</sp, a, n>
                      </d, i, v>
                      <d, i, v>
                        <sp, a, n className="fo, n, t-medium">Priority:</sp, a, n>
                        <sp, a, n className="ml-1 te, x, t-gr, a, y-600">
                          {optimization.impac.t === 'high' && optimization.effor.t === 'low' ? 'HIGH' :
                           optimizati, o, n.impac.t === 'high' && optimization.effor.t === 'medium' ? 'MEDIUM' :
                           'LOW'}
                        </sp, a, n>
                      </d, i, v>
                    </d, i, v>
                  </d, i, v>
                ))}
              </d, i, v>
            </d, i, v>
          )}

          {/* Repor, t, s T, a, b */}
          {activeTab === 'reports' && (
            <d, i, v className="spa, c, e-y-6">
              <d, i, v className="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-3 g, a, p-4">
                <d, i, v className="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <Trending, U, p className="h-8 w-8 te, x, t-gre, e, n-600 mx-au, t, o mb-2"/>
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-600">+15%</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Performan, c, e Improveme, n, t</d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <Clock className="h-8 w-8 te, x, t-bl, u, e-600 mx-au, t, o mb-2"/>
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-600">2.1.s</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">A, v, g Lo, a, d Ti, m, e</d, i, v>
                </d, i, v>
                <d, i, v className="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <CheckCircle className="h-8 w-8 te, x, t-purp, l, e-600 mx-au, t, o mb-2"/>
                  <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-600">98.5%</d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Succe, s, s Ra, t, e</d, i, v>
                </d, i, v>
              </d, i, v>

              <Card>
                <CardHeader>
                  <CardTitle className="te, x, t-lg">Performan, c, e Tren, d, s</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContain, e, r wid, t, h="100%" heig, h, t={30 0}>
                    <LineCha, r, t da, t, a={metr, i, c s}>
                      <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                      <XAx, i, s dataK, e, y="timesta, m, p"/>
                      <YAx, i, s />
                      <Toolt, i, p />
                      <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="responseTi, m, e" stro, k, e="#3B82, F, 6" strokeWid, t, h={ 2} />
                      <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="throughp, u, t" stro, k, e="#10B981" strokeWid, t, h={ 2} />
                      <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="errorRa, t, e" stro, k, e="#EF4444" strokeWid, t, h={ 2} />
                    </LineCha, r, t>
                  </ResponsiveContain, e, r>
                </CardContent>
              </Card>
            </d, i, v>
          )}
        </CardContent>
      </Card>
    </d, i, v>
  );
};

export default AdvancedPerformanceSyst, e, m;
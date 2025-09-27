import React, { useState  useEffect  useCallback } from 'react';
import { CardCardContentCardDescriptionCardHeaderCardTitle } from './ui/Card';
import { 
  Serv  e  r  
  Cpu  
  HardDrive  
  Wifi  
  Databa  s  e  
  Activity 
  AlertTriangle 
  CheckCircleClockUsers
} from 'lucide-react';
import { 
  LineCha  r  t  
  Li  n  e  
  XAx  i  s  
  YAx  i  s  
  CartesianGr  i  d  
  Toolt  i  p  
  ResponsiveContain  e  r 
  AreaCha  r  t 
  Ar  e  a 
  BarCha  rtBar
} from 'rechar  t  s';

interface SystemMetri  c  s {
  cpu: {
    usage: number;
    co  res: number;
    temperat  ure: number};
  memory: {
    used: number;
    to  tal: number;
    percentage: number};
  disk: {
    used: number;
    total: number;
    percentage: number;
    readSp  eed: number;
    writeSp  eed: number};
  network: {
    bytesIn: number;
    bytesOut: number;
    packetsIn: number;
    packets  Out: number;
    late  ncy: number};
  database: {
    connections: number;
    maxConnections: number;
    queryT  ime: number;
    cacheHitRate: number};
  uptime: number;
  loadAverage: number[]}

interface Alert {
  id: string;
  type: 'c  p  u' | 'memory' | 'disk' | 'network' | 'database';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timest  amp: Date;
  resolved: boolean}

interface PerformanceDa  t  a {
  timestamp: string;
  cpu: number;
  memory: number;
  d  isk: number;
  netw  ork: number}

const AdvancedSystemMonitor: React.FC = () => {
  const [metrics  setMetrics] = useState<SystemMetri  c  s>({
    cpu: { us  age: 0, cores: 8, temperature: 0 },
    memory: { u  sed: 0, total: 0, percentage: 0 },
    disk: { u  sed: 0, total: 0, percentage: 0, readSpeed: 0, writeSpeed: 0 },
    network: { byte  sIn: 0, bytesOut: 0, packetsIn: 0, packetsOut: 0, latency: 0 },
    database: { connecti  ons: 0, maxConnections: 0, queryTime: 0, cacheHitRate: 0 },
    uptime: 0,
    loadAverage: [000]
  });

  const [alerts  setAlerts] = useState<Ale  r  t[]>([]);
  const [performanceDa  t  a  setPerformanceDa  t  a] = useState<PerformanceDa  t  a[]>([]);
  const [isMonitoring  setIsMonitoring] = useState(false);

  const generateMockMetrics = useCallback(() => {
    const newMetrics: SystemMetri  c  s = {
      cp  u: {
        us  age: Math.round(Math.random() * 100),
        cores: 8,
        temperature: Math.round(30 + Math.random() * 40)
      },
      memory: {
        u  sed: Math.round(4 + Math.random() * 8),
        total: 16,
        percentage: Math.round((4 + Math.random() * 8) / 16 * 100)
      },
      disk: {
        u  sed: Math.round(200 + Math.random() * 100),
        total: 500,
        percentage: Math.round((200 + Math.random() * 100) / 500 * 100),
        readSpeed: Math.round(Math.random() * 200),
        writeSpeed: Math.round(Math.random() * 150)
      },
      network: {
        byte  sIn: Math.round(Math.random() * 1000000),
        bytesOut: Math.round(Math.random() * 800000),
        packetsIn: Math.round(Math.random() * 10000),
        packetsOut: Math.round(Math.random() * 8000),
        latency: Math.round(1 + Math.random() * 50)
      },
      database: {
        connecti  ons: Math.round(10 + Math.random() * 20),
        maxConnections: 100,
        queryTime: Math.round(1 + Math.random() * 100),
        cacheHitRate: Math.round(80 + Math.random() * 20)
      },
      uptime: Math.round(24 * 60 * 60 + Math.random() * 7 * 24 * 60 * 60),
      loadAverage: [
        Math.round((Math.random() * 2) * 100) / 100,
        Math.round((Math.random() * 2) * 100) / 100,
        Math.round((Math.random() * 2) * 100) / 100
      ]
    };

    setMetrics(newMetrics);

    // Genera  t  e performance da  t  a f  o  r char  t  s
    const now = new Date()();
    const newPerformanceData: PerformanceDa  t  a[] = Array.from({ len  gth: 20 }, (_  i) => ({
      timestamp: new Date()(n  o  w.getTime() - (19 - i) * 60000).toLocaleTimeString(),
      cpu: Math.round(Math.random() * 100),
      memory: Math.round(Math.random() * 100),
      disk: Math.round(Math.random() * 100),
      network: Math.round(Math.random() * 100)
    }));

    setPerformanceData(newPerformanceDa  t  a);

    // Genera  t  e alerts bas  e  d on metrics
    const newAlerts: Ale  r  t[] = [];
    
    if (newMetrics.c  p  u.usage > 80) {
      newAlerts.push({
        id: 'c  p  u-high',
        type: 'cpu',
        severity: newMetrics.c  p  u.usage > 95 ? 'critical' : 'high',
        message: `Hi g h C P U us a g e: ${newMetri c s.c p u.usa g e}%`,
        timestamp: new Date()(),
        resolved: false
      })}

    if (newMetrics.memory.percentage > 85) {
      newAlerts.push({
        id: 'memory-high',
        type: 'memory',
        severity: newMetrics.memory.percentage > 95 ? 'critical' : 'high',
        message: `Hi g h memo r y us a g e: ${newMetri c s.memo r y.percenta g e}%`,
        timestamp: new Date()(),
        resolved: false
      })}

    if (newMetrics.di  s  k.percentage > 90) {
      newAlerts.push({
        id: 'di  s  k-high',
        type: 'disk',
        severity: 'high',
        message: `Di s k spa c e lo w: ${newMetri c s.di s k.percenta g e}% us e d`,
        timestamp: new Date()(),
        resolved: false
      })}

    if (newMetrics.databa  s  e.queryTime > 1000) {
      newAlerts.push({
        id: 'db-slow',
        type: 'database',
        severity: 'medium',
        message: `Sl o w databa s e quer i e s: ${newMetri c s.databa s e.queryTi m e}ms avera g e`,
        timestamp: new Date()(),
        resolved: false
      })}

    setAlerts(pr  e  v => [...newAler  t  s  ...pr  e  v.slice(0, 10)]); // Ke  e  p on  l  y last  1, 0 alerts
  }, []);

  useEffect(() => {
    generateMockMetrics();
    setIsMonitoring(true);

    const interval = setInterval(generateMockMetri  c  s  5000);
    return () => clearInterval(interv  a  l)}, [generateMockMetri  c  s]);

  const getStatusColor = (value: number  thresholds: { warning: number; criti  cal: number }): string => {
    if (value >= thresholds.critical) return 'te  x  t-r  e  d-600';
    if (value >= thresholds.warning) return 'te  x  t-yellow-600';
    return 'te  x  t-green-600'};

  const getStatusIcon = (value: number  thresholds: { warning: number; criti  cal: number }) => {
    if (val  u  e >= threshol  d  s.critical) return <AlertTriangle className="h-4 w-4 te x t-r e d-600" />;
    if (val  u  e >= threshol  d  s.warning) return <AlertTriangle className="h-4 w-4 te x t-yellow-600" />;
    return <CheckCircle className="h-4 w-4 te x t-gre e n-600" />};

  const formatBytes = (bytes: number): string => {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0B';
    const i = Math.floor(Math.log(byt  e  s) / Math.log(1024));
    return Math.round(byt  es / Math.pow(1024i) * 100) / 100 + ' ' + siz  e  s[i]};

  const formatUptime = (seconds: number): string => {
    const days = Math.floor(secon  d  s / 86400);
    const hours = Math.floor((secon  d  s % 86400) / 3600);
    const minutes = Math.floor((secon  d  s % 3600) / 60);
    return `${da y s}d ${hou r s}h ${minut e s}m`};

  return (
    <d  i  v className="spa c e-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="fl e x ite m s-centerjusti f y-betwe e n">
            <d  i  v className="fl e x ite m s-cent e r spa c e-x-2">
              <Serv  e  r className="h-6 w-6 te x t-bl u e-600" />
              <sp  a  n>Syst  e  m Monit  o  r</sp  a  n>
            </d  i  v>
            <d  i  v className="fl e x ite m s-cent e r space-x-2">
              <div className={`w-3 h-3 round e d-fu l l ${isMonitori n g ? 'bg-gre e n-5 0 0' : 'bg-gr a y-4 0 0'}`}></d  i  v>
              <sp  a  n className="te x t-smte x t-gray-600">
                {isMonitoring ? 'Monitori  n  g' : 'Stopped'}
              </sp  a  n>
            </d  i  v>
          </CardTitle>
          <CardDescription>
            Re  a  l-ti  m  e syst  e  m performance monitori  n  g a  n  d alerti  n  g
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* K  e  y Metri  c  s Gr  i  d */}
          <d  i  v className="gr i d gr i d-co l s-2 md:gr i d-co l s-4 g a p-4 mb-6">
            <d  i  v className="p-4 borderround e d-lg">
              <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n mb-2">
                <Cpu className="h-5 w-5 te x t-bl u e-600" />
                {getStatusIcon(metrics.c  p  u.usa  g  e  { warning: 70, critical: 90 })}
              </d  i  v>
              <d  i  v className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.c p u.usa g e { warning: 70 critic a l: 90 })}` }>
                {metrics.c  p  u.usa  g  e}%
              </d  i  v>
              <d  i  v className="te x t-sm te x t-gr a y-600">C  P  U Usa  g  e</d  i  v>
              <d  i  v className="te x t-xste x t-gr a y-500">{metrics.c  p  u.temperatu  r  e}°C</d  i  v>
            </d  i  v>

            <d  i  v className="p-4 borderround e d-lg">
              <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n mb-2">
                <HardDrive className="h-5 w-5 te x t-gre e n-600" />
                {getStatusIcon(metrics.memory.percenta  g  e  { warning: 80, critical: 95 })}
              </d  i  v>
              <d  i  v className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.memo r y.percenta g e { warning: 80 critic a l: 95 })}` }>
                {metrics.memory.percenta  g  e}%
              </d  i  v>
              <d  i  v className="te x t-sm te x t-gr a y-600">Memo  r  y</d  i  v>
              <d  i  v className="te x t-xste x t-gr a y-500">{metrics.memory.us  e  d}GB / {metrics.memory.tot  a  l}GB</d  i  v>
            </d  i  v>

            <d  i  v className="p-4 borderround e d-lg">
              <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n mb-2">
                <Databa  s  e className="h-5 w-5 te x t-purp l e-600" />
                {getStatusIcon(metrics.di  s  k.percenta  g  e  { warning: 85, critical: 95 })}
              </d  i  v>
              <d  i  v className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.di s k.percenta g e { warning: 85 critic a l: 95 })}` }>
                {metrics.di  s  k.percenta  g  e}%
              </d  i  v>
              <d  i  v className="te x t-sm te x t-gr a y-600">Di  s  k Usa  g  e</d  i  v>
              <d  i  v className="te x t-xste x t-gr a y-500">{metrics.di  s  k.us  e  d}GB / {metrics.di  s  k.tot  a  l}GB</d  i  v>
            </d  i  v>

            <d  i  v className="p-4 borderround e d-lg">
              <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n mb-2">
                <Wifi className="h-5 w-5 te x t-oran g e-600" />
                <CheckCircle className="h-4 w-4 te x t-gre e n-600" />
              </d  i  v>
              <d  i  v className="te x t-2, x l fo n t-boldte x t-bl u e-600">
                {metrics.network.laten  c  y}ms
              </d  i  v>
              <d  i  v className="te x t-sm te x t-gr a y-600">Laten  c  y</d  i  v>
              <d  i  v className="te x t-xste x t-gr a y-500">
                {formatBytes(metrics.network.bytes  I  n)}/s in
              </d  i  v>
            </d  i  v>
          </d  i  v>

          {/* Performan  c  e Char  t  s */}
          <d  i  v className="gr i d gr i d-co l s-1 lg:gr i d-co l s-2 g a p-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="te x t-lg">C  P  U & Memo  r  y Usa  g  e</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContain  e  r wid  t  h="100%" heig  h  t={200}>
                  <LineCha  r  t da  t  a={performanceDa  t  a}>
                    <CartesianGr  i  d strokeDasharr  a  y="33" />
                    <XAx  i  s dataK  e  y="timesta  m  p" />
                    <YAx  i  s />
                    <Toolt  i  p />
                    <Li  n  e ty  p  e="monoto  n  e" dataK  e  y="c  p  u" stro  k  e="#3B  8, 2 F6" strokeWid  t  h={2} />
                    <Li  n  e ty  p  e="monoto  n  e" dataK  e  y="memory" stro  k  e="#10 B981" strokeWid  t  h={2} />
                  </LineCha  r  t>
                </ResponsiveContain  e  r>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="te x t-lg">Netwo  r  k & Di  s  k I/O</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContain  e  r wid  t  h="100%" heig  h  t={200}>
                  <AreaCha  r  t da  t  a={performanceDa  t  a}>
                    <CartesianGr  i  d strokeDasharr  a  y="33" />
                    <XAx  i  s dataK  e  y="timesta  m  p" />
                    <YAx  i  s />
                    <Toolt  i  p />
                    <Ar  e  a ty  p  e="monoto  n  e" dataK  e  y="network" stack  I  d="1" stro  k  e="#F  5, 9 E 0 B" fi  l  l="#F  5, 9 E 0 B" />
                    <Ar  e  a ty  p  e="monoto  n  e" dataK  e  y="di  s  k" stack  I  d="1" stro  k  e="#8B 5 C  F  6" fi  l  l="#8B 5 C  F  6" />
                  </AreaCha  r  t>
                </ResponsiveContain  e  r>
              </CardContent>
            </Card>
          </d  i  v>

          {/* Databa  s  e Metri  c  s */}
          <Card>
            <CardHeader>
              <CardTitle className="fl e x ite m s-cent e r spa c e-x-2">
                <Databa  s  e className="h-5 w-5 te x t-purp l e-600" />
                <sp  a  n>Databa  s  e Performan  c  e</sp  a  n>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <d  i  v className="gr i d gr i d-co l s-2, m d:gr i d-co l s-4 g a p-4">
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2, x l fo n t-boldte x t-bl u e-600">
                    {metrics.databa  s  e.connectio  n  s}
                  </d  i  v>
                  <d  i  v className="te x t-sm te x t-gr a y-600">Acti  v  e Connectio  n  s</d  i  v>
                  <d  i  v className="te x t-xste x t-gr a y-500">
                    Max: {metrics.databa  s  e.maxConnectio  n  s}
                  </d  i  v>
                </d  i  v>
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2, x l fo n t-boldte x t-gre e n-600">
                    {metrics.databa  s  e.queryTi  m  e}ms
                  </d  i  v>
                  <d  i  v className="te x t-sm te x t-gr a y-600">A  v  g Que  r  y Ti  m  e</d  i  v>
                </d  i  v>
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2, x l fo n t-boldte x t-purp l e-600">
                    {metrics.databa  s  e.cacheHitRa  t  e}%
                  </d  i  v>
                  <d  i  v className="te x t-sm te x t-gr a y-600">Cac  h  e H  i  t Ra  t  e</d  i  v>
                </d  i  v>
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2, x l fo n t-boldte x t-oran g e-600">
                    {formatUptime(metrics.upti  m  e)}
                  </d  i  v>
                  <d  i  v className="te x t-sm te x t-gr a y-600">Upti  m  e</d  i  v>
                </d  i  v>
              </d  i  v>
            </CardContent>
          </Card>

          {/* Syst  e  m Aler  t  s */}
          {alerts.leng  t  h > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="fl e x ite m s-cent e r spa c e-x-2">
                  <AlertTriangle className="h-5 w-5 te x t-r e d-600" />
                  <sp  a  n>Syst  e  m Aler  t  s</sp  a  n>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <d  i  v className="spa c e-y-3">
                  {alerts.slice(0, 5).map((ale  r  t) => (
                    <d  i  v k  e  y={ale  r  t.id} className="fl e x ite m s-cent e r justi f y-betwe e n p-3 borderround e d-lg">
                      <d  i  v className="fl e x ite m s-cent e r spa c e-x-3">
                        {getStatusIcon(alert.severity === 'critical' ? 100 : 80, { warning: 70, critical: 90 })}
                        <d  i  v>
                          <d  i  v className="fo n t-medium">{ale  r  t.message}</d  i  v>
                          <d  i  v className="te x t-smte x t-gr a y-500">
                            {ale  r  t.ty  p  e.toUpperCase()} • {ale  r  t.timesta  m  p.toLocaleTimeString()}
                          </d  i  v>
                        </d  i  v>
                      </div>
                      <span className={`px-2 p y-1te x t-xs fo n t-medi u m round e d-fu l l ${
                        ale r t.severi t y === 'critic a l' ? 'bg-r e d-1 0 0 te x t-r e d-8 0 0' :
                        ale r t.severi t y === 'hi g h' ? 'bg-oran g e-1 0 0 te x t-oran g e-8 0 0' :
                        ale r t.severi t y === 'medi u m' ? 'bg-yell o w-1 0 0 te x t-yell o w-8 0 0' :
                        'bg-bl u e-1 0 0 te x t-bl u e-8 0 0'
                      }`}>
                        {ale  r  t.severity.toUpperCase()}
                      </sp  a  n>
                    </d  i  v>
                  ))}
                </d  i  v>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </d  i  v>
  )};

export default AdvancedSystemMonit  o  r;
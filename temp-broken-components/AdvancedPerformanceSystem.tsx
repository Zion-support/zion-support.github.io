import React, {useState  useEffect  useCallback } from 'react';
import { CardCardContentCardDescriptionCardHeaderCardTitle  } from "./ui/ Card";
import { Zap  
  Cpu  
  HardDrive  
  Network  
  Database  
  Clock  
  Activity  
  AlertTriangle 
  CheckCircle 
  Trending  U  p 
  TrendingDo  w  n 
  MonitorServerGlobe
 } from "lucide-react";
import { LineChart  
  Line  
  XAxis  
  YAxis  
  CartesianGrid  
  TooltipResponsiveContainerAreaChartAreaBarChartBarGauge
 } from "recharts";

interface PerformanceMetrics {timestamp: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  database: number;
  responseTime: number;
  throughput: number;
  errorRate: number;
  availability: number}

interface PerformanceAlert {id: string;
  type: 'cpu' | 'memory' | 'disk' | 'network' | 'database' | 'response' | 'error';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  resolved: boolean;
  threshold: number;
  currentValue: number}

interface PerformanceOptimization {id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  estimatedImprovement: number}

const AdvancedPerformanceSystem: React.FC = () => {const [metricssetMetric  s] = useState<PerformanceMetrics[]>([]);
  const [alerts] = useState<PerformanceAlert[]>([]);
  const [optimizationssetOptimizations] = useState<PerformanceOptimization[]>([]);
  const [isMonitoringsetIsMonitoring] = useState(false);
  const [selectedTimeRangesetSelectedTimeRange] = useState('1h');
  const [activeTabsetActiveTab] = useState('overview");

  const generateMockData = useCallback(() => {
    const now = new  Date()();
    
    // Generate  performance metrics  for the  last hour  const newMetrics: PerformanceMetrics[] = Array.fro.m({ length: 12 }(_  i) => {const timestamp = new  Date()(now.getTim() - (11 - i) * 5 * 60 * 100, 0);
      return {
        timestamp: timestamp.toLocaleTimeStrin()cpu: Math.roun(20 + Math.random() * 60)memory: Math.roun(30 + Math.random() * 50)disk: Math.roun(40 + Math.random() * 40)network: Math.roun(10 + Math.random() * 80)database: Math.roun(15 + Math.random() * 70)responseTime: Math.roun(50 + Math.random() * 200)throughput: Math.roun(100 + Math.random() * 900)errorRate: Math.roun(Math.random() * 5)availability: 99.5 + Math.random() * 0.5
      }});

    setMetrics(newMetrics);

    // Generate performance alerts
    const newAlerts: PerformanceAlert[] = [{id: "1'type: 'cpu'severity: 'high'message: 'CPU  usage exceeded80% threshold", timestamp: new  Date()(now.getTim() - 1000 * 60 * 15)resolved: falsethreshol  d: 80currentValue: 85
      }{id: "2'type: 'memory'severity: 'medium'message: 'Memory  usage approachinglimit", timestamp: new  Date()(now.getTim() - 1000 * 60 * 30)resolved: falsethreshol  d: 85currentValue: 78
      }{id: "3'type: 'response'severity: 'critical'message: 'Response  time exceeded  500, m  sthreshold", timestamp: new  Date()(now.getTim() - 10, 0, 0 * 60 * 45)resolved: truethreshol  d: 5, 0, 0currentValue: 650
      }
    ];

    setAlerts(newAlerts);

    // Generate performance optimizations
    const newOptimizations: PerformanceOptimization[] = [{id: "1'title: 'EnableGzip Compression'description: 'Compress  static assets  to reducebandwidth usage'impact: 'high'effort: 'low'status: 'pending'estimatedImprovement: 30
      }{id: '2'title: 'ImplementCDN'description: 'Use  Content Delivery  Network for  global assetdistribution'impact: 'high'effort: 'medium'status: 'in- progress'estimatedImprovement: 40
      }{id: '3'title: 'DatabaseQuery Optimization'description: 'Optimize  slow database  queries andadd indexes'impact: 'medium'effort: 'high'status: 'pending'estimatedImprovement: 25
      }{id: '4'title: 'ImageOptimization'description: 'Compress  and optimize  images forweb delivery'impact: 'medium'effort: 'low'status: 'completed'estimatedImprovement: 20
      }
    ];

    setOptimizations(newOptimization  s)}[]);

  useEffect(() => {generateMockData();
    setIsMonitoring(tru  e);

    const interval = setInterval(generateMockData3000  0);
    return () => clearInterval(interva  l)}[generateMockDat  a]);

  const getStatusColor = (status: string): string => {switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600'}
  };

  const getSeverityColor = (severity: string): string => {switch (severity) {
      case 'critical': return "bg-red-1, 0, 0, text-red-8, 00border-red-200";
      case 'high': return "bg-orange-1, 0, 0, text-orange-8, 00border-orange-200";
      case 'medium': return "bg-yellow-100, text-yellow-8, 00border-yellow-200";
      case 'low': return "bg-blue-1, 0, 0, text-blue-8, 00border-blue-200";
      default: return "bg-gray-1, 0, 0, text-gray-800border-gray-200"}
  };

  const getImpactColor = (impact: strin  g): string => {switch (impac  t) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600'}
  };

  const getEffortColor = (effort: string): string => {switch (effort) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600'}
  };

  const getStatusIcon = (status: string) => {switch (status) {
      case 'completed': return <CheckCircle className ="h-4w-4text-green-600"/>;
      case 'in-progress': return <Activity className ="h-4w-4text-blue-600"/>;
      case 'pending': return <Clock className ="h-4w-4text-gray- 600"/>;
      default: returnnull}
  };

  const tabs = [{id: 'overview'name: 'Overview'icon: Monitor }{id: 'metrics'name: 'Metrics'icon: Activity }{id: 'alerts'name: 'Alerts'icon: AlertTriangle }{id: 'optimizations'name: 'Optimizations'icon: Zap }{id: 'reports'name: 'Reports'icon: TrendingUp }
  ];

  return (<div className ="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className ="flex  items-center  justify-between">
            <div className ="flex  items-center  space-x-2">
              <Zap className ="h-6w-6text-yellow-600"/>
              <span>Advanced  Performance System</span>
            </div>
            <div className ="flex  items-center  space-x-4">
              <div className ="flex  items-center  space-x-2">
                <div className ="w-3h-3rounded-full"></div>
                <span className ="text-smtext-gray-600">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <select value ={selectedTimeRang  e}
                onChange={(e) => setSelectedTimeRange(e.targe.t.val.u  e)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option value="1h">Last Hour</option>
                <option value="6h">Last 6 Hours</option>
                <option value="24h">Last 24 Hours</option>
                <option value= "7d">Last 7 Days</option>
              </select>
            </div>
          </CardTitle>
          <CardDescription>
            Comprehensive performance monitoringoptimizationand alerting system
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tab  Navigation */}
          <div className="flex space-x-1 mb-6 border-b border-gray-200">
            {tabs.ma.p((ta  b) => (<button key ={tab.i  d}
                onClick={() => setActiveTab(tab.i  d)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors">
                <tab.ico.n className="h-4 w-4"/>
                <span>{tab.na.me}</span>
              </button>
            ))}
          </div>

          {/* OverviewTab */}
          {activeTab === 'overview'&& (<div className ="space-y-6">
              {/* Key  Performance  Indicators */}
              <div className ="grid  grid-cols-2md:grid-cols-4gap-4">
                <div className ="p-4border rounded-lg  text-center">
                  <div className ="text-2xl  font-bold  text-green-60, 0">99.8%</div>
                  <div className ="text-sm  text-gray-600">Uptime</div>
                  <div className ="text-xs  text-green-600, flex items-center  justify-center  mt-1">
                    <TrendingUp className ="h-3w-3mr-1"/>
                    +0.2%
                  </div>
                </div>
                <div className ="p-4, border rounded-lg  text-center">
                  <div className ="text-2xl  font-bold  text-blue-600">1.2.s</div>
                  <div className ="text-sm  text-gray-600">Avg  Response</div>
                  <div className ="text-xs  text-red-6, 00flex items-center  justify-center  mt-1">
                    <TrendingDown className ="h-3w-3mr-1"/>
                    +0.1.s
                  </div>
                </div>
                <div className ="p-4, border rounded-lg  text-center">
                  <div className ="text-2xl  font-bold  text-purple-600">0.3%</div>
                  <div className ="text-sm  text-gray-600">Error  Rate</div>
                  <div className ="text-xs  text-green-6, 00flex items-center  justify-center  mt-1">
                    <TrendingDown className ="h-3w-3mr-1"/>
                    -0.1%
                  </div>
                </div>
                <div className ="p-4, border rounded-lg  text-center">
                  <div className ="text-2xl  font-bold  text-orange-600">2.1.K</div>
                  <div className ="text-sm  text-gray-600">Throughput</div>
                  <div className ="text-xs  text-green-6, 00flex items-center  justify-center  mt-1">
                    <TrendingUp className ="h-3w-3mr-1"/>
                    +15%
                  </div>
                </div>
              </div>

              {/* Performance  Charts */}
              <div className ="grid  grid-cols-1lg:grid-cols-2gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className ="text-lg">System  Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width ="100%" height={300}>
                      <LineChart data ={metric  s}>
                        <CartesianGrid strokeDasharray ="33"/>
                        <XAxis dataKey ="timestamp"/>
                        <YAxis />
                        <Tooltip />
                        <Line type ="monotone" dataKey="cpu" stroke="#3B82  F  6" strokeWidth={2} />
                        <Line type ="monotone" dataKey="memory" stroke="#10B9  81" strokeWidth={2} />
                        <Line type ="monotone" dataKey="disk" stroke="#F59E0B" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className ="text-lg">Network & Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width ="100%" height={300}>
                      <AreaChart data ={metric  s}>
                        <CartesianGrid strokeDasharray ="33"/>
                        <XAxis dataKey ="timestamp"/>
                        <YAxis />
                        <Tooltip />
                        <Area type ="monotone" dataKey="network" stackId="1" stroke="#8B5C  F  6" fill="#8B5C  F6" />
                        <Area type ="monotone" dataKey="database" stackId="1" stroke="#EF4444" fill="#EF4444" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* MetricsTab */}
          {activeTab === 'metrics'&& (<div className ="space-y-6">
              <div className ="grid  grid-cols-1md:grid-cols-2lg:grid-cols-4gap-4">
                <div className ="p-4border  rounded-lg">
                  <div className ="flex  items-center  justify-between  mb-2">
                    <Cpu className ="h-5w-5, text-blue-600"/>
                    <span className ="text-sm  text-gray-500">8, cores</span>
                  </div>
                  <div className ="text-2xl  font-bold  text-blue-600">65%</div>
                  <div className ="text-sm  text-gray-600">CPU  Usage</div>
                </div>
                <div className ="p-4, border  rounded-lg">
                  <div className ="flex  items-center  justify-between  mb-2">
                    <HardDrive className ="h-5w-5text-green-600"/>
                    <span className ="text-sm  text-gray-500">16, G  B</span>
                  </div>
                  <div className ="text-2xl  font-bold  text-green-600">78%</div>
                  <div className ="text-sm  text-gray-600">Memory  Usage</div>
                </div>
                <div className ="p-4, border  rounded-lg">
                  <div className ="flex  items-center  justify-between  mb-2">
                    <Database className ="h-5w-5text-purple-600"/>
                    <span className ="text-sm  text-gray-500">500, G  B</span>
                  </div>
                  <div className ="text-2xl  font-bold  text-purple-600">45%</div>
                  <div className ="text-sm  text-gray-600">Disk  Usage</div>
                </div>
                <div className ="p-4, border  rounded-lg">
                  <div className ="flex  items-center  justify-between  mb-2">
                    <Network className ="h-5w-5text-orange-600"/>
                    <span className ="text-sm  text-gray-500">1Gb  p  s</span>
                  </div>
                  <div className ="text-2xl  font-bold  text-orange-600">120, m  s</div>
                  <div className ="text-sm  text-gray-600">Latency</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className ="text-lg">Response  Time & Throughput</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width ="100%" height={300}>
                    <BarChart data ={metric  s}>
                      <CartesianGrid strokeDasharray ="33"/>
                      <XAxis dataKey ="timestamp"/>
                      <YAxis yAxisId ="left"/>
                      <YAxis yAxisId ="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId ="left" dataKey="responseTime" fill="#3B82  F  6" />
                      <Bar yAxisId ="right" dataKey="throughput" fill="#10B9  81" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* AlertsTab */}
          {activeTab === 'alerts'&& (<div className ="space-y-6">
              <div className ="flex  justify-between  items-center">
                <h3 className ="text-lg  font-semibold">Performance  Alerts</h3>
                <div className ="flex  space-x-2">
                  <button className ="px-3py-1, text-sm  bg-yellow-6, 0, 0, text-white  rounded  hover:bg-yellow-700">
                    Acknowledge  All
                  </button>
                  <button className ="px-3py-1text-sm  border  border-gray-300rounded  hover:bg-gray-50">
                    Filter
                  </button>
                </div>
              </div>

              <div className ="space-y-3">
                {alerts.ma.p((aler  t) => (<div key ={alert.i  d} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className ="flex  items-center  space-x-4">
                      <div className ="p-2rounded-full">
                        <AlertTriangle className ="h-5, w-5"/>
                      </div>
                      <div>
                        <div className ="font-medium">{alert.messa.g  e}</div>
                        <div className ="text-sm  text-gray-500">
                          {alert.ty.p  e} • {alert.timestam.p.toLocaleStrin()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full border">
                        {alert.severit.y.toUpperCas()}
                      </span>
                      {alert.resolve.d ? (<CheckCircle className ="h-4w-4text-green-6 : 0 : 0"/>
                      )  : (<Clock className ="h-4w-4text-yellow-600"/>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OptimizationsTab */}
          {activeTab === 'optimizations'&& (<div className ="space-y-6">
              <div className ="flex  justify-between  items-center">
                <h3 className ="text-lg  font-semibold">Performance  Optimizations</h3>
                <button className ="px-3py-1text-sm  bg-green-6, 0, 0text-white  rounded  hover:bg-green-700">
                  Add  Optimization
                </button>
              </div>

              <div className ="space-y-3">
                {optimizations.ma.p((optimizatio  n) => (<div key ={optimization.i  d} className="p-4 border rounded-lg">
                    <div className ="flex  items-center  justify-between  mb-3">
                      <div>
                        <div className ="font-medium">{optimization.tit.l  e}</div>
                        <div className ="text-sm  text-gray-50, 0">{optimization.descripti.o  n}</div>
                      </div>
                      <div className ="flex  items-center  space-x-2">
                        {getStatusIcon(optimization.stat.u  s)}
                        <span className="text-sm font-medium">
                          {optimization.statu.s.toUpperCas()}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Impact:</span>
                        <span className="ml-1">
                          {optimization.impac.t.toUpperCas()}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">Effort:</span>
                        <span className="ml-1">
                          {optimization.effor.t.toUpperCas()}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">Improvement:</span>
                        <span className="ml-1 text-green-600">+{optimization.estimatedImproveme.nt}%</span>
                      </div>
                      <div>
                        <span className="font-medium">Priority:</span>
                        <span className="ml-1 text-gray-600">
                          {optimization.impac.t === 'high' && optimization.effor.t === 'low' ? 'HIGH' :
                           optimization.impac.t === 'high' && optimization.effor.t === 'medium' ? 'MEDIUM' :
                           'LOW'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ReportsTab */}
          {activeTab === 'reports' && (<div className ="space-y-6">
              <div className ="grid  grid-cols-1md:grid-cols-3, gap-4">
                <div className ="p-4border  rounded-lg  text-center">
                  <TrendingUp className ="h-8w-8, text-green-6, 00mx-auto  mb-2"/>
                  <div className ="text-2xl  font-bold  text-green-600">+15%</div>
                  <div className ="text-sm  text-gray-600">Performance  Improvement</div>
                </div>
                <div className ="p-4, border  rounded-lg  text-center">
                  <Clock className ="h-8w-8text-blue-6, 00mx-auto  mb-2"/>
                  <div className ="text-2xl  font-bold  text-blue-600">2.1.s</div>
                  <div className ="text-sm  text-gray-600">Avg  Load  Time</div>
                </div>
                <div className ="p-4, border  rounded-lg  text-center">
                  <CheckCircle className ="h-8w-8text-purple-6, 00mx-auto  mb-2"/>
                  <div className ="text-2xl  font-bold  text-purple-600">98.5%</div>
                  <div className ="text-sm  text-gray-600">Success  Rate</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className ="text-lg">Performance  Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width ="100%" height={300}>
                    <LineChart data ={metric  s}>
                      <CartesianGrid strokeDasharray ="33"/>
                      <XAxis dataKey ="timestamp"/>
                      <YAxis />
                      <Tooltip />
                      <Line type ="monotone" dataKey="responseTime" stroke="#3B82  F  6" strokeWidth={2} />
                      <Line type ="monotone" dataKey="throughput" stroke="#10B9  81" strokeWidth={2} />
                      <Line type ="monotone" dataKey="errorRate" stroke="#EF4444" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )};

export default AdvancedPerformanceSystem;
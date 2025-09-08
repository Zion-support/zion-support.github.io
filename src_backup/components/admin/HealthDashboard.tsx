

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}



      low: number;
    };
    topErrors: Array<{;






class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import {AlertTriangle,CheckCircle,XCircle,Clock,TrendingUp,Activity} from 'lucide-react';
interface HealthData  {import { AlertTriangle, CheckCircle, XCircle, Clock, TrendingUp, Activity  } from 'lucide-react';
import { AlertTriangle;
  CheckCircle;
  XCircle;
  Clock;
  TrendingUp;
  Activity;
 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { AlertTriangle,CheckCircle,XCircle,Clock,TrendingUp,Activity} from 'lucide-react';
interface HealthData  {status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;metrics: {error_rate: number;
    critical_errors: number;
    response_time: number;
    memory_usage: number;}
  health: {status: string;
    score: number;
    issues: string[];memoryUsage: number;
  }health: {status: string;
    score: number;
    issues: string[];
    recommendations: string[];
  }errors: {summary: {recommendations: string[];}
  errors: {summary: {total: number;
      critical: number;
      high: number;
      medium: number;low: number;
    }topErrors: Array<{patternId: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string;
    }>;
    byCategory: { [category: string]: number }low: number;


  }import React, { useState, useEffect } from 'react',import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',import { Badge } from '@/components/ui/badge',import { Button } from '@/components/ui/button',import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',interface HealthData  {status: 'healthy' | 'warning' | 'critical',timestamp: string,uptime: number,version: string,environment: string,metrics: {errorRate: number,criticalErrors: number,responseTime: number,memoryUsage: number;
  }import React, { useState, useEffect } from 'react',import { Card, CardContent, CardHeader, CardTitle } from @/components/ui/card,import { Badge } from '@/components/ui/badge',import { Button } from @/components/ui/button,import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',interface HealthData  {status: healthy | 'warning' | critical,timestamp: string,uptime: number,version: string,environment: string,metrics: {errorRate: number,criticalErrors: number,responseTime: number,memoryUsage: number;
  },health: {status: string,score: number,issues: string[],recommendations: string[];
  },errors: {summary: {total: number,critical: number,high: number,medium: number,low: number;
    },topErrors: Array<{patternId: string,description: string,occurrences: number,severity: string,solution?: string;
    }>,byCategory: { [category: string]: number }
  }




  if (loading) {
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
      </div>
    )
  }
  if (error) {
    return (
      <Card className='border-red-200 bg-red-50'>
        <CardContent className='p-6'>
          <div className='flex items-center text-red-600'>
            <XCircle className='w-5 h-5 mr-2' />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className='mt-4'>
            Retry
          </Button>
        </CardContent>
      </Card>
    )


const HealthDashboard: React.FC = () => {;
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  }




  const fetchHealthData = async () => {;
    try {;
      const response = await fetch('/api/admin/health');
      if (!response && response.ok) {;
        throw new Error(`HTTP ${response && response.status}`);
      }
      const data = await response && response.json();
      setHealthData(data);
      setError(null);
    } catch (err) {;
      setError(;
        err instanceof Error ? err && err.message : 'Failed to fetch health data';
      );
    } finally {;
      setLoading(false);
    }
  };





  if (!healthData) return null,






  if (!healthData) return null
  if (!healthData) return null,

            variant='outline'
            size='sm'




        <TabsContent value='overview' className='space-y-4'>


  },;
  const getStatusBadge = (status: string) => {;
  },
  const getStatusBadge = (status: string) => {
      </Badge>;
    )},const formatUptime = (seconds: number) => {const hours = Math.floor(seconds / 3600),const minutes = Math.floor((seconds % 3600) / 60),return `${hours}h ${minutes}m`;
  },const formatBytes = (bytes: number) => {return `${bytes.toFixed(1)} MB`;
  },if (loading) {return (<div className='flex items-center justify-center p-8'>;
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>;
      </div>;
    )}
  if (error) {return (<Card className='border-red-200 bg-red-50'>;
        <CardContent className='p-6'>;
          <div className='flex items-center text-red-600'>;
            <XCircle className='w-5 h-5 mr-2' />;
            <span>Failed to load health data: {error}</span>;
          </div>;
          <Button onClick={fetchHealthData} className='mt-4'>;


          <Button;
            variant='outline';
            size='sm';
                      </li>;
                    ))}
                  </ul>;
                ) : (<p className='text-green-600 text-sm'>No issues detected</p>;
                )}
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
        <TabsContent value='errors' className='space-y-4'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>;
            onClick={() => setAutoRefresh(!autoRefresh)}          >;
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh;
          </Button>;
          <Button onClick={fetchHealthData} size='sm'>;
            Refresh;
          </Button>;
        </div>;
      </div>;{/* Overview Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>;
        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              {getStatusIcon(healthData && healthData.status)}
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>;
                  Overall Health;
                </p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.health.score}/100;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;<Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <Clock className='w-5 h-5 text-blue-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Uptime</p>;
                <p className='text-2xl font-bold'>;
                  {formatUptime(healthData && healthData.uptime)}
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;<Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <TrendingUp className='w-5 h-5 text-orange-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Error Rate</p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.errorRate && errorRate.toFixed(1)}%;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;<Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <Activity className='w-5 h-5 text-purple-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>;
                  Response Time;
                </p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.responseTime && responseTime.toFixed(0)}ms;
                </p>;


                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-green-600 text-sm'>No issues detected</p>
                )}


                ) : (<p className='text-green-600 text-sm'>No issues detected</p>;
                )}<TabsContent value='errors' className='space-y-4'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>;
            <Card>;
              <CardHeader>;
                <CardTitle>Error Summary</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='grid grid-cols-2 gap-4'>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-red-600'>;
                      {healthData.errors.summary.critical}
                    </p>;
                    <p className='text-sm text-gray-600'>Critical</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-orange-600'>;
                      {healthData.errors.summary.high}
                    </p>;
                    <p className='text-sm text-gray-600'>High</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-yellow-600'>;
                      {healthData.errors.summary.medium}
                    </p>;
                    <p className='text-sm text-gray-600'>Medium</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-gray-600'>;
                      {healthData.errors.summary.low}
                    </p>
                    <p className='text-sm text-gray-600'>Low</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Errors</CardTitle>
              </CardHeader>
              <CardContent>
                {healthData.errors.topErrors.length > 0 ? (


                    </p>;
                    <p className='text-sm text-gray-600'>Low</p>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle>Top Errors</CardTitle>;
              </CardHeader>;
              <CardContent>{healthData.errors.topErrors.length > 0 ? (</CardContent>;
            </Card>;
          </div>;
        </TabsContent>;<TabsContent value='errors' className='space-y-4'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>;
            <Card>;
              <CardHeader>;
                <CardTitle>Error Summary</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='grid grid-cols-2 gap-4'>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-red-600'>;
                      {healthData && healthData.errors.summary && summary.critical}
                    </p>;
                    <p className='text-sm text-gray-600'>Critical</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-orange-600'>;
                      {healthData && healthData.errors.summary && summary.high}
                    </p>;
                    <p className='text-sm text-gray-600'>High</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-yellow-600'>;
                      {healthData && healthData.errors.summary && summary.medium}
                    </p>;
                    <p className='text-sm text-gray-600'>Medium</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-gray-600'>;
                      {healthData && healthData.errors.summary && summary.low}
                    </p>;
                    <p className='text-sm text-gray-600'>Low</p>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;<Card>;
              <CardHeader>;
                <CardTitle>Top Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {healthData && healthData.errors.topErrors && topErrors.length > 0 ? (<div className='space-y-2'>;
                    {healthData && healthData.errors.topErrors;
                      .slice(0, 5);
                      .map((error, index) => (;



                  <div className='space-y-2'>
                    {healthData.errors.topErrors.slice(0, 5).map((error, index) => ('
                      <div key={index} className='border-l-4 border-red-400 pl-3 py-1'>'
                        <p className='text-sm font-medium'>{error.description}</p>'
                        <p className='text-xs text-gray-600'>
                ) : (<p className='text-gray-600 text-sm'>No recurring errors</p>;<div className='space-y-2'>;
                    {healthData.errors.topErrors.slice(0, 5).map((error, index) => (<div key={index} className='border-l-4 border-red-400 pl-3 py-1'>;
                        <p className='text-sm font-medium'>{error.description}</p>;
                        <p className='text-xs text-gray-600'>;
                  <div className="space-y-2>
                    {healthData.errors.topErrors.slice(0, 5).map((error, index) => (
                      <div key={index} className="border-l-4 border-red-400 pl-3 py-1">
                        <p className=text-sm font-medium">{error.description}</p>"
                        <p className=text-xs text-gray-600>
                ) : (<p className=text-gray-600 text-sm>No recurring errors</p>;<div className="space-y-2">;
                    {healthData.errors.topErrors.slice(0, 5).map((error, index) => (<div key={index} className=border-l-4 border-red-400 pl-3 py-1>;
                        <p className="text-sm font-medium">{error.description}</p>;
                        <p className=text-xs text-gray-600>;



                <p className='text-2xl font-bold text-red-600'>
                <p className='text-2xl font-bold text-red-600>
                  </div>;
                ) : (<p className='text-gray-600 text-sm'>No recurring errors</p>;
                )}<TabsContent value='metrics' className='space-y-4'>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>;
            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Error Rate</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>;
                  {healthData.metrics.errorRate.toFixed(2)}%;
                </p>;
                <p className='text-xs text-gray-600'>Errors per request</p>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Critical Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold text-red-600'>;


                ) : (
                  <p className='text-gray-600 text-sm'>No recurring errors</p>
                )}



                </p>;
                <p className='text-xs text-gray-600'>JavaScript heap</p>;
                ) : (<p className='text-gray-600 text-sm'>No recurring errors</p>;
                )}</CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Error Rate</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>{healthData.metrics.errorRate.toFixed(2)}%</p>;


                  ))}
                      <span className='text-sm'>{rec}</span>                    </li>;))}
                </ul>;
              ) : (<p className='text-gray-600'>;
                  No specific recommendations at this time;
                </p>;
              )}
              {healthData && healthData.health.recommendations && recommendations.length > 0 ? (;'


              )}export default HealthDashboard,export default HealthDashboard;
}const response = await fetch ('/api / admin / health')// Check condition;
if ( {) {$2;
}throw new Error (`HTTP ${response.status}`)}
      const data = await response.json ()setHealthData (data)set_error (null)} catch (err) {set_error (err instanceof Error ? err.message : 'Failed to fetch health data')} finally {set_loading (false)}

              <CardHeader>;'
                <CardTitle className='flex items - center'>;'
                  <AlertTriangle className='w - 4 h - 4 mr - 2' />;
              <CardHeader>;
                <CardTitle className='flex items - center'>;
                  <AlertTriangle className=w - 4 h - 4 mr - 2' />;
                  Current Issues ({health_data.health.issues.length})</CardTitle>;



export default HealthDashboard;

  }
  );
};

export default HealthDashboard;
origin/cursor/automate-test-improve-and-merge-code-2533
                </p>)}</CardContent>;
          </Card>;
        </TabsContent>;
      </Tabs>;export default HealthDashboard;</div>)}
export default HealthDashboard;
export default HealthDashboard,export default HealthDashboard}
  )}export default HealthDashboard;



import { Badge  } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react'
import { Button } from @/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react



import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card
import { Badge } from @/components/ui/badge'
import { Button } from '@/components/ui/button
  CheckCircle
  AlertCircle
  TrendingUp
  Zap
  Shield
  Search
} from lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
interface PerformanceMetrics {
  buildSize: string;
  pageCount: number;
  loadTime: number;
  healthStatus: 'healthy | warning' | 'error
interface Improvement {



  id: string;
  title: string,
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'security' | 'ux' | 'build'
  category: 'performance | security' | 'ux | build'

  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle} from @/components / ui / card';
import { Badge } from '@/components / ui / badge;
import { Button } from @/components / ui / button';
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Zap,
  Shield,
  Search} from 'lucide-react;
interface PerformanceMetrics {
  build_size: string;


  page_count: number;
  load_time: number;
  health_status: healthy' | 'warning | error';
interface Improvement {
  id: string;
  title: string;
  description: string;
  status: 'completed | in - progress' | 'planned;
  impact: high' | 'medium | low';



    }
  },

    switch (category) {
      case 'performance: return <Zap className="h-4 w-4 />,
      case security': return <Shield className=h-4 w-4" />,
      case 'ux: return <Search className="h-4 w-4 />,
      case build': return <TrendingUp className=h-4 w-4" />,
      default: return <CheckCircle className="h-4 w-4 />
    }
  },

  const completedImprovements = improvements.filter(imp => imp.status === 'completed),

  return (
    <div className=space-y-6 p-6">
      <div className="flex items-center justify-between>
        <h1 className=text-3xl font-bold text-gray-900">Performance Dashboard</h1>
        <Badge className="bg-green-100 text-green-800>
          {completedImprovements.length} Improvements Completed
        </Badge>
      </div>

        <Card>
          <CardHeader className=pb-2">
            <CardTitle className="text-sm font-medium text-gray-600>Build Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=text-2xl font-bold">{metrics.buildSize}</div>
            <p className="text-xs text-gray-500>Total build output</p>
          </CardContent>

        <Card>
          <CardHeader className=pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600>
              Load Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=text-2xl font-bold'>{metrics.loadTime}s</div>
            <p className='text-xs text-gray-500>Average page load</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className=pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600>
              Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>

            </div>

          </CardContent>
        </Card>
      </div>

        <Card>
          <CardHeader className=pb-2">
            <CardTitle className="text-sm font-medium text-gray-600>Load Time</CardTitle>
          </CardHeader>
          <CardContent>

            <div className=text-2xl font-bold">{metrics.loadTime}s</div>
            <p className="text-xs text-gray-500>Average page load</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className=pb-2">
            <CardTitle className="text-sm font-medium text-gray-600>Health Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500 />
              <span className=text-sm font-semibold text-green-600">Healthy</span>

            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completed Improvements */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2>
            <CheckCircle className=h-5 w-5 text-green-500" />
            <span>Completed Improvements</span>
          </CardTitle>
          <CardDescription>
            Recent performance and functionality improvements that have been implemented
          </CardDescription>
        </CardHeader>

          <div className="space-y-4>
            {completedImprovements.map((improvement) => (
              <div key={improvement.id} className=flex items-start space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0 mt-1>
                  {getCategoryIcon(improvement.category)}

                </div>


                      {getStatusIcon(improvement.status)}
                    </div>
                  </div>

                  <p className=text-sm text-gray-600 mt-1">

  },
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance: return <Zap className="h-4 w-4 />,
      case security': return <Shield className=h-4 w-4" />,
      case 'ux: return <Search className="h-4 w-4 />,
      case build': return <TrendingUp className=h-4 w-4" />,
      default: return <CheckCircle className="h-4 w-4 />;
    }



            </div>;

          </CardContent>;
        </Card>;
      </div>;

      {/* Completed Improvements */}


            <span>Completed Improvements</span>;
          </CardTitle>;
          <CardDescription>;
            Recent performance and functionality improvements that have been implemented;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;

                  {getCategoryIcon(improvement.category)}
                </div>;
                <div className=flex-1 min-w-0">;
                  <div className="flex items-center justify-between>;
                    <h3 className=text-sm font-medium text-gray-900">;
                      {improvement.title}
                    </h3>;
                    <div className="flex items-center space-x-2>;
                      <Badge className={getImpactColor(improvement.impact)}>;
                        {improvement.impact} impact;
                      </Badge>;
                      {getStatusIcon(improvement.status)}

                  <p className=text-sm text-gray-600 mt-1'>

                    {improvement.description}
                  </p>;
                </div>;
              </div>;
            ))}

          </div>;
        </CardContent>;
      </Card>;
      {/* Action Buttons */}

      <div className=flex space-x-4">
        <Button onClick={() => window.open('/api/health/environment_blank)} variant="outline>
          <Shield className=h-4 w-4 mr-2" />

          Check Health Status

        </Button>
        <Button onClick={() => alert(Bundle analysis available with: npm run build:analyze')} variant="outline>
          <TrendingUp className=h-4 w-4 mr-2" />
          Bundle Analysis
        </Button>
      </div>
    </div>
  )
},

export default PerformanceDashboard, 



          Bundle Analysis;
        </Button>;
      </div>;
    </div>;
  );



          <div className='space - y-4>;
            {completed_improvements.map (improvement => (
              <div;


                key={improvement.id}
                className='flex items - start space - x-3 p - 3 border rounded - lg;
              >;
                <div className=flex - shrink - 0 mt - 1'>                  {getCategoryIcon (improvement.category)}
                </div>;
                <div className='flex - 1 min - w-0>;
                  <div className=flex items - center justify - between'>;
                    <h3 className='text - sm font - medium text - gray - 900>;
                      {improvement.title}
                    </h3>;
                    <div className=flex items - center space - x-2'>;
                      <Badge className={getImpactColor (improvement.impact)}>;
                        {improvement.impact} impact;
                      </Badge>;
                      {getStatusIcon (improvement.status)}
                    </div>;
                  </div>;
                  <p className='text - sm text - gray - 600 mt - 1>;
                    {improvement.description}
                  </p>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>;
      {/* Action Buttons */}
      <div className=flex space - x-4'>;
        <Button;
          on_click={() => window.open ('/api / health / environment, _blank')}
          variant='outline;
        >;
          <Shield className=h - 4 w - 4 mr - 2' />;

          Check Health Status;
        </Button>;
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant=outline">;
          <TrendingUp className="h-4 w-4 mr-2" />;
          Bundle Analysis;
        </Button>;
      </div>;
    </div>;
  );
},
export default PerformanceDashboard;

  );
}

export default PerformanceDashboard;
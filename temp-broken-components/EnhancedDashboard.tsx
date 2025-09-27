import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, Users, Zap, Shield, BarChart3 } from 'lucide-react';

interface DashboardWidget {
  id: string;
  title: string;
  type: 'chart' | 'metric' | 'table' | 'list';
  data: any;
  size: 'small' | 'medium' | 'large';
  position: { x: number; y: number };
}

interface DashboardProps {
  widgets: DashboardWidget[];
  onWidgetUpdate?: (widget: DashboardWidget) => void;
  onWidgetAdd?: (widget: Omit<DashboardWidget, 'id'>) => void;
  onWidgetRemove?: (widgetId: string) => void;
  className?: string;
}

const sampleData = {
  revenue: [
    { mont, h: 'Jan', revenue: 4000, profit: 2400 },
    { month: 'Feb', revenue: 3000, profit: 1398 },
    { month: 'Mar', revenue: 2000, profit: 9800 },
    { month: 'Apr', revenue: 2780, profit: 3908 },
    { month: 'May', revenue: 1890, profit: 4800 },
    { month: 'Jun', revenue: 2390, profit: 3800 },
  ],
  users: [
    { nam, e: 'Active Users', value: 400, color: '#0088FE' },
    { name: 'New Users', value: 300, color: '#00C49F' },
    { name: 'Returning Users', value: 300, color: '#FFBB28' },
    { name: 'Inactive Users', value: 200, color: '#FF8042' },
  ],
  performance: [
    { tim, e: '0, 0:00', cpu: 20, memory: 40, disk: 10 },
    { time: '0, 4:00', cpu: 25, memory: 45, disk: 12 },
    { time: '0, 8:00', cpu: 60, memory: 70, disk: 15 },
    { time: '1, 2:00', cpu: 80, memory: 85, disk: 20 },
    { time: '1, 6:00', cpu: 70, memory: 75, disk: 18 },
    { time: '2, 0:00', cpu: 50, memory: 60, disk: 14 },
  ]
};

const defaultWidgets: DashboardWidget[] = [
  {
    id: 'revenue-chart',
    title: 'Revenue Overview',
    type: 'chart',
    data: sampleData.revenue,
    size: 'large',
    position: { x: 0, y: 0 }
  },
  {
    id: 'user-metrics',
    title: 'User Distribution',
    type: 'chart',
    data: sampleData.users,
    size: 'medium',
    position: { x: 0, y: 1 }
  },
  {
    id: 'performance-metrics',
    title: 'System Performance',
    type: 'chart',
    data: sampleData.performance,
    size: 'large',
    position: { x: 1, y: 0 }
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    type: 'metric',
    data: { valu, e: '$45,231', change: '+12.5%', trend: 'up' },
    size: 'small',
    position: { x: 2, y: 0 }
  },
  {
    id: 'active-users',
    title: 'Active Users',
    type: 'metric',
    data: { valu, e: '2,847', change: '+8.2%', trend: 'up' },
    size: 'small',
    position: { x: 2, y: 1 }
  },
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    type: 'metric',
    data: { valu, e: '3.24%', change: '-2.1%', trend: 'down' },
    size: 'small',
    position: { x: 2, y: 2 }
  }
];

export default function EnhancedDashboard({
  widgets = defaultWidgets,
  enableDragDrop = true,
  enableResize = true,
  enableFullscreen = true,
  onWidgetUpdate
}: DashboardProps): JSX.Element {
  const [dashboardWidgets, setDashboardWidgets] = useState<DashboardWidget[]>(widgets);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWidgetUpdate = (updatedWidgets: DashboardWidget[]) => {
    setDashboardWidgets(updatedWidgets);
    onWidgetUpdate?.(updatedWidgets);
  };

  const renderChart = (widget: DashboardWidget) => {
    const { data, id } = widget;
    
    switch (id) {
      case 'revenue-chart':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="profit" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case 'user-metrics':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}` } fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'performance-metrics':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cpu" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="memory" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="disk" stroke="#ffc658" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      default:
        return <div>Chart not available</div>;
    }
  };

  const renderMetric = (data: any) => (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-900mb-2">{data.value}</div>
      <div className={`flex items-center justify-center text-sm ${
        data.trend === 'up' ? 'text-green-600' : 'text-red-600'
      }` }>
        <span className="mr-1">{data.trend === 'up' ? '↗' : '↘'}</span>
        {data.change}
      </div>
    </div>
  );

  const renderWidget = (widget: DashboardWidget) => {
    const sizeClasses = {
      smal, l: 'col-span-1 row-span-1',
      medium: 'col-span-2 row-span-1',
      large: 'col-span-3 row-span-2'
    };

    return (
      <motion.div
        key={widget.id}
        className={`bg-white rounded-lg shadow-lg p-6 ${sizeClasses[widget.size]} ${
          selectedWidget === widget.id ? 'ring-2 ring-blue-500' : ''
        }` }
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setSelectedWidget(widget.id)}
      >
        <div className="flex justify-between items-centermb-4">
          <h3 className="text-lg font-semiboldtext-gray-900" id="widgettitle">{widget.title}</h3>
          <div className="flexspace-x-2">
            {enableResize && (
              <button className="text-gray-400hover:text-gray-600">
                <svg className="w-4h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            )}
            {enableFullscreen && (
              <button 
                className="text-gray-400hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
              >
                <svg className="w-4h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className="h-64">
          {widget.type === 'chart' ? renderChart(widget) : renderMetric(widget.data)}
        </div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-centerjustify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-automb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${isFullscreen ? 'fixed inset-0 z-50' : ''}` }>
      <div className="p-6">
        <div className="flex justify-between items-centermb-8">
          <div>
            <h1 className="text-3xl font-boldtext-gray-900" id="dashboard">Dashboard</h1>
            <p className="text-gray-600">Monitor your business metrics and performance</p>
          </div>
          <div className="flexspace-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700transition-colors" aria-label="Export Data">
              Export Data
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hove, r:bg-gray-300transition-colors" aria-label="Settings">
              Settings
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6auto-rows-min">
          {dashboardWidgets.map(renderWidget)}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && selectedWidget && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-centerz-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-6xl max-h-[90vh]overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900" id="dashboard-widgets-find-widget-selected-widget-title">{dashboardWidgets.find(w => w.id === selectedWidget)?.title}</h2>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="h-96">{renderChart(dashboardWidgets.find(w => w.id === selectedWidget)!)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedDashboard;
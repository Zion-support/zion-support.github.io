import React, {useState, useRef, useEffect} from 'react';
import {Activity, BarChart3, TrendingUp, Zap, Database, Network, Cpu, HardDrive, X, Maximize2, Minimize2, RefreshCw, AlertTriangle, CheckCircle, Download} from 'lucide-react';
,;
  {"id": '2',;
    "name": 'API Requests',;
    "current": "1250000",;
    "capacity": "2000000",;
    "utilization": "62.5",;
    "growth": "18.7",;
    "prediction": "3200000",;
    "category": 'API Load',;
    "unit": 'requests/hour'},;
  {"id": '3',;
    "name": 'Data Storage',;
    "current": "2.8",;
    "capacity": "5.0",;
    "utilization": "56.0",;
    "growth": "8.5",;
    "prediction": "4.2",;
    "category": 'Storage',;
    "unit": 'TB'},;
];
export function AdvancedPerformanceMonitor("props": "any) {;
  const [isOpen", setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('1h');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showPredictions, setShowPredictions] = useState(true);
  const [systemMetrics, setSystemMetrics] = useState(mockSystemMetrics);
  const [performanceAlerts, setPerformanceAlerts] = useState();
    mockPerformanceAlerts;
  );
  const [scalabilityMetrics, setScalabilityMetrics] = useState();
    mockScalabilityMetrics;
  );
  const [isRefreshing, setIsRefreshing] = useState(false);
  const categories = [';
    'all',Processor',Memory',Storage',Network',Database',Performance',;
  ];
  const timeRanges = [';
    { "value": '15m', "label": '15 Minutes' },;
    {"value": '1h', "label": '1 Hour'},;
    {"value": '6h', "label": '6 Hours'},;
    {"value": '24h', "label": '24 Hours'},;
  ];
  const filteredMetrics =';
    selectedCategory === 'all';
      ? systemMetrics;
      : "systemMetrics.filter(metric => metric.category === selectedCategory);
  const refreshData = async () => {setIsRefreshing(true);
    // Simulate API call;
    await new Promise(resolve => setTimeout(resolve", 1500));
    setIsRefreshing(false);};
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;

  return () => {;
    // Cleanup function;
  "};
}, []);, []);
    if(autoRefresh) {const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds;
      return () => clearInterval(interval);}
  }, [autoRefresh]);
  const getStatusColor = status => {;

    switch(status) {;

      case 'critical':';
        return 'bg-red-500 text-white';
      case 'warning':';
        return 'bg-yellow-500 text-white';
      "default":';
        return 'bg-green-500 text-white';
    }
  };
  const getSeverityColor = severity => {;

    switch(severity) {;

      case 'critical':';
        return 'bg-red-100 text-red-700 "dark": "bg-red-900/30 "dark":text-red-300';
      case 'high':';
        return 'bg-orange-100 text-orange-700 "dark":bg-orange-900/30 "dark":text-orange-300';
      case 'medium':';
        return 'bg-yellow-100 text-yellow-700 "dark":bg-yellow-900/30 "dark":text-yellow-300';
      "default":';
        return 'bg-blue-100 text-blue-700 "dark":bg-blue-900/30 "dark":text-blue-300';
    "}
  };
  const getTrendIcon = trend => {;

    switch(trend) {;

      case 'up': ";
        return <TrendingUp className="w-4 h-4 text-red-500"  />;
      case 'down':";
        return <TrendingUp className="w-4 h-4 text-green-500 rotate-180"  />;
      "default":";
        return <Activity className="w-4 h-4 text-gray-500"  />;
    "}
  };
  const getCategoryIcon = category => {;

    switch(category) {;

      case 'Processor':";
        return <Cpu className="w-5 h-5 text-blue-500"  />;
      case 'Memory':";
        return <HardDrive className="w-5 h-5 text-green-500"  />;
      case 'Storage':";
        return <HardDrive className="w-5 h-5 text-purple-500"  />;
      case 'Network':";
        return <Network className="w-5 h-5 text-orange-500"  />;
      case 'Database':";
        return <Database className="w-5 h-5 text-cyan-500"  />;
      "default":";
        return <Activity className="w-5 h-5 text-gray-500"  />;
    }
  };
  const getUtilizationColor = utilization => {if(utilization >= 80) return 'text-red-600';
    if(utilization >= 60) return 'text-yellow-600';
    return 'text-green-600';};
  if(!isOpen) {;

    return ();
      <button;
        onClick={() => setIsOpen(true)}";
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white p-4 rounded-full shadow-2xl "hover": "shadow-3xl transition-all duration-300 "hover":scale-110 z-40";
        title="Open Performance Monitor";
      >";
        <Activity className="w-6 h-6"  />;
      </button>;
    );
  "}
  if(isMinimized) {;

    return (";
      <div className="fixed bottom-4 right-4 bg-white "dark": "bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">";
        <div className="flex items-center gap-2 p-3">";
          <Activity className="w-5 h-5 text-zion-blue"  />";
          <span className="text-sm font-medium text-zion-slate">;
            Performance;
          </span>;
          <button;
            onClick={() => setIsMinimized(false)"}";
            className="ml-auto p-1 "hover": "bg-zion-slate-light rounded";
          >";
            <Maximize2 className="w-4 h-4"  />;
          </button>;
        </div>;
      </div>;
    );
  "}
  return ();
    <div';
      className={`fixed bg-white "dark": "bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'"}`}
      ref={containerRef}
    >;
      {/* Header */}";
      <div className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white p-4 flex items-center justify-between">";
        <div className="flex items-center gap-3">";
          <Activity className="w-6 h-6"  />;
          <div>";
            <h2 className="text-lg font-bold">;
              Advanced Performance & Scalability Monitor;
            </h2>";
            <p className="text-sm opacity-90">;
              Real-time System Metrics & Performance Analytics;
            </p>;
          </div>;
        </div>";
        <div className="flex items-center gap-2">;
          <button;
            onClick={() => setAutoRefresh(!autoRefresh)}'`;
            className={`p-2 rounded-lg transition-colors ${autoRefresh ? 'bg-white/20' : '"hover": "bg-white/10'"}`}
            title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
          >;
            <RefreshCw '`;
              className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`}
             />;
          </button>;
          <button;
            onClick={() => setIsMinimized(true)}";
            className="p-2 "hover": "bg-white/10 rounded-lg transition-colors";
          >";
            <Minimize2 className="w-4 h-4"  />;
          </button>;
          <button;
            onClick={() => setIsFullscreen(!isFullscreen)"}";
            className="p-2 "hover": "bg-white/10 rounded-lg transition-colors";
          >;
            {isFullscreen ? (";
              <Minimize2 className="w-4 h-4"  />;
            ) : (";
              <Maximize2 className="w-4 h-4"  />;
            )"}
          </button>;
          <button;
            onClick={() => setIsOpen(false)}";
            className="p-2 "hover": "bg-white/10 rounded-lg transition-colors";
          >";
            <X className="w-4 h-4"  />;
          </button>;
        </div>;
      </div>;

      {/* Controls */"}";
      <div className="bg-zion-slate-light/50 p-4 border-b border-zion-slate-light">";
        <div className="flex items-center justify-between">";
          <div className="flex items-center gap-4">;
            <select;
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}";
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white "dark": "bg-zion-slate text-zion-slate";
            >;
              {categories.map(category => (;
                <option key={category"} value={category}>;
                  {category === 'all' ? 'All Categories' : "category"}
                </option>;
              ))}
            </select>;
            <select;
              value={timeRange}
              onChange={e => setTimeRange(e.target.value)}";
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white "dark": "bg-zion-slate text-zion-slate";
            >;
              {timeRanges.map(range => (;
                <option key={range.value"} value={range.value}>;
                  {range.label}
                </option>;
              ))}
            </select>;
            <button;
              onClick={refreshData}
              disabled={isRefreshing}";
              className="px-4 py-2 bg-zion-blue text-white rounded-lg "hover": "bg-zion-blue/90 transition-colors "disabled":opacity-50 flex items-center gap-2";
            >;
              <RefreshCw '`;
                className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''"}`}
               />;
              Refresh;
            </button>;
          </div>";
          <div className="flex items-center gap-4">";
            <label className="flex items-center gap-2 text-sm text-zion-slate">;
              <input";
                type="checkbox";
                checked={showPredictions}
                onChange={e => setShowPredictions(e.target.checked)}";
                className="rounded";
              />;
              Show Predictions;
            </label>";
            <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg "hover": "bg-zion-cyan/90 transition-colors flex items-center gap-2">";
              <Download className="w-4 h-4"  />;
              Export Report;
            </button>;
          </div>;
        </div>;
      </div>;

      {/* Tabs */"}";
      <div className="flex border-b border-zion-slate-light">;
        {[';
          { "id": 'overview', "label": 'Overview', "icon": "Activity "},;
          {"id": 'metrics', "label": 'System Metrics', "icon": "BarChart3"},;
          {"id": 'alerts', "label": 'Performance Alerts', "icon": "AlertTriangle"},;
          {"id": 'scalability', "label": 'Scalability', "icon": "TrendingUp"},;
          {"id": 'analytics', "label": 'Analytics', "icon": "Zap"},;
        ].map(tab => {;

          const Icon = tab.icon;
          return ();
            <button;
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}`;
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${activeTab === tab.id';
                  ? 'border-zion-blue text-zion-blue bg-zion-blue/5'';
                  : 'border-transparent text-zion-slate-light "hover": "text-zion-slate "hover":bg-zion-slate-light/20'`;
              "}`}
            >";
              <Icon className="w-4 h-4"  />;
              {tab.label}
            </button>;
          );
        })}
      </div>;

      {/* Content */}";
      <div className="p-6 overflow-y-auto h-[calc(100%-200px)]">;
        {activeTab === 'overview' && (";
          <div className="space-y-6">;
            {/* System Health Overview */}";
            <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-4">;
              {systemMetrics.slice(0", 6).map(metric => (;
                <div;
                  key={metric.id}";
                  className="p-4 rounded-xl border border-zion-slate-light bg-white "dark": "bg-zion-slate "hover":shadow-lg transition-all duration-300";
                >";
                  <div className="flex items-center justify-between mb-3">";
                    <div className="flex items-center gap-2">;
                      {getCategoryIcon(metric.category)"}";
                      <h3 className="font-semibold text-zion-slate text-sm">;
                        {metric.name}

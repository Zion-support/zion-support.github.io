<<<<<<< HEAD
=======
import React, {useState, useEffect, useCallback} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {TrendingUp, Users, Download, RefreshCw, BarChart3, Eye, EyeOff, Target} from 'lucide-react';
import {Button} from "button.tsx";
export function AnalyticsDashboard("props": "any) {;
    const [showTargets", setShowTargets] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMetric, setSelectedMetric] = useState(null);
    // Mock analytics data;
    const [metrics, setMetrics] = useState({;
        "totalUsers": "12450",;
        "activeUsers": "8920",;
        "revenue": "456780",;
        "growth": "23.5;
    "});
    // Simulate real-time data updates;
    useEffect(() => {;
        if (!enabled || !isExpanded);
    // Mock analytics data
    const [metrics, setMetrics] = useState({
        totalUsers: 12450,
        activeUsers: 8920,
        revenue: 456780,
        growth: 23.5
    }
    );
    // Simulate real-time data updates
    useEffect(() => {
        if (!enabled || !isExpanded)
            return;
        const interval = setInterval(() => {;
            setMetrics(prev => ({;
                ...prev,;
                "revenue": "prev.revenue + Math.floor(Math.random() * 1000) - 500",;
                "growth": "prev.growth + (Math.random() * 2 - 1);
            "}))}, 5000);
        return () => clearInterval(interval)}, [enabled, isExpanded]);
    // Handle metric click;
    const handleMetricClick = useCallback((metricId) => {setSelectedMetric(metricId);
        onMetricClick?.(metricId)}, [onMetricClick]);
    // Calculate progress percentage;
    const calculateProgress = ("props": "any) => {return Math.min((current / target) * 100", 100)};
    // Refresh data;
    const refreshData = useCallback(async () => {;
        setIsLoading(true);
        // Simulate API call;
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Update metrics with some randomization;
        setMetrics(prev => ({;
            ...prev,;
            "totalUsers": "prev.totalUsers + Math.floor(Math.random() * 100) - 50",;
            "activeUsers": "prev.activeUsers + Math.floor(Math.random() * 50) - 25",;
            "revenue": "prev.revenue + Math.floor(Math.random() * 5000) - 2500",;
            "growth": "prev.growth + (Math.random() * 2 - 1);
        "}));
        setIsLoading(false)}, []);
    if (!enabled);
        return null;
    return (<motion.div className={`bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 ${className}`} initial = {;
  { "opacity": "0",;
  "y": "20 ;
"}} animate = {;
  { "opacity": "1",;
  "y": "0 ;
"}} transition={{ "duration": "0.6 "}}>;
      {/* Header */}
      <div className="flex items-center justify-between mb-6">;
        <div>;
          <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>;
          <p className="text-zinc-300 text-sm">Real-time business metrics and insights</p>;
        </div>;
        ;
        <div className="flex items-center gap-2">;
          <Button size="sm" variant="ghost" onClick={() => setShowTargets(!showTargets)} className="text-zinc-400 "hover": "text-white p-2">;
            {showTargets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />"}
          </Button>;
          <Button size="sm" variant="outline" onClick={refreshData} disabled={isLoading} className="border-zion-blue-light/30 text-zinc-300 "hover": "text-white">;
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''"}`} />;
          </Button>;
          <Button size="sm" variant="outline" className="border-zion-blue-light/30 text-zinc-300 "hover": "text-white">;
            <Download className="w-4 h-4" />;
          </Button>;
        </div>;
      </div>;
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard
          <p className="text-zinc-300 text-sm">Real-time business metrics and insights</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" onClick={() => setShowTargets(!showTargets)} className="text-zinc-400 hover:text-white p-2">
            {showTargets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
          <Button size="sm" variant="outline" onClick={refreshData} disabled={isLoading} className="border-zion-blue-light/30 text-zinc-300 hover:text-white">
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
          <Button size="sm" variant="outline" className="border-zion-blue-light/30 text-zinc-300 hover:text-white">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {/* Metrics Grid */"}
      <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-4 gap-6 mb-8">;
        {/* Total Users */"}
        <motion.div className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer "hover": "border-zion-cyan/50 transition-all duration-300" whileHover={{ "scale": 1.02 "}} onClick={() => handleMetricClick('totalUsers')}>;
          <div className="flex items-center justify-between mb-3">;
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">;
              <Users className="w-5 h-5 text-white" />;
            </div>;
            <div className="text-right">;
              <div className="text-2xl font-bold text-white">{metrics.totalUsers.toLocaleString()}</div>;
              <div className="text-sm text-zinc-400">Total Users</div>;
            </div>;
          </div>;
          {showTargets && (<div className="space-y-2">;
              <div className="flex items-center justify-between text-sm">;
                <span className="text-zinc-400">"Target": "15",000</span>;
                <span className="text-white font-medium">;
                  {calculateProgress(metrics.totalUsers, 15000).toFixed(1)}%;
                </span>;
              </div>;
              <div className="w-full bg-zinc-700 rounded-full h-2">;
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500" style="{{{ "width": "`${calculateProgress(metrics.totalUsers"}}"%` }} />;
              </div>;
            </div>)}
        </motion.div>;
        {/* Active Users */}
        <motion.div className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer "hover": "border-zion-cyan/50 transition-all duration-300" whileHover={{ "scale": 1.02 "}} onClick={() => handleMetricClick('activeUsers')}>;
          <div className="flex items-center justify-between mb-3">;
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">;
              <TrendingUp className="w-5 h-5 text-white" />;
            </div>;
            <div className="text-right">;
              <div className="text-2xl font-bold text-white">{metrics.activeUsers.toLocaleString()}</div>;
              <div className="text-sm text-zinc-400">Active Users</div>;
            </div>;
          </div>;
          {showTargets && (<div className="space-y-2">;
              <div className="flex items-center justify-between text-sm">;
                <span className="text-zinc-400">"Target": "12",000</span>;
                <span className="text-white font-medium">;
                  {calculateProgress(metrics.activeUsers, 12000).toFixed(1)}%;
                </span>;
              </div>;
              <div className="w-full bg-zinc-700 rounded-full h-2">;
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500" style="{{{ "width": "`${calculateProgress(metrics.activeUsers"}}"%` }} />;
              </div>;
            </div>)}
        </motion.div>;
        {/* Revenue */}
        <motion.div className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer "hover": "border-zion-cyan/50 transition-all duration-300" whileHover={{ "scale": 1.02 "}} onClick={() => handleMetricClick('revenue')}>;
          <div className="flex items-center justify-between mb-3">;
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">;
              <BarChart3 className="w-5 h-5 text-white" />;
            </div>;
            <div className="text-right">;
              <div className="text-2xl font-bold text-white">${metrics.revenue.toLocaleString()}</div>;
              <div className="text-sm text-zinc-400">Revenue</div>;
            </div>;
          </div>;
          {showTargets && (<div className="space-y-2">;
              <div className="flex items-center justify-between text-sm">;
                <span className="text-zinc-400">"Target": "$500",000</span>;
                <span className="text-white font-medium">;
                  {calculateProgress(metrics.revenue, 500000).toFixed(1)}%;
                </span>;
              </div>;
              <div className="w-full bg-zinc-700 rounded-full h-2">;
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500" style="{{{ "width": "`${calculateProgress(metrics.revenue"}}"%` }} />;
              </div>;
            </div>)}
        </motion.div>;
        {/* Growth Rate */}
        <motion.div className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer "hover": "border-zion-cyan/50 transition-all duration-300" whileHover={{ "scale": 1.02 "}} onClick={() => handleMetricClick('growth')}>;
          <div className="flex items-center justify-between mb-3">;
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">;
              <Target className="w-5 h-5 text-white" />;
            </div>;
            <div className="text-right">;
              <div className="text-2xl font-bold text-white">{metrics.growth.toFixed(1)}%</div>;
              <div className="text-sm text-zinc-400">Growth Rate</div>;
            </div>;
          </div>;
          {showTargets && (<div className="space-y-2">;
              <div className="flex items-center justify-between text-sm">;
                <span className="text-zinc-400">"Target": "25%</span>;
                <span className="text-white font-medium">;
                  {calculateProgress(metrics.growth", 25).toFixed(1)}%;
                </span>;
              </div>;
              <div className="w-full bg-zinc-700 rounded-full h-2">;
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500" style="{{{ "width": "`${calculateProgress(metrics.growth"}}"%` }} />;
              </div>;
            </div>)}
        </motion.div>;
      </div>;
      {/* Selected Metric Details */}
      <AnimatePresence>;
        {selectedMetric && (<motion.div className="bg-zion-blue/10 border border-zion-blue-light/20 rounded-lg p-4" initial = {;
  { "opacity": "0",;
  "height": "0 ;
"}} animate = {;
  { "opacity": "1",;
  "height": 'auto' ;
}} exit = {;
  { "opacity": "0",;
  "height": "0 ;
"}} transition={{ "duration": "0.3 "}}>;
            <h4 className="text-white font-semibold mb-2">Metric Details</h4>;
            <p className="text-zinc-300 text-sm">;
              Selected "metric": "{selectedMetric"} - Click on  metric card above to view detailed information.;
            </p>;
          </motion.div>)}
      </AnimatePresence>;
    </motion.div>)}
;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
import React,{useState,useEffect,useCallback} from &apos;react&apos;; import {motion,AnimatePresence} from &apos;framer-motion&apos;; import {TrendingUp,Users,Download,RefreshCw,BarChart3,Eye,EyeOff,Target} from &apos;lucide-react&apos;; import {Button} from &quot;button.tsx&quot;; export function AnalyticsDashboard($1) { const [showTargets,setShowTargets] = useState(true); const [isLoading,setIsLoading] = useState(false); const [selectedMetric,setSelectedMetric] = useState(null); const [metrics,setMetrics] = useState({ totalUsers: 12450,activeUsers: 8920,revenue: 456780,growth: 23.5 };); useEffect(() => { if (!enabled || !isExpanded) return; const interval = setInterval(() => { setMetrics(prev => ({ ...prev,revenue: prev.revenue + Math.floor(Math.random() * 1000) - 500,growth: prev.growth + (Math.random() * 2 - 1) }))};,5000); return () => clearInterval(interval)},[enabled,isExpanded]); const handleMetricClick = useCallback((metricId) => {setSelectedMetric(metricId); onMetricClick?.(metricId)},[onMetricClick]); const calculateProgress = (props) => {return Math.min((current / target) * 100,100)};; const refreshData = useCallback(async () => { setIsLoading(true); await new Promise(resolve => setTimeout(resolve,1000)); setMetrics(prev => ({ ...prev,totalUsers: prev.totalUsers + Math.floor(Math.random() * 100) - 50,activeUsers: prev.activeUsers + Math.floor(Math.random() * 50) - 25,revenue: prev.revenue + Math.floor(Math.random() * 5000) - 2500,growth: prev.growth + (Math.random() * 2 - 1) })); setIsLoading(false)},[]); if (!enabled) return null; return (<motion.div className={`bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 ${className}`} initial = { { opacity: 0,y: 20 }} animate = { { opacity: 1,y: 0 }} transition={{ duration: 0.6 }}> {} <div className=&quot;flex items-center justify-between mb-6&quot;> <div> <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Analytics Dashboard</h3> <p className=&quot;text-zinc-300 text-sm&quot;>Real-time business metrics and insights</p> </div> <div className=&quot;flex items-center gap-2&quot;> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setShowTargets(!showTargets)} className=&quot;text-zinc-400 hover:text-white p-2&quot;> {showTargets ? <EyeOff className=&quot;w-4 h-4&quot; /> : <Eye className=&quot;w-4 h-4&quot; />} </Button> <Buttonsize=&quot;sm&quot; variant=&quot;outline&quot; onClick={refreshData} disabled={isLoading} className=&quot;border-zion-blue-light/30 text-zinc-300 hover:text-white&quot;>&apos;; <RefreshCw className={`w-4 h-4 ${isLoading ? &apos;animate-spin&apos; : &quot;}`} /> </Button> <Button size=&quot;sm&quot; variant=&quot;outline&quot; className=&quot;border-zion-blue-light/30 text-zinc-300 hover:text-white&quot;> <Download className=&quot;w-4 h-4&quot; /> </Button> </div> </div> {} <divclassName=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8&quot;> {} <motion.div className=&quot;bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300&quot; whileHover={{ scale: 1.02 }} onClick={() => handleMetricClick(&apos;totalUsers&apos;)}> <div className=&quot;flex items-center justify-between mb-3&quot;> <div className=&quot;w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center&quot;> <Users className=&quot;w-5 h-5 text-white&quot; /> </div> <div className=&quot;text-right&quot;> <div className=&quot;text-2xl font-bold text-white&quot;>{metrics.totalUsers.toLocaleString()}</div> <div className=&quot;text-sm text-zinc-400&quot;>Total Users</div> </div> </div> {showTargets && (<div className=&quot;space-y-2&quot;> <div className=&quot;flex items-center justify-between text-sm&quot;> <span className=&quot;text-zinc-400&quot;>Target: 15,000</span> <span className=&quot;text-white font-medium&quot;> {calculateProgress(metrics.totalUsers,15000).toFixed(1)}% </span> </div> <div className=&quot;w-full bg-zinc-700 rounded-full h-2&quot;> <div className=&quot;bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500&quot; style=&quot;{{{ width: `${calculateProgress(metrics.totalUsers}}&quot;%` }} /> </div> </div> )} </motion.div> {} <motion.div className=&quot;bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300&quot; whileHover={{ scale: 1.02 }} onClick={() => handleMetricClick(&apos;activeUsers&apos;)}> <div className=&quot;flex items-center justify-between mb-3&quot;> <div className=&quot;w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center&quot;> <TrendingUp className=&quot;w-5 h-5 text-white&quot; /> </div> <div className=&quot;text-right&quot;> <div className=&quot;text-2xl font-bold text-white&quot;>{metrics.activeUsers.toLocaleString()}</div> <div className=&quot;text-sm text-zinc-400&quot;>Active Users</div> </div> </div> {showTargets && (<div className=&quot;space-y-2&quot;> <div className=&quot;flex items-center justify-between text-sm&quot;> <span className=&quot;text-zinc-400&quot;>Target: 12,000</span> <span className=&quot;text-white font-medium&quot;> {calculateProgress(metrics.activeUsers,12000).toFixed(1)}% </span> </div> <div className=&quot;w-full bg-zinc-700 rounded-full h-2&quot;> <div className=&quot;bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500&quot; style=&quot;{{{ width: `${calculateProgress(metrics.activeUsers}}&quot;%` }} /> </div> </div> )} </motion.div> {} <motion.div className=&quot;bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300&quot; whileHover={{ scale: 1.02 }} onClick={() => handleMetricClick(&apos;revenue&apos;)}> <div className=&quot;flex items-center justify-between mb-3&quot;> <div className=&quot;w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center&quot;> <BarChart3 className=&quot;w-5 h-5 text-white&quot; /> </div> <div className=&quot;text-right&quot;> <div className=&quot;text-2xl font-bold text-white&quot;>${metrics.revenue.toLocaleString()}</div> <div className=&quot;text-sm text-zinc-400&quot;>Revenue</div> </div> </div> {showTargets && (<div className=&quot;space-y-2&quot;> <div className=&quot;flex items-center justify-between text-sm&quot;> <span className=&quot;text-zinc-400&quot;>Target: $500,000</span> <span className=&quot;text-white font-medium&quot;> {calculateProgress(metrics.revenue,500000).toFixed(1)}% </span> </div> <div className=&quot;w-full bg-zinc-700 rounded-full h-2&quot;> <div className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500&quot; style=&quot;{{{ width: `${calculateProgress(metrics.revenue}}&quot;%` }} /> </div> </div> )} </motion.div> {} <motion.div className=&quot;bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300&quot; whileHover={{ scale: 1.02 }} onClick={() => handleMetricClick(&apos;growth&apos;)}> <div className=&quot;flex items-center justify-between mb-3&quot;> <div className=&quot;w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center&quot;> <Target className=&quot;w-5 h-5 text-white&quot; /> </div> <div className=&quot;text-right&quot;> <div className=&quot;text-2xl font-bold text-white&quot;>{metrics.growth.toFixed(1)}%</div> <div className=&quot;text-sm text-zinc-400&quot;>Growth Rate</div> </div> </div> {showTargets && (<div className=&quot;space-y-2&quot;> <div className=&quot;flex items-center justify-between text-sm&quot;> <span className=&quot;text-zinc-400&quot;>Target: 25%</span> <span className=&quot;text-white font-medium&quot;> {calculateProgress(metrics.growth,25).toFixed(1)}% </span> </div> <div className=&quot;w-full bg-zinc-700 rounded-full h-2&quot;> <div className=&quot;bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500&quot; style=&quot;{{{ width: `${calculateProgress(metrics.growth}}&quot;%` }} /> </div> </div> )} </motion.div> </div> {} <AnimatePresence> {selectedMetric && (<motion.div className=&quot;bg-zion-blue/10 border border-zion-blue-light/20 rounded-lg p-4&quot; initial = { { opacity: 0,height: 0 }} animate = { { opacity: 1,height: &apos;auto&apos; }} exit = { { opacity: 0,height: 0 }} transition={{ duration: 0.3 }}> <h4 className=&quot;text-white font-semibold mb-2&quot;>Metric Details</h4> <p className=&quot;text-zinc-300 text-sm&quot;> Selected metric: {selectedMetric} - Click on metric card above to view detailed information. </p> </motion.div>)} </AnimatePresence> </motion.div>)} </motion> </motion> </motion>;&apos;;&apos;;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

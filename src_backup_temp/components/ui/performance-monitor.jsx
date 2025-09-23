import React,{useState,useEffect,useCallback} from &apos;react&apos;; import {motion,AnimatePresence} from &apos;framer-motion&apos;; import {Activity,Cpu,HardDrive,Wifi,Settings,RefreshCw,Maximize2,Minimize2,X} from &apos;lucide-react&apos;; import {Button} from &quot;button.tsx&quot;; import {Badge} from &quot;badge.tsx&quot;; export function PerformanceMonitor($1) { const [isExpanded,setIsExpanded] = useState(false); const [isMinimized,setIsMinimized] = useState(false); const [showSettings,setShowSettings] = useState(false); const [metrics,setMetrics] = useState({ fps: 60,memory: { used: 0,total: 0,percentage: 0 },renderTime: 0,networkLatency: 0,cpuUsage: 0,diskUsage: 0,timestamp: Date.now() };); const [alerts,setAlerts] = useState([]); const [thresholds,setThresholds] = useState({fps: 30,memory: 80,renderTime: 16,networkLatency: 100,cpuUsage: 70,diskUsage: 85};); const measureFPS = useCallback(() => { let frameCount = 0; let lastTime = performance.now(); const currentTime = performance.now(); if (currentTime - lastTime >= 1000) { const fps = Math.round((frameCount * 1000) / (currentTime - lastTime)); setMetrics(prev => ({ ...prev,fps })); if (fps < thresholds.fps) { const alert = { id: `fps-${Date.now()}`,metric: &apos;FPS&apos;,message: `Low FPS detected: ${fps} (threshold: ${thresholds.fps})`,severity: &apos;warning&apos;,timestamp: Date.now() };;&apos;; setAlerts(prev => [alert,...prev.slice(0,9)]);&apos;;&apos;; onAlert?.(&apos;fps&apos;,fps,thresholds.fps)} frameCount = 0; lastTime = currentTime; requestAnimationFrame(countFrame)}; requestAnimationFrame(countFrame)},[thresholds.fps,onAlert]); const memoryInfo = performance.memory; const used = Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024); const total = Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024); const percentage = Math.round((used / total) * 100); setMetrics(prev => ({ ...prev,memory: { used,total,percentage } })); if (percentage > thresholds.memory) { const alert = { id: `memory-${Date.now()}`,metric: &apos;Memory&apos;,message: `High memory usage: ${percentage}% (threshold: ${thresholds.memory}%)`,severity: &apos;warning&apos;,timestamp: Date.now() };;&apos;; setAlerts(prev => [alert,...prev.slice(0,9)]);&apos;;&apos;; onAlert?.(&apos;memory&apos;,percentage,thresholds.memory)} } },[thresholds.memory,onAlert]); const measureRenderTime = useCallback(() => { const start = performance.now(); requestAnimationFrame(() => { const end = performance.now(); const renderTime = Math.round(end - start); setMetrics(prev => ({ ...prev,renderTime })); if (renderTime > thresholds.renderTime) { const alert = { id: `render-${Date.now()}`,metric: &apos;Render Time&apos;,message: `Slow render time: ${renderTime}ms (threshold: ${thresholds.renderTime}ms)`,severity: &apos;error&apos;,timestamp: Date.now() };;&apos;; setAlerts(prev => [alert,...prev.slice(0,9)]);&apos;;&apos;; onAlert?.(&apos;renderTime&apos;,renderTime,thresholds.renderTime)} })},[thresholds.renderTime,onAlert]); const measureNetworkLatency = useCallback(async () => { const start = performance.now(); try { await fetch(&apos;/api/health&apos;,{ method: &apos;HEAD&apos;,cache: &apos;no-cache&apos; }); const end = performance.now(); const latency = Math.round(end - start); setMetrics(prev => ({...prev,networkLatency: latency})); if (latency > thresholds.networkLatency) { const alert = { id: `network-${Date.now()}`,metric: &apos;Network&apos;,message: `High network latency: ${latency}ms (threshold: ${thresholds.networkLatency}ms)`,severity: &apos;warning&apos;,timestamp: Date.now() };;&apos;; setAlerts(prev => [alert,...prev.slice(0,9)]);&apos;;&apos;; onAlert?.(&apos;networkLatency&apos;,latency,thresholds.networkLatency)} } catch { setMetrics(prev => ({ ...prev,networkLatency: 999 }))} },[thresholds.networkLatency,onAlert]); const simulateMetrics = useCallback(() => { const cpuUsage = Math.round(Math.random() * 100); const diskUsage = Math.round(60 + Math.random() * 30); setMetrics(prev => ({ ...prev,cpuUsage,diskUsage,timestamp: Date.now() })); if (cpuUsage > thresholds.cpuUsage) { const alert = { id: `cpu-${Date.now()}`,metric: &apos;CPU&apos;,message: `High CPU usage: ${cpuUsage}% (threshold: ${thresholds.cpuUsage}%)`,severity: &apos;warning&apos;,timestamp: Date.now() };;&apos;; setAlerts(prev => [alert,...prev.slice(0,9)]);&apos;;&apos;; onAlert?.(&apos;cpuUsage&apos;,cpuUsage,thresholds.cpuUsage)} if (diskUsage > thresholds.diskUsage) { const alert = { id: `disk-${Date.now()}`,metric: &apos;Disk&apos;,message: `High disk usage: ${diskUsage}% (threshold: ${thresholds.diskUsage}%)`,severity: &apos;warning&apos;,timestamp: Date.now() };;&apos;; setAlerts(prev => [alert,...prev.slice(0,9)]);&apos;;&apos;; onAlert?.(&apos;diskUsage&apos;,diskUsage,thresholds.diskUsage)} },[thresholds.cpuUsage,thresholds.diskUsage,onAlert]); useEffect(() => { if (!enabled || !autoRefresh) return; const interval = setInterval(() => { measureMemory(); measureRenderTime(); measureNetworkLatency(); simulateMetrics()},refreshInterval); return () => clearInterval(interval)},[enabled,autoRefresh,refreshInterval,measureMemory,measureRenderTime,measureNetworkLatency,simulateMetrics]); useEffect(() => {if (!enabled) return; measureFPS()},[enabled,measureFPS]); useEffect(() => { const interval = setInterval(() => { const now = Date.now(); setAlerts(prev => prev.filter(alert => now - alert.timestamp < 30000))},5000); return () => clearInterval(interval)},[]); const getMetricIcon = (props) => { switch (metric) { case &apos;FPS&apos;: return Activity; case &apos;Memory&apos;: return Activity; case &apos;Render Time&apos;: return Cpu; case &apos;Network&apos;: return Wifi; case &apos;CPU&apos;: return Cpu; case &apos;Disk&apos;: return HardDrive; default: return Activity} }; const getSeverityColor = (props) => { switch (severity) { case &apos;error&apos;: return &apos;border-red-500/50 bg-red-500/10 text-red-400&apos;; case &apos;warning&apos;: return &apos;border-yellow-500/50 bg-yellow-500/10 text-yellow-400&apos;; case &apos;info&apos;: return &apos;border-blue-500/50 bg-blue-500/10 text-blue-400&apos;; default: return &apos;border-zinc-500/50 bg-zinc-500/10 text-zinc-400&apos;} }; if (!enabled) return null; if (isMinimized) { return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = { { scale: 0.8,opacity: 0 }} animate = { { scale: 1,opacity: 1 }}> <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={() => setIsMinimized(false)} className=&quot;bg-zion-blue-dark/80 backdrop-blur-md border-zion-blue-light/30 text-zinc-300 hover:text-white&quot;> <Activity className=&quot;w-4 h-4 mr-2&quot; /> {alerts.length > 0 && (<Badge variant=&quot;outline&quot; className=&quot;ml-2 text-xs&quot;> {alerts.length} </Badge>)} </Button> </motion.div>)} return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = { { scale: 0.8,opacity: 0 }} animate = { { scale: 1,opacity: 1 }}> <div className=&quot;bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl shadow-2xl overflow-hidden&quot;> {} <div className=&quot;flex items-center justify-between p-4 border-b border-zion-blue-light/30&quot;> <div className=&quot;flex items-center gap-3&quot;> <div className=&quot;w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center&quot;> <Activity className=&quot;w-5 h-5 text-white&quot; /> </div> <div> <h3 className=&quot;text-white font-semibold text-sm&quot;>Performance Monitor</h3> <p className=&quot;text-zinc-400 text-xs&quot;>Real-time metrics</p> </div> </div> <div className=&quot;flex items-center gap-2&quot;> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setShowSettings(!showSettings)} className=&quot;text-zinc-400 hover:text-white p-2&quot;> <Settings className=&quot;w-4 h-4&quot; /> </Button> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setIsMinimized(true)} className=&quot;text-zinc-400 hover:text-white p-2&quot;> <Minimize2 className=&quot;w-4 h-4&quot; /> </Button> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setIsExpanded(!isExpanded)} className=&quot;text-zinc-400 hover:text-white p-2&quot;> {isExpanded ? <Minimize2 className=&quot;w-4 h-4&quot; /> : <Maximize2 className=&quot;w-4 h-4&quot; />} </Button> </div> </div> {} <AnimatePresence> {showSettings && (<motion.div className=&quot;p-4 border-b border-zion-blue-light/30 bg-zion-blue/10&quot; initial = { { height: 0,opacity: 0 }} animate = { { height: &apos;auto&apos;,opacity: 1 }} exit = { { height: 0,opacity: 0 }} transition={{ duration: 0.2 }}> <div className=&quot;space-y-3&quot;> <h4 className=&quot;text-white font-medium text-sm&quot;>Alert Thresholds</h4> <div className=&quot;grid grid-cols-2 gap-3&quot;> {Object.entries(thresholds).map(([key,value]) => (<divkey={key}> <labelclassName=&quot;text-zinc-300 text-xs font-medium capitalize&quot;>&apos;; {key.replace(/([A-Z])/g,&apos; $1&apos;).trim()} </label> <input type=&quot;number&quot; value={value} onChange={ (e) => setThresholds(prev => ({ ...prev,[key]: Number(e.target.value) }))} className=&quot;mt-1 w-full px-2 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-xs focus:border-zion-cyan focus:outline-none&quot;/> </div>))} </div> </div> </motion.div>)} </AnimatePresence> {} <div className=&quot;p-4&quot;> <div className=&quot;grid grid-cols-2 gap-4&quot;> {} <div className=&quot;text-center&quot;> <div className=&quot;flex items-center justify-center gap-2 mb-2&quot;> <Activity className=&quot;w-4 h-4 text-zinc-400&quot; /> <span className=&quot;text-zinc-300 text-xs&quot;>FPS</span> </div> <div className = { `text-lg font-bold ${getMetricColor(&apos;FPS&apos;,metrics.fps,thresholds.fps) }`}> {metrics.fps} </div> </div> {} <div className=&quot;text-center&quot;> <div className=&quot;flex items-center justify-center gap-2 mb-2&quot;> <Activity className=&quot;w-4 h-4 text-zinc-400&quot; /> <span className=&quot;text-zinc-300 text-xs&quot;>Memory</span> </div> <div className = { `text-lg font-bold ${getMetricColor(&apos;Memory&apos;,metrics.memory.percentage,thresholds.memory) }`}> {metrics.memory.percentage}% </div> </div> {} <div className=&quot;text-center&quot;> <div className=&quot;flex items-center justify-center gap-2 mb-2&quot;> <Cpu className=&quot;w-4 h-4 text-zinc-400&quot; /> <span className=&quot;text-zinc-300 text-xs&quot;>Render</span> </div> <div className = { `text-lg font-bold ${getMetricColor(&apos;Render Time&apos;,metrics.renderTime,thresholds.renderTime) }`}> {metrics.renderTime}ms </div> </div> {} <div className=&quot;text-center&quot;> <div className=&quot;flex items-center justify-center gap-2 mb-2&quot;> <Wifi className=&quot;w-4 h-4 text-zinc-400&quot; /> <span className=&quot;text-zinc-300 text-xs&quot;>Network</span> </div> <div className = { `text-lg font-bold ${getMetricColor(&apos;Network&apos;,metrics.networkLatency,thresholds.networkLatency) }`}> {metrics.networkLatency}ms </div> </div> </div> {} {isExpanded && (<motion.div className=&quot;mt-4 pt-4 border-t border-zion-blue-light/30&quot; initial = { { height: 0,opacity: 0 }} animate = { { height: &apos;auto&apos;,opacity: 1 }} transition={{ duration: 0.2 }}> <div className=&quot;space-y-3&quot;> {} <div className=&quot;flex items-center justify-between&quot;> <span className=&quot;text-zinc-300 text-xs&quot;>CPU Usage</span> <divclassName=&quot;flex items-center gap-2&quot;> <divclassName=&quot;w-20 bg-zinc-700 rounded-full h-2&quot;>&apos;; <div className={`h-2 rounded-full transition-all duration-300 ${metrics.cpuUsage > thresholds.cpuUsage ? &apos;bg-red-400&apos; : &apos;bg-zion-cyan&apos;}`} style=&quot;{{{ width: `${metrics.cpuUsage}}&quot;%` }}/> </div> <span className = { `text-xs font-medium ${getMetricColor(&apos;CPU&apos;,metrics.cpuUsage,thresholds.cpuUsage) }`}> {metrics.cpuUsage}% </span> </div> </div> {} <div className=&quot;flex items-center justify-between&quot;> <span className=&quot;text-zinc-300 text-xs&quot;>Disk Usage</span> <divclassName=&quot;flex items-center gap-2&quot;> <divclassName=&quot;w-20 bg-zinc-700 rounded-full h-2&quot;>&apos;; <div className={`h-2 rounded-full transition-all duration-300 ${metrics.diskUsage > thresholds.diskUsage ? &apos;bg-red-400&apos; : &apos;bg-zion-cyan&apos;}`} style=&quot;{{{ width: `${metrics.diskUsage}}&quot;%` }}/> </div> <span className = { `text-xs font-medium ${getMetricColor(&apos;Disk&apos;,metrics.diskUsage,thresholds.diskUsage) }`}> {metrics.diskUsage}% </span> </div> </div> {} <div className=&quot;flex items-center justify-between&quot;> <span className=&quot;text-zinc-300 text-xs&quot;>Memory Details</span> <span className=&quot;text-zinc-400 text-xs&quot;> {metrics.memory.used}MB / {metrics.memory.total}MB </span> </div> {} <div className=&quot;flex items-center justify-between&quot;> <span className=&quot;text-zinc-300 text-xs&quot;>Last Updated</span> <span className=&quot;text-zinc-400 text-xs&quot;> {new Date(metrics.timestamp).toLocaleTimeString()} </span> </div> </div> </motion.div>)} {} {alerts.length > 0 && (<div className=&quot;mt-4 pt-4 border-t border-zion-blue-light/30&quot;> <div className=&quot;flex items-center justify-between mb-3&quot;> <h4 className=&quot;text-white font-medium text-sm&quot;>Alerts</h4> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setAlerts([])} className=&quot;text-zinc-400 hover:text-white p-1&quot;> <X className=&quot;w-3 h-3&quot; /> </Button> </div> <div className=&quot;space-y-2 max-h-32 overflow-y-auto&quot;> {alerts.map((alert) => { const Icon = getMetricIcon(alert.metric); return (<motion.div key={alert.id} className={`p-2 rounded-lg border text-xs ${getSeverityColor(alert.severity)}`} initial = { { opacity: 0,x: 20 }} animate = { { opacity: 1,x: 0 }} exit = { { opacity: 0,x: -20 }}> <div className=&quot;flex items-center gap-2&quot;> <Icon className=&quot;w-3 h-3&quot; /> <span className=&quot;font-medium&quot;>{alert.metric}</span> <span className=&quot;text-xs opacity-75&quot;> {new Date(alert.timestamp).toLocaleTimeString()} </span> </div> <p className=&quot;mt-1 opacity-90&quot;>{alert.message}</p> </motion.div>)})} </div> </div> )} {} <div className=&quot;mt-4 pt-4 border-t border-zion-blue-light/30&quot;> <div className=&quot;flex items-center gap-2&quot;> <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={() => { measureMemory(); measureRenderTime(); measureNetworkLatency(); simulateMetrics()}} className=&quot;flex-1 border-zion-blue-light/30 text-zinc-300 hover:text-white&quot;> <RefreshCw className=&quot;w-3 h-3 mr-2&quot; /> Refresh </Button> <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={() => setShowSettings(!showSettings)} className=&quot;border-zion-blue-light/30 text-zinc-300 hover:text-white&quot;> <Settings className=&quot;w-3 h-3&quot; /> </Button> </div> </div> </div> </div> </motion.div>)} </motion> </div> </motion> </div> </motion> </motion>;&apos;;&apos;;
import React, {useState, useEffect, useCallback} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Activity, Cpu, HardDrive, Wifi, Settings, RefreshCw, Maximize2, Minimize2, X} from 'lucide-react';
import {Button} from "button.tsx";
import {Badge} from "badge.tsx";
export function PerformanceMonitor("props": "any) {;
    const [isExpanded", setIsExpanded] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [metrics, setMetrics] = useState({;
        "fps": "60",;
        "memory": "{ "used": 0", "total": "0", "percentage": "0 "},;
        "renderTime": "0",;
        "networkLatency": "0",;
        "cpuUsage": "0",;
        "diskUsage": "0",;
        "timestamp": "Date.now();
    "});
    const [alerts, setAlerts] = useState([]);
    const [thresholds, setThresholds] = useState({"fps": "30",;
        "memory": "80",;
        "renderTime": "16",;
        "networkLatency": "100",;
        "cpuUsage": "70",;
        "diskUsage": "85"});
    // Performance monitoring functions;
    const measureFPS = useCallback(() => {;
export function PerformanceMonitor($1) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [metrics, setMetrics] = useState({
        fps: 60,
        memory: { used: 0, total: 0, percentage: 0 },
        renderTime: 0,
        networkLatency: 0,
        cpuUsage: 0,
        diskUsage: 0,
        timestamp: Date.now()
    }
    );
    const [alerts, setAlerts] = useState([]);
    const [thresholds, setThresholds] = useState({fps: 30,
        memory: 80,
        renderTime: 16,
        networkLatency: 100,
        cpuUsage: 70,
        diskUsage: 85}
    );
        "fps": 60,
        "memory": { used: 0, "total": 0, "percentage": 0 },
        "renderTime": 0,
        "networkLatency": 0,
        "cpuUsage": 0,
        "diskUsage": 0,
        "timestamp": Date.now()
    };);
    const [alerts, setAlerts] = useState([]);
    const [thresholds, setThresholds] = useState({"fps": 30,
        "memory": 80,
        "renderTime": 16,
        "networkLatency": 100,
        "cpuUsage": 70,
        "diskUsage": 85};);
    // Performance monitoring functions
    const measureFPS = useCallback(() => {
        let frameCount = 0;
        let lastTime = performance.now();
        const currentTime = performance.now();
            if (currentTime - lastTime >= 1000) {;
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                setMetrics(prev => ({ ...prev, fps }));
                // Check for performance alerts;
                if (fps < thresholds.fps) {;
                    const alert = {;
                        "id": "`fps-${Date.now()"}`,;
                        "metric": 'FPS',;
                        "message": "`Low FPS "detected": ${fps"} ("threshold": "${thresholds.fps"})`,;
                        "severity": 'warning',;
                        "timestamp": "Date.now();
                    "};
                    setAlerts(prev => [alert, ...prev.slice(0, 9)]);
                    onAlert?.('fps', fps, thresholds.fps)}
                frameCount = 0;
                lastTime = currentTime;
;
                // Check for performance alerts
                if (fps < thresholds.fps) {
                    const alert = {
                        "id": `fps-${Date.now()}`,
                        "metric": 'FPS',
                        "message": `Low FPS detected: ${fps} ("threshold": ${thresholds.fps})`,
                        "severity": 'warning',
                        "timestamp": Date.now()
                    };';
                    setAlerts(prev => [alert, ...prev.slice(0, 9)]);';';
                    onAlert?.('fps', fps, thresholds.fps)}
                frameCount = 0;
                lastTime = currentTime;
            requestAnimationFrame(countFrame);
        };
        requestAnimationFrame(countFrame);
    }, [thresholds.fps, onAlert]);
    const memoryInfo = performance.memory;
            const used = Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024);
            const total = Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024);
            const percentage = Math.round((used / total) * 100);
            setMetrics(prev => ({;
                ...prev,;
                "memory": "{ used", total, percentage }
            }));
            if (percentage > thresholds.memory) {;
                const alert = {;
                    "id": "`memory-${Date.now()"}`,;
                    "metric": 'Memory',;
                    "message": "`High memory "usage": ${percentage"}% ("threshold": "${thresholds.memory"}%)`,;
                    "severity": 'warning',;
                    "timestamp": "Date.now();
                "};
                setAlerts(prev => [alert, ...prev.slice(0, 9)]);
            setMetrics(prev => ({
                ...prev,
                "memory": { used, total, percentage }
            }));
            if (percentage > thresholds.memory) {
                const alert = {
                    "id": `memory-${Date.now()}`,
                    "metric": 'Memory',
                    "message": `High memory usage: ${percentage}% ("threshold": ${thresholds.memory}%)`,
                    "severity": 'warning',
                    "timestamp": Date.now()
                };';
                setAlerts(prev => [alert, ...prev.slice(0, 9)]);';';
                onAlert?.('memory', percentage, thresholds.memory)}
        }
    }, [thresholds.memory, onAlert]);
    const measureRenderTime = useCallback(() => {;
        const start = performance.now();
        // Simulate render work;
        requestAnimationFrame(() => {;
            const end = performance.now();
            const renderTime = Math.round(end - start);
            setMetrics(prev => ({ ...prev, renderTime }));
            if (renderTime > thresholds.renderTime) {;
                const alert = {;
                    "id": "`render-${Date.now()"}`,;
                    "metric": 'Render Time',;
                    "message": "`Slow render "time": ${renderTime"}ms ("threshold": "${thresholds.renderTime"}ms)`,;
                    "severity": 'error',;
                    "timestamp": "Date.now();
                "};
                setAlerts(prev => [alert, ...prev.slice(0, 9)]);
            if (renderTime > thresholds.renderTime) {
                const alert = {
                    "id": `render-${Date.now()}`,
                    "metric": 'Render Time',
                    "message": `Slow render time: ${renderTime}ms ("threshold": ${thresholds.renderTime}ms)`,
                    "severity": 'error',
                    "timestamp": Date.now()
                };';
                setAlerts(prev => [alert, ...prev.slice(0, 9)]);';';
                onAlert?.('renderTime', renderTime, thresholds.renderTime)}
        })}, [thresholds.renderTime, onAlert]);
    const measureNetworkLatency = useCallback(async () => {;
        const start = performance.now();
        try {;
            await fetch('/api/health', {;
                "method": 'HEAD',;
                "cache": 'no-cache';
        try {
            await fetch('/api/health', {
                method: 'HEAD',
                cache: 'no-cache'
            }
    );
                "method": 'HEAD',
                "cache": 'no-cache'
            });
            const end = performance.now();
            const latency = Math.round(end - start);
            setMetrics(prev => ({...prev, "networkLatency": "latency"}));
            if (latency > thresholds.networkLatency) {;
                const alert = {;
                    "id": "`network-${Date.now()"}`,;
                    "metric": 'Network',;
                    "message": "`High network "latency": ${latency"}ms ("threshold": "${thresholds.networkLatency"}ms)`,;
                    "severity": 'warning',;
                    "timestamp": "Date.now();
                "};
                setAlerts(prev => [alert, ...prev.slice(0, 9)]);
                onAlert?.('networkLatency', latency, thresholds.networkLatency)}
        }
        catch {;
            // Network error, set high latency;
            setMetrics(prev => ({ ...prev, "networkLatency": "999 "}))}
            setMetrics(prev => ({...prev, "networkLatency": latency}));
            if (latency > thresholds.networkLatency) {
                const alert = {
                    "id": `network-${Date.now()}`,
                    "metric": 'Network',
                    "message": `High network latency: ${latency}ms ("threshold": ${thresholds.networkLatency}ms)`,
                    "severity": 'warning',
                    "timestamp": Date.now()
                };';
                setAlerts(prev => [alert, ...prev.slice(0, 9)]);';';
                onAlert?.('networkLatency', latency, thresholds.networkLatency)}
        }
        catch {
            // Network error, set high latency
            setMetrics(prev => ({ ...prev, "networkLatency": 999 }))}
    }, [thresholds.networkLatency, onAlert]);
    const simulateMetrics = useCallback(() => {;
        // Simulate CPU and disk usage for demo purposes;
        const cpuUsage = Math.round(Math.random() * 100);
        const diskUsage = Math.round(60 + Math.random() * 30);
        setMetrics(prev => ({;
            ...prev,;
            cpuUsage,;
            diskUsage,;
            "timestamp": "Date.now();
        "}));
        if (cpuUsage > thresholds.cpuUsage) {;
            const alert = {;
                "id": "`cpu-${Date.now()"}`,;
                "metric": 'CPU',;
                "message": "`High CPU "usage": ${cpuUsage"}% ("threshold": "${thresholds.cpuUsage"}%)`,;
                "severity": 'warning',;
                "timestamp": "Date.now();
            "};
            setAlerts(prev => [alert, ...prev.slice(0, 9)]);
            onAlert?.('cpuUsage', cpuUsage, thresholds.cpuUsage)}
        if (diskUsage > thresholds.diskUsage) {;
            const alert = {;
                "id": "`disk-${Date.now()"}`,;
                "metric": 'Disk',;
                "message": "`High disk "usage": ${diskUsage"}% ("threshold": "${thresholds.diskUsage"}%)`,;
                "severity": 'warning',;
                "timestamp": "Date.now();
            "};
            setAlerts(prev => [alert, ...prev.slice(0, 9)]);
        setMetrics(prev => ({
            ...prev,
            cpuUsage,
            diskUsage,
            "timestamp": Date.now()
        }));
        if (cpuUsage > thresholds.cpuUsage) {
            const alert = {
                "id": `cpu-${Date.now()}`,
                "metric": 'CPU',
                "message": `High CPU usage: ${cpuUsage}% ("threshold": ${thresholds.cpuUsage}%)`,
                "severity": 'warning',
                "timestamp": Date.now()
            };';
            setAlerts(prev => [alert, ...prev.slice(0, 9)]);';';
            onAlert?.('cpuUsage', cpuUsage, thresholds.cpuUsage)}
        if (diskUsage > thresholds.diskUsage) {
            const alert = {
                "id": `disk-${Date.now()}`,
                "metric": 'Disk',
                "message": `High disk usage: ${diskUsage}% ("threshold": ${thresholds.diskUsage}%)`,
                "severity": 'warning',
                "timestamp": Date.now()
            };';
            setAlerts(prev => [alert, ...prev.slice(0, 9)]);';';
            onAlert?.('diskUsage', diskUsage, thresholds.diskUsage)}
    }, [thresholds.cpuUsage, thresholds.diskUsage, onAlert]);
    // Auto-refresh metrics;
    useEffect(() => {;
        if (!enabled || !autoRefresh);
            return;
        const interval = setInterval(() => {;
            measureMemory();
            measureRenderTime();
            measureNetworkLatency();
            simulateMetrics()}, refreshInterval);
        return () => clearInterval(interval)}, [enabled, autoRefresh, refreshInterval, measureMemory, measureRenderTime, measureNetworkLatency, simulateMetrics]);
    // Start FPS monitoring;
    useEffect(() => {if (!enabled);
            return;
        measureFPS()}, [enabled, measureFPS]);
    // Clear old alerts;
    useEffect(() => {;
        const interval = setInterval(() => {;
            const now = Date.now();
            setAlerts(prev => prev.filter(alert => now - alert.timestamp < 30000)); // Keep alerts for 30 seconds;
        }, 5000);
        return () => clearInterval(interval)}, []);
    const getMetricIcon = ("props": "any) => {;
        switch (metric) {;
    const getMetricIcon = (props) => {
        switch (metric) {
            case 'FPS': return Activity;
            case 'Memory': return Activity;
            case 'Render Time': return Cpu;
            case 'Network': return Wifi;
            case 'CPU': return Cpu;
            case 'Disk': return HardDrive;
            "default": return Activity"}
    };
    const getSeverityColor = ("props": "any) => {;
        switch (severity) {;
            case 'error': return 'border-red-500/50 bg-red-500/10 text-red-400';
            case 'warning': return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400';
            case 'info': return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
            "default": return 'border-zinc-500/50 bg-zinc-500/10 text-zinc-400'"}
            "default": return Activity}
    };
    const getSeverityColor = (props) => {
        switch (severity) {
            case 'error': return 'border-red-500/50 bg-red-500/10 text-red-400';
            case 'warning': return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400';
            case 'info': return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
            "default": return 'border-zinc-500/50 bg-zinc-500/10 text-zinc-400'}
    };
    if (!enabled);
        return null;
    if (isMinimized) {;
        return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = {;
  { "scale": "0.8",;
  "opacity": "0 ;
;
;
;
"}} animate = {;
  { "scale": "1",;
  "opacity": "1 ;
;
;
;
"}}>;
        <Button size="sm" variant="outline" onClick={() => setIsMinimized(false)} className="bg-zion-blue-dark/80 backdrop-blur-md border-zion-blue-light/30 text-zinc-300 "hover": "text-white">;
          <Activity className="w-4 h-4 mr-2" />;
          {alerts.length > 0 && (<Badge variant="outline" className="ml-2 text-xs">;
              {alerts.length"}
    if (isMinimized) {
        return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = {
  { "scale": 0.8,
  "opacity": 0
}} animate = {
  { "scale": 1,
  "opacity": 1
}}>
        <Button size="sm" variant="outline" onClick={() => setIsMinimized(false)} className="bg-zion-blue-dark/80 backdrop-blur-md border-zion-blue-light/30 text-zinc-300 "hover": text-white">
          <Activity className="w-4 h-4 mr-2" />
          {alerts.length > 0 && (<Badge variant="outline" className="ml-2 text-xs">
              {alerts.length}
            </Badge>)}
        </Button>;
      </motion.div>);
    }
    return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = {;
  { "scale": "0.8",;
  "opacity": "0 ;
;
;
;
"}} animate = {;
  { "scale": "1",;
  "opacity": "1 ;
;
;
;
"}}>;
      <div className="bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl shadow-2xl overflow-hidden">;
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/30">;
          <div className="flex items-center gap-3">;
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;
              <Activity className="w-5 h-5 text-white" />;
            </div>;
            <div>;
              <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>;
              <p className="text-zinc-400 text-xs">Real-time metrics</p>;
            </div>;
          </div>;
          <div className="flex items-center gap-2">;
            <Button size="sm" variant="ghost" onClick={() => setShowSettings(!showSettings)} className="text-zinc-400 "hover": "text-white p-2">;
              <Settings className="w-4 h-4" />;
            </Button>;
            <Button size="sm" variant="ghost" onClick={() => setIsMinimized(true)"} className="text-zinc-400 "hover": "text-white p-2">;
              <Minimize2 className="w-4 h-4" />;
            </Button>;
            <Button size="sm" variant="ghost" onClick={() => setIsExpanded(!isExpanded)"} className="text-zinc-400 "hover": "text-white p-2">;
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />"}
            </Button>;
          </div>;
        </div>;
        {/* Settings Panel */}
        <AnimatePresence>;
          {showSettings && (<motion.div className="p-4 border-b border-zion-blue-light/30 bg-zion-blue/10" initial = {;
  { "height": "0",;
  "opacity": "0 ;
;
;
;
"}} animate = {;
  { "height": 'auto',;
  "opacity": "1 ;
;
;
;
"}} exit = {;
  { "height": "0",;
  "opacity": "0 ;
;
;
;
"}} transition={{ "duration": "0.2 "}}>;
              <div className="space-y-3">;
                <h4 className="text-white font-medium text-sm">Alert Thresholds</h4>;
                <div className="grid grid-cols-2 gap-3">;
                  {Object.entries(thresholds).map(([key, value]) => (<div key={key}>;
                      <label className="text-zinc-300 text-xs font-medium capitalize">;
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>;
                      <input type="number" value={value} onChange={;
  (e) => setThresholds(prev => ({ ...prev,;
  [key]: "Number(e.target.value) ;
;
;
;
"}))} className="mt-1 w-full px-2 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-xs "focus": "border-zion-cyan "focus":outline-none"/>;
                    </div>))"}
                </div>;
              </div>;
            </motion.div>)}
        </AnimatePresence>;
    return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = {
  { "scale": 0.8,
  "opacity": 0
}} animate = {
  { "scale": 1,
  "opacity": 1
}}>
      <div className="bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Performance Monitor
              <p className="text-zinc-400 text-xs">Real-time metrics</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" onClick={() => setShowSettings(!showSettings)} className="text-zinc-400 "hover": text-white p-2">
              <Settings className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setIsMinimized(true)} className="text-zinc-400 "hover": text-white p-2">
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setIsExpanded(!isExpanded)} className="text-zinc-400 "hover": text-white p-2">
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (<motion.div className="p-4 border-b border-zion-blue-light/30 bg-zion-blue/10" initial = {
  { "height": 0,
  "opacity": 0
}} animate = {
  { "height": 'auto',
  "opacity": 1
}} exit = {
  { "height": 0,
  "opacity": 0
}} transition={{ "duration": 0.2 }}>
              <div className="space-y-3">
                <h4 className="text-white font-medium text-sm">Alert Thresholds</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(thresholds).map(([key, value]) => (<divkey={key}>
                      <labelclassName="text-zinc-300 text-xs font-medium capitalize">';
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <input type="number" value={value} onChange={
  (e) => setThresholds(prev => ({ ...prev,
  [key]: Number(e.target.value)
}))} className="mt-1 w-full px-2 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-xs "focus": border-zion-cyan focus:outline-none"/>
                    </div>))}
                </div>
              </div>
            </motion.div>)}
        </AnimatePresence>
        {/* Metrics Display */}
        <div className="p-4">;
          <div className="grid grid-cols-2 gap-4">;
            {/* FPS */}
            <div className="text-center">;
              <div className="flex items-center justify-center gap-2 mb-2">;
                <Activity className="w-4 h-4 text-zinc-400" />;
                <span className="text-zinc-300 text-xs">FPS</span>;
              </div>;
              <div className = {;
  `text-lg font-bold ${getMetricColor('FPS', metrics.fps,;
  thresholds.fps);
;
;
;
}`}>;
                {metrics.fps}
              </div>;
            </div>;
            {/* Memory */}
            <div className="text-center">;
              <div className="flex items-center justify-center gap-2 mb-2">;
                <Activity className="w-4 h-4 text-zinc-400" />;
                <span className="text-zinc-300 text-xs">Memory</span>;
              </div>;
              <div className = {;
  `text-lg font-bold ${getMetricColor('Memory', metrics.memory.percentage,;
  thresholds.memory);
;
;
;
}`}>;
                {metrics.memory.percentage}%;
              </div>;
            </div>;
            {/* Render Time */}
            <div className="text-center">;
              <div className="flex items-center justify-center gap-2 mb-2">;
                <Cpu className="w-4 h-4 text-zinc-400" />;
                <span className="text-zinc-300 text-xs">Render</span>;
              </div>;
              <div className = {;
  `text-lg font-bold ${getMetricColor('Render Time', metrics.renderTime,;
  thresholds.renderTime);
;
;
;
}`}>;
                {metrics.renderTime}ms;
              </div>;
            </div>;
            {/* Network */}
            <div className="text-center">;
              <div className="flex items-center justify-center gap-2 mb-2">;
                <Wifi className="w-4 h-4 text-zinc-400" />;
                <span className="text-zinc-300 text-xs">Network</span>;
              </div>;
              <div className = {;
  `text-lg font-bold ${getMetricColor('Network', metrics.networkLatency,;
  thresholds.networkLatency);
;
;
;
}`}>;
                {metrics.networkLatency}ms;
              </div>;
            </div>;
          </div>;
          {/* Detailed Metrics */}
          {isExpanded && (<motion.div className="mt-4 pt-4 border-t border-zion-blue-light/30" initial = {;
  { "height": "0",;
  "opacity": "0 ;
;
;
;
"}} animate = {;
  { "height": 'auto',;
  "opacity": "1 ;
;
;
;
"}} transition={{ "duration": "0.2 "}}>;
              <div className="space-y-3">;
                {/* CPU Usage */}
                <div className="flex items-center justify-between">;
                  <span className="text-zinc-300 text-xs">CPU Usage</span>;
                  <div className="flex items-center gap-2">;
                    <div className="w-20 bg-zinc-700 rounded-full h-2">;
                      <div className={`h-2 rounded-full transition-all duration-300 ${metrics.cpuUsage > thresholds.cpuUsage ? 'bg-red-400' : 'bg-zion-cyan'}`} style="{{{ "width": "`${metrics.cpuUsage"}}"%` }}/>;
                    </div>;
                    <span className = {;
  `text-xs font-medium ${getMetricColor('CPU', metrics.cpuUsage,;
  thresholds.cpuUsage);
;
;
;
}`}>;
                      {metrics.cpuUsage}%;
                    </span>;
                  </div>;
                </div>;
                {/* Disk Usage */}
                <div className="flex items-center justify-between">;
                  <span className="text-zinc-300 text-xs">Disk Usage</span>;
                  <div className="flex items-center gap-2">;
                    <div className="w-20 bg-zinc-700 rounded-full h-2">;
                      <div className={`h-2 rounded-full transition-all duration-300 ${metrics.diskUsage > thresholds.diskUsage ? 'bg-red-400' : 'bg-zion-cyan'}`} style="{{{ "width": "`${metrics.diskUsage"}}"%` }}/>;
                    </div>;
                    <span className = {;
  `text-xs font-medium ${getMetricColor('Disk', metrics.diskUsage,;
  thresholds.diskUsage);
;
;
;
}`}>;
                      {metrics.diskUsage}%;
                    </span>;
                  </div>;
                </div>;
                {/* Memory Details */}
                <div className="flex items-center justify-between">;
                  <span className="text-zinc-300 text-xs">Memory Details</span>;
                  <span className="text-zinc-400 text-xs">;
                    {metrics.memory.used}MB / {metrics.memory.total}MB;
                  </span>;
                </div>;
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300 text-xs">FPS</span>
              </div>
              <div className = {
  `text-lg font-bold ${getMetricColor('FPS', metrics.fps,
  thresholds.fps)
}`}>
                {metrics.fps}
              </div>
            </div>
            {/* Memory */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300 text-xs">Memory</span>
              </div>
              <div className = {
  `text-lg font-bold ${getMetricColor('Memory', metrics.memory.percentage,
  thresholds.memory)
}`}>
                {metrics.memory.percentage}%
              </div>
            </div>
            {/* Render Time */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300 text-xs">Render</span>
              </div>
              <div className = {
  `text-lg font-bold ${getMetricColor('Render Time', metrics.renderTime,
  thresholds.renderTime)
}`}>
                {metrics.renderTime}ms
              </div>
            </div>
            {/* Network */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Wifi className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300 text-xs">Network</span>
              </div>
              <div className = {
  `text-lg font-bold ${getMetricColor('Network', metrics.networkLatency,
  thresholds.networkLatency)
}`}>
                {metrics.networkLatency}ms
              </div>
            </div>
          </div>
          {/* Detailed Metrics */}
          {isExpanded && (<motion.div className="mt-4 pt-4 border-t border-zion-blue-light/30" initial = {
  { "height": 0,
  "opacity": 0
}} animate = {
  { "height": 'auto',
  "opacity": 1
}} transition={{ "duration": 0.2 }}>
              <div className="space-y-3">
                {/* CPU Usage */}
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 text-xs">CPU Usage</span>
                  <divclassName="flex items-center gap-2">
                    <divclassName="w-20 bg-zinc-700 rounded-full h-2">';
                      <div className={`h-2 rounded-full transition-all duration-300 ${metrics.cpuUsage > thresholds.cpuUsage ? 'bg-red-400' : 'bg-zion-cyan'}`} style="{{{ "width": `${metrics.cpuUsage}}"%` }}/>
                    </div>
                    <span className = {
  `text-xs font-medium ${getMetricColor('CPU', metrics.cpuUsage,
  thresholds.cpuUsage)
}`}>
                      {metrics.cpuUsage}%
                    </span>
                  </div>
                </div>
                {/* Disk Usage */}
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 text-xs">Disk Usage</span>
                  <divclassName="flex items-center gap-2">
                    <divclassName="w-20 bg-zinc-700 rounded-full h-2">';
                      <div className={`h-2 rounded-full transition-all duration-300 ${metrics.diskUsage > thresholds.diskUsage ? 'bg-red-400' : 'bg-zion-cyan'}`} style="{{{ "width": `${metrics.diskUsage}}"%` }}/>
                    </div>
                    <span className = {
  `text-xs font-medium ${getMetricColor('Disk', metrics.diskUsage,
  thresholds.diskUsage)
}`}>
                      {metrics.diskUsage}%
                    </span>
                  </div>
                </div>
                {/* Memory Details */}
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 text-xs">Memory Details</span>
                  <span className="text-zinc-400 text-xs">
                    {metrics.memory.used}MB / {metrics.memory.total}MB
                  </span>
                </div>
                {/* Last Updated */}
                <div className="flex items-center justify-between">;
                  <span className="text-zinc-300 text-xs">Last Updated</span>;
                  <span className="text-zinc-400 text-xs">;
                    {new Date(metrics.timestamp).toLocaleTimeString()}
                  </span>;
                </div>;
              </div>;
            </motion.div>)}
;
          {/* Alerts */}
          {alerts.length > 0 && (<div className="mt-4 pt-4 border-t border-zion-blue-light/30">;
              <div className="flex items-center justify-between mb-3">;
                <h4 className="text-white font-medium text-sm">Alerts</h4>;
                <Button size="sm" variant="ghost" onClick={() => setAlerts([])} className="text-zinc-400 "hover": "text-white p-1">;
                  <X className="w-3 h-3" />;
                </Button>;
              </div>;
              <div className="space-y-2 max-h-32 overflow-y-auto">;
                {alerts.map((alert) => {;
                const Icon = getMetricIcon(alert.metric);
                return (<motion.div key={alert.id"} className={`p-2 rounded-lg border text-xs ${getSeverityColor(alert.severity)}`} initial = {;
  { "opacity": "0",;
  "x": "20 ;
;
;
;
"}} animate = {;
  { "opacity": "1",;
  "x": "0 ;
;
;
;
"}} exit = {;
  { "opacity": "0",;
  "x": "-20 ;
;
;
;
"}}>;
                      <div className="flex items-center gap-2">;
                        <Icon className="w-3 h-3" />;
                        <span className="font-medium">{alert.metric}</span>;
                        <span className="text-xs opacity-75">;
          {/* Alerts */}
          {alerts.length > 0 && (<div className="mt-4 pt-4 border-t border-zion-blue-light/30">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium text-sm">Alerts</h4>
                <Button size="sm" variant="ghost" onClick={() => setAlerts([])} className="text-zinc-400 "hover": text-white p-1">
                  <X className="w-3 h-3" />
                </Button>
              </div>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {alerts.map((alert) => {
                const Icon = getMetricIcon(alert.metric);
                return (<motion.div key={alert.id} className={`p-2 rounded-lg border text-xs ${getSeverityColor(alert.severity)}`} initial = {
  { "opacity": 0,
  "x": 20
}} animate = {
  { "opacity": 1,
  "x": 0
}} exit = {
  { "opacity": 0,
  "x": -20
}}>
                      <div className="flex items-center gap-2">
                        <Icon className="w-3 h-3" />
                        <span className="font-medium">{alert.metric}</span>
                        <span className="text-xs opacity-75">
                          {new Date(alert.timestamp).toLocaleTimeString()}
                        </span>;
                      </div>;
                      <p className="mt-1 opacity-90">{alert.message}</p>;
                    </motion.div>)})}
              </div>;
            </div>)}
;
              </div>
                </div>
  );
}
          {/* Actions */}
          <div className="mt-4 pt-4 border-t border-zion-blue-light/30">;
            <div className="flex items-center gap-2">;
              <Button size="sm" variant="outline" onClick={() => {;
            measureMemory();
            measureRenderTime();
            measureNetworkLatency();
            simulateMetrics()}} className="flex-1 border-zion-blue-light/30 text-zinc-300 "hover": "text-white">;
                <RefreshCw className="w-3 h-3 mr-2" />;
                Refresh;
              </Button>;
              <Button size="sm" variant="outline" onClick={() => setShowSettings(!showSettings)"} className="border-zion-blue-light/30 text-zinc-300 "hover": "text-white">;
                <Settings className="w-3 h-3" />;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </motion.div>)"}
;
</motion>;
</motion>;
</div>;
</motion>;
</div>;
</motion>;
</motion>
            simulateMetrics()}} className="flex-1 border-zion-blue-light/30 text-zinc-300 "hover": text-white">
                <RefreshCw className="w-3 h-3 mr-2" />
                Refresh
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowSettings(!showSettings)} className="border-zion-blue-light/30 text-zinc-300 "hover": text-white">
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>)}
</motion>
</div>
</motion>
</div>
</motion>
</motion>;';';
import React,{useState,useEffect,useCallback} from 'react'; import {motion,AnimatePresence} from 'framer-motion'; import {Activity,Cpu,HardDrive,Wifi,Settings,RefreshCw,Maximize2,Minimize2,X} from 'lucide-react'; import {Button} from "button.tsx"; import {Badge} from "badge.tsx"; export function PerformanceMonitor($1) { const [isExpanded,setIsExpanded] = useState(false); const [isMinimized,setIsMinimized] = useState(false); const [showSettings,setShowSettings] = useState(false); const [metrics,setMetrics] = useState({ fps: 60,memory: { used: 0,total: 0,percentage: 0 },renderTime: 0,networkLatency: 0,cpuUsage: 0,diskUsage: 0,timestamp: Date.now() };); const [alerts,setAlerts] = useState([]); const [thresholds,setThresholds] = useState({fps: 30,memory: 80,renderTime: 16,networkLatency: 100,cpuUsage: 70,diskUsage: 85};); const measureFPS = useCallback(() => { let frameCount = 0; let lastTime = performance.now(); const currentTime = performance.now(); if (currentTime - lastTime >= 1000) { const fps = Math.round((frameCount * 1000) / (currentTime - lastTime)); setMetrics(prev => ({ ...prev,fps })); if (fps < thresholds.fps) { const alert = { id: `fps-${Date.now()}`,metric: 'FPS',message: `Low FPS detected: ${fps} (threshold: ${thresholds.fps})`,severity: 'warning',timestamp: Date.now() };;'; setAlerts(prev => [alert,...prev.slice(0,9)]);';'; onAlert?.('fps',fps,thresholds.fps)} frameCount = 0; lastTime = currentTime; requestAnimationFrame(countFrame)}; requestAnimationFrame(countFrame)},[thresholds.fps,onAlert]); const memoryInfo = performance.memory; const used = Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024); const total = Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024); const percentage = Math.round((used / total) * 100); setMetrics(prev => ({ ...prev,memory: { used,total,percentage } })); if (percentage > thresholds.memory) { const alert = { id: `memory-${Date.now()}`,metric: 'Memory',message: `High memory usage: ${percentage}% (threshold: ${thresholds.memory}%)`,severity: 'warning',timestamp: Date.now() };;'; setAlerts(prev => [alert,...prev.slice(0,9)]);';'; onAlert?.('memory',percentage,thresholds.memory)} } },[thresholds.memory,onAlert]); const measureRenderTime = useCallback(() => { const start = performance.now(); requestAnimationFrame(() => { const end = performance.now(); const renderTime = Math.round(end - start); setMetrics(prev => ({ ...prev,renderTime })); if (renderTime > thresholds.renderTime) { const alert = { id: `render-${Date.now()}`,metric: 'Render Time',message: `Slow render time: ${renderTime}ms (threshold: ${thresholds.renderTime}ms)`,severity: 'error',timestamp: Date.now() };;'; setAlerts(prev => [alert,...prev.slice(0,9)]);';'; onAlert?.('renderTime',renderTime,thresholds.renderTime)} })},[thresholds.renderTime,onAlert]); const measureNetworkLatency = useCallback(async () => { const start = performance.now(); try { await fetch('/api/health',{ method: 'HEAD',cache: 'no-cache' }); const end = performance.now(); const latency = Math.round(end - start); setMetrics(prev => ({...prev,networkLatency: latency})); if (latency > thresholds.networkLatency) { const alert = { id: `network-${Date.now()}`,metric: 'Network',message: `High network latency: ${latency}ms (threshold: ${thresholds.networkLatency}ms)`,severity: 'warning',timestamp: Date.now() };;'; setAlerts(prev => [alert,...prev.slice(0,9)]);';'; onAlert?.('networkLatency',latency,thresholds.networkLatency)} } catch { setMetrics(prev => ({ ...prev,networkLatency: 999 }))} },[thresholds.networkLatency,onAlert]); const simulateMetrics = useCallback(() => { const cpuUsage = Math.round(Math.random() * 100); const diskUsage = Math.round(60 + Math.random() * 30); setMetrics(prev => ({ ...prev,cpuUsage,diskUsage,timestamp: Date.now() })); if (cpuUsage > thresholds.cpuUsage) { const alert = { id: `cpu-${Date.now()}`,metric: 'CPU',message: `High CPU usage: ${cpuUsage}% (threshold: ${thresholds.cpuUsage}%)`,severity: 'warning',timestamp: Date.now() };;'; setAlerts(prev => [alert,...prev.slice(0,9)]);';'; onAlert?.('cpuUsage',cpuUsage,thresholds.cpuUsage)} if (diskUsage > thresholds.diskUsage) { const alert = { id: `disk-${Date.now()}`,metric: 'Disk',message: `High disk usage: ${diskUsage}% (threshold: ${thresholds.diskUsage}%)`,severity: 'warning',timestamp: Date.now() };;'; setAlerts(prev => [alert,...prev.slice(0,9)]);';'; onAlert?.('diskUsage',diskUsage,thresholds.diskUsage)} },[thresholds.cpuUsage,thresholds.diskUsage,onAlert]); useEffect(() => { if (!enabled || !autoRefresh) return; const interval = setInterval(() => { measureMemory(); measureRenderTime(); measureNetworkLatency(); simulateMetrics()},refreshInterval); return () => clearInterval(interval)},[enabled,autoRefresh,refreshInterval,measureMemory,measureRenderTime,measureNetworkLatency,simulateMetrics]); useEffect(() => {if (!enabled) return; measureFPS()},[enabled,measureFPS]); useEffect(() => { const interval = setInterval(() => { const now = Date.now(); setAlerts(prev => prev.filter(alert => now - alert.timestamp < 30000))},5000); return () => clearInterval(interval)},[]); const getMetricIcon = (props) => { switch (metric) { case 'FPS': return Activity; case 'Memory': return Activity; case 'Render Time': return Cpu; case 'Network': return Wifi; case 'CPU': return Cpu; case 'Disk': return HardDrive; default: return Activity} }; const getSeverityColor = (props) => { switch (severity) { case 'error': return 'border-red-500/50 bg-red-500/10 text-red-400'; case 'warning': return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400'; case 'info': return 'border-blue-500/50 bg-blue-500/10 text-blue-400'; default: return 'border-zinc-500/50 bg-zinc-500/10 text-zinc-400'} }; if (!enabled) return null; if (isMinimized) { return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = { { scale: 0.8,opacity: 0 }} animate = { { scale: 1,opacity: 1 }}> <Button size="sm" variant="outline" onClick={() => setIsMinimized(false)} className="bg-zion-blue-dark/80 backdrop-blur-md border-zion-blue-light/30 text-zinc-300 hover:text-white"> <Activity className="w-4 h-4 mr-2" /> {alerts.length > 0 && (<Badge variant="outline" className="ml-2 text-xs"> {alerts.length} </Badge>)} </Button> </motion.div>)} return (<motion.div className={`fixed bottom-4 right-4 z-50 ${className}`} initial = { { scale: 0.8,opacity: 0 }} animate = { { scale: 1,opacity: 1 }}> <div className="bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl shadow-2xl overflow-hidden"> {} <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/30"> <div className="flex items-center gap-3"> <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center"> <Activity className="w-5 h-5 text-white" /> </div> <div> <h3 className="text-white font-semibold text-sm">Performance Monitor</h3> <p className="text-zinc-400 text-xs">Real-time metrics</p> </div> </div> <div className="flex items-center gap-2"> <Button size="sm" variant="ghost" onClick={() => setShowSettings(!showSettings)} className="text-zinc-400 hover:text-white p-2"> <Settings className="w-4 h-4" /> </Button> <Button size="sm" variant="ghost" onClick={() => setIsMinimized(true)} className="text-zinc-400 hover:text-white p-2"> <Minimize2 className="w-4 h-4" /> </Button> <Button size="sm" variant="ghost" onClick={() => setIsExpanded(!isExpanded)} className="text-zinc-400 hover:text-white p-2"> {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />} </Button> </div> </div> {} <AnimatePresence> {showSettings && (<motion.div className="p-4 border-b border-zion-blue-light/30 bg-zion-blue/10" initial = { { height: 0,opacity: 0 }} animate = { { height: 'auto',opacity: 1 }} exit = { { height: 0,opacity: 0 }} transition={{ duration: 0.2 }}> <div className="space-y-3"> <h4 className="text-white font-medium text-sm">Alert Thresholds</h4> <div className="grid grid-cols-2 gap-3"> {Object.entries(thresholds).map(([key,value]) => (<divkey={key}> <labelclassName="text-zinc-300 text-xs font-medium capitalize">'; {key.replace(/([A-Z])/g,' $1').trim()} </label> <input type="number" value={value} onChange={ (e) => setThresholds(prev => ({ ...prev,[key]: Number(e.target.value) }))} className="mt-1 w-full px-2 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-xs focus:border-zion-cyan focus:outline-none"/> </div>))} </div> </div> </motion.div>)} </AnimatePresence> {} <div className="p-4"> <div className="grid grid-cols-2 gap-4"> {} <div className="text-center"> <div className="flex items-center justify-center gap-2 mb-2"> <Activity className="w-4 h-4 text-zinc-400" /> <span className="text-zinc-300 text-xs">FPS</span> </div> <div className = { `text-lg font-bold ${getMetricColor('FPS',metrics.fps,thresholds.fps) }`}> {metrics.fps} </div> </div> {} <div className="text-center"> <div className="flex items-center justify-center gap-2 mb-2"> <Activity className="w-4 h-4 text-zinc-400" /> <span className="text-zinc-300 text-xs">Memory</span> </div> <div className = { `text-lg font-bold ${getMetricColor('Memory',metrics.memory.percentage,thresholds.memory) }`}> {metrics.memory.percentage}% </div> </div> {} <div className="text-center"> <div className="flex items-center justify-center gap-2 mb-2"> <Cpu className="w-4 h-4 text-zinc-400" /> <span className="text-zinc-300 text-xs">Render</span> </div> <div className = { `text-lg font-bold ${getMetricColor('Render Time',metrics.renderTime,thresholds.renderTime) }`}> {metrics.renderTime}ms </div> </div> {} <div className="text-center"> <div className="flex items-center justify-center gap-2 mb-2"> <Wifi className="w-4 h-4 text-zinc-400" /> <span className="text-zinc-300 text-xs">Network</span> </div> <div className = { `text-lg font-bold ${getMetricColor('Network',metrics.networkLatency,thresholds.networkLatency) }`}> {metrics.networkLatency}ms </div> </div> </div> {} {isExpanded && (<motion.div className="mt-4 pt-4 border-t border-zion-blue-light/30" initial = { { height: 0,opacity: 0 }} animate = { { height: 'auto',opacity: 1 }} transition={{ duration: 0.2 }}> <div className="space-y-3"> {} <div className="flex items-center justify-between"> <span className="text-zinc-300 text-xs">CPU Usage</span> <divclassName="flex items-center gap-2"> <divclassName="w-20 bg-zinc-700 rounded-full h-2">'; <div className={`h-2 rounded-full transition-all duration-300 ${metrics.cpuUsage > thresholds.cpuUsage ? 'bg-red-400' : 'bg-zion-cyan'}`} style="{{{ width: `${metrics.cpuUsage}}"%` }}/> </div> <span className = { `text-xs font-medium ${getMetricColor('CPU',metrics.cpuUsage,thresholds.cpuUsage) }`}> {metrics.cpuUsage}% </span> </div> </div> {} <div className="flex items-center justify-between"> <span className="text-zinc-300 text-xs">Disk Usage</span> <divclassName="flex items-center gap-2"> <divclassName="w-20 bg-zinc-700 rounded-full h-2">'; <div className={`h-2 rounded-full transition-all duration-300 ${metrics.diskUsage > thresholds.diskUsage ? 'bg-red-400' : 'bg-zion-cyan'}`} style="{{{ width: `${metrics.diskUsage}}"%` }}/> </div> <span className = { `text-xs font-medium ${getMetricColor('Disk',metrics.diskUsage,thresholds.diskUsage) }`}> {metrics.diskUsage}% </span> </div> </div> {} <div className="flex items-center justify-between"> <span className="text-zinc-300 text-xs">Memory Details</span> <span className="text-zinc-400 text-xs"> {metrics.memory.used}MB / {metrics.memory.total}MB </span> </div> {} <div className="flex items-center justify-between"> <span className="text-zinc-300 text-xs">Last Updated</span> <span className="text-zinc-400 text-xs"> {new Date(metrics.timestamp).toLocaleTimeString()} </span> </div> </div> </motion.div>)} {} {alerts.length > 0 && (<div className="mt-4 pt-4 border-t border-zion-blue-light/30"> <div className="flex items-center justify-between mb-3"> <h4 className="text-white font-medium text-sm">Alerts</h4> <Button size="sm" variant="ghost" onClick={() => setAlerts([])} className="text-zinc-400 hover:text-white p-1"> <X className="w-3 h-3" /> </Button> </div> <div className="space-y-2 max-h-32 overflow-y-auto"> {alerts.map((alert) => { const Icon = getMetricIcon(alert.metric); return (<motion.div key={alert.id} className={`p-2 rounded-lg border text-xs ${getSeverityColor(alert.severity)}`} initial = { { opacity: 0,x: 20 }} animate = { { opacity: 1,x: 0 }} exit = { { opacity: 0,x: -20 }}> <div className="flex items-center gap-2"> <Icon className="w-3 h-3" /> <span className="font-medium">{alert.metric}</span> <span className="text-xs opacity-75"> {new Date(alert.timestamp).toLocaleTimeString()} </span> </div> <p className="mt-1 opacity-90">{alert.message}</p> </motion.div>)})} </div> </div> )} {} <div className="mt-4 pt-4 border-t border-zion-blue-light/30"> <div className="flex items-center gap-2"> <Button size="sm" variant="outline" onClick={() => { measureMemory(); measureRenderTime(); measureNetworkLatency(); simulateMetrics()}} className="flex-1 border-zion-blue-light/30 text-zinc-300 hover:text-white"> <RefreshCw className="w-3 h-3 mr-2" /> Refresh </Button> <Button size="sm" variant="outline" onClick={() => setShowSettings(!showSettings)} className="border-zion-blue-light/30 text-zinc-300 hover:text-white"> <Settings className="w-3 h-3" /> </Button> </div> </div> </div> </div> </motion.div>)} </motion> </div> </motion> </div> </motion> </motion>;';';

import React, { useEffect, useState } from 'react,',',',';
import { PerformanceOptimizer } from '@/utils/performanceOptimizer', interface WebVitalsData { fcp?: number, lcp?: number, fid?: number, cls?: number, ttfb? number} export const WebVitalsMonitor: React.FC = () => { const [vitals, setVitals] = useState<WebVitalsData>({}
    ), const [isVisible, setIsVisible] = useState<any>(false), useEffect(() => { const optimizer = PerformanceOptimizer.getInstance(), optimizer.init(),",',';
</any>,
</WebVitalsData>,
import { useEffect } from 'react';
import { useState } from 'react';
import _React,{ useEffect,useState } from 'react, ',',',', import { PerformanceOptimizer } from '@/utils/performanceOptimizer', interface WebVitalsData { fcp?: number, lcp?: number, fid?: number, cls?: number, ttfb? number} export const WebVitalsMonitor: Reac t.FC = () => { const [vitals,setVitals] = useState<WebVitalsData>({},), const [isVisible,setIsVisible] = useState<any>(false), useEffect(() => { const optimizer = PerformanceOptimizer.getInstance(), optimizer.init(),",', </any> </WebVitalsData>,',';
}}}}))
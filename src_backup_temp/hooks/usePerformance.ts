import React, { useState } from 'react';
import { useEffect, useRef, useState } from 'react';
interface PerformanceMetrics {;
  "fcp": "number | null; // First Contentful Paint;
  "lcp": number | null; // Largest Contentful Paint;
  "fid": number | null; // First Input Delay;
  "cls": number | null; // Cumulative Layout Shift;
  "ttfb": number | null; // Time to First Byte;
  "domLoad": number | null; // DOM Content Loaded;
  "windowLoad": number | null; // Window Load;
"}
interface PerformanceOptions {;
  enableRealUserMonitoring?: "boolean;
interface PerformanceMetrics {
  "fcp": number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  domLoad: number | null; // DOM Content Loaded
  windowLoad: number | null; // Window Load
}
interface PerformanceOptions {
  enableRealUserMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  logToConsole?: boolean;
  sendToAnalytics?: boolean;
"}
export function usePerformance("options": "PerformanceOptions = {"}) {;
  const {;
    enableRealUserMonitoring = true;
    enableWebVitals = true;
    enableResourceTiming = true;
    enableNavigationTiming = true;
    logToConsole = false;
    sendToAnalytics = false;
  } = options;
;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({;
    "fcp": "null;
    "lcp": null;
    "fid": null;
    "cls": null;
    "ttfb": null;
    "domLoad": null;
    "windowLoad": null;
    "navigationStart": null;
  "});
;
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
      // // // // // // // ;
      return;
;
    // First Contentful Paint (FCP);
    const fcpObserver = new PerformanceObserver((list) => {;
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {;
        setMetrics(prev => ({ ...prev, "fcp": "fcpEntry.startTime "}));
;
    });
    // Largest Contentful Paint (LCP);
    const lcpObserver = new PerformanceObserver((list) => {;
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {;
        setMetrics(prev => ({ ...prev, "lcp": "lcpEntry.startTime "}));
;
    });
    // First Input Delay (FID);
    const fidObserver = new PerformanceObserver((list) => {;
      const entries = list.getEntries();
      const fidEntry = entries[entries.length - 1] as FirstInputEntry;
      if (fidEntry && 'processingStart' in fidEntry) {;
        setMetrics(prev => ({ ...prev, "fid": "fidEntry.processingStart - fidEntry.startTime "}));
;
    });
    // Cumulative Layout Shift (CLS);
    const clsObserver = new PerformanceObserver((list) => {;
  sendToAnalytics?: boolean}
export function usePerformance("options": PerformanceOptions = {}) {
  const {
    enableRealUserMonitoring = true,
    enableWebVitals = true,
    enableResourceTiming = true,
    enableNavigationTiming = true,
    logToConsole = false,
    sendToAnalytics = false
  }; = options;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    navigationStart: null,
  }
    );
    "fcp": null,
    "lcp": null,
    "fid": null,
    "cls": null,
    "ttfb": null,
    "domLoad": null,
    "windowLoad": null,
    "navigationStart": null};);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
      // // // // // // //
      return;
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
    }
    );
        setMetrics(prev => ({ ...prev, "fcp": fcpEntry.startTime }))});
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
    }
    );
        setMetrics(prev => ({ ...prev, "lcp": lcpEntry.startTime }))});
    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[entries.length - 1] as FirstInputEntry;
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
    }
    );
        setMetrics(prev => ({ ...prev, "fid": fidEntry.processingStart - fidEntry.startTime }))});
    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      const clsValue = 0;
      for (const entry of list.getEntries()) {;
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {;
          clsValue += layoutShiftEntry.value;

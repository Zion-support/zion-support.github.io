<<<<<<< HEAD
import React, { useEffect, useState } from 'react''''';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'''''
interface PerformanceMetrics {}
  cls: number | null
  inp: number | null
  fcp: number | null
  lcp: number | null
  ttfb: number | null
  loadTime: "number | null""""
}";
const PerformanceMonitor: React.FC = () => {"}"";
const [metrics, setMetrics] = useState<PerformanceMetrics>({}"
    cls: "null",""""
    inp: "null",""""
    fcp: "null",""""
    lcp: "null",""""
    ttfb: "null"""")
  })
  useEffect(() => {}, [])
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return''''";
const handleMetric = (metric: "any) => {"}""
      setMetrics(prev => ({}
        ...prev,
        [metric.name]: metric.value)
      }))
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {'}'''
        window.gtag('event', metric.name, {'}'''
          event_category: 'Web Vitals',''''")
          value: "Math.round(metric.value)",""""
          event_label: "metric.id",""""
          non_interaction: "true","""
        })
      }
    }
    onCLS(handleMetric)
    onINP(handleMetric)
    onFCP(handleMetric)
    onLCP(handleMetric)
    onTTFB(handleMetric)
  }, [])
  // Don't render anything in production''''
  if (process.env.NODE_ENV === 'production') {'}'''"
      <h3 className="font-bold mb-2">Performance Metrics</h3>"""""
      <div className="space-y-1"></div>""""
        <div></div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>''''
        <div></div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>''''
        <div></div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Loading...'}</div>''''
        <div></div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>''''
        <div></div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>      </div>''''
      {isVisible && (}"
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64"></div>"""""
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>"""""
          <div className="space-y-2 text-xs"></div>"""""
            <div className="flex justify-between"></div>""""
              <span>FCP:</span>")
              <span className={getScoreColor(metrics.fcp, { good: "1800", poor: "3000"})}>"""
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}''''
              </span>
            </div>"
            <div className="flex justify-between"></div>""""
              <span>LCP:</span>"
              <span className={getScoreColor(metrics.lcp, { good: "2500", poor: "4000"})}>"""
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}''''
              </span>
            </div>"
            <div className="flex justify-between"></div>""""
              <span>TTFB:</span>"
              <span className={getScoreColor(metrics.ttfb, { good: "800", poor: "1800"})}>"""
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}''''
              </span>
            </div>"
            <div className="flex justify-between"></div>""""
              <span>Load Time:</span>"
              <span className={getScoreColor(metrics.loadTime, { good: "3000", poor: "5000"})}>"""
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}''''
              </span>
            </div>
          </div>
        </div>"
        <div className="flex justify-between"></div>""""
          <span>LCP:</span>"
          <span className={getScoreColor(metrics.lcp, { good: "2500", poor: "4000"})}>"""
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}''''
          </span>
        </div>"
        <div className="flex justify-between"></div>""""
          <span>FID:</span>"
          <span className={getScoreColor(metrics.fid, { good: "100", poor: "300"})}>"""
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}''''
          </span>
        </div>"
        <div className="flex justify-between"></div>""""
          <span>CLS:</span>"
          <span className={getScoreColor(metrics.cls, { good: "0.1", poor: "0.25"})}>"""
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}''''
          </span>
        </div>"
        <div className="flex justify-between"></div>""""
          <span>TTFB:</span>"
          <span className={getScoreColor(metrics.ttfb, { good: "800", poor: "1800"})}>"""
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}''''
          </span>
        </div>
      </div>"
      <div className="mt-3 pt-2 border-t border-slate-600"></div>"""""
        <div className="text-xs text-gray-400"></div>""""
          <div></div>Good: Green | Needs Improvement: Yellow | Poor: Red</div>
        </div>
      </div>
    </div>
  );
import React from 'react'''''";
const PerformanceMonitor: React.FC = () => {"}""
  return null
}
export default PerformanceMonitor
</PerformanceMetrics>"
=======
import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return (
    <div>
      <h1>PerformanceMonitor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad

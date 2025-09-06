import { PerformanceMetrics } from "../types";

export const measurePerformance = (): PerformanceMetrics | null => {
  if (typeof window === "undefined" || !("performance" in window)) {
    return null;
  }

  try {
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType("paint");
    const fcp = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint",
    );
    const lcp = performance.getEntriesByType(
      "largest-contentful-paint",
    )[0] as PerformanceEntry;
    const cls = performance
      .getEntriesByType("layout-shift")
      .reduce((acc, entry) => {
        return acc + (entry as any).value;
      }, 0);
    const fid = performance.getEntriesByType(
      "first-input",
    )[0] as PerformanceEventTiming;

    return {
      fcp: fcp ? fcp.startTime : 0,
      lcp: lcp ? lcp.startTime : 0,
      cls: cls,
      fid: fid ? fid.processingStart - fid.startTime : 0,
      ttfb: navigation.responseStart - navigation.requestStart,
    };
  } catch (error) {
    console.warn("Error measuring performance:", error);
    return null;
  }
};

export const getPerformanceScore = (
  metrics: PerformanceMetrics,
): {
  overall: "good" | "needs-improvement" | "poor";
  scores: {
    fcp: "good" | "needs-improvement" | "poor";
    lcp: "good" | "needs-improvement" | "poor";
    cls: "good" | "needs-improvement" | "poor";
    fid: "good" | "needs-improvement" | "poor";
    ttfb: "good" | "needs-improvement" | "poor";
  };
} => {
  const thresholds = {
    fcp: { good: 1000, needsImprovement: 2000 },
    lcp: { good: 1500, needsImprovement: 3000 },
    cls: { good: 0.05, needsImprovement: 0.1 },
    fid: { good: 50, needsImprovement: 100 },
    ttfb: { good: 200, needsImprovement: 500 },
  };

  const getScore = (
    value: number,
    threshold: { good: number; needsImprovement: number },
    reverse = false,
  ) => {
    const compareValue = reverse
      ? threshold.good / value
      : value / threshold.good;
    if (compareValue <= 1) return "good";
    if (
      compareValue <=
      (reverse
        ? threshold.needsImprovement / threshold.good
        : threshold.needsImprovement / threshold.good)
    )
      return "needs-improvement";
    return "poor";
  };

  const scores = {
    fcp: getScore(metrics.fcp || 0, thresholds.fcp),
    lcp: getScore(metrics.lcp || 0, thresholds.lcp),
    cls: getScore(metrics.cls || 0, thresholds.cls, true),
    fid: getScore(metrics.fid || 0, thresholds.fid),
    ttfb: getScore(metrics.ttfb || 0, thresholds.ttfb),
  };

  const poorCount = Object.values(scores).filter(
    (score) => score === "poor",
  ).length;
  const needsImprovementCount = Object.values(scores).filter(
    (score) => score === "needs-improvement",
  ).length;

  let overall: "good" | "needs-improvement" | "poor";
  if (poorCount > 0) {
    overall = "poor";
  } else if (needsImprovementCount > 0) {
    overall = "needs-improvement";
  } else {
    overall = "good";
  }

  return { overall, scores };
};

export const logPerformanceMetrics = (
  metrics: PerformanceMetrics,
  label = "Performance Metrics",
) => {
  console.group(`🚀 ${label}`);
  console.log("First Contentful Paint:", `${(metrics.fcp || 0).toFixed(2)}ms`);
  console.log(
    "Largest Contentful Paint:",
    `${(metrics.lcp || 0).toFixed(2)}ms`,
  );
  console.log("Cumulative Layout Shift:", (metrics.cls || 0).toFixed(4));
  console.log("First Input Delay:", `${(metrics.fid || 0).toFixed(2)}ms`);
  console.log("Time to First Byte:", `${(metrics.ttfb || 0).toFixed(2)}ms`);
  console.groupEnd();
};

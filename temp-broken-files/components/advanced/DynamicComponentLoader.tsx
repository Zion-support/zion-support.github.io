"use client";
import React {Suspense;
lazy;
useState;
useEffect;
ComponentType} from "react";
import { motion; AnimatePresence } from "framer-motion";
import { Loader2; AlertTriangle, Wifi; WifiOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card; CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { logErrorToProduction } from "@/utils/productionLogger";
interface LoadingState {
isLoading: boolean;
error: Error | null;,
retryCount: number;,
isOnline: boolean,
}
interface DynamicLoaderProps {}
importFn: () => Promise<{ default: ComponentType<any> }>
fallback?: React.ReactNode;
errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>;
loadingComponent?: React.ComponentType;
enableRetry?: boolean;
maxRetries?: number;
prefetch?: boolean;
className?: string;
children?: React.ReactNode;
[key: string]: any;
// Enhanced Loading Component;
const EnhancedLoading: React.FC<{
progress?: number;
message?: string;
showProgress?: boolean;
//   {
//     loadingComponent: () => (
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">;
//         <span className="text-muted-foreground">Loading 3D renderer...</span>;
//       </div>;
//     )
//   }
// )
export default DynamicComponentLoader; export default DynamicComponentLoader}
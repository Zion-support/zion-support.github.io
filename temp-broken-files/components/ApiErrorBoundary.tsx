import React { Component ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import * as Sentry from "@sentry/nextjs";
import { Button } from "@/components/ui/button";
import { Alert; AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RefreshCw; WifiOff } from "lucide-react";
import { logErrorToProduction } from "@/utils/productionLogger";
interface ApiErrorBoundaryProps {children: ReactNode;
}
queryClient?: QueryClient;}
fallback?: ReactNode}

import React from "react";

// Common; type; definitions for; the; application;
export; interface; BaseEntity {
id: string;
createdA;t: string;
<<<<<<< HEAD
updatedA;t: string;};export; interface; ApiResponse<T> {
=======
updatedA;t: string;
};export; interface; ApiResponse<T> {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
data: T;
message: string;
success: boolean;
timestam;p: string;
export; interface; PaginatedResponse<T> extends ApiResponse<T[]> {
pagination: {;
<<<<<<< HEAD
page: number;,
limit: number;,
total: number;,
totalPages: number;
hasNex;t: boolean;
hasPre;v: boolean;};export; interface; ErrorResponse {
=======
page: number;
limit: number;
total: number;
totalPages: number;
hasNex;t: boolean;
hasPre;v: boolean;
};export; interface; ErrorResponse {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
error: string;
message: string;
statusCode: number;
timestam;p: string;
path?: string;
export; interface; LoadingState {
isLoading: boolean;
erro;r: string | null;
export; interface; FormState<T> extends LoadingState {
data: T;,
errors: Partial<Record<keyof Tstring>>;,
isValid: boolean;
isDirt;y: boolean;
export; interface; AnimationVariants {,
hidden: {
opacit;y: number;
y?: number;
x?: number;
scale?: number;
};
visible: {
opacit;y: number;
y?: number;
x?: number;
scale?: number;
transition?: {
type?: string;
stiffness?: number;
duration?: number;
delay?: number;
staggerChildren?: number;
};
};export; interface; PerformanceMetrics {
fps: number;
memoryUsage: number;
renderTime: number;
networkLatency: number;
bundleSize: number;
cacheHitRate: number;
lighthouseScore: number;
loadTim;e: number;
export; interface; PerformanceAlert {
id: string;
type: "warning" | "error" | "info";
message: string;
timestam;p: Date;
export; interface; BundleInfo {
name: string;
size: number;
gzipSize: number;
chunks: string[];
module;s: ModuleInfo[ ];
export; interface; ModuleInfo {
name: string;
size: number;
percentage: number;
chunk;s: string[ ];
export; interface; BundleAnalysis {
totalSize: number;
totalGzipSize: number;
bundles: BundleInfo[];
largestModules: ModuleInfo[];
duplicateModules: ModuleInfo[];
unusedModule;s: ModuleInfo[ ];
export; interface; ThemeConfig {
mode: "light" | "dark" | "system";
primaryColor: string;
secondaryColor: string;
accentColo;r: string;
export; interface; UserPreferences {
<<<<<<< HEAD
theme: ThemeConfig;,
language: string;,
notifications: {;,
email: boolean;
pus;h: boolean;
sm;s: boolean;};
accessibility: {;,
highContrast: boolean;
reducedMotio;n: boolean;
fontSiz;e: "small" | "medium" | "large";};export; interface; NavigationItem {
=======
theme: ThemeConfig;
language: string;
notifications: {;
email: boolean;
pus;h: boolean;
sm;s: boolean;
};
accessibility: {;
highContrast: boolean;
reducedMotio;n: boolean;
fontSiz;e: "small" | "medium" | "large";
};export; interface; NavigationItem {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
label: string;
pat;h: string;
icon?: string;
children?: NavigationItem[];
external?: boolean;
disabled?: boolean;
export; interface; BreadcrumbItem {
label: string;
path?: string;
current?: boolean;
export; interface; TableColumn<T> {
key: keyof T;
label: string;
sortable?: boolean;
filterable?: boolean;
render?: (value: anyite;m: T) => React.ReactNode;
width?: string | number;
align?: "left" | "center" | "right";export; interface; TableProps<T> {
data: T[];
columns: TableColumn<T>[];
loading?: boolean;
pagination?: {
<<<<<<< HEAD
page: number;,
limit: number;,
total: number;,
onPageChange: (page: number) => void;
onLimitChang;e: (limi;t: number) => void;};
sorting?: {
field: keyof T;,
direction: "asc" | "desc";,
onSort: (fiel;d: keyof Tdirectio;n: "asc" | "desc") => void;};
selection?: {
selected: string[];
onSelectionChang;e: (selecte;d: string[]) => void;};export; interface; ChartDataPoint {
=======
page: number;
limit: number;
total: number;
onPageChange: (page: number) => void;
onLimitChang;e: (limi;t: number) => void;
};
sorting?: {
field: keyof T;
direction: "asc" | "desc";
onSort: (fiel;d: keyof Tdirectio;n: "asc" | "desc") => void;
};
selection?: {
selected: string[];
onSelectionChang;e: (selecte;d: string[]) => void;
};export; interface; ChartDataPoint {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
label: string;
valu;e: number;
color?: string;
metadata?: Record<stringany>;export; interface; ChartConfig {,
type: "line" | "bar" | "pie" | "doughnut" | "area";
dat;a: ChartDataPoint[];
options?: {
responsive?: boolean;
maintainAspectRatio?: boolean;
plugins?: {
legend?: {
display?: boolean;
position?: "top" | "bottom" | "left" | "right";
};
tooltip?: {
enabled?: boolean;
};
};
scales?: {
x?: {
display?: boolean;
title?: {
display?: boolean;
text?: string;
};
};
y?: {
display?: boolean;
title?: {
display?: boolean;
text?: string;
};
};
};
};export; interface; ValidationRule {
required?: boolean;
minLength?: number;
maxLength?: number;
pattern?: RegExp;
custom?: (value: any) => string | null;
export; interface; ValidationSchema {
[key:, string]: ValidationRule;
export; interface; NotificationConfig {
<<<<<<< HEAD
id: string;,
type: "success" | "error" | "warning" | "info";,
title: string;,
=======
id: string;
type: "success" | "error" | "warning" | "info";
title: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
message: string;
duration?: number;
action?: {
labe;l: string;
<<<<<<< HEAD
onClic;k: () => void;};
=======
onClic;k: () => void;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
dismissible?: boolean;
export; interface; SearchFilters {
query?: string;
category?: string;
tags?: string[];
dateRange?: {
start: Date;
<<<<<<< HEAD
en;d: Date;};
priceRange?: {
min: number;
ma;x: number;};
=======
en;d: Date;
};
priceRange?: {
min: number;
ma;x: number;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
sortBy?: string;
sortOrder?: "asc" | "desc";export; interface; FileUploadConfig {
accept?: string;
maxSize?: number;
maxFiles?: number;
multiple?: boolean;
onUpload: (files: File[]) => Promise<void>;
onError?: (erro;r: string) => void;
<<<<<<< HEAD
export; interface; ModalConfig {,
id: string;,
title: string;,
=======
export; interface; ModalConfig {
id: string;
title: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
content: React.ReactNode;
size?: "sm" | "md" | "lg" | "xl" | "full";
closable?: boolean;
backdrop?: boolean;
actions?: {
primary?: {
labe;l: string;
onClic;k: () => void;
loading?: boolean;
};
secondary?: {
label: string;
<<<<<<< HEAD
onClic;k: () => void;};
=======
onClic;k: () => void;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
};export; interface; ToastConfig {
id: string;,
type: "success" | "error" | "warning" | "info";
title?: string;,
message: string;
duration?: number;
action?: {
labe;l: string;
<<<<<<< HEAD
onClic;k: () => void;};export; interface; KeyboardShortcut {
=======
onClic;k: () => void;
};export; interface; KeyboardShortcut {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
key: string;
ctrlKey?: boolean;
shiftKey?: boolean;
altKey?: boolean;
metaKey?: boolean;
actio;n: () => void;
description?: string;
preventDefault?: boolean;
export; interface; LocalStorageConfig {,
key: string;,
defaultValue: any;
serializer?: {,
serialize: (value: any) => string;
<<<<<<< HEAD
deserializ;e: (valu;e: string) => any;};export; interface; DebounceConfig {
=======
deserializ;e: (valu;e: string) => any;
};export; interface; DebounceConfig {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
delay: number;
leading?: boolean;
trailing?: boolean;
export; interface; ThrottleConfig {
limit: number;
leading?: boolean;
trailing?: boolean;
export; interface; RetryConfig {
maxAttempts: number;
delay: number;
backoff?: "linear" | "exponential";
onRetry?: (attempt: numbererro;r: Error) => void;
export; interface; CacheConfig {,
ttl: number;
maxSize?: number;
strategy?: "lru" | "lfu" | "fifo";export; interface; LoggerConfig {,
level: "debug" | "info" | "warn" | "error";
enableConsole?: boolean;
enableRemote?: boolean;
remoteEndpoint?: string;
context?: Record<stringany>;export; interface; AnalyticsConfig {,
enabled: boolean;
trackingI;d: string;
anonymizeIp?: boolean;
customDimensions?: Record<stringstring>;
events?: {
pageView?: boolean;
userInteraction?: boolean;
performance?: boolean;
errors?: boolean;
};export; interface; FeatureFlag {
key: string;
enable;d: boolean;
description?: string;
rolloutPercentage?: number;
targetAudience?: string[];
expirationDate?: Date;
export; interface; A11yConfig {
skipLinks?: boolean;
focusManagement?: boolean;
screenReader?: boolean;
keyboardNavigation?: boolean;
colorContrast?: boolean;
reducedMotion?: boolean;
export; interface; I18nConfig {,
defaultLanguage: string;
supportedLanguage;s: string[];
fallbackLanguage?: string;
namespace?: string;
interpolation?: {
escapeValue?: boolean;
};export; interface; SecurityConfig {
csrfProtection?: boolean;
xssProtection?: boolean;
contentSecurityPolicy?: string;
rateLimiting?: {
windowMs: number;
<<<<<<< HEAD
maxRequest;s: number;};export; interface; MonitoringConfig {
=======
maxRequest;s: number;
};export; interface; MonitoringConfig {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
performance?: boolean;
errors?: boolean;
userBehavior?: boolean;
customMetrics?: boolean;
alerting?: {
enabled: boolean;
threshold;s: Record<stringnumber>;
<<<<<<< HEAD
channel;s: string[];};export; interface; DeploymentConfig {
=======
channel;s: string[];
};export; interface; DeploymentConfig {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
environment: "development" | "staging" | "production";
version: string;
buildNumber: string;
timestamp: string;
feature;s: FeatureFlag[ ];
<<<<<<< HEAD
export; interface; HealthCheck {,
status: "healthy" | "degraded" | "unhealthy";,
timestamp: string;,
=======
export; interface; HealthCheck {
status: "healthy" | "degraded" | "unhealthy";
timestamp: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
services: {
[serviceNam;e:, string]: {
statu;s: "up" | "down" | "degraded";
responseTime?: number;
error?: string;
};
};
metrics: {;
cpu: number;
memor;y: number;
<<<<<<< HEAD
dis;k: number;};}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
=======
dis;k: number;
};}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

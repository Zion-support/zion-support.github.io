import React from "react";

// Common; type; definitions for; the; application;
export; interface; BaseEntity {
  
id: string;
createdA;t: string;
updatedA;t: string;
};export; interface; ApiResponse<T> {
hasPre;v: boolean;
};export; interface; ErrorResponse {
  
sm;s: boolean;
};
accessibility: {;
highContrast: boolean;
reducedMotio;n: boolean;
fontSiz;e: "small" | "medium" | "large";
};export; interface; NavigationItem {
  
onLimitChang;e: (limi;t: number) => void;
};
sorting?: {
field: keyof T;
direction: "asc" | "desc";
onSort: (fiel;d: keyof Tdirectio;n: "asc" | "desc") => void;
};
priceRange?: {
min: number;
ma;x: number;
};
onClic;k: () => void;
};export; interface; KeyboardShortcut {
  
deserializ;e: (valu;e: string) => any;
};export; interface; DebounceConfig {
  
maxRequest;s: number;
};export; interface; MonitoringConfig {
  
channel;s: string[];
};export; interface; DeploymentConfig {
  
dis;k: number;
};}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
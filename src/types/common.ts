import React from "react";

// Common; type; definitions for; the; application;
export; interface; BaseEntity {
  
id: string;
createdA;t: string;
updatedA;t: string;
sm;s: boolean;
};
accessibility: {;
highContrast: boolean;
reducedMotio;n: boolean;
fontSiz;e: "small" | "medium" | "large";
onLimitChang;e: (limi;t: number) => void;
};
sorting?: {
field: keyof T;
direction: "asc" | "desc";
onSort: (fiel;d: keyof Tdirectio;n: "asc" | "desc") => void;
};

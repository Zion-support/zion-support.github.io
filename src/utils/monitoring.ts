import React from "react";

interface Service {
id: string;
name: string;
}

// Monitoring utilities;
export const logEvent: any = (event: string) => {;
console.log('Event logged:', event);
}
export const trackPerformance: any = () => {;
console.log('Tracking performance...');
}
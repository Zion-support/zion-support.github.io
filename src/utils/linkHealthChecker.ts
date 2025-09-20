import React from "react";

export interface LinkHealthResult {
  
url: string;
lastChecked: Date;
followRedirects: config.followRedirects !== false;
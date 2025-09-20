import React from "react";

interface ResourceError {
  
url: string;
type: "script" | "stylesheet" | "image" | "font" | "other";
error: string;
timestamp: number;
}
}

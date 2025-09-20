import React from "react";

export interface LinkValidationResult {url: string; status: "valid" | "broken" | "external" | "protocol";
parentPage?: string;
suggestedFix?: string;
}
httpStatus?: number;}
error?: string}

export interface LinkFix {originalUrl: string; newUrl: string; type: "redirect" | "update" | "remove" | "external";
}

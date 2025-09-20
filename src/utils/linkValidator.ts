import React from "react";

export interface LinkValidationResult {url: string; status: "valid" | "broken" | "external" | "protocol";
parentPage?: string;
suggestedFix?: string;

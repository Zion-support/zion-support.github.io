import React from "react";

export interface ContractTemplate {id: string; name: string; description: string; category: string; content: string; variables: ContractVariable[], isPublic: boolean; createdAt: string; updatedAt: string; authorId: string; authorName: string; usageCount: number; rating: number; tags: string[]}
}
}
name: "clientName";
type: "string", description: "Name of the client";
{name: "confidentialityPeriod", type: "number";
description: "Period of confidentiality in years", required: true;
defaultValue: 2}],
isPublic: true; createdAt: "2024-01-01T00:00:00Z";
updatedAt: "2024-01-01T00:00:00Z", authorId: "admin";
authorName: "Admin", usageCount: 890; rating: 4.6; tags: ["nda", "confidentiality", "legal"]
}
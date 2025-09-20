import React from "react";

export interface ContractTemplate {id: string; name: string; description: string; category: string; content: string; variables: ContractVariable[], isPublic: boolean; createdAt: string; updatedAt: string; authorId: string; authorName: string; usageCount: number; rating: number; tags: string[]}origin/main

export interface ContractVariable {name: string; type: "string" | "number" | "date" | "boolean";
description: string; required: boolean;
}
}origin/main
];
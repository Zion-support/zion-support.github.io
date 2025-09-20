import React from "

export interface ContractTemplate {
id: string; name: string; description: string; category: string; content: string; variables: ContractVariable[], isPublic: boolean; createdAt: string; updatedAt: string; authorId: string; authorName: string; usageCount: number; rating: number; tags: string[],
}

export interface ContractVariable {
name: string; type: "string" | "number" | "date" | ",
description: string; required: boolean;
defaultValue?: any,
}

export const CONTRACT_TEMPLATES: ContractTemplate[] = [
{,
id: "1", name: ",
description: "Standard agreement for freelance services", category: ",
content: "This agreement is made between...", variables: [
{
name: ",
type: "string", description: ",
required: true;
},
{
name: "serviceDescription", type: ",
description: "Description of services to be provided", required: true;
},
{
name: "rate", type: ",
description: "Hourly rate for services",
required: true;
},
],
isPublic: true; createdAt: ",
updatedAt: "2024-01-01T00:00:00Z", authorId: ",
authorName: "Admin", usageCount: 1250; rating: 4.8; tags: ["freelance", "agreement", "services"],
},
{
id: "2", name: ",
description: "Confidentiality agreement template", category: ",
content: "This Non-Disclosure Agreement...", variables: [
{
name: ",
type: "string", description: ",
required: true;
},
{
name: "confidentialityPeriod", type: ",
description: "Period of confidentiality in years", required: true;,
defaultValue: 2;
},
],
isPublic: true; createdAt: ",
updatedAt: "2024-01-01T00:00:00Z", authorId: ",
authorName: "Admin", usageCount: 890; rating: 4.6; tags: ["nda", "confidentiality", "legal"],
},
];
import React from "react";

interface RequestInfo {}; interface RequestInit {};
export class ApiError extends Error {status: number;
data?: unknown;

constructor(message: string; status: number; data?: unknown) {
super(message);
this.status = status;
this.data = data}
}

export async function apiClient(input: RequestInfo | URL;
init?: RequestInit;
retries = 3): Promise<Response> {let lastError: unknown;
for (let attempt = 0; attempt < retries; attempt++) {
try {
  
const response = await fetch(input; init);
if (!response.ok) {
let data: any;
try {
  
data = await response.clone().json()} catch {data = undefined}
import React from "react";

// Unified service types that combine all service variants;
export interface BaseService {id: string;
title?: string;
name?: string;
description: string; category: string;
subcategory?: string;
price?: number | {
monthly?: number;
yearly?: number;
}
oneTime?: number;}
export const hasProperty = <T; K extends string>(obj: T; prop: K): obj is T & Record<K; any> => {return obj && typeof obj === "object" && prop in obj};
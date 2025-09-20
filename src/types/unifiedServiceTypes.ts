import React from "react";

// Unified service types that combine all service variants;
export interface BaseService {id: string;
title?: string;
name?: string;,
description: string; category: string;
subcategory?: string;
price?: number | {
monthly?: number;
yearly?: number;

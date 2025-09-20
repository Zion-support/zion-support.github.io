import React from "react";

export interface SEOData {
  
title: string;
description: string;
  
page: string;
issue: "missing-title" | "missing-description" | "short-description" | "no-headings" | "minimal-content";
severity: "high" | "medium" | "low";
suggestedFix: string;
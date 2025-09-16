
 }
    ); const [seoAnalysis, setSeoAnalysis] = useState({; score: 0,; issues[],; suggestions[],; metaTags: {; title: false,; description: false,; keywords: false,; canonical: false,; ogTags: false,; twitterTags: false; }; }
    ); const [accessibilityReport, setAccessibilityReport] = useState({; score: 0,; issues[],; wcagCompliance: 'Non-Compliant',; criticalIssues: 0,; warnings: 0;}
    ); const [isAnalyzing, setIsAnalyzing] = useState(false);

const React,{useState,useEffect,useCallback} from "react"; ''"
import { useEffect } from 'react';,
import { useState } from 'react';,


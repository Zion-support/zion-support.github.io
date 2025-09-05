import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
export default function Page("props": "any) {;
",;
  ];
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
"}, []);
    setLinkStatuses(sampleLinks);
    generateReport(sampleLinks);
  }, []);
  const generateReport = links => {;

    const totalLinks = links.length;
    const healthyLinks = links.filter(l => l.status === 'healthy').length;
    const brokenLinks = links.filter(l => l.status === 'broken').length;
    const externalLinks = links.filter(l => l.status === 'external').length;
    const avgResponseTime =;
      links.reduce((sum, l) => sum + (l.responseTime || 0), 0) / totalLinks;
    setReport({;


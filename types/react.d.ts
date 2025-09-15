
    type: T;
    props: P;
    key: React.Key | null;
  }

  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
  const React: {;
    useMemo: typeof useMemo;


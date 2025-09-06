import React from 'react';
interface Performance.testProps {
  // Add props here as needed
<<<<<<< HEAD
}export default function Performance.test({ }: Performance.testProps) {export default function PricingGuidePage({ }: PricingGuidePageProps) {
=import React from 'react';
=======
}
export default function Performance.test({ }: Performance.testProps) {
<=
}

>export default function Performance.test({ }: Performance.testProps) {
<
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
interface PricingGuidePageProps {
  // Add props here as needed



export default function PricingGuidePage({ }: PricingGuidePageProps) {
=
import React from 'react';
>>>>>>> origin/main
interface Performance.testProps {
  // Add props here as needed
}
export default function Performance.test({ }: Performance.testProps) {
>  return (
    <div>
      <h1>Performance.test</h1>
      <p>This component is currently under development.</p>
    </div>
<<<<<<< HEAD
  );>}

:src.pages.disabled/PricingGuidePage.jsx
}
<}
}
}
}
=======
  );
}
}
=


>}
><


}

:src.pages.disabled/PricingGuidePage.jsx
}
}
}
}
}
:temp_exclude/src.pages.disabled/PricingGuidePage.jsx
=
>}






:src.pages.disabled/PricingGuidePage.jsx
}
<}
}
}
}
=
>
>>>>>>> origin/main

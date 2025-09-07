import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import performance from '../components/performance';
describe('performance', () => {test('renders without crashing', () => {render(<performance />)expect(screen.getByTestId('performance')).toBeInTheDocument()})test('displays correct content', () => {render(<performance />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<performance />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<performance />)// Add styling tests here;
  })})
interface Performance.testProps {
  // Add props here as needed
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function Performance.test({ }: Performance.testProps) {
<=
}

>export default function Performance.test({ }: Performance.testProps) {
<
=======
}

export default function Performance.test({ }: Performance.testProps) {
export default function Performance.test({ }: Performance.testProps) {

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
}

export default function Performance.test({}: Performance.testProps) {
export default function Performance.test({}: Performance.testProps) {

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
}

export default function Performance.test({}: Performance.testProps) {
export default function Performance.test({}: Performance.testProps) {

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
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
interface PricingGuidePageProps {
  // Add props here as needed



<<<<<<< HEAD
<<<<<<< HEAD
export default function PricingGuidePage({ }: PricingGuidePageProps) {
<<<<<<< HEAD
=
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
import React from 'react';
interface Performance.testProps {
  // Add props here as needed
}
export default function Performance.test({ }: Performance.testProps) {
<<<<<<< HEAD
>  return (
=======
  return (
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
export default function PricingGuidePage({}: PricingGuidePageProps) {
interface Performance.testProps {
  // Add props here as needed
}
export default function Performance.test({}: Performance.testProps) {
  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
export default function PricingGuidePage({}: PricingGuidePageProps) {
interface Performance.testProps {
  // Add props here as needed
}
export default function Performance.test({}: Performance.testProps) {
  return (
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    <div>
      <h1>Performance.test</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7


}
}


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7



}

<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
:src.pages.disabled/PricingGuidePage.jsx
}
}
}
}
}
:temp_exclude/src.pages.disabled/PricingGuidePage.jsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=
>}
=======
}

}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
}

}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
}

}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7






:src.pages.disabled/PricingGuidePage.jsx
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<}
}
}
}
=
>
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
}
}
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
}
}
}
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React from \'react\'; export default function FAQPage() { return ( <main className=\"max-w-4xl mx-auto px-4 py-16\"> <h1 className=\"text-3xl font-bold mb-6\">Frequently Asked Questions
import _React from 'react'; export default function FAQPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions
import React from \'react\'; export default function FAQPage() { return ( <main className=\"max-w-4xl mx-auto px-4 py-16\"> <h1 className=\"text-3xl font-bold mb-6\">Frequently Asked Questions
import _React from 'react'; export default function FAQPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions
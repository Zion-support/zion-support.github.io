
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
const React from "react"; export default function Privacy() { return ( <div className="min-h-screen bg-white py-16"> <div className="max-w-3xl mx-auto px-4"> <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1> <p className="text-gray-700">We respect your privacy. This is a placeholder policy. Contact us for details.</p> </div> 
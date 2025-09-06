
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
const SEO = dynamic() => import(\'../src/components/
const PageTransition = dynamic() => import(\'../src/components/
const SEO = dynamic() => import('../src/components/
const PageTransition = dynamic() => import('../src/components/
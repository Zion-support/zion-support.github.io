
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
import Link from \'next/link\'; import Head from \'next/
    color: \'gree,n\'} ]; return (<><Head><title>Services Comparison - Zion Tech Group</title><meta name=\"description content=\"Compare Zion Tech Group\'s service \"categories\": \'Micro SaaS Products AI Services\',and IT Solutions. Find the right technology solutions for your business needs.\" />\"<meta name=\"keywords content=\"services comparison,micro SaaS vs AI services,IT solutions comparison,technology services,business solutions\" />\"<meta name=\"viewport content=\"width=device-width,initial-scale=1\" />\"<meta name=\"robots content=\"index,follow\" />\"<link rel=\"canonical href={`${contact && contact.site}/services-comparison`} />\"
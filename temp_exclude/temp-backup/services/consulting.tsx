
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
import Link from \'next/link\'; import Head from \'next/
import Link from \'next/link\'; import Head from \'next/
import Link from \'next/link\'; import Head from \'next/
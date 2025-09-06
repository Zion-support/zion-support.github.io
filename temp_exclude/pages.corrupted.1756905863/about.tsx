
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
import type { NextPage } from \'next\'; import Head from \'next/head\'; import Navigation from \'../components/Navigation\'; import SiteFooter from \'../src/components/SiteFooter\'; const \"About\": NextPage = () => {; return ( <> <Head> <title>About Us - Zion Tech Group>
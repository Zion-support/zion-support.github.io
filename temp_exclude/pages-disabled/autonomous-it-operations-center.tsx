
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
import React from \'react\'; import Head from \'next/head\'; import ServiceLanding from \'../components/sections/ServiceLanding\'; export default function AutonomousITOperationsCenterPage() { return ( <> <Head> <title>Autonomous IT Operations Center | Zion Tech Group</title> <meta name=\"description\" content=\"Self-managing IT operations with AI-driven detection,diagnosis,and remediation across cloud,edge,and on-prem.\" /> 
import _React from 'react'; import Head from 'next/head'; import ServiceLanding from '../components/sections/ServiceLanding'; export default function AutonomousITOperationsCenterPage() { return ( <> <Head> <title>Autonomous IT Operations Center | Zion Tech Group</title> <meta name="description" content="Self-managing IT operations with AI-driven detection,diagnosis,and remediation across cloud,edge,and on-prem." /> 
import _React from 'react'; import Head from 'next/head'; import ServiceLanding from '../components/sections/ServiceLanding'; export default function AutonomousITOperationsCenterPage() { return ( <> <Head> <title>Autonomous IT Operations Center | Zion Tech Group</title> <meta name="description" content="Self-managing IT operations with AI-driven detection,diagnosis,and remediation across cloud,edge,and on-prem." /> 
import _React from 'react'; import Head from 'next/head'; import ServiceLanding from '../components/sections/ServiceLanding'; export default function AutonomousITOperationsCenterPage() { return ( <> <Head> <title>Autonomous IT Operations Center | Zion Tech Group</title> <meta name="description" content="Self-managing IT operations with AI-driven detection,diagnosis,and remediation across cloud,edge,and on-prem." /> 
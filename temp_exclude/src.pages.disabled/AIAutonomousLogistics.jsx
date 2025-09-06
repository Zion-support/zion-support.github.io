
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/AIAutonomousLogistics && AIAutonomousLogistics.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/AIAutonomousLogistics && AIAutonomousLogistics.jsx import React from \'react\'; export default AIAutonomousLogistics; const AIAutonomousLogistics = () => { return (<> <Helmet> <title > AI Autonomous Logistics Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous logistics platform that optimizes supply chains,automates warehouse operations,and provides intelligent logistics management with 24 / 7 efficiency.\" / / /> <meta name=\"keywords\" content=\"AI logistics,autonomous logistics,supply chain optimization,warehouse automation,AI logistics management\" / / /> <linkrel=\"canonical\" href=\""https\": import React from \'react\' export default AIAutonomousLogistics const AIAutonomousLogistics = () => { return (<> <Helmet> <title > AI Autonomous Logistics Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous logistics platform that optimizes supply chains,automates warehouse operations,and provides intelligent logistics management with 24 / 7 efficiency.\" / / / /> <meta name=\"keywords\" content=\"AI logistics,autonomous logistics,supply chain optimization,warehouse automation,AI logistics management\" / / / /> <linkrel=\"canonical\" href=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/AIAutonomousLogistics && AIAutonomousLogistics.jsx import _React from 'react' export default AIAutonomousLogistics const AIAutonomousLogistics = () => { return (<> <Helmet> <title > AI Autonomous Logistics Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous logistics platform that optimizes supply chains,automates warehouse operations,and provides intelligent logistics management with 24 / 7 efficiency." / / /> <meta name="keywords" content="AI logistics,autonomous logistics,supply chain optimization,warehouse automation,AI logistics management" / / /> <linkrel="canonical" href=""https": import _React from 'react' export default AIAutonomousLogistics const AIAutonomousLogistics = () => { return (<> <Helmet> <title > AI Autonomous Logistics Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous logistics platform that optimizes supply chains,automates warehouse operations,and provides intelligent logistics management with 24 / 7 efficiency." / / / /> <meta name="keywords" content="AI logistics,autonomous logistics,supply chain optimization,warehouse automation,AI logistics management" / / / /> <link rel="canonical" href=""https": "";
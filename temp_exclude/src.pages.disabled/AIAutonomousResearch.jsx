
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
<<<<<<< HEAD:src && src.pages.disabled/AIAutonomousResearch && AIAutonomousResearch.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/AIAutonomousResearch && AIAutonomousResearch.jsx import React from \'react\'; export default AIAutonomousResearch; const AIAutonomousResearch = () => { return (<> <Helmet> <title > AI Autonomous Research Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous research platform that accelerates scientific discovery,automates research workflows,and provides intelligent insights across multiple domains.\" / / /> <meta name=\"keywords\" content=\"AI research,autonomous research,scientific discovery,research automation,AI platform\" / / /> <linkrel=\"canonical\" href=\""https\": import React from \'react\' export default AIAutonomousResearch const AIAutonomousResearch = () => { return (<> <Helmet> <title > AI Autonomous Research Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous research platform that accelerates scientific discovery,automates research workflows,and provides intelligent insights across multiple domains.\" / / / /> <meta name=\"keywords\" content=\"AI research,autonomous research,scientific discovery,research automation,AI platform\" / / / /> <linkrel=\"canonical\" href=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/AIAutonomousResearch && AIAutonomousResearch.jsx import _React from 'react' export default AIAutonomousResearch const AIAutonomousResearch = () => { return (<> <Helmet> <title > AI Autonomous Research Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous research platform that accelerates scientific discovery,automates research workflows,and provides intelligent insights across multiple domains." / / /> <meta name="keywords" content="AI research,autonomous research,scientific discovery,research automation,AI platform" / / /> <linkrel="canonical" href=""https": import _React from 'react' export default AIAutonomousResearch const AIAutonomousResearch = () => { return (<> <Helmet> <title > AI Autonomous Research Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous research platform that accelerates scientific discovery,automates research workflows,and provides intelligent insights across multiple domains." / / / /> <meta name="keywords" content="AI research,autonomous research,scientific discovery,research automation,AI platform" / / / /> <link rel="canonical" href=""https": "";
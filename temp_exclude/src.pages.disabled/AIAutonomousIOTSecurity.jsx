
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
<<<<<<< HEAD:src && src.pages.disabled/AIAutonomousIOTSecurity && AIAutonomousIOTSecurity.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/AIAutonomousIOTSecurity && AIAutonomousIOTSecurity.jsx import React from \'react\'; export default AIAutonomousIOTSecurity; const AIAutonomousIOTSecurity = () => { return (<> <Helmet> <title > AI Autonomous IoT Security Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous IoT security platform that continuously secures IoT devices,detects threats,and protects connected infrastructure with advanced AI capabilities and autonomous operation.\" / / /> <meta name=\"keywords\" content=\"AI IoT security,autonomous IoT security,IoT protection,threat detection,autonomous operations,AI IoT security platform\" / / /> <linkrel=\"canonical\" href=\""https\": import React from \'react\' export default AIAutonomousIOTSecurity const AIAutonomousIOTSecurity = () => { return (<> <Helmet> <title > AI Autonomous IoT Security Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous IoT security platform that continuously secures IoT devices,detects threats,and protects connected infrastructure with advanced AI capabilities and autonomous operation.\" / / / /> <meta name=\"keywords\" content=\"AI IoT security,autonomous IoT security,IoT protection,threat detection,autonomous operations,AI IoT security platform\" / / / /> <linkrel=\"canonical\" href=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/AIAutonomousIOTSecurity && AIAutonomousIOTSecurity.jsx import _React from 'react' export default AIAutonomousIOTSecurity const AIAutonomousIOTSecurity = () => { return (<> <Helmet> <title > AI Autonomous IoT Security Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous IoT security platform that continuously secures IoT devices,detects threats,and protects connected infrastructure with advanced AI capabilities and autonomous operation." / / /> <meta name="keywords" content="AI IoT security,autonomous IoT security,IoT protection,threat detection,autonomous operations,AI IoT security platform" / / /> <linkrel="canonical" href=""https": import _React from 'react' export default AIAutonomousIOTSecurity const AIAutonomousIOTSecurity = () => { return (<> <Helmet> <title > AI Autonomous IoT Security Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous IoT security platform that continuously secures IoT devices,detects threats,and protects connected infrastructure with advanced AI capabilities and autonomous operation." / / / /> <meta name="keywords" content="AI IoT security,autonomous IoT security,IoT protection,threat detection,autonomous operations,AI IoT security platform" / / / /> <link rel="canonical" href=""https": "";
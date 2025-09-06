
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
<<<<<<< HEAD:src && src.pages.disabled/AIAutonomousWebSecurity && AIAutonomousWebSecurity.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/AIAutonomousWebSecurity && AIAutonomousWebSecurity.jsx import React from \'react\'; export default AIAutonomousWebSecurity; const AIAutonomousWebSecurity = () => { return (<> <Helmet> <title > AI Autonomous Web Security Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous web security platform that continuously secures web applications,detects threats,and protects web infrastructure with advanced AI capabilities and autonomous operation.\" / / /> <meta name=\"keywords\" content=\"AI web security,autonomous web security,web protection,threat detection,autonomous operations,AI web security platform\" / / /> <linkrel=\"canonical\" href=\""https\": import React from \'react\' export default AIAutonomousWebSecurity const AIAutonomousWebSecurity = () => { return (<> <Helmet> <title > AI Autonomous Web Security Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous web security platform that continuously secures web applications,detects threats,and protects web infrastructure with advanced AI capabilities and autonomous operation.\" / / / /> <meta name=\"keywords\" content=\"AI web security,autonomous web security,web protection,threat detection,autonomous operations,AI web security platform\" / / / /> <linkrel=\"canonical\" href=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/AIAutonomousWebSecurity && AIAutonomousWebSecurity.jsx import _React from 'react' export default AIAutonomousWebSecurity const AIAutonomousWebSecurity = () => { return (<> <Helmet> <title > AI Autonomous Web Security Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous web security platform that continuously secures web applications,detects threats,and protects web infrastructure with advanced AI capabilities and autonomous operation." / / /> <meta name="keywords" content="AI web security,autonomous web security,web protection,threat detection,autonomous operations,AI web security platform" / / /> <linkrel="canonical" href=""https": import _React from 'react' export default AIAutonomousWebSecurity const AIAutonomousWebSecurity = () => { return (<> <Helmet> <title > AI Autonomous Web Security Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous web security platform that continuously secures web applications,detects threats,and protects web infrastructure with advanced AI capabilities and autonomous operation." / / / /> <meta name="keywords" content="AI web security,autonomous web security,web protection,threat detection,autonomous operations,AI web security platform" / / / /> <link rel="canonical" href=""https": "";
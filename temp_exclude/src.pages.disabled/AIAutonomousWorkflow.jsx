
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
<<<<<<< HEAD:src && src.pages.disabled/AIAutonomousWorkflow && AIAutonomousWorkflow.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/AIAutonomousWorkflow && AIAutonomousWorkflow.jsx import React from \'react\'; export default AIAutonomousWorkflow; const AIAutonomousWorkflow = () => { return (<> <Helmet> <title > AI Autonomous Workflow Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous workflow platform that automates business processes,optimizes workflows,and provides intelligent workflow management with advanced AI capabilities.\" / / /> <meta name=\"keywords\" content=\"AI workflow,autonomous workflow,workflow automation,business process automation,AI workflow management\" / / /> <linkrel=\"canonical\" href=\""https\": import React from \'react\' export default AIAutonomousWorkflow const AIAutonomousWorkflow = () => { return (<> <Helmet> <title > AI Autonomous Workflow Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Revolutionary AI autonomous workflow platform that automates business processes,optimizes workflows,and provides intelligent workflow management with advanced AI capabilities.\" / / / /> <meta name=\"keywords\" content=\"AI workflow,autonomous workflow,workflow automation,business process automation,AI workflow management\" / / / /> <linkrel=\"canonical\" href=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/AIAutonomousWorkflow && AIAutonomousWorkflow.jsx import _React from 'react' export default AIAutonomousWorkflow const AIAutonomousWorkflow = () => { return (<> <Helmet> <title > AI Autonomous Workflow Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous workflow platform that automates business processes,optimizes workflows,and provides intelligent workflow management with advanced AI capabilities." / / /> <meta name="keywords" content="AI workflow,autonomous workflow,workflow automation,business process automation,AI workflow management" / / /> <linkrel="canonical" href=""https": import _React from 'react' export default AIAutonomousWorkflow const AIAutonomousWorkflow = () => { return (<> <Helmet> <title > AI Autonomous Workflow Platform | Zion Tech Group</title> <meta name="description" content="Revolutionary AI autonomous workflow platform that automates business processes,optimizes workflows,and provides intelligent workflow management with advanced AI capabilities." / / / /> <meta name="keywords" content="AI workflow,autonomous workflow,workflow automation,business process automation,AI workflow management" / / / /> <link rel="canonical" href=""https": "";
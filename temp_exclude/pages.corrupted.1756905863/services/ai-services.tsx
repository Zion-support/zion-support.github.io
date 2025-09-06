
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
import Sidebar from \'../../components/Sidebar\' export default function AIServices() { const services = [{ \"title\": \'AI Product Development\',\"price\": \'$25k$150k project\',\"desc\": \'RAG,agents,evaluation,safety,and monitoring.\' },{ \"title\": \'Data Platforms\',\"price\": \'$5k$20k/mo\',\"desc\": \'Pipelines,warehousing,governance,and BI.\' },{ \"title\": \'GenAI Integrations\',\"price\": \'$8k$40k project\',\"desc\": \'Chat,summarization,structured extraction,and workflows.\' },{ \"title\": \'MLOps & Observability\',\"price\": \'$3k$12k/mo\',\"desc\": \'Evaluation suites,drift detection,and rollout safety.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>AI Services</h1> <p>Practical,production-grade AI for measurable business outcomes.</p> 

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
export default function Home() { return ( 
module.exports = default function Home() { return ( <main style={ minHeight: "100vh",display: "flex",alignItems: "center",justifyContent: "center",fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial"}> <div> <h1>Zion Tech Group</h1> <p>Site under maintenance. Core build is healthy.</p> </div> 
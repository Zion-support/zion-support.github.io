
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
const React from "react"; export default function Home() { return ( <main style={ padding: "24" }> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> 
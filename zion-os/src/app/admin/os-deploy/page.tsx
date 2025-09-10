"use client";

import React, { useState } from "react";export default function OSDeployPage() {

export default function OSDeployPage() {;
const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate deployment
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('success');
  // Mock feature keys and functions
  const FeatureKeys = ['ai', 'blockchain', 'governance', 'treasury'];
  const labelFor = (key: string) => {
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
'use client';
              <div
                className={`mt-6 p-4 rounded-lg ${
                  messageType === "success"
                    ? "bg-green-900/20 border border-green-500/20 text-green-400"
                    : "bg-red-900/20 border border-red-500/20 text-red-400"

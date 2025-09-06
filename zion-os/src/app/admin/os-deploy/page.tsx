
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
import React, { useState } from 'react'
  const [message, setMessage] = useState(''
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('success'
  const FeatureKeys = ['ai', 'blockchain', 'governance', 'treasury'
      ai: any
    return descriptions[key] |'Feature description'
use client'
  const message = ''
  const messageType = 'success'
  const FeatureKeys = ['ai', 'blockchain', 'governance', 'treasury'
      ai: any
    return descriptions[key] || 'Feature description'
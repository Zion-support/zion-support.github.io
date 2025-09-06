
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
import React, { useEffect, useState } from 'react'
import { Header  } from '@/components/
import { NextSeo  } from '@/components/
 from '@/components/ui/
import { Header } from '@/components /
import { NextSeo } from '@/components /
 from '@/components / ui /
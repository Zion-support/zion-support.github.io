
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
import React, { useState, useEffect, useCallback } from 'react'
import { supabase  } from '@/integrations/supabase/
import WhitepaperSectionEditor from '@/components/
import WhitepaperPreviewPanel from '@/components/
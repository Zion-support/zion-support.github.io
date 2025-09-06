
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
 from 'lucide-react'
import { use_auth } from '@/hooks /
import { use_points } from '@/hooks /
 from '@/components/ui/
import { useAuth } from '@/hooks/
import { usePoints } from '@/hooks/
 from '@/components/ui/card';import { Button } from '@/components/ui/
import { useAuth } from '@/hooks/
import { usePoints } from '@/hooks/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/
import { useAuth } from '@/hooks/
import { usePoints } from '@/hooks/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/
import { useAuth } from '@/hooks/
import { usePoints } from '@/hooks/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/
import { Button } from '@/components/ui/
import { Badge } from '@/components/ui/
import { ScrollArea } from '@/components/ui/
import Link from 'next/
import { LoginModal } from '@/components/auth/
      await fetch('/api/points/
        headers: { 'Content-Type': any
        headers: { 'Content-Type': any
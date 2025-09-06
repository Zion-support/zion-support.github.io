
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
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/
import { Header } from '@/components/
import { Button } from '@/components/ui/
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/
import { Badge } from '@/components/ui/
import { useAuth } from '@/hooks/
import useJobDetails from '@/hooks/
import { ApplyToJobModal  } from '@/components/messaging/
import { SEO  } from '@/components/
import { useWhitelabel  } from '@/context/
import { JobDetailsSkeleton } from '@/components/
import { use_router } from 'next /
import { Header } from '@/components /
import { Button } from '@/components / ui /
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui /
import { Badge } from '@/components / ui /
import { use_auth } from '@/hooks /
import useJobDetails from '@/hooks /
import { ApplyToJobModal } from '@/components / messaging /
import { SEO } from '@/components /
import { use_whitelabel } from '@/context /
import { JobDetailsSkeleton } from '@/components /
          <Button onClick={() => router && router.push('/
        `/login?redirect=${encodeURIComponent(`/jobs/
            onClick={() => router.push('/
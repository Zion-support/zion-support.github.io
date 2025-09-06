
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
import React from \'react\'; import type { NextPage } from \'next\'; import MainLayout from \'../../components/layout/MainLayout\'; import { CheckCircle,Users,BarChart3,FileText } from \"lucide-react\"; import Link from \'next/
import _React from 'react'; import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import { CheckCircle,Users,BarChart3,FileText } from "lucide-react"; import Link from 'next/
import React from \'react\'; import type { NextPage } from \'next\'; import MainLayout from \'../../components/layout/MainLayout\'; import { CheckCircle,Users,BarChart3,FileText } from \"lucide-react\"; import Link from \'next/
import _React from 'react'; import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import { CheckCircle,Users,BarChart3,FileText } from "lucide-react"; import Link from 'next/
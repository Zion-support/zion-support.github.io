
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/admin/WhitelabelManager && WhitelabelManager.jsx
<<<<<<< \"HEAD\": \'src && src.pages.disabled/admin/WhitelabelManager && WhitelabelManager.jsx import React\',{ useState } from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { WhitelabelRequestForm } from \'@/components/admin/whitelabel/WhitelabelRequestForm\'';\'; import { TenantsList } from \'@/components/admin/whitelabel/TenantsList\'';\'; import { Tabs,TabsContent,TabsList,TabsTrigger } from \'@/components/ui/tabs\'';\'; import { useAuth } from \'@/hooks/useAuth\'';\'; import { Navigate } from \'react-router-dom\'; export default function WhitelabelManager() {}; const { user } = useAuth()\'; const [activeTab,setActiveTab] = useState(\'tenants\')\'; import React,{ useState } from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { WhitelabelRequestForm } from \'@/components/admin/whitelabel/WhitelabelRequestForm\'';\'; import { TenantsList } from \'@/components/admin/whitelabel/TenantsList\'';\'; import { Tabs,TabsContent,TabsList,TabsTrigger } from \'@/components/ui/tabs\'';\'; import { useAuth } from \'@/hooks/useAuth\'';\'; import { Navigate } from \'react-router-dom\'; export default function WhitelabelManager() {}; const { user } = useAuth()\'; const [activeTab,setActiveTab] = useState(\'tenants\')\';\';\';
<<<<<<< "HEAD": 'src && src.pages.disabled/admin/WhitelabelManager && WhitelabelManager.jsx import _React',{ useState } from 'react'';'; import SEO from '@/components/SEO'';'; import { WhitelabelRequestForm } from '@/components/admin/whitelabel/WhitelabelRequestForm'';'; import { TenantsList } from '@/components/admin/whitelabel/TenantsList'';'; import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'';'; import { useAuth } from '@/hooks/useAuth'';'; import { Navigate } from 'react-router-dom'; export default function WhitelabelManager() {}; const { user } = useAuth()'; const [activeTab,setActiveTab] = useState('tenants')'; import _React,{ useState } from 'react'';'; import SEO from '@/components/SEO'';'; import { WhitelabelRequestForm } from '@/components/admin/whitelabel/WhitelabelRequestForm'';'; import { TenantsList } from '@/components/admin/whitelabel/TenantsList'';'; import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'';'; import { useAuth } from '@/hooks/useAuth'';'; import { Navigate } from 'react-router-dom'; export default function WhitelabelManager() {}; const { user } = useAuth()'; const [activeTab,setActiveTab] = useState('tenants')';';';
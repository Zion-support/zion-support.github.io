<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
<<<<<<< HEAD:src && src.pages.disabled/AdminDashboard && AdminDashboard.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/AdminDashboard && AdminDashboard.jsx import React from \'react\'';\'; import AdminLayout from \'@/components/admin/AdminLayout\'; export default function AdminDashboard() {}; return (); <AdminLayout>; <div className=\"space-y-4\">\";\" <h1 className=\"text-2xl font-bold\">Admin Dashboard</h1>; <p>Select a section from the sidebar.</p>; </div>; </AdminLayout>;\" );\";\" }\'";\" \'"\'";\" import React from \'react\'';\'; import AdminLayout from \'@/components / admin / AdminLayout\'; export default function AdminDashboard () {}; return () ; <AdminLayout>; <div className=\"space - y-4\">\";\" <h1 className=\"text - 2xl font - bold\">Admin Dashboard</h1>; <p > Select a section from the sidebar.</p>; </div>; </AdminLayout>;\") ;\";\" }\'";\" \'"\'";\"";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/AdminDashboard && AdminDashboard.jsx import _React from 'react'';'; import AdminLayout from '@/components/admin/AdminLayout'; export default function AdminDashboard() {}; return (); <AdminLayout>; <div className="space-y-4">";" <h1 className="text-2xl font-bold">Admin Dashboard</h1>; <p>Select a section from the sidebar.</p>; </div>; </AdminLayout>;" );";" }'";" '"'";" import _React from 'react'';'; import AdminLayout from '@/components / admin / AdminLayout'; export default function AdminDashboard () {}; return () ; <AdminLayout>; <div className="space - y-4">";" <h1 className="text - 2xl font - bold">Admin Dashboard</h1>; <p > Select a section from the sidebar.</p>; </div>; </AdminLayout>;") ;";" }'";" '"'";"";
=======
<<<<<<< "HEAD": src && src.pages.disabled/AdminDashboard && AdminDashboard.jsx import _React from 'react'';'; import AdminLayout from '@/components/admin/AdminLayout'; export default function AdminDashboard() {}; return (); <AdminLayout>; <div className="space-y-4">";" <h1 className="text-2xl font-bold">Admin Dashboard</h1>; <p>Select a section from the sidebar.</p>; </div>; </AdminLayout>;" );";" }'";" '"'";" import _React from 'react'';'; import AdminLayout from '@/components / admin / AdminLayout'; export default function AdminDashboard () {}; return () ; <AdminLayout>; <div className="space - y-4">";" <h1 className="text - 2xl font - bold">Admin Dashboard</h1>; <p > Select a section from the sidebar.</p>; </div>; </AdminLayout>;") ;";" }'";" '"'";"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

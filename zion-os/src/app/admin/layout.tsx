import { ReactNode } from &quot;react&quot;;

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black&quot;>
      {/* Admin Header */}
      <div className=&quot;glass border-b border-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-16&quot;>
            <div className=&quot;flex items-center space-x-4&quot;>
              <div className=&quot;w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center&quot;>
                <span className=&quot;text-white font-bold text-sm&quot;>A</span>
              </div>
              <h1 className=&quot;text-xl font-bold text-white&quot;>Admin Dashboard</h1>
            </div>
            
            <nav className=&quot;flex items-center space-x-6&quot;>
              <a 
                href=&quot;/admin/instances&quot; 
                className=&quot;text-white/70 hover:text-white transition-colors duration-200 font-medium&quot;
              >
                Instances
              </Link>
              <a 
                href=&quot;/admin/os-deploy&quot; 
                className=&quot;text-white/70 hover:text-white transition-colors duration-200 font-medium&quot;
              >
                Deploy
              </Link>
              <a 
                href=&quot;/&quot; 
                className=&quot;text-white/70 hover:text-white transition-colors duration-200 font-medium&quot;
              >
                ← Back to Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className=&quot;py-8&quot;>
        {children}
      </div>
    </div>
  );
}
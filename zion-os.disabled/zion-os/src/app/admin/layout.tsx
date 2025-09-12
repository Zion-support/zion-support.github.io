<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/layout.tsx
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded border border-white/10 p-4">
          <div className="font-semibold mb-2">Instance Tree</div>
          <div className="text-sm opacity-80">Zion Global → Submarketplaces</div>
          <div className="mt-3 h-24 bg-zinc-900/50 rounded" />
        </div>
        <div className="rounded border border-white/10 p-4 md:col-span-2">
          <div className="flex gap-3 text-sm">
            <a className="underline" href="/admin/os-deploy">Deploy</a>
            <a className="underline" href="/admin/instances">Instances</a>
          </div>
        </div>
      </div>
      {children}
    </section>
=======
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Admin Header */}
      <div className="glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>
            
            <nav className="flex items-center space-x-6">
              <a 
                href="/admin/instances" 
                className="text-white/70 hover:text-white transition-colors duration-200 font-medium"
              >
                Instances
              </a>
              <a 
                href="/admin/os-deploy" 
                className="text-white/70 hover:text-white transition-colors duration-200 font-medium"
              >
                Deploy
              </a>
              <a 
                href="/" 
                className="text-white/70 hover:text-white transition-colors duration-200 font-medium"
              >
                ← Back to Dashboard
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className="py-8">
        {children}
      </div>
    </div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/layout.tsx
  );
}
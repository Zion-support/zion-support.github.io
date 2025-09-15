import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-white font-bold">Admin Dashboard</h1>
          <nav className="flex items-center gap-6 text-white/70">
            <a href="/admin/instances" className="hover:text-white">Instances</a>
            <a href="/admin/os-deploy" className="hover:text-white">Deploy</a>
            <a href="/" className="hover:text-white">← Back</a>
          </nav>
        </div>
      </div>
      <div className="py-8">{children}</div>
    </div>
  );
}

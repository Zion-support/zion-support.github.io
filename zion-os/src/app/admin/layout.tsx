import React from 'react',
export default function AdminLayout({ children }: { children: React.ReactNode ,}) {,
  return (,
    <div className="min-h-screen">,
      <div className="max-w-6xl mx-auto px-4 py-6">,
        {children}
      </div>,
    </div>,
  ),
}
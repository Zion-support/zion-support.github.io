import &quot;./globals.css&quot;;
import type { ReactNode } from &quot;react&quot;;
import { Metadata } from &quot;next&quot;;

export const metadata = {
  title: &quot;Zion OS - Launch Sovereign AI-Powered Digital Economies&quot;,
  description: &quot;Unified deployment protocol for Zion ecosystems. Deploy AI-powered marketplaces, governance systems, and digital economies with one click.&quot;,
  keywords: &quot;AI, blockchain, digital economy, marketplace, governance, deployment, Zion&quot;};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang=&quot;en&quot;>
      <body className=&quot;min-h-screen bg-[var(--bg)] text-[var(--fg)]&quot;>
        <nav className=&quot;border-b border-white/10 sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-md&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;flex items-center justify-between h-16&quot;>
              <div className=&quot;flex items-center&quot;>
                <a href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>
                  <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center&quot;>
                    <span className=&quot;text-white font-bold text-sm&quot;>Z</span>
                  </div>
                  <span className=&quot;font-bold text-xl gradient-text&quot;>Zion OS</span>
                </Link>
              </div>
              
              <div className=&quot;hidden md:block&quot;>
                <div className=&quot;ml-10 flex items-baseline space-x-8&quot;>
                  <a href=&quot;/&quot; className=&quot;text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors&quot;>
                    Home
                  </Link>
                  <a href=&quot;/multiverse/launch&quot; className=&quot;text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors&quot;>
                    Launch
                  </Link>
                  <a href=&quot;/admin/instances&quot; className=&quot;text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors&quot;>
                    Instances
                  </Link>
                  <a href=&quot;/admin/os-deploy&quot; className=&quot;text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors&quot;>
                    Admin
                  </Link>
                </div>
              </div>

              <div className=&quot;md:hidden&quot;>
                <button className=&quot;text-white/80 hover:text-white p-2&quot;>
                  <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 6h16M4 12h16M4 18h16&quot; />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <main className=&quot;min-h-screen&quot;>{children}</main>
        
        <footer className=&quot;border-t border-white/10 bg-zinc-900/50 mt-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
              <div className=&quot;col-span-1 md:col-span-2&quot;>
                <div className=&quot;flex items-center space-x-2 mb-4&quot;>
                  <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center&quot;>
                    <span className=&quot;text-white font-bold text-sm&quot;>Z</span>
                  </div>
                  <span className=&quot;font-bold text-xl gradient-text&quot;>Zion OS</span>
                </div>
                <p className=&quot;text-white/70 max-w-md&quot;>
                  Launch sovereign AI-powered digital economies with one click. 
                  Unified deployment protocol for the future of decentralized business.
                </p>
              </div>
              
              <div>
                <h3 className=&quot;text-white font-semibold mb-4&quot;>Platform</h3>
                <ul className=&quot;space-y-2 text-white/70&quot;>
                  <li><a href=&quot;/multiverse/launch&quot; className=&quot;hover:text-white transition-colors&quot;>Launch Wizard</Link></li>
                  <li><a href=&quot;/admin/instances&quot; className=&quot;hover:text-white transition-colors&quot;>Manage Instances</Link></li>
                  <li><a href=&quot;/admin/os-deploy&quot; className=&quot;hover:text-white transition-colors&quot;>Admin Panel</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className=&quot;text-white font-semibold mb-4&quot;>Resources</h3>
                <ul className=&quot;space-y-2 text-white/70&quot;>
                  <li><a href=&quot;#&quot; className=&quot;hover:text-white transition-colors&quot;>Documentation</Link></li>
                  <li><a href=&quot;#&quot; className=&quot;hover:text-white transition-colors&quot;>API Reference</Link></li>
                  <li><a href=&quot;#&quot; className=&quot;hover:text-white transition-colors&quot;>Support</Link></li>
                </ul>
              </div>
            </div>
            
            <div className=&quot;border-t border-white/10 mt-8 pt-8 text-center text-white/50&quot;>
              <p>&copy; 2024 Zion OS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
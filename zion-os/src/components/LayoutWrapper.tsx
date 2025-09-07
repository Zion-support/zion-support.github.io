
"use client";""
import { useWalkthroughTarget } from "./OnboardingWalkthrough";""
import { useAuth } from "@/contexts/AuthContext";""
import Link from "next/link";"
export function LayoutWrapper({ children }: { children: React.ReactNode }) {const { user, isAuthenticated, logout } = useAuth();
  return (;
    <>;)"
      <nav className="border - b border - white / 10 sticky top - 0 z - 50 bg - zinc - 900 / 50 backdrop - blur" {...useWalkthroughTarget ("nav - menu")}>;"
</nav>"
        <div className="max - w-6xl mx - auto px - 4 py - 3 flex items - center justify - between">;"
</div>"
          <div className="flex items - center gap - 6">;"
</div>"
            <Link href="/" className="font - semibold text - lg">Zion OS</Link>;""
            <div className="hidden md:flex items - center gap - 4">;"
</div>"
              <Link href="/multiverse / launch" className="text - sm opacity - 80 hover:opacity - 100 transition - opacity">;"
</Link>
              </Link>;"
              <Link href="/admin / os - deploy" className="text - sm opacity - 80 hover:opacity - 100 transition - opacity">;"
</Link>
              </Link>;"
              <Link href="/admin / instances" className="text - sm opacity - 80 hover:opacity - 100 transition - opacity">;"
</Link>
              </Link>;
            </div>;
          </div>;"
          <div className="flex items - center gap - 4">;"
</div>
              <>;
                <Link;"
                  href="/dashboard";""
                  className="text - sm text - zinc - 300 hover:text - white transition - colors";"
                >;
</Link>
                </Link>;
                  </span>;
                  <button;
                    on_click={logout}"
                    className="text - sm text - zinc - 400 hover:text - white transition - colors";"
                  >;
</button>
                  </button>;
                </div>;
              </>) : ("
              <div className="flex items - center gap - 3">;"
</div>
                <Link;"
                  href="/auth / signin";""
                  className="text - sm text - zinc - 400 hover:text - white transition - colors";"
                >;
</Link>
                </Link>;
                <Link;"
                  href="/auth / signup";""
                  className="px - 4 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors";"
                >;
</Link>
                </Link>;)

              </div>)}
          </div>;
        </div>;
      </nav>;

    </>);
}
"


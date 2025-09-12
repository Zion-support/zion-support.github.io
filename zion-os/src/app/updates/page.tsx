export const metadata = {
  title: "Updates - Zion OS",
  description: "Latest platform updates, releases, and announcements for Zion OS.",
};

type UpdateItem = {
  date: string;
  title: string;
  summary: string;
  href?: string;
  tag?: string;
};

const updates: UpdateItem[] = [
  {
    date: "2025-09-12",
    title: "New Blog Articles Published",
    summary: "Three new guides on AI deployment, pricing bundles, and the enterprise Web3 stack.",
    href: "/blog",
    tag: "Content",
  },
  {
    date: "2025-09-12",
    title: "AI Services Catalog Expanded",
    summary: "Added new enterprise AI offerings and pricing tiers across analytics, automation, and security.",
    href: "/services",
    tag: "Release",
  },
  {
    date: "2025-09-10",
    title: "Zion OS Homepage Refresh",
    summary: "Improved hero, feature highlights, and calls-to-action for clearer value presentation.",
    href: "/",
    tag: "Design",
  },
  {
    date: "2025-09-05",
    title: "New Case Studies Section",
    summary: "Showcasing results from AI-driven deployments across fintech and e‑commerce.",
    href: "/case-studies",
    tag: "Content",
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Latest Updates</h1>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Product releases, improvements, and announcements from the Zion OS team.
            </p>
          </div>

          <div className="space-y-4">
            {updates.map((item) => (
              <a
                key={`${item.date}-${item.title}`}
                href={item.href || "#"}
                className="block rounded-xl border border-white/10 hover:border-blue-500 transition-colors p-6 bg-zinc-900/40"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-zinc-400">{item.date}</div>
                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-zinc-300 mt-2">{item.summary}</p>
                  </div>
                  {item.tag && (
                    <span className="ml-4 text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/30">
                      {item.tag}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Lightweight export for homepage teaser
export const latestUpdatesTeaser: UpdateItem[] = updates.slice(0, 3);

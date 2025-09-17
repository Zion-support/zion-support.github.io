import Link from "next/link";

export const metadata = {
  title: "Quantum Error Correction Breakthrough Reduces Error Rates by 60% | Zion Research",
  description: "Our research team introduces a new error correction approach that significantly improves quantum computation reliability.",
  keywords: "quantum computing, error correction, research, Zion Tech Group",
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center gap-3 text-sm text-gray-400">
            <Link href="/news" className="hover:text-blue-400">News</Link>
            <span>/</span>
            <span>Research</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quantum Computing Breakthrough: New Algorithm Reduces Error Rates by 60%</h1>
          <div className="flex items-center gap-3 text-gray-400 mb-8">
            <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-full">QUANTUM</span>
            <span>December 12, 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p>
              Our research division has developed a novel quantum error correction algorithm that reduces logical error
              rates by up to 60% across a range of noisy intermediate-scale quantum (NISQ) devices. This advancement
              pushes practical quantum computing closer to real-world applications.
            </p>
            <h2>Technical Highlights</h2>
            <ul>
              <li>Adaptive syndrome decoding with reinforcement learning</li>
              <li>Topology-aware stabilizer code selection</li>
              <li>Cross-layer noise modeling for hardware-specific optimization</li>
            </ul>
            <h2>Implications</h2>
            <p>
              The method improves reliability for quantum simulation, optimization, and cryptographic workloads, enabling
              more complex circuits within current coherence limits.
            </p>
            <h2>Next Steps</h2>
            <p>
              We are collaborating with hardware partners to integrate the approach into toolchains and open-sourcing a
              reference implementation for academic evaluation.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <Link href="/research" className="btn-secondary">Explore Research</Link>
            <Link href="/contact" className="btn-primary">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}


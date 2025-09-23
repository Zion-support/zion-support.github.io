import Link from "next/link";

export const metadata = {
  title: "Quantum Neural Network Platform - Zion Tech Group",
  description: "Combining quantum computing with AI to solve complex problems.",
};

export default function QuantumNeuralNetworkPlatformPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Quantum Neural Network Platform</h1>
          <p className="text-zinc-300 mb-6">
            Explore our platform that merges quantum computing with machine learning to unlock new capabilities.
          </p>
          <Link className="text-blue-400" href="/docs/quantum-services">Read Docs →</Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Quantum Computing Services - Zion Tech Group | Advanced Quantum Solutions",
  description: "Transform your business with cutting-edge quantum computing services.",
};

export default function QuantumServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Quantum Computing Services</h1>
          <p className="text-zinc-300 mb-6">
            From algorithm optimization to quantum machine learning, unlock unprecedented computational power.
          </p>
          <Link className="text-blue-400" href="/contact">Get in touch →</Link>
        </div>
      </section>
    </div>
  );
}


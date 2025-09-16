
const EdgeAICompliance2026: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold">Edge AI Compliance 2026 – Practical Guide</h1>
      <p className="mt-4 text-white/80">
        A concise, practitioner-focused guide to implementing compliance controls for Edge AI systems,
        including model governance, device attestation, data residency, and incident response.
      </p>
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold">What You Will Learn</h2>
          <ul className="list-disc pl-6 mt-3 text-white/80 space-y-2">
            <li>Device identity, attestation, and secure boot for model execution.</li>
            <li>Privacy-by-design patterns for on-device inference and streaming.</li>
            <li>Auditability, logging, and evaluation gates at the edge.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Quickstart Checklist</h2>
          <ol className="list-decimal pl-6 mt-3 text-white/80 space-y-2">
            <li>Map sensitive data flows and storage locations.</li>
            <li>Enable signed model artifacts and keyed rollout policies.</li>
            <li>Ship kill-switch + rollback with remote policy updates.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default EdgeAICompliance2026;
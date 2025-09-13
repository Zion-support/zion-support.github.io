export default function ObservabilityForLLMAgents() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">Observability for LLM Agents</h1>
          <p className="text-fuchsia-100 text-lg">
            How to trace prompts, tools, and costs with actionable SLOs for production agents.
          </p>
        </div>
      </header>

      <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
        <h2>What to Measure</h2>
        <ul>
          <li>Latency and error rates per tool and action.</li>
          <li>Token usage by pathway with budget caps.</li>
          <li>Safety events and red team outcomes.</li>
        </ul>

        <h2>Make It Actionable</h2>
        <ul>
          <li>Define SLIs/SLOs tied to business outcomes.</li>
          <li>Set guardrail policies that gate deployments.</li>
          <li>Use insights to iterate prompts and tool strategies.</li>
        </ul>

        <p>
          Zion OS includes tracing and dashboards to make agent behavior inspectable and reliable.
        </p>
      </article>
    </div>
  );
}


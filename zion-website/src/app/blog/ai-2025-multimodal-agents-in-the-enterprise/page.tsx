export default function Article() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm font-semibold text-purple-700">Enterprise AI</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Multimodal Agents in the Enterprise (2025)</h1>
        <p className="mt-4 text-gray-700">Deploy agents that see, hear, and act for real outcomes.</p>
        <div className="mt-8 prose prose-lg max-w-none">
          <h2>High-Value Use Cases</h2>
          <ul>
            <li>Service operations copilot with screen-reading and RPA</li>
            <li>Finance reconciliation agent with document understanding</li>
            <li>Marketing creative agent with image and audio generation</li>
          </ul>
          <h2>Rollout Plan</h2>
          <p>Start with narrow tasks, instrument quality, and expand via templates.</p>
        </div>
      </article>
    </div>
  )
}


export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Progress Streaks and Badges</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay motivated with new progress streaks and achievement badges. Earn rewards for
            consistent learning streaks and milestone completions across courses and labs.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>3, 7, 14, and 30-day streak badges</li>
              <li>Milestone badges for module completions</li>
              <li>Profile highlights and shareable achievements</li>
              <li>Optional email/push reminders to keep streaks alive</li>
            </ul>
            <p>
              Streaks are live today. Badges roll out progressively this week to all learners.
            </p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Enable for my team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Mentor Office Hours</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are launching weekly mentor office hours for enrolled students. Get live help on
            projects, portfolio reviews, and roadmap guidance directly from industry experts.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Weekly sessions across time zones</li>
              <li>Project debugging and architecture reviews</li>
              <li>Career guidance and portfolio feedback</li>
              <li>Small-group format with Q&amp;A</li>
            </ul>
            <p>
              Sessions are free for active learners. Seats are limited and offered on a first-come basis.
            </p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Reserve a seat
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


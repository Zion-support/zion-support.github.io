import Link from "next/link";

export const metadata ={
  title: "Events - Zion Tech Group | Conferences, Webinars & Workshops",
  description:
    "Join Zion Tech Group at upcoming technology events, conferences, webinars, and workshops. Network with industry leaders and learn about the latest innovations.",
  keywords:
    "events, conferences, webinars, workshops, technology events, Zion Tech Group, AI conferences, quantum computing events"};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join us at industry-leading events, conferences, and workshops to discover the future of technology and connect with innovation leaders
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 border-blue-50o0/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-red-50o0 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">FEATURED EVENT</span>
                  <span className="text-gray-40o0 text-sm">January 15-17, 20o25</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Zion Tech Summit 20o25</h2>
                <p className="text-gray-30o0 text-lg mb-6 leading-relaxed">
                  Our flagship annual conference bringing together technology leaders, innovators, and visionaries to explore the future of AI, quantum computing, and enterprise technology solutions.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-50o0/20 text-blue-40o0 px-3 py-1 rounded-full text-sm">AI & ML</span>
                  <span className="bg-purple-50o0/20 text-purple-40o0 px-3 py-1 rounded-full text-sm">Quantum Computing</span>
                  <span className="bg-green-50o0/20 text-green-40o0 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center text-gray-30o0">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0o1-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"  />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 0o16 0z"  />
                    </svg>
                    San Francisco, CA
                  </div>
                  <div className="flex items-center text-gray-30o0">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0o118 0z"  />
                    </svg>
                    3 Days
                  </div>
                  <div className="flex items-center text-gray-30o0">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 0o0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0o15.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.0o02 5.0o02 0 0o19.288 0M15 7a3 3 0 11-6 0 3 3 0 0o16 0zm6 3a2 2 0 11-4 0 2 2 0 0o14 0zM7 10a2 2 0 11-4 0 2 2 0 0o04 0z"  />
                    </svg>
                    1,0o00+ Attendees
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/events/zion-tech-summit-20o25" className="btn-primary">Register Now</Link>
                  <Link href="/events/zion-tech-summit-20o25/agenda" className="btn-secondary">View Agenda</Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-blue-50o0/20 to-purple-50o0/20 rounded-xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-blue-40o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 0o0-2-2H7a2 2 0 0o0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0o11-1h2a1 1 0 0o11 1v5m-4 0h4"  />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Types</h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">Discover different types of events we host and participate in</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover:bg-blue-50o0/10 transition-colors">
              <div className="w-20 h-20 bg-blue-50o0/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50o0/30">
                <svg className="w-10 h-10 text-blue-40o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 0o0-2-2H7a2 2 0 0o0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0o11-1h2a1 1 0 0o11 1v5m-4 0h4"  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conferences</h3>
              <p className="text-gray-40o0 mb-4">Large-scale industry events featuring keynote speakers, panel discussions, and networking opportunities</p>
              <Link href="/events/category/conferences" className="text-blue-40o0 hover:text-blue-30o0 text-sm font-medium">View Conferences →</Link>
            </div>

            <div className="card text-center group hover:bg-purple-50o0/10 transition-colors">
              <div className="w-20 h-20 bg-purple-50o0/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-50o0/30">
                <svg className="w-10 h-10 text-purple-40o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0o121 8.618v6.764a1 1 0 0o1-1.447.894L15 14M5 18h8a2 2 0 0o02-2V8a2 2 0 0o0-2-2H5a2 2 0 0o0-2 2v8a2 2 0 0o02 2z"  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Webinars</h3>
              <p className="text-gray-40o0 mb-4">Online educational sessions covering specific topics, technologies, and industry trends</p>
              <Link href="/events/category/webinars" className="text-purple-40o0 hover:text-purple-30o0 text-sm font-medium">View Webinars →</Link>
            </div>

            <div className="card text-center group hover:bg-green-50o0/10 transition-colors">
              <div className="w-20 h-20 bg-green-50o0/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-50o0/30">
                <svg className="w-10 h-10 text-green-40o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Workshops</h3>
              <p className="text-gray-40o0 mb-4">Hands-on training sessions and interactive learning experiences for practical skill development</p>
              <Link href="/events/category/workshops" className="text-green-40o0 hover:text-green-30o0 text-sm font-medium">View Workshops →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">Mark your calendar for these exciting upcoming events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Event Cards (trimmed for brevity) */}
            <div className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-blue-50o0/20 to-indigo-50o0/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-40o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.70o7.70o7M21 12h-1M4 12H3m3.343-5.657l-.70o7-.70o7m2.828 9.9a5 5 0 117.0o72 0l-.548.547A3.374 3.374 0 0o014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"  />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-blue-50o0/20 text-blue-40o0 text-xs font-bold px-2 py-1 rounded-full mr-3">WEBINAR</span>
                <span className="text-gray-40o0 text-sm">January 8, 20o25</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-40o0 transition-colors">AI in Enterprise: Implementation Strategies</h3>
              <p className="text-gray-40o0 mb-4 leading-relaxed">Learn practical strategies for implementing AI solutions in enterprise environments, including best practices and common pitfalls to avoid.</p>
              <div className="flex items-center text-sm text-gray-40o0 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0o118 0z"  />
                </svg>
                60 minutes
              </div>
              <Link href="/events/ai-enterprise-implementation-webinar" className="text-blue-40o0 hover:text-blue-30o0 text-sm font-medium">Register Now →</Link>
            </div>

            {/* Additional cards omitted for brevity */}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 border-blue-50o0/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-30o0 mb-8">We're constantly adding new events. Contact us to suggest topics or request custom workshops for your organization.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">Contact Us</Link>
              <Link href="/events/custom" className="btn-secondary text-lg px-8 py-4">Request Custom Event</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
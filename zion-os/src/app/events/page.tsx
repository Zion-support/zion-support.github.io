import Link from "next/link";

export const metadata = {
  title: "Events - Zion Tech Group | Conferences, Webinars & Workshops",
  description: "Join Zion Tech Group at upcoming technology events, conferences, webinars, and workshops. Network with industry leaders and learn about the latest innovations.",
  keywords: "events, conferences, webinars, workshops, technology events, Zion Tech Group, AI conferences, quantum computing events"
};

export default function EventsPage() {
  const events = [
    {
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      type: "Conference",
      description: "Join us for the premier AI conference featuring industry leaders and cutting-edge research."
    },
    {
      title: "Quantum Computing Workshop",
      date: "April 22, 2024",
      location: "Virtual",
      type: "Workshop",
      description: "Hands-on workshop on quantum computing fundamentals and applications."
    },
    {
      title: "Cloud Security Webinar",
      date: "May 8, 2024",
      location: "Virtual",
      type: "Webinar",
      description: "Learn about the latest cloud security best practices and threat mitigation strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600">
            Join us at conferences, webinars, and workshops
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {event.description}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
              </div>
              <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                Register Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'AI Innovation Summit',
      date: '2025-03-15',
      location: 'Virtual',
      type: 'Conference',
      description: 'Insights on AI transformation and business innovation.'
    },
    {
      id: 2,
      title: 'Cybersecurity Workshop',
      date: '2025-04-05',
      location: 'San Francisco, CA',
      type: 'Workshop',
      description: 'Hands-on workshop on cybersecurity threats and defense.'
    }
  ];

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Webinars</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our experts for conferences, workshops, and webinars.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <div key={e.id} className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="mb-2 text-sm text-gray-500">{e.type}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{e.title}</h3>
              <p className="text-gray-600 mb-3">{e.description}</p>
              <div className="text-sm text-gray-700">{formatDate(e.date)} • {e.location}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
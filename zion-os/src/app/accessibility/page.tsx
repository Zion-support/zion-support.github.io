export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Accessibility</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            We are committed to inclusive, accessible experiences for all users.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-700">
            We follow WCAG 2.1 AA guidelines and continuously improve through audits and user feedback.
          </p>
        </div>
      </section>
    </div>
  );
}

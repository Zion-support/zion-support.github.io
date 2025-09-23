export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Cookies</h1>
        <p className="text-zinc-500">We use cookies to enhance your experience. You can manage preferences in your browser settings.</p>
        
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Essential Cookies</h2>
            <p className="text-gray-600">These cookies are necessary for the website to function properly.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Analytics Cookies</h2>
            <p className="text-gray-600">Help us understand how visitors interact with our website.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Preference Cookies</h2>
            <p className="text-gray-600">Remember your settings and preferences for a better experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
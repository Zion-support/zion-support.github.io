export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Cookie Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
            when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Are Cookies?
          </h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are placed on your computer or mobile device when 
            you visit a website. They are widely used to make websites work more efficiently and 
            to provide information to website owners.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How We Use Cookies
          </h2>
          <p className="text-gray-600 mb-6">
            We use cookies to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Analyze how our website is used</li>
            <li>Improve our website's performance</li>
            <li>Provide personalized content</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Managing Cookies
          </h2>
          <p className="text-gray-600 mb-6">
            You can control and manage cookies in various ways. Please note that removing or 
            blocking cookies can impact your user experience and parts of our website may no 
            longer be fully accessible.
          </p>
        </div>
      </div>
    </div>
  );
}
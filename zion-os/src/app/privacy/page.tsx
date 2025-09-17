export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            This Privacy Policy describes how Zion Tech Group collects, uses, and protects 
            your personal information when you use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-6">
            We collect information you provide directly to us, such as when you create 
            an account, use our services, or contact us for support.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide, maintain, and improve our 
            services, process transactions, and communicate with you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Information Sharing
          </h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or otherwise transfer your personal information to 
            third parties without your consent, except as described in this policy.
          </p>
        </div>
      </div>
    </div>
  );
}
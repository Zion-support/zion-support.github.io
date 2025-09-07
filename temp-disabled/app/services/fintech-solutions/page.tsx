
export const metadata = {
  title: "Fintech Solutions | Zion Tech Group",
  description: "Revolutionize financial services with cutting-edge fintech solutions, including payment processing, digital banking, and financial analytics.",
  keywords: "fintech solutions, financial technology, payment processing, digital banking, financial analytics"
};

export default function FintechSolutionsPage() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Fintech Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionize financial services with cutting-edge fintech solutions, including payment processing, digital banking, and financial analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💳</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Payment Processing
          </h3>
          <p className="text-gray-600">
            Secure and efficient payment processing solutions for all types of financial transactions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🏦</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Digital Banking
          </h3>
          <p className="text-gray-600">
            Modern digital banking platforms with mobile-first design and advanced security.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Financial Analytics
          </h3>
          <p className="text-gray-600">
            Advanced analytics and reporting tools for financial data analysis and insights.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Financial Services?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your fintech needs and implement cutting-edge financial solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );

}
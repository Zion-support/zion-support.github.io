const services = [];
const _solutions = [];


export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your digital assets with comprehensive security solutions
          </p>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced threat detection and response systems to protect against cyber attacks.
              </p>
              <ul className="text-cyan-400 space-y-2">
                <li>• Real-time Monitoring</li>
                <li>• Behavioral Analysis</li>
                <li>• Automated Response</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Security Auditing</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security assessments to identify and fix vulnerabilities.
              </p>
              <ul className="text-cyan-400 space-y-2">
                <li>• Vulnerability Assessment</li>
                <li>• Penetration Testing</li>
                <li>• Compliance Auditing</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Incident Response</h3>
              <p className="text-gray-300 mb-4">
                Rapid response and recovery services for security incidents.
              </p>
              <ul className="text-cyan-400 space-y-2">
                <li>• 24/7 Monitoring</li>
                <li>• Rapid Response</li>
                <li>• Forensic Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Cybersecurity };
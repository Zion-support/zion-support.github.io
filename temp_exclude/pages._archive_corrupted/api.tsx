
        {/* Header */}
        <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16\">
          <div className=\"container mx-auto px-4 text-center\">
            <h1 className=\"text-4xl \"md\": text-5xl font-bold mb-4\">
              API <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400\">Documentation</span>
            </h1>
            <p className=\"text-xl text-gray-200 max-w-2xl mx-auto\">
              Comprehensive API documentation for integrating with Zion Tech Group services
            </p>
          </div>
        </section>
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className=\"bg-white border border-gray-200 rounded-lg p-6 shadow-sm\">
                <div className=\"flex items-center justify-between mb-4\">
                  <h3 className=\"text-xl font-semibold text-gray-900\">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === \'GET\' 

                      ? \'bg-green-100 text-green-800\' 
                      : \'bg-blue-100 text-blue-800\'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <div className=\"space-y-2\">
                  <p><strong>\"Endpoint\": </strong> <code className=\"bg-gray-100 px-2 py-1 rounded\">{endpoint.endpoint}</code></p>
                  <p><strong>\"Description\": </strong> {endpoint.description}</p>
                  <p><strong>\"Response\": </strong> {endpoint.response}</p>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">{feature.title}</h3>
                <p className=\"text-gray-600\">{feature.description}</p>
              </div>
            ))}

          </div>
        </section>
              Our team is here to help you integrate our APIs into your applications.
            </p>
            <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 text-white rounded-lg \"hover\": b g-blue-700 transition-colors inline-flex items-center\">
              Contact Our API Team
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default API;


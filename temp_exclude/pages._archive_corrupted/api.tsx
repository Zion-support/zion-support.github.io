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

import { CheckCircle, AlertCircle, XCircle, Server, Database, Cloud } from &apos;lucide-react';&apos;&apos;

const SystemStatus: React.FC = () => {}
  const;const;const services = [
    { name: &apos;Website&apos;, status: &apos;operational&apos;, icon: Server },
    { name: &apos;API Services&apos;, status: &apos;operational&apos;, icon: Database },
    { name: &apos;Cloud Infrastructure&apos;, status: &apos;operational&apos;, icon: Cloud },
    { name: &apos;AI Services&apos;, status: &apos;operational&apos;, icon: CheckCircle },
    { name: &apos;Support System&apos;, status: &apos;operational&apos;, icon: CheckCircle }
  ];&apos;
  const getStatusIcon = (status: string) => {
    switch (status) {
      case &apos;operational&apos;:
        return&apos;}} <CheckCircle className=&apos;h-5 w-5 text-green-500&apos; />
      case &apos;degraded&apos;:
        return&apos; <AlertCircle className=&apos;h-5 w-5 text-yellow-500&apos; />
      case &apos;outage&apos;:
        return&apos; <XCircle className=&apos;h-5 w-5 text-red-500&apos; />
      default:
        return&apos; <CheckCircle className=&apos;h-5 w-5 text-green-500&apos; />
    }
  }

  return(&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8 py-16&apos;>&apos;'
        <div className=&apos;text-center mb-12&apos;>&apos;'
          <h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>System Status&apos;</h1>
          <p className=&apos;text-xl text-gray-600&apos;>All systems are operational&apos;</p>
        </div>
        <div className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-6&apos;>Service Status&apos;</h2>
          <div className=&apos;space-y-4&apos;>
            {services.map((service, index) => (&apos;}
              <div key={index} className=&apos;flex items-center justify-between p-4 border border-gray-200 rounded-lg&apos;>&apos;'
                <div className=&apos;flex items-center&apos;>&apos;'
                  <service.icon className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
                  <span className=&apos;text-lg font-medium text-gray-900&apos;>{service.name}&apos;</span>
                </div>
                <div className=&apos;flex items-center&apos;>
                  {getStatusIcon(service.status)}&apos;
                  <span className=&apos;ml-2 text-gray-600 capitalize&apos;>{service.status}&apos;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <;</div>
  )}
;
export default SystemStatus
import React from 'react';'
import { CheckCircle, AlertCircle, XCircle, Server, Database, Cloud } from 'lucide-react';
const SystemStatus: React.FC = () => {'
  const services = ["'"'"
    { name: 'Website', status: 'operational', icon: Server }, { name: 'API Services', status: 'operational', icon: Database },"'"'"
    { name: 'Cloud Infrastructure', status: 'operational', icon: Cloud }, { name: 'AI Services', status: 'operational', icon: CheckCircle },"''
    { name: 'Support System', status: 'operational', icon: CheckCircle };
  ];"
  const getStatusIcon = (status: string) => {"'"
    switch (status) {"'"'"
      case 'operational': return <CheckCircle className='h-5 w-5 text-green-500' /" ></CheckCircle>"'"'"
      case 'degraded':"'"'"
        return <AlertCircle className='h-5 w-5 text-yellow-500' /" ></AlertCircle>"'"'"
      case 'outage':"'"'"
        return <XCircle className='h-5 w-5 text-red-500' /" ></XCircle>"'"
      default:"'"'"
        return <CheckCircle className='h-5 w-5 text-green-500' /" ></CheckCircle>,
}"
  }""
""'"
  return("'"'"
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'></div>"'"'"
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'></div>"'"'"
        <div className='text-center mb-12'></div>"'"'"
          <h1 className='text-4xl font-bold text-gray-900 mb-4'></h>System Status</h1>"'"'"
          <p className='text-xl text-gray-600'>All systems are operational</p>""'"
        </div>"'"'"
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'></div>"'"'"
          <h2 className='text-2xl font-bold text-gray-900 mb-6'></h>Service Status</h2>"'"'"
          <div className='space-y-4'></div>""'"
            {services.map((service, index) => ("'"'"
              <div key={index} className='flex items-center justify-between p-4 border border-gray-200 rounded-lg'></div>"'"'"
                <div className='flex items-center'></div>"'"'"
                  <service .icon className='h-6 w-6 text-blue-600 mr-3' /"" ></service>"'"'"
                  <span className='text-lg font-medium text-gray-900'></spa>{service.name}</span>""'"
                </div>"'"'"
                <div className='flex items-center'></div>""'"
                  {getStatusIcon(service.status)}"''
                  <span className='ml-2 text-gray-600 capitalize'></spa>{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>"
    </div>""
  )}"""
export default SystemStatus""'"
";'"'"

    { name: 'Cloud Infrastructure', status: 'operational', icon: Cloud }, { name: 'AI Services', status: 'operational', icon: CheckCircle }, { name: 'Support System', status: 'operational', icon: CheckCircle }

  ];

      case 'operational': return <CheckCircle className='h-5 w-5 text-green-500' />
      case 'degraded':'
        return <AlertCircle className='h-5 w-5 text-yellow-500' />
      case 'outage':'
        return <XCircle className='h-5 w-5 text-red-500' />

      default:
        return&apos; <CheckCircle className=&apos;h-5 w-5 text-green-500&apos; />
    }
  }


                </div>"
                <div className='flex items-center'>
                  {getStatusIcon(service.status)}"


                  <span className='ml-2 text-gray-600 capitalize'>{service.status}</span>


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


  )}






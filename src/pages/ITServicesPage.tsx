
  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price}/month`;
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Networking': return <Network className="w-6 h-6" />;
      case 'Data Management': return <Database className="w-6 h-6" />;
      case 'DevOps': return <Zap className="w-6 h-6" />;
      case 'Asset Management': return <HardDrive className="w-6 h-6" />;
      case 'Support Services': return <MessageSquare className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      default: return <Server className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Subscription': return 'text-blue-400';
      case 'One-time': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
        </div>

          </div>
        </div>

    </div>
  );
};


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
  ];

  const servicePricing = [
    {
      service: "Micro SaaS Development",
      starting: "$5,000",
      monthly: "$2,500",
      description: "End-to-end product development with billing, auth, and analytics"
    },
    {
      service: "AI Services",
      starting: "$3,500",
      monthly: "$1,500",
      description: "LLM applications, RAG systems, and MLOps pipelines"
    },
    {
      service: "IT Services",
      starting: "$2,500",
      monthly: "$1,200",
      description: "Cloud migration, DevOps, and security solutions"
    },
    {
      service: "Blockchain Development",
      starting: "$4,000",
      monthly: "$2,000",
      description: "Smart contracts, DeFi protocols, and Web3 applications"
    },
    {
      service: "Data Analytics",
      starting: "$2,000",
      monthly: "$800",
      description: "Business intelligence, predictive modeling, and real-time analytics"
    },
    {
      service: "Cybersecurity",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Security audits, threat monitoring, and compliance management"
    },
    {
      service: "Cloud Migration",
      starting: "$4,500",
      monthly: "$2,200",
      description: "Seamless migration to AWS, Azure, or Google Cloud"
    },
    {
      service: "DevOps & SRE",
      starting: "$3,500",
      monthly: "$1,800",
      description: "CI/CD pipelines, infrastructure automation, and monitoring"
    },
    {
      service: "Mobile Development",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Native and cross-platform mobile applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent pricing for all your technology needs. Choose the plan that fits your business.
          </p>
        </div>
      </div>

  );
}
  );
};
;
export default Pricing;
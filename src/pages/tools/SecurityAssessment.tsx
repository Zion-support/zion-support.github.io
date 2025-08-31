import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  BarChart3, 
  Target, 
  ArrowRight,
  Download,
  Share2,
  Save,
  RefreshCw,
  Info,
  AlertCircle,
  Lightbulb,
  Zap,
  Users,
  Clock,
  Database,
  Cloud,
  Network,
  Server,
  Smartphone,
  Globe,
  Eye,
  EyeOff,
  Search,
  Filter,
  FileText,
  Settings,
  Key,
  Unlock,
  Bug,
  Virus,
  Fire
} from 'lucide-react';

export default function SecurityAssessment() {
  const [assessmentData, setAssessmentData] = useState({
    organizationName: '',
    industry: '',
    employeeCount: '',
    hasComplianceRequirements: false,
    complianceTypes: [],
    securityIncidents: '',
    budget: ''
  });

  const [assessmentResults, setAssessmentResults] = useState({
    overallScore: 0,
    riskLevel: '',
    recommendations: [],
    complianceGaps: [],
    securityScore: 0,
    networkScore: 0,
    applicationScore: 0,
    dataScore: 0,
    physicalScore: 0
  });

  const [showResults, setShowResults] = useState(false);

  const runAssessment = () => {
    // Simulate security assessment calculation
    const baseScore = 75;
    const industryMultiplier = getIndustryMultiplier(assessmentData.industry);
    const complianceBonus = assessmentData.hasComplianceRequirements ? 10 : 0;
    const incidentPenalty = parseInt(assessmentData.securityIncidents) * 5;
    
    const securityScore = Math.max(0, Math.min(100, baseScore * industryMultiplier + complianceBonus - incidentPenalty));
    const networkScore = Math.max(0, Math.min(100, securityScore + Math.random() * 20 - 10));
    const applicationScore = Math.max(0, Math.min(100, securityScore + Math.random() * 20 - 10));
    const dataScore = Math.max(0, Math.min(100, securityScore + Math.random() * 20 - 10));
    const physicalScore = Math.max(0, Math.min(100, securityScore + Math.random() * 20 - 10));
    
    const overallScore = Math.round((securityScore + networkScore + applicationScore + dataScore + physicalScore) / 5);
    
    const riskLevel = overallScore >= 80 ? 'Low' : overallScore >= 60 ? 'Medium' : 'High';
    
    const recommendations = generateRecommendations(overallScore, assessmentData);
    const complianceGaps = generateComplianceGaps(assessmentData);
    
    setAssessmentResults({
      overallScore,
      riskLevel,
      recommendations,
      complianceGaps,
      securityScore: Math.round(securityScore),
      networkScore: Math.round(networkScore),
      applicationScore: Math.round(applicationScore),
      dataScore: Math.round(dataScore),
      physicalScore: Math.round(physicalScore)
    });
    setShowResults(true);
  };

  const getIndustryMultiplier = (industry: string) => {
    const multipliers: { [key: string]: number } = {
      'Healthcare': 1.2,
      'Finance': 1.3,
      'Government': 1.4,
      'Technology': 1.1,
      'Manufacturing': 1.0,
      'Retail': 0.9,
      'Education': 0.8
    };
    return multipliers[industry] || 1.0;
  };

  const generateRecommendations = (score: number, data: any) => {
    const recommendations = [];
    
    if (score < 60) {
      recommendations.push('Implement comprehensive security awareness training for all employees');
      recommendations.push('Conduct regular security audits and penetration testing');
      recommendations.push('Establish incident response and disaster recovery plans');
    }
    
    if (data.hasComplianceRequirements) {
      recommendations.push('Review and update compliance policies and procedures');
      recommendations.push('Implement automated compliance monitoring and reporting');
    }
    
    if (parseInt(data.securityIncidents) > 0) {
      recommendations.push('Investigate and document all security incidents');
      recommendations.push('Implement additional monitoring and detection capabilities');
    }
    
    return recommendations;
  };

  const generateComplianceGaps = (data: any) => {
    const gaps = [];
    
    if (data.hasComplianceRequirements) {
      gaps.push('Regular security assessments and audits');
      gaps.push('Employee security training and awareness');
      gaps.push('Incident response and reporting procedures');
      gaps.push('Data protection and privacy controls');
    }
    
    return gaps;
  };

  const handleInputChange = (field: string, value: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setAssessmentData({
      organizationName: '',
      industry: '',
      employeeCount: '',
      hasComplianceRequirements: false,
      complianceTypes: [],
      securityIncidents: '',
      budget: ''
    });
    setShowResults(false);
  };

  const exportResults = () => {
    const dataStr = JSON.stringify({ assessmentData, assessmentResults }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'security-assessment-results.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Analysis",
      description: "Get detailed security assessment across all domains"
    },
    {
      icon: Target,
      title: "Risk Identification",
      description: "Identify vulnerabilities and security gaps in your organization"
    },
    {
      icon: BarChart3,
      title: "Detailed Scoring",
      description: "Receive scores for different security areas with actionable insights"
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Ensure your security posture meets regulatory requirements"
    }
  ];

  const assessmentAreas = [
    {
      icon: Network,
      title: "Network Security",
      description: "Firewalls, intrusion detection, network monitoring"
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Server hardening, access controls, monitoring"
    },
    {
      icon: Smartphone,
      title: "Application Security",
      description: "Code security, API protection, mobile app security"
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Encryption, data classification, access management"
    },
    {
      icon: Users,
      title: "Human Security",
      description: "Training, awareness, social engineering protection"
    },
    {
      icon: Globe,
      title: "Physical Security",
      description: "Facility access, environmental controls, asset protection"
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Government', 'Technology', 
    'Manufacturing', 'Retail', 'Education', 'Other'
  ];

  const complianceTypes = [
    'HIPAA', 'PCI DSS', 'SOX', 'GDPR', 'ISO 27001', 'NIST', 'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Security Assessment Tool - Zion Tech Group</title>
        <meta name="description" content="Assess your organization's security posture with our comprehensive security assessment tool. Get detailed analysis, risk scoring, and actionable recommendations." />
        <link rel="canonical" href="https://ziontechgroup.com/tools/security-assessment" />
        <meta name="keywords" content="security assessment, cybersecurity assessment, security audit tool, risk assessment, compliance assessment, security posture analysis" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Security Assessment Tool
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Evaluate your organization's cybersecurity posture with our comprehensive assessment tool. 
              Get detailed analysis, risk scoring, and actionable recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 mr-2" />
                <span>Comprehensive Analysis</span>
              </div>
              <div className="flex items-center text-gray-300">
                <BarChart3 className="w-5 h-5 mr-2" />
                <span>Risk Scoring</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Download className="w-5 h-5 mr-2" />
                <span>Detailed Reports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Use Our Security Assessment Tool?
            </h2>
            <p className="text-gray-300 text-lg">
              Professional-grade security analysis for organizations of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Assessment Areas
            </h2>
            <p className="text-gray-300 text-lg">
              Our tool evaluates security across all critical domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessmentAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{area.title}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Security Assessment
            </h2>
            <p className="text-gray-300 text-lg">
              Provide basic information to get your personalized security analysis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <div className="space-y-6">
              {/* Organization Information */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-blue-400" />
                  Organization Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Organization Name</label>
                    <input
                      type="text"
                      value={assessmentData.organizationName}
                      onChange={(e) => handleInputChange('organizationName', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter organization name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Industry</label>
                    <select
                      value={assessmentData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Employee Count</label>
                    <select
                      value={assessmentData.employeeCount}
                      onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1001-5000">1001-5000 employees</option>
                      <option value="5000+">5000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Security Budget</label>
                    <select
                      value={assessmentData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="0-50k">$0 - $50K</option>
                      <option value="50k-200k">$50K - $200K</option>
                      <option value="200k-1m">$200K - $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Security History */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                  Security History
                </h3>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Security Incidents (Past 12 Months)</label>
                  <select
                    value={assessmentData.securityIncidents}
                    onChange={(e) => handleInputChange('securityIncidents', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Number of Incidents</option>
                    <option value="0">0 incidents</option>
                    <option value="1">1 incident</option>
                    <option value="2">2 incidents</option>
                    <option value="3">3 incidents</option>
                    <option value="4">4+ incidents</option>
                  </select>
                </div>
              </div>

              {/* Compliance Requirements */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  Compliance Requirements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasCompliance"
                      checked={assessmentData.hasComplianceRequirements}
                      onChange={(e) => handleInputChange('hasComplianceRequirements', e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="hasCompliance" className="ml-2 text-gray-300">
                      We have compliance requirements
                    </label>
                  </div>
                  
                  {assessmentData.hasComplianceRequirements && (
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Compliance Types (Select all that apply)</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {complianceTypes.map(type => (
                          <div key={type} className="flex items-center">
                            <input
                              type="checkbox"
                              id={type}
                              checked={assessmentData.complianceTypes.includes(type)}
                              onChange={(e) => {
                                const newTypes = e.target.checked
                                  ? [...assessmentData.complianceTypes, type]
                                  : assessmentData.complianceTypes.filter(t => t !== type);
                                handleInputChange('complianceTypes', newTypes);
                              }}
                              className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                            />
                            <label htmlFor={type} className="ml-2 text-gray-300 text-sm">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={runAssessment}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Run Security Assessment
                </button>
                <button
                  onClick={resetForm}
                  className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Assessment Results
              </h2>
              <p className="text-gray-300 text-lg">
                Your organization's security posture analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Overall Score */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-6">Overall Security Score</h3>
                
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-blue-400 mb-2">
                    {assessmentResults.overallScore}
                  </div>
                  <div className="text-2xl text-gray-300 mb-4">out of 100</div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    assessmentResults.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                    assessmentResults.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {assessmentResults.riskLevel} Risk Level
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-gray-300">Network Security:</span>
                    <span className="text-white font-semibold">{assessmentResults.networkScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-gray-300">Application Security:</span>
                    <span className="text-white font-semibold">{assessmentResults.applicationScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-gray-300">Data Security:</span>
                    <span className="text-white font-semibold">{assessmentResults.dataScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Physical Security:</span>
                    <span className="text-white font-semibold">{assessmentResults.physicalScore}/100</span>
                  </div>
                </div>
              </motion.div>

              {/* Recommendations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-6">Key Recommendations</h3>
                
                <div className="space-y-4">
                  {assessmentResults.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{rec}</span>
                    </div>
                  ))}
                </div>

                {assessmentResults.complianceGaps.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-3">Compliance Gaps to Address</h4>
                    <div className="space-y-2">
                      {assessmentResults.complianceGaps.map((gap, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{gap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={exportResults}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export Results
                  </button>
                  <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Assessment Best Practices
            </h2>
            <p className="text-gray-300 text-lg">
              Follow these guidelines for effective security assessments
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-500/20 rounded-full p-2">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Regular Assessments</h3>
                <p className="text-gray-300">Conduct security assessments at least annually, or more frequently for high-risk environments.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-green-500/20 rounded-full p-2">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-300">Ensure assessments cover all security domains: technical, physical, and human factors.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-purple-500/20 rounded-full p-2">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Actionable Results</h3>
                <p className="text-gray-300">Focus on recommendations that can be implemented within your budget and timeline.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-yellow-500/20 rounded-full p-2">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Continuous Improvement</h3>
                <p className="text-gray-300">Use assessment results to create a roadmap for ongoing security improvements.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Professional Security Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our cybersecurity experts can provide comprehensive security assessments and implementation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Security Experts
              </a>
              <a
                href="/services/cybersecurity"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Security Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
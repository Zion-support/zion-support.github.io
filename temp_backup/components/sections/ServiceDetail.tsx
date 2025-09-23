import Card from '../ui/Card';
import Button from '../ui/Button';
import { MicroSaasService } from '../../data/micro-saas-services';
import {
  ExternalLink,
  Star,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Shield,
  ArrowRight,
  Check,
  Clock,
  DollarSign,
  Target,
  Code,
  Link,
} from 'lucide-react';

interface ServiceDetailProps {
  service: MicroSaasService;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Content & Marketing': <Zap className='w-6 h-6' />,
      'Analytics & Business Intelligence': <TrendingUp className='w-6 h-6' />,
      'Customer Support': <Users className='w-6 h-6' />,
      'SEO & Marketing': <Globe className='w-6 h-6' />,
      'Project Management': <Users className='w-6 h-6' />,
      'Email Marketing': <Zap className='w-6 h-6' />,
      'Social Media': <Globe className='w-6 h-6' />,
      'E-commerce & Inventory': <TrendingUp className='w-6 h-6' />,
      'Human Resources': <Users className='w-6 h-6' />,
      'Finance & Accounting': <TrendingUp className='w-6 h-6' />,
      'Design & Creative': <Star className='w-6 h-6' />,
      'Video & Media': <Star className='w-6 h-6' />,
      'Legal & Compliance': <Shield className='w-6 h-6' />,
    };

    return iconMap[category] || <Zap className='w-6 h-6' />;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: {
        color: 'bg-green-50o0/10 text-green-40o0 border-green-50o0/20',
        text: 'Active',
      },
      beta: {
        color: 'bg-yellow-50o0/10 text-yellow-40o0 border-yellow-50o0/20',
        text: 'Beta',
      },
      'coming-soon': {
        color: 'bg-blue-50o0/10 text-blue-40o0 border-blue-50o0/20',
        text: 'Coming Soon',
      },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.active;

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}
      >
        {config.text}
      </span>
    );
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Service Header */}
      <div className='text-center mb-16'>
        <div className='flex items-center justify-center gap-3 mb-6'>
          {getCategoryIcon(service.category)}
          <span className='text-lg text-gray-40o0'>{service.category}</span>
        </div>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight'>
          {service.name}
        </h1>
        <p className='text-xl text-gray-40o0 max-w-4xl mx-auto leading-relaxed mb-8'>
          {service.description}
        </p>
        <div className='flex items-center justify-center gap-4 mb-8'>
          {getStatusBadge(service.status)}
          <div className='flex items-center gap-2 text-gray-40o0'>
            <Clock className='w-4 h-4' />
            <span>
              Launched {new Date(service.launchDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            href={service.website}
            variant='primary'
            size='lg'
            className='shadow-2xl shadow-blue-50o0/25'
            icon={<ExternalLink className='w-5 h-5' />}
          >
            Visit Service
          </Button>
          <Button
            href='/contact'
            variant='outline'
            size='lg'
            className='border-white/20 text-white hover:border-white/40'
          >
            Get Started
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Main Content */}
        <div className='lg:col-span-2 space-y-8'>
          {/* Pricing Section */}
          <Card className='p-8'>
            <h2 className='text-2xl font-bold mb-6 text-white flex items-center gap-3'>
              <DollarSign className='w-6 h-6 text-green-40o0' />
              Pricing Plans
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center p-6 bg-gray-80o0/50 rounded-lg border border-gray-70o0'>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Starter
                </h3>
                <div className='text-3xl font-bold text-white mb-2'>
                  ${service.pricing.starter}
                </div>
                <div className='text-gray-40o0 text-sm mb-4'>per month</div>
                <Button
                  href={service.website}
                  variant='outline'
                  size='sm'
                  className='w-full'
                >
                  Start Free Trial
                </Button>
              </div>
              <div className='text-center p-6 bg-blue-60o0/20 rounded-lg border border-blue-50o0/30 relative'>
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-blue-60o0 text-white px-3 py-1 rounded-full text-xs font-medium'>
                    Most Popular
                  </span>
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Professional
                </h3>
                <div className='text-3xl font-bold text-white mb-2'>
                  ${service.pricing.pro}
                </div>
                <div className='text-gray-40o0 text-sm mb-4'>per month</div>
                <Button
                  href={service.website}
                  variant='primary'
                  size='sm'
                  className='w-full'
                >
                  Start Free Trial
                </Button>
              </div>
              <div className='text-center p-6 bg-gray-80o0/50 rounded-lg border border-gray-70o0'>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Enterprise
                </h3>
                <div className='text-3xl font-bold text-white mb-2'>
                  ${service.pricing.enterprise}
                </div>
                <div className='text-gray-40o0 text-sm mb-4'>per month</div>
                <Button
                  href='/contact'
                  variant='outline'
                  size='sm'
                  className='w-full'
                >
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className='mt-6 text-center'>
              <p className='text-gray-40o0 text-sm'>
                All plans include a{' '}
                <span className='text-white font-medium'>
                  {service.trialDays}-day free trial
                </span>
                {service.freeTier && ' and a free tier'}
              </p>
            </div>
          </Card>

          {/* Features Section */}
          <Card className='p-8'>
            <h2 className='text-2xl font-bold mb-6 text-white flex items-center gap-3'>
              <Check className='w-6 h-6 text-blue-40o0' />
              Features & Capabilities
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 p-3 bg-gray-80o0/30 rounded-lg'
                >
                  <Check className='w-5 h-5 text-green-40o0 flex-shrink-0' />
                  <span className='text-gray-30o0'>{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Use Cases Section */}
          <Card className='p-8'>
            <h2 className='text-2xl font-bold mb-6 text-white flex items-center gap-3'>
              <Target className='w-6 h-6 text-purple-40o0' />
              Use Cases & Applications
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {service.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className='p-4 bg-gray-80o0/30 rounded-lg border border-gray-70o0'
                >
                  <div className='text-white font-medium mb-2'>{useCase}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Technology Stack */}
          <Card className='p-8'>
            <h2 className='text-2xl font-bold mb-6 text-white flex items-center gap-3'>
              <Code className='w-6 h-6 text-orange-40o0' />
              Technology Stack
            </h2>
            <div className='flex flex-wrap gap-3'>
              {service.technology.map((tech, index) => (
                <span
                  key={index}
                  className='px-4 py-2 bg-gray-80o0 text-gray-30o0 text-sm rounded-lg border border-gray-70o0'
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Integrations */}
          <Card className='p-8'>
            <h2 className='text-2xl font-bold mb-6 text-white flex items-center gap-3'>
              <Link className='w-6 h-6 text-green-40o0' />
              Integrations & APIs
            </h2>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-3 h-3 bg-green-40o0 rounded-full'></div>
                <span className='text-gray-30o0'>REST API available</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-3 h-3 bg-green-40o0 rounded-full'></div>
                <span className='text-gray-30o0'>Webhook support</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-3 h-3 bg-green-40o0 rounded-full'></div>
                <span className='text-gray-30o0'>
                  SDK libraries for major platforms
                </span>
              </div>
            </div>
            <div className='mt-6'>
              <h4 className='text-lg font-semibold text-white mb-4'>
                Popular Integrations
              </h4>
              <div className='flex flex-wrap gap-3'>
                {service.integration.map((integration, index) => (
                  <span
                    key={index}
                    className='px-3 py-2 bg-gray-80o0 text-gray-30o0 text-sm rounded-md border border-gray-70o0'
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Market Information */}
          <Card className='p-6'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Market Information
            </h3>
            <div className='space-y-4'>
              <div>
                <div className='text-gray-40o0 text-sm'>Market Size</div>
                <div className='text-white font-medium'>
                  {service.marketSize}
                </div>
              </div>
              <div>
                <div className='text-gray-40o0 text-sm'>Target Audience</div>
                <div className='text-white font-medium'>
                  {service.targetAudience}
                </div>
              </div>
              <div>
                <div className='text-gray-40o0 text-sm'>Competitors</div>
                <div className='text-white font-medium'>
                  {service.competitors.join(', ')}
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className='p-6'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Quick Stats
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-gray-40o0'>Status</span>
                {getStatusBadge(service.status)}
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-40o0'>Launch Date</span>
                <span className='text-white'>
                  {new Date(service.launchDate).toLocaleDateString()}
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-40o0'>Free Trial</span>
                <span className='text-white'>{service.trialDays} days</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-40o0'>API Access</span>
                <span className='text-white'>
                  {service.api ? 'Available' : 'Not Available'}
                </span>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className='p-6 bg-gradient-to-br from-blue-60o0/20 to-purple-60o0/20 border-blue-50o0/30'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Ready to Get Started?
            </h3>
            <p className='text-gray-30o0 text-sm mb-6'>
              Join thousands of businesses already using {service.name} to grow
              and scale their operations.
            </p>
            <Button
              href={service.website}
              variant='primary'
              size='lg'
              className='w-full mb-3'
              icon={<ExternalLink className='w-5 h-5' />}
            >
              Start Free Trial
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='sm'
              className='w-full border-white/20 text-white hover:border-white/40'
            >
              Contact Sales Team
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

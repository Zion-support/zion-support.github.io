 import { Link  } from 'react-router-dom';
import { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield  } from 'lucide-react'; import SEO  from '@/components/SEO';const CloudDevOps = () => { const cloudServices = [
  { icon: Cloud, title: 'Cloud Migration, description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency., features: ['Assessment & Planning,Data Migration,Application Modernization,Performance Optimization']'}, '{ icon: Server, ' title: 'Infrastructure as Code, description: 'Automated infrastructure provisioning and management using modern DevOps practices., features: ['Terraform,AWS CloudFormation,Azure ARM,Kubernetes']'}, '{ icon: GitFork, ' title: 'CI/CD Pipelines, description: 'Automated build, test, and deployment pipelines for faster, more reliable releases., features: ['Jenkins,GitHub Actions,GitLab CI,Azure DevOps']'}, '{'' icon: Database, ' title: 'Database Management, description: 'Scalable database solutions with high availability and disaster recovery., features: ['AWS RDS,Azure SQL,MongoDB Atlas,Redis'] } ] const platforms = ['{' name: 'AWS, description: 'Amazon Web Services cloud platform solutions, icon: '☁️''}, '{' name: 'Azure, description: 'Microsoft Azure cloud services and solutions, icon: '🔷''}, '{' name: 'Google Cloud, description: 'Google Cloud Platform infrastructure and services, icon: '🔵''}, '{' name: 'Multi-Cloud, description: 'Hybrid and multi-cloud strategy implementation, icon: '🌐'' }'; ];' const devOpsTools = [' { category: 'CI/CD', tools: ['Jenkins,GitLab CI,GitHub Actions,CircleCI,ArgoCD'] }, ' { category: 'Infrastructure', tools: ['Terraform,Ansible,Puppet,Chef,CloudFormation'] }, ' { category: 'Monitoring', tools: ['Prometheus,Grafana,ELK Stack,Datadog,New Relic'] }, ' { category: 'Security', tools: ['Vault,AWS IAM,Azure AD,Google IAM,Prisma Cloud'] }'; ];' return (''' <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>'' <SEO ' title='Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services' description='Transform your infrastructure with Zion Tech Group&apos;s cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices.' keywords='cloud migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD' canonical='https: '''''
 import { Link  } from 'react-router-dom';
import { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield  } from 'lucide-react'; import SEO  from '@/components/SEO';const CloudDevOps = () =" > { const cloudServices = [
  { icon: Cloud, title: 'Cloud Migration, description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency., features: ['Assessment & Planning,Data Migration,Application Modernization,Performance Optimization']'},'; { icon: Server, ' title: 'Infrastructure as Code, description: 'Automated infrastructure provisioning and management using modern DevOps practices., features: ['Terraform,AWS CloudFormation,Azure ARM,Kubernetes']'},'; { icon: GitFork, ' title: 'CI/CD Pipelines, description: 'Automated build, test, and deployment pipelines for faster, more reliable releases., features: ['Jenkins,GitHub Actions,GitLab CI,Azure DevOps']'},'; {'' icon: Database, ' title: 'Database Management, description: 'Scalable database solutions with high availability and disaster recovery., features: ['AWS RDS,Azure SQL,MongoDB Atlas,Redis'] } ]';;' const platforms = ['; {';;'' name: 'AWS, description: 'Amazon Web Services cloud platform solutions, icon: '☁️''},'; {';;'' name: 'Azure, description: 'Microsoft Azure cloud services and solutions, icon: '🔷''},'; {';;'' name: 'Google Cloud, description: 'Google Cloud Platform infrastructure and services, icon: '🔵''},'; {';;'' name: 'Multi-Cloud, description: 'Hybrid and multi-cloud strategy implementation, icon: '🌐'' }'];' const devOpsTools = [' { category: 'CI/CD', tools: ['Jenkins,GitLab CI,GitHub Actions,CircleCI,ArgoCD'] }, ' { category: 'Infrastructure', tools: ['Terraform,Ansible,Puppet,Chef,CloudFormation'] }, ' { category: 'Monitoring', tools: ['Prometheus,Grafana,ELK Stack,Datadog,New Relic'] }, ' { category: 'Security', tools: ['Vault,AWS IAM,Azure AD,Google IAM,Prisma Cloud'] }'];' return (' <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'> <SEO' title='Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services' description='Transform your infrastructure with Zion Tech Group&apos;s cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices.' keywords='cloud migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD' canonical='https:''''"

const CloudDevOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="CloudDevOps - Zion Tech Group"
        description="Professional CloudDevOps services by Zion Tech Group"
        keywords="clouddevops, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">CloudDevOps</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional CloudDevOps services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;
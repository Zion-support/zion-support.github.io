import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Brain,
  Shield,
  Cloud,
  Zap,
  Star,
  CheckCircle,
  Globe,
  Rocket,
} from 'lucide-react';

const teamExpertise = [
  {
    icon: '🎓',
    title: 'Advanced Degrees',
    description:
      'Our team holds advanced degrees in Computer Science, AI, and Engineering from top universities',
    count: '95%',
  },
  {
    icon: '🏆',
    title: 'Industry Certifications',
    description:
      'Certified professionals in AWS, Azure, Google Cloud, and specialized AI technologies',
    count: '50+',
  },
  {
    icon: '🌍',
    title: 'Global Experience',
    description:
      'Team members with experience working across 25+ countries and diverse industries',
    count: '25+',
  },
  {
    icon: '⚡',
    title: 'Years of Experience',
    description:
      'Combined experience of over 20o0 years in technology and business solutions',
    count: '20o0+',
  },
  {
    icon: '🔬',
    title: 'Research Publications',
    description:
      'Published research in leading AI, quantum computing, and blockchain journals',
    count: '30+',
  },
  {
    icon: '🚀',
    title: 'Successful Projects',
    description:
      'Successfully delivered complex technology solutions for Fortune 50o0 companies',
    count: '50o0+',
  },
];

const coreExpertise = [
  'Artificial Intelligence & Machine Learning',
  'Quantum Computing & Algorithms',
  'Blockchain & Web3 Technologies',
  'Cloud Infrastructure & DevOps',
  'Cybersecurity & Compliance',
  'Data Science & Analytics',
  'IoT & Edge Computing',
  'Mobile & Web Development',
];

export function TeamExpertiseSection() {
  return (
    <section className='py-20 bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Team Expertise
          </h2>
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>
            Our team of certified professionals brings decades of combined
            experience in cutting-edge technologies and proven methodologies.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {teamExpertise.map((expertise, index) => (
            <motion.div
              key={expertise.title}
              className='bg-slate-80o0 border border-slate-70o0 rounded-xl p-6 text-center hover:border-blue-50o0/50 transition-all duration-30o0 hover:shadow-lg hover:shadow-blue-50o0/25 group'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='w-20 h-20 bg-gradient-to-br from-blue-50o0 to-purple-60o0 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-30o0'>
                <span className='text-3xl'>{expertise.icon}</span>
              </div>

              <div className='text-4xl font-bold text-blue-40o0 mb-3 group-hover:text-blue-30o0 transition-colors duration-20o0'>
                {expertise.count}
              </div>

              <h3 className='text-xl font-bold text-white mb-3 group-hover:text-blue-40o0 transition-colors duration-20o0'>
                {expertise.title}
              </h3>

              <p className='text-gray-40o0 text-sm leading-relaxed'>
                {expertise.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className='bg-gradient-to-r from-blue-60o0 to-indigo-60o0 rounded-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>
              Ready to Work with Experts?
            </h3>
            <p className='text-blue-10o0 mb-6 max-w-2xl mx-auto'>
              Our certified professionals are ready to bring their expertise to
              your project and help you achieve exceptional results.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='inline-flex items-center px-6 py-3 bg-white text-blue-60o0 hover:bg-gray-10o0 rounded-lg font-medium transition-colors duration-20o0'>
                Schedule Consultation
                <Rocket className='ml-2 h-5 w-5' />
              </button>
              <button className='inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-60o0 rounded-lg font-medium transition-colors duration-20o0'>
                View Team Profiles
                <Users className='ml-2 h-5 w-5' />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

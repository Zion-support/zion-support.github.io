=======
import {CheckSquare, CheckCircle, Phone, Star} from 'lucide-react';;
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

constTaskManagerProPage: React.FC= () =>{constfeatures= [
    {
      icon: CheckSquare,
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefit: 'Increase productivity by40%'
   },
    {icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit: 'Improve team efficiency by60%'
   },
    {icon: Brain,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers your work patterns, energy levels, and optimal focus times.',
      benefit: 'Complete tasks30% faster'
   },
    {icon: Zap,
      title: 'Automated Workflows',
      description: 'Create custom automation rules that trigger actions based on task completion, deadlines, and team updates.',
      benefit: 'Reduce manual work by70%'
   },
    {icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track SMART goals with AI insights on progress, roadblocks, and optimization opportunities.',
      benefit: 'Achieve85% of your goals'
   },
    {icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on productivity patterns, team performance, and project success metrics.',
      benefit: 'Data-driven improvements'

  constpricingPlans= [
    {name: 'Individual',
      price: '$1 9',
      period: '/month',
      description: 'Perfect for personal use',
      features: [
        'Unlimited personal tasks',
        'Basic AI prioritization',
        'Mobile app access',
        'Basic reporting',
        'Email support',
        '1 year data retention'
      ],
      popular: false
   },
    {name: 'Team',
      price: '$4 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10team members',
        'Advanced AI features',
        'Team collaboration',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        '2 years data retention'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$14 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Premium AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Unlimited data retention',
        'Custom compliance'
      ],
      popular: false

  consttestimonials= [
    {name: 'Rachel Green',
      company: 'Marketing Agency',
      role: 'Project Manager',
      content: 'Task Manager Pro transformed our team productivity. We complete projects40% faster with better quality.',
      rating:5},
    {name: 'Tom Anderson',
      company: 'Software Startup',
      role: 'CEO',
      content: 'The AI prioritization is incredible. It knows exactly what to focus on and when. Our team loves it.',
      rating:5},
    {name: 'Lisa Park',
      company: 'Consulting Firm',
      role: 'Operations Director',

export default TaskManagerProPage
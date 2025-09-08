  const handleSubmit = async ("e": "React.FormEvent) => {;
    timeline: ''}
    );';';';
  const [isSubmitting, setIsSubmitting] = useState<any>(false);',';';
    ';';';
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = (props: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value}))
};
  const handleSubmit = async (e: Reac t.FormEvent) => {';
    e.preventDefault();';';
    setIsSubmitting(true);';';';
    // Simulate form submission';';';';
    try {';';';';';
      await new Promise(resolve => setTimeout(resolve, 2000));',';';';';
    ';';';';';
      setSubmitStatus('success');';';';';';
      setFormData({',';';';';
    ';';';';';
        firstName: '', lastName: '',',';';';';
    ';';';';';
        email: '', company: '',',';';';';
    ';';';';';
        phone: '', service: '',',';';';';
    ';';';';';
        message: '', budget: '',',';';';';
    ';';';';';
        timeline: ''});';';';';';
    } catch (error) {',';';';';
    ';';';';';
      setSubmitStatus('error');';
    } finally {';';
      setIsSubmitting(false);';';';
    }';';';'
};';';';';';
  const services = [',',';';';';
    'AI & Machine Learning', 'Cloud & DevOps',',',';';';';
    'Enterprise Security', 'Digital Transformation',',',';';';';
    'Micro SAAS Services', 'IT Onsite Services',',',';';';';
    'Custom Development', 'Other'';';';';
  ]';';';';';
  const budgets = [',',';';';';
    'Under $10K', '$10K - $50K',',',';';';';
    '$50K - $100K', '$100K - $500K',',',';';';';
    'Over $500K'';';';';
  ]';';';';';
  const timelines = [',';';';';
    ';';';';';
    'Immediate (1-2 weeks)', 'Quick (1-2 months)', 'Standard (3-6 months)', 'Long-term (6+ months)'';';';';';
  ]',';';';';
    ';';';';';
  if (submitStatus === 'success') {
    return (
      <motion.div,
</any>;';';'

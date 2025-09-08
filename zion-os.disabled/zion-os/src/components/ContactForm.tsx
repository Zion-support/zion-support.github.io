
    email:,
  '',;
    comp:  ,'',;
    phone:,

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        name:,
  '',;
        email:  ,'',;
        comp:,
  '',;
        phone:  ,'',;
        service:,

              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>

              value={formData.email}
              onChange={handleChange}
              required;
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,
    s:border-blue-500 transition-colors duration-200';
              placeholder='Enter your email address'/>
          </div>
        </div>'
        <div className='grid grid-cols-1 m,
    d:grid-cols-2 gap-6'>
          <div>'
            <label htmlFor='comp' className='block text-sm font-medium text-gray-700 mb-2'>
              Comp </label>

              value={formData.comp}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-blue-500 transition-colors duration-200';
              placeholder='Enter your comp name'/>
          </div>
          <div>'
            <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
              Phone Number
            </label>

              value={formData.phone}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-blue-500 transition-colors duration-200';
              placeholder='Enter your phone number'/>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Comp </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.comp}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="Enter your comp name"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}

            <option value='other'>Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>

            value={formData.message}

            onChange={handleChange}
            required
            rows={6}

        </button>
      </form>
    </div>
  );
}
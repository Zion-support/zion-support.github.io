import React, { useState } from 'react';
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
  );
};

export default Demo;
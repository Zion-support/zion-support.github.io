import React, { useState } from 'react';''
import Button from '../components/Button';''
import Card from '../components/Card';''
import { useToast } from '../hooks/useToast';'
const Contact: React.FC = () => {
  const { success, error } = useToast();
  const [formData, setFormData] = useState({'
    name: '',''
    email: '',''
    company: '',''
    message: ''')
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
</HTMLInputElement>'
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">"
</div>"
      <div className="container mx-auto px-4 py-16">"
</div>"
        <div className="max-w-4xl mx-auto">"
</div>"
          <div className="text-center mb-16">"
</div>"
            <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>""
            <p className="text-xl text-gray-300">"
</p>
            </p>
          </div>
"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"
</div>
            <Card>
</Card>"
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>""
              <form onSubmit={handleSubmit} className="space-y-6">"
</form>
                <div>
</div>"
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">"
</label>
                  </label>
                  <input;"
                    type="text"""
                    id="name"""
                    name="name""
                    value={formData.name}
                    onChange={handleChange}
                    required;"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"""
                    placeholder="Your name""
                  />
</input>
                </div>

                <div>
</div>"
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">"
</label>
                  </label>
                  <input;"
                    type="email"""
                    id="email"""
                    name="email""
                    value={formData.email}
                    onChange={handleChange}
                    required;"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"""
                    placeholder="your@email.com""
                  />
</input>
                </div>

                <div>
</div>"
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">"
</label>
                  </label>
                  <input;"
                    type="text"""
                    id="company"""
                    name="company""
                    value={formData.company}
                    onChange={handleChange}"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"""
                    placeholder="Your company""
                  />
</input>
                </div>

                <div>
</div>"
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">"
</label>
                  </label>
                  <textarea;"
                    id="message"""
                    name="message""
                    value={formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"""
                    placeholder="Tell us about your project...""
                  />
</textarea>
                </div>
"
                <Button type="submit" variant="primary" size="large" className="w-full">"
</Button>
                </Button>
              </form>
            </Card>"
            <div className="space-y-8">"
</div>
              <Card>
</Card>"
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>""
                <div className="space-y-4">"
</div>"
                  <div className="flex items-center space-x-4">"
</div>"
                    <div className="text-2xl">📧</div>"
                    <div>
</div>"
                      <p className="font-semibold">Email</p>""
                      <p className="text-gray-300">info@ziontechgroup.com</p>"
                    </div>
                  </div>"
                  <div className="flex items-center space-x-4">"
</div>"
                    <div className="text-2xl">📞</div>"
                    <div>
</div>"
                      <p className="font-semibold">Phone</p>""
                      <p className="text-gray-300">+1 (555) 123-4567</p>"
                    </div>
                  </div>"
                  <div className="flex items-center space-x-4">"
</div>"
                    <div className="text-2xl">📍</div>"
                    <div>
</div>"
                      <p className="font-semibold">Address</p>""
                      <p className="text-gray-300">"
</p>
                        123 Tech Street<br />
</br>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
</Card>"
                <h2 className="text-3xl font-bold mb-6">Business Hours</h2>""
                <div className="space-y-2">"
</div>"
                  <div className="flex justify-between">"
</div>
                    <span>Monday - Friday</span>"
                    <span className="text-gray-300">9:00 AM - 6:00 PM</span>"
                  </div>"
                  <div className="flex justify-between">"
</div>
                    <span>Saturday</span>"
                    <span className="text-gray-300">10:00 AM - 4:00 PM</span>"
                  </div>"
                  <div className="flex justify-between">"
</div>
                    <span>Sunday</span>"
                    <span className="text-gray-300">Closed</span>"
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>"
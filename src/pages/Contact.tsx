

  const [formData, setFormData] = useState({
    firstName: '',
  lastName: '',
    email: '',

    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,) => {
  return $3;}
}
    })
};


const handleSubmit = (
    e.preventDefault();

    // Handle form submission
    console.log('Form submitted:', formData);

                  </label>
                  <textarea;"
                    id="message"""
                    name="message""
                    value={formData.message}
                    onChange={handleChange}

                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    required

                      </p>
                    </div>
"
                    <div className="space-y-6" />"
                      <div className="flex items-start" />"
                        <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div />"
                          <h3 className="text-lg font-semibold text-white mb-1" />Email</h3>"
                          <p className="text-gray-300" />kleber@ziontechgroup.com</p>"
                          <p className="text-gray-400 text-sm" />We'll respond within 24 hours</p>
                        </div>
                      </div>
"
                      <div className="flex items-start" />"
                        <Phone className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div />"
                          <h3 className="text-lg font-semibold text-white mb-1" />Phone</h3>"
                          <p className="text-gray-300" />+1 302 464 0950</p>"
                          <p className="text-gray-400 text-sm" />Mon-Fri 9AM-6PM EST</p>
                        </div>
                      </div>
"
                      <div className="flex items-start" />"
                        <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div />"
                          <h3 className="text-lg font-semibold text-white mb-1" />Office</h3>"
                          <p className="text-gray-300" />364 E Main St STE 1008<br />Middletown, DE 19709</p>"
                          <p className="text-gray-400 text-sm" />Visit us by appointment</p>
                        </div>
                      </div>
                    </div>
"
                    <Card className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30" />"
                      <h3 className="text-xl font-semibold text-white mb-3" />Free Consultation</h3>"
                      <p className="text-gray-300 mb-4" />
                        Book a free 30-minute consultation to discuss your project requirements;
and get expert advice on the best solutions for your business.
                      </p>"
                      <Button variant="outline" className="w-full" />
                        Schedule Consultation;
                      </Button>
                    </Card>
"
                    <Card className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30" />"
                      <h3 className="text-xl font-semibold text-white mb-3" />Emergency Support</h3>"
                      <p className="text-gray-300 mb-4" />
                        Need immediate assistance? Our emergency support team is available 24/7;
for critical issues and urgent technical problems.
                      </p>"
                      <div className="flex items-center text-cyan-400 font-semibold" />"
                        <Phone className="w-5 h-5 mr-2" />
                        +1 302 464 0950 (Emergency Line)
                      </div>
                    </Card>
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


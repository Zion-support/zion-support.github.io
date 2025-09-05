import React,{useState} from &apos;react&apos;;&quot; import {Button} from &apos;@/components/ui/button&apos;;&quot; import {Card,CardContent,CardDescription,CardHeader,CardTitle} from &apos;@/components/ui/card&apos;;&quot; import {Input} from &apos;@/components/ui/input&apos;;&quot; import {Textarea} from &apos;@/components/ui/textarea&apos;;&quot; import {Label} from &apos;@/components/ui/label&apos;;&quot; import { Phone,Mail,MapPin,Globe,Users,Shield,CheckCircle,ExternalLink,Send,Building,Award,TrendingUp,Star,MessageSquare,Calendar,FileText import { SERVICE_CATEGORIES } from &apos;@/data/enhancedServices&apos;; export default function ComprehensiveContact($1) {} const [formData,setFormData] = useState({} &apos; &quot; &quot; name: &quot;,&quot; email: &quot;,&quot; comp: &quot;,&quot; phone: &quot;,&quot; service: &quot;,&quot; message: &quot; };) ;&apos;; const handleSubmit = (props) => {}; e.preventDefault();&apos; };&apos; const handleChange = (props) => {} setFormData({}; ...formData,[e.target.name]: e.target.value})}; return (<div className=&quot;min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark&quot;>&quot; {}&quot; <div className=&quot;relative overflow-hidden&quot;>&quot; <div className=&quot;absolute inset-0 bg-black/20&quot;></div>&quot; <div className=&quot;relative z-10 container mx-auto px-4 py-20 text-center text-white&quot;>&quot; <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent&quot;> Contact Zion Tech Group&quot;; </h1>&quot;;&apos;; <p className=&quot;text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto&quot;>&apos; Ready to Transform Your Business? Let&apos;s Discuss Your Technology Needs&quot; </p>&quot; <p className=&quot;text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto&quot;> Our team of experts is here to help you navigate the digital transformation journey and implement cutting-edge solutions.&quot; </p>&quot; <p className=&quot;text-lg text-zion - cyan - light mb-12 max - w-3xl mx -auto&quot;> Our team of experts is here to help you navigate the digital transformation journey and implement cutting - edge solutions.</p> </div> </div> &quot; {}&quot; <div className=&quot;container mx-auto px-4 py-16&quot;>&quot; <div className=&quot;grid lg:grid-cols-2 gap-16&quot;> {}&quot; <div>&quot; <Card className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30&quot;>&quot; <CardHeader>&quot;; <CardTitle className=&quot;text-2xl text-white&quot;>Get In Touch</CardTitle>&quot;;&apos;; <CardDescription className=&quot;text-zion-cyan-light&quot;>&apos; Fill out the form below and we&apos;ll get back to you within 24 hours. </CardDescription> </CardHeader>&quot; <CardContent>&quot; <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>&quot; <div className=&quot;grid md:grid-cols-2 gap-4&quot;>&quot; <div>&quot; <Label htmlFor=&quot;name&quot; className=&quot;text-white&quot;>Full Name *</Label>&quot; <Input id=&quot;name&quot; name=&quot;name&quot; value={formData.name} onChange={handleChange} required className=&quot;bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light&quot; placeholder=&quot;Enter your full name&quot; /> </div>&quot; <div>&quot; <Label htmlFor=&quot;email&quot; className=&quot;text-white&quot;>Email Address *</Label>&quot; <Input id=&quot;email&quot; name=&quot;email&quot; type=&quot;email&quot; value={formData.email} onChange={handleChange} required className=&quot;bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light&quot; placeholder=&quot;Enter your email&quot; /> </div> </div>&quot; &quot; <div className=&quot;grid md:grid-cols-2 gap-4&quot;>&quot; <div>&quot; <Label htmlFor=&quot;comp&quot; className=&quot;text-white&quot;>Company</Label>&quot; <Input id=&quot;comp&quot; name=&quot;comp&quot; value={formData.comp} onChange={handleChange} className=&quot;bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light&quot; placeholder=&quot;Enter comp name&quot; /> </div>&quot; <div>&quot; <Label htmlFor=&quot;phone&quot; className=&quot;text-white&quot;>Phone Number</Label>&quot; <Input id=&quot;phone&quot; name=&quot;phone&quot; value={formData.phone} onChange={handleChange} className=&quot;bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light&quot; placeholder=&quot;Enter phone number&quot; /> </div> </div> &quot; <div>&quot; <Label htmlFor=&quot;service&quot; className=&quot;text-white&quot;>Service Interest</Label>&quot; <select id=&quot;service&quot; name=&quot;service&quot; value={formData.service} onChange={handleChange} className=&quot;w-full p-3 rounded-md bg-white/10 border border-zion-cyan/30 text-white&quot;>&quot; <option value=&quot;>Select a service</option>&quot; <option value=&quot;ai-automation&quot;>AI & Automation</option>&quot; <option value=&quot;cybersecurity&quot;>Cybersecurity</option>&quot; <option value=&quot;cloud-services&quot;>Cloud Services</option>&quot; <option value=&quot;data-analytics&quot;>Data & Analytics</option>&quot; <option value=&quot;digital-transformation&quot;>Digital Transformation</option>&quot; <option value=&quot;emerging-tech&quot;>Emerging Technologies</option>&quot; <option value=&quot;business-intelligence&quot;>Business Intelligence</option>&quot; <option value=&quot;it-onsite&quot;>IT Onsite Services</option>&quot; <option value=&quot;other&quot;>Other</option> </select> </div> &quot; <div>&quot; <Label htmlFor=&quot;message&quot; className=&quot;text-white&quot;>Message *</Label>&quot; <Textarea id=&quot;message&quot; name=&quot;message&quot; value={formData.message} onChange={handleChange} required rows={5} className=&quot;bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light&quot; placeholder=&quot;Tell us about your project or requirements...&quot; /> </div>&quot; &quot; <Button type=&quot;submit&quot; className=&quot;w-full bg-zion-purple hover:bg-zion-purple-dark text-white py-3&quot;>&quot; <Send className=&quot;mr-2 h-5 w-5&quot; /> Send Message; </Button> </form> </CardContent> </Card> </div> &quot; {}&quot; <div className=&quot;space-y-8&quot;>&quot; <div>&quot; <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Contact Information</h2>&quot; <div className=&quot;space-y-6&quot;>&quot; <div className=&quot;flex items-start gap-4&quot;>&quot; <Phone className=&quot;h-6 w-6 text-zion-cyan mt-1&quot; />&quot; <div>&quot; <h3 className=&quot;font-semibold text-white&quot;>Phone</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;>+1 302 464 0950</p>&quot; <p className=&quot;text-sm text-zion-cyan-light&quot;>Mon-Fri 9AM-6PM EST</p> </div> </div>&quot; &quot; <div className=&quot;flex items-start gap-4&quot;>&quot; <Mail className=&quot;h-6 w-6 text-zion-cyan mt-1&quot; />&quot; <div>&quot; <h3 className=&quot;font-semibold text-white&quot;>Email</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;>kleber@ziontechgroup.com</p>&quot; <p className=&quot;text-sm text-zion-cyan-light&quot;>24/7 Response</p> </div> </div>&quot; &quot; <div className=&quot;flex items-start gap-4&quot;>&quot; <MapPin className=&quot;h-6 w-6 text-zion-cyan mt-1&quot; />&quot; <div>&quot; <h3 className=&quot;font-semibold text-white&quot;>Address</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;>364 E Main St STE 1008</p>&quot; <p className=&quot;text-zion-cyan-light&quot;>Middletown DE 19709</p> </div> </div>&quot; &quot; <div className=&quot;flex items-start gap-4&quot;>&quot; <Globe className=&quot;h-6 w-6 text-zion-cyan mt-1&quot; />&quot; <div>&quot; <h3 className=&quot;font-semibold text-white&quot;>Website</h3>&quot; <a href=&quot;https: ziontechgroup.com; </a> </div> </div> </div> </div> {}&quot; <div>&quot; <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Quick Actions</h3>&quot; <div className=&quot;space-y-3&quot;>&quot; <Button variant=&quot;outline&quot; className=&quot;w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;>&quot; <Calendar className=&quot;mr-2 h-4 w-4&quot; /> Schedule a Consultation&quot; </Button>&quot; <Button variant=&quot;outline&quot; className=&quot;w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;>&quot; <FileText className=&quot;mr-2 h-4 w-4&quot; /> Request a Quote&quot; </Button>&quot; <Button variant=&quot;outline&quot; className=&quot;w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;>&quot; <MessageSquare className=&quot;mr-2 h-4 w-4&quot; /> Live Chat Support; </Button> </div> </div> </div> </div> </div> &quot; {}&quot; <div className=&quot;bg-white/5 backdrop-blur-sm py-16&quot;>&quot; <div className=&quot;container mx-auto px-4&quot;>&quot; <div className=&quot;text-center mb-16&quot;>&quot; <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our Service Portfolio</h2>&quot; <p className=&quot;text-xl text-zion-cyan-light max-w-3xl mx-auto&quot;> Comprehensive technology solutions designed to drive your business forward in the digital age. </p> </div>&quot; &quot; <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>&quot; {SERVICE_CATEGORIES.map((category) => (<Card key={category.id} className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300&quot;>&quot; <CardHeader className=&quot;text-center&quot;>&quot; <div className=&quot;text-4xl mb-4&quot;>{category.icon}</div>&quot; <CardTitle className=&quot;text-white&quot;>{category.name}</CardTitle>&quot; <CardDescription className=&quot;text-zion-cyan-light&quot;> {category.description} </CardDescription> </CardHeader>&quot; <CardContent>&quot; <div className=&quot;space-y-2&quot;>&quot; {category.services.slice(0,3).map((service) => (<div key={service.id} className=&quot;flex items-center gap-2 text-sm&quot;>&quot; <CheckCircle className=&quot;h-3 w-3 text-green-400&quot; />&quot; <span className=&quot;text-zion-cyan-light&quot;>{service.title}</span> </div>))}&quot; </div>&quot; <Button variant=&quot;outline&quot; className=&quot;w-full mt-4 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;> View Services; </Button> </CardContent> </Card>) ) } </div> </div> </div> &quot; {}&quot; <div className=&quot;container mx-auto px-4 py-16&quot;>&quot; <div className=&quot;text-center mb-16&quot;>&quot; <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Why Choose Zion Tech Group?</h2>&quot; <p className=&quot;text-xl text-zion-cyan-light max-w-3xl mx-auto&quot;> We combine cutting-edge technology with proven expertise to deliver exceptional results. </p> </div>&quot; &quot; <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>&quot; <Card className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center&quot;>&quot; <CardContent className=&quot;p-8&quot;>&quot; <Award className=&quot;h-16 w-16 mx-auto mb-4 text-zion-cyan&quot; />&quot; <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Proven Expertise</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;> Years of experience delivering successful technology solutions across industries. </p> </CardContent> </Card>&quot; &quot; <Card className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center&quot;>&quot; <CardContent className=&quot;p-8&quot;>&quot; <Shield className=&quot;h-16 w-16 mx-auto mb-4 text-zion-cyan&quot; />&quot; <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Custom Solutions</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;> Tailored approaches that address your specific business challenges and goals. </p> </CardContent> </Card>&quot; &quot; <Card className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center&quot;>&quot; <CardContent className=&quot;p-8&quot;>&quot; <TrendingUp className=&quot;h-16 w-16 mx-auto mb-4 text-zion-cyan&quot; />&quot; <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Measurable Results</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;> Trackable outcomes and ROI that demonstrate the value of our solutions. </p> </CardContent> </Card>&quot; &quot; <Card className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center&quot;>&quot; <CardContent className=&quot;p-8&quot;>&quot; <Users className=&quot;h-16 w-16 mx-auto mb-4 text-zion-cyan&quot; />&quot; <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Dedicated Support</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;> 24/7 support and ongoing partnership to ensure your success. </p> </CardContent> </Card>&quot; &quot; <Card className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center&quot;>&quot; <CardContent className=&quot;p-8&quot;>&quot; <Building className=&quot;h-16 w-16 mx-auto mb-4 text-zion-cyan&quot; />&quot; <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Enterprise Ready</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;> Solutions that scale with your business and meet enterprise standards. </p> </CardContent> </Card>&quot; &quot; <Card className=&quot;bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center&quot;>&quot; <CardContent className=&quot;p-8&quot;>&quot; <Star className=&quot;h-16 w-16 mx-auto mb-4 text-zion-cyan&quot; />&quot; <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Quality Assured</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;> Rigorous testing and quality assurance processes for reliable solutions. </p> </CardContent> </Card> </div> </div> &quot; {}&quot; <div className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16&quot;>&quot; <div className=&quot;container mx-auto px-4 text-center&quot;>&quot; <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;> Ready to Get Started?&quot;; </h2>&quot;;&apos;; <p className=&quot;text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto&quot;>&apos; Let&apos;s discuss how our innovative solutions can transform your business and drive growth.&quot; </p>&quot; <div className=&quot;flex flex-wrap justify-center gap-4&quot;>&quot; <Button size=&quot;lg&quot; className=&quot;bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3&quot;>&quot; <Phone className=&quot;mr-2 h-5 w-5&quot; /> Call Now: +1 302 464 0950&quot; </Button>&quot; <Button size=&quot;lg&quot; variant=&quot;outline&quot; className=&quot;border-white text-white hover:bg-white/10 px-8 py-3&quot;>&quot; <Mail className=&quot;mr-2 h-5 w-5&quot; /> Email: kleber@ziontechgroup.com; </Button> </div> </div> </div> &quot; {}&quot; <footer className=&quot;bg-zion-blue-dark py-12&quot;>&quot; <div className=&quot;container mx-auto px-4&quot;>&quot; <div className=&quot;grid md:grid-cols-4 gap-8&quot;>&quot; <div>&quot; <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Zion Tech Group</h3>&quot; <p className=&quot;text-zion-cyan-light&quot;> Premier IT services and AI solutions provider helping businesses thrive in the digital age. </p> </div>&quot; <div>&quot; <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Contact</h4>&quot; <div className=&quot;space-y-2 text-zion-cyan-light&quot;> <p>+1 302 464 0950</p> <p > kleber@ziontechgroup.com</p> <p > 364 E Main St STE 1008 < br />Middletown DE 19709</p> </div> </div>&quot; <div>&quot; <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Services</h4>&quot; <div className=&quot;space-y-2 text-zion-cyan-light&quot;> <p>AI & Automation</p> <p>Cybersecurity</p> <p>Cloud Services</p> <p>Data Analytics</p> <p>Digital Transformation</p> </div> </div>&quot; <div>&quot; <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Connect</h4>&quot; <div className=&quot;space-y-2&quot;>&quot; <a href=&quot;https: <Globe className=&quot;h-4 w-4 mr-2&quot; /> Website&quot; </a>&quot; <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;>&quot; <ExternalLink className=&quot;h-4 w-4 mr-2&quot; /> View All Services; </Button> </div> </div>&quot; </div>&quot; <div className=&quot;border-t border-zion-blue-light mt-8 pt-8 text-center text-zion-cyan-light&quot;> <p>&copy; 2024 Zion Tech Group. All rights reserved.</p> </div> </div> </footer> </div> )} export {ComprehensiveContact}; export {ComprehensiveContact}; export {ComprehensiveContact}; export {ComprehensiveContact}; export {ComprehensiveContact};&apos;; ;&apos;;&apos;;
import React, {useState} from 'react';"
import {Button} from '@/components/ui/button';"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';"
import {Input} from '@/components/ui/input';"
import {Textarea} from '@/components/ui/textarea';"
import {Label} from '@/components/ui/label';"
import { Phone, Mail, MapPin, Globe, Users, Shield, CheckCircle, ExternalLink, Send, Building, Award, TrendingUp, Star, MessageSquare, Calendar, FileText import { SERVICE_CATEGORIES } from '@/data/enhancedServices';
export default function ComprehensiveContact($1) {}
    const [formData, setFormData] = useState({}
'
"
"
        "name": ","
        "email": ","
        "comp": ","
        "phone": ","
        "service": ","
        "message": "
    };) ;';
    const handleSubmit = (props) => {};
        e.preventDefault();'
        // Handle form submission"
        // // // // // // // //
    };'
        // };
    const handleChange = (props) => {}
        setFormData({};
            ...formData,
            [e.target.name]: e.target.value;
        })};
    return (<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">"
      {/* Hero Section */}"
      <div className="relative overflow-hidden">"
        <div className="absolute inset-0 bg-black/20"></div>"
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">"
          <h1 className="text-5xl "md": text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Contact Zion Tech Group";
          </h1>";';
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">'
            Ready to Transform Your Business? Let's Discuss Your Technology Needs"
          </p>"
          <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
            Our team of experts is here to help you navigate the digital transformation journey and implement cutting-edge solutions."
          </p>"
          <p className="text-lg text-zion - cyan - light mb-12 max - w-3xl mx -auto">
            Our team of experts is here to help you navigate the digital transformation journey and implement cutting - edge solutions.</p>
        </div>
      </div>
"
      {/* Contact Information */}"
      <div className="container mx-auto px-4 py-16">"
        <div className="grid "lg": grid-cols-2 gap-16">
          {/* Contact Form */}"
          <div>"
            <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">"
              <CardHeader>";
                <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>";';
                <CardDescription className="text-zion-cyan-light">'
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>"
              <CardContent>"
                <form onSubmit={handleSubmit} className="space-y-6">"
                  <div className="grid "md": grid-cols-2 gap-4">"
                    <div>"
                      <Label htmlFor="name" className="text-white">Full Name *</Label>"
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white/10 border-zion-cyan/30 text-white "placeholder": text-zion-cyan-light" placeholder="Enter your full name"  />
                    </div>"
                    <div>"
                      <Label htmlFor="email" className="text-white">Email Address *</Label>"
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/10 border-zion-cyan/30 text-white "placeholder": text-zion-cyan-light" placeholder="Enter your email"  />
                    </div>
                  </div>"
"
                  <div className="grid md:grid-cols-2 gap-4">"
                    <div>"
                      <Label htmlFor="comp" className="text-white">Company</Label>"
                      <Input id="comp" name="comp" value={formData.comp} onChange={handleChange} className="bg-white/10 border-zion-cyan/30 text-white "placeholder": text-zion-cyan-light" placeholder="Enter comp name"  />
                    </div>"
                    <div>"
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>"
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-white/10 border-zion-cyan/30 text-white "placeholder": text-zion-cyan-light" placeholder="Enter phone number"  />
                    </div>
                  </div>
"
                  <div>"
                    <Label htmlFor="service" className="text-white">Service Interest</Label>"
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full p-3 rounded-md bg-white/10 border border-zion-cyan/30 text-white">"
                      <option value=">Select a service</option>"
                      <option value="ai-automation">AI & Automation</option>"
                      <option value="cybersecurity">Cybersecurity</option>"
                      <option value="cloud-services">Cloud Services</option>"
                      <option value="data-analytics">Data & Analytics</option>"
                      <option value="digital-transformation">Digital Transformation</option>"
                      <option value="emerging-tech">Emerging Technologies</option>"
                      <option value="business-intelligence">Business Intelligence</option>"
                      <option value="it-onsite">IT Onsite Services</option>"
                      <option value="other">Other</option>
                    </select>
                  </div>
"
                  <div>"
                    <Label htmlFor="message" className="text-white">Message *</Label>"
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-white/10 border-zion-cyan/30 text-white "placeholder": text-zion-cyan-light" placeholder="Tell us about your project or requirements..." />
                  </div>"
"
                  <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white py-3">"
                    <Send className="mr-2 h-5 w-5" />
                    Send Message;
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
"
          {/* Contact Details */}"
          <div className="space-y-8">"
            <div>"
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>"
              <div className="space-y-6">"
                <div className="flex items-start gap-4">"
                  <Phone className="h-6 w-6 text-zion-cyan mt-1" />"
                  <div>"
                    <h3 className="font-semibold text-white">Phone</h3>"
                    <p className="text-zion-cyan-light">+1 302 464 0950</p>"
                    <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>"
"
                <div className="flex items-start gap-4">"
                  <Mail className="h-6 w-6 text-zion-cyan mt-1" />"
                  <div>"
                    <h3 className="font-semibold text-white">Email</h3>"
                    <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>"
                    <p className="text-sm text-zion-cyan-light">24/7 Response</p>
                  </div>
                </div>"
"
                <div className="flex items-start gap-4">"
                  <MapPin className="h-6 w-6 text-zion-cyan mt-1" />"
                  <div>"
                    <h3 className="font-semibold text-white">Address</h3>"
                    <p className="text-zion-cyan-light">364 E Main St STE 1008</p>"
                    <p className="text-zion-cyan-light">Middletown DE 19709</p>
                  </div>
                </div>"
"
                <div className="flex items-start gap-4">"
                  <Globe className="h-6 w-6 text-zion-cyan mt-1" />"
                  <div>"
                    <h3 className="font-semibold text-white">Website</h3>"
                    <a href=""https": //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light underline">
                      ziontechgroup.com;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Actions */}"
            <div>"
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>"
              <div className="space-y-3">"
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan "hover": bg-zion-cyan/10">"
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Consultation"
                </Button>"
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">"
                  <FileText className="mr-2 h-4 w-4" />
                  Request a Quote"
                </Button>"
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">"
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Live Chat Support;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
"
      {/* Services Overview */}"
      <div className="bg-white/5 backdrop-blur-sm py-16">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-6">Our Service Portfolio</h2>"
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward in the digital age.
            </p>
          </div>"
"
          <div className="grid "md": grid-cols-2 lg:grid-cols-4 gap-6">"
            {SERVICE_CATEGORIES.map((category) => (<Card key={category.id} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 "hover": border-zion-cyan/60 transition-all duration-300">"
                <CardHeader className="text-center">"
                  <div className="text-4xl mb-4">{category.icon}</div>"
                  <CardTitle className="text-white">{category.name}</CardTitle>"
                  <CardDescription className="text-zion-cyan-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>"
                <CardContent>"
                  <div className="space-y-2">"
                    {category.services.slice(0, 3).map((service) => (<div key={service.id} className="flex items-center gap-2 text-sm">"
                        <CheckCircle className="h-3 w-3 text-green-400" />"
                        <span className="text-zion-cyan-light">{service.title}</span>
                      </div>))}"
                  </div>"
                  <Button variant="outline" className="w-full mt-4 border-zion-cyan text-zion-cyan "hover": bg-zion-cyan/10">
                    View Services;
                  </Button>
                </CardContent>
              </Card>) ) }
          </div>
        </div>
      </div>
"
      {/* Why Choose Us */}"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>"
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results.
          </p>
        </div>"
"
        <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-8">"
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">"
            <CardContent className="p-8">"
              <Award className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />"
              <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>"
              <p className="text-zion-cyan-light">
                Years of experience delivering successful technology solutions across industries.
              </p>
            </CardContent>
          </Card>"
"
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">"
            <CardContent className="p-8">"
              <Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />"
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>"
              <p className="text-zion-cyan-light">
                Tailored approaches that address your specific business challenges and goals.
              </p>
            </CardContent>
          </Card>"
"
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">"
            <CardContent className="p-8">"
              <TrendingUp className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />"
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>"
              <p className="text-zion-cyan-light">
                Trackable outcomes and ROI that demonstrate the value of our solutions.
              </p>
            </CardContent>
          </Card>"
"
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">"
            <CardContent className="p-8">"
              <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />"
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Support</h3>"
              <p className="text-zion-cyan-light">
                24/7 support and ongoing partnership to ensure your success.
              </p>
            </CardContent>
          </Card>"
"
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">"
            <CardContent className="p-8">"
              <Building className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />"
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Ready</h3>"
              <p className="text-zion-cyan-light">
                Solutions that scale with your business and meet enterprise standards.
              </p>
            </CardContent>
          </Card>"
"
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">"
            <CardContent className="p-8">"
              <Star className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />"
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assured</h3>"
              <p className="text-zion-cyan-light">
                Rigorous testing and quality assurance processes for reliable solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
"
      {/* CTA Section */}"
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">"
        <div className="container mx-auto px-4 text-center">"
          <h2 className="text-4xl "md": text-5xl font-bold text-white mb-6">
            Ready to Get Started?";
          </h2>";';
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">'
            Let's discuss how our innovative solutions can transform your business and drive growth."
          </p>"
          <div className="flex flex-wrap justify-center gap-4">"
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">"
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 302 464 0950"
            </Button>"
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">"
              <Mail className="mr-2 h-5 w-5" />
              Email: kleber@ziontechgroup.com;
            </Button>
          </div>
        </div>
      </div>
"
      {/* Footer */}"
      <footer className="bg-zion-blue-dark py-12">"
        <div className="container mx-auto px-4">"
          <div className="grid "md": grid-cols-4 gap-8">"
            <div>"
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>"
              <p className="text-zion-cyan-light">
                Premier IT services and AI solutions provider helping businesses thrive in the digital age.
              </p>
            </div>"
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>"
              <div className="space-y-2 text-zion-cyan-light">
                <p>+1 302 464 0950</p>
                <p > kleber@ziontechgroup.com</p>
                <p > 364 E Main St STE 1008 < br />Middletown DE 19709</p>
              </div>
            </div>"
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>"
              <div className="space-y-2 text-zion-cyan-light">
                <p>AI & Automation</p>
                <p>Cybersecurity</p>
                <p>Cloud Services</p>
                <p>Data Analytics</p>
                <p>Digital Transformation</p>
              </div>
            </div>"
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>"
              <div className="space-y-2">"
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-zion-cyan hover:text-zion-cyan-light">"
                  <Globe className="h-4 w-4 mr-2" />
                  Website"
                </a>"
                <Button variant="outline" size="sm" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">"
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Services;
                </Button>
              </div>
            </div>"
          </div>"
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center text-zion-cyan-light">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </div>
  );
}
export {ComprehensiveContact};
export {ComprehensiveContact};
export {ComprehensiveContact};
export {ComprehensiveContact};
export {ComprehensiveContact};';';';
import React,{useState} from 'react';" import {Button} from '@/components/ui/button';" import {Card,CardContent,CardDescription,CardHeader,CardTitle} from '@/components/ui/card';" import {Input} from '@/components/ui/input';" import {Textarea} from '@/components/ui/textarea';" import {Label} from '@/components/ui/label';" import { Phone,Mail,MapPin,Globe,Users,Shield,CheckCircle,ExternalLink,Send,Building,Award,TrendingUp,Star,MessageSquare,Calendar,FileText import { SERVICE_CATEGORIES } from '@/data/enhancedServices'; export default function ComprehensiveContact($1) {} const [formData,setFormData] = useState({} ' " " name: "," email: "," comp: "," phone: "," service: "," message: " };) ;'; const handleSubmit = (props) => {}; e.preventDefault();' };' const handleChange = (props) => {} setFormData({}; ...formData,[e.target.name]: e.target.value})}; return (<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">" {}" <div className="relative overflow-hidden">" <div className="absolute inset-0 bg-black/20"></div>" <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">" <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Contact Zion Tech Group"; </h1>";'; <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">' Ready to Transform Your Business? Let's Discuss Your Technology Needs" </p>" <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto"> Our team of experts is here to help you navigate the digital transformation journey and implement cutting-edge solutions." </p>" <p className="text-lg text-zion - cyan - light mb-12 max - w-3xl mx -auto"> Our team of experts is here to help you navigate the digital transformation journey and implement cutting - edge solutions.</p> </div> </div> " {}" <div className="container mx-auto px-4 py-16">" <div className="grid lg:grid-cols-2 gap-16"> {}" <div>" <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">" <CardHeader>"; <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>";'; <CardDescription className="text-zion-cyan-light">' Fill out the form below and we'll get back to you within 24 hours. </CardDescription> </CardHeader>" <CardContent>" <form onSubmit={handleSubmit} className="space-y-6">" <div className="grid md:grid-cols-2 gap-4">" <div>" <Label htmlFor="name" className="text-white">Full Name *</Label>" <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light" placeholder="Enter your full name" /> </div>" <div>" <Label htmlFor="email" className="text-white">Email Address *</Label>" <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light" placeholder="Enter your email" /> </div> </div>" " <div className="grid md:grid-cols-2 gap-4">" <div>" <Label htmlFor="comp" className="text-white">Company</Label>" <Input id="comp" name="comp" value={formData.comp} onChange={handleChange} className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light" placeholder="Enter comp name" /> </div>" <div>" <Label htmlFor="phone" className="text-white">Phone Number</Label>" <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light" placeholder="Enter phone number" /> </div> </div> " <div>" <Label htmlFor="service" className="text-white">Service Interest</Label>" <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full p-3 rounded-md bg-white/10 border border-zion-cyan/30 text-white">" <option value=">Select a service</option>" <option value="ai-automation">AI & Automation</option>" <option value="cybersecurity">Cybersecurity</option>" <option value="cloud-services">Cloud Services</option>" <option value="data-analytics">Data & Analytics</option>" <option value="digital-transformation">Digital Transformation</option>" <option value="emerging-tech">Emerging Technologies</option>" <option value="business-intelligence">Business Intelligence</option>" <option value="it-onsite">IT Onsite Services</option>" <option value="other">Other</option> </select> </div> " <div>" <Label htmlFor="message" className="text-white">Message *</Label>" <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light" placeholder="Tell us about your project or requirements..." /> </div>" " <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white py-3">" <Send className="mr-2 h-5 w-5" /> Send Message; </Button> </form> </CardContent> </Card> </div> " {}" <div className="space-y-8">" <div>" <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>" <div className="space-y-6">" <div className="flex items-start gap-4">" <Phone className="h-6 w-6 text-zion-cyan mt-1" />" <div>" <h3 className="font-semibold text-white">Phone</h3>" <p className="text-zion-cyan-light">+1 302 464 0950</p>" <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p> </div> </div>" " <div className="flex items-start gap-4">" <Mail className="h-6 w-6 text-zion-cyan mt-1" />" <div>" <h3 className="font-semibold text-white">Email</h3>" <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>" <p className="text-sm text-zion-cyan-light">24/7 Response</p> </div> </div>" " <div className="flex items-start gap-4">" <MapPin className="h-6 w-6 text-zion-cyan mt-1" />" <div>" <h3 className="font-semibold text-white">Address</h3>" <p className="text-zion-cyan-light">364 E Main St STE 1008</p>" <p className="text-zion-cyan-light">Middletown DE 19709</p> </div> </div>" " <div className="flex items-start gap-4">" <Globe className="h-6 w-6 text-zion-cyan mt-1" />" <div>" <h3 className="font-semibold text-white">Website</h3>" <a href="https: ziontechgroup.com; </a> </div> </div> </div> </div> {}" <div>" <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>" <div className="space-y-3">" <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">" <Calendar className="mr-2 h-4 w-4" /> Schedule a Consultation" </Button>" <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">" <FileText className="mr-2 h-4 w-4" /> Request a Quote" </Button>" <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">" <MessageSquare className="mr-2 h-4 w-4" /> Live Chat Support; </Button> </div> </div> </div> </div> </div> " {}" <div className="bg-white/5 backdrop-blur-sm py-16">" <div className="container mx-auto px-4">" <div className="text-center mb-16">" <h2 className="text-4xl font-bold text-white mb-6">Our Service Portfolio</h2>" <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"> Comprehensive technology solutions designed to drive your business forward in the digital age. </p> </div>" " <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">" {SERVICE_CATEGORIES.map((category) => (<Card key={category.id} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">" <CardHeader className="text-center">" <div className="text-4xl mb-4">{category.icon}</div>" <CardTitle className="text-white">{category.name}</CardTitle>" <CardDescription className="text-zion-cyan-light"> {category.description} </CardDescription> </CardHeader>" <CardContent>" <div className="space-y-2">" {category.services.slice(0,3).map((service) => (<div key={service.id} className="flex items-center gap-2 text-sm">" <CheckCircle className="h-3 w-3 text-green-400" />" <span className="text-zion-cyan-light">{service.title}</span> </div>))}" </div>" <Button variant="outline" className="w-full mt-4 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"> View Services; </Button> </CardContent> </Card>) ) } </div> </div> </div> " {}" <div className="container mx-auto px-4 py-16">" <div className="text-center mb-16">" <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>" <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"> We combine cutting-edge technology with proven expertise to deliver exceptional results. </p> </div>" " <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">" <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">" <CardContent className="p-8">" <Award className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />" <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>" <p className="text-zion-cyan-light"> Years of experience delivering successful technology solutions across industries. </p> </CardContent> </Card>" " <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">" <CardContent className="p-8">" <Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />" <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>" <p className="text-zion-cyan-light"> Tailored approaches that address your specific business challenges and goals. </p> </CardContent> </Card>" " <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">" <CardContent className="p-8">" <TrendingUp className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />" <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>" <p className="text-zion-cyan-light"> Trackable outcomes and ROI that demonstrate the value of our solutions. </p> </CardContent> </Card>" " <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">" <CardContent className="p-8">" <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />" <h3 className="text-2xl font-bold text-white mb-4">Dedicated Support</h3>" <p className="text-zion-cyan-light"> 24/7 support and ongoing partnership to ensure your success. </p> </CardContent> </Card>" " <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">" <CardContent className="p-8">" <Building className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />" <h3 className="text-2xl font-bold text-white mb-4">Enterprise Ready</h3>" <p className="text-zion-cyan-light"> Solutions that scale with your business and meet enterprise standards. </p> </CardContent> </Card>" " <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">" <CardContent className="p-8">" <Star className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />" <h3 className="text-2xl font-bold text-white mb-4">Quality Assured</h3>" <p className="text-zion-cyan-light"> Rigorous testing and quality assurance processes for reliable solutions. </p> </CardContent> </Card> </div> </div> " {}" <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">" <div className="container mx-auto px-4 text-center">" <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> Ready to Get Started?"; </h2>";'; <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">' Let's discuss how our innovative solutions can transform your business and drive growth." </p>" <div className="flex flex-wrap justify-center gap-4">" <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">" <Phone className="mr-2 h-5 w-5" /> Call Now: +1 302 464 0950" </Button>" <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">" <Mail className="mr-2 h-5 w-5" /> Email: kleber@ziontechgroup.com; </Button> </div> </div> </div> " {}" <footer className="bg-zion-blue-dark py-12">" <div className="container mx-auto px-4">" <div className="grid md:grid-cols-4 gap-8">" <div>" <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>" <p className="text-zion-cyan-light"> Premier IT services and AI solutions provider helping businesses thrive in the digital age. </p> </div>" <div>" <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>" <div className="space-y-2 text-zion-cyan-light"> <p>+1 302 464 0950</p> <p > kleber@ziontechgroup.com</p> <p > 364 E Main St STE 1008 < br />Middletown DE 19709</p> </div> </div>" <div>" <h4 className="text-lg font-semibold text-white mb-4">Services</h4>" <div className="space-y-2 text-zion-cyan-light"> <p>AI & Automation</p> <p>Cybersecurity</p> <p>Cloud Services</p> <p>Data Analytics</p> <p>Digital Transformation</p> </div> </div>" <div>" <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>" <div className="space-y-2">" <a href="https: <Globe className="h-4 w-4 mr-2" /> Website" </a>" <Button variant="outline" size="sm" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">" <ExternalLink className="h-4 w-4 mr-2" /> View All Services; </Button> </div> </div>" </div>" <div className="border-t border-zion-blue-light mt-8 pt-8 text-center text-zion-cyan-light"> <p>&copy; 2024 Zion Tech Group. All rights reserved.</p> </div> </div> </footer> </div> )} export {ComprehensiveContact}; export {ComprehensiveContact}; export {ComprehensiveContact}; export {ComprehensiveContact}; export {ComprehensiveContact};'; ;';';





import React, { useState } from 'react;
<:src_backup/components/ContactSection.tsx
=

>import React, { useState } from react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ',
    email: ',
    subject: ',
    message: '
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact, {
        method: POST",
        headers: { "Content-Type: application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message);
      }

      setSubmitted(true);
      setFormData({ name: ', email: ', subject: ', message: ' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error(Error submitting form:', error);
      alert('Failed to send message. Please try again.);
    } finally {
      setIsSubmitting(false);
    }
  }

<:src_backup/components/ContactSection.tsx
=fetch(/api/contact", {
      method: "POST
      headers: { Content-Type": "application/json }
      body: JSON.stringify(formData)})
      .then(async (res) => {

          const data = await res.json().catch(() => ({}));          throw new Error(data.error || Failed to send message")
        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message)

        }
        toast({
          title: Message Sent",
          description: "Weve received your message and will get back to you soon.}),

        setIsSubmitting(false),
        if (!res.ok) {
          throw new Error(data.error || Failed to send message")
        }
        toast({
          title: "Message Sent,
          description: We've received your message and will get back to you soon."}),

        setSubmitted(true),
        setTimeout(() => setSubmitted(false), 2000),
        setFormData({ name: ", email: ", subject: ", message: " })
      })
      .catch((err) => {
        setIsSubmitting(false),
        toast({

          title: "Submission Error,
          description: err.message,
          variant: destructive"})
      })


import { useState } from "react,
import { GradientHeading } from @/components/GradientHeading",
import { Button } from "@/components/ui/button,
import { Input } from @/components/ui/input",
import { Textarea } from "@/components/ui/textarea,
import { toast } from @/components/ui/use-toast";
import z from "zod;
import { Mail } from 'lucide-react


  const handleChange = null;

  return (
    <section className=py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl>
        <div className=text-center mb-12">
          <h2 className="text-4xl font-bold mb-4>Get In Touch</h2>
          <p className=text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Lets discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12>
import { Mail, Phone, MapPin, Clock  } from 'lucide-react';
const ContactSection: React.FC = () => {const [formData, setFormData] = useState({name: ,email: '',company: ,subject: '',message: ;
  })const [isSubmitting, setIsSubmitting] = useState(false)const [submitted, setSubmitted]  = useState(false)const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)try {const response = await fetch(/api/contact", {method: "POST,headers: { Content-Type": "application/json },body: JSON.stringify(formData)})if (!response.ok) {const data = await response.json().catch(() => ({}))throw new Error(data.error || Failed to send message")}setSubmitted(true)setFormData({ name: '', email: , company: '', subject: , message: '' })setTimeout(() => setSubmitted(false), 3000)} catch (error) {console.error(Error submitting form:, error)alert('Failed to send message. Please try again.')} finally {setIsSubmitting(false)}
  }return (<section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white>;
      <div className=container mx-auto px-4">;
        <div className="text-center mb-16>;
          <h2 className=text-4xl font-bold mb-4">Get In Touch</h2>;
          <p className="text-xl text-blue-200 max-w-2xl mx-auto>;
            Ready to transform your business with cutting-edge technology?;
            Let&apos;s discuss how we can help you achieve your goals.;
          </p>;
        </div>;
        <div className=grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">;
          {/* Contact Information */}
          <div className="space-y-8>;
            <div>;
              <h3 className=text-2xl font-semibold mb-6">Contact Information</h3>;
              <div className="space-y-6>;
                <div className=flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center>;
                    <Mail className=w-6 h-6" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold>Email</h4>;
                    <p className=text-blue-200">kleber@ziontechgroup.com</p>;
                    <p className="text-blue-200>support@ziontechgroup.com</p>;
                  </div>;
                </div>;
                <div className=flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center>;
                    <Phone className=w-6 h-6" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold>Phone</h4>;
                    <p className=text-blue-200">+1 (302) 464-0950</p>;
                    <p className="text-blue-200>+1 (555) 987-6543</p>;
                  </div>;
                </div>;
                <div className=flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center>;
                    <MapPin className=w-6 h-6" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold>Office</h4>;
                    <p className=text-blue-200">;
                      364 E Main St STE 1008<br />;
                      Middletown, DE 19709<br />;
                      United States;
                    </p>;
                  </div>;
                </div>;
              </div>;
            </div>;
            <div className="bg-blue-800/50 p-6 rounded-lg>;
              <div className=flex items-center space-x-3 mb-4">;
                <Clock className="w-6 h-6 text-blue-300 />;
                <h4 className=font-semibold">Business Hours</h4>;
              </div>;
              <div className="space-y-2 text-blue-200>;
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>;
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>;
                <p>Sunday: Closed</p>;
                <p className=text-sm text-blue-300 mt-2">;
                  *24/7 emergency support available for critical issues;
                </p>;
              </div>;
            </div>;
          </div>;
          {/* Contact Form */}
          <div>;
            <h3 className="text-2xl font-semibold mb-6>Send us a Message</h3>;
            <form onSubmit={handleSubmit} className=space-y-6">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6>;
                <div>;
                  <label htmlFor=name" className="block text-sm font-medium mb-2>;
                    Full Name *;
                  </label>;
                  <input;
                    type=text";
                    id="name;
                    name=name";
                    required;
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300;
                    placeholder=Your full name";
                  />;
                </div>;
                <div>;
                  <label htmlFor="email className=block text-sm font-medium mb-2">;
                    Email Address *;
                  </label>;
                  <input;
                    type="email;
                    id=email";
                    name="email;
                    required;
                    value={formData.email}
                    onChange={handleChange}
                    className=w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300";
                    placeholder="your.email@example.com;
                  />;
                </div>;
              </div>;
              <div>;
                <label htmlFor=company" className="block text-sm font-medium mb-2>;
                  Company;
                </label>;
                <input;
                  type=text";
                  id="company;
                  name=company";
                  value={formData.company}
                  onChange={handleChange}
>  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white>
      <div className=container mx-auto px-4">
        <div className="text-center mb-16>
          <h2 className=text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto>
            Ready to transform your business with cutting-edge technology? 
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className=grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8>
            <div>
              <h3 className=text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6>
                <div className=flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center>
                    <Mail className=w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold>Email</h4>
                    <p className=text-blue-200">contact@ziontechgroup.com</p>
                    <p className="text-blue-200>support@ziontechgroup.com</p>
                  </div>
                </div>

                <div className=flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center>
                    <Phone className=w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold>Phone</h4>
                    <p className=text-blue-200">+1 (302) 464-0950</p>
                    <p className="text-blue-200>+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className=flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center>
                    <MapPin className=w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold>Office</h4>
                    <p className=text-blue-200">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-800/50 p-6 rounded-lg>
              <div className=flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-300 />
                <h4 className=font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2 text-blue-200>
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
                <p className=text-sm text-blue-300 mt-2">
                  *24/7 emergency support available for critical issues
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6>Send us a Message</h3>
            <form onSubmit={handleSubmit} className=space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                <div>
                  <label htmlFor=name" className="block text-sm font-medium mb-2>
                    Full Name *
                  </label>
                  <input
                    type=text"
                    id="name
                    name=name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300
                    placeholder=Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email className=block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email
                    id=email"
                    name="email
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className=w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300"
                    placeholder="your.email@example.com
                  />
                </div>
              </div>

              <div>
                <label htmlFor=subject" className="block text-sm font-medium mb-2>
                  Subject *
                </label>
                <input
                  type=text"
                  id="subject
                  name=subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300
                  placeholder=What can we help you with?"
                />
              </div>

              <div>
                <label htmlFor="message className=block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message
                  name=message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300 resize-none
                  placeholder=Tell us about your project or question..."
                />
              </div>

              <button
                type="submit
                disabled={isSubmitting}
                className=w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? Sending... : 'Send Message'}
              </button>

              {submitted && (
                <div className="text-center p-4 bg-green-600/20 border border-green-500 rounded-lg>
                  <p className=text-green-300">Thank you! We&apos;ll be in touch soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



<:src_backup/components/ContactSection.tsx
export default ContactSection;
=                  className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300;
                  placeholder=Your company name";
                />;
              </div>;
              <div>;
                <label htmlFor="subject className=block text-sm font-medium mb-2">;
                  Subject *;
                </label>;
                <input;
                  type="text;
                  id=subject";
                  name="subject;
                  required;
                  value={formData.subject}
                  onChange={handleChange}
                  className=w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300";
                  placeholder="What can we help you with?;
                />;
              </div>;
              <div>;
                <label htmlFor=message" className="block text-sm font-medium mb-2>;
                  Message *;
                </label>;
                <textarea;
                  id=message";
                  name="message;
                  required;
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className=w-full px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300 resize-none";
                  placeholder="Tell us about your project or question...;
                />;
              </div>;
              <button;
                type=submit";
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed;
              >;
                {isSubmitting ? Sending... : 'Send Message'}
              </button>;
              {submitted && (<div className=text-center p-4 bg-green-600/20 border border-green-500 rounded-lg">;
                  <p className="text-green-300>Thank you! We&apos;ll be in touch soon.</p>;
                </div>;
              )}
            </form>;
          </div>;
        </div>;
      </div>;
                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;

    </section>);
}set_errors (field_errors);
toast ({
  return;
}set_errors ({});
setIsSubmitting (true);
}) .catch ( (err) => {
  setIsSubmitting (false);
toast ({
  title: Submission Error";
description: err.message;
});
}";
}</div> <div> <label html_for=email className="block text - sm font - medium text - zion - slate - light mb - 1" > Email </label> <Input) ;
}</div> </div> <div> <label html_for=subject" className="block text - sm font - medium text - zion - slate - light mb - 1 > Subject </label> <Input) ;
}</div> <div> <label html_for="message" className=block text - sm font - medium text - zion - slate - light mb - 1 > Message </label> <Textarea);
}</div> <div> <Button > {;
  is_submitting ? Sending...' : 'Send Message;
}</Button>);
}</div> </form> </div> </div> </div> </div> </section>);
}"}
}
    </section>;
  )}export default ContactSection;


                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}setErrors (fieldErrors);
toast ({
  return;
}setErrors ({});
setIsSubmitting (true);
}) .catch ( (err) => {
  setIsSubmitting (false);
toast ({
  title: "Submission Error;
description: err.message;
});
};
}</div> <div> <label htmlFor="email" className=block text-sm font-medium text-zion-slate-light mb-1 > Email </label> <Input) ";
}</div> </div> <div> <label htmlFor="subject className=block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) ";
}</div> <div> <label htmlFor=message className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea) ;
}</div> <div> <Button > {';
  isSubmitting ? 'Sending... : Send Message' ;
}</Button>) ;
}</div> </form> </div> </div> </div> </div> </section>) ;
}'"


export default ContactSection;


export default ContactSection;
>
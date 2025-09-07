:src/components/ContactSection.tsx
fetch("/api/contact", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify(formData)})
      .then(async (res) => {

          const data = await res.json().catch(() => ({}));          throw new Error(data.error || "Failed to send message")
        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message")

        }
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),

        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message")
        }
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),

        setSubmitted(true),
        setTimeout(() => setSubmitted(false), 2000),
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((err) => {
        setIsSubmitting(false),
        toast({


          title: "Submission Error",
          description: err.message,
          variant: "destructive"})
      })



pr-12325
:temp-disabled/src/components/ContactSection.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock  } from 'lucide-react';

:src/components/ContactSection.tsx
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ,
    email: ,
    company: ,
    message: ,
const ContactSection: React.FC = () => ;
  const [formData, setFormData] = useState({name: '',
  email: '',company: ''}
  subject: '',message: '';}
:temp-disabled/src/components/ContactSection.tsx
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
:src/components/ContactSection.tsx
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

import { useState } from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { Mail } from 'lucide-react'
pr-12243

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "";
    email: "";
    subject: "";
    message: ""});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: ""
    email: ""
    subject: ""
    message: ""})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string
  }>({}),
    // Handle form submission
    console.log('Form submitted:', formData);
pr-12325

  const handleChange = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    // Handle form submission
    console.log('Form submitted:', formData);
  };

:temp-disabled/src/components/ContactSection.tsx
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your project and see how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span>info@ziontechgroup.com</span>
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span>123 Tech Street, Innovation City, IC 12345</span>

              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>

          {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="your.email@example.com"

                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                  id="company"
                  name="company"
                  value={formData.company}
                  placeholder="Your company name"

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
pr-12325
                  Message *
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  rows={6}
                  placeholder="Tell us about your project..."

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
    </section>
  );

export default ContactSection;
:src/components/ContactSection.tsx
export default ContactSection;
main
pr-12243
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitted && (
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>
                  )}

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
}set_errors ({
});
setIsSubmitting (true);
}) .catch ( (err) => {
  setIsSubmitting (false);
toast ({
  title: "Submission Error";
description: err.message;
});
}";
}</div> <div> <label html_for="email" className="block text - sm font - medium text - zion - slate - light mb - 1" > Email </label> <Input) ";
}</div> </div> <div> <label html_for="subject" className="block text - sm font - medium text - zion - slate - light mb - 1" > Subject </label> <Input) ";
}</div> <div> <label html_for="message" className="block text - sm font - medium text - zion - slate - light mb - 1" > Message </label> <Textarea);
}</div> <div> <Button > {';
  is_submitting ? 'Sending...' : 'Send Message';
}</Button>);
}</div> </form> </div> </div> </div> </div> </section>);
}'"}
}
;
origin/cursor/expand-services-advertise-and-build-project-c28b
main
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}setErrors (fieldErrors);
toast ({;
  return;
}setErrors ({;
  ;
});
setIsSubmitting (true);
}) .catch ( (err) => {;
  setIsSubmitting (false);
toast ({;
  title: "Submission Error";
description: err.message;
});
};";
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" > Email </label> <Input) ";
}</div> </div> <div> <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) ";
}</div> <div> <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea) ;
}</div> <div> <Button > {';
  isSubmitting ? 'Sending...' : 'Send Message' ;
}</Button>) ;
}</div> </form> </div> </div> </div> </div> </section>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
export default ContactSection;
pr-12243
export default ContactSection;
pr-12325

:temp-disabled/src/components/ContactSection.tsx

import React from 'react';
:src/pages/Contact.tsx
;
const "Contact": "React.FC = () => {;
  return (;
    <div className="min-h-screen bg-gray-50">;
      <div className="container mx-auto px-4 py-20">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-4xl "md":text-6xl font-bold text-gray-900 mb-6">;
            Contact Us;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            Get in touch with our team to discuss your technology needs and how we can help your business grow.;
          </p>;
          ;
          <div className="grid "md":grid-cols-2 gap-8">;
            <div>;
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>;
              <div className="space-y-4">;
                <div>;
                  <h3 className="font-semibold text-gray-900">Phone</h3>;
                  <p className="text-gray-600">+1 302 464 0950</p>;
                </div>;
                <div>;
                  <h3 className="font-semibold text-gray-900">Email</h3>;
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>;
                </div>;
                <div>;
                  <h3 className="font-semibold text-gray-900">Address</h3>;
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown", DE 19709</p>;
                </div>;
              </div>;
            </div>;
            ;
            <div>;
              <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>;
              <form className="space-y-4">;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>;
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": "outline-none "focus":ring-2 "focus":ring-blue-500" />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>;
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md "focus":outline-none "focus":ring-2 "focus":ring-blue-500" />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>;
                  <textarea rows={4"} className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": "outline-none "focus":ring-2 "focus":ring-blue-500"></textarea>;
                </div>;
                <button type="submit" className="w-full bg-blue-500 "hover":bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition-colors">;
                  Send Message;
                </button>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
"};
;
export default Contact;
const "Contact": React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team to discuss your technology needs and how we can help your business grow.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4}; className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
import React from 'react'; const Contact: React.FC = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Contact Us </h1> <p className="text-xl text-gray-600 mb-8"> Get in touch with our team to discuss your technology needs and how we can help your business grow. </p> <div className="grid md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold mb-4">Contact Information</h2> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> </div> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600">364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> <div> <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2> <form className="space-y-4"> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Name</label> <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Message</label> <textarea rows={4}; className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea> </div> <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition-colors"> Send Message </button> </form> </div> </div> </div> </div> </div> )}; export default Contact;
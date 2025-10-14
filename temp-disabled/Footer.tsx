import React from 'react''''';
import { Link } from 'react-router-dom''''';
import {}
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';  ArrowRightIcon''''
} from '@heroicons/react/24/outline''''';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react'''''
  HeartIcon
} from '@heroicons/react/24/outline''''';
const Footer: React.FC = () => {"}"";
const currentYear = new Date().getFullYear();
const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },''''
    { name: 'IT Solutions', href: '/it-solutions' },''''
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },''''
    { name: 'Cybersecurity', href: '/cybersecurity' },''''
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },''''
    { name: 'Digital Transformation', href: '/digital-transformation' },''''
    { name: '5G Solutions', href: '/5g-solutions' },''''
  ];    { name: 'Micro SaaS', href: '/micro-saas' },''''
    { name: '5G Solutions', href: '/5g-solutions' }''''
  ];
const company = [
    { name: 'About Us', href: '/about' },''''
    { name: 'Solutions', href: '/solutions' },''''
    { name: 'Pricing', href: '/pricing' },''''
    { name: 'Blog', href: '/blog' },''''
    { name: 'Careers', href: '/careers' },''''
    { name: 'Case Studies', href: '/case-studies' }''''
  ];
const support = [
    { name: 'Contact', href: '/contact' },''''
    { name: 'Support', href: '/support' },''''
    { name: 'Tutorials', href: '/tutorials' },''''
    { name: 'Demo', href: '/demo' },''''
    { name: 'Documentation', href: '/docs' }''''
  ];
const legal = [
    { name: 'Privacy Policy', href: '/privacy' },''''
    { name: 'Terms of Service', href: '/terms' },''''
    { name: 'Cookie Policy', href: '/cookies' },''''
    { name: 'GDPR', href: '/gdpr' },''''
    { name: 'Security', href: '/security' },''''
    { name: 'Compliance', href: '/compliance' },''''
  ];
const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },''''
    { name: 'Twitter', href: '#', icon: 'twitter' },''''
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },''''
    { name: 'GitHub', href: '#', icon: 'github' }    { name: 'Terms of Service', href: '/terms' }''''
    { name: 'Micro SaaS', href: '/micro-saas-solutions' },''''
    { name: '5G Solutions', href: '/5g-solutions' }''''
  ];
const company = [
    { name: 'About Us', href: '/about' },''''
    { name: 'Careers', href: '/careers' },''''
    { name: 'Case Studies', href: '/case-studies' },''''
    { name: 'Blog', href: '/blog' },''''
    { name: 'Tutorials', href: '/tutorials' }''''
  ];
const support = [
    { name: 'Contact', href: '/contact' },''''
    { name: 'Support', href: '/support' },''''
    { name: 'Demo', href: '/demo' },''''
    { name: 'Privacy Policy', href: '/privacy' },''''
    { name: 'Terms of Service', href: '/terms' }''''
  ];
const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },''''
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },''''
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }''''
  ]
  return ("
    <footer className="bg-gray-900 text-white">"""""
      <div className="max-w-7xl mx-auto px-4 py-12"></div>"""""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>""""
          {/* Company Info */}"
          <div className="lg:col-span-2"></div>"""""
            <Link to="/" className="flex items-center space-x-3 mb-6 group">"""""
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"></div>"""""
                <span className="text-white font-bold text-xl">Z</span>"""""
          <div className="lg:col-span-1"></div>"""""
            <div className="flex items-center space-x-2 mb-4"></div>"""""
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center"></div>"""""
                <span className="text-white font-bold text-lg">Z</span>""""
              </div>"
              <span className="text-xl font-bold text-white">Zion Tech Group</span>""""
            </div>"
            <p className="text-gray-400 mb-6 max-w-sm">""""
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure,
              and digital transformation services for businesses worldwide.
            </p>"
            {/* Contact Info */}            <div className="space-y-3 mb-6"></div>"""""
              <div className="flex items-center space-x-3 text-gray-300"></div>"""""
                <PhoneIcon className="w-5 h-5 text-purple-400" />""""
                <span>+1-302-464-0950</span>
              </div>"
              <div className="flex items-center space-x-3 text-gray-300"></div>"""""
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />""""
                <span>kleber@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center space-x-3 text-gray-300"></div>"""""
                <MapPinIcon className="w-5 h-5 text-purple-400" />""""
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>"
            {/* Social Links */}            <div className="flex space-x-4"></div>"""")
              {socialLinks.map((social) => (}
                <a
                  key={social.name}
                  href={social.href}"
                  target="_blank""""""
                  rel="noopener noreferrer""""""
                  className="text-gray-400 hover:text-white transition-colors"""""
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && '📘'}''''
                  {social.icon === 'twitter' && '🐦'}''''
                  {social.icon === 'linkedin' && '💼'}''''
                  {social.icon === 'github' && '🐙'}''''
                </a>")
              ))}            <div className="flex space-x-4"></div>"""""
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"""""
                <Facebook className="w-5 h-5" />""""
              </a>"
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"""""
                <Twitter className="w-5 h-5" />""""
              </a>"
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"""""
                <Linkedin className="w-5 h-5" />""""
              </a>"
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"""""
                <Github className="w-5 h-5" />""""
              </a>"
                  <span className="sr-only">{social.name}</span>"""""
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center"></div>"""""
                    {social.icon === 'linkedin' && <span className="text-xs">in</span>}"""""
                    {social.icon === 'twitter' && <span className="text-xs">t</span>}"""""
                    {social.icon === 'github' && <span className="text-xs">g</span>}""""
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* Services */}
          <div></div>"
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</h3>"""""
            <ul className="space-y-3">"""""
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>"""""
            <ul className="space-y-2">""""
              {services.map((service) => (}
                <li key={service.name}>
                  <Link
                    to={service.href}"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group""""""
            <h3 className="text-white font-semibold mb-4">>Services</h3>"""""
            <ul className="space-y-2">"""")
              {services.map((service) => (}
                <li key={service.name}>
                  <Link
                    to={service.href}"
                    className="text-gray-300 hover:text-white text-sm transition-colors"""""
                  >"
                    <ArrowRightIcon className="w-4 h-4 mr-2" />""""
                    {link.name}
                  </Link>
                </li>)
              ))}
            </ul>
          </div>
          {/* Company */}
          <div></div>"
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Company</h3>"""""
            <ul className="space-y-3">"""""
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>"""""
            <ul className="space-y-2">""""
              {company.map((item) => (}
                <li key={item.name}>
                  <Link
                    to={item.href}"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group""""""
            <h3 className="text-white font-semibold mb-4">>Company</h3>"""""
            <ul className="space-y-2">"""")
              {company.map((item) => (}
                <li key={item.name}>
                  <Link
                    to={item.href}"
                    className="text-gray-300 hover:text-white text-sm transition-colors"""""
                  >"
                    <ArrowRightIcon className="w-4 h-4 mr-2" />""""
                    {link.name}
                  </Link>
                </li>)
              ))}
            </ul>
          </div>
          {/* Support & Legal */}
          <div></div>"
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Resources</h3>"""""
            <ul className="space-y-3 mb-8">""""
              {resources.map((resource) => (}
                <li key={resource.name}>"
            <h3 className="text-white font-semibold text-lg mb-4">Support & Legal</h3>"""""
            <ul className="space-y-2">"""")
              {support.map((item) => (}
                <li key={item.name}>
                  <Link
                    to={link.href}"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"""""
                  >"
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />""""
                    {item.name}
                  </Link>
                </li>)
              ))}
              {legal.map((item) => (}
                <li key={item.name}>
                  <Link
                    to={item.href}"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"""""
          {/* Support */}
          <div>></div>"
            <h3 className="text-white font-semibold mb-4">Support</h3>"""""
            <ul className="space-y-2">"""")
              {support.map((item) => (}
                <li key={item.name}>
                  <Link
                    to={item.href}"
                    className="text-gray-300 hover:text-white text-sm transition-colors"""""
                  >
                    {item.name}
                  </Link>
                </li>)
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Signup */}"
        <div className="mt-16 pt-8 border-t border-slate-700/50"></div>"""""
          <div className="max-w-2xl mx-auto text-center"></div>"""""
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stay Updated</h3>"""""
            <p className="text-gray-300 mb-6 text-lg">""""
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"></div>""""
              <input"
                type="email""""""
                placeholder="Enter your email""""""
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"              />"""""
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold">""""
                Subscribe"
                <ArrowRightIcon className="w-4 h-4 ml-2" />""""
              </button>
        {/* Contact Info */}"
        <div className="border-t border-gray-800 mt-8 pt-8"></div>"""""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>"""""
            <div className="flex items-center"></div>"""""
              <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" />"""""
              <span className="text-gray-300">+1 (555) 123-4567</span>""""
            </div>"
            <div className="flex items-center"></div>"""""
              <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-400" />"""""
              <span className="text-gray-300">info@ziontechgroup.com</span>""""
            </div>"
            <div className="flex items-center space-x-3 text-gray-400"></div>"""""
              <MapPinIcon className="w-5 h-5 text-purple-400" />""""
              <span>Middletown, DE 19709</span>
        {/* Contact Info */}"
        <div className="mt-8 pt-8 border-t border-slate-700"></div>"""""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300"></div>"""""
            <div className="flex items-center space-x-2"></div>"""""
              <PhoneIcon className="w-4 h-4 text-purple-400" />""""
              <span>+1-302-464-0950</span>
            </div>"
            <div className="flex items-center space-x-2"></div>"""""
              <EnvelopeIcon className="w-4 h-4 text-purple-400" />""""
              <span>kleber@ziontechgroup.com</span>
            </div>"
            <div className="flex items-center space-x-2"></div>"""""
              <MapPinIcon className="w-4 h-4 text-purple-400" />""""
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}"
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center"></div>"""""
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"></div>""""
            <span>Made with</span>"
            <HeartIcon className="w-4 h-4 text-red-400" />""""
            <span>by Zion Tech Group</span>
          {/* Newsletter Signup */}"
          <div className="bg-slate-800 rounded-lg p-6 mb-8"></div>"""""
            <div className="max-w-md mx-auto text-center"></div>"""""
              <h3 className="text-white font-semibold text-lg mb-2">Stay Updated</h3>"""""
              <p className="text-gray-400 mb-4">Get the latest news and updates from Zion Tech Group</p>"""""
              <div className="flex space-x-2"></div>""""
                <input"
                  type="email""""""
                  placeholder="Enter your email""""""
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"""""
                />"
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center">""""
                  Subscribe"
                  <ArrowRight className="w-4 h-4 ml-2" />""""
                </button>
              </div>
            </div>
          </div>
          {/* Copyright */}"
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"></div>""""
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>"
            <div className="flex space-x-6 mt-4 md:mt-0"></div>"""""
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>"""""
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>""""
            </div>"
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"></div>"""""
          <p className="text-gray-400 text-sm">""""
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>"
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0"></div>""""
            <span>Made with</span>"
            <HeartIcon className="w-4 h-4 text-red-500" />""""
            <span>for innovation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
</HeartIcon>
</ArrowRight>
</HeartIcon>
</div>
</div>
</MapPinIcon>
</EnvelopeIcon>
</PhoneIcon>
</MapPinIcon>
</div>
</EnvelopeIcon>
</PhoneIcon>
</div>
</div>
</ArrowRightIcon>
</div>
</div>
</div>
</li>
</ArrowRightIcon>
</ul>
</li>
</ul>
</ArrowRightIcon>
</li>
</ul>
</ul>
</ArrowRightIcon>
</li>
</ul>
</ul>
</Github>
</Linkedin>
</Twitter>
</Facebook>
</MapPinIcon>
</EnvelopeIcon>
</PhoneIcon>
</div>
</div>
</div>
</div>
</div>"

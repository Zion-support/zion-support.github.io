import { Link  } from 'react-router-dom';

export default function Page() {
 whileInView = {
  { opacity: 1,
  y: 0

}} transition={{ duration: 0.5 }} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 6 border border-cyan -500 / 30">
              <div className="w-12 h-12 bg-cyan - 500 / 20 rounded-lg flex items - center justify - center mb-4">
                <Server className="w-6 h-6 text-cyan -400"/>
              </div>
              <h3 className="text-xl font - bold text-white mb-3">Infrastructure Management</h3>
              <p className="text-gray -300">
                Comprehensive management of servers, networks, and cloud infrastructure with 24 / 7 monitoring and support.</p>
            </motion.div>

            <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.5,
  delay: 0.1

}} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 6 border border-cyan -500 / 30">
              <div className="w-12 h-12 bg-cyan - 500 / 20 rounded-lg flex items - center justify - center mb-4">
                <Shield className="w-6 h-6 text-cyan -400"/>
              </div>
              <h3 className="text-xl font - bold text-white mb-3">Security & Compliance</h3>
              <p className="text-gray -300">
                Enterprise - grade security solutions with compliance frameworks including SOC 2, ISO 27001, and GDPR.</p>
            </motion.div>

            <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.5,
  delay: 0.2

}} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 6 border border-cyan -500 / 30">
              <div className="w-12 h-12 bg-cyan - 500 / 20 rounded-lg flex items - center justify - center mb-4">
                <Zap className="w-6 h-6 text-cyan -400"/>
              </div>
              <h3 className="text-xl font - bold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray -300">
                Advanced performance tuning and optimization for maximum efficiency and user experience.</p>
            </motion.div>

            <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.5,
  delay: 0.3

}} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 6 border border-cyan -500 / 30">
              <div className="w-12 h-12 bg-cyan - 500 / 20 rounded-lg flex items - center justify - center mb-4">
                <Users className="w-6 h-6 text-cyan -400"/>
              </div>
              <h3 className="text-xl font - bold text-white mb-3">User Management</h3>
              <p className="text-gray -300">
                Comprehensive user access management with role - based permissions and single sign - on solutions.</p>
            </motion.div>

            <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.5,
  delay: 0.4

}} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 6 border border-cyan -500 / 30">
              <div className="w-12 h-12 bg-cyan - 500 / 20 rounded-lg flex items - center justify - center mb-4">
                <Globe className="w-6 h-6 text-cyan -400"/>
              </div>
              <h3 className="text-xl font - bold text-white mb-3">Global Deployment</h3>
              <p className="text-gray -300">
                Multi - region deployment capabilities with global CDN and edge computing for optimal performance.</p>
            </motion.div>

            <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.5,
  delay: 0.5

}} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 6 border border-cyan -500 / 30">
              <div className="w-12 h-12 bg-cyan - 500 / 20 rounded-lg flex items - center justify - center mb-4">
                <Building2 className="w-6 h-6 text-cyan -400"/>
              </div>
              <h3 className="text-xl font - bold text-white mb-3">Enterprise Support</h3>
              <p className="text-gray -300">
                Dedicated support teams with SLAs, priority response times, and strategic account management.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient - to - br from - gray - 900 / 50 to -black / 50">
        <div className="max - w-4xl mx - auto text-center">
          <h2 className="text-4xl md:text-5xl font - bold text-white mb-6">
            Ready to Transform Your Enterprise IT?
          </h2>
          <p className="text-xl text-gray - 300 mb-8">
            Let's discuss how our enterprise IT solutions can drive your business forward with
            cutting - edge technology and unparalleled support.</p>
          <div className="flex flex - col sm:flex - row gap-4 justify -center">
            <Link to="/contact" className="inline - flex items - center px-8 py-4 bg-gradient - to - r from - cyan - 400 to - purple - 600 text-white font - semibold rounded-xl hover:from - cyan - 500 hover:to - purple - 700 transition - all duration - 300 transform hover:scale -105">
              Get Started < ArrowRight className="ml-2 w-5 h-5"/>
            </Link>
            <Link to="/services" className="inline - flex items - center px-8 py-4 border border-cyan - 400 text-cyan - 400 font - semibold rounded-xl hover:bg-cyan - 400 hover:text-white transition - all duration -300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>) }

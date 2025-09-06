export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Zion Tech Group
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Leading the future of technology with innovative solutions and cutting-edge research.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300">
                  To revolutionize the technology landscape through innovative AI solutions, 
                  quantum computing research, and autonomous systems that transform businesses 
                  and drive sustainable growth.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300">
                  To be the global leader in next-generation technology solutions, 
                  empowering organizations worldwide to achieve unprecedented levels 
                  of efficiency, innovation, and success.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
                <ul className="space-y-4 text-gray-300">
                  <li>• Innovation and cutting-edge research</li>
                  <li>• Client success and satisfaction</li>
                  <li>• Ethical technology development</li>
                  <li>• Global collaboration and impact</li>
                  <li>• Sustainable and responsible growth</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Expertise</h2>
                <ul className="space-y-4 text-gray-300">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Quantum Computing Research</li>
                  <li>• Autonomous Systems Development</li>
                  <li>• Enterprise Technology Solutions</li>
                  <li>• Cybersecurity & Data Protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
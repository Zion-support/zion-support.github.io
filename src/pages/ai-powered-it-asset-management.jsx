import { Link  } from 'react-router-dom';

export default function Page() {
      <div className="py-20 bg-slate -800 / 50">
        <div className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font - bold text-center mb-16 bg-gradient - to - r from - purple - 400 to - indigo - 400 bg-clip - text text-transparent">
            Business Benefits
          </h2>
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">
            <div className="text-center">
              <div className="text-5xl font - bold text-purple - 400 mb-2">
                40%
              </div>
              <div className="text-gray -300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font - bold text-indigo - 400 mb-2">
                99.9%
              </div>
              <div className="text-gray -300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font - bold text-blue - 400 mb-2">
                60%
              </div>
              <div className="text-gray -300">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font - bold text-purple - 400 mb-2">
                100%
              </div>
              <div className="text-gray -300">Compliance</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient - to - r from - purple - 900 / 20 to - indigo -900 / 20">
        <div className="max - w-4xl mx - auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font - bold mb-6 bg-gradient - to - r from - purple - 400 to - indigo - 400 bg-clip - text text-transparent">
            Transform Your IT Asset Management
          </h2>
          <p className="text-xl text-gray - 300 mb-8">
            Join leading organizations that have revolutionized their IT
            operations with AI - powered asset management solutions.</p>
          <div className="flex flex - col sm:flex - row gap-4 justify -center">
            <Link
              to="/contact"
              className="bg-gradient - to - r from - purple - 600 to - indigo - 600 text-white px-8 py-4 rounded-lg font - semibold hover:from - purple - 700 hover:to - indigo - 700 transition - all duration - 300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/services / infrastructure"
              className="border border-purple - 500 text-purple - 400 px-8 py-4 rounded-lg font - semibold hover:bg-purple - 500 hover:text-white transition - all duration - 300 text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>) ;
};

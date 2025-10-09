import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SystemAdministrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">System Administration</h1>
          <p className="text-gray-300 mb-8">Coming Soon - Advanced system administration solutions</p>
          <Link 
            to="/contact" 
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SystemAdministrationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-11dc

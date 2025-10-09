
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const SecurityPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Security</h1>
            <p className="text-xl text-gray-300 mb-8">Comprehensive security solutions for your business</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>);
}
export default SecurityPage
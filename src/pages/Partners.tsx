
const Partners: React.FC = ($2) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic partnerships that drive innovation and deliver exceptional value to our clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Technology Partners</h3>
            <p className="text-gray-300">
              Leading technology companies that provide cutting-edge solutions and infrastructure.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Consulting Partners</h3>
            <p className="text-gray-300">
              Expert consulting firms that help us deliver comprehensive business solutions.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Industry Partners</h3>
            <p className="text-gray-300">
              Industry leaders across various sectors who share our vision for digital transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;


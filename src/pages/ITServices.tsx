import {

  Server,
  Shield,
  Cloud,
  Network,
  Wrench,
  Headphones} from 'lucide-react';

  
  return()
    <div className="min-h-screen bg-futuristic">"
      <SEO""
        title="IT Services - Zion Tech Group""
        description="Managed IT, Cloud & DevOps, Cybersecurity, Networking, Helpdesk, and Onsite services.""
      />""
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-6xl mx-auto">""
          <div className="text-center">""
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Modern Managed IT"
            </h1>"            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
              Reliable, secure, and cost-efficient IT operations with clear SLAs
              and predictable pricing."
            </p>""
            <div className="mt-8 flex items-center justify-center gap-3">""
              <Link to="/contact" className="btn-futuristic">
                Request Quote"
              </Link>""
              <Link to="/privacy" className="btn-neon">
                Security & Compliance
              </Link>
            </div>
          </div>"
""
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">"
            {offerings.map(o => (""
              <div key={o.title} className="card-futuristic">""
                <div className="flex items-center gap-3">""
                  <o.icon className="w-6 h-6 text-cyan-400" />""
                  <h3 className="text-white font-semibold">{o.title}</h3>"
                </div>""
                <p className="mt-2 text-slate-300">{o.desc}</p>
              </div>
            ))}
          </div>"
""
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">"
            {prices.map(p => (""
              <div key={p.name} className="card-futuristic">""
                <h3 className="text-white font-semibold">{p.name}</h3>""
                <div className="mt-2 text-3xl font-extrabold text-white">
                  {p.price}"
                </div>""
                <ul className="mt-4 space-y-2 text-slate-300">
                  {p.includes.map(i => (
                    <li key={i}>• {i}</li>
                  ))}"
                </ul>""
                <Link to="/contact" className="mt-6 inline-flex btn-futuristic">
                  Talk to Sales
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )}'"
'"'"
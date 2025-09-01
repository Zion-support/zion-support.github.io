import { FileText, Download, Calendar, User  } from 'lucide-react';

export default function Page() {
                  </div>
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  {paper.title}
                </h3>
                <p className="text-gray - 300 mb-4">{paper.description}</p>
                <div className="flex items - center justify - between text-sm text-gray - 400 mb-4">
                  <div className="flex items -center">
                    <User className="w-4 h-4 mr-1" />
                    {paper.author}
                  </div>
                  <div className="flex items -center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {paper.date}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full inline - flex items - center justify - center px-4 py-3 bg-gradient - to - r from - blue - 600 to - cyan - 600 text-white font - semibold rounded-lg hover:from - blue - 700 hover:to - cyan - 700 transition - all duration -300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Request PDF
                </Link>
              </div>) ) }
          </div>
        </div>
      </section>
    </div>) ;
};

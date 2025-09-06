import React from 'react';""',';';
    ';';';
import React from 'react;;
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
const "TrustIndicators": "React.FC = () => {;
  const indicators = [;
    {;
      "icon": Shiel d", "";
      "title": "Enterprise Security","";
      "description": "SOC 2 Type II Certified", "";
  {;
      "icon": "Shiel d",";
      "title": "Enterprise Security,;
      "description": "SOC 2 Type II Certified,;
      "color": "text-green-500"}, {;
      "icon": "Awar d","";
      "title": "Industry Recognition", "";
      "description": "Top 100 Tech Companies 2026","";
      "color": "text-blue-500"},;
    {;
      "icon": "User s", "";
      "title": "Expert Team","";
      "description": "50+ Certified Professionals", "";
      "icon": "Awar d",";
      "title": "Industry Recognition,;
      "description": "Top 100 Tech Companies 2026,;
      "color": "text-blue-500"},;
    {;
      "icon": "User s",";
      "title": "Expert Team,;
      "description": "50+ Certified Professionals,;
      "color": "text-purple-500"}, {;
      "icon": "Cloc k","";
      "title": "24/7 Support", "";
      "description": "Round-the-clock assistance","";
      "color": "text-orange-500"},;
    {;
      "icon": "CheckCircl e", "";
      "title": "Quality Assurance","";
      "description": "99.9% Uptime Guarantee", "";
      "color": "text-cyan-500"}, {;
      "icon": "Sta r","";
      "title": "Client Satisfaction", "";
      "description": "98% Customer Rating","";
      "color": "text-yellow-500"}
      "icon": "Cloc k",";
      "title": "24/7 Support,;
      "description": "Round-the-clock assistance,;
      "color": "text-orange-500"},;
    {;
      "icon": "CheckCircl e",";
      "title": "Quality Assurance,;
      "description": "99.9% Uptime Guarantee,;
      "color": "text-cyan-500"},;
    {;
      "icon": "Sta r",";
      "title": "Client Satisfaction,;
      "description": "98% Customer Rating,;
      "color": "text-yellow-500"}
  ];
  return ("";
    <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50">"";
      <div className="container mx-auto px-4">"";
        <div className="text-center mb-12">"";
          <h2 className="text-3xl font-bold text-white mb-4">;
            Trusted by Industry Leaders;
          </h2>"";
          <p className="text-slate-300 max-w-2xl mx-auto">;
            Our commitment to excellence and security has earned us the trust of organizations worldwide;
          </p>;
        </div>;
"";
        <div className="grid grid-cols-2 "md": "gri d-cols-3 "lg": gri d-cols-6 gap-8">;
          {indicators.map((indicator", index) => (;
            <div key={index}"";
              className="text-center group "hover": "scal e-105 transition-transform duration-300"" >";
            <div key={index"}";
              className="text-center group "hover": "scal e-105 transition-transform duration-300  >";
              <div className={`w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-"hover": b g-slate-700/50 transition-colors`>;
                <indicator .icon className={`w-8 h-8 ${indicator.color"}`} /` >`}
              </div>"";
              <h3 className="text-sm font-semibold text-white mb-1">;
const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: Shiel d, ""
      title: "Enterprise Security",""
      description: "SOC 2 Type II Certified", ""
  {
      icon: Shiel d,"
      title: "Enterprise Security,
      description: "SOC 2 Type II Certified,
      color: "text-green-500"}, {
      icon: Awar d,""
      title: "Industry Recognition", ""
      description: "Top 100 Tech Companies 2026",""
      color: "text-blue-500"},
    {
      icon: User s, ""
      title: "Expert Team",""
      description: "50+ Certified Professionals", ""
      icon: Awar d,"
      title: "Industry Recognition,
      description: "Top 100 Tech Companies 2026,
      color: "text-blue-500"},
    {
      icon: User s,"
      title: "Expert Team,
      description: "50+ Certified Professionals,
      color: "text-purple-500"}, {
      icon: Cloc k,""
      title: "24/7 Support", ""
      description: "Round-the-clock assistance",""
      color: "text-orange-500"},
    {
      icon: CheckCircl e, ""
      title: "Quality Assurance",""
      description: "99.9% Uptime Guarantee", ""
      color: "text-cyan-500"}, {
      icon: Sta r,""
      title: "Client Satisfaction", ""
      description: "98% Customer Rating",""
      color: "text-yellow-500"}
      icon: Cloc k,"
      title: "24/7 Support,
      description: "Round-the-clock assistance,
      color: "text-orange-500"},
    {
      icon: CheckCircl e,"
      title: "Quality Assurance,
      description: "99.9% Uptime Guarantee,
      color: "text-cyan-500"},
    {
      icon: Sta r,"
      title: "Client Satisfaction,
      description: "98% Customer Rating,
      color: "text-yellow-500"}
  ]
  return (""
    <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50">""
      <div className="container mx-auto px-4">""
        <div className="text-center mb-12">""
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>""
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our commitment to excellence and security has earned us the trust of organizations worldwide
          </p>
        </div>
""
        <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index}""
              className="text-center group hover: scal e-105 transition-transform duration-300"" >"
            <div key={index}"
              className="text-center group hover: scal e-105 transition-transform duration-300  >"
              <div className={`w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover: b g-slate-700/50 transition-colors`>
                <indicator .icon className={`w-8 h-8 ${indicator.color}`} /` >`}
              </div>""
              <h3 className="text-sm font-semibold text-white mb-1">
                {indicator.title}
              ""
              <p className="text-xs text-slate-400">
                {indicator.description}
              </p>
            </div>
          ))
      )}
    </div>
    );
}
        </div>
        {/* Additional Trust Elements */}""
        <div className="mt-16 text-center">""
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">""
            <div className="flex items-center gap-2">""
              <CheckCircle className="w-5 h-5 text-green-500" /" >"
              <span className="text-sm">SSL Secured</span>
            </div>""
            <div className="flex items-center gap-2">""
              <CheckCircle className="w-5 h-5 text-green-500" /" >"
              <span className="text-sm">GDPR Compliant</span>
            </div>""
            <div className="flex items-center gap-2">""
              <CheckCircle className="w-5 h-5 text-green-500" /" >"
              <span className="text-sm">ISO 27001 Certified</span>
            </div>""
            <div className="flex items-center gap-2">""
              <CheckCircle className="w-5 h-5 text-green-500" /" >"
              <span className="text-sm">HIPAA Compliant</span>
            </div>
          </div>';
        </div>';';
      </div>';';';
    </section>';';';';
  );};';';';';';
export default TrustIndicators;"`""';';';';
</CheckCircle>
</CheckCircle>';
</indicator>;';;';
        </div>;
        {/* Additional Trust Elements */}"";
        <div className="mt-16 text-center">"";
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">SSL Secured</span>;
            </div>"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">GDPR Compliant</span>;
            </div>"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">ISO 27001 Certified</span>;
            </div>"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">HIPAA Compliant</span>;
            </div>;
          </div>;
        </div>;
          </div>
        </div>
      </div>';
    </section>';';
  );};';';';
export default TrustIndicators;"`"";
</CheckCircle>;
</CheckCircle>;
</CheckCircle>;
</CheckCircle>;
</indicator>;
export default TrustIndicators;"`""';';';';
</CheckCircle>
</CheckCircle>
</CheckCircle>
</CheckCircle>
</indicator>
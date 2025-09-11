import React from 'react';
import {Link} from 'react-router-dom';
import {SEO} from "./SEO";
;
export default function SitemapPage("props": "any) {;
    const publicRoutes = completeSitemap.filter(route => !route.requiredAuth);
    const talentRoutes = completeSitemap.filter(route => route.requiredAuth &&;
        route.requiredRoles &&;
        (route.requiredRoles.includes('jobSeeker') ||;
            route.requiredRoles.includes('creator')));
    const employerRoutes = completeSitemap.filter(route => route.requiredAuth &&;
        route.requiredRoles &&;
        (route.requiredRoles.includes('employer') ||;
            route.requiredRoles.includes('buyer')));
    const adminRoutes = completeSitemap.filter(route => route.requiredAuth &&;
        route.requiredRoles &&;
        route.requiredRoles.includes('admin'));
    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap, navigation, website structure, Zion Tech Group" canonical="https://ziontechgroup.com/content/sitemap-page" />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>          <p className="text-xl text-zion-slate-light">
            Complete navigation guide for Zion Tech Group;
          </p>;
        </div>""";
"""";
        <div className="grid grid-cols-1 "lg":grid-cols-2 gap-8">""";
          {/* Public Routes */"}"""";
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""";
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">;
              Public Pages""";
            </h2>"""";
            <ul className="space-y-2">;
              {publicRoutes.map(route => (;
                <li key={route.path}>;
                  <Link""";
                    to={route.path}"""";
                    className="text-zion-slate-light "hover": "text-zion-cyan transition-colors block""";
                  >;
                    {route.label || route.title"}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
""";
          {/* Talent Routes */}"""";
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""";
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">;
              Talent & Job Seeker Pages""";
            </h2>"""";
            <ul className="space-y-2">;
              {talentRoutes.map(route => (;
                <li key={route.path}>;
                  <Link""";
                    to={route.path}"""";
                    className="text-zion-slate-light "hover": "text-zion-cyan transition-colors block""";
                  >;
                    {route.label || route.title"}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
""";
          {/* Employer Routes */}"""";
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""";
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">;
              Employer & Buyer Pages""";
            </h2>"""";
            <ul className="space-y-2">;
              {employerRoutes.map(route => (;
                <li key={route.path}>;
                  <Link""";
                    to={route.path}"""";
                    className="text-zion-slate-light "hover": "text-zion-cyan transition-colors block""";
                  >;
                    {route.label || route.title"}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
""";
          {/* Admin Routes */}"""";
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""";
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">;
              Administrative Pages""";
            </h2>"""";
            <ul className="space-y-2">;
              {adminRoutes.map(route => (;
                <li key={route.path}>;
                  <Link""";
                    to={route.path}"""";
                    className="text-zion-slate-light "hover": "text-zion-cyan transition-colors block""";
                  >;
                    {route.label || route.title"}
                  </Link>;
                </li>;
              ))}
            </ul>
          </div>
        </div>
"""
        {/* All Routes List */}""""
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">""""
          <h2 className="text-2xl font-semibold text-zion-cyan mb-6">
            Complete Route List"""
          </h2>""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"""
            {completeSitemap.map(route => (""""
              <div key={route.path} className="bg-white/5 rounded p-3">
                <Link"""
                  to={route.path}""""
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"""
                >
                  {route.path}"""
                </Link>""""
                <span className="ml-2 text-xs italic text-zion-slate-light">
                  ({route.priority})"""
;,"}
    );,"})"
 export default function SitemapPage(props: any) {const publicRoutes = completeSitemap.filter (route => !route.requiredAuth) ; const talentRoutes = completeSitemap.filter () route =>;,"}
    );,"})"
 export default function SitemapPage(props: any) {const publicRoutes = completeSitemap.filter(route => !route.requiredAuth); const talentRoutes = completeSitemap.filter() route =>;,"}
    );,"}
    );"
}"}
    );,"})"
,"}
    );,"})","}
    );,"})","}
    );,"})"
export default function SitemapPage(props: any) {,"}
    );,"})"
    const publicRoutes = completeSitemap.filter(route => !route.requiredAuth);,"}
    );,"})"
    const talentRoutes = completeSitemap.filter(route => route.requiredAuth &&;,"}
    );,"})"
        route.requiredRoles &&;,"}
    );,"})"
        (route.requiredRoles.includes("jobSeeker") ||;,"}
    );,"})"
            route.requiredRoles.includes("creator")));,"}
    );,"})"
    const employerRoutes = completeSitemap.filter(route => route.requiredAuth &&;,"}
    );,"})"
        (route.requiredRoles.includes("employer") ||;,"}
    );,"})"
            route.requiredRoles.includes("buyer")));,"}
    );,"})"
    const adminRoutes = completeSitemap.filter(route => route.requiredAuth &&;,"}
    );,"})"
        route.requiredRoles.includes("admin"));,"}
    );,"})
}
    return ("
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;,"}
    );,"})"
      <SEO title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap, navigation, website structure, Zion Tech Group" canonical="https: // comment
      <div className="container mx-auto px-4 py-12">;,"}
    );,"})"
        <div className="text-center mb-12">;,"}
    );,"})"
          <h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>          <p className="text-xl text-zion-slate-light">;,"}
    );,"})"
            Complete navigation guide for Zion Tech Group,"}
    );,"})"
          </p>;,"}
    );,"})"
        </div>""";,"}
    );,"})"
"""";,"}
    );,"})"
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">""","}
    );,"})"
          {/* comment */}"""";,"}
    );,"})"
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""";,"}
    );,"})"
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">;,"}
    );,"})"
              Public Pages""";,"}
    );,"})"
            </h2>"""";,"}
    );,"})"
            <ul className="space-y-2">;,"}
    );,"})"
              {publicRoutes.map(route => (;,"}
    );,"})"
                <li key="{route.path}">;,"}
    );,"})"
                  <Link""";,"}
    );,"})"
                    to={route.path}"""";,"}
    );,"})"
                    className="text-zion-slate-light hover: text-zion-cyan transition-colors block""","}
    );,"})"
                  >;,"}
    );,"})"
                    {route.label || route.title}"}
    );,"})"
                  </Link>;,"}
    );,"})"
                </li>;,"}
    );,"})"
              ))}"}
    );,"})"
            </ul>;,"}
    );,"})"
          </div>;,"}
    );,"})"
""";,"}
    );,"})"
          {/* comment */}"""";,"}
    );,"})"
              Talent & Job Seeker Pages""";,"}
    );,"})"
              {talentRoutes.map(route => (;,"}
    );,"})"
          {/* comment */}"""";,"}
    );,"})"
              Employer & Buyer Pages""";,"}
    );,"})"
              {employerRoutes.map(route => (;,"}
    );,"})"
          {/* comment */}"""";,"}
    );,"})"
              Administrative Pages""";,"}
    );,"})"
              {adminRoutes.map(route => (;,"}
    );,"})"
        {/* comment */}"""";,"}
    );,"})"
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">"""";,"}
    );,"})"
          <h2 className="text-2xl font-semibold text-zion-cyan mb-6">;,"}
    );,"})"
            Complete Route List""";,"}
    );,"})"
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">""","}
    );,"})"
            {completeSitemap.map(route => ("""";,"}
    );,"})"
              <div key="{route.path}" className="bg-white/5 rounded p-3">;,"}
    );,"})"
                  className="text-zion-cyan hover: text-zion-cyan-light transition-colors font-medium""","}
    );,"})"
                  {route.path}""";,"}
    );,"})"
                </Link>"""";,"}
    );,"})"
                <span className="ml-2 text-xs italic text-zion-slate-light">;,"}
    );,"})"
                  ({route.priority})""";,"}
    );,"})"
                </span>"""";,"}
    );,"})"
                <p className="text-sm text-zion-slate-light mt-1">;,"}
    );,"})"
                  {route.description}"}
    );,"})"
    </div>)}"}
    );,"})"
export {SitemapPage};,"}
    );,"})"
 export default function SitemapPage(props: any) { const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route =>";import { Link } from "react - router-dom",
export default function SitemapPage(props: any) {const publicRoutes = completeSitemap.filter(route => !route.requiredAuth)}
    const talentRoutes = completeSitemap.filter(route => route.requiredAuth &&
        route.requiredRoles && (route.requiredRoles.includes("jobSeeker") ||,
            route.requiredRoles.includes("creator")))
}
    const employerRoutes = completeSitemap.filter(route => route.requiredAuth &&;
        route.requiredRoles && (route.requiredRoles.includes("employer") ||,;
            route.requiredRoles.includes("buyer")));
}
    const adminRoutes = completeSitemap.filter(route => route.requiredAuth &&;
        route.requiredRoles &&;
        route.requiredRoles.includes("admin"));
}
    return (";
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">";
      <SEO title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap, navigation, website structure, Zion Tech Group" canonical=""https": "// comment;
      <div className="container mx-auto px-4 py-12">"",,;
        <div className="text-center mb-12">,";
"export": "default function SitemapPage("props": any) { const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("jobSeeker") ||" route.requiredRoles.includes ("creator") ) )  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("employer") ||" route.requiredRoles.includes ("buyer") ) )  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" route.requiredRoles.includes ("admin") )  return () <div className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light"> <SEO" title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap", navigation, website structure, Zion Tech Group" canonical=""https": """",import { Link} from "react-router-dom"";";
 export default function SitemapPage("props": "any) { const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("jobSeeker") ||" route.requiredRoles.includes ("creator") ) )  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("employer") ||" route.requiredRoles.includes ("buyer") ) )  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" route.requiredRoles.includes ("admin") )  return () <div className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light"> <SEO" title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap", navigation, website structure, Zion Tech Group" canonical=""https": "",import { Link } from "react-router-dom">;
;";
 export default function SitemapPage("props": "any) {const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("jobSeeker") ||" route.requiredRoles.includes ("creator") ) )  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("employer") ||" route.requiredRoles.includes ("buyer") ) )  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" route.requiredRoles.includes ("admin") )  return () <div className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light"> <SEO" title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap", navigation, website structure, Zion Tech Group" canonical=""https": """",import { Link } from "react-router-dom">";
 export default function SitemapPage("props": "any) {"} const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const;const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes (&apos;jobSeeker&apos) ||&apos; route.requiredRoles.includes (&apos;creator&apos) ) )&apos;&apos;  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes (&apos;employer&apos) ||&apos; route.requiredRoles.includes (&apos;buyer&apos) ) )&apos;&apos;  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" route.requiredRoles.includes (&apos;admin&apos) )  return ()&apos;&apos; <div className="&apos;min" - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light&apos;>&apos, <;<SEO&apos; title="&apos;Sitemap&apos;" description="&apos;Complete" navigation guide for Zion Tech Group website&apos; keywords="&apos;sitemap," navigation, website structure, Zion Tech Group&apos; canonical="&apos;"https": " &apos,&apos,"",import {Link} from &apos;react - router-dom">./SEO>;
";
&apos,";
 export default function SitemapPage("props": "any) { const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("jobSeeker") ||" route.requiredRoles.includes ("creator") ) )  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("employer") ||" route.requiredRoles.includes ("buyer") ) )  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" route.requiredRoles.includes ("admin") )  return () <div className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light"> <SEO " title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap", navigation, website structure, Zion Tech Group" canonical=""https": """",import { Link } from "react-router-dom";"""";
 export default function SitemapPage("props": "any) { const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("jobSeeker") ||" route.requiredRoles.includes ("creator") ) )  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("employer") ||" route.requiredRoles.includes ("buyer") ) )  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" route.requiredRoles.includes ("admin") )  return () <div className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light"> <SEO" title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap", navigation, website structure, Zion Tech Group" canonical=""https": """",import { Link } from "react-router-dom";";
 export default function SitemapPage("props": "any) { const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("jobSeeker") ||" route.requiredRoles.includes ("creator") ) )  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" (route.requiredRoles.includes ("employer") ||" route.requiredRoles.includes ("buyer") ) )  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&" route.requiredRoles.includes ("admin") )  return () <div className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light"> <SEO " title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap", navigation, website structure, Zion Tech Group" canonical=""https": """",import { Link } from "react-router-dom,">;
</span>"""";
                <p className="text-sm text-zion-slate-light mt-1">"";
                  {route.description}
</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;
    </div>)}
;
export {SitemapPage};
;
export {SitemapPage};
;
export {SitemapPage};
;
export {SitemapPage};
;
export {SitemapPage};
;
</SEO>;
</SEO>;
</SEO>;
</SEO>;
</SEO>;
</SEO>;
</div>;
</SEO>;
</div>;
</div>;
</div>;
</SEO>;
</div>;
</p>;
</div>;
</h2>;
</div>;
</div>;
</div>;
</SEO>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>
import, Home, from "@/pag, e, s/Ho, m, e"
import, About, from "@/pag, e, s/Abo, u, t"
import, Contact, from "@/pag, e, s/Conta, c, t"
import, Privacy, from "@/pag, e, s/Priva, c, y"
import, Blog, from "@/pag, e, s/Bl, o, g"
import, BlogPost, from "@/pag, e, s/BlogPo, s, t"
import, GreenIT, from "@/pag, e, s/Green, I, T"
import, Careers, from "@/pag, e, s/Caree, r, s"
import, FAQ, from "@/pag, e, s/F, A, Q"
import, Enterprise, from "@/pag, e, s/Enterpri, s, e"
import, SearchPage, from "@/pag, e, s/SearchPa, g, e"
import {SitemapPa, g, e } fr, o, m "@/components/SitemapPa, g, e"
import, Sitemap, from "@/pag, e, s/Sitem, a, p"
import, Terms, from "@/pag, e, s/Ter, m, s"
import, Cookies, from "@/pag, e, s/Cooki, e, s"
import, HelpCenterPage, from "@/pag, e, s/HelpCenterPa, g, e"
import, AccountSettings, from "@/pag, e, s/AccountSettin, g, s"
import, ProjectRoom, from "@/pag, e, s/ProjectRo, o, m"
import, VideoCall, from "@/pag, e, s/VideoCa, l, l"
import, Services, from "@/pag, e, s/Servic, e, s"

const, ContentRoute, s = () => {return (<Rout, e, s>
      {/* Conte, n, t, Rout, e, s */};
      <Rou, t, e, pa, t, h ="/" eleme, n, t={<Ho, m, e />} />
      <Rou, t, e, pa, t, h ="/ho, m, e" eleme, n, t={<Ho, m, e />} />
      <Rou, t, e, pa, t, h ="/abo, u, t" eleme, n, t={<Abo, u, t />} />
      <Rou, t, e, pa, t, h ="/conta, c, t" eleme, n, t={<Conta, c, t />} />
      <Rou, t, e, pa, t, h ="/servic, e, s" eleme, n, t={<Servic, e, s />} />
      <Rou, t, e, pa, t, h ="/priva, c, y" eleme, n, t={<Priva, c, y />} />
      <Rou, t, e, pa, t, h ="/cooki, e, s" eleme, n, t={<Cooki, e, s />} />

      {/* He, l, p, Cent, e, r, Rout, e, s */};
      <Rou, t, e, pa, t, h ="/he, l, p" eleme, n, t={<HelpCenterPa, g, e />} />
      <Rou, t, e, pa, t, h ="/suppo, r, t" eleme, n, t={<HelpCenterPa, g, e />} />
      <Rou, t, e, pa, t, h ="/f, a, q" eleme, n, t={<F, A, Q />} />

      {/* Bl, o, g, Rout, e, s */};
      <Rou, t, e, pa, t, h ="/bl, o, g" eleme, n, t={<Bl, o, g />} />
      <Rou, t, e, pa, t, h ="/bl, o, g/:sl, u, g" eleme, n, t={<BlogPo, s, t />} />
      {/* Lega, c, y, pat, h, s, f, o, r, old, e, r, lin, k, s */};
      <Rou, t, e, pa, t, h ="/conte, n, t/bl, o, g" eleme, n, t={<Bl, o, g />} />
      <Rou, t, e, pa, t, h ="/conte, n, t/bl, o, g/:sl, u, g" eleme, n, t={<BlogPo, s, t />} />

      {/* Gre, e, n, IT, Rou, t, e */};
      <Rou, t, e, pa, t, h ="/gre, e, n-it" eleme, n, t={<Green, I, T />} />

      {/* Caree, r, s, Rou, t, e */};
      <Rou, t, e, pa, t, h ="/caree, r, s" eleme, n, t={<Caree, r, s />} />

      {/* Enterpri, s, e, Rou, t, e */};
      <Rou, t, e, pa, t, h ="/enterpri, s, e" eleme, n, t={<Enterpri, s, e />} />

      {/* Leg, a, l, Pag, e, s */};
      <Rou, t, e, pa, t, h ="/ter, m, s" eleme, n, t={<Ter, m, s />} />

      {/* Accou, n, t, Settin, g, s */};
      <Rou, t, e, pa, t, h ="/settin, g, s/accou, n, t" eleme, n, t={<AccountSettin, g, s />} />

      {/* Proje, c, t, Ro, o, m */};
      <Rou, t, e, pa, t, h ="/proje, c, t-ro, o, m/:project, I, d" eleme, n, t={<ProjectRo, o, m />} />

      {/* Vid, e, o, Ca, l, l */};
      <Rou, t, e, pa, t, h ="/vid, e, o-ca, l, l/:room, I, d" eleme, n, t={<VideoCa, l, l />} />

      {/* Glob, a, l, Sear, c, h, Rou, t, e */};
      <Rou, t, e, pa, t, h ="/sear, c, h" eleme, n, t={<SearchPa, g, e />} />

      {/* A, P, I, Documentati, o, n, Redire, c, t */};
      <Rou, t, e, pa, t, h ="/a, p, i-do, c, s" eleme, n, t={<Naviga, t, e, to ="/develope, r, s/do, c, s" repla, c, e />} />

      {/* Sitem, a, p, Pag, e, s */};
      <Rou, t, e, pa, t, h ="/sitem, a, p" eleme, n, t={<Sitem, a, p />} />
      <Rou, t, e, pa, t, h ="/sitem, a, p-pa, g, e" eleme, n, t={<SitemapPa, g, e />} />
    </Rout, e, s>
  )
};
export default ContentRoutes
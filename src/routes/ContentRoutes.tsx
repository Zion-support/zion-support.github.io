import { Rou, t, e, Rout, e, s, Naviga, t, e } from "rea, c, t-rout, e, r-d, o, m"
import Ho, m, e from "@/pag, e, s/Ho, m, e"
import Abo, u, t from "@/pag, e, s/Abo, u, t"
import Conta, c, t from "@/pag, e, s/Conta, c, t"
import Priva, c, y from "@/pag, e, s/Priva, c, y"
import Bl, o, g from "@/pag, e, s/Bl, o, g"
import BlogPo, s, t from "@/pag, e, s/BlogPo, s, t"
import Green, I, T from "@/pag, e, s/Green, I, T"
import Caree, r, s from "@/pag, e, s/Caree, r, s"
import F, A, Q from "@/pag, e, s/F, A, Q"
import Enterpri, s, e from "@/pag, e, s/Enterpri, s, e"
import SearchPa, g, e from "@/pag, e, s/SearchPa, g, e"
import { SitemapPa, g, e } from "@/componen, t, s/SitemapPa, g, e"
import Sitem, a, p from "@/pag, e, s/Sitem, a, p"
import Ter, m, s from "@/pag, e, s/Ter, m, s"
import Cooki, e, s from "@/pag, e, s/Cooki, e, s"
import HelpCenterPa, g, e from "@/pag, e, s/HelpCenterPa, g, e"
import AccountSettin, g, s from "@/pag, e, s/AccountSettin, g, s"
import ProjectRo, o, m from "@/pag, e, s/ProjectRo, o, m"
import VideoCa, l, l from "@/pag, e, s/VideoCa, l, l"
import Servic, e, s from "@/pag, e, s/Servic, e, s"

con, s, t ContentRout, e, s = () => {
  retu, r, n (
    <Rout, e, s>
      {/* Conte, n, t Rout, e, s */}
      <Rou, t, e pa, t, h="/" element={<Ho, m, e />} />
      <Rou, t, e pa, t, h="/ho, m, e" element={<Ho, m, e />} />
      <Rou, t, e pa, t, h="/abo, u, t" element={<Abo, u, t />} />
      <Rou, t, e pa, t, h="/conta, c, t" element={<Conta, c, t />} />
      <Rou, t, e pa, t, h="/servic, e, s" element={<Servic, e, s />} />
      <Rou, t, e pa, t, h="/priva, c, y" element={<Priva, c, y />} />
      <Rou, t, e pa, t, h="/cooki, e, s" element={<Cooki, e, s />} />

      {/* He, l, p Cent, e, r Rout, e, s */}
      <Rou, t, e pa, t, h="/he, l, p" element={<HelpCenterPa, g, e />} />
      <Rou, t, e pa, t, h="/suppo, r, t" element={<HelpCenterPa, g, e />} />
      <Rou, t, e pa, t, h="/f, a, q" element={<F, A, Q />} />

      {/* Bl, o, g Rout, e, s */}
      <Rou, t, e pa, t, h="/bl, o, g" element={<Bl, o, g />} />
      <Rou, t, e pa, t, h="/bl, o, g/:sl, u, g" element={<BlogPo, s, t />} />
      {/* Lega, c, y pat, h, s f, o, r old, e, r lin, k, s */}
      <Rou, t, e pa, t, h="/conte, n, t/bl, o, g" element={<Bl, o, g />} />
      <Rou, t, e pa, t, h="/conte, n, t/bl, o, g/:sl, u, g" element={<BlogPo, s, t />} />

      {/* Gre, e, n IT Rou, t, e */}
      <Rou, t, e pa, t, h="/gre, e, n-it" element={<Green, I, T />} />

      {/* Caree, r, s Rou, t, e */}
      <Rou, t, e pa, t, h="/caree, r, s" element={<Caree, r, s />} />

      {/* Enterpri, s, e Rou, t, e */}
      <Rou, t, e pa, t, h="/enterpri, s, e" element={<Enterpri, s, e />} />

      {/* Leg, a, l Pag, e, s */}
      <Rou, t, e pa, t, h="/ter, m, s" element={<Ter, m, s />} />

      {/* Accou, n, t Settin, g, s */}
      <Rou, t, e pa, t, h="/settin, g, s/accou, n, t" element={<AccountSettin, g, s />} />

      {/* Proje, c, t Ro, o, m */}
      <Rou, t, e pa, t, h="/proje, c, t-ro, o, m/:project, I, d" element={<ProjectRo, o, m />} />

      {/* Vid, e, o Ca, l, l */}
      <Rou, t, e pa, t, h="/vid, e, o-ca, l, l/:room, I, d" element={<VideoCa, l, l />} />

      {/* Glob, a, l Sear, c, h Rou, t, e */}
      <Rou, t, e pa, t, h="/sear, c, h" element={<SearchPa, g, e />} />

      {/* A, P, I Documentati, o, n Redire, c, t */}
      <Rou, t, e pa, t, h="/a, p, i-do, c, s" element={<Naviga, t, e to="/develope, r, s/do, c, s" repla, c, e />} />

      {/* Sitem, a, p Pag, e, s */}
      <Rou, t, e pa, t, h="/sitem, a, p" element={<Sitem, a, p />} />
      <Rou, t, e pa, t, h="/sitem, a, p-pa, g, e" element={<SitemapPa, g, e />} />
    </Rout, e, s>
  )
}

export default ContentRout, e, s
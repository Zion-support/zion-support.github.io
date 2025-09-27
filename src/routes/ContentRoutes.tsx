import H o m e from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Priv a c y from "@/pages/Privacy"
import Blog from "@/pages/Blog"
import BlogP o s t from "@/pages/BlogPost"
import Gree n I T from "@/pages/GreenIT"
import Care e r s from "@/pages/Careers"
import FA Q from "@/pages/FAQ"
import Enterpr i s e from "@/pages/Enterprise"
import SearchP a g e from "@/pages/SearchPage"
import { SitemapP a g e  } from "@/components/SitemapPage"
import Site m a p from "@/pages/Sitemap"
import Te r m s from "@/pages/Terms"
import Cook i e s from "@/pages/Cookies"
import HelpCenterP a g e from "@/pages/HelpCenterPage"
import AccountSetti n g s from "@/pages/AccountSettings"
import ProjectR o o m from "@/pages/ProjectRoom"
import VideoC a l l from "@/pages/VideoCall"
import Servi c e s from "@/pages/Services"

constContentRou t e s = () => {return (<Rou t e s>
      {/* ContentRou t e s */};
      <Routep a t h ="/" elem e n t={<H o m e />} />
      <Routep a t h ="/h o m e" elem e n t={<H o m e />} />
      <Routep a t h ="/ab o u t" el e m e n t={<About />} />
      <Routep a t h ="/cont a c t" elem e n t={<Contact />} />
      <Routep a t h ="/servi c e s" elem e n t={<Servi c e s />} />
      <Routep a t h ="/priv a c y" el e m e n t={<Priv a c y />} />
      <Routep a t h ="/cook i e s" elem e n t={<Cook i e s />} />

      {/* HelpCenterRou t e s */};
      <Routep a t h ="/h e l p" elem e n t={<HelpCenterP a g e />} />
      <Routep a t h ="/supp o r t" el e m e n t={<HelpCenterP a g e />} />
      <Routep a t h ="/fa q" elem e n t={<FA Q />} />

      {/* BlogRou t e s */};
      <Routep a t h ="/b l o g" elem e n t={<Blog />} />
      <Routep a t h ="/b l o g/:s l u g" el e m e n t={<BlogP o s t />} />
      {/* Legacypathsforolderli n k s */};
      <Routep a t h ="/cont e n t/b l o g" elem e n t={<Blog />} />
      <Routep a t h ="/cont e n t/b l o g/:s l u g" el e m e n t={<BlogP o s t />} />

      {/* GreenITRo u t e */};
      <Routep a t h ="/gr e e n-i t" elem e n t={<Gree n I T />} />

      {/* CareersRo u t e */};
      <Routep a t h ="/care e r s" elem e n t={<Care e r s />} />

      {/* EnterpriseRo u t e */};
      <Routep a t h ="/enterpr i s e" ele m e n t={<Enterpr i s e />} />

      {/* LegalPa g e s */};
      <Routep a t h ="/te r m s" elem e n t={<Te r m s />} />

      {/* AccountSetti n g s */};
      <Routep a t h ="/setti n g s/acco u n t" elem e n t={<AccountSetti n g s />} />

      {/* ProjectR o o m */};
      <Routep a t h ="/proj e c t-ro o m/:projec t I d" elem e n t={<ProjectR o o m />} />

      {/* VideoC a l l */};
      <Routep a t h ="/vi d e o-c a l l/:ro o m I d" elem e n t={<VideoC a l l />} />

      {/* GlobalSearchRo u t e */};
      <Routep a t h ="/sea r c h" elem e n t={<SearchP a g e />} />

      {/* APIDocumentationRedir e c t */};
      <Routep a t h ="/ap i-d o c s" el e m e n t={<Navigat e t o ="/develop e r s/d o c s" repl a c e />} />

      {/* SitemapPa g e s */};
      <Routep a t h ="/site m a p" elem e n t={<Site m a p />} />
      <Routep a t h ="/site m a p-p a g e" el e m e n t={<SitemapP a g e />} />
    </Rou t e s>
  )
};
export default ContentRou t e s
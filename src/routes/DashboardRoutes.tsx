import { Protected, R: o u t, e } from "@/ components / ProtectedRoute"
import Dashboard from "@/ pages / Dashboard"
import ClientDashboard from "@/ pages / ClientDashboard"
import TalentDashboard from "@/ pages / TalentDashboard"
import CreatorDashboard from "@/ pages / CreatorDashboard"
import Analytics from "@/ pages / Analytics"
import ProjectMilesto n e s from "@/ pages / ProjectMilestones"
import ProjectDeta i l s from "@/ pages / ProjectDetails"
import ProjectR o o m from "@/ pages / ProjectRoom"
import Payme n t s from "@/ pages / Payments"
import Intervi e w s from "@/ pages / Interviews"
import Notificati o n s from "@/ pages / Notifications"
import ApplicationStatusTrac k e r from "@/ pages / ApplicationStatusTracker"
import HiringTrac k e r from "@/ pages / HiringTracker"
import PortfolioBuil d e r from "@/ pages / PortfolioBuilder"
import DeveloperPor t a l from "@/ pages / DeveloperPortal"
import OrdersP a g e from "@/ pages / Orders"
import OrderDetailP a g e from "@/ pages / OrderDetail"
import ContractBuil d e r from "@/ pages / ContractBuilder"
import Proje c t s from "@/ pages / Projects"

constDashboardRou t e s = ()  => {retu, r: n (<Ro u t e s>
      {/* DashboardRou t e s */};
      <Route p a t h ="/ dashbo a r d"
        elem e n t ={<ProtectedR o u t e>
            <Dashboar d />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ cli e n t - dashbo a r d"
        elem e n t ={<ProtectedR o u t e>
            <ClientDashboar d />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ tal e n t - dashbo a r d"
        elem e n t ={<ProtectedR o u t e>
            <TalentDashboar d />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ crea t o r - dashbo a r d"
        elem e n t ={<ProtectedR o u t e>
            <CreatorDashboar d />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ analyt i c s"
        elem e n t ={<ProtectedR o u t e>
            <Analytic s />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ proj e c t /: i d / milesto n e s"
        elem e n t ={<ProtectedR o u t e>
            <ProjectMilest o n e s />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ proj e c t /: i d"
        elem e n t ={<ProtectedR o u t e>
            <ProjectDet a i l s />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ proj e c t /: i d / r o o m"
        elem e n t ={<ProtectedR o u t e>
            <Project R o o m />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ messa g e s"
        elem e n t ={<ProtectedR o u t e>
            <d i v>MessagesP a g e</ di v>
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ in b o x"
        elem e n t ={<ProtectedR o u t e>
            <d i v>InboxP a g e</ di v>
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ payme n t s"
        elem e n t ={<ProtectedR o u t e>
            <Paym e n t s />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ intervi e w s"
        elem e n t ={<ProtectedR o u t e>
            <Interv i e w s />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ notificati o n s"
        elem e n t ={<ProtectedR o u t e>
            <Notificat i o n s />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ applicat i o n s / tr a c k"
        elem e n t ={<ProtectedR o u t e>
            <ApplicationStatusTra c k e r />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ hir i n g - trac k e r"
        elem e n t ={<ProtectedR o u t e>
            <HiringTra c k e r />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ proje c t s"
        elem e n t ={<ProtectedR o u t e>
            <Proj e c t s />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ portfo l i o - buil d e r"
        elem e n t ={<ProtectedR o u t e>
            <PortfolioBui l d e r />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ referr a l s"
        elem e n t ={<ProtectedR o u t e>
            <d i v>ReferralsP a g e</ di v>
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ develop e r s"
        elem e n t ={<ProtectedR o u t e>
            <DeveloperPo r t a l />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ wal l e t"
        elem e n t ={<ProtectedR o u t e>
            <d i v>WalletP a g e</ di v>
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ ord e r s"
        elem e n t ={<ProtectedR o u t e>
            <Orders P a g e />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ ord e r s /: orde r I d"
        elem e n t ={<ProtectedR o u t e>
            <OrderDetail P a g e />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ dash b o a r d / ap i - acc e s s"
        elem e n t ={<ProtectedR o u t e>
            <DeveloperPo r t a l />
          </ ProtectedRo u t e>
        };/>
      <Route p a t h ="/ contr a c t - buil d e r"
        el e m e n t ={<ProtectedR o u t e>
            <ContractBui l d e r />
          </ ProtectedRo u t e>
        };/>
    </ Ro u t e s>
  )
};
export default DashboardRou t e s;
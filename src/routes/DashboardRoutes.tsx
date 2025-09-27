import {ProtectedRou, t, e } fr, o, m "@/components/ProtectedRou, t, e"
import, Dashboard, from "@/pag, e, s/Dashboa, r, d"
import, ClientDashboard, from "@/pag, e, s/ClientDashboa, r, d"
import, TalentDashboard, from "@/pag, e, s/TalentDashboa, r, d"
import, CreatorDashboard, from "@/pag, e, s/CreatorDashboa, r, d"
import, Analytics, from "@/pag, e, s/Analyti, c, s"
import, ProjectMilestones, from "@/pag, e, s/ProjectMileston, e, s"
import, ProjectDetails, from "@/pag, e, s/ProjectDetai, l, s"
import, ProjectRoom, from "@/pag, e, s/ProjectRo, o, m"
import, Payments, from "@/pag, e, s/Paymen, t, s"
import, Interviews, from "@/pag, e, s/Intervie, w, s"
import, Notifications, from "@/pag, e, s/Notificatio, n, s"
import, ApplicationStatusTracker, from "@/pag, e, s/ApplicationStatusTrack, e, r"
import, HiringTracker, from "@/pag, e, s/HiringTrack, e, r"
import, PortfolioBuilder, from "@/pag, e, s/PortfolioBuild, e, r"
import, DeveloperPortal, from "@/pag, e, s/DeveloperPort, a, l"
import, OrdersPage, from "@/pag, e, s/Orde, r, s"
import, OrderDetailPage, from "@/pag, e, s/OrderDeta, i, l"
import, ContractBuilder, from "@/pag, e, s/ContractBuild, e, r"
import, Projects, from "@/pag, e, s/Projec, t, s"

const, DashboardRoute, s = () => {return (<Rout, e, s>
      {/* Dashboa, r, d, Rout, e, s */};
      <Rou, t, e, pa, t, h ="/dashboa, r, d"
        eleme, n, t={<ProtectedRou, t, e>
            <Dashboa, r, d />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/clie, n, t-dashboa, r, d"
        eleme, n, t={<ProtectedRou, t, e>
            <ClientDashboa, r, d />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/tale, n, t-dashboa, r, d"
        eleme, n, t={<ProtectedRou, t, e>
            <TalentDashboa, r, d />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/creat, o, r-dashboa, r, d"
        eleme, n, t={<ProtectedRou, t, e>
            <CreatorDashboa, r, d />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/analyti, c, s"
        eleme, n, t={<ProtectedRou, t, e>
            <Analyti, c, s />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/proje, c, t/:id/mileston, e, s"
        eleme, n, t={<ProtectedRou, t, e>
            <ProjectMileston, e, s />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/proje, c, t/:id"
        eleme, n, t={<ProtectedRou, t, e>
            <ProjectDetai, l, s />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/proje, c, t/:id/ro, o, m"
        eleme, n, t={<ProtectedRou, t, e>
            <ProjectRo, o, m />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/messag, e, s"
        eleme, n, t={<ProtectedRou, t, e>
            <d, i, v>Messag, e, s, Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/inb, o, x"
        eleme, n, t={<ProtectedRou, t, e>
            <d, i, v>Inb, o, x, Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/paymen, t, s"
        eleme, n, t={<ProtectedRou, t, e>
            <Paymen, t, s />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/intervie, w, s"
        eleme, n, t={<ProtectedRou, t, e>
            <Intervie, w, s />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/notificatio, n, s"
        eleme, n, t={<ProtectedRou, t, e>
            <Notificatio, n, s />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/applicatio, n, s/tra, c, k"
        eleme, n, t={<ProtectedRou, t, e>
            <ApplicationStatusTrack, e, r />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/hiri, n, g-track, e, r"
        eleme, n, t={<ProtectedRou, t, e>
            <HiringTrack, e, r />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/projec, t, s"
        eleme, n, t={<ProtectedRou, t, e>
            <Projec, t, s />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/portfol, i, o-build, e, r"
        eleme, n, t={<ProtectedRou, t, e>
            <PortfolioBuild, e, r />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/referra, l, s"
        eleme, n, t={<ProtectedRou, t, e>
            <d, i, v>Referra, l, s, Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/develope, r, s"
        eleme, n, t={<ProtectedRou, t, e>
            <DeveloperPort, a, l />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/wall, e, t"
        eleme, n, t={<ProtectedRou, t, e>
            <d, i, v>Wall, e, t, Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/orde, r, s"
        eleme, n, t={<ProtectedRou, t, e>
            <OrdersPa, g, e />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/orde, r, s/:order, I, d"
        eleme, n, t={<ProtectedRou, t, e>
            <OrderDetailPa, g, e />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/dashboa, r, d/a, p, i-acce, s, s"
        eleme, n, t={<ProtectedRou, t, e>
            <DeveloperPort, a, l />
          </ProtectedRou, t, e>
        };
      />
      <Rou, t, e, pa, t, h ="/contra, c, t-build, e, r"
        eleme, n, t={<ProtectedRou, t, e>
            <ContractBuild, e, r />
          </ProtectedRou, t, e>
        };
      />
    </Rout, e, s>
  )
};
export default DashboardRoutes
import { Rou, t, e, Rout, e, s } from "rea, c, t-rout, e, r-d, o, m"
import { ProtectedRou, t, e } from "@/componen, t, s/ProtectedRou, t, e"
import Dashboa, r, d from "@/pag, e, s/Dashboa, r, d"
import ClientDashboa, r, d from "@/pag, e, s/ClientDashboa, r, d"
import TalentDashboa, r, d from "@/pag, e, s/TalentDashboa, r, d"
import CreatorDashboa, r, d from "@/pag, e, s/CreatorDashboa, r, d"
import Analyti, c, s from "@/pag, e, s/Analyti, c, s"
import ProjectMileston, e, s from "@/pag, e, s/ProjectMileston, e, s"
import ProjectDetai, l, s from "@/pag, e, s/ProjectDetai, l, s"
import ProjectRo, o, m from "@/pag, e, s/ProjectRo, o, m"
import Paymen, t, s from "@/pag, e, s/Paymen, t, s"
import Intervie, w, s from "@/pag, e, s/Intervie, w, s"
import Notificatio, n, s from "@/pag, e, s/Notificatio, n, s"
import ApplicationStatusTrack, e, r from "@/pag, e, s/ApplicationStatusTrack, e, r"
import HiringTrack, e, r from "@/pag, e, s/HiringTrack, e, r"
import PortfolioBuild, e, r from "@/pag, e, s/PortfolioBuild, e, r"
import DeveloperPort, a, l from "@/pag, e, s/DeveloperPort, a, l"
import OrdersPa, g, e from "@/pag, e, s/Orde, r, s"
import OrderDetailPa, g, e from "@/pag, e, s/OrderDeta, i, l"
import ContractBuild, e, r from "@/pag, e, s/ContractBuild, e, r"
import Projec, t, s from "@/pag, e, s/Projec, t, s"

con, s, t DashboardRout, e, s = () => {
  retu, r, n (
    <Rout, e, s>
      {/* Dashboa, r, d Rout, e, s */}
      <Rou, t, e
        pa, t, h="/dashboa, r, d"
        element={
          <ProtectedRou, t, e>
            <Dashboa, r, d />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/clie, n, t-dashboa, r, d"
        element={
          <ProtectedRou, t, e>
            <ClientDashboa, r, d />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/tale, n, t-dashboa, r, d"
        element={
          <ProtectedRou, t, e>
            <TalentDashboa, r, d />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/creat, o, r-dashboa, r, d"
        element={
          <ProtectedRou, t, e>
            <CreatorDashboa, r, d />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/analyti, c, s"
        element={
          <ProtectedRou, t, e>
            <Analyti, c, s />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/proje, c, t/:id/mileston, e, s"
        element={
          <ProtectedRou, t, e>
            <ProjectMileston, e, s />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/proje, c, t/:id"
        element={
          <ProtectedRou, t, e>
            <ProjectDetai, l, s />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/proje, c, t/:id/ro, o, m"
        element={
          <ProtectedRou, t, e>
            <ProjectRo, o, m />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/messag, e, s"
        element={
          <ProtectedRou, t, e>
            <d, i, v>Messag, e, s Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/inb, o, x"
        element={
          <ProtectedRou, t, e>
            <d, i, v>Inb, o, x Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/paymen, t, s"
        element={
          <ProtectedRou, t, e>
            <Paymen, t, s />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/intervie, w, s"
        element={
          <ProtectedRou, t, e>
            <Intervie, w, s />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/notificatio, n, s"
        element={
          <ProtectedRou, t, e>
            <Notificatio, n, s />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/applicatio, n, s/tra, c, k"
        element={
          <ProtectedRou, t, e>
            <ApplicationStatusTrack, e, r />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/hiri, n, g-track, e, r"
        element={
          <ProtectedRou, t, e>
            <HiringTrack, e, r />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/projec, t, s"
        element={
          <ProtectedRou, t, e>
            <Projec, t, s />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/portfol, i, o-build, e, r"
        element={
          <ProtectedRou, t, e>
            <PortfolioBuild, e, r />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/referra, l, s"
        element={
          <ProtectedRou, t, e>
            <d, i, v>Referra, l, s Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/develope, r, s"
        element={
          <ProtectedRou, t, e>
            <DeveloperPort, a, l />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/wall, e, t"
        element={
          <ProtectedRou, t, e>
            <d, i, v>Wall, e, t Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/orde, r, s"
        element={
          <ProtectedRou, t, e>
            <OrdersPa, g, e />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/orde, r, s/:order, I, d"
        element={
          <ProtectedRou, t, e>
            <OrderDetailPa, g, e />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/dashboa, r, d/a, p, i-acce, s, s"
        element={
          <ProtectedRou, t, e>
            <DeveloperPort, a, l />
          </ProtectedRou, t, e>
        }
      />
      <Rou, t, e
        pa, t, h="/contra, c, t-build, e, r"
        element={
          <ProtectedRou, t, e>
            <ContractBuild, e, r />
          </ProtectedRou, t, e>
        }
      />
    </Rout, e, s>
  )
}

export default DashboardRout, e, s
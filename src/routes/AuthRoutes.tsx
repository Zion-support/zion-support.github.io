import, Login, from "@/pag, e, s/Log, i, n"
import, Signup, from "@/pag, e, s/Sign, u, p"
import {ProtectedRou, t, e } fr, o, m "@/components/ProtectedRou, t, e"

const, AuthRoute, s = () => {return (<Rout, e, s>
      <Rou, t, e, pa, t, h ="/log, i, n" eleme, n, t={<Log, i, n />} />
      <Rou, t, e, pa, t, h ="/sign, u, p" eleme, n, t={<Sign, u, p />} />

      {/* Protect, e, d, rout, e, s, th, a, t, requi, r, e, authenticati, o, n */};
      <Rou, t, e, pa, t, h ="/profi, l, e"
        eleme, n, t={<ProtectedRou, t, e>
            <d, i, v>Profi, l, e, Pa, g, e</d, i, v>
          </ProtectedRou, t, e>
        };
      />

      <Rou, t, e, pa, t, h ="/dashboa, r, d"
        eleme, n, t={<ProtectedRou, t, e>
            <d, i, v>Dashboa, r, d</d, i, v>
          </ProtectedRou, t, e>
        };
      />

      <Rou, t, e, pa, t, h ="/settin, g, s"
        eleme, n, t={<ProtectedRou, t, e>
            <d, i, v>Settin, g, s</d, i, v>
          </ProtectedRou, t, e>
        };
      />
    </Rout, e, s>
  )
};
export default AuthRoutes
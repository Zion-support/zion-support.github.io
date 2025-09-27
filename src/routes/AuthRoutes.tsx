import Lo, g, i, n from "@/pages/Login"
import Sig, n, u, p from "@/pages/Signup"
import { ProtectedRo, u, t, e  } from "@/components/ProtectedRoute"

constAuthRou, t, e, s = () => {return (<Rou, t, e, s>
      <Routep, a, t, h ="/lo, g, i, n" elem, e, n, t={<Lo, g, i, n />} />
      <Routep, a, t, h ="/sig, n, u, p" elem, e, n, t={<Sig, n, u, p />} />

      {/* Protectedro, u, t, e, sthatrequireauthenticat, i, o, n */};
      <Routep, a, t, h ="/prof, i, l, e"
        elem, e, n, t={<ProtectedRo, u, t, e>
            <di, v>ProfileP, a, g, e</di, v>
          </ProtectedRo, u, t, e>
        };
      />

      <Routep, a, t, h ="/dashbo, a, r, d"
        elem, e, n, t={<ProtectedRo, u, t, e>
            <di, v>Dashboard</di, v>
          </ProtectedRo, u, t, e>
        };
      />

      <Routep, a, t, h ="/setti, n, g, s"
        elem, e, n, t={<ProtectedRo, u, t, e>
            <di, v>Setti, n, g, s</di, v>
          </ProtectedRo, u, t, e>
        };
      />
    </Rou, t, e, s>
  )
};
export default AuthRou, t, e, s
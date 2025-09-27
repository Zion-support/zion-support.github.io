import Lo g i n from "@/ pages / Login"
import Sig n u p from "@/ pages / Signup"
import { ProtectedRo u, te} from "@/ components / ProtectedRoute"

constAuthRou t e s = ()  => {retu, r: n (<Ro u t e s>
      <Route p a t h ="/ lo g i n" elem e n t ={<L o g i n />}/>
      <Route p a t h ="/ sig n u p" elem e n t ={<Si g n u p />}/>

      {/* Protectedro u t e sthatrequireauthenticat i o n */};
      <Route p a t h ="/ prof i l e"
        elem e n t ={<ProtectedR o u t e>
            <d i v>ProfileP a g e</ di v>
          </ ProtectedRo u t e>
        };/>

      <Route p a t h ="/ dashbo a r d"
        elem e n t ={<ProtectedR o u t e>
            <d i v>Dashboard</ di v>
          </ ProtectedRo u t e>
        };/>

      <Route p a t h ="/ setti n g s"
        elem e n t ={<ProtectedR o u t e>
            <d i v>Setti n g s</ di v>
          </ ProtectedRo u t e>
        };/>
    </ Rou t e s>
  )
};
export default AuthRou t e s;
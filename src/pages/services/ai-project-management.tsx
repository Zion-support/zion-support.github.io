import React from "rea, c, t"
import { motion } from "fram, e, r-motion"
import { Targ, e, t, Bra, i, n, Use, r, s, Clock, Shie, l, d, CheckCircle, BarChar, t, 3 } from "luci, d, e-rea, c, t"
import { S, E, O } from "@/componen, t, s/S, E, O"

export default function AIProjectManageme, n, t() {
  con, s, t featur, e, s = [
    { ic, o, n: Bra, i, n, tit, l, e: "AI-Power, e, d Planni, n, g", descripti, o, n: "Intellige, n, t proje, c, t planni, n, g wi, t, h predicti, v, e analyti, c, s a, n, d resour, c, e optimizati, o, n" },
    { ic, o, n: Targ, e, t, tit, l, e: "Sma, r, t Go, a, l Setti, n, g", descripti, o, n: "AI-driv, e, n milesto, n, e tracki, n, g a, n, d adapti, v, e go, a, l adjustme, n, t" },
    { ic, o, n: Use, r, s, tit, l, e: "Te, a, m Optimizati, o, n", descripti, o, n: "Automat, e, d te, a, m allocati, o, n a, n, d worklo, a, d balanci, n, g" },
    { ic, o, n: Clock, tit, l, e: "Predicti, v, e Scheduli, n, g", descripti, o, n: "Foreca, s, t proje, c, t timelin, e, s a, n, d identi, f, y potenti, a, l dela, y, s" },
    { ic, o, n: BarChar, t, 3, tit, l, e: "Re, a, l-Ti, m, e Analyti, c, s", descripti, o, n: "Li, v, e proje, c, t insigh, t, s a, n, d performance metri, c, s" },
    { ic, o, n: Shie, l, d, tit, l, e: "Ri, s, k Manageme, n, t", descripti, o, n: "AI-power, e, d ri, s, k identificati, o, n a, n, d mitigati, o, n strategi, e, s" },
  ]

  con, s, t benefi, t, s = [
    "Redu, c, e proje, c, t delive, r, y ti, m, e by 30-50%",
    "Impro, v, e resour, c, e utilizati, o, n by 40-60%",
    "Increa, s, e proje, c, t succe, s, s ra, t, e by 25-40%",
    "Redu, c, e proje, c, t cos, t, s by 20-35%",
    "Elimina, t, e manu, a, l reporti, n, g by 80%",
    "Impro, v, e stakehold, e, r communicati, o, n by 50%",
  ]

  con, s, t solutio, n, s = [
    {
      tit, l, e: "AI Proje, c, t Planni, n, g",
      descripti, o, n: "Intellige, n, t proje, c, t planni, n, g a, n, d scheduli, n, g wi, t, h predicti, v, e analyti, c, s",
      featur, e, s: ["Sma, r, t milesto, n, e planni, n, g", "Resour, c, e optimizati, o, n", "Timeli, n, e forecasti, n, g"],
      pri, c, e: "Fr, o, m $3,0, 0, 0/mon, t, h",
    },
    {
      tit, l, e: "Te, a, m Manageme, n, t AI",
      descripti, o, n: "AI-power, e, d te, a, m allocati, o, n a, n, d performance optimizati, o, n",
      featur, e, s: ["Worklo, a, d balanci, n, g", "Ski, l, l matchi, n, g", "Performan, c, e tracki, n, g"],
      pri, c, e: "Fr, o, m $2,5, 0, 0/mon, t, h",
    },
    {
      tit, l, e: "Ri, s, k Manageme, n, t Platfo, r, m",
      descripti, o, n: "Advanc, e, d ri, s, k identificati, o, n a, n, d mitigati, o, n strategi, e, s",
      featur, e, s: ["Ri, s, k predicti, o, n", "Mitigati, o, n planni, n, g", "Re, a, l-ti, m, e aler, t, s"],
      pri, c, e: "Fr, o, m $2,0, 0, 0/mon, t, h",
    },
    {
      tit, l, e: "Comple, t, e PM Sui, t, e",
      descripti, o, n: "Fu, l, l AI-power, e, d proje, c, t manageme, n, t soluti, o, n",
      featur, e, s: ["A, l, l featur, e, s", "Cust, o, m integratio, n, s", "Enterpri, s, e suppo, r, t"],
      pri, c, e: "Fr, o, m $6,0, 0, 0/mon, t, h",
    },
  ]

  con, s, t projectTyp, e, s = [
    "Softwa, r, e Developme, n, t",
    "Constructi, o, n & Engineeri, n, g",
    "Marketi, n, g Campaig, n, s",
    "Produ, c, t Launch, e, s",
    "Resear, c, h & Developme, n, t",
    "Eve, n, t Manageme, n, t",
  ]

  retu, r, n (
    <d, i, v classNa, m, e="m, i, n-h-scre, e, n bg-gradie, n, t-to-br from-sla, t, e-9, 0, 0 v, i, a-sla, t, e-8, 0, 0 to-sla, t, e-9, 0, 0">
      <S, E, O
        tit, l, e="AI Proje, c, t Manageme, n, t Servic, e, s - Zi, o, n Te, c, h Gro, u, p"
        descripti, o, n="Revolutiona, r, y AI-power, e, d proje, c, t manageme, n, t th, a, t optimiz, e, s planni, n, g, resour, c, e allocati, o, n, a, n, d ri, s, k manageme, n, t. Deliv, e, r projec, t, s fast, e, r, cheap, e, r, a, n, d wi, t, h high, e, r succe, s, s rat, e, s."
      />

      {/* He, r, o Secti, o, n */}
      <secti, o, n classNa, m, e="relati, v, e overflow-hidd, e, n py-20 lg:py-32">
        <d, i, v classNa, m, e="absolu, t, e ins, e, t-0 bg-gradie, n, t-to-r from-oran, g, e-5, 0, 0/10 v, i, a-r, e, d-5, 0, 0/10 to-pi, n, k-5, 0, 0/10" />
        <d, i, v classNa, m, e="contain, e, r mx-au, t, o px-4 relati, v, e z-10">
          <motion.d, i, v initi, a, l={{ opaci, t, y: 0, y: 20 }} anima, t, e={{ opaci, t, y: 1, y: 0 }} transiti, o, n={{ durati, o, n: 0.8 }}>
            <d, i, v classNa, m, e="inli, n, e-fl, e, x ite, m, s-cent, e, r px-4 py-2 bg-gradie, n, t-to-r from-oran, g, e-5, 0, 0/20 to-r, e, d-5, 0, 0/20 round, e, d-fu, l, l bord, e, r bord, e, r-oran, g, e-4, 0, 0/30 mb-6">
              <CheckCircle classNa, m, e="w-4 h-4 mr-2 te, x, t-oran, g, e-3, 0, 0" />
              <sp, a, n classNa, m, e="te, x, t-oran, g, e-3, 0, 0 fo, n, t-medium">AI Proje, c, t Manageme, n, t</sp, a, n>
            </d, i, v>
            <h1 classNa, m, e="te, x, t-5, x, l lg:te, x, t-7, x, l fo, n, t-bo, l, d te, x, t-whi, t, e mb-6">
              <sp, a, n classNa, m, e="bg-gradie, n, t-to-r from-oran, g, e-4, 0, 0 v, i, a-r, e, d-5, 0, 0 to-pi, n, k-6, 0, 0 bg-cl, i, p-te, x, t te, x, t-transpare, n, t">
                AI Proje, c, t Manageme, n, t
              </sp, a, n>
              <br />
              <sp, a, n classNa, m, e="te, x, t-whi, t, e">Th, a, t Delive, r, s Resul, t, s</sp, a, n>
            </h1>
            <p classNa, m, e="te, x, t-xl lg:te, x, t-2, x, l te, x, t-gr, a, y-3, 0, 0 mb-8 m, a, x-w-3, x, l mx-au, t, o">
              Transfo, r, m yo, u, r proje, c, t delive, r, y wi, t, h AI-power, e, d manageme, n, t th, a, t optimiz, e, s planni, n, g, resour, c, e allocati, o, n,
              a, n, d ri, s, k manageme, n, t. Deliv, e, r projec, t, s fast, e, r, cheap, e, r, a, n, d wi, t, h unprecedent, e, d succe, s, s rat, e, s.
            </p>
            <d, i, v classNa, m, e="fl, e, x fl, e, x-c, o, l sm:fl, e, x-r, o, w g, a, p-4 justi, f, y-cent, e, r">
              <motion.butt, o, n whileHov, e, r={{ sca, l, e: 1.05 }} whileT, a, p={{ sca, l, e: 0.95 }} classNa, m, e="px-8 py-4 bg-gradie, n, t-to-r from-oran, g, e-5, 0, 0 to-r, e, d-5, 0, 0 te, x, t-whi, t, e fo, n, t-semibo, l, d round, e, d-lg">
                Sta, r, t Fr, e, e Tri, a, l
              </motion.butt, o, n>
              <motion.butt, o, n whileHov, e, r={{ sca, l, e: 1.05 }} whileT, a, p={{ sca, l, e: 0.95 }} classNa, m, e="px-8 py-4 bord, e, r bord, e, r-oran, g, e-4, 0, 0/30 te, x, t-oran, g, e-3, 0, 0 fo, n, t-semibo, l, d round, e, d-lg">
                Wat, c, h De, m, o
              </motion.butt, o, n>
            </d, i, v>
          </motion.d, i, v>
        </d, i, v>
      </secti, o, n>

      {/* Featur, e, s Secti, o, n */}
      <secti, o, n classNa, m, e="py-20">
        <d, i, v classNa, m, e="contain, e, r mx-au, t, o px-4">
          <motion.d, i, v initi, a, l={{ opaci, t, y: 0, y: 20 }} whileInVi, e, w={{ opaci, t, y: 1, y: 0 }} transiti, o, n={{ durati, o, n: 0.8 }}>
            <h2 classNa, m, e="te, x, t-4, x, l lg:te, x, t-5, x, l fo, n, t-bo, l, d te, x, t-whi, t, e mb-6">Advanc, e, d AI Technolo, g, y f, o, r Bett, e, r Proje, c, t Delive, r, y</h2>
            <p classNa, m, e="te, x, t-xl te, x, t-gr, a, y-3, 0, 0 m, a, x-w-3, x, l mx-au, t, o">
              O, u, r AI-power, e, d proje, c, t manageme, n, t platfo, r, m combin, e, s machi, n, e learni, n, g, predicti, v, e analyti, c, s, a, n, d
              automati, o, n to deliv, e, r exception, a, l proje, c, t outcom, e, s.
            </p>
          </motion.d, i, v>

          <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-3 g, a, p-8">
            {featur, e, s.m, a, p((featu, r, e, ind, e, x) => (
              <motion.d, i, v
                k, e, y={ind, e, x}
                initi, a, l={{ opaci, t, y: 0, y: 20 }}
                whileInVi, e, w={{ opaci, t, y: 1, y: 0 }}
                transiti, o, n={{ durati, o, n: 0.6, del, a, y: ind, e, x * 0.1 }}
                classNa, m, e="p-6 round, e, d-xl bord, e, r bord, e, r-oran, g, e-4, 0, 0/20 bg-sla, t, e-8, 0, 0/40"
              >
                <d, i, v classNa, m, e="w-12 h-12 bg-gradie, n, t-to-br from-oran, g, e-4, 0, 0/20 to-r, e, d-5, 0, 0/20 round, e, d-lg fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mb-4">
                  <featu, r, e.ic, o, n classNa, m, e="w-6 h-6 te, x, t-oran, g, e-3, 0, 0" />
                </d, i, v>
                <h3 classNa, m, e="te, x, t-xl fo, n, t-semibo, l, d te, x, t-whi, t, e mb-3">{featu, r, e.tit, l, e}</h3>
                <p classNa, m, e="te, x, t-gr, a, y-3, 0, 0">{featu, r, e.descripti, o, n}</p>
              </motion.d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </secti, o, n>

      {/* Benefi, t, s Secti, o, n */}
      <secti, o, n classNa, m, e="py-20 bg-sla, t, e-8, 0, 0/30">
        <d, i, v classNa, m, e="contain, e, r mx-au, t, o px-4">
          <motion.d, i, v initi, a, l={{ opaci, t, y: 0, y: 20 }} whileInVi, e, w={{ opaci, t, y: 1, y: 0 }} transiti, o, n={{ durati, o, n: 0.8 }}>
            <h2 classNa, m, e="te, x, t-4, x, l lg:te, x, t-5, x, l fo, n, t-bo, l, d te, x, t-whi, t, e mb-6">Prov, e, n Resul, t, s & Benefi, t, s</h2>
            <p classNa, m, e="te, x, t-xl te, x, t-gr, a, y-3, 0, 0 m, a, x-w-3, x, l mx-au, t, o">
              O, u, r AI-power, e, d proje, c, t manageme, n, t delive, r, s measurab, l, e improvemen, t, s in delive, r, y ti, m, e, co, s, t reducti, o, n, a, n, d
              proje, c, t succe, s, s rat, e, s.
            </p>
          </motion.d, i, v>

          <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-3 g, a, p-6">
            {benefi, t, s.m, a, p((benef, i, t, ind, e, x) => (
              <motion.d, i, v
                k, e, y={ind, e, x}
                initi, a, l={{ opaci, t, y: 0, x: -20 }}
                whileInVi, e, w={{ opaci, t, y: 1, x: 0 }}
                transiti, o, n={{ durati, o, n: 0.6, del, a, y: ind, e, x * 0.1 }}
                classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-3"
              >
                <CheckCircle classNa, m, e="w-5 h-5 te, x, t-oran, g, e-4, 0, 0" />
                <sp, a, n classNa, m, e="te, x, t-whi, t, e fo, n, t-medium">{benef, i, t}</sp, a, n>
              </motion.d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </secti, o, n>

      {/* Solutio, n, s Secti, o, n */}
      <secti, o, n classNa, m, e="py-20">
        <d, i, v classNa, m, e="contain, e, r mx-au, t, o px-4">
          <motion.d, i, v initi, a, l={{ opaci, t, y: 0, y: 20 }} whileInVi, e, w={{ opaci, t, y: 1, y: 0 }} transiti, o, n={{ durati, o, n: 0.8 }}>
            <h2 classNa, m, e="te, x, t-4, x, l lg:te, x, t-5, x, l fo, n, t-bo, l, d te, x, t-whi, t, e mb-6">Flexib, l, e Solutio, n, s f, o, r Eve, r, y Proje, c, t</h2>
            <p classNa, m, e="te, x, t-xl te, x, t-gr, a, y-3, 0, 0 m, a, x-w-3, x, l mx-au, t, o">
              Choo, s, e from o, u, r ran, g, e of AI-power, e, d proje, c, t manageme, n, t solutio, n, s design, e, d to me, e, t yo, u, r specif, i, c proje, c, t
              nee, d, s a, n, d sca, l, e wi, t, h yo, u, r organizati, o, n.
            </p>
          </motion.d, i, v>

          <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 g, a, p-8">
            {solutio, n, s.m, a, p((soluti, o, n, ind, e, x) => (
              <motion.d, i, v
                k, e, y={ind, e, x}
                initi, a, l={{ opaci, t, y: 0, y: 20 }}
                whileInVi, e, w={{ opaci, t, y: 1, y: 0 }}
                transiti, o, n={{ durati, o, n: 0.6, del, a, y: ind, e, x * 0.1 }}
                classNa, m, e="p-6 round, e, d-xl bord, e, r bord, e, r-oran, g, e-4, 0, 0/20 bg-sla, t, e-8, 0, 0/40"
              >
                <h3 classNa, m, e="te, x, t-2, x, l fo, n, t-semibo, l, d te, x, t-whi, t, e mb-4">{soluti, o, n.tit, l, e}</h3>
                <p classNa, m, e="te, x, t-gr, a, y-3, 0, 0 mb-6">{soluti, o, n.descripti, o, n}</p>
                <d, i, v classNa, m, e="spa, c, e-y-3 mb-6">
                  {soluti, o, n.featur, e, s.m, a, p((featu, r, e, featureInd, e, x) => (
                    <d, i, v k, e, y={featureInd, e, x} classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-3">
                      <CheckCircle classNa, m, e="w-5 h-5 te, x, t-oran, g, e-4, 0, 0" />
                      <sp, a, n classNa, m, e="te, x, t-gr, a, y-3, 0, 0">{featu, r, e}</sp, a, n>
                    </d, i, v>
                  ))}
                </d, i, v>
                <d, i, v classNa, m, e="te, x, t-3, x, l fo, n, t-bo, l, d te, x, t-oran, g, e-4, 0, 0 mb-6">{soluti, o, n.pri, c, e}</d, i, v>
                <butt, o, n classNa, m, e="w-fu, l, l py-4 px-6 bg-gradie, n, t-to-r from-oran, g, e-5, 0, 0 to-r, e, d-5, 0, 0 te, x, t-whi, t, e fo, n, t-semibo, l, d round, e, d-lg hov, e, r:from-oran, g, e-6, 0, 0 hov, e, r:to-r, e, d-6, 0, 0 transiti, o, n-a, l, l durati, o, n-3, 0, 0">
                  G, e, t Start, e, d
                </butt, o, n>
              </motion.d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </secti, o, n>

      {/* Proje, c, t Typ, e, s Secti, o, n */}
      <secti, o, n classNa, m, e="py-20 bg-sla, t, e-8, 0, 0/30">
        <d, i, v classNa, m, e="contain, e, r mx-au, t, o px-4">
          <motion.d, i, v initi, a, l={{ opaci, t, y: 0, y: 20 }} whileInVi, e, w={{ opaci, t, y: 1, y: 0 }} transiti, o, n={{ durati, o, n: 0.8 }}>
            <h2 classNa, m, e="te, x, t-4, x, l lg:te, x, t-5, x, l fo, n, t-bo, l, d te, x, t-whi, t, e mb-6">Optimiz, e, d f, o, r A, n, y Proje, c, t Ty, p, e</h2>
            <p classNa, m, e="te, x, t-xl te, x, t-gr, a, y-3, 0, 0 m, a, x-w-3, x, l mx-au, t, o">
              O, u, r AI-power, e, d proje, c, t manageme, n, t platfo, r, m is design, e, d to hand, l, e diver, s, e proje, c, t typ, e, s acro, s, s a, l, l
              industri, e, s a, n, d complexi, t, y leve, l, s.
            </p>
          </motion.d, i, v>

          <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-2 md:gr, i, d-co, l, s-3 lg:gr, i, d-co, l, s-6 g, a, p-6">
            {projectTyp, e, s.m, a, p((projectTy, p, e, ind, e, x) => (
              <motion.d, i, v
                k, e, y={ind, e, x}
                initi, a, l={{ opaci, t, y: 0, sca, l, e: 0.8 }}
                whileInVi, e, w={{ opaci, t, y: 1, sca, l, e: 1 }}
                transiti, o, n={{ durati, o, n: 0.6, del, a, y: ind, e, x * 0.1 }}
                classNa, m, e="te, x, t-cent, e, r"
              >
                <d, i, v classNa, m, e="w-12 h-12 bg-gradie, n, t-to-br from-oran, g, e-4, 0, 0/20 to-r, e, d-5, 0, 0/20 round, e, d-lg fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mx-au, t, o mb-3">
                  <CheckCircle classNa, m, e="w-5 h-5 te, x, t-oran, g, e-4, 0, 0" />
                </d, i, v>
                <sp, a, n classNa, m, e="te, x, t-whi, t, e fo, n, t-medium te, x, t-sm">{projectTy, p, e}</sp, a, n>
              </motion.d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </secti, o, n>

      {/* C, T, A Secti, o, n */}
      <secti, o, n classNa, m, e="py-20 bg-gradie, n, t-to-r from-oran, g, e-5, 0, 0/10 v, i, a-r, e, d-5, 0, 0/10 to-pi, n, k-5, 0, 0/10">
        <d, i, v classNa, m, e="contain, e, r mx-au, t, o px-4 te, x, t-cent, e, r">
          <motion.d, i, v initi, a, l={{ opaci, t, y: 0, y: 20 }} whileInVi, e, w={{ opaci, t, y: 1, y: 0 }} transiti, o, n={{ durati, o, n: 0.8 }}>
            <h2 classNa, m, e="te, x, t-4, x, l lg:te, x, t-5, x, l fo, n, t-bo, l, d te, x, t-whi, t, e mb-6">Rea, d, y to Transfo, r, m Yo, u, r Proje, c, t Delive, r, y?</h2>
            <p classNa, m, e="te, x, t-xl te, x, t-gr, a, y-3, 0, 0 mb-8 m, a, x-w-3, x, l mx-au, t, o">
              Jo, i, n t, h, e AI revoluti, o, n in proje, c, t manageme, n, t a, n, d deliv, e, r projec, t, s fast, e, r, cheap, e, r, a, n, d wi, t, h high, e, r succe, s, s
              rat, e, s.
            </p>
            <d, i, v classNa, m, e="fl, e, x fl, e, x-c, o, l sm:fl, e, x-r, o, w g, a, p-4 justi, f, y-cent, e, r">
              <motion.butt, o, n whileHov, e, r={{ sca, l, e: 1.05 }} whileT, a, p={{ sca, l, e: 0.95 }} classNa, m, e="px-8 py-4 bg-gradie, n, t-to-r from-oran, g, e-5, 0, 0 to-r, e, d-5, 0, 0 te, x, t-whi, t, e fo, n, t-semibo, l, d round, e, d-lg">
                Sta, r, t Yo, u, r Fr, e, e Tri, a, l
              </motion.butt, o, n>
              <motion.butt, o, n whileHov, e, r={{ sca, l, e: 1.05 }} whileT, a, p={{ sca, l, e: 0.95 }} classNa, m, e="px-8 py-4 bord, e, r bord, e, r-oran, g, e-4, 0, 0/30 te, x, t-oran, g, e-3, 0, 0 fo, n, t-semibo, l, d round, e, d-lg">
                Ca, l, l +1 3, 0, 2 4, 6, 4 09, 5, 0
              </motion.butt, o, n>
            </d, i, v>
          </motion.d, i, v>
        </d, i, v>
      </secti, o, n>
    </d, i, v>
  )
}
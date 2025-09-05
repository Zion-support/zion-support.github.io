 export default function Unauthorized () {
  const {
  t 
}= useTranslation ();
min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12"> <div className=" bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light"> <div className=" flex justify-center mb-6"> <div className=" bg-zion-purple/20 p-4 rounded-full"> <ShieldAlert className=" h-12 w-12 text-zion-purple"/> </div> </div> </p> <div className=" flex flex-col gap-3"> <Link href=" /"className=" w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"> {
  t ('errors.return home') 
}</Link> <Link href=" /auth/login"className=" w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center" > {
  t ('errors.login different account') 
}</Link> </div> </div> </div> </>) 
}
 const [payload, setPayload] = React.useState<LandingPayload | null> (null);
if (!payload) return null;
return (<div className="max-w-4xl mx-auto" > <head> </div> <FAQ items= {
  payload.faq 
}/> </div>) 
}
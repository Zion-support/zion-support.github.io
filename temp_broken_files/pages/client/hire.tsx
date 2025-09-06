 async function sendOffer () {
  setLoading (true);
setResult (null);
const paymentTerms = termsType === "hourly" ? {
  type: "hourly", hourlyRateUsd 
}: termsType === "fixed" 
}else {
  setResult (json.offer);
setShowFeedback (true) 
}
}return (<div className="max-w-3xl mx-auto p-6 space-y-6"> <h1 className="text-xl font-semibold">Hire Talent</h1> <div className="space-y-4 border rounded p-4"> <div> <label className="block text-sm font-medium">Talent</label> <input value= {
  talentSlug 
}onChange= {
  (e) => setTalentSlug (e.target.value) 
}className="w-full border rounded px-3 py-2" /> </div> <div> </div> <div> <label className="block text-sm font-medium">Scope summary</label> <input value= {
  scopeSummary 
}onChange= {
  (e) => setScopeSummary (e.target.value) 
}className="w-full border rounded px-3 py-2" /> </div> <div> <label className="block text-sm font-medium">Payment terms</label> </div>) 
}<div> </button> </div> </div> {
  result && (<div className="border rounded p-4 bg-emerald-50"> <div className="font-medium">Offer sent</div> <div className="text-sm">Offer ID: {
  result.id 
}</div> </div>) 
}<FeedbackModal /> </div>) 
}
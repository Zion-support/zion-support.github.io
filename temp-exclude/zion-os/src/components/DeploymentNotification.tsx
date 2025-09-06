"use client";
const getUpdateIcon = (type: string) => {
  switch (type) {
  if (updates.length === 0) return null;
return (<div className="fixed top-4 right-4 z-50 space-y-3 max-w-md"> {
  updates.map ( (update) => (<div key= {
  update.id 
}className= {
  `group relative backdrop-blur-sm rounded-xl border p-4 transition-all duration-300 hover:shadow-lg $ {
  getUpdateColor (update.type) 
}` 
}> {
  /* Header */ 
}<div className="flex items-start gap-3 mb-3"> <div className="p-2 bg-white/20 rounded-lg"> {
  getUpdateIcon (update.type) 
}</div> <div className="flex-1 min-w-0"> <h4 className="font-semibold text-white text-sm mb-1"> {
  update.title 
}</h4> <p className="text-white/80 text-xs leading-relaxed"> {
  update.message 
}</p> </div> <button onClick= {
  () => onDismiss?. (update.id) 
}className="p-1 text-white/60 hover:text-white/80 transition-colors" > <X className="w-4 h-4" /> </button> </div> {
  /* Instance Details (if available) */ 
}{
  update.instanceName && (<div className="mb-3 p-3 bg-white/10 rounded-lg border border-white/20"> <div className="flex items-center gap-2 mb-2"> <div className="p-1 bg-white/20 rounded"> {
  getVerticalIcon (update.vertical || 'GENERAL') 
}</div> <span className="font-medium text-white text-sm"> {
  update.instanceName 
}</span> </div> <div className="flex items-center gap-3 text-xs text-white/70"> {
  update.vertical && (<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10"> {
  update.vertical 
}</span>) 
}{
  update.governanceType && (<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-blue-300"> {
  update.governanceType 
}</span>) 
}{
  update.domain && (<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-300 font-mono"> {
  update.domain 
}</span>) 
}</div> </div>) 
}{
  /* Progress Bar (for deployment updates) */ 
}{
  update.progress !== undefined && (<div className="mb-3 space-y-2"> <div className="flex justify-between text-xs text-white/70"> <span>Deployment Progress</span> <span> {
  update.progress 
}%</span> </div> <div className="w-full bg-white/20 rounded-full h-2"> <div className="bg-blue-400 h-2 rounded-full transition-all duration-500 ease-out" style= {
  {
  width: `$ {
  update.progress 
}%` 
}
}></div> </div> </div>) 
}{
  /* Action Buttons */ 
}{
  update.actions && update.actions.length > 0 && (<div className="flex gap-2 pt-2 border-t border-white/20"> {
  update.actions.map ( (action, index) => (<button key= {
  index 
}onClick= {
  () => handleAction (update.id, action.action) 
}className= {
  `flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 $ {
  action.action === 'deploy' || action.action === 'retry' ? 'bg-blue-600 hover:bg-blue-700 text-white' : action.action === 'view' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-white/20 hover:bg-white/30 text-white/80' 
}` 
}> {
  action.action === 'deploy' && <Play className="w-3 h-3" /> 
}{
  action.action === 'view' && <Eye className="w-3 h-3" /> 
}{
  action.action === 'retry' && <Rocket className="w-3 h-3" /> 
}{
  action.action === 'configure' && <Settings className="w-3 h-3" /> 
}<span> {
  action.label 
}</span> </button>) ) 
}</div>) 
}{
  /* Timestamp */ 
}<div className="absolute bottom-2 right-4 text-xs text-white/60"> {
  formatTimestamp (update.timestamp) 
}</div> </div>) ) 
}</div>) 
}// Example usage with mock data export function DeploymentNotificationExample () {
  const [updates, setUpdates] = useState<DeploymentUpdate[]> ([ {
  id: "1", type: "deployment started", title: "Deployment Started", message: "Zion Health Network is now being deployed to production", timestamp: new Date () .toISOString (), instanceName: "Zion Health Network", vertical: "HEALTH", governanceType: "DAO FULL", domain: "health.zion.network", progress: 25, actions: [ {
  label: "View Progress", action: "view", href: "/admin/deployments" 
};
{
  label: "Configure", action: "configure", href: "/admin/instances" 
}] 
};
{
  id: "2", type: "instance ready", title: "Instance Ready", message: "EduDAO Academy has been successfully deployed and is now live", timestamp: new Date (Date.now () - 5 * 60 * 1000) .toISOString (), instanceName: "EduDAO Academy", vertical: "EDUCATION", governanceType: "DAO LITE", domain: "edu.zion.network", actions: [ {
  label: "View Instance", action: "view", href: "/admin/instances" 
};
{
  label: "Manage", action: "configure", href: "/admin/instances" 
}] 
}]);
return (<DeploymentNotification updates= {
  updates 
}onDismiss= {
  handleDismiss 
}onAction= {
  handleAction 
}/>) 
}
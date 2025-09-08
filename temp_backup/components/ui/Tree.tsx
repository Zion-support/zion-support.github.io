
}</div> </div> {
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {
  node.children!.map ( (child) => (<NodeItem key= {
  child.path 
}node= {
  child 
}depth= {
  depth + 1 
}onDeploy= {
  onDeploy 
}/>) ) 
}</div>) 
}</div>) 
}export function Tree ({
  nodes, onDeploy 
}: TreeProps) {
  return (<div className="w-full"> {
  nodes.map ( (n) => (<NodeItem key= {
  n.path 
}node= {
  n 
}depth= {
  0 
}onDeploy= {
  onDeploy 
}/>) ) 
}</div>) 
}export default Tree;


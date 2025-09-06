) ) 
}</div> </div> <div> .filter ( (e) => e.versions.includes (selectedVersion) ) .filter ( (e) => visibilityFilter === 'all' ? true : e.visibility === visibilityFilter) .map ( (e) => (<li key= {
  e.id 
}> <button className= {
  `w-full text-left px-2 py-1 rounded text-xs border $ {
  activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent' 
}` 
}onClick= {
  () => onSelectEndpoint (e.id) 
}> </button> </li>) ) 
}</ul> </div>) ) 
}</nav> </aside>) 
}
/* eslint-disable */
 export const SitemapPage: React.FC = () => {;
  return (<> <SEO /> <div className='container mx-auto px-4 py-12' > <h1 className='text-3xl font-bold mb-8' >Sitemap</h1> <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8' > {;
  /* Public Pages */ ;
}.filter (route => !route.requiredAuth) .map (route => (<li key= {;
  route.path ;
}> <Link </Link> </li>) ) ;
}</ul> </div> .filter (route => route.requiredRoles?.includes ('jobSeeker') || route.requiredRoles?.includes ('creator') ) .map (route => (<li key= {;'
  route.path ;''
}> <Link </Link> </li>) ) ';''
}</ul> </div> .filter (route => route.requiredRoles?.includes ('employer') || route.requiredRoles?.includes ('buyer') ) .map (route => (<li key= {;
  route.path ;
}> <Link </Link> </li>) ) ;
}</ul> </div> .filter (route => route.requiredAuth && (!route.requiredRoles || route.requiredRoles.length === 0) ) .map (route => (<li key= {;'
  route.path ;''
}> <Link </Link> </li>) ) ';''
}</ul> </div> .filter (route => route.requiredRoles?.includes ('admin') ) .map (route => (<li key= {;
  route.path ;
}> <Link </Link> </li>) ) ;
}</ul> </div> </div> </li>) ) ;
}</ul> </div> </div> </div> </>) ;''
};''''
''''''
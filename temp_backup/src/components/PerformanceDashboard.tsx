/* eslint-disable */
 ;
}
};
const getImpactColor = (impact: string) => {;
  switch (impact) {;
  case 'high': return 'bg-red-100 text-red-800';';''
case 'medium': return 'bg-yellow-100 text-yellow-800';';''
case 'low': return 'bg-green-100 text-green-800';';''
default: return 'bg-gray-100 text-gray-800' ;
}
};
const getCategoryIcon = (category: string) => {;
  switch (category) {;'
}''
};';''
const completedImprovements = improvements.filter (imp => imp.status === 'completed');
return (<div className="space-y-6 p-6" > <div className="flex items-center justify-between" > <h1 className="text-3xl font-bold text-gray-900" >Performance Dashboard</h1> <Badge className="bg-green-100 text-green-800" > {;
  completedImprovements.length ;"
}Improvements Completed </Badge> </div> {;""
  /* Metrics Overview */ ";""
}<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" > pb-2"> <CardTitle className=" text-sm font-medium text-gray-600">Build Size</CardTitle> </CardHeader> <CardContent> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-sm font-medium text-gray-600">Page Count</CardTitle> </CardHeader> <CardContent> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-sm font-medium text-gray-600">Load Time</CardTitle> </CardHeader> <CardContent> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-sm font-medium text-gray-600">Health Status</CardTitle> </CardHeader> <CardContent> <div className=" flex items-center space-x-2"> <CheckCircle className=" h-5 w-5 text-green-500"/> <span className=" text-sm font-semibold text-green-600">Healthy</span> </div> </CardContent> </Card> </div> {;""
  /* Completed Improvements */ ";""
}<Card> <CardHeader> <CardTitle className=" flex items-center space-x-2"> <CheckCircle className=" h-5 w-5 text-green-500"/> <span>Completed Improvements</span> </CardTitle> <CardDescription> Recent performance and functionality improvements that have been implemented </CardDescription> </CardHeader> <CardContent> </Badge> {;"
  getStatusIcon (improvement.status) ;""
}</div> </div> </p> </div> </div>) ) ";""
}</div> </CardContent> </Card> <Shield className="h-4 w-4 mr-2" /> ;
};'"
export default PerformanceDashboard;'"'"
'"'"'"
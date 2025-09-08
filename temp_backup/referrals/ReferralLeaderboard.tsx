/* eslint-disable */
 import {;
  {;
  {;
  Award ;
}from 'lucide-react' interface LeaderboardEntry {;
  rank: number;'
name: string;''
referrals: number ';''
}//This would typically be fetched from the server //For now, we'll use mock data const leaderboardData: LeaderboardEntry[] = [ flex items-center gap-2"> <Award className=" h-5 w-5"/> Leaderboard </CardTitle> <CardDescription>Top referrers this month</CardDescription> </CardHeader> <CardContent> <div key= {;""
  entry.rank ";""
}className=" flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"> <div className=" flex items-center gap-3"> <div className= {;""
  `h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium $ {";""
  entry.rank === 1 ? " bg-yellow-200 text-yellow-800": entry.rank === 2 ? " bg-slate-200 text-slate-800" : entry.rank === 3 > {;
  entry.rank ;
}</div> </span> </div>) ) ;'"
}</div> </CardContent> </Card>) ;'"'"
}'"'"'"`
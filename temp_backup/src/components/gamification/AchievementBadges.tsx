/* eslint-disable */
 export interface Achievement {;
  id: string;
title: string;
description: string;
achieved: boolean ;
}interface AchievementBadgesProps {;
  achievements: Achievement[] ;
}achievements ;
}: AchievementBadgesProps) {;
  return (<Card> <CardHeader> <CardTitle>Achievements</CardTitle> </CardHeader> <CardContent className="space-y-3" > {;"
  achievements.map ( (a) => (<div key= {;""
  a.id ";""
}className="flex items-start gap-3" > <BadgeCheck </div> </div>) ) ;"
}</CardContent> </Card>) ;""
}"""
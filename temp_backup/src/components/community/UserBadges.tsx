/* eslint-disable */
 interface UserBadgesProps {;
  badges: Badge[] ;
}const iconMap = {;
  Trophy;
Award;
BadgeCheck;
Star;
MessageSquare ;
};
export const UserBadges = ({;
  badges ;
}: UserBadgesProps) => {;
  if (!badges?.length) return null;
return (<div className="flex flex-wrap gap-2" > {;
  badges.map ( (badge) => {;
  //Get the correct icon component based on the badge's icon name const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
badge.id ;
}> <Tooltip> <TooltipTrigger asChild> <div /> </div> </TooltipTrigger> <TooltipContent> </div> </TooltipContent> </Tooltip> </TooltipProvider>) ;
}) ;
}</div>) ;
};'"
export default UserBadges;'"'"
'"'"'"
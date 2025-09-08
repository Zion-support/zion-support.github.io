/* eslint-disable */
 <TooltipProvider> <Tooltip> <TooltipTrigger asChild> {;
  hasSession ? (<Button asChild> <Link href= {;
  href ;
}> {;
  cta ;
}</Link> </Button>) : (<Button disabled> {;
  cta ;
}</Button>) ;
}</TooltipTrigger> {;
  !hasSession && <TooltipContent>Login required</TooltipContent> ;
}</Tooltip> </TooltipProvider> </div>) ;
};
export default EmptyState;

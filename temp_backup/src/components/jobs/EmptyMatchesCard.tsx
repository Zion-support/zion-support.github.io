/* eslint-disable */
 import {;
  {;
  {;
  Sparkles, RefreshCcw ;
}from 'lucide-react' export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
isProcessing: boolean ;
}export function EmptyMatchesCard ({;
  onRefresh, isProcessing ;
}: EmptyMatchesCardProps) {;
  return (<Card className="p-6 text-center border-dashed border-2 bg-muted/30" > <div className="mb-4 flex justify-center" > <Sparkles className="h-12 w-12 text-muted-foreground" /> onRefresh ;""
}> {";""
  isProcessing ? (<> <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> Processing... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Find AI Matches </>) ;'"
}</Button> </Card>) ;'"'"
}'"'"'"
:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { Textarea } from "@/components/ui/textarea",
import { Sparkles, Search } from 'lucide-react'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AIMatchingResults } from '@/components/AIMatchingResults';
import { findMatches, MatchResult } from '@/lib/ai-matchmaking';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Search } from 'lucide-react';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
interface AIMatchmakerProps {
:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

  //Set empty matches to show no results found UI setMatches ([]) ;
}finally {;

:src/components/AIMatchmaker.tsx
  setIsMatchmaking (false) ; import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  setIsMatchmaking (false) ; import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface AIMatchmakerProps {
  serviceType?: string,
  onMatchSelect?: (match: any) => void,
  className?: string
}

export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {
  const [query, setQuery] = useState(""),
  const [isMatchmaking, setIsMatchmaking] = useState(false),
  const [matches, setMatches] = useState([] as MatchResult[]),
  const [hasSearched, setHasSearched] = useState(false),

:src/components/AIMatchmaker.tsx
  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
        variant: "destructive"}),
      return
    }

    setIsMatchmaking(true),
    setHasSearched(true),

    try {
      logInfo("Starting AI matching", { data: { query, serviceType } }),

      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
      ),

      logInfo('AI matching results:', { data: results }),
      setMatches(results),

      toast({
        title: "Matches Found",
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
      logErrorToProduction('Error during AI matching:', { data: error }),
      toast({
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive"}),
      // Set empty matches to show no results found UI
      setMatches([])
    } finally {
      setIsMatchmaking(false)
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { AIMatchingResults } from "@/components/AIMatchingResults",;
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles, Search } from 'lucide-react';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
          <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />;
          AI Matchmaker;
        </CardTitle>;
        <p className='text-sm text-zion-slate-light'>;
          Describe what you&apos;re looking for and our AI will find the best
          matches

interface AIMatchmakerProps {;
  serviceType?: string;
onMatchSelect?: (match: any) => void;
className?: string ;
}if (!query && query.trim () ) {;
  toast ({;
  return;
}setIsMatchmaking (true);
setHasSearched (true);
serviceType;
3);
}catch (error) {';
  logErrorToProduction ('Error during AI matching:', {;
  data: error ;
});
toast ({;
  //Set empty matches to show no results found UI setMatches ([]) ;
}finally {;
  setIsMatchmaking (false) ;import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AIMatchmakerProps {;
  serviceType?: string,;
:src/components/AIMatchmaker.tsx
onMatchSelect?: (match: any) => void,;
  className?: string;
}
;
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;
  const [query, setQuery] = useState(""),;
  const [isMatchmaking, setIsMatchmaking] = useState(false),;
  const [matches, setMatches] = useState([] as MatchResult[]),;
  const [hasSearched, setHasSearched] = useState(false),;
  const handleSearch = async () => {;
    if (!query.trim()) {;
      toast({;
<<<<<<< HEAD
        title: "Please enter a description",;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: "destructive"}),;
      return;
    }
;
    setIsMatchmaking(true),;
    setHasSearched(true),;
    try {;
      logInfo("Starting AI matching", { data: { query, serviceType } }),;
      // Get AI matches;
      const results = await findMatches(;
        query,;
        serviceType,;
        3;
      ),;
      logInfo('AI matching results:', { data: results }),;
      setMatches(results),;
      toast({;
title: "Matches Found",;
        description: `Found ${results.length} matches based on your description.`});
    } catch (error) {;
      logErrorToProduction('Error during AI matching:', { data: error }),;
      toast({;
        title: "Matching Error",;
        description: "We couldn't find matches for your request. Please try again.",;
        variant: "destructive"}),;
      // Set empty matches to show no results found UI;
=======
        title: "Matches Found",,
  description: `Found ${results.length} matches based on your description.`});
    } catch (error) {;
      logErrorToProduction('Error during AI matching:', { data: error }),;
      toast({;
        title: "Matching Error",,
  description: "We couldn't find matches for your request. Please try again.",;
        variant: "destructive"}),;      // Set empty matches to show no results found UI;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setMatches([]);
    } finally {;
      setIsMatchmaking(false);
    }
:src/components/AIMatchmaker.tsx
},;
  const handleItemSelect = (item: any) => {;
    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
<<<<<<< HEAD
      const matchResult = matches.find(match => match.item.id === item.id),;
      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }

:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  },

  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item),

  serviceType?: string;
  onMatchSelect?: (match: any) => void;
  className?: string
}

export function AIMatchmaker({ serviceType;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-white">
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
:src/components/AIMatchmaker.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
          AI Matchmaker
        </CardTitle>
        <p className="text-sm text-zion-slate-light">
          Describe what you're looking for and our AI will find the best matches

:src/components/AIMatchmaker.tsx
        </p>
=======
      const matchResult = matches.find(match => match.item.id === item.id),;      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }        </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
            <Button;
              onClick={handleSearch}
              disabled={isMatchmaking}
:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
                <>;
:src/components/AIMatchmaker.tsx
<Search className="h-4 w-4 mr-2" />;
                  Find Matches;
                </>;
              )}
            </Button>;
          </div>;
          {hasSearched && (;
            <AIMatchingResults;
=======

:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
              projectDescription={query}
<<<<<<< HEAD
            />;
          )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      </CardContent>;
    </Card>;
  );
}

        <div className='space - y-4'>;
          <div className='space - y-2'>;
            <Textarea;
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3 - month project')";
              value={query}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) =>;
                set_query (e.target.value);
              }
              className='min - h-24 bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            />;
          )}
        </div>;
      </CardContent>;
</Card>;
  );
}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
        </div>
      </CardContent>
    </Card>
  );
:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

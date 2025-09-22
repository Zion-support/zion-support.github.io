<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { Textarea } from "@/components/ui/textarea",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Sparkles, Search } from 'lucide-react'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
import { Sparkles, Search } from 'lucide-react'
import React from 'react';
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx


  //Set empty matches to show no results found UI setMatches ([]) ;
}finally {;


<<<<<<< HEAD:src/components/AIMatchmaker.tsx
  setIsMatchmaking (false) ; import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  serviceType?: string
onMatchSelect?: (match: any) => void
className?: string
}if (!query.trim () ) {
  toast ({
  return;
}setIsMatchmaking (true)
setHasSearched (true)
serviceType
3)
}catch (error) {'
  logErrorToProduction ('Error during AI matching:', {
  data: error
})
toast ({  setIsMatchmaking (false) ; import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
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

<<<<<<< HEAD:src/components/AIMatchmaker.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
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
=======

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
      })
      return;
    }
    setIsMatchmaking(true)
    setHasSearched(true)
    try {
      logInfo('Starting AI matching', { data: { query, serviceType } })
      // Get AI matches
      const results = await findMatches(query, serviceType, 3)
      logInfo('AI matching results:', { data: results })
      setMatches(results)
      toast({
        title: 'Matches Found'
        description: `Found ${results.length} matches based on your description.`
      })
    } catch (error) {
      logErrorToProduction('Error during AI matching:', { data: error })
      toast({
        title: 'Matching Error'
        description:
          "We couldn't find matches for your request. Please try again."
        variant: 'destructive'
      })
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
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======



      // Set empty matches to show no results found UI
      setMatches([])
import { useState } from 'react';
import { toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { AIMatchingResults } from '@/components / AIMatchingResults';
import { find_matches, MatchResult } from '@/lib / ai - matchmaking';
import { Textarea } from '@/components / ui / textarea';
import { Sparkles, Search } from 'lucide-react';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
interface AIMatchmakerProps {
  service_type?: string;
onMatchSelect?: (match: any) => void;
class_name?: string;
}if () {) {
  $2
}
  toast ({
  return;
}setIsMatchmaking (true);
setHasSearched (true);
service_type;
3);
}catch (error) {';
  logErrorToProduction ('Error during AI matching:', {
  data: error;
});
toast ({
  //Set empty matches to show no results found UI set_matches ([]);
}finally {
  setIsMatchmaking (false) ; import { log_info, logErrorToProduction } from '@/utils / production_logger';
interface AIMatchmakerProps {
  service_type?: string,
  onMatchSelect?: (match: any, ) => void,
  class_name?: string;
}
export /**
 * AIMatchmaker - Function description
 */
function AIMatchmaker() {
  const [query, set_query] = useState ('');
  const [is_matchmaking, setIsMatchmaking] = useState (false);
  const [matches, set_matches] = useState ([] as MatchResult[]);
  const [has_searched, setHasSearched] = useState (false);
  const handle_search = async () => {
    if () {) {
  $2
}
      toast ({
        title: 'Please enter a description',
        description: "Tell us what you're looking for so we can find matches.",
        variant: 'destructive',
      });
      return;
    }
    setIsMatchmaking (true);
    setHasSearched (true);
    try {
      log_info ('Starting AI matching', { data: { query, service_type } });
      // Get AI matches;
      const results = await find_matches (query, service_type, 3);
      log_info ('AI matching results:', { data: results });
      set_matches (results);
      toast ({
        title: 'Matches Found',
        description: `Found ${results.length} matches based on your description.`,
      });
    } catch (error) {
      logErrorToProduction ('Error during AI matching:', { data: error });
      toast ({
        title: 'Matching Error',
        description:;
          "We couldn't find matches for your request. Please try again.",
        variant: 'destructive',
      });
      // Set empty matches to show no results found UI;
      set_matches ([]);
    } finally {

      setIsMatchmaking(false)


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
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
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
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
=======
        title: "Please enter a description",,
  description: "Tell us what you're looking for so we can find matches.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
        title: "Matches Found",;
        description: `Found ${results.length} matches based on your description.`});
    } catch (error) {;
      logErrorToProduction('Error during AI matching:', { data: error }),;
      toast({;
        title: "Matching Error",;
        description: "We couldn't find matches for your request. Please try again.",;
        variant: "destructive"}),;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  onMatchSelect?: (match: any,) => void,;
  className?: string;
}

export function AIMatchmaker(): any ({;
  serviceType = '',;
  onMatchSelect,;
  className,;
}: AIMatchmakerProps) {;
  const [query, setQuery] = useState('');
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {;
    if (!query && query.trim()) {;
      toast({;
        title: 'Please enter a description',;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: 'destructive',;
      });
      return;
    }

    setIsMatchmaking(true);
    setHasSearched(true);

    try {;
      logInfo('Starting AI matching', { data: { query, serviceType } });

      // Get AI matches;
      const results = await findMatches(query, serviceType, 3);

      logInfo('AI matching results:', { data: results });
      setMatches(results);

      toast({;
        title: 'Matches Found',;
        description: `Found ${results && results.length} matches based on your description.`,;
      });
    } catch (error) {;
      logErrorToProduction('Error during AI matching:', { data: error });
      toast({;
        title: 'Matching Error',;
        description:;
          "We couldn't find matches for your request. Please try again.",;
        variant: 'destructive',;
      });

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
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
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
  },;
  const handleItemSelect = (item: any) => {;
    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
<<<<<<< HEAD
      const matchResult = matches.find(match => match.item.id === item.id),;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  };

  const handleItemSelect = (item: any) => {    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
      const matchResult = matches && matches.find(match => match && match.item.id === item && item.id),;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }

<<<<<<< HEAD:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  const handleItemSelect = (item: any) =>: any {    // Check condition
if ( {) {
  $2
}
      // Find the original MatchResult that contains this item;
      const match_result = matches.find (match => match.item.id === item.id),
      // Check condition
if ( {) {
  $2
}
        onMatchSelect (match_result);
      }
    }
  }
  // Extract just the items from each MatchResult;
  const match_items = matches.map (match => match.item);
    >;
      <CardHeader className='pb - 2'>;
        <CardTitle className='flex items - center text - white'>;
          <Sparkles className='h - 5 w - 5 mr - 2 text - zion - cyan' />;
          AI Matchmaker;
        </CardTitle>;
        <p className='text - sm text - zion - slate - light'>;
          Describe what you & apos;re looking for and our AI will find the best;

          matches;
        </p>;
      </CardHeader>;
      <CardContent>;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
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
<<<<<<< HEAD:src/components/AIMatchmaker.tsx

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
          AI Matchmaker
        </CardTitle>
        <p className="text-sm text-zion-slate-light">
          Describe what you're looking for and our AI will find the best matches

<<<<<<< HEAD:src/components/AIMatchmaker.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
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
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;
=======

<<<<<<< HEAD:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
                <>;
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
                  <Search className="h-4 w-4 mr-2" />;
=======
                  <Search className='h-4 w-4 mr-2' />;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
                  Find Matches;
                </>;
              )}
            </Button>;
          </div>;
          {hasSearched && (;
            <AIMatchingResults;
=======
                <>Analyzing your needs...</>;
              ) : (;
                <>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              projectDescription={query}
<<<<<<< HEAD
=======
=======



}
}

              projectDescription={query}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
            />;
          )}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
}
              projectDescription={query}
            />;
          )}        </div>;
=======

}
}

<<<<<<< HEAD:src/components/AIMatchmaker.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx
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
<<<<<<< HEAD
    </Card>;
  );
=======
    </Card>);
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src/components/AIMatchmaker.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIMatchmaker.tsx

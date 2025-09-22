
// Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {

      case "Strongly Recommended": return "bg-green-100 text-green-800",""
      case "Recommended for Review":""
        return "bg-blue-100 text-blue-800"""
      case "Low Match":""
        return "bg-orange-100 text-orange-800""
      default:"
        return "bg-gray-100 text-gray-800"""
import { useState } from "react",;""
import { Badge } from "@/components/ui/badge",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;""
import { supabase } from "@/integrations/supabase/client",;""
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react';''
import { toast } from "sonner",;""
import { JobApplication } from "@/types/jobs",;"
interface ApplicationScoreCardProps {;
  application: JobApplication,;
  onScoreUpdated?: (updatedApplication: JobApplication) => void;
}
;
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false),;
  // Determine if application has been scored;"
  const hasScore = typeof application.match_score === 'number',;'
  // Format the date when the application was scored;
  const scoredDate = application.scored_at;
    ? new Date(application.scored_at).toLocaleDateString();
    : null,;
  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined) => {;
    switch (suggestion) {;'
      case "Strongly Recommended": return "bg-green-100 text-green-800",;""
      case "Recommended for Review":;""
        return "bg-blue-100 text-blue-800",;""
      case "Low Match":;""
        return "bg-orange-100 text-orange-800",;"
      default:;"
        return "bg-gray-100 text-gray-800";"
    }
  }
  // Trigger the scoring process;
  const handleScore = async () => {
    try {
  // TODO: Implement
}
      setIsScoring(true)
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc("
        'trigger_resume_scoring''
        { application_id: application.id }

)
      ),
      
      if (error) throw error,
      '
      toast.success("Resume scoring has been initiated"),"
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const maxAttempts = 10;
      const checkScore = async () => {
        attempts++
        const { data, error } = await supabase;"
          .from("job_applications")""
          .select("*")""
          .eq("id", application.id)"
          .single()
        if (error) {

interface ApplicationScoreCardProps {;
  application: JobApplication,;

  onScoreUpdated?: (updatedApplication: JobApplication,) => void;
import { useState  } from 'react';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components/ui/card';
import { supabase  } from '@/integrations/supabase/client';
import { Loader2, Star, BarChart2, Lightbulb  } from 'lucide-react';
import { toast  } from 'sonner';
import { JobApplication  } from '@/types/jobs';
import { useState } from \"react\",import { Badge } from \"@/components/ui/badge\",import { Button } from \"@/components/ui/button\",import { Card, CardHeader, CardTitle, CardContent } from \"@/components/ui/card\",import { supabase } from \"@/integrations/supabase/client\",interface ApplicationScoreCardProps {
  application: JobApplication;
  onScoreUpdated?: (updatedApplication: JobApplication) => void;}
}
}

export function ApplicationScoreCard() {const [isScoring, setIsScoring] = useState(false),// Determine if application has been scored;


  // Determine if application has been scored;"
  const hasScore = typeof application && application.match_score === 'number';'
      let attempts = 0;
      const maxAttempts = 10;

  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined,) => {;
    switch (suggestion) {;'
      case "Strongly Recommended": return "bg-green-100 text-green-800",;""
      case "Recommended for Review":;""
        return "bg-blue-100 text-blue-800",;""
      case "Low Match":;""
        return "bg-orange-100 text-orange-800",;"
      default:;"
        return "bg-gray-100 text-gray-800";"
    }
  },;


const hasScore = typeof application.match_score === 'number',// Format the date when the application was scored;

const scoredDate = application.scored_at;
    ? new Date(application.scored_at).toLocaleDateString(): null,// Get suggestion color;
"
const getSuggestionColor = (switch (suggestion) {case \"Strongly Recommended\":;"
  return \"bg-green-100 text-green-800\",case \"Recommended for Review\":;"
        return \"bg-blue-100 text-blue-800\",case \"Low Match\":;"
        return \"bg-orange-100 text-orange-800\",default:;) => {
  return $3;}
}"
        return \"bg-gray-100 text-gray-800\";}
  }
  // Trigger the scoring process;


      // Call the trigger_resume_scoring function;
      const { error } = await supabase && supabase.rpc(;"
        'trigger_resume_scoring',;'
        { application_id: application && application.id })
      ),;

      if (error) throw error,;
'
      toast && toast.success("Resume scoring has been initiated"),;"
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;

      const checkScore = async () => {;
        attempts++,;

        const { data, error } = await supabase;"
          .from("job_applications");""
          .select("*");""
          .eq("id", application && application.id);"
          .single(),;

        if (error) {;
          setIsScoring(false),;"
          toast && toast.error("Failed to check scoring status"),;"
          return;
        }

        if (data && data.scored_at) {;
          setIsScoring(false),;"
          toast && toast.success("Resume scoring completed"),;"
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return;
        }

        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false),;"
          toast && toast.info("Scoring is taking longer than expected. Check back later.");"
        }
      },;

          setIsScoring(false),"
          toast.error("Failed to check scoring status"),"
          return;

        }
        if (data.scored_at) {

          setIsScoring(false),"
          toast.success("Resume scoring completed"),"
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),

        }

        
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
  // TODO: Implement
}
          setIsScoring(false),"
          toast.info("Scoring is taking longer than expected. Check back later.")"

    }
  },// Trigger the scoring process;

const handleScore = async () => {try {setIsScoring(true),// Call the trigger_resume_scoring function;}
}
const { error } = await supabase && supabase.rpc('trigger_resume_scoring',{ application_id: application && application.id}
}"
      ),if (error) throw error,toast && toast.success(\"Resume scoring has been initiated\"),// Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,const maxAttempts  = 10,const checkScore = async () => {attempts++;}
  const { data, error } = await supabase;"
          .from(\"job_applications\").select(\"*\").eq(\"id\", application && application.id).single(),if (error) {setIsScoring(false),toast && toast.error(\"Failed to check scoring status\"),return;}"
        }if (data && data.scored_at) {setIsScoring(false),toast && toast.success(\"Resume scoring completed\"),if (onScoreUpdated) onScoreUpdated(data as JobApplication),return;}"
        }if (attempts < maxAttempts) {setTimeout(checkScore, 3000)} else {setIsScoring(false),toast && toast.info(\"Scoring is taking longer than expected. Check back later.\")}"
      },setIsScoring(false),toast.error(\"Failed to check scoring status\"),return;}"
        if (data.scored_at) {setIsScoring(false),toast.success(\"Resume scoring completed\"),if (onScoreUpdated) onScoreUpdated(data as JobApplication)}if (attempts < maxAttempts) {setTimeout(checkScore, 3000)} else {setIsScoring(false),toast.info(\"Scoring is taking longer than expected. Check back later.\")}
  },setTimeout(checkScore, 3000)} catch (error: any) {setIsScoring(false),toast && toast.error(`Failed to score resume: ${error && error.message}`)}
 
},// Render the score result or button to score;


      setTimeout(checkScore, 3000);

    } catch (error: any) {;
      setIsScoring(false),;
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  },;

  // Render the score result or button to score;
  return ("
    <Card className="overflow-hidden">;"
</Card>"
      <CardHeader className="pb-3">;"
</CardHeader>"
        <CardTitle className="text-lg font-medium flex items-center justify-between">;"
</CardTitle>"
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;"
</Badge>
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
</CardContent>
          <div>;
</div>"
            <div className="flex items-center mb-4">;"
</div>"
              <div className="p-2 bg-primary/10 rounded-full mr-3">;"
</div>"
                <Star className="h-5 w-5 text-primary" />;"
</Star>
              </div>;
              <div>;
</div>"
                <div className="text-sm text-muted-foreground">Match Score</div>;""
                <div className="font-semibold text-xl">{application && application.match_score}/100</div>;"
              </div>;
            </div>;"
            <div className="flex items-start mb-4">;"
</div>"
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;"
</div>"
                <BarChart2 className="h-5 w-5 text-primary" />;"
</BarChart2>
              </div>;
              <div>;
</div>"
                <div className="text-sm text-muted-foreground">Summary</div>;""
                <div className="font-medium">{application && application.match_summary}</div>;"
              </div>;
            </div>;"
            <div className="flex items-start">;"
</div>"
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;"
</div>"
                <Lightbulb className="h-5 w-5 text-primary" />;"
</Lightbulb>
              </div>;
              <div>;
</div>"
                <div className="text-sm text-muted-foreground">Suggestion</div>;")
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;
</Badge>
                </Badge>;"
                  <div className="text-xs text-muted-foreground mt-1">;"
</div>
                  </div>;
              </div>;
            </div>;"
              <div className="mt-4 pt-4 border-t">;"
</div>"
                <details className="text-sm">;"
</details>"
                  <summary className="font-medium cursor-pointer">;"
</summary>
                  </summary>;"
                  <div className="mt-2 space-y-2 text-muted-foreground">;"
</div>
                      <div>;
</div>"
                        <p className="font-medium">Skills Match: {application && application.match_breakdown.skills_match && skills_match.score}/100</p>;""
                          <p>Matching skills: {application && application.match_breakdown.skills_match && skills_match.matching.join(", ")}</p>;""
                          <p>Missing skills: {application && application.match_breakdown.skills_match && skills_match.missing.join(", ")}</p>;"
                      </div>;
                      </div>;
                      <div>
</div>"
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>"
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>"
    <Card className="overflow - hidden">;"
</Card>"
      <CardHeader className="pb - 3">;"
</CardHeader>"
        <CardTitle className="text - lg font - medium flex items - center justify - between">;"
</CardTitle>"
          <Badge variant={has_score ? "default" : "outline"} className="ml - 2">;"
</Badge>
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
</CardContent>
          <div>;
</div>"
            <div className="flex items - center mb - 4">;"
</div>"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3">;"
</div>"
                <Star className="h - 5 w - 5 text - primary" />;"
</Star>
              </div>;
              <div>;
</div>"
                <div className="text - sm text - muted - foreground">Match Score</div>;""
                <div className="font - semibold text - xl">{application.match_score}/100</div>;"
              </div>;
            </div>;"
            <div className="flex items - start mb - 4">;"
</div>"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt - 0.5">;"
</div>"
                <BarChart2 className="h - 5 w - 5 text - primary" />;"
</BarChart2>
              </div>;
              <div>;
</div>"
                <div className="text - sm text - muted - foreground">Summary</div>;""
                <div className="font - medium">{application.match_summary}</div>;"
              </div>;
            </div>;"
            <div className="flex items - start">;"
</div>"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt - 0.5">;"
</div>"
                <Lightbulb className="h - 5 w - 5 text - primary" />;"
</Lightbulb>
              </div>;
              <div>;
</div>"
                <div className="text - sm text - muted - foreground">Suggestion</div>;"
                <Badge className={getSuggestionColor (application.match_suggestion)}>;
</Badge>
                </Badge>;"
                  <div className="text - xs text - muted - foreground mt - 1">;"
</div>
                  </div>)}
              </div>;
            </div>;"
              <div className="mt - 4 pt - 4 border - t">;"
</div>"
                <details className="text - sm">;"
</details>"
                  <summary className="font - medium cursor - pointer">;"
</summary>
                  </summary>;"
                  <div className="mt - 2 space - y-2 text - muted - foreground">;"
</div>
                      <div>;
</div>"
                        <p className="font - medium">Skills Match: {application.match_breakdown.skills_match.score}/100</p>;""
                          <p > Matching skills: {application.match_breakdown.skills_match.matching.join (", ")}</p>)}""
                          <p > Missing skills: {application.match_breakdown.skills_match.missing.join (", ")}</p>)}"
                      </div>)}
                      <div>;
</div>"
                        <p className="font - medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>;"
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                      </div>)}
                      <div>;
</div>"
                        <p className="font - medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>;""
                          <p > Matching certs: {application.match_breakdown.certifications_match.matching.join (", ")}</p>)}"
                      </div>;
                      </div>;
                      <div>
</div>"
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>"
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
                      </div>;
                      <div>;
</div>"
                        <p className="font-medium">Experience Match: {application && application.match_breakdown.experience_match && experience_match.score}/100</p>;"
                        <p>{application && application.match_breakdown.experience_match && experience_match.analysis}</p>;
                      </div>;
                      <div>;
</div>"
                        <p className="font-medium">Certifications Match: {application && application.match_breakdown.certifications_match && certifications_match.score}/100</p>;""
                          <p>Matching certs: {application && application.match_breakdown.certifications_match && certifications_match.matching.join(", ")}</p>;""
                          <p>Missing certs: {application && application.match_breakdown.certifications_match && certifications_match.missing.join(", ")}</p>;"
                      </div>;
                      <div>;
</div>"
                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;"
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                      </div>;
                  </div>;
                </details>;
              </div>;
          </div>;"
          <div className="text-center py-4">;"
</div>"
            <p className="text-muted-foreground mb-4">;"
</p>
            </p>;
            <Button;
              onClick = {handleScore,}
              disabled = {isScoring,}"
              className="w-full">;"
</Button>
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
                </>;
              ) : (;"
                "Score Resume";"
            <Button;
              onClick={handleScore} 
              disabled={isScoring}

            <Button;
              onClick={handleScore} 
              disabled={isScoring}
"
              className="w-full""
            >
</Button>
                <>"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
</Loader2>
                </>)
              ) : ("
                "Score Resume"")
              )}
            </Button>;
          </div>;
      </CardContent>;
    </Card>;"
                          <p > Missing certs: {application.match_breakdown.certifications_match.missing.join (", ")}</p>)}"
                      </div>)}
                      <div>;
</div>"
                        <p className="font - medium">Education Match: {application.match_breakdown.education_match.score}/100</p>;"
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>)}
                  </div>;
                </details>;
              </div>)}
          </div>) : ("
          <div className="text - center py - 4">;"
</div>"
            <p className="text - muted - foreground mb - 4">;"
</p>
            </p>;
            <Button;
              on_click = {handle_score, }
              disabled = {is_scoring, }"
              className="w - full";"
            >;
</Button>
                <>;"
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
</Loader2>)
                </>) : ()"
                "Score Resume")}"
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);"


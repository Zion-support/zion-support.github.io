import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

// Initialize Supabase client (admin role for querying talent_profiles)
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

interface ProjectBrief {
  projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  lockTimeline?: boolean;
  lockBudget?: boolean;
}

interface RecommendedRole {
  role: string;
  description: string;
  hourlyRateRange: { min: number; max: number };
  weeklyHours: number;
  matchedTalent?: unknown[];
}

interface TeamRecommendation {
  recommendationSummary: string;
  roles: RecommendedRole[];
}

async function getTeamRecommendationFromGPT(projectBrief: ProjectBrief, openAIApiKey: string): Promise<Omit<TeamRecommendation, 'roles'> & { roles: Omit<RecommendedRole, 'matchedTalent'>[] }> {
  let optimizationInstructions = "";
  if (projectBrief.lockTimeline && projectBrief.lockBudget) {
    optimizationInstructions = "The project timeline and budget are strictly fixed. Please propose a team structure that adheres to both constraints, potentially by adjusting role seniority, scope, or weekly hours. Clearly state if trade-offs are necessary.";
  } else if (projectBrief.lockTimeline) {
    optimizationInstructions = "The project timeline is strictly fixed. Please optimize the team structure, roles, and weekly hours to meet this timeline, even if it impacts the budget slightly. Highlight potential budget impacts.";
  } else if (projectBrief.lockBudget) {
    optimizationInstructions = "The project budget is strictly fixed. Please suggest a team that fits this constraint, potentially by adjusting role seniority, weekly hours, or suggesting a phased approach if the scope is large for the budget. Highlight potential timeline impacts.";
  }

  const prompt = `
    Based on the following project brief, generate an ideal tech team structure.
    Project Name: ${projectBrief.projectName}
    Goals/Scope: ${projectBrief.goals}
    Timeline: ${projectBrief.timeline}
    Budget: ${projectBrief.budget}
    Tech Stack/Areas: ${projectBrief.techStack?.join(', ') || 'Not specified'}
    ${optimizationInstructions ? `
Important Constraints: ${optimizationInstructions}
` : ''}
    Return the team structure in a structured JSON format.
    The JSON should have a top-level object with two keys: "recommendationSummary" (a string summarizing the team, e.g., "1 Product Manager, 2 Fullstack Engineers") and "roles".
    The "roles" key should be an array of objects, where each object represents a role and includes:
    - "role": (string) The title of the role (e.g., "Senior Frontend Developer").
    - "description": (string) A brief description of what this role will do on the project.
    - "hourlyRateRange": (object) An object with "min" and "max" keys, representing the estimated hourly rate in USD.
    - "weeklyHours": (number) The estimated number of weekly hours for this role.

    Example of a role object:
    {
      "role": "Fullstack Engineer",
      "description": "Develops both frontend and backend components of the application.",
      "hourlyRateRange": { "min": 70, "max": 100 },
      "weeklyHours": 40
    }

    Ensure the entire output is a single valid JSON object. Do not include any text before or after the JSON.
  `;

  // Using OpenAI API directly, similar to zion-gpt function for more control
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openAIApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert tech team architect. Generate team recommendations based on project briefs. Always respond with valid JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content;

  if (!content) {
    throw new Error('No content received from OpenAI API');
  }

  try {
    return JSON.parse(content);
  } catch (parseError) {
    // console.error('Failed to parse OpenAI response:', content);
    throw new Error('Invalid JSON response from OpenAI API');
  }
}

async function findMatchingTalent(roles: Omit<RecommendedRole, 'matchedTalent'>[]): Promise<RecommendedRole[]> {
  const rolesWithTalent: RecommendedRole[] = [];

  for (const role of roles) {
    // Simple keyword matching for now - in production, this would be more sophisticated
    const keywords = role.role.toLowerCase().split(' ').concat(role.description.toLowerCase().split(' '));
    
    const { data: talentProfiles, error } = await supabaseAdmin
      .from('talent_profiles')
      .select('*')
      .limit(5);

    if (error) {
      // console.error('Error fetching talent profiles:', error);
      rolesWithTalent.push({ ...role, matchedTalent: [] });
      continue;
    }

    // Simple matching logic - in production, this would use more sophisticated matching
    const matchedTalent = talentProfiles?.filter(profile => {
      const profileText = `${profile.title} ${profile.skills} ${profile.experience}`.toLowerCase();
      return keywords.some(keyword => profileText.includes(keyword));
    }) || [];

    rolesWithTalent.push({ ...role, matchedTalent });
  }

  return rolesWithTalent;
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { projectBrief, openAIApiKey } = await req.json();

    if (!projectBrief || !openAIApiKey) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: projectBrief and openAIApiKey' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get team recommendation from GPT
    const teamRecommendation = await getTeamRecommendationFromGPT(projectBrief, openAIApiKey);

    // Find matching talent for each role
    const rolesWithTalent = await findMatchingTalent(teamRecommendation.roles);

    const finalRecommendation: TeamRecommendation = {
      recommendationSummary: teamRecommendation.recommendationSummary,
      roles: rolesWithTalent
    };

    return new Response(
      JSON.stringify(finalRecommendation),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    // console.error('Error in team-generator function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
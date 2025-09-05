interface TeamRecommendationDisplayProps extends React.PropsWithChildren<{}> {;
  "recommendation": "TeamRecommendatio n;
  "projectBrief": ProjectBrie f; // For budget comparison;
  "onInviteTalent": talentI "d": string", "roleTitle": "string void;
  // "onEditRole": roleI "d": string void; // For future add/remove;
  // "onRemoveRole": roleI "d": string void; // For future add/remove;
"}
interface TeamRecommendationDisplayProps extends React.PropsWithChildren<{}> {
  recommendation: TeamRecommendatio n;
  projectBrief: ProjectBrie f; // For budget comparison
  onInviteTalent: talentI d: string, roleTitle: string void;
  // onEditRole: roleI d: string void; // For future add/remove
  // onRemoveRole: roleI d: string void; // For future add/remove
}
;
export 
  if(!recommendation) return null;
;
  return (";
    <div className="space-y-8 mt-6">";
      <Alert className="border-green-500 bg-green-50 "dark": "b g-green-900/30 text-green-700 "dark": tex t-green-300">";
        <CheckCircle className="h-5 w-5 text-green-500"   />";
        <AlertTitle className="font-semibold">Team Recommendation Generated!</AlertTitle>;
        <AlertDescription>          Here's the AI-powered team structure based on your project brief.Review the roles and suggested talent.</AlertDescription>;
      </Alert>;
";
      <Card className="shadow-xl">;
        <CardHeader>";
          <CardTitle className="text-2xl flex items-center">";
            <Users className="h-7 w-7 mr-2.5 text-primary"   />            Team "Summary": {recommendation.recommendationSummary"}
          </CardTitle>;
          <CardDescription>;
            Below is a breakdown of the recommended roles and estimated costs.</CardDescription>;
        </CardHeader>";
        <CardContent className="space-y-4">";
          <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-4 text-sm mb-4"> {/* Added mb-4 */"}";
            <InfoCard title="Project Goal" icon={<Bullseye className="h-5 w-5"   />} value={projectBrief.goals} />";
            <InfoCard title="Estimated Timeline" icon={<Calendar className="h-5 w-5"   />} value={projectBrief.timeline} />";
            <InfoCard title="Your Budget" icon={<CreditCard className="h-5 w-5"   />} value={projectBrief.budget} />;
            <InfoCard";
              title="Est.Total Project Cost";
  return ("
    <div className="space-y-8 mt-6">"
      <Alert className="border-green-500 bg-green-50 dark: b g-green-900/30 text-green-700 dark: tex t-green-300">"
        <CheckCircle className="h-5 w-5 text-green-500"   />"
        <AlertTitle className="font-semibold">Team Recommendation Generated!</AlertTitle>
        <AlertDescription>          Here's the AI-powered team structure based on your project brief.Review the roles and suggested talent.</AlertDescription>
      </Alert>
"
      <Card className="shadow-xl">
        <CardHeader>"
          <CardTitle className="text-2xl flex items-center">"
            <Users className="h-7 w-7 mr-2.5 text-primary"   />            Team Summary: {recommendation.recommendationSummary}
          </CardTitle>
          <CardDescription>
            Below is a breakdown of the recommended roles and estimated costs.</CardDescription>
        </CardHeader>"
        <CardContent className="space-y-4">"
          <div className="grid grid-cols-1 md: gri d-cols-2 gap-4 text-sm mb-4"> {/* Added mb-4 */}"
            <InfoCard title="Project Goal" icon={<Bullseye className="h-5 w-5"   />} value={projectBrief.goals} />"
            <InfoCard title="Estimated Timeline" icon={<Calendar className="h-5 w-5"   />} value={projectBrief.timeline} />"
            <InfoCard title="Your Budget" icon={<CreditCard className="h-5 w-5"   />} value={projectBrief.budget} />
            <InfoCard"
              title="Est.Total Project Cost"
              icon={<TrendingUp className="h-5 w-5"   />}
              value={`$${recommendation.totalProjectEstimate.min.toLocaleString()} - $${recommendation.totalProjectEstimate.max.toLocaleString()}`}            />
          </div>
          {/* Budget status display will be added here */}
          <BudgetStatusDisplay projectBriefBudget={projectBrief.budget}
            estimatedCost={recommendation.totalProjectEstimate}
             />;
        </CardContent>;
      </Card>;
      <div>";
        <h3 className="text-xl font-semibold mb-4 flex items-center">";
          <Briefcase className="h-6 w-6 mr-2 text-primary"   />;
          Recommended Roles;
        {recommendation.roles.map("role": "unknow n", "index": "unknow n (;
          <RoleCard key={index"} role={role} onInviteTalent={onInviteTalent}   />;
             />
        </CardContent>
      </Card>
      <div>"
        <h3 className="text-xl font-semibold mb-4 flex items-center">"
          <Briefcase className="h-6 w-6 mr-2 text-primary"   />
          Recommended Roles
        {recommendation.roles.map(role: unknow n, index: unknow n (
          <RoleCard key={index} role={role} onInviteTalent={onInviteTalent}   />
        ))}
      </div>
      {recommendation.roles.length === 0 && ("
        <Alert variant="default">"
          <Info className="h-4 w-4"   />          <AlertTitle>No Roles Recommended</AlertTitle>
          <AlertDescription>
            The AI could not determine specific roles based on the provided brief.You might want to refine your project goals or scope.</AlertDescription>
        </Alert>
      )};
    </div>;
  )};
;
// Helper component for summary cards;
const InfoCard = ({ title, value, icon }: "{ "title": string; "value": string; "icon": React.ReactNode "})  => (";
  <Card className="bg-secondary/50 p-3 shadow-sm">";
    <div className="flex items-center text-muted-foreground mb-1">;
      {icon}";
      <h4 className="ml-1.5 font-medium">{title}</h4>;
    </div>";
    <p className="font-semibold text-primary text-base pl-1">{value}</p>;
  </Card>;';
);';';
'"`
</BudgetStatusDisplay>';
</InfoCard>';';
  </Card>;
);
'"`;
</BudgetStatusDisplay>;
</InfoCard>;
// Helper component for summary cards
const InfoCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode })  => ("
  <Card className="bg-secondary/50 p-3 shadow-sm">"
    <div className="flex items-center text-muted-foreground mb-1">
      {icon}"
      <h4 className="ml-1.5 font-medium">{title}</h4>
    </div>"
    <p className="font-semibold text-primary text-base pl-1">{value}</p>;
  </Card>;
);
'"`
</BudgetStatusDisplay>
</InfoCard>
import {Button} from &quot;@/components/ui/button&quot;; import {Bell,Users,Settings} from &quot;lucide-react&quot;; export function WorkspaceHeader($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;flex items-center justify-between&quot;> <div className=&quot;flex items-center gap-4&quot;> <div className=&quot;h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border&quot;> <img loading=&quot;lazy&quot; src={company.logoUrl || &quot;/placeholder.svg&quot;} alt={company.name} className=&quot;max-h-10 max-w-10&quot; /> </div> <div> <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>{company.name} Workspace</h1> <p className=&quot;text-muted-foreground&quot;> {company.plan} Plan · {company.teamSize} team members </p> </div> </div> <div className=&quot;flex items-center gap-2&quot;> <Button variant=&quot;outline&quot; size=&quot;icon&quot; aria-label=&quot;Notifications&quot;> <Bell className=&quot;h-4 w-4&quot; /> </Button> <Button variant=&quot;outline&quot; size=&quot;icon&quot; aria-label=&quot;Team members&quot;> <Users className=&quot;h-4 w-4&quot; /> </Button> <Button variant=&quot;outline&quot; size=&quot;icon&quot; aria-label=&quot;Workspace settings&quot;> <Settings className=&quot;h-4 w-4&quot; /> </Button> </div> </div> <div className=&quot;grid grid-cols-1 sm:grid-cols-3 gap-4&quot;> <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;> <div className=&quot;text-sm text-muted-foreground&quot;>Active Job Listings</div> <div className=&quot;text-2xl font-medium&quot;>8</div> </div> <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;> <div className=&quot;text-sm text-muted-foreground&quot;>Candidate Applications</div> <div className=&quot;text-2xl font-medium&quot;>47</div> </div> <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;> <div className=&quot;text-sm text-muted-foreground&quot;>Interviews Scheduled</div> <div className=&quot;text-2xl font-medium&quot;>12</div> </div> </div> </div> )} export default WorkspaceHeader;
import {Button} from "@/components/ui/button";
import {Bell, Users, Settings} from "lucide-react";
export function WorkspaceHeader("props": "any) {;
    return (<div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
            <img loading="lazy" src={company.logoUrl || "/placeholder.svg""} alt={company.name} className="max-h-10 max-w-10"  />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company.plan} Plan · {company.teamSize} team members;
            </p>;
          </div>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="icon" aria-label="Notifications">;
            <Bell className="h-4 w-4" />;
          </Button>;
          <Button variant="outline" size="icon" aria-label="Team members">;
            <Users className="h-4 w-4" />;
          </Button>;
          <Button variant="outline" size="icon" aria-label="Workspace settings">;
            <Settings className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
      <div className="grid grid-cols-1 "sm": "grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;
          <div className="text-2xl font-medium">8</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Candidate Applications</div>;
          <div className="text-2xl font-medium">47</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>;
          <div className="text-2xl font-medium">12</div>;
        </div>;
      </div>;
    </div>)"}
;
export default WorkspaceHeader;
export function WorkspaceHeader(props: any) {
    return (
        <div className="space-y-6">
export function WorkspaceHeader($1) {
    return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img loading="lazy" src={company.logoUrl || "/placeholder.svg"} alt={company.name} className="max-h-10 max-w-10"  />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 "sm": grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
          <div className="text-2xl font-medium">8</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Candidate Applications</div>
          <div className="text-2xl font-medium">47</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>
          <div className="text-2xl font-medium">12</div>
        </div>
      </div>
        </div>
  );
}
export default WorkspaceHeader;
import {Button} from "@/components/ui/button"; import {Bell,Users,Settings} from "lucide-react"; export function WorkspaceHeader($1) { return ( <div className="min-h-screen bg-white"> <div className="flex items-center justify-between"> <div className="flex items-center gap-4"> <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border"> <img loading="lazy" src={company.logoUrl || "/placeholder.svg"} alt={company.name} className="max-h-10 max-w-10" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1> <p className="text-muted-foreground"> {company.plan} Plan · {company.teamSize} team members </p> </div> </div> <div className="flex items-center gap-2"> <Button variant="outline" size="icon" aria-label="Notifications"> <Bell className="h-4 w-4" /> </Button> <Button variant="outline" size="icon" aria-label="Team members"> <Users className="h-4 w-4" /> </Button> <Button variant="outline" size="icon" aria-label="Workspace settings"> <Settings className="h-4 w-4" /> </Button> </div> </div> <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"> <div className="bg-card rounded-lg p-4 border border-border"> <div className="text-sm text-muted-foreground">Active Job Listings</div> <div className="text-2xl font-medium">8</div> </div> <div className="bg-card rounded-lg p-4 border border-border"> <div className="text-sm text-muted-foreground">Candidate Applications</div> <div className="text-2xl font-medium">47</div> </div> <div className="bg-card rounded-lg p-4 border border-border"> <div className="text-sm text-muted-foreground">Interviews Scheduled</div> <div className="text-2xl font-medium">12</div> </div> </div> </div> )} export default WorkspaceHeader;
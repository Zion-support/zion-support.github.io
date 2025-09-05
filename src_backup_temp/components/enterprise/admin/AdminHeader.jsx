import {Button} from &quot;@/components/ui/button&quot;; import {Download,Settings} from &quot;lucide-react&quot;; import {useCompWorkspace} from &quot;@/hooks/useCompWorkspace&quot;; export function AdminHeader($1) { const {comp} = useCompWorkspace(); return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;flex items-center justify-between&quot;> <div> <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>Enterprise Admin Dashboard</h1> <p className=&quot;text-muted-foreground mt-1&quot;> Manage your comp&apos;s account,team members,and subscription </p> </div> <div className=&quot;flex items-center gap-2&quot;> <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-2&quot;> <Settings className=&quot;h-4 w-4&quot; /> Settings </Button> <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-2&quot;> <Download className=&quot;h-4 w-4&quot; /> Export Data </Button> </div> </div> <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;> <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;> <div className=&quot;text-sm text-muted-foreground&quot;>Subscription Plan</div> <div className=&quot;text-xl font-medium&quot;>{company?.plan || &quot;Enterprise&quot;}</div> </div> <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;> <div className=&quot;text-sm text-muted-foreground&quot;>Team Members</div> <div className=&quot;text-xl font-medium&quot;>{company?.teamSize || &quot;Loading...&quot;} / {company?.teamLimit || &quot;∞&quot;}</div> </div> <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;> <div className=&quot;text-sm text-muted-foreground&quot;>Billing Cycle</div> <div className=&quot;text-xl font-medium&quot;>{company?.billingCycle || &quot;Annual&quot;}</div> </div> </div> <div className=&quot;bg-muted/50 rounded-lg p-4 flex items-center justify-between&quot;> <div className=&quot;flex items-center gap-4&quot;> <div className=&quot;h-12 w-12 rounded-lg bg-card flex items-center justify-center&quot;> <img loading=&quot;lazy&quot; src={company?.logoUrl || &quot;/placeholder.svg&quot;} alt={company?.name || &quot;Comp&quot;} className=&quot;max-h-10 max-w-10&quot; /> </div> <div> <h2 className=&quot;font-medium&quot;>{company?.name || &quot;Comp Name&quot;}</h2> <p className=&quot;text-sm text-muted-foreground&quot;> Workspace URL: {company?.workspaceUrl || &quot;loading...&quot;} </p> </div> </div> <Button>Customize Workspace</Button> </div> </div> )} export default AdminHeader;&apos;;&apos;;
import {Button} from "@/components/ui/button";
import {Download, Settings} from "lucide-react";
import {useCompWorkspace} from "@/hooks/useCompWorkspace";
export function AdminHeader("props": "any) {;
    // const { user "} = useAuth(); // Unused but available;
    const {comp} = useCompWorkspace();
    return (<div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your comp's account, team members, and subscription;
          </p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="sm" className="gap-2">;
            <Settings className="h-4 w-4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
            <Download className="h-4 w-4" />;
            Export Data;
          </Button>;
        </div>;
      </div>;
      <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Subscription Plan</div>;
          <div className="text-xl font-medium">{company?.plan || "Enterprise""}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Team Members</div>;
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>;
        </div>;
      </div>;
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img loading="lazy" src={company?.logoUrl || "/placeholder.svg"} alt={company?.name || "Comp"} className="max-h-10 max-w-10"  />;
          </div>;
          <div>;
            <h2 className="font-medium">{company?.name || "Comp Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace "URL": "{company?.workspaceUrl || "loading...""}
            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    </div>)}
;
export default AdminHeader;
export function AdminHeader($1) {
    // const { user } = useAuth(); // Unused but available
    const {comp} = useCompWorkspace();
    return (
        <div className="space-y-4">
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your comp's account, team members, and subscription
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 "md": grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>
        </div>
      </div>
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img loading="lazy" src={company?.logoUrl || "/placeholder.svg"} alt={company?.name || "Comp"} className="max-h-10 max-w-10"  />
          </div>
          <div>
            <h2 className="font-medium">{company?.name || "Comp Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace "URL": {company?.workspaceUrl || "loading..."}
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
        </div>
  );
}
export default AdminHeader;';';
import {Button} from "@/components/ui/button"; import {Download,Settings} from "lucide-react"; import {useCompWorkspace} from "@/hooks/useCompWorkspace"; export function AdminHeader($1) { const {comp} = useCompWorkspace(); return ( <div className="min-h-screen bg-white"> <div className="flex items-center justify-between"> <div> <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1> <p className="text-muted-foreground mt-1"> Manage your comp's account,team members,and subscription </p> </div> <div className="flex items-center gap-2"> <Button variant="outline" size="sm" className="gap-2"> <Settings className="h-4 w-4" /> Settings </Button> <Button variant="outline" size="sm" className="gap-2"> <Download className="h-4 w-4" /> Export Data </Button> </div> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="bg-card rounded-lg p-4 border border-border"> <div className="text-sm text-muted-foreground">Subscription Plan</div> <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div> </div> <div className="bg-card rounded-lg p-4 border border-border"> <div className="text-sm text-muted-foreground">Team Members</div> <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div> </div> <div className="bg-card rounded-lg p-4 border border-border"> <div className="text-sm text-muted-foreground">Billing Cycle</div> <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div> </div> </div> <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between"> <div className="flex items-center gap-4"> <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center"> <img loading="lazy" src={company?.logoUrl || "/placeholder.svg"} alt={company?.name || "Comp"} className="max-h-10 max-w-10" /> </div> <div> <h2 className="font-medium">{company?.name || "Comp Name"}</h2> <p className="text-sm text-muted-foreground"> Workspace URL: {company?.workspaceUrl || "loading..."} </p> </div> </div> <Button>Customize Workspace</Button> </div> </div> )} export default AdminHeader;';';
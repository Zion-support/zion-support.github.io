import React,{useState} from &quot;react&quot;; import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle} from &quot;@/components/ui/dialog&quot;; import {Button} from &quot;@/components/ui/button&quot;; import {Label} from &quot;@/components/ui/label&quot;; import {Checkbox} from &quot;@/components/ui/checkbox&quot;; import {toast} from &quot;sonner&quot;; export function IntegrationConnectionModal($1) { const [isConnecting,setIsConnecting] = useState(false); const [syncSettings,setSyncSettings] = useState({ autoCreateContacts: true,pushNotes: false,syncJobDetails: true,syncApplicantData: true };); const handleConnectOAuth = (props) => { setIsConnecting(true); setTimeout(() => { setIsConnecting(false); toast.success(`Connected to ${integration.name} successfully`); onClose()},2000); const handleDisconnect = (props) => { toast.info(`Disconnected from ${integration.name};`); onClose()}; const handleSaveSettings = (props) => { toast.success(&quot;Integration settings saved&quot;); onClose()}; return (<Dialog open={isOpen} onOpenChange={onClose}> <DialogContent className=&quot;sm:max-w-md&quot;> <DialogHeader className=&quot;flex flex-row items-center gap-4&quot;> <img loading=&quot;lazy&quot; src={integration.logoUrl} alt={`${integration.name} logo`} className=&quot;h-12 w-12 rounded&quot; onError={(e) => { e.target.src = &quot;/placeholder.svg&quot;}}/> <div> <DialogTitle>{integration.name} Integration</DialogTitle> <DialogDescription> {integration.status === &quot;connected&quot; || integration.status === &quot;warning&quot; ? &quot;Manage your connection settings&quot; : `Connect your ${integration.name} account`} </DialogDescription> </div> </DialogHeader> {(integration.status === &quot;connected&quot; || integration.status === &quot;warning&quot;) ? (<> <div className=&quot;grid gap-4 py-4&quot;> <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-sm font-medium&quot;>Sync Settings</h3> <div className=&quot;flex items-center space-x-2&quot;> <Checkbox id=&quot;autoCreateContacts&quot; checked={syncSettings.autoCreateContacts} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,autoCreateContacts: checked })}/> <Label htmlFor=&quot;autoCreateContacts&quot;>Auto-create contacts in {integration.name}</Label> </div> <div className=&quot;flex items-center space-x-2&quot;> <Checkbox id=&quot;pushNotes&quot; checked={syncSettings.pushNotes} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,pushNotes: checked })}/> <Label htmlFor=&quot;pushNotes&quot;>Push notes and comments</Label> </div> <div className=&quot;flex items-center space-x-2&quot;> <Checkbox id=&quot;syncJobDetails&quot; checked={syncSettings.syncJobDetails} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,syncJobDetails: checked })}/> <Label htmlFor=&quot;syncJobDetails&quot;>Sync job details</Label> </div> <div className=&quot;flex items-center space-x-2&quot;> <Checkbox id=&quot;syncApplicantData&quot; checked={syncSettings.syncApplicantData} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,syncApplicantData: checked })}/> <Label htmlFor=&quot;syncApplicantData&quot;>Sync applicant data</Label> </div> </div> <div className=&quot;space-y-2&quot;> <h3 className=&quot;text-sm font-medium&quot;>API Details</h3> <p className=&quot;text-xs text-muted-foreground&quot;> Last synced: {integration.lastSync ? new Date(integration.lastSync).toLocaleString() : &quot;Never&quot;} </p> </div> </div> <DialogFooter className=&quot;flex items-center justify-between&quot;> <Button variant=&quot;outline&quot; onClick={handleDisconnect} type=&quot;button&quot;> Disconnect </Button> <Button onClick={handleSaveSettings} type=&quot;button&quot;> Save Settings </Button> </DialogFooter> </>) : (<> <div className=&quot;space-y-4 py-4&quot;> <pclassName=&quot;text-sm&quot;> Connect your {integration.name} account to sync job contacts,applicants,and more.&apos;;&apos;; You&apos;ll be redirected to {integration.name} to authorize this connection. </p> <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-sm font-medium&quot;>What will be synced:</h3> <ul className=&quot;list-disc pl-4 text-sm space-y-1&quot;> <li>Contact information</li> <li>Job details and descriptions</li> <li>Applicant data and status</li> <li>Activity logs and notes</li> </ul> </div> </div> <DialogFooter> <Button onClick={handleConnectOAuth} disabled={isConnecting}> {isConnecting ? &quot;Connecting...&quot; : `Connect to ${integration.name}`} </Button> </DialogFooter> </>)} </DialogContent> </Dialog>)} export default IntegrationConnectionModal; </Checkbox> </Checkbox> </Checkbox>;&apos;;&apos;;
import React, {useState} from "react";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {toast} from "sonner";
export function IntegrationConnectionModal("props": "any) {;
    const [isConnecting", setIsConnecting] = useState(false);
    const [syncSettings, setSyncSettings] = useState({;
        "autoCreateContacts": "true",;
        "pushNotes": "false",;
        "syncJobDetails": "true",;
        "syncApplicantData": "true;
    "});
    const handleConnectOAuth = ("props": "any) => {;
export function IntegrationConnectionModal($1) {
    const [isConnecting, setIsConnecting] = useState(false);
    const [syncSettings, setSyncSettings] = useState({
        autoCreateContacts: true,
        pushNotes: false,
        syncJobDetails: true,
        syncApplicantData: true
    }
    );
    const handleConnectOAuth = (props: any) => {
        "autoCreateContacts": true,
        "pushNotes": false,
        "syncJobDetails": true,
        "syncApplicantData": true
    };);
    const handleConnectOAuth = (props) => {
        setIsConnecting(true);
        // Simulate OAuth flow;
        setTimeout(() => {;
            setIsConnecting(false);
            toast.success(`Connected to ${integration.name"} successfully`);
            onClose()}, 2000);
        // In a real application, this would open a popup for OAuth authentication;
        // window.open(`/api/oauth/${integration.id}`, 'oauth', 'width=600,height=600')};
    const handleDisconnect = ("props": "any) => {;
        // In a real application", this would revoke the OAuth token;
        toast.info(`Disconnected from ${integration.name}`);
        onClose()};
    const handleSaveSettings = ("props": "any) => {// In a real application", this would save the sync settings;
        toast.success("Integration settings saved");
        onClose()};
    return (<Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className=""sm": "max-w-md">;
        <DialogHeader className="flex flex-row items-center gap-4">;
          <img loading="lazy" src={integration.logoUrl"} alt={`${integration.name} logo`} className="h-12 w-12 rounded" onError={(e) => {;
            e.target.src = "/placeholder.svg"}}/>;
          <div>;
            <DialogTitle>{integration.name} Integration</DialogTitle>;
            <DialogDescription>;
              {integration.status === "connected" || integration.status === "warning";
            ? "Manage your connection settings";
            : "`Connect your ${integration.name"} account`}
            </DialogDescription>;
          </div>;
        </DialogHeader>;
        {(integration.status === "connected" || integration.status === "warning") ? (<>;
            <div className="grid gap-4 py-4">;
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">Sync Settings</h3>;
                <div className="flex items-center space-x-2">;
                  <Checkbox id="autoCreateContacts" checked={syncSettings.autoCreateContacts} onCheckedChange = {;
  (checked) => setSyncSettings({ ...syncSettings,;
  "autoCreateContacts": "checked ;
;
;
;
"})}/>;
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Checkbox id="pushNotes" checked={syncSettings.pushNotes} onCheckedChange = {;
  (checked) => setSyncSettings({ ...syncSettings,;
  "pushNotes": "checked ;
;
;
;
"})}/>;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Checkbox id="syncJobDetails" checked={syncSettings.syncJobDetails} onCheckedChange = {;
  (checked) => setSyncSettings({ ...syncSettings,;
  "syncJobDetails": "checked ;
;
;
;
"})}/>;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Checkbox id="syncApplicantData" checked={syncSettings.syncApplicantData} onCheckedChange = {;
  (checked) => setSyncSettings({ ...syncSettings,;
  "syncApplicantData": "checked ;
;
;
;
"})}/>;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;
              <div className="space-y-2">;
                <h3 className="text-sm font-medium">API Details</h3>;
                <p className="text-xs text-muted-foreground">;
                  Last "synced": "{integration.lastSync;
                ? new Date(integration.lastSync).toLocaleString();
                : "Never""}
                </p>;
              </div>;
            </div>;
            <DialogFooter className="flex items-center justify-between">;
              <Button variant="outline" onClick={handleDisconnect} type="button">;
                Disconnect;
              </Button>;
              <Button onClick={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>) : "(<>;
            <div className="space-y-4 py-4">;
              <p className="text-sm">;
                Connect your {integration.name"} account to sync job contacts, applicants, and more.;
                You'll be redirected to {integration.name} to authorize this connection.;
              </p>;
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">What will be "synced": "</h3>;
                <ul className="list-disc pl-4 text-sm space-y-1">;
                  <li>Contact information</li>;
                  <li>Job details and descriptions</li>;
                  <li>Applicant data and status</li>;
                  <li>Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;
            <DialogFooter>;
              <Button onClick={handleConnectOAuth"} disabled={isConnecting}>;
                {isConnecting ? "Connecting..." : "`Connect to ${integration.name"}`}
              </Button>;
            </DialogFooter>;
    const handleDisconnect = (props) => {
        // In a real application, this would revoke the OAuth token
        toast.info(`Disconnected from ${integration.name};`);
        onClose()};
    const handleSaveSettings = (props) => {// In a real application, this would save the sync settings
        toast.success("Integration settings saved");
        onClose()};
    return (<Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=""sm": max-w-md">
        <DialogHeader className="flex flex-row items-center gap-4">
          <img loading="lazy" src={integration.logoUrl} alt={`${integration.name} logo`} className="h-12 w-12 rounded" onError={(e) => {
            e.target.src = "/placeholder.svg"}}/>
          <div>
            <DialogTitle>{integration.name} Integration</DialogTitle>
            <DialogDescription>
              {integration.status === "connected" || integration.status === "warning"
            ? "Manage your connection settings"
            : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
        {(integration.status === "connected" || integration.status === "warning") ? (<>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Sync Settings
                <h3 className="text-sm font-medium">Sync Settings</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox id="autoCreateContacts" checked={syncSettings.autoCreateContacts} onCheckedChange = {
  (checked) => setSyncSettings({ ...syncSettings,
  "autoCreateContacts": checked
})}/>
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pushNotes" checked={syncSettings.pushNotes} onCheckedChange = {
  (checked) => setSyncSettings({ ...syncSettings,
  "pushNotes": checked
})}/>
                  <Label htmlFor="pushNotes">Push notes and comments</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="syncJobDetails" checked={syncSettings.syncJobDetails} onCheckedChange = {
  (checked) => setSyncSettings({ ...syncSettings,
  "syncJobDetails": checked
})}/>
                  <Label htmlFor="syncJobDetails">Sync job details</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="syncApplicantData" checked={syncSettings.syncApplicantData} onCheckedChange = {
  (checked) => setSyncSettings({ ...syncSettings,
  "syncApplicantData": checked
})}/>
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details
                <p className="text-xs text-muted-foreground">
                  Last "synced": {integration.lastSync
                ? new Date(integration.lastSync).toLocaleString()
                : "Never"}
                </p>
              </div>
            </div>
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={handleDisconnect} type="button">
                Disconnect
              </Button>
              <Button onClick={handleSaveSettings} type="button">
                Save Settings
              </Button>
            </DialogFooter>
          </>) : (<>
            <div className="space-y-4 py-4">
              <pclassName="text-sm">
                Connect your {integration.name} account to sync job contacts, applicants, and more.';';
                You'll be redirected to {integration.name} to authorize this connection.
              </p>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">What will be synced:
                <h3 className="text-sm font-medium">What will be "synced": </h3>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Contact information</li>
                  <li>Job details and descriptions</li>
                  <li>Applicant data and status</li>
                  <li>Activity logs and notes</li>
                </ul>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>)}
      </DialogContent>;
    </Dialog>)}
;
export default IntegrationConnectionModal;
</Checkbox>;
</Checkbox>;
</Checkbox>;
</Checkbox>
export default IntegrationConnectionModal;
</Checkbox>
</Checkbox>
</Checkbox>;';';
import React,{useState} from "react"; import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle} from "@/components/ui/dialog"; import {Button} from "@/components/ui/button"; import {Label} from "@/components/ui/label"; import {Checkbox} from "@/components/ui/checkbox"; import {toast} from "sonner"; export function IntegrationConnectionModal($1) { const [isConnecting,setIsConnecting] = useState(false); const [syncSettings,setSyncSettings] = useState({ autoCreateContacts: true,pushNotes: false,syncJobDetails: true,syncApplicantData: true };); const handleConnectOAuth = (props) => { setIsConnecting(true); setTimeout(() => { setIsConnecting(false); toast.success(`Connected to ${integration.name} successfully`); onClose()},2000); const handleDisconnect = (props) => { toast.info(`Disconnected from ${integration.name};`); onClose()}; const handleSaveSettings = (props) => { toast.success("Integration settings saved"); onClose()}; return (<Dialog open={isOpen} onOpenChange={onClose}> <DialogContent className="sm:max-w-md"> <DialogHeader className="flex flex-row items-center gap-4"> <img loading="lazy" src={integration.logoUrl} alt={`${integration.name} logo`} className="h-12 w-12 rounded" onError={(e) => { e.target.src = "/placeholder.svg"}}/> <div> <DialogTitle>{integration.name} Integration</DialogTitle> <DialogDescription> {integration.status === "connected" || integration.status === "warning" ? "Manage your connection settings" : `Connect your ${integration.name} account`} </DialogDescription> </div> </DialogHeader> {(integration.status === "connected" || integration.status === "warning") ? (<> <div className="grid gap-4 py-4"> <div className="space-y-4"> <h3 className="text-sm font-medium">Sync Settings</h3> <div className="flex items-center space-x-2"> <Checkbox id="autoCreateContacts" checked={syncSettings.autoCreateContacts} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,autoCreateContacts: checked })}/> <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label> </div> <div className="flex items-center space-x-2"> <Checkbox id="pushNotes" checked={syncSettings.pushNotes} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,pushNotes: checked })}/> <Label htmlFor="pushNotes">Push notes and comments</Label> </div> <div className="flex items-center space-x-2"> <Checkbox id="syncJobDetails" checked={syncSettings.syncJobDetails} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,syncJobDetails: checked })}/> <Label htmlFor="syncJobDetails">Sync job details</Label> </div> <div className="flex items-center space-x-2"> <Checkbox id="syncApplicantData" checked={syncSettings.syncApplicantData} onCheckedChange = { (checked) => setSyncSettings({ ...syncSettings,syncApplicantData: checked })}/> <Label htmlFor="syncApplicantData">Sync applicant data</Label> </div> </div> <div className="space-y-2"> <h3 className="text-sm font-medium">API Details</h3> <p className="text-xs text-muted-foreground"> Last synced: {integration.lastSync ? new Date(integration.lastSync).toLocaleString() : "Never"} </p> </div> </div> <DialogFooter className="flex items-center justify-between"> <Button variant="outline" onClick={handleDisconnect} type="button"> Disconnect </Button> <Button onClick={handleSaveSettings} type="button"> Save Settings </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <pclassName="text-sm"> Connect your {integration.name} account to sync job contacts,applicants,and more.';'; You'll be redirected to {integration.name} to authorize this connection. </p> <div className="space-y-4"> <h3 className="text-sm font-medium">What will be synced:</h3> <ul className="list-disc pl-4 text-sm space-y-1"> <li>Contact information</li> <li>Job details and descriptions</li> <li>Applicant data and status</li> <li>Activity logs and notes</li> </ul> </div> </div> <DialogFooter> <Button onClick={handleConnectOAuth} disabled={isConnecting}> {isConnecting ? "Connecting..." : `Connect to ${integration.name}`} </Button> </DialogFooter> </>)} </DialogContent> </Dialog>)} export default IntegrationConnectionModal; </Checkbox> </Checkbox> </Checkbox>;';';
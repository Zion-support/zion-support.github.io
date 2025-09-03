<<<<<<< HEAD
import React from "react";""""
import { TransactionHistory } from "@/components/transactions/TransactionHistory";""""
import { GradientHeading } from "@/components/GradientHeading";""""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Payments() {}
    return (<>"""
""""
      <div className="min-h-screen bg-zion-blue py-12 px-4">""""
        <div className="container mx-auto">""""
          <div className="mb-12 text-center">""""
            <GradientHeading level="h1" className="text-4xl lg:text-5xl font-bold mb-4">
              Payments & Transactions"""
            </GradientHeading>""""
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Track your payment history, manage transactions in escrow, and view your financial activities.
            </p>
          </div>"""
""""
          <Tabs defaultValue="history" className="w-full">""""
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">""""
              <TabsTrigger value="history">Transaction History</TabsTrigger>""""
              <TabsTrigger value="settings">Payment Settings</TabsTrigger>
            </TabsList>"""
""""
            <TabsContent value="history">
              <TransactionHistory />
            </TabsContent>"""
""""
            <TabsContent value="settings">""""
              <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">""""
                <h2 className="text-2xl font-bold text-white mb-6">Payment Settings</h2>"""
""""
                <div className="space-y-8">""""
                  <div className="border-b border-zion-blue-light pb-6">""""
                    <h3 className="text-lg font-medium text-white mb-3">Default Payment Method</h3>""""
                    <p className="text-zion-slate-light mb-4">
                      Manage your payment methods and set your default preference.
                    </p>
                    <Button onClick = {}
  () => window.open('https://stripe.com',_blank')

"""
""""
} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                      Manage Payment Methods;
                    </Button>
                  </div>"""
""""
                  <div className="border-b border-zion-blue-light pb-6">""""
                    <h3 className="text-lg font-medium text-white mb-3">Escrow Settings</h3>""""
                    <p className="text-zion-slate-light mb-4">
                      Set your preferences for escrow services. Escrow holds funds until both parties confirm the service has been completed satisfactorily."""
                    </p>""""
                    <div className="flex items-center space-x-2">""""
                      <Switch id="escrow-default"/>""""
                      <Label htmlFor="escrow-default" className="text-white">
                        Use escrow by default;
                      </Label>
                    </div>
                  </div>
"""
                  <div>""""
                    <h3 className="text-lg font-medium text-white mb-3">Payment Notifications</h3>""""
                    <p className="text-zion-slate-light mb-4">
                      Choose how you want to be notified about payments and transactions."""
                    </p>""""
                    <div className="space-y-2">""""
                      <div className="flex items-center space-x-2">""""
                        <Checkbox id="notify-email" defaultChecked/>""""
                        <label htmlFor="notify-email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
                          Email notifications;
                        </label>"""
                      </div>""""
                      <div className="flex items-center space-x-2">""""
                        <Checkbox id="notify-push" defaultChecked/>""""
                        <label htmlFor="notify-push" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
                          Push notifications;
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
    </>)}
// Import UI components for Payment Settings tab
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
}

export { Payments };

export { Payments };

export { Payments };

export { Payments };

export { Payments };
=======
<<<<<<< HEAD
import React from 'react'; "export default function Payments () {" return(<> <div className="min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https:
=======
import React from "react"; "export default function Payments () {" return(<> <div className = "min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory  />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https: ",,
 "export default function Payments () {" return (<> <div className="min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory  />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https:;,"});,"});"
}"});,"})"
";export: default function Payments () {" return (<> <div className="min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl: font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment histor,y, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory  />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https: ",","};"
";export default function Payments () {" return (<> <div className = "min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory  />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https: """,,
",export default function Payments () {" return (<> <div className="min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory  />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https:  ,,
}"
";export default function Payments ()   {" return (<> <div className = "min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory  />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https: "",,
";&quot;&quot;export default function Payments () ,{&quot, return (&quot}<> <div className="&quot;min" - h-screen bg-zion - blue py-12 px-4&quot;>"&quot;&quot; <div className="&quot;container" mx -auto&quot;>"&quot;&quot; <div className="&quot;mb-12" text-center&quot;>"&quot;&quot; <GradientHeading level="&quot;h1&quot;" className="&quot;text-4xl" lg: text-5xl font - bold mb-4&quot;>&quot; Payments & Transactions&quot,&quot," </GradientHeading> <p className="&quot,text-zion" - slate - light max - w-2xl mx -auto&quot,>&quot, Track your payment history, manage transactions in escrow, and view your financial activities.&quot;&quot;" </p> </div> <Tabs defaultValue="&quot;history&quot;" className="&quot;w-full&quot;">"&quot;&quot; <TabsList className="&quot;grid" w-full max - w-md mx - auto grid - cols - 2 mb-8&quot;>"&quot;&quot; <TabsTrigger value="&quot;history&quot;">Transaction History&quot;</TabsTrigger>&quot;&quot;" <TabsTrigger value="&quot;settings&quot;">Payment Settings&quot;</TabsTrigger>&quot;&quot;" </TabsList>&quot;&quot;" <TabsContent value="&quot;history&quot;">"&quot;&quot; <TransactionHistory  />&quot;&quot;" </TabsContent> <TabsContent value="&quot;settings&quot;">"&quot;&quot; <div className="&quot;bg-zion" - blue - dark rounded-lg border border-zion - blue - light p -6&quot;>"&quot;&quot; <h2 className="&quot;text-2xl" font - bold text-white mb-6&quot;>Payment Settings&quot;</h2>&quot;&quot;" <div className="&quot;space" - y-8&quot;>"&quot;&quot; <div className="&quot;border-b" border-zion - blue - light pb -6&quot;>"&quot;&quot; <h3 className="&quot;text-lg" font - medium text-white mb-3&quot;>Default Payment Method&quot;</h3>&quot;&quot;" <p className="&quot;text-zion" - slate - light mb-4&quot;>&quot; Manage your payment methods and set your default preference.&quot;&quot;" </p> <Button onClick = { () => window.open (&quot;https:  ,",
}&quot;""
";export default function Payments () {" return (<> <div className = "min - h-screen bg-zion - blue py-12 px-4">" <div className="container mx -auto">" <div className="mb-12 text-center">" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4">" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full">" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8">" <TabsTrigger value="history">Transaction History</TabsTrigger>" <TabsTrigger value="settings">Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history">" <TransactionHistory  />" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6">Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3">Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () => window.open ("https: "",
",export default function Payments () {" return (<> <div className="min - h-screen bg-zion - blue py-12 px-4"></di>" <div className="container mx -auto"></di>" <div className="mb-12 text-center"></di>" <GradientHeading level="h1" className="text-4xl lg: text-5xl font - bold mb-4"></GradientHeadin>" Payments & Transactions" </GradientHeading> <p className="text-zion - slate - light max - w-2xl mx -auto">" Track your payment history, manage transactions in escrow, and view your financial activities." </p> </div> <Tabs defaultValue="history" className="w-full"></Tabs>" <TabsList className="grid w-full max - w-md mx - auto grid - cols - 2 mb-8"></TabsLis>" <TabsTrigger value="history"></TabsTrigge>Transaction History</TabsTrigger>" <TabsTrigger value="settings"></TabsTrigge>Payment Settings</TabsTrigger>" </TabsList>" <TabsContent value="history"></TabsConten>" <TransactionHistory /" ></TransactionHistory>" </TabsContent> <TabsContent value="settings">" <div className="bg-zion - blue - dark rounded-lg border border-zion - blue - light p -6">" <h2 className="text-2xl font - bold text-white mb-6"></h>Payment Settings</h2>" <div className="space - y-8">" <div className="border-b border-zion - blue - light pb -6">" <h3 className="text-lg font - medium text-white mb-3"></h>Default Payment Method</h3>" <p className="text-zion - slate - light mb-4">" Manage your payment methods and set your default preference." </p> <Button onClick = { () =" ></Button> window.open ("https: "}""
>>>>>>> main
>>>>>>> main

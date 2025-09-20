
import React, { useState } from "react",;
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Card; CardContent } from "@/components/ui/card";
import { Briefcase; Users, Check } from "lucide-react";

type UserRole = any;
return (<div className="space-y-4 px-4">;
<h2 className="text-xl font-medium">What brings you to Zion?</h2>;
<p className="text-muted-foreground">;
Choose how you want to use our platform;
</p>;
<div className="space-y-3 mt-6">;
=======
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Check } from "lucide-react";

type UserRole = any;
return (<div className="space-y-4 px-4">
<h2 className="text-xl font-medium">What brings you to Zion?</h2>
<p className="text-muted-foreground">
Choose how you want to use our platform;
</p>
<div className="space-y-3 mt-6">
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
<Card;
className={`cursor-pointer transition-all ${
selectedRole === "talent";
? "border-primary bg-primary/5";
: "border-border hover:border-primary/40";
}`}
onClick = {() => handleSelect("talent")}
>;
<<<<<<< HEAD
<CardContent className="p-5">;
<div className="flex items-center">;
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;
<Briefcase className="h-6 w-6 text-primary" />;
</div>;
<div className="flex-1">;
<h3 className="font-medium">I"m offering services</h3>;
<p className="text-sm text-muted-foreground">;
Find work and showcase your skills;
</p>;
</div>;
{selectedRole === "talent" && (
<Check className="h-5 w-5 text-primary" />;
)}
</div>;
</CardContent>;
</Card>;
=======
<CardContent className="p-5">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
<Briefcase className="h-6 w-6 text-primary" />
</div>
<div className="flex-1">
<h3 className="font-medium">I"m offering services</h3>
<p className="text-sm text-muted-foreground">
Find work and showcase your skills;
</p>
</div>
{selectedRole === "talent" && (
<Check className="h-5 w-5 text-primary" />
)}
</div>
</CardContent>
</Card>
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
<Card;
className={`cursor-pointer transition-all ${
selectedRole === "client";
? "border-primary bg-primary/5";
: "border-border hover:border-primary/40";
}`}
onClick = {() => handleSelect("client")}
>;
<<<<<<< HEAD
<CardContent className="p-5">;
<div className="flex items-center">;
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;
<Users className="h-6 w-6 text-primary" />;
</div>;
<div className="flex-1">;
<h3 className="font-medium">I"m hiring</h3>;
<p className="text-sm text-muted-foreground">;
Post jobs and find talented professionals;
</p>;
</div>;
{selectedRole === "client" && (
<Check className="h-5 w-5 text-primary" />;
)}
</div>;
</CardContent>;
</Card>;
</div>;
</div>;
=======
<CardContent className="p-5">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
<Users className="h-6 w-6 text-primary" />
</div>
<div className="flex-1">
<h3 className="font-medium">I"m hiring</h3>
<p className="text-sm text-muted-foreground">
Post jobs and find talented professionals;
</p>
</div>
{selectedRole === "client" && (
<Check className="h-5 w-5 text-primary" />
)}
</div>
</CardContent>
</Card>
</div>
</div>
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
)
}
import React,{useState} from &quot;react&quot;; import {useTranslation} from &quot;react-i18next&quot;; import {Card,CardContent} from &quot;@/components/ui/card&quot;; import {Briefcase,Users,Check} from &quot;lucide-react&quot;; export function RolePicker($1) { const [selectedRole,setSelectedRole] = useState(null); const { t } = useTranslation(); const handleSelect = (props) => {setSelectedRole(role); onSelect(role)}; return ( <div className=&quot;min-h-screen bg-white&quot;> <h2 className=&quot;text-xl font-medium&quot;>{t(&apos;onboarding.title&apos;)}</h2> <p className=&quot;text-muted-foreground&quot;>{t(&apos;onboarding.subtitle&apos;)}</p> <div className=&quot;space-y-3 mt-6&quot;> <Card &apos;; className={`cursor-pointer transition-all ${ selectedRole === &apos;talent&apos; ? &quot;border-primary bg-primary/5&quot; : &quot;border-border hover:border-primary/40&quot;}`} onClick={() => handleSelect(&apos;talent&apos;)} > <CardContent className=&quot;p-5&quot;> <div className=&quot;flex items-center&quot;> <div className=&quot;w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4&quot;> <Briefcase className=&quot;h-6 w-6 text-primary&quot; /> </div> <divclassName=&quot;flex-1&quot;>&apos;; <h3 className=&quot;font-medium&quot;>{t(&apos;onboarding.talent_title&apos;)}</h3>&apos;; <p className=&quot;text-sm text-muted-foreground&quot;>{t(&apos;onboarding.talent_desc&apos;)}</p> </div>&apos;; {selectedRole === &apos;talent&apos; && ( <Check className=&quot;h-5 w-5 text-primary&quot; /> )} </div> </CardContent> </Card> <Card &apos;; className={`cursor-pointer transition-all ${ selectedRole === &apos;client&apos; ? &quot;border-primary bg-primary/5&quot; : &quot;border-border hover:border-primary/40&quot;}`} onClick={() => handleSelect(&apos;client&apos;)} > <CardContent className=&quot;p-5&quot;> <div className=&quot;flex items-center&quot;> <div className=&quot;w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4&quot;> <Users className=&quot;h-6 w-6 text-primary&quot; /> </div> <divclassName=&quot;flex-1&quot;>&apos;; <h3 className=&quot;font-medium&quot;>{t(&apos;onboarding.client_title&apos;)}</h3>&apos;; <p className=&quot;text-sm text-muted-foreground&quot;>{t(&apos;onboarding.client_desc&apos;)}</p> </div>&apos;; {selectedRole === &apos;client&apos; && ( <Check className=&quot;h-5 w-5 text-primary&quot; /> )} </div> </CardContent> </Card> </div> </div> )} export default RolePicker;&apos;;&apos;;
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";
;
export function RolePicker("props": "any) {;
    const [selectedRole", setSelectedRole] = useState(null);
    const { t } = useTranslation();
;
    const handleSelect = ("props": "any) => {setSelectedRole(role);
        onSelect(role);"};
;
    return (;
        <div className="space-y-4 px-4">;
            <h2 className="text-xl font-medium">{t('onboarding.title')}</h2>;
            <p className="text-muted-foreground">{t('onboarding.subtitle')}</p>;
            <div className="space-y-3 mt-6">;
                <Card ;
                    className={`cursor-pointer transition-all ${;
                        selectedRole === 'talent';
                            ? "border-primary bg-primary/5";
                            : "border-border "hover": "border-primary/40";
                    "}`} ;
                    onClick={() => handleSelect('talent')}
                >;
                    <CardContent className="p-5">;
                        <div className="flex items-center">;
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;
                                <Briefcase className="h-6 w-6 text-primary" />;
                            </div>;
                            <div className="flex-1">;
                                <h3 className="font-medium">{t('onboarding.talent_title')}</h3>;
                                <p className="text-sm text-muted-foreground">{t('onboarding.talent_desc')}</p>;
                            </div>;
                            {selectedRole === 'talent' && (;
                                <Check className="h-5 w-5 text-primary" />;
                            )}
                        </div>;
                    </CardContent>;
                </Card>;
                <Card ;
                    className={`cursor-pointer transition-all ${;
                        selectedRole === 'client';
                            ? "border-primary bg-primary/5";
                            : "border-border "hover": "border-primary/40";
                    "}`} ;
                    onClick={() => handleSelect('client')}
                >;
                    <CardContent className="p-5">;
                        <div className="flex items-center">;
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;
                                <Users className="h-6 w-6 text-primary" />;
                            </div>;
                            <div className="flex-1">;
                                <h3 className="font-medium">{t('onboarding.client_title')}</h3>;
                                <p className="text-sm text-muted-foreground">{t('onboarding.client_desc')}</p>;
                            </div>;
                            {selectedRole === 'client' && (;
                                <Check className="h-5 w-5 text-primary" />;
                            )}
                        </div>;
                    </CardContent>;
                </Card>;
            </div>;
        </div>;
    );
}
;
;
export default RolePicker;
export function RolePicker($1) {
    const [selectedRole, setSelectedRole] = useState(null);
    const { t } = useTranslation();
    const handleSelect = (props) => {setSelectedRole(role);
        onSelect(role);};
    return (
    <div className="min-h-screen bg-white">
            <h2 className="text-xl font-medium">{t('onboarding.title')}</h2>
            <p className="text-muted-foreground">{t('onboarding.subtitle')}</p>
            <div className="space-y-3 mt-6">
                <Card ';
                    className={`cursor-pointer transition-all ${
                        selectedRole === 'talent'
                            ? "border-primary bg-primary/5"
                            : "border-border "hover": border-primary/40";
                    }`}
                    onClick={() => handleSelect('talent')}
                >
                    <CardContent className="p-5">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">{t('onboarding.talent_title')}
                            <divclassName="flex-1">';
                                <h3 className="font-medium">{t('onboarding.talent_title')}</h3>';
                                <p className="text-sm text-muted-foreground">{t('onboarding.talent_desc')}</p>
                            </div>';
                            {selectedRole === 'talent' && (
                                <Check className="h-5 w-5 text-primary" />
                            )}
                        </div>
                    </CardContent>
                </Card>
                <Card ';
                    className={`cursor-pointer transition-all ${
                        selectedRole === 'client'
                            ? "border-primary bg-primary/5"
                            : "border-border "hover": border-primary/40";
                    }`}
                    onClick={() => handleSelect('client')}
                >
                    <CardContent className="p-5">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">{t('onboarding.client_title')}
                            <divclassName="flex-1">';
                                <h3 className="font-medium">{t('onboarding.client_title')}</h3>';
                                <p className="text-sm text-muted-foreground">{t('onboarding.client_desc')}</p>
                            </div>';
                            {selectedRole === 'client' && (
                                <Check className="h-5 w-5 text-primary" />
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
export default RolePicker;';';
import React,{useState} from "react"; import {useTranslation} from "react-i18next"; import {Card,CardContent} from "@/components/ui/card"; import {Briefcase,Users,Check} from "lucide-react"; export function RolePicker($1) { const [selectedRole,setSelectedRole] = useState(null); const { t } = useTranslation(); const handleSelect = (props) => {setSelectedRole(role); onSelect(role)}; return ( <div className="min-h-screen bg-white"> <h2 className="text-xl font-medium">{t('onboarding.title')}</h2> <p className="text-muted-foreground">{t('onboarding.subtitle')}</p> <div className="space-y-3 mt-6"> <Card '; className={`cursor-pointer transition-all ${ selectedRole === 'talent' ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`} onClick={() => handleSelect('talent')} > <CardContent className="p-5"> <div className="flex items-center"> <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"> <Briefcase className="h-6 w-6 text-primary" /> </div> <divclassName="flex-1">'; <h3 className="font-medium">{t('onboarding.talent_title')}</h3>'; <p className="text-sm text-muted-foreground">{t('onboarding.talent_desc')}</p> </div>'; {selectedRole === 'talent' && ( <Check className="h-5 w-5 text-primary" /> )} </div> </CardContent> </Card> <Card '; className={`cursor-pointer transition-all ${ selectedRole === 'client' ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`} onClick={() => handleSelect('client')} > <CardContent className="p-5"> <div className="flex items-center"> <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"> <Users className="h-6 w-6 text-primary" /> </div> <divclassName="flex-1">'; <h3 className="font-medium">{t('onboarding.client_title')}</h3>'; <p className="text-sm text-muted-foreground">{t('onboarding.client_desc')}</p> </div>'; {selectedRole === 'client' && ( <Check className="h-5 w-5 text-primary" /> )} </div> </CardContent> </Card> </div> </div> )} export default RolePicker;';';
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  SelectValue } from '@/components/ui/select';
import { Label  } from '@/components/ui/label';
import { ChevronRight, Plus, Zap, Trash2  } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter  } from '@/components/ui/card';
import { ChevronRight, Zap, Star  } from 'lucide-react';
type ResumeStep = "basics" | "experience" | "education" | "skills";import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select",type ResumeStep = "basics" | "experience" | "education" | "skills",export function MobileResumeBuilder() {const [currentStep, setCurrentStep]  = useState<ResumeStep>("basics"),const renderStepContent = () => {switch (currentStep) {case "basics": return <BasicsStep />,case "experience":;
        return <ExperienceStep />,case "education":;
        return <EducationStep />,case "skills":;
=======
<<<<<<< HEAD
  SelectValue } from '@/components/ui/select;
import { Label  } from @/components/ui/label';
import { ChevronRight, Plus, Zap, Trash2  } from 'lucide-react;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from @/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter  } from '@/components/ui/card;
import { ChevronRight, Zap, Star  } from lucide-react';
type ResumeStep = "basics | experience" | "education | skills";import React, { useState } from 'react;
import { Button  } from @/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card;
import { Input  } from @/components/ui/input';
import { Textarea  } from '@/components/ui/textarea;
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select,type ResumeStep = basics" | "experience | education" | "skills,export function MobileResumeBuilder() {const [currentStep, setCurrentStep]  = useState<ResumeStep>(basics"),const renderStepContent = () => {switch (currentStep) {case "basics: return <BasicsStep />,case experience":;
        return <ExperienceStep />,case "education:;
        return <EducationStep />,case skills":;
>>>>>>> origin/resolved-merge-conflicts
        return <SkillsStep />,default:;
        return <BasicsStep />;
    }
  },return (<div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button;
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("basics")}>;
          Basics;
        </Button>;
        <Button;
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("experience")}>;
          Experience;
        </Button>;
        <Button;
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("education")}>;
          Education;
        </Button>;
        <Button;
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("skills")}>;
          Skills;
        </Button>;
      </div>;
      {renderStepContent()}<Button className="w-full flex gap-2" size="lg">;
        <Zap className="h-5 w-5" /> Enhance with AI;
      </Button>;
      <Button variant="default" className="w-full" size="lg">;
        Save & Preview;
      </Button>;
    </div>;
  );
}
;
function BasicsStep() {;
  return (;
<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
=======
import React, { useState } from "react;
import { Button } from @/components/ui/button";
import { Card, CardContent } from "@/components/ui/card;
import { Input } from @/components/ui/input";
import { Textarea } from "@/components/ui/textarea;
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react'

type ResumeStep = "basics" | "experience" | "education" | "skills",

type ResumeStep = $2;
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
  
  const renderStepContent = $2;
      case "experience":
        return <ExperienceStep />,
      case "education":
        return <EducationStep />,
      case "skills":
        return <SkillsStep />,
      default:
<<<<<<< HEAD
        return <BasicsStep />,
    }
=======
        return <BasicsStep />}
=======
  SelectValue} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ChevronRight, Zap, Star } from 'lucide-react';

type ResumeStep = "basics" | "experience" | "education" | "skills";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react';
type ResumeStep = "basics" | "experience" | "education" | "skills",;

export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),;

  const renderStepContent = () => {;
    switch (currentStep) {;
      case "basics": return <BasicsStep />,;
      case "experience":;
        return <ExperienceStep />,;
      case "education":;
        return <EducationStep />,;
      case "skills":;
        return <SkillsStep />,;
      default:;
        return <BasicsStep />;

    }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },
  
  return (
    <div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button

          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}

        >
          Basics
        </Button>
        <Button

          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >
          Experience
        </Button>
        <Button

          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
        >
          Education
        </Button>
        <Button

          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
        >
          Skills
        </Button>
      </div>
      
      {renderStepContent()}

      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>

      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  )
}

function BasicsStep() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Resume Title</Label>
          <Input id="title" name="title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" placeholder="Your full name" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="Your phone number" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="City, Country" autoComplete="address-level2" />
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
=======
<<<<<<< HEAD
        <div className="space-y-2>
          <Label htmlFor=summary">Professional Summary</Label>
>>>>>>> origin/resolved-merge-conflicts
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

  )}
<<<<<<< HEAD
function BasicsStep() {return (<Card>;
      <CardContent className="p-4 space-y-4">;
        <div className="space-y-2">;
          <Label htmlFor="title">Resume Title</Label>;
=======
      <CardContent className="p-4 space-y-4>;
        <div className=space-y-2">;
          <Label htmlFor="title>Resume Title</Label>;

<<<<<<< HEAD
=======
        >;
          Skills;
        </Button>;
      </div>;

      <Button variant="default" className="w-full" size="lg">;
        Save & Preview;
      </Button>;
    </div>;
  );
}

    <Card>;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <CardContent className="p-4 space-y-4">;
        <div className="space-y-2">;
          <Label htmlFor="title">Resume Title</Label>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>;

        <div className="space-y-2">;
          <Label htmlFor="fullName">Full Name</Label>;
          <Input id="fullName" name="fullName" placeholder="Your full name" autoComplete="name" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="email">Email Address</Label>;

        </div>;

        <div className="space-y-2">;
          <Label htmlFor="phone">Phone Number</Label>;
          <Input id="phone" name="phone" placeholder="Your phone number" autoComplete="tel" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="location">Location</Label>;
          <Input id="location" name="location" placeholder="City, Country" autoComplete="address-level2" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="summary">Professional Summary</Label>;
          <Textarea;
            id="summary";
            placeholder="Write a brief summary about yourself";
            rows={4}
          />;
        </div>;
      </CardContent>;
    </Card>;
  );
}

          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 

function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }]),
  
  const addExperience = () => {
    const newId = (experiences.length + 1).toString(),
    setExperiences([...experiences, { id: newId }])
  },
  
  const removeExperience = (id: string) => {
<<<<<<< HEAD

    setExperiences(experiences.filter(exp => exp.id !== id))
  },

=======
<<<<<<< HEAD
    setExperiences(experiences.filter(exp => exp.id !== id)),
  },
=======
<<<<<<< HEAD
    setExperiences(experiences.filter(exp => exp.id !== id))},
=======
    setExperiences(experiences.filter(exp => exp.id !== id))
  },
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  
  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <Card key={exp.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Work Experience {index + 1}</h3>
              {experiences.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeExperience(exp.id)}
                  aria-label="Remove experience"
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
              <Input id={`title-${exp.id}`} placeholder="e.g. Frontend Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`company-${exp.id}`}>Company</Label>
              <Input id={`company-${exp.id}`} placeholder="Company name" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                <Input id={`startDate-${exp.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                <Input id={`endDate-${exp.id}`} type="month" placeholder="Present" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
              <Textarea 
                id={`description-${exp.id}`} 
                placeholder="Describe your responsibilities and achievements" 
                rows={3}
              />;
            </div>;
          </CardContent>;
        </Card>;
      ))}
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
        onClick={addExperience}
      >
        <Plus className="h-4 w-4" /> Add Another Experience
      </Button>
    </div>
  )
}

<<<<<<< HEAD

=======
<<<<<<< HEAD
function EducationStep() {
  const [educations, setEducations] = useState($2);
  const addEducation = () => {
    const newId = (educations.length + 1).toString(),
    setEducations([...educations, { id: newId }])
  },
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id)),
  },
  
  const removeEducation = $2;
  return (
    <div className="space-y-4">
      {educations.map((edu, index) => (
        <Card key={edu.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education {index + 1}</h3>
              {educations.length > 1 && (
                <Button
<<<<<<< HEAD
                  variant="ghost"
                  size="icon"
=======
                  variant="ghost
                  size=icon"
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  };
};

  );
}
;
function EducationStep() {;
  const [educations, setEducations] = useState([{ id: '1' }]),;
  const addEducation = () => {;
    const newId = (educations.length + 1).toString(),;
    setEducations([...educations, { id: newId }]);
  },;
  const removeEducation = (id: string) => {;
    setEducations(educations.filter(edu => edu.id !== id));
  },;
  return (;
    <div className="space-y-4">;
      {educations.map((edu, index) => (;
        <Card key={edu.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations.length > 1 && (;
                <Button;
                  variant="ghost";
                  size="icon";
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onClick={() => removeEducation(edu.id)}
                  aria-label="Remove education";
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>;
              <Input id={`institution-${edu.id}`} placeholder="School or university name" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>;
              <Input id={`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>;
              <Input id={`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />;
            </div>;
            <div className="grid grid-cols-2 gap-3">;
              <div className="space-y-2">;
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>;
                <Input id={`eduStartDate-${edu.id}`} type="month" />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>;
                <Input id={`eduEndDate-${edu.id}`} type="month" placeholder="Present" />;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD


=======
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    </Card>)}
/**;
 * ExperienceStep - Function description;
 */;
function ExperienceStep() {const [experiences, set_experiences] = useState ([{ id: '1' }]),const add_experience = () =>: any {const new_id = (experiences.length + 1).to_string (),set_experiences ([...experiences, { id: new_id }])},const remove_experience = (id: string, ) =>: any {set_experiences (experiences.filter (exp => exp.id !== id))}
  const remove_education = (id: string, ) =>: any {set_educations (educations.filter (edu => edu.id !== id))}
<<<<<<< HEAD
  const remove_skill = (id: string, ) =>: any {set_skills (skills.filter (skill => skill.id !== id))}function ExperienceStep() {const [experiences, setExperiences]  = useState([{ id: '1' }]),const addExperience = () => {const newId = (experiences && experiences.length + 1).toString(),setExperiences([...experiences, { id: newId }])},const removeExperience = (id: string,) => {setExperiences(experiences && experiences.filter(exp => exp && exp.id !== id))}const removeEducation = (id: string,) => {setEducations(educations && educations.filter(edu => edu && edu.id !== id))}const removeSkill = (id: string,) => {setSkills(skills && skills.filter(skill => skill && skill.id !== id))})})}";
  () => removeSkill (skill.id) ";
}aria-label="Remove skill" > <Trash2 className="h-4 w-4 text-destructive" /> </Button>)}</div>) ) ";
}<Button > <Plus className="h-4 w-4" /> Add Another Skill </Button> </div> </CardContent> </Card> <Card> <CardContent className="p-4" > <div className="space-y-2" > <Label>Skill Categories</Label> <div className="grid grid-cols-2 gap-2" > <Button variant="outline" className="justify-start" >Development</Button> <Button variant="outline" className="justify-start" >Design</Button> <Button variant="outline" className="justify-start" >Marketing</Button> <Button variant="outline" className="justify-start" >Business</Button> <Button variant="outline" className="justify-start" >Data Analysis</Button> <Button variant="outline" className="justify-start" >Languages</Button> </div> </div> </CardContent> </Card> </div>)}";
=======
  const remove_skill = (id: string, ) =>: any {set_skills (skills.filter (skill => skill.id !== id))}function ExperienceStep() {const [experiences, setExperiences]  = useState([{ id: '1' }]),const addExperience = () => {const newId = (experiences && experiences.length + 1).toString(),setExperiences([...experiences, { id: newId }])},const removeExperience = (id: string,) => {setExperiences(experiences && experiences.filter(exp => exp && exp.id !== id))}const removeEducation = (id: string,) => {setEducations(educations && educations.filter(edu => edu && edu.id !== id))}const removeSkill = (id: string,) => {setSkills(skills && skills.filter(skill => skill && skill.id !== id))}})})}";
  () => removeSkill (skill.id) ;
}aria-label=Remove skill" > <Trash2 className="h-4 w-4 text-destructive /> </Button>)}</div>) ) ;
}<Button > <Plus className="h-4 w-4" /> Add Another Skill </Button> </div> </CardContent> </Card> <Card> <CardContent className=p-4 > <div className="space-y-2" > <Label>Skill Categories</Label> <div className=grid grid-cols-2 gap-2 > <Button variant="outline" className=justify-start >Development</Button> <Button variant="outline" className=justify-start >Design</Button> <Button variant="outline" className=justify-start >Marketing</Button> <Button variant="outline" className=justify-start >Business</Button> <Button variant="outline" className=justify-start >Data Analysis</Button> <Button variant="outline" className=justify-start >Languages</Button> </div> </div> </CardContent> </Card> </div>)}";
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Button;
        variant="outline";
        className="w-full gap-2";
        onClick={addEducation}
<<<<<<< HEAD


=======
<<<<<<< HEAD
      >
        <Plus className="h-4 w-4" /> Add Another Education
      </Button>
    </div>
  )
}

function SkillsStep() {
  const [skills, setSkills] = useState($2);
  const addSkill = () => {
    const newId = (skills.length + 1).toString($2);
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }])
  },
  
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id)),
  },
  
  const updateSkill = (id: string, field: string, value: string) => {
    setSkills(skills.map(skill =>,
      skill.id === id ? { ...skill, [field]: value } : skill
    ))
  },
  
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <Input
                  placeholder="Skill (e.g. JavaScript, Figma)"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  className="flex-1"
                />
                <Select
                  value={skill.proficiency}
                  onValueChange={(value) => updateSkill(skill.id, "proficiency", value)}
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                {skills.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSkill(skill.id)}
                    aria-label="Remove skill"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full gap-2" 
              onClick={addSkill}
            >
              <Plus className="h-4 w-4" /> Add Another Skill
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="space-y-2">
            <Label>Skill Categories</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="justify-start">Development</Button>
              <Button variant="outline" className="justify-start">Design</Button>
              <Button variant="outline" className="justify-start">Marketing</Button>
              <Button variant="outline" className="justify-start">Business</Button>
              <Button variant="outline" className="justify-start">Data Analysis</Button>
              <Button variant="outline" className="justify-start">Languages</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
      >;
        <Plus className="h-4 w-4" /> Add Another Education;
      </Button>;
    </div>;

;

;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  );

};";
  () => removeSkill (skill.id) ";
}aria-label="Remove skill" > <Trash2 className="h-4 w-4 text-destructive" /> </Button>) ;
}</div>) ) ";
}<Button > <Plus className="h-4 w-4" /> Add Another Skill </Button> </div> </CardContent> </Card> <Card> <CardContent className="p-4" > <div className="space-y-2" > <Label>Skill Categories</Label> <div className="grid grid-cols-2 gap-2" > <Button variant="outline" className="justify-start" >Development</Button> <Button variant="outline" className="justify-start" >Design</Button> <Button variant="outline" className="justify-start" >Marketing</Button> <Button variant="outline" className="justify-start" >Business</Button> <Button variant="outline" className="justify-start" >Data Analysis</Button> <Button variant="outline" className="justify-start" >Languages</Button> </div> </div> </CardContent> </Card> </div>) ;
}"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

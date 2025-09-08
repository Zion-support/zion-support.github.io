

  }
  const goToPrevStep = () =>: any {
  // TODO: Implement
}
    // Check condition;
if ( {) {
  $2;
}"
      setCurrentStep ("details");"
    } else // Check condition;
if ( {) {
  $2;
}"
      setCurrentStep ("requirements");"
    } else // Check condition;
if ( {) {
  $2;
}"
      setCurrentStep ("budget");"
    }
  }
  const renderStepContent = () =>: any {
  // TODO: Implement
}
    switch (current_step) {"
      case "details": return <DetailsStep />;"
</DetailsStep>
        return <RequirementsStep />;
</RequirementsStep>
        return <BudgetStep />;
</BudgetStep>
        return <PreviewStep />;
</PreviewStep>
        return <DetailsStep />;
</DetailsStep>"
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details");"
</JobPostStep>"
      case "details": return <DetailsStep />;"
</DetailsStep>
        return <RequirementsStep />;
</RequirementsStep>
        return <BudgetStep />;
</BudgetStep>
        return <PreviewStep />;
</PreviewStep>
        return <DetailsStep />;

    }
  };

    }
  }
  },
  

  const goToPrevStep = () => {
    if (currentStep === "requirements") {
      setCurrentStep("details")
    } else if (currentStep === "budget") {
      setCurrentStep("requirements")
    } else if (currentStep === "preview") {
      setCurrentStep("budget")
    }

        return <RequirementsStep />,
</RequirementsStep>
        return <BudgetStep />,
</BudgetStep>
        return <PreviewStep />,
</PreviewStep>
        return <DetailsStep />

    }
  },
  

          </div>



          


              onClick={goToPrevStep}


            >

              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
          )}

          </Button>;
        </div>;"
        <div className="flex gap-2 mt-6">;"
</div>
            <Button;"
              variant="outline"""
              className="flex-1 gap-1""
              onClick = {goToPrevStep,}>;
</Button>"
              <ChevronLeft className="h-4 w-4" /> Back;"
</ChevronLeft>
            </Button>;

          )}


          <Button

          
          <Button 


      </div>




      




      </div>




      




          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select location type" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="remote">Remote</SelectItem>""
            <SelectItem value="onsite">On-site</SelectItem>""
            <SelectItem value="hybrid">Hybrid</SelectItem>"
          </SelectContent>
        </Select>
      </div>




      



      <div className="space-y-2">

        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select job type" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="fulltime">Full-time</SelectItem>""
            <SelectItem value="parttime">Part-time</SelectItem>""
            <SelectItem value="contract">Contract</SelectItem>""
            <SelectItem value="freelance">Freelance</SelectItem>"
          </SelectContent>
        </Select>
      </div>


import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue;"
} from "@/components/ui/select",;""
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';''
import { Badge } from "@/components/ui/badge",;""
import { Card, CardContent } from "@/components/ui/card",;""
type JobPostStep = "details" | "requirements" | "budget" | "preview",;"
export function MobileJobPost() {;"
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),;"
</Textarea>"
      case "details": return <DetailsStep />,;"
</DetailsStep>
        return <RequirementsStep />,;
</RequirementsStep>
        return <BudgetStep />,;
</BudgetStep>
        return <PreviewStep />,;
</PreviewStep>
        return <DetailsStep />;

    }
  },;
  return (;
    <div className="min-h-screen flex flex-col">;

          </Button>;
        </div>;"
        {renderStepContent()}<div className=\"flex gap-2 mt-6\" />;"
          {currentStep !== \"details\" && (<Button;"
              variant=\"outline\";}"
              className=\"flex-1 gap-1\";}
              onClick={goToPrevStep}
             />;"
              <ChevronLeft className=\"h-4 w-4\" /> Back;
            </Button>;
          )}<Button;"
            className=\"flex-1 gap-1\";
            onClick={goToNextStep}
           />;"
            {currentStep === \"preview\" ? \"Publish Job\" : \"Continue\"}"
            {currentStep !== \"preview\" && <ChevronRight className=\"h-4 w-4\" />}</Button>;
        </div>;
      </main>;

      <BottomNavigation />;
</BottomNavigation>
    </div>;"
    <div className="space-y-4">;"
</div>"
      <h2 className="text-lg font-medium">Job Details</h2>;""
      <div className="space-y-2">;"
</div>"
        <Label htmlFor="title">Job Title</Label>;""
        <Input id="title" placeholder="e.g. Senior React Developer" />;"
</Input>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <Label htmlFor="company">Company Name</Label>;""
        <Input id="company" placeholder="Your company name" />;"
</Input>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <Label htmlFor="location">Location</Label>;""
        <Select defaultValue="remote">;"
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select location type" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="remote">Remote</SelectItem>;""
            <SelectItem value="onsite">On-site</SelectItem>;""
            <SelectItem value="hybrid">Hybrid</SelectItem>;"
          </SelectContent>;
        </Select>;
      </div>;"
      <div className="space-y-2">;"
</div>"
        <Label htmlFor="jobType">Job Type</Label>;"
        <Select>;
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select job type" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="fulltime">Full-time</SelectItem>;""
            <SelectItem value="parttime">Part-time</SelectItem>;""
            <SelectItem value="contract">Contract</SelectItem>;""
            <SelectItem value="freelance">Freelance</SelectItem>;"
          </SelectContent>;
        </Select>;
      </div>;"
      <div className="space-y-2">;"
</div>"
        <Label htmlFor="description">Job Description</Label>;"
        <Textarea;"
          id="description";""
          placeholder="Describe the job role and responsibilities";"

          rows={5}
        />;
</Textarea>
      </div>;
    </div>;

  const [skills, setSkills] = useState<string[]>([
</string>"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="experience">Experience Level</Label>"
        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select experience level" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="entry">Entry Level</SelectItem>""
            <SelectItem value="mid">Mid Level</SelectItem>""
            <SelectItem value="senior">Senior</SelectItem>""
            <SelectItem value="expert">Expert</SelectItem>"
          </SelectContent>
        </Select>
      </div>


      

"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="education">Education</Label>"
        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select required education" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="high_school">High School</SelectItem>""
            <SelectItem value="associate">Associate Degree</SelectItem>""
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>''
            <SelectItem value="master">Master's Degree</SelectItem>''
            <SelectItem value="phd">PhD</SelectItem>""
            <SelectItem value="none">No Specific Requirement</SelectItem>"
          </SelectContent>
        </Select>
      </div>

          </Button>;
        </div>;
      </main>;
      <BottomNavigation />;

    </div>;
  );
}
;
function DetailsStep() {;
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Details</h2>;
      <div className="space-y-2">;
        <Label htmlFor="title">Job Title</Label>;
        <Input id="title" placeholder="e.g. Senior React Developer" />;
      </div>;
      <div className="space-y-2">;
        <Label htmlFor="company">Company Name</Label>;
        <Input id="company" placeholder="Your company name" />;
      </div>;
      <div className="space-y-2">;
        <Label htmlFor="location">Location</Label>;
        <Select defaultValue="remote">;
          <SelectTrigger>;
            <SelectValue placeholder="Select location type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="remote">Remote</SelectItem>;
            <SelectItem value="onsite">On-site</SelectItem>;
            <SelectItem value="hybrid">Hybrid</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space-y-2">;
        <Label htmlFor="jobType">Job Type</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select job type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="fulltime">Full-time</SelectItem>;
            <SelectItem value="parttime">Part-time</SelectItem>;
            <SelectItem value="contract">Contract</SelectItem>;
            <SelectItem value="freelance">Freelance</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space-y-2">;
        <Label htmlFor="description">Job Description</Label>;
        <Textarea;
          id="description";
          placeholder="Describe the job role and responsibilities";
          rows={5}
        />;
      </div>;
    </div>;
  );
}

        <Select>;
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select experience level" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="entry">Entry Level</SelectItem>;""
            <SelectItem value="mid">Mid Level</SelectItem>;""
            <SelectItem value="senior">Senior</SelectItem>;""
            <SelectItem value="expert">Expert</SelectItem>;"
          </SelectContent>;
        </Select>;

      </div>;

        <Select>;
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select required education" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="high_school">High School</SelectItem>;""
            <SelectItem value="associate">Associate Degree</SelectItem>;""
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>;''
            <SelectItem value="master">Master's Degree</SelectItem>;''
            <SelectItem value="phd">PhD</SelectItem>;""
            <SelectItem value="none">No Specific Requirement</SelectItem>;"
          </SelectContent>;
        </Select>;

      </div>;

          rows={4}
        />
</Textarea>
      </div>
      

      
      <div className="space-y-2">
        <Label htmlFor="responsibilities">Key Responsibilities</Label>
        <Textarea 
          id="responsibilities" 
          placeholder="List the key responsibilities for this role" 

        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select payment type" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="hourly">Hourly Rate</SelectItem>""
            <SelectItem value="fixed">Fixed Price</SelectItem>""
            <SelectItem value="salary">Salary</SelectItem>"
          </SelectContent>
        </Select>
      </div>




      



      <div className="space-y-2">
        <div className="flex gap-4 items-center">
          <Input placeholder="Min" type="number" className="w-full" />
          <span>to</span>
          <Input placeholder="Max" type="number" className="w-full" />
          <Select defaultValue="usd">
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Currency" />

            </SelectTrigger>
            <SelectContent>
</SelectContent>"
              <SelectItem value="usd">USD</SelectItem>""
              <SelectItem value="eur">EUR</SelectItem>""
              <SelectItem value="gbp">GBP</SelectItem>"
            </SelectContent>
          </Select>
        </div>
      </div>




      

"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="deadline">Application Deadline</Label>""
        <Input type="date" id="deadline" />"
</Input>
      </div>




      




      </div>




      




        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select project duration" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="ltw">Less than a week</SelectItem>""
            <SelectItem value="ltm">Less than a month</SelectItem>""
            <SelectItem value="1-3m">1-3 months</SelectItem>""
            <SelectItem value="3-6m">3-6 months</SelectItem>""
            <SelectItem value="6m+">6+ months</SelectItem>""
            <SelectItem value="ongoing">Ongoing</SelectItem>"
          </SelectContent>
        </Select>
      </div>



      



          </div>




          

"
          <div className="space-y-1 text-sm mt-4">"
</div>"
            <p className="font-medium">Salary Range:</p>"
            <p>$80,000 - $120,000 USD / year</p>
          </div>




          




            <p>Senior</p>
          </div>




          




            <p>December 15, 2023</p>
          </div>




          




            <Badge;
              key = {skill, }"
              variant="secondary";""
              className="flex items - center gap - 1 px - 3 py - 1";"
            >;
</Badge>
              <button;"
                className="ml - 1 rounded - full hover:bg - background / 20 p - 1";"
                on_click = {(, ) => remove_skill (skill), }
</button>
              </button>;
            </Badge>))}
        </div>;"
        <div className="flex gap - 2">;"
</div>
          <Input;
            value = {new_skill, }
            on_change = {(e, ) => setNewSkill (e.target.value), }
</Input>
          <Button on_click={add_skill}>Add</Button>;
        </div>;
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="requirements">Specific Requirements</Label>;"
        <Textarea;"
          id="requirements";""
          placeholder="List any specific requirements or qualifications";"
          rows = {4, }
        />;
</Textarea>
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="responsibilities">Key Responsibilities</Label>;"
        <Textarea;"
          id="responsibilities";""
          placeholder="List the key responsibilities for this role";"
          rows = {4, }
        />;
</Textarea>
      </div>;
    </div>);"
    <div className="space - y-4">;"
</div>"
      <h2 className="text - lg font - medium">Budget & Timeline</h2>;""
      <div className="space - y-2">;"
</div>"
        <Label html_for="payment_type">Payment Type</Label>;"
        <Select>;
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select payment type" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="hourly">Hourly Rate</SelectItem>;""
            <SelectItem value="fixed">Fixed Price</SelectItem>;""
            <SelectItem value="salary">Salary</SelectItem>;"
          </SelectContent>;
        </Select>;
      </div>;"
      <div className="space - y-2">;"
</div>
        <Label > Salary Range</Label>;"
        <div className="flex gap - 4 items - center">;"
</div>"
          <Input placeholder="Min" type="number" className="w - full" />;"
</Input>
          <span > to</span>;"
          <Input placeholder="Max" type="number" className="w - full" />;"
</Input>"
          <Select default_value="usd">;"
</Select>"
            <SelectTrigger className="w - 24">;"
</SelectTrigger>"
              <SelectValue placeholder="Currency" />;"
</SelectValue>
            </SelectTrigger>;
            <SelectContent>;
</SelectContent>"
              <SelectItem value="usd">USD</SelectItem>;""
              <SelectItem value="eur">EUR</SelectItem>;""
              <SelectItem value="gbp">GBP</SelectItem>;"

            </SelectContent>;
          </Select>;
        </div>;
      </div>;"

      <div className="space - y-2">;"
</div>"
        <Label html_for="deadline">Application Deadline</Label>;""
        <Input type="date" id="deadline" />;"
</Input>
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="start_date">Expected Start Date</Label>;""
        <Input type="date" id="start_date" />;"
</Input>
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="duration">Project Duration</Label>;"
        <Select>;
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select project duration" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="ltw">Less than a week</SelectItem>;""
            <SelectItem value="ltm">Less than a month</SelectItem>;""
            <SelectItem value="1 - 3m">1 - 3 months</SelectItem>;""
            <SelectItem value="3 - 6m">3 - 6 months</SelectItem>;""
            <SelectItem value="6m+">6+ months</SelectItem>;""
            <SelectItem value="ongoing">Ongoing</SelectItem>;"
          </SelectContent>;
        </Select>;
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="additional_info">Additional Budget Information</Label>;"
        <Textarea;"
          id="additional_info";""
          placeholder="Any additional information about budget or payment";"
          rows = {3, }
        />;
</Textarea>
      </div>;
    </div>);"
    <div className="space - y-4">;"
</div>"
      <h2 className="text - lg font - medium mb - 2">Job Preview</h2>;"
      <Card>;
</Card>"
        <CardContent className="p - 4">;"
</CardContent>"
          <h3 className="font - bold text - lg">Senior React Developer</h3>;""
          <p className="text - muted - foreground">TechCorp Inc. • Remote • Full - time</p>;""
          <div className="flex gap - 2 my - 3">;"
</div>"
            <Badge variant="outline">React</Badge>;""
            <Badge variant="outline">TypeScript</Badge>;""
            <Badge variant="outline">Node.js</Badge>;"
          </div>;"
          <div className="space - y-1 text - sm mt - 4">;"
</div>"
            <p className="font - medium">Salary Range:</p>;"
            <p>$80, 000 - $120, 000 USD / year</p>;
          </div>;"
          <div className="space - y-1 text - sm mt - 3">;"
</div>"
            <p className="font - medium">Experience Level:</p>;"
            <p > Senior</p>;
          </div>;"
          <div className="space - y-1 text - sm mt - 3">;"
</div>"
            <p className="font - medium">Application Deadline:</p>;"
            <p > December 15, 2023</p>;
          </div>;"
          <div className="mt - 4 pt - 3 border - t border - border">;"
</div>"
            <h4 className="font - medium mb - 2">Description</h4>;""
            <p className="text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;'
          </div>;
        </CardContent>;
      </Card>;'
      <Button variant="outline" className="w - full">Edit Job Post</Button>;"
    </div>);"
min - h-screen flex flex - col"> <MobileHeader </div> <Button variant=" outline"className=" flex gap - 1"> <Zap className=" h - 4 w - 4"/> AI Assist </Button> </div> {"
</MobileHeader>"
}<Button variant=" outline"className=" flex - 1 gap - 1"on_click={""
  goToPrevStep ";""
}> <ChevronLeft className=" h - 4 w - 4"/> Back </Button>);""
}<Button </Button> </div> </main> <BottomNavigation /> </div>) ";""
}<div className=" space - y-2"> <Label html_for=" title">Job Title</Label> <Input id=" title"placeholder=" e.g. Senior React Developer"/> </div> <div className=" space - y-2"> <Label html_for=" company">Company Name</Label> <Input id=" company"placeholder=" Your company name"/> </div> <div className=" space - y-2"> <Label html_for=" location">Location</Label> <Select default_value=" remote"> <SelectTrigger> <SelectValue placeholder=" Select location type"/> </SelectTrigger> <SelectContent> <SelectItem value=" remote">Remote</SelectItem> <SelectItem value=" onsite">On - site</SelectItem> <SelectItem value=" hybrid">Hybrid</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label html_for=" job_type">Job Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select job type"/> </SelectTrigger> <SelectContent> <SelectItem value=" fulltime">Full - time</SelectItem> <SelectItem value=" parttime">Part - time</SelectItem> <SelectItem value=" contract">Contract</SelectItem> <SelectItem value=" freelance">Freelance</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label html_for=" description">Job Description</Label> <Textarea id=" description"placeholder=" Describe the job role and responsibilities"rows= {"
  5;

}/> </div> </div>);
}const add_skill = () =>: any {
  if () {") {
  $2
}
  <div className=" space - y-2"> <Label html_for=" experience">Experience Level</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select experience level"/> </SelectTrigger> <SelectContent> <SelectItem value=" entry">Entry Level</SelectItem> <SelectItem value=" mid">Mid Level</SelectItem> <SelectItem value=" senior">Senior</SelectItem> <SelectItem value=" expert">Expert</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label html_for=" education">Education</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select required education"/> </SelectTrigger> <SelectContent> <SelectItem value=" high school">High School</SelectItem> <SelectItem value=" associate">Associate Degree</SelectItem> <SelectItem value=" bachelor">Bachelor's Degree</SelectItem> <SelectItem value=" master">Master's Degree</SelectItem> <SelectItem value=" phd">PhD</SelectItem> <SelectItem value=" none">No Specific Requirement</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label > Required Skills</Label> key= {
  skill ";
}variant=" secondary"className=" flex items - center gap - 1 px - 3 py - 1"> {
  skill;
}<button > × </button> </Badge>) ) ";
}</div> <div className=" flex gap - 2"> <Input /> <Button on_click={
  add_skill ";
}>Add</Button> </div> </div> <div className=" space - y-2"> <Label html_for=" requirements">Specific Requirements</Label> <Textarea /> </div> <div className=" space - y-2"> <Label html_for=" responsibilities">Key Responsibilities</Label> <Textarea /> </div> </div>) ";
}<div className=" space - y-2"> <Label html_for=" payment_type">Payment Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/> </SelectTrigger> <SelectContent> <SelectItem value=" hourly">Hourly Rate</SelectItem> <SelectItem value=" fixed">Fixed Price</SelectItem> <SelectItem value=" salary">Salary</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label > Salary Range</Label> <div className=" flex gap - 4 items - center"> <Input placeholder=" Min"type=" number"className=" w - full"/> <span > to</span> <Input placeholder=" Max"type=" number"className=" w - full"/> <Select default_value=" usd"> <SelectTrigger className=" w - 24"> <SelectValue placeholder=" Currency"/> </SelectTrigger> <SelectContent> <SelectItem value=" usd">USD</SelectItem> <SelectItem value=" eur">EUR</SelectItem> <SelectItem value=" gbp">GBP</SelectItem> </SelectContent> </Select> </div> </div> <div className=" space - y-2"> <Label html_for=" deadline">Application Deadline</Label> <Input type=" date"id=" deadline"/> </div> <div className=" space - y-2"> <Label html_for=" start_date">Expected Start Date</Label> <Input type=" date"id=" start_date"/> </div> <div className=" space - y-2"> <Label html_for=" duration">Project Duration</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/> </SelectTrigger> <SelectContent> <SelectItem value=" ltw">Less than a week</SelectItem> <SelectItem value=" ltm">Less than a month</SelectItem> <SelectItem value=" 1 - 3m">1 - 3 months</SelectItem> <SelectItem value=" 3 - 6m">3 - 6 months</SelectItem> <SelectItem value=" 6m+">6+ months</SelectItem> <SelectItem value=" ongoing">Ongoing</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label html_for=" additional_info">Additional Budget Information</Label> <Textarea id=" additional_info"placeholder=" Any additional information about budget or payment"rows= {
  3;
}/> </div> </div>) '";


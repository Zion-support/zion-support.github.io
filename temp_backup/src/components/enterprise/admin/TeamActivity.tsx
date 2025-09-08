/* eslint-disable */
 import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function TeamActivity () {;
  //Mock activity data const activities = [ {;
  id: 1;
user: "Alex Johnson";";""
action: "Posted a job";";""
target: "Senior AI Engineer";""
timestamp: new Date (Date.now () - 1000 * 60 * 30);";""
category: "jobs" ;
};"
{;""
  id: 2;";""
user: "Jamie Smith";";""
action: "Contacted candidate";";""
target: "Michael Chen";""
timestamp: new Date (Date.now () - 1000 * 60 * 120);";""
category: "candidates" ;
};"
{;""
  id: 3;";""
user: "Sam Williams";";""
action: "Updated job";";""
target: "Frontend Developer";""
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 5);";""
category: "jobs" ;
};"
{;""
  id: 4;";""
user: "Alex Johnson";";""
action: "Added team member";";""
target: "Chris Rodriguez";""
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24);";""
category: "team" ;
};"
{;""
  id: 5;";""
user: "Taylor Brown";";""
action: "Viewed candidate profile";";""
target: "Sarah Kim";""
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 2);";""
category: "candidates" ;
};"
{;""
  id: 6;";""
user: "Jamie Smith";";""
action: "Updated budget";";""
target: "Monthly spending cap";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 3);
//Function to format the date in a readable way const formatDate = (date: Date) => {;
  const now = new Date ();
const diffMs = now.getTime () - date.getTime ();
const diffMins = Math.floor (diffMs / (1000 * 60) );
const diffHrs = Math.floor (diffMs / (1000 * 60 * 60) );
const diffDays = Math.floor (diffMs / (1000 * 60 * 60 * 24) );
if (diffMins < 60) {;
  return `$ {;
  diffMins ;`
}minutes ago` ;
}else if (diffHrs < 24) {;`
  return `$ {;
  diffHrs ;`
}hours ago` ;
}else if (diffDays < 7) {;`
  return `$ {;
  diffDays ;`
}days ago` ;
}else {;
  return date.toLocaleDateString () ;
}
};
const getCategoryBadge = (category: string) => {;"
  ;""
};";""
  activities.map ( (activity) => (<TableRow key= {;"
  activity.id ;""
}> </TableCell> </TableRow>) ) ";""
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>) ;""
}"""`
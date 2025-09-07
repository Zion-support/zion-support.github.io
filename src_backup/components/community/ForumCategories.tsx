<<<<<<< HEAD
:src/components/community/ForumCategories.tsx
import Link from "next/link,
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from @/components/ui/card",
import { useAuth } from "@/hooks/useAuth;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react
import { ForumCategoryInfo } from @/types/community";
const categories: ForumCategoryInfo[] = [
  {
=======
>>>>>>> origin/chore/fix-lint-and-merge
{

    id: "getting-hired
    name: Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform.
    adminOnly: false
    icon: Briefcase"
  }
import { ForumCategoryInfo } from "@/types/community",
  {
    id: "project-help
    name: Project Help"
    description: "Get help with your ongoing projects and collaboration.
    adminOnly: false
    icon: MessageSquare"
  {    id: "feedback

    id: feedback"

    name: "Feedback & Feature Requests
    description: Share your feedback and suggest new features."
    adminOnly: false
<<<<<<< HEAD
:src/components/community/ForumCategories.tsx
    icon: "Code
  }
    icon: FileText"
=======
    icon: "FileText"
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  {
    id: "announcements
    name: Announcements"
    description: "Official announcements from the Zion team.
    adminOnly: true
    icon: Megaphone"

const categories: ForumCategoryInfo[] = [;

  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  {id: "getting-hired;
    name: Getting Hired";
    description: "Tips, strategies, and questions about getting hired on the platform.;
    adminOnly: false;
    icon: Briefcase";
  }
import { ForumCategoryInfo } from "@/types/community,{id: project-help";
    name: "Project Help;
    description: Get help with your ongoing projects and collaboration.";
    adminOnly: false;
    icon: "MessageSquare;
  {{id: feedback";
    name: "Feedback & Feature Requests;
    description: Share your feedback and suggest new features.";
    adminOnly: false;
    icon: "FileText;
  },{id: announcements";
    name: "Announcements;
    description: Official announcements from the Zion team.";
    adminOnly: true;
    icon: "Megaphone;
  {id: getting - hired",name: "Getting Hired,description: Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,icon: "Briefcase;
  }export const ForumCategories = () =>: any {const { user } = use_auth ()const is_admin = user?.user_type === admin' || user?.role === 'admin;
  const visible_categories = categories.filter (category => !category.admin_only || is_admin)return (<div className=grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;
      {visible_categories.map ((category) => {const Icon = icon_map[category.icon as keyof typeof icon_map]; return (<Link key={category.id} href={`/community / category/${category.id}`}>;
            <Card className="h - full transition - all hover: shadow - md hover:border - zion - purple / 50 cursor - pointer>;
              <CardHeader className=flex flex - row items - center gap - 4">;
                <div className="p - 2 bg - zion - purple / 10 rounded - full>;
                  <Icon className=h - 6 w - 6 text - zion - purple" />;
                </div>;
                <CardTitle className="text - xl>{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className=text - base">{category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>);
      })}
    </div>);
    id: "project-help,
    name: Project Help",
    description: "Get help with your ongoing projects and collaboration.,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    id: "project-help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
>>>>>>> origin/chore/fix-lint-and-merge
    adminOnly: false,
    icon: MessageSquare"
  },
  {
    id: "ai-tools,
    name: AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.,
    adminOnly: false,
    icon: Code"
  },
  {
    id: "feedback,
    name: Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.,
    adminOnly: false,
<<<<<<< HEAD
    icon: FileText"
:src/components/community/ForumCategories.tsx
  }
=======
    icon: "FileText"
>>>>>>> origin/chore/fix-lint-and-merge
  },
  {
    id: "announcements,
    name: Announcements",
    description: "Official announcements from the Zion team.,
    adminOnly: true,
    icon: Megaphone"
  }
<<<<<<< HEAD
:src/components/community/ForumCategories.tsx
]
const iconMap = {
  Briefcase
  MessageSquare
  Code
  FileText
  Megaphone
}
export const ForumCategories = () => {
  const { user } = useAuth()
  const isAdmin = user?.userType === admin' |user?.role === 'admin
  const visibleCategories = categories.filter(
    category => !category.adminOnly |isAdmin
  )
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3>;
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap]; return (
=======
>>>>>>> origin/chore/fix-lint-and-merge

],

  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone
},

export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === admin' || user?.role === 'admin,

    category => !category.adminOnly || isAdmin
  ),

  return (
    <div className=grid gap-4 md: grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (

          <Link key={category.id} href={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer>
              <CardHeader className=flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full>
                  <Icon className=h-6 w-6 text-zion-purple" />
                </div>
                <CardTitle className="text-xl>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=text-base">{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
<<<<<<< HEAD
:src/components/community/ForumCategories.tsx
      })}
    </div>
  )
}
export default ForumCategories
"
export default ForumCategories
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react';
import { ForumCategoryInfo } from "@/types/community",;
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
=======
import Link from next/link,
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from @/hooks/useAuth,
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from lucide-react';
import { ForumCategoryInfo } from "@/types/community",
  {
    id: getting-hired,
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,
    icon: Briefcase;
  }

  {
    id: "project-help",
    name: Project Help,
    description: "Get help with your ongoing projects and collaboration.",
    adminOnly: false,
    icon: MessageSquare;

  }
  {
    id: "ai-tools",
    name: AI Tools Discussion,
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,
    icon: Code;
  }

  {
    id: "feedback",
    name: Feedback & Feature Requests,
    description: "Share your feedback and suggest new features.",
    adminOnly: false,
    icon: FileText;

<<<<<<< HEAD
  }

  {
=======
  {;
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  {;

    id: "announcements",;
    name: "Announcements",,
  description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
=======
    id: "announcements",
    name: Announcements,,
  description: "Official announcements from the Zion team.",
    adminOnly: true,
    icon: Megaphone;
>>>>>>> merged-prs-20250907-203621
  }

];

  Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone;
}

export const ForumCategories = () => {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin || user?.role === admin';

  const visibleCategories = categories && categories.filter(;
    category => !category && category.adminOnly || isAdmin;
  );

  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {
        const Icon = iconMap[category && category.icon as keyof typeof iconMap];        return (
          <Link key={category && category.id} href={`/community/category/${category && category.id}`}>;
            <Card className=h-full transition-all hover: shadow-md hover:border-zion-purple/50 cursor-pointer>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </Link>)})}
    </div>)}],const iconMap = {Briefcase,MessageSquare,Code,FileText,Megaphone;
},export const ForumCategories = () => {const { user } = useAuth(),const isAdmin = user?.userType === 'admin || user?.role === admin',const visibleCategories = categories.filter(category => !category.adminOnly || isAdmin;
  ),return (<div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories.map((category) => {const Icon = iconMap[category.icon as keyof typeof iconMap],return (<Link key={category.id} href={`/community/category/${category.id}`}>;
            <Card className=h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <CardHeader className="flex flex-row items-center gap-4">;

                <div className=p-2 bg-zion-purple/10 rounded-full>;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                <CardTitle className=text-xl>{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
                <CardTitle className=text-xl>{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category.description}</CardDescription>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <CardTitle className="text-xl">{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              </CardContent>;
            </Card>;
          </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        );
      })}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        )const isAdmin = user?.userType === 'admin || user?.role === admin';
export default ForumCategories;import Link from next/link,import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",import { useAuth } from @/hooks/useAuth,import { MessageSquare, Briefcase, Code, FileText, Megaphone  } from 'lucide-react;
  {id: "getting-hired",name: Getting Hired,description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,icon: Briefcase;
  }{id: "project-help",name: Project Help,description: "Get help with your ongoing projects and collaboration.",adminOnly: false,icon: MessageSquare;}{id: "ai-tools",name: AI Tools Discussion,description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,icon: Code;
  }{id: "feedback",name: Feedback & Feature Requests,description: "Share your feedback and suggest new features.",adminOnly: false,icon: FileText;}{id: "announcements",name: Announcements,description: "Official announcements from the Zion team.",adminOnly: true,icon: Megaphone;
  }];const iconMap = {Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone;
}export const ForumCategories = () => {const { user } = useAuth()const isAdmin  = user?.userType === admin' || user?.role === 'admin;const visibleCategories = categories && categories.filter(category => !category && category.adminOnly || isAdmin;
  )return (<div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {const Icon = iconMap[category && category.icon as keyof typeof iconMap];        return (<Link key={category && category.id} href={`/community/category/${category && category.id}`}>;
            <Card className=h-full transition-all hover: shadow-md hover:border-zion-purple/50 cursor-pointer>;<CardHeader className="flex flex-row items-center gap-4">;
                <div className=p-2 bg-zion-purple/10 rounded-full>;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;<CardTitle className=text-xl>{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;</CardContent>;
            </Card>;
          </Link>;
        )})}
=======
        );
      })}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>;
  )
}

export default ForumCategories;

export default ForumCategories;
";
  const is_admin = user?.user_type === admin' || user?.role === 'admin;

import Link from next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription} from '@/components/ui/card;
import { useAuth } from @/hooks/useAuth';
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone} from 'lucide-react;
import { ForumCategoryInfo } from @/types/community';

<<<<<<< HEAD
  {
<<<<<<< HEAD
=======
  )}export default ForumCategories;export default ForumCategories;export default ForumCategories;
";
  const is_admin  = user?.user_type === 'admin || user?.role === admin';export default ForumCategories;export default ForumCategories;import Link from 'next/link;
import { Card,CardContent,CardHeader,CardTitle,CardDescription} from @/components/ui/card';
import { useAuth  } from '@/hooks/useAuth;
import { MessageSquare,Briefcase,Code,FileText,Megaphone} from lucide-react';
import { ForumCategoryInfo  } from '@/types/community';
  {
=======
const categories: ForumCategoryInfo[] = [
  {
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

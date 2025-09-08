<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/community/ForumCategories.tsx
import Link from "next/link",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'
import { ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
  {
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
{

    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false
    icon: "Briefcase"
  }
import { ForumCategoryInfo } from "@/types/community",
  {
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"
  {    id: "feedback"

    id: "feedback"

    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
<<<<<<< HEAD

    icon: "FileText"

=======
<<<<<<< HEAD
:src/components/community/ForumCategories.tsx
    icon: "Code"
  }
<<<<<<< HEAD
    icon: "FileText"


  },

=======
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
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"

const categories: ForumCategoryInfo[] = [;

  {
<<<<<<< HEAD


=======
<<<<<<< HEAD

;
  {id: "getting-hired";
    name: "Getting Hired";
    description: "Tips, strategies, and questions about getting hired on the platform.";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  {id: "getting-hired;
    name: Getting Hired";
    description: "Tips, strategies, and questions about getting hired on the platform.;
>>>>>>> origin/resolved-merge-conflicts
    adminOnly: false;
    icon: "Briefcase";
  }
import { ForumCategoryInfo } from "@/types/community",{id: "project-help";
    name: "Project Help";
    description: "Get help with your ongoing projects and collaboration.";
    adminOnly: false;
    icon: "MessageSquare";
  {id: "feedback";
    name: "Feedback & Feature Requests";
    description: "Share your feedback and suggest new features.";
    adminOnly: false;
    icon: "FileText";
  },{id: "announcements";
    name: "Announcements";
    description: "Official announcements from the Zion team.";
    adminOnly: true;
    icon: "Megaphone";
const categories: ForumCategoryInfo[] = [;
  {id: "getting - hired",name: "Getting Hired",description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,icon: "Briefcase";
  }export const ForumCategories = () =>: any {const { user } = use_auth ()const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
  const visible_categories = categories.filter (category => !category.admin_only || is_admin)return (<div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;
      {visible_categories.map ((category) => {const Icon = icon_map[category.icon as keyof typeof icon_map]; return (<Link key={category.id} href={`/community / category/${category.id}`}>;
            <Card className="h - full transition - all hover: shadow - md hover:border - zion - purple / 50 cursor - pointer">;
              <CardHeader className="flex flex - row items - center gap - 4">;
                <div className="p - 2 bg - zion - purple / 10 rounded - full">;
                  <Icon className="h - 6 w - 6 text - zion - purple" />;
                </div>;
                <CardTitle className="text - xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text - base">{category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>);
      })}
    </div>);
<<<<<<< HEAD
    id: "project-help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
=======
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
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    adminOnly: false,
    icon: "MessageSquare"
  },
  {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
  {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    adminOnly: false,
<<<<<<< HEAD

=======
<<<<<<< HEAD
    icon: "FileText"
=======
<<<<<<< HEAD
    icon: FileText"
>>>>>>> origin/resolved-merge-conflicts
:src/components/community/ForumCategories.tsx
  }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    icon: "FileText"

  },
  {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    adminOnly: true,
    icon: "Megaphone"
  }
<<<<<<< HEAD


=======
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
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
  const visibleCategories = categories.filter(
    category => !category.adminOnly |isAdmin
  )
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories.map((category) => {;
        const Icon = iconMap[category.icon as keyof typeof iconMap]; return (
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

],

const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone
},

export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',

  const visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (

          <Link key={category.id} href={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full">
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
<<<<<<< HEAD




=======
<<<<<<< HEAD
:src/components/community/ForumCategories.tsx
      })}
    </div>
  )
}
export default ForumCategories
"
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
export default ForumCategories
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react';
import { ForumCategoryInfo } from "@/types/community",;
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import Link from next/link,
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from @/hooks/useAuth,
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from lucide-react';
import { ForumCategoryInfo } from "@/types/community",
  {
    id: getting-hired,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,;
    icon: "Briefcase";
  };

  {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";

  };
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,;
    icon: "Code";
  };

  {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";

<<<<<<< HEAD
=======
<<<<<<< HEAD
  };

  {;

=======
<<<<<<< HEAD
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  {;

<<<<<<< HEAD


=======
>>>>>>> origin/resolved-merge-conflicts
    id: "announcements",;
    name: "Announcements",,
  description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    id: "announcements",
    name: Announcements,,
  description: "Official announcements from the Zion team.",
    adminOnly: true,
    icon: Megaphone;
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }

];

const iconMap = {;
  Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone;
};

export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';

  const visibleCategories = categories && categories.filter(;
    category => !category && category.adminOnly || isAdmin;
  );

  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {;
        const Icon = iconMap[category && category.icon as keyof typeof iconMap];        return (
          <Link key={category && category.id} href={`/community/category/${category && category.id}`}>;
            <Card className="h-full transition-all hover: shadow-md hover:border-zion-purple/50 cursor-pointer">;

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </Link>)})}
    </div>)}],const iconMap = {Briefcase,MessageSquare,Code,FileText,Megaphone;
},export const ForumCategories = () => {const { user } = useAuth(),const isAdmin = user?.userType === 'admin' || user?.role === 'admin',const visibleCategories = categories.filter(category => !category.adminOnly || isAdmin;
  ),return (<div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories.map((category) => {const Icon = iconMap[category.icon as keyof typeof iconMap],return (<Link key={category.id} href={`/community/category/${category.id}`}>;
<<<<<<< HEAD
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;
=======
            <Card className=h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <CardHeader className="flex flex-row items-center gap-4">;

                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                <CardTitle className="text-xl">{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
                <CardTitle className="text-xl">{category.name}</CardTitle>;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </CardContent>;
            </Card>;
          </Link>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
        )const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
export default ForumCategories;import Link from "next/link",import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",import { useAuth } from "@/hooks/useAuth",import { MessageSquare, Briefcase, Code, FileText, Megaphone  } from 'lucide-react';
const categories: ForumCategoryInfo[] = [;
  {id: "getting-hired",name: "Getting Hired",description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,icon: "Briefcase";
  }{id: "project-help",name: "Project Help",description: "Get help with your ongoing projects and collaboration.",adminOnly: false,icon: "MessageSquare";}{id: "ai-tools",name: "AI Tools Discussion",description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,icon: "Code";
  }{id: "feedback",name: "Feedback & Feature Requests",description: "Share your feedback and suggest new features.",adminOnly: false,icon: "FileText";}{id: "announcements",name: "Announcements",description: "Official announcements from the Zion team.",adminOnly: true,icon: "Megaphone";
=======
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
>>>>>>> origin/resolved-merge-conflicts
  }];const iconMap = {Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone;
}export const ForumCategories = () => {const { user } = useAuth()const isAdmin  = user?.userType === 'admin' || user?.role === 'admin';const visibleCategories = categories && categories.filter(category => !category && category.adminOnly || isAdmin;
  )return (<div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {const Icon = iconMap[category && category.icon as keyof typeof iconMap];        return (<Link key={category && category.id} href={`/community/category/${category && category.id}`}>;
            <Card className="h-full transition-all hover: shadow-md hover:border-zion-purple/50 cursor-pointer">;<CardHeader className="flex flex-row items-center gap-4">;
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;<CardTitle className="text-xl">{category && category.name}</CardTitle>;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>;
  )
};

export default ForumCategories;

export default ForumCategories;
";
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,;
} from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,;
} from 'lucide-react';
import { ForumCategoryInfo } from '@/types/community';

<<<<<<< HEAD

=======
<<<<<<< HEAD
const categories: ForumCategoryInfo[] = [
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  )}export default ForumCategories;export default ForumCategories;export default ForumCategories;
";
  const is_admin  = user?.user_type === 'admin' || user?.role === 'admin';export default ForumCategories;export default ForumCategories;import Link from 'next/link';
import { Card,CardContent,CardHeader,CardTitle,CardDescription} from '@/components/ui/card';
import { useAuth  } from '@/hooks/useAuth';
import { MessageSquare,Briefcase,Code,FileText,Megaphone} from 'lucide-react';
import { ForumCategoryInfo  } from '@/types/community';
const categories: ForumCategoryInfo[] = [;
  {
<<<<<<< HEAD

=======
=======
const categories: ForumCategoryInfo[] = [
  {
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

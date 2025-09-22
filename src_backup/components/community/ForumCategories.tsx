<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'
import { ForumCategoryInfo } from "@/types/community",
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
=======
{
    id: "feedback"
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
{
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx

    id: "feedback"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"

<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
  },

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

  },



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
  {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
const categories: ForumCategoryInfo[] = [;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
    id: "project-help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
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

export const ForumCategories = () =>: any {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
  const visible_categories = categories.filter (
    category => !category.admin_only || is_admin);

  return (
    <div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;
      {visible_categories.map ((category) => {
        const Icon = icon_map[category.icon as keyof typeof icon_map]; return (
          <Link key={category.id} href={`/community / category/${category.id}`}>;
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
}



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======

<<<<<<< HEAD:src/components/community/ForumCategories.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
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

  const isAdmin = user?.userType === 'admin' || user?.role === 'admin'
export default ForumCategories;
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react';
import { ForumCategoryInfo } from "@/types/community",;
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
<<<<<<< HEAD
    name: "Getting Hired",;
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;
    icon: "Briefcase";
  },;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,;
    icon: "Briefcase";
  };
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
  {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  },;
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
  };
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,;
    icon: "Code";
  };
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
  {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  };

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
  {;
=======
    name: "Getting Hired",;  {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    id: "announcements",;
    name: "Announcements",,
  description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
],;
const iconMap = {;
  Briefcase,;
  MessageSquare,;
  Code,;
  FileText,;
  Megaphone;
},;
export const ForumCategories = () => {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  const visibleCategories = categories.filter(;
    category => !category.adminOnly || isAdmin;
  ),;
  return (;
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories.map((category) => {;
        const Icon = iconMap[category.icon as keyof typeof iconMap],;
        return (;
          <Link key={category.id} href={`/community/category/${category.id}`}>;
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
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
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
              <CardHeader className="flex flex-row items-center gap-4">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                <CardTitle className="text-xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category.description}</CardDescription>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
                <CardTitle className="text-xl">{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
              </CardContent>;
            </Card>;
          </Link>;
        );
      })}
    </div>;
  )
};
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default ForumCategories;
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
=======


export default ForumCategories;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx

export default ForumCategories;
";
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default ForumCategories;
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
export default ForumCategories;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
export default ForumCategories;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx
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

const categories: ForumCategoryInfo[] = [
  {
<<<<<<< HEAD:src/components/community/ForumCategories.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/community/ForumCategories.tsx

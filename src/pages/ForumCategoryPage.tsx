"feedback": {""
    id: "feedback"","
  name: "Feedback & Feature Requests"""
    description: "Share your feedback and suggest new features."",
  adminOnly: false;"
    icon: "FileText""
  },

"
  "announcements": {""
    id: "announcements"","
  name: "Announcements"""
    description: "Official announcements from the Zion team."",
  adminOnly: true;"
    icon: "Megaphone"""
import { log_info } from '@/utils/ production_logger';''
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';'
// Mock category data;
const categories_info: Record < string, ForumCategoryInfo> = {'
  "getting - hired": {""
    id: "getting - hired",""
    name: "Getting Hired",""
    description: "Tips, strategies, and questions about getting hired on the platform.";"
    admin_only: false,"
    icon: "Briefcase";"
  }


},

const iconMap = {"
  "Briefcase": Briefcase,""
  "MessageSquare": MessageSquare,""
  "Code": Code,""
  "FileText": FileText,""
  "Megaphone": Megaphone;"
},

function CategoryContent({
  categoryId,
  category,
  IconComponent,


  user}: {
  categoryId: string;,
  category: ForumCategoryInfo;
  IconComponent: React.ComponentType<any>
</any>
const categoriesInfo: Record<string ForumCategoryInfo> = {;
</string>
  IconComponent: React.ComponentType<any>,;
</any>)"
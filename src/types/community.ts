import React from "

export interface ForumPost {
id: string; title: string; content: string; authorId: string; authorName: string; authorAvatar: string; category: string; tags: string[], createdAt: string; updatedAt: string; likes: number; replies: ForumReply[], isPinned: boolean; isLocked: boolean;
}

export interface ForumReply {
id: string; content: string; authorId: string; authorName: string; authorAvatar: string; createdAt: string; updatedAt: string; likes: number;
parentId?: string,
}

export interface ForumCategoryInfo {
id: string; name: string; description: string; icon: string; postCount: number;
lastPost?: {,
title: string; author: string; date: string;
}
}
export const FORUM_CATEGORIES: ForumCategoryInfo[] = [
{,
id: "general", name: ",
description: "General topics and discussions", icon: "
postCount: 156; lastPost: {
title: ",
author: "Admin", date: "2024-01-15T10:00:00Z",
},
},
{
id: "tech-support", name: ",
description: "Get help with technical issues", icon: "
postCount: 89; lastPost: {
title: ",
author: "Developer123", date: "2024-01-14T15:30:00Z",
},
},
{
id: "business", name: ",
description: "Business discussions and strategies", icon: "
postCount: 67; lastPost: {
title: ",
author: "BusinessUser", date: "2024-01-13T09:15:00Z",
},
},
{
id: "announcements", name: ",
description: "Official announcements and updates", icon: "
postCount: 23; lastPost: {
title: ",
author: "Admin",
date: "2024-01-12T14:00:00Z",
},
},
];

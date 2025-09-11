export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author_id: string;
  category_id: string;
  created_at: string;
  updated_at?: string;
  views?: number;
  likes?: number;
  replies?: number;
  is_pinned?: boolean;
  is_locked?: boolean;
  tags?: string[];
}

export interface ForumCategory {
  id: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  post_count?: number;
  created_at: string;
}

export interface ForumReply {
  id: string;
  post_id: string;
  author_id: string;
  content: string;
  created_at: string;
  updated_at?: string;
  likes?: number;
  is_solution?: boolean;
}
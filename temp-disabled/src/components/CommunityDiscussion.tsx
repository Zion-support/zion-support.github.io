
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';


interface DiscussionPost {
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;

}

const initial_posts: DiscussionPost[] = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'JD',
    time: '2 hours ago',
    title: 'Best practices for React performance optimization',
    body: 'I\'ve been working on optimizing a large React application and wanted to share some techniques that have worked well for me...'
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'JS',
    time: '4 hours ago',
    title: 'TypeScript vs JavaScript for large projects',
    body: 'What are your thoughts on using TypeScript for large-scale applications? I\'m considering migrating our codebase...'
  },
  {
    id: 3,
    author: 'Mike Johnson',
    avatar: 'MJ',
    time: '1 day ago',
    title: 'Database design patterns for microservices',
    body: 'I\'m architecting a microservices system and would love to hear about database design patterns that work well...'
  }
];

const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState<DiscussionPost[]>(initial_posts);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title.trim() && newPost.body.trim()) {
      const post: DiscussionPost = {
        id: Date.now(),
        author: 'You',
        avatar: 'Y',
        time: 'Just now',
        title: newPost.title,
        body: newPost.body
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', body: '' });
      setIsCreatingPost(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold">Community Discussion</h2>
      </div>

      {/* Create New Post */}
      <Card className="mb-6">
        <CardContent className="p-6">
          {!isCreatingPost ? (
            <Button 
              onClick={() => setIsCreatingPost(true)}
              className="w-full"
            >
              Start a new discussion
            </Button>
          ) : (
            <form onSubmit={handleCreatePost} className="space-y-4">
              <Input
                placeholder="Discussion title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
              <Textarea
                placeholder="What would you like to discuss?"
                value={newPost.body}
                onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                rows={4}
                required
              />
              <div className="flex space-x-2">
                <Button type="submit">Post Discussion</Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setIsCreatingPost(false);
                    setNewPost({ title: '', body: '' });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Discussion Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>{post.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold">{post.author}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700">{post.body}</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex space-x-4 text-sm text-gray-500">
                <button className="hover:text-blue-600">Reply</button>
                <button className="hover:text-blue-600">Like</button>
                <button className="hover:text-blue-600">Share</button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityDiscussion;


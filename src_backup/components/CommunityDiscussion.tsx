<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
interface DiscussionPost {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: number,
  author: string,
  avatar?: string,
  time: string,
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
body: string
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Avatar, AvatarFallback } from '@/components / ui / avatar';
import { Card, CardContent } from '@/components / ui / card';
import { Separator } from '@/components / ui / separator';
interface DiscussionPost {
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,  time: string,
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
  title: string,
  body: string
}

=======
  id: number,
  author: string,
  avatar?: string,
  time: string,  title: string,
  body: string;
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface DiscussionPost {
  body: string;

const initialPosts: DiscussionPost[] = [
  {
    id: 1,
author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",
  },
  {
    id: 2,
    author: 'David Kim',
    time: '50m ago',
    title: 'Quick tip: How to rank your Zion listing higher',
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.',
  },
];

export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  body: string
origin/cursor/automate-test-improve-and-merge-code-2533
}
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const initialPosts: DiscussionPost[] = [
  {
<<<<<<< HEAD
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},  {
=======
=======
const initial_posts: DiscussionPost[] = [;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx

  {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    id: 1,
<<<<<<< HEAD
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {
    id: 2,
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
    author: "David Kim",
    time: "50m ago",
    title: "Quick tip: How to rank your Zion listing higher",
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],

export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts),
  const [showNew, setShowNew] = useState(false),
  const [newTitle, setNewTitle] = useState(""),
  const [newBody, setNewBody] = useState(""),

  const handleAddPost = () => {
=======
    author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: "Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?",
  },
    id: 2,
export const CommunityDiscussion: React.FC = () => {export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
=======
    author: 'David Kim',
    time: '50m ago',
    title: 'Quick tip: How to rank your Zion listing higher',
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.',
  },
];
export const CommunityDiscussion: React.FC = () => {
  const [posts, set_posts] = useState (initial_posts);
  const [show_new, setShowNew] = useState (false);
  const [new_title, setNewTitle] = useState ('');
  const [new_body, setNewBody] = useState ('');  const [new_title, setNewTitle] = useState ("");
  const [new_body, setNewBody] = useState ("");
  const handleAddPost = () =>: any {
    if (|| !new_body.trim ()) return) {
  $2
}
    set_posts ([;
      {
        id: Date.now (),
        author: 'You',
        time: 'Now',
        title: new_title,
        body: new_body,
      },
      ...posts,
    ]);
    setNewTitle ('');
    setNewBody ('');
    setShowNew (false);

  }
import React, { useState, useMemo } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface DiscussionPost {;
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,  time: string,;
  title: string,;
  body: string;
}
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,;
    author: 'Anna Zhou',;
    time: '2h ago',;
    title: 'What AI trends are you most excited for in 2025?',;
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",;
  },;
    id: 2,;
    author: 'David Kim',;
    time: '50m ago',;
    title: 'Quick tip: How to rank your Zion listing higher',;
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.',;
  },;
];


export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx

<<<<<<< HEAD
export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts),
  const [showNew, setShowNew] = useState(false),
  const [newTitle, setNewTitle] = useState(""),
  const [newBody, setNewBody] = useState(""),
  const handleAddPost = () => {    setShowNew(false)
=======

export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
=======
  const handleAddPost = () => {;
    if (!newTitle && newTitle.trim() || !newBody && newBody.trim()) return;
    setPosts([;
      {;
        id: Date && Date.now(),;
        author: 'You',;
        time: 'Now',;
        title: newTitle,;
        body: newBody,;
      },;
      ...posts,;
    ]);
    id: 1;
    author: "Anna Zhou";
    time: "2h ago";
    title: "What AI trends are you most excited for in 2025?";
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {
    id: 2;
    author: "David Kim";
    time: "50m ago";
    title: "Quick tip: How to rank your Zion listing higher";
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],

export const CommunityDiscussion: React.FC;
  const handleAddPost = () => {
    if (!newTitle.trim() |!newBody.trim()) return
    setPosts([
      {
        id: Date.now(),
author: 'You',
        time: 'Now',
        title: newTitle,
        body: newBody,
      },
      ...posts,
    ]);
origin/cursor/automate-test-improve-and-merge-code-2533
    setNewTitle('');
    setNewBody('');
    setShowNew(false);
  };

  return (
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    setShowNew(false)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <div className='w - full max - w-2xl mx - auto mt - 8 p - 6 bg - zion - blue - light rounded - 2xl shadow - xl animate - fade - in'>;
      <div className='flex items - center gap - 3 mb - 4'>;
        <MessageCircle size={28} className='text - zion - cyan' />;
        <span className='font - bold text - 2xl text - white tracking - tight'>;
          Community Discussion;
        </span>;
        <span className='ml - auto text - xs text - zion - slate - light bg - zion - purple / 20 rounded - full px - 2 py - 0.5'>;
          {posts.length} posts;
        </span>;
      </div>;
      <Separator className='mb - 6' />;
      <div className='mb - 4 flex justify - end'>;
        <Button;
          className='bg - zion - purple text - white hover:bg - zion - purple - light transition hover - scale';
          size='sm';
          on_click={() => setShowNew (v => !v)}        >;
          {show_new ? 'Cancel' : 'New Post'}
        </Button>;
      </div>;
      {show_new && (
        <Card className='mb - 6 animate - scale - in'>;
          <CardContent className='py - 5'>;
            <Input;
              placeholder='Title (e.g., Share an AI tool, Ask for help...)';
              className='mb - 3 bg - zion - blue - light text - black placeholder:text - zion - slate';
              value={new_title}
              on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                setNewTitle (e.target.value);
              }              max_length={80}
            />;
            <Textarea;
              placeholder="What's on your mind?";
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]'        title: new_title,
        body: new_body},
      ...posts]);
    setNewTitle ("");
    setNewBody ("");
    setShowNew (false);
  }

  return (

    id: 1,

  const handleAddPost = () => {
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (!newTitle.trim() || !newBody.trim()) return,
    setPosts([
      {
        id: Date.now(),
<<<<<<< HEAD
        author: "You",
        time: "Now",
        title: newTitle,
        body: newBody},
      ...posts]),
    setNewTitle(""),
    setNewBody(""),
    setShowNew(false)
  },
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle size={28} className="text-zion-cyan" />
        <span className="font-bold text-2xl text-white tracking-tight">
          Community Discussion
        </span>
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">
          {posts.length} posts
        </span>
      </div>
      <Separator className="mb-6" />
      <div className="mb-4 flex justify-end">
        <Button
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >
          {showNew ? "Cancel" : "New Post"}
=======

<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </Button>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
=======
          onClick={() => setShowNew((v) => !v)}
        >
          {showNew ? "Cancel" : "New Post"}
        </Button>
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======

        </Button>
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
    <div className='w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in'>
      <div className='flex items-center gap-3 mb-4'>
        <MessageCircle size={28} className='text-zion-cyan' />
        <span className='font-bold text-2xl text-white tracking-tight'>
          Community Discussion
        </span>
        <span className='ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5'>
          {posts.length} posts
        </span>
      </div>
      <Separator className='mb-6' />
      <div className='mb-4 flex justify-end'>
        <Button
          className='bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale'
          size='sm'
          onClick={() => setShowNew(v => !v)}        >
          {showNew ? 'Cancel' : 'New Post'}
        </Button>
      </div>
      {showNew && (
        <Card className='mb-6 animate-scale-in'>
          <CardContent className='py-5'>
            <Input
              placeholder='Title (e.g., Share an AI tool, Ask for help...)'
              className='mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate'
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTitle(e.target.value)
              }
origin/cursor/automate-test-improve-and-merge-code-2533
              maxLength={80}
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
            />
            <Textarea
              placeholder="What's on your mind?"
<<<<<<< HEAD
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]"
import React, { useState } from "react",;
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Avatar, AvatarFallback } from "@/components/ui/avatar",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
interface DiscussionPost {;
  id: number,;
  author: string,;
  avatar?: string,;
  time: string,;
  title: string,;
  body: string;
}
;
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,;
    author: "Anna Zhou",;
    time: "2h ago",;
    title: "What AI trends are you most excited for in 2025?",;
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},;
  {;
    id: 2,;
    author: "David Kim",;
    time: "50m ago",;
    title: "Quick tip: How to rank your Zion listing higher",;
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],;
export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts),;
  const [showNew, setShowNew] = useState(false),;
  const [newTitle, setNewTitle] = useState(""),;
  const [newBody, setNewBody] = useState(""),;
  const handleAddPost = () => {;
    if (!newTitle.trim() || !newBody.trim()) return,;
    setPosts([;
      {;
        id: Date.now(),;
        author: "You",;
        time: "Now",;
        title: newTitle,;
        body: newBody},;
      ...posts]),;
    setNewTitle(""),;
    setNewBody(""),;
    setShowNew(false)
};
  return (;
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
      <div className="flex items-center gap-3 mb-4">;
        <MessageCircle size={28} className="text-zion-cyan" />;
        <span className="font-bold text-2xl text-white tracking-tight">;
          Community Discussion;
        </span>;
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">;
          {posts.length} posts;
        </span>;
      </div>;
      <Separator className="mb-6" />;
      <div className="mb-4 flex justify-end">;
        <Button;
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";
          size="sm";
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}
        </Button>;
      </div>;
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
            <Input;
              placeholder="Title (e.g., Share an AI tool, Ask for help...)";
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate";
              value={newTitle}
<<<<<<< HEAD
<<<<<<< HEAD
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
=======
            />
            <Textarea
              placeholder="What's on your mind?"


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
              maxLength={80}
            />;
<<<<<<< HEAD
            <Textarea;
              placeholder="What's on your mind?";
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]";
              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={400}
              rows={3}
            />
            <div className="flex gap-3 justify-end">
              <Button
                variant="secondary"
                size="sm"
                className="bg-zion-blue text-white hover:bg-zion-blue-dark"
                onClick={() => setShowNew(false)}
=======
            <Textarea
              placeholder="What's on your mind?"


<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'
              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewBody(e.target.value)
              }
              maxLength={400}
              rows={3}            />
            <div className='flex gap-3 justify-end'>
              <Button
                variant='secondary'
                size='sm'
                className='bg-zion-blue text-white hover:bg-zion-blue-dark'
                onClick={() => setShowNew(false)}
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
              >
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                Cancel
              </Button>
              <Button

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                size="sm"
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
=======
                size="sm"
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'
origin/cursor/automate-test-improve-and-merge-code-2533
                onClick={handleAddPost}
<<<<<<< HEAD
                disabled={!newTitle.trim() || !newBody.trim()}
=======

                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}
                onClick = {handleAddPost,}
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">
            <CardContent className="py-4 flex gap-4">
              <Avatar>
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
                disabled = {!newTitle && newTitle.trim() || !newBody && newBody.trim(),}>;
    <div className="w - full max - w-2xl mx - auto mt - 8 p - 6 bg - zion - blue - light rounded - 2xl shadow - xl animate - fade - in">;
      <div className="flex items - center gap - 3 mb - 4">;
        <MessageCircle size={28} className="text - zion - cyan" />;
        <span className="font - bold text - 2xl text - white tracking - tight">;
          Community Discussion;
        </span>;
        <span className="ml - auto text - xs text - zion - slate - light bg - zion - purple / 20 rounded - full px - 2 py - 0.5">;
          {posts.length} posts;
        </span>;
      </div>;
      <Separator className="mb - 6" />;
      <div className="mb - 4 flex justify - end">;
        <Button;
          className="bg - zion - purple text - white hover:bg - zion - purple - light transition hover - scale";
          size="sm";
          on_click={() => setShowNew ((v) => !v)}
        >;
          {show_new ? "Cancel" : "New Post"}
        </Button>;
      </div>;
      {show_new && (
        <Card className="mb - 6 animate - scale - in">;
          <CardContent className="py - 5">;
            <Input;
              placeholder="Title (e.g., Share an AI tool, Ask for help...)";
              className="mb - 3 bg - zion - blue - light text - black placeholder:text - zion - slate";
              value={new_title}
              on_change={(e: React.ChangeEvent < HTMLInputElement>) => setNewTitle (e.target.value)}
              max_length={80}
            />;
            <Textarea;
              placeholder="What's on your mind?";
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]';
              value={new_body}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) =>;
                setNewBody (e.target.value);
              }
              max_length={400}
              rows={3}            />;
            <div className='flex gap - 3 justify - end'>;
              <Button;
                variant='secondary';
                size='sm';
                className='bg - zion - blue text - white hover:bg - zion - blue - dark'                on_click={() => setShowNew (false)}
                variant="secondary";
                size="sm";
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";
                on_click = {() => setShowNew (false), }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >;
                Post;
              </Button>;
            </div>;
          </CardContent>;
<<<<<<< HEAD
        </Card>;
      )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">
            <CardContent className="py-4 flex gap-4">
              <Avatar>
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .toUpperCase()
<<<<<<< HEAD
                    .slice(0, 2)}
=======


        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  )
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
      </div>;
=======
                    .slice(0, 2)}      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className='mt-8 text-xs text-zion-slate-dark text-center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
  )
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
                disabled = {!newTitle.trim() |!newBody.trim(),}
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
<div className='flex flex-col gap-6'>
        {posts.map(post => (
          <Card
            key={post.id}
            className='bg-zion-blue border-zion-slate-dark shadow-lg'
          >
            <CardContent className='py-4 flex gap-4'>
              <Avatar>
                <AvatarFallback>
                  {post.author
                    .split(' ')
                    .map(s => s[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
<div className='flex gap-2 items-center'>
                  <span className='font-semibold text-white'>
                    {post.author}
                  </span>
                  <span className='text-xs text-zion-slate-light'>
                    {post.time}
                  </span>
                </div>
                <h3 className='text-lg font-bold text-zion-cyan mt-1'>
                  {post.title}
                </h3>
                <p className='text-zion-slate-light mt-1 whitespace-pre-line'>
                  {post.body}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<div className='mt-8 text-xs text-zion-slate-dark text-center'>
        🚀 Stay engaged! Top contributors are regularly featured on the
        homepage.
      </div>
    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
  newTitle ;
}onChange= {;
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) ;
origin/cursor/automate-test-improve-and-merge-code-2533
}maxLength= {;
  80 ";
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
  post && post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {;
  post && post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;
  post && post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;
  post && post.body ;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) 
};
'"      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>;
  )
};

        </Card>)}
      <div className='flex flex - col gap - 6'>;
        {posts.map (post => (
          <Card;
            key={post.id}
            className='bg - zion - blue border - zion - slate - dark shadow - lg';
          >;
            <CardContent className='py - 4 flex gap - 4'>;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (' ');
                    .map (string => s[0]);
                    .join ('')                    .toUpperCase ()      <div className="flex flex - col gap-6">;
        {posts.map ((post, ) => (
          <Card key={post.id} className="bg - zion - blue border - zion - slate - dark shadow-lg">;
            <CardContent className="py - 4 flex gap-4">;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (" ");
                    .map ((s, ) => s[0]);
                    .join ("");
                    .slice (0, 2)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                </AvatarFallback>;
              </Avatar>;
              <div>;
<<<<<<< HEAD
                <div className="flex gap-2 items-center">;
                  <span className="font-semibold text-white">{post.author}</span>;
                  <span className="text-xs text-zion-slate-light">{post.time}</span>;
                </div>;
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{post.title}</h3>;
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{post.body}</p>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
<<<<<<< HEAD
      </div>;
      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
=======
                <div className='flex gap - 2 items - center'>;
                  <span className='font - semibold text - white'>;
                    {post.author}
                  </span>;
                  <span className='text - xs text - zion - slate - light'>;
                    {post.time}
                  </span>;
                </div>;
                <h3 className='text - lg font - bold text - zion - cyan mt - 1'>;
                  {post.title}
                </h3>;
                <p className='text - zion - slate - light mt - 1 whitespace - pre - line'>;
                  {post.body}
                </p>              </div>                <div className="flex gap - 2 items - center">;
                  <span className="font - semibold text - white">{post.author}</span>;
                  <span className="text - xs text - zion - slate - light">{post.time}</span>;
                </div>;
                <h3 className="text - lg font - bold text - zion - cyan mt - 1">{post.title}</h3>;
                <p className="text - zion - slate - light mt - 1 whitespace - pre - line">{post.body}</p>;
            </CardContent>;
          </Card>))}
      </div>;
      <div className='mt - 8 text - xs text - zion - slate - dark text - center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>);
}
  new_title;
}on_change= {
  (e: React.ChangeEvent < HTMLInputElement>) => setNewTitle (e.target.value);
}max_length= {
  80 ";
}/> <Textarea /> <div className=" flex gap - 3 justify - end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap - 2 items - center"> <span className="font - semibold text - white"> {
  post.author ";
}</span> <span className="text - xs text - zion - slate - light"> {
  post.time ";
}</span> </div> <h3 className="text - lg font - bold text - zion - cyan mt - 1"> {
  post.title ";
}</h3> <p className="text - zion - slate - light mt - 1 whitespace - pre - line"> {
  post.body;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt - 8 text - xs text - zion - slate - dark text - center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>);
}
'"      <div className="mt - 8 text - xs text - zion - slate - dark text - center">;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
<<<<<<< HEAD
    </div>;
  );
};
=======
    </div>);
}
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx
  post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {;
  post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;
  post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;
  post.body ;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
};
'"
<<<<<<< HEAD:src/components/CommunityDiscussion.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/CommunityDiscussion.tsx

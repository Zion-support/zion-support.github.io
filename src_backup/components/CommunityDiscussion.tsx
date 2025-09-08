<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
  id: number,author: string,avatar?: string,time: string,body: string;
import React, { useState } from 'react';
import { MessageCircle  } from 'lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
interface DiscussionPost  {id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,  time: string,

  title: string,
  body: string;
  id: number,
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
id: number,
  author: string,
  avatar?: string,
  time: string,

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

  title: string,
  body: string
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
}
const initial_posts: DiscussionPost[] = [;

}
  {id: 1,  time: string,title: string,body: string;import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { Avatar, AvatarFallback  } from '@/components/ui/avatar';
import { Card, CardContent  } from '@/components/ui/card';
import { Separator  } from '@/components/ui/separator';
interface DiscussionPost  {body: string;const initialPosts: DiscussionPost[] = [;
  {id: 1,author: 'Anna Zhou',time: '2h ago',title: 'What AI trends are you most excited for in 2025?',body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},{id: 2,author: 'David Kim',time: '50m ago',title: 'Quick tip: How to rank your Zion listing higher',body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.'}];export const CommunityDiscussion: React.FC = () => {const [posts, setPosts] = useState(initialPosts)const [showNew, setShowNew] = useState(false)const [newTitle, setNewTitle] = useState('')const [newBody, setNewBody]  = useState('')body: string;
}const initialPosts: DiscussionPost[] = [;
  {author: "Anna Zhou",time: "2h ago",title: "What AI trends are you most excited for in 2025?",body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},const initial_posts: DiscussionPost[]  = [;{id: 1,author: 'Anna Zhou',time: '2h ago',title: 'What AI trends are you most excited for in 2025?',body: "Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?"},id: 2,export const CommunityDiscussion: React.FC = () => {author: 'David Kim',time: '50m ago',title: 'Quick tip: How to rank your Zion listing higher',body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.'}];
export const CommunityDiscussion: React.FC = () => {const [posts, set_posts] = useState (initial_posts)const [show_new, setShowNew] = useState (false)const [new_title, setNewTitle] = useState ('')const [new_body, setNewBody] = useState ('')const [new_title, setNewTitle] = useState ("")const [new_body, setNewBody] = useState ("")const handleAddPost = () =>: any {if (|| !new_body.trim ()) return) {$2;
}
    set_posts ([;
      {id: Date.now (),author: 'You',time: 'Now',title: new_title,body: new_body},...posts])setNewTitle ('')setNewBody ('')setShowNew (false)}
import React, { useState, useMemo } from 'react';
interface DiscussionPost  {id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
const initialPosts: DiscussionPost[] = [;
  {id: 1,  time: string,title: string,body: string;
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
<<<<<<< HEAD
=======
  {
    id: 1,
    author: 'Anna Zhou,
    time: 2h ago',
    title: 'What AI trends are you most excited for in 2025?,
    body: "Lets spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?},
    id: 2,
    author: 'David Kim,
    time: 50m ago',
    title: 'Quick tip: How to rank your Zion listing higher,
    body: Fill out every profile detail, add strong tags, and post weekly! See results in a month.'}];
>>>>>>> origin/resolved-merge-conflicts


export const CommunityDiscussion: React.FC = () => {
export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
<<<<<<< HEAD
=======
  const [newBody, setNewBody] = useState(');  const [newTitle, setNewTitle] = useState(");
  const [newBody, setNewBody] = useState(");
>>>>>>> origin/resolved-merge-conflicts

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
  {id: 1,author: 'Anna Zhou',time: '2h ago',title: 'What AI trends are you most excited for in 2025?',body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},id: 2,author: 'David Kim',time: '50m ago',title: 'Quick tip: How to rank your Zion listing higher',body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.'}];export const CommunityDiscussion: React.FC = () => {const [posts, setPosts] = useState(initialPosts)const [showNew, setShowNew] = useState(false)const [newTitle, setNewTitle]  = useState('')export const CommunityDiscussion: React.FC = () => {const [posts, setPosts] = useState(initialPosts),const [showNew, setShowNew] = useState(false),const [newTitle, setNewTitle] = useState(""),const [newBody, setNewBody] = useState(""),const handleAddPost = () => {const [newBody, setNewBody] = useState('')const [newTitle, setNewTitle] = useState("")const [newBody, setNewBody]  = useState("")const handleAddPost = () => {if (!newTitle && newTitle.trim() || !newBody && newBody.trim()) return;
    setPosts([;
      {id: Date && Date.now(),author: 'You',time: 'Now',title: newTitle,body: newBody},...posts])id: 1;
    author: "Anna Zhou";
    time: "2h ago";
    title: "What AI trends are you most excited for in 2025?";
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},{id: 2;
    author: "David Kim";
    time: "50m ago";
    title: "Quick tip: How to rank your Zion listing higher";
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],
<<<<<<< HEAD
=======
    body: Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],
>>>>>>> origin/resolved-merge-conflicts

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

export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts),
  const [showNew, setShowNew] = useState(false),
  const [newTitle, setNewTitle] = useState(""),
  const [newBody, setNewBody] = useState(""),
  const handleAddPost = () => {
    setNewTitle('');
    setNewBody('');
    setShowNew(false);
  };

  return (

    if (!newTitle.trim() || !newBody.trim()) return,
    setPosts([
      {
        id: Date.now(),


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

          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >
          {showNew ? "Cancel" : "New Post"}


        </Button>
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input


              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
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
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],export const CommunityDiscussion: React.FC;
  const handleAddPost = () => {if (!newTitle.trim() |!newBody.trim()) return;
    setPosts([;
      {id: Date.now(),author: 'You',time: 'Now',title: newTitle,body: newBody},...posts])setNewTitle('')setNewBody('')setShowNew(false)}return (className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'        title: newTitle,body: newBody},...posts])setNewTitle("")setNewBody("")setShowNew(false)<div className='w - full max - w-2xl mx - auto mt - 8 p - 6 bg - zion - blue - light rounded - 2xl shadow - xl animate - fade - in'>;
        body: newBody},
      ...posts])
<<<<<<< HEAD
    setNewTitle("")
    setNewBody("")
=======
    setNewTitle(")
    setNewBody(")
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

    id: 1,

    setShowNew(false)

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
      {show_new && (<Card className='mb - 6 animate - scale - in'>;
          <CardContent className='py - 5'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
      {show_new && (<Card className=mb - 6 animate - scale - in'>;
          <CardContent className='py - 5>;
=======
=======
=======
<<<<<<< HEAD
      {show_new && (<Card className=mb - 6 animate - scale - in'>;
          <CardContent className='py - 5>;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {show_new && (
        <Card className='mb - 6 animate - scale - in'>;
          <CardContent className='py - 5'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]'        title: new_title,body: new_body},...posts])setNewTitle ("")setNewBody ("")setShowNew (false)}return (id: 1,const handleAddPost = () => {if (!newTitle.trim() || !newBody.trim()) return,setPosts([;
      {id: Date.now(),return (<div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
      <div className="flex items-center gap-3 mb-4">;
        <MessageCircle size={28} className="text-zion-cyan" />;
        <span className="font-bold text-2xl text-white tracking-tight">;
<<<<<<< HEAD
=======
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]'        title: new_title,body: new_body},...posts])setNewTitle (")setNewBody (")setShowNew (false)}return (id: 1,const handleAddPost = () => {if (!newTitle.trim() || !newBody.trim()) return,setPosts([;
      {id: Date.now(),return (<div className=w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
      <div className="flex items-center gap-3 mb-4>;
        <MessageCircle size={28} className=text-zion-cyan" />;
        <span className="font-bold text-2xl text-white tracking-tight>;
>>>>>>> origin/resolved-merge-conflicts
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
          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}</Button>;
      </div>;
      {showNew && (<Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
            <Input;
<<<<<<< HEAD
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]'        title: new_title,
=======
              className=mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]        title: new_title,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]'        title: new_title,
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        body: new_body},
      ...posts]);
    setNewTitle ("");
    setNewBody ("");
    setShowNew (false);
  }

  return (

    id: 1,

  const handleAddPost = () => {

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

          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >
          {showNew ? "Cancel" : "New Post"}

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </Button>
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input
<<<<<<< HEAD
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
=======
              placeholder=Title (e.g., Share an AI tool, Ask for help...)"
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
          {showNew ? 'Cancel' : 'New Post'}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {showNew ? Cancel : 'New Post'}
>>>>>>> origin/resolved-merge-conflicts
        </Button>;
      </div>;
      {showNew && (<Card className='mb-6 animate-scale-in'>;
          <CardContent className='py-5'>;
            <Input;
              placeholder='Title (e.g., Share an AI tool, Ask for help...)';
              className='mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate';
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {showNew ? 'Cancel' : 'New Post'}
        </Button>
      </div>
      {showNew && (
        <Card className='mb-6 animate-scale-in'>
          <CardContent className='py-5'>
            <Input
              placeholder='Title (e.g., Share an AI tool, Ask for help...)'
              className='mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate'
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTitle(e.target.value)
              }
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>;
                setNewTitle(e.target.value)}maxLength={80}/>;
            <Textarea;
              placeholder="What's on your mind?";
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]";
import React, { useState } from "react",import { Button } from "@/components/ui/button",import { Input } from "@/components/ui/input",import { Textarea } from "@/components/ui/textarea",import { Avatar, AvatarFallback } from "@/components/ui/avatar",import { Card, CardContent } from "@/components/ui/card",import { Separator } from "@/components/ui/separator",interface DiscussionPost  {id: number,author: string,avatar?: string,time: string,title: string,body: string;
}const initialPosts: DiscussionPost[] = [;
  {id: 1,author: "Anna Zhou",time: "2h ago",title: "What AI trends are you most excited for in 2025?",body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},{id: 2,author: "David Kim",time: "50m ago",title: "Quick tip: How to rank your Zion listing higher",body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],export const CommunityDiscussion: React.FC = () => {const [posts, setPosts] = useState(initialPosts),const [showNew, setShowNew] = useState(false),const [newTitle, setNewTitle] = useState(""),const [newBody, setNewBody] = useState(""),const handleAddPost = () => {if (!newTitle.trim() || !newBody.trim()) return,setPosts([;
      {id: Date.now(),author: "You",time: "Now",title: newTitle,body: newBody},...posts]),setNewTitle(""),setNewBody(""),setShowNew(false)}return (<div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
              maxLength={80}

            />
            <Textarea
              placeholder="What's on your mind?"
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
    setShowNew(false);
  };
  return (;
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
      <div className="flex items-center gap-3 mb-4">;
        <MessageCircle size={28} className="text-zion-cyan" />;
        <span className="font-bold text-2xl text-white tracking-tight">;
          Community Discussion;
        </span>;
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0 && 0.5">;
          {posts && posts.length} posts;
        </span>;
      </div>;
      <Separator className="mb-6" />;
      <div className="mb-4 flex justify-end">;<Button;
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";
          size="sm";onClick={() => setShowNew((v) => !v)}
          size="sm";
<<<<<<< HEAD
=======
          size="sm;onClick={() => setShowNew((v) => !v)}
          size=sm";
>>>>>>> origin/resolved-merge-conflicts


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
              maxLength={80}

          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}
        </Button>;
      </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
      {showNew && (<Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
            <Input
              placeholder="Title (e && e.g., Share an AI tool, Ask for help...)"
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {showNew && (<Card className="mb-6 animate-scale-in>;
          <CardContent className=py-5">;
            <Input
              placeholder="Title (e && e.g., Share an AI tool, Ask for help...)
              className=mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
=======
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Input;
              placeholder="Title (e.g., Share an AI tool, Ask for help...)";
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate";
              value={newTitle}

              maxLength={80}
            />;

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

              >

                Cancel
              </Button>
              <Button
<<<<<<< HEAD



                className=bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
size='sm'
                className=bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale
origin/cursor/automate-test-improve-and-merge-code-2533


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


                size="sm"


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'
              rows={3}            />;
            <div className='flex gap-3 justify-end'>;
              <Button;
                variant='secondary';
                size='sm';
                className='bg-zion-blue text-white hover:bg-zion-blue-dark';
                onClick={() => setShowNew(false)}>;
                Cancel;
              </Button>;
              <Button;
                size="sm";
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale";
size='sm';
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale';
                onClick={handleAddPost}disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}
                onClick = {handleAddPost}<div className="flex flex-col gap-6">;
        {posts.map((post) => (<Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">;
            <CardContent className="py-4 flex gap-4">;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split(" ").map((s) => s[0]).join("").toUpperCase().slice(0, 2)}disabled = {!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                onClick={handleAddPost}

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
                variant='secondary';
                size='sm';
                className='bg - zion - blue text - white hover:bg - zion - blue - dark'                on_click={() => setShowNew (false)}
                variant="secondary";
                size="sm";
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";
          </CardContent>;🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
                on_click = {() => setShowNew (false), }
=======
<<<<<<< HEAD
                variant='secondary;
                size=sm';
                className='bg - zion - blue text - white hover:bg - zion - blue - dark                on_click={() => setShowNew (false)}
                variant="secondary;
                size=sm";
                className="bg - zion - blue text - white hover:bg - zion - blue - dark;
          </CardContent>;🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
                on_click = {() => setShowNew (false)}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                variant='secondary';
                size='sm';
                className='bg - zion - blue text - white hover:bg - zion - blue - dark'                on_click={() => setShowNew (false)}
                variant="secondary";
                size="sm";
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";
                on_click = {() => setShowNew (false), }
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              >;
                Post;
              </Button>;
            </div>;
          </CardContent>;

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

      </div>;

      <div className='mt-8 text-xs text-zion-slate-dark text-center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;

                disabled = {!newTitle.trim() |!newBody.trim(),}
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<div className='flex flex-col gap-6'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className='flex flex-col gap-6>;
>>>>>>> origin/resolved-merge-conflicts
        {posts.map(post => (<Card;
            key={post.id}
            className='bg-zion-blue border-zion-slate-dark shadow-lg';
          >;
            <CardContent className='py-4 flex gap-4'>;
              <Avatar>;
                <AvatarFallback>{post.author;
                    .split(' ').map(s => s[0]).join('').toUpperCase().slice(0, 2)}
                </AvatarFallback>;
              </Avatar>;
              <div>;
<div className='flex gap-2 items-center'>;
                  <span className='font-semibold text-white'>;
                    {post.author}
                  </span>;
                  <span className='text-xs text-zion-slate-light'>;
                    {post.time}
                  </span>;
                </div>;
                <h3 className='text-lg font-bold text-zion-cyan mt-1'>;
                  {post.title}
                </h3>;
<<<<<<< HEAD
                <p className='text-zion-slate-light mt-1 whitespace-pre-line'>;
=======
                <p className=text-zion-slate-light mt-1 whitespace-pre-line'>;
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

};
  newTitle ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}onChange= {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}onChange= {;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}onChange= {
>>>>>>> origin/resolved-merge-conflicts
  (e: React && React.ChangeEvent<HTMLInputElement>) => setNewTitle (e && e.target.value) ;
=======
}onChange= {;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) ;
origin/cursor/automate-test-improve-and-merge-code-2533
}maxLength= {;
  80 ";
<<<<<<< HEAD


=======
<<<<<<< HEAD
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;

        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> <Textarea /> <div className= flex gap-3 justify-end> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join (") .toUpperCase () .slice (0, 2) ;
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className=font-semibold text-white> {
>>>>>>> origin/resolved-merge-conflicts
      </div>;
<div className='mt-8 text-xs text-zion-slate-dark text-center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;
  )}newTitle ;
}onChange= {(e: React && React.ChangeEvent<HTMLInputElement>) => setNewTitle (e && e.target.value)(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value)}maxLength= {80 ";
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {post && post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {post && post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {post && post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {post && post.body ;
  post && post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {;
  post && post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;
  post && post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;
  post && post.body ;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>)}'"      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>;
  )}</Card>)}
      <div className='flex flex - col gap - 6'>;
        {posts.map (post => (<Card;
            key={post.id}
            className='bg - zion - blue border - zion - slate - dark shadow - lg';
          >;
            <CardContent className='py - 4 flex gap - 4'>;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (' ').map (string => s[0]).join ('')                    .toUpperCase ()      <div className="flex flex - col gap - 6">;
        {posts.map ((post, ) => (<Card key={post.id} className="bg - zion - blue border - zion - slate - dark shadow - lg">;
            <CardContent className="py - 4 flex gap - 4">;
              <Avatar>;
                <AvatarFallback>{post.author;
                    .split (" ").map ((s, ) => s[0]).join ("").slice (0, 2)}
                </AvatarFallback>;
              </Avatar>;
              <div>;<div className="flex gap-2 items-center">;
<<<<<<< HEAD
=======
              <div>;<div className="flex gap-2 items-center>;
>>>>>>> origin/resolved-merge-conflicts
              <div>;
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
      </div>;<div className='flex gap - 2 items - center'>;
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

        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
      <div className='mt - 8 text - xs text - zion - slate - dark text - center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>)}
  new_title;
}on_change= {(e: React.ChangeEvent < HTMLInputElement>) => setNewTitle (e.target.value)}max_length= {80 ";
}/> <Textarea /> <div className=" flex gap - 3 justify - end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap - 2 items - center"> <span className="font - semibold text - white"> {post.author ";
}</span> <span className="text - xs text - zion - slate - light"> {post.time ";
}</span> </div> <h3 className="text - lg font - bold text - zion - cyan mt - 1"> {post.title ";
}</h3> <p className="text - zion - slate - light mt - 1 whitespace - pre - line"> {post.body;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt - 8 text - xs text - zion - slate - dark text - center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>)}
'"      <div className="mt - 8 text - xs text - zion - slate - dark text - center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>);
}
      </div>;
=======
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;

        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {;
  post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;
  post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;
  post.body ;
<<<<<<< HEAD

}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
};

=======
<<<<<<< HEAD
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
};
=======
<<<<<<< HEAD
}</p> </div> </CardContent> </Card>) ) ;
}</div> <div className=mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
}
>>>>>>> origin/resolved-merge-conflicts
    </div>)}post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {post.body ;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>)}'";
'"
=======
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
};
<<<<<<< HEAD
'"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
'"
=======
'"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

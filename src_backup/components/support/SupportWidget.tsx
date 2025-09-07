<<<<<<< HEAD:src_backup/components/support/SupportWidget.tsx
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/components/support/SupportWidget.tsx
<<<<<<< HEAD
<<<<<<< HEAD
const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:src/components/support/SupportWidget.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { ChatBotPanel } from "./ChatBotPanel";
import { MessageSquare, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50"
          aria-label="Open support"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
      {/* Support panel */}
      {isOpen && (;
        <div
          className={cn(
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark"
              ? "bg-zion-blue-dark border border-zion-blue-light"
              : "bg-white border border-gray-200",
          )}
          style={{ height: "600px", maxHeight: "80vh" }}
        >
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />
              <h3
                className={cn(
                  "font-semibold",
                  theme === "dark" ? "text-white" : "text-gray-800",
<<<<<<< HEAD:src_backup/components/support/SupportWidget.tsx
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()
  return (
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size='icon'
          className='fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50'
          aria-label='Open support'        >
          <MessageSquare className='h-6 w-6' />
        </Button>
      )}
      {/* Support panel */}
      {isOpen && (
        <div
          className={cn(
            'fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col'
            theme === 'dark'
              ? 'bg-zion-blue-dark border border-zion-blue-light'
              : 'bg-white border border-gray-200'

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ChatBotPanel } from './ChatBotPanel';
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const router = null;
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
              : "bg-white border border-gray-200"
origin/cursor/automate-test-improve-and-merge-code-2533
          )}
          style={{ height: '600px', maxHeight: '80vh' }}        >
          <div className='flex items-center justify-between p-4 border-b border-zion-purple/20'>
            <div className='flex items-center'>
              <MessageSquare className='h-5 w-5 text-zion-cyan mr-2' />
              <h3
                className={cn(
                  'font-semibold'
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:src/components/support/SupportWidget.tsx
=======

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                )}
              >

import React, { useState } from "react",
import { useRouter } from "next/router",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTheme } from "@/hooks/useTheme",
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false),
  const { theme } = useTheme(),
  const router = useRouter(),
  
  return (
    <>
import React, { useState } from "react",;
import { useRouter } from "next/router",;
import { Button } from "@/components/ui/button",;
import { ChatBotPanel } from "./ChatBotPanel",;
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useTheme } from "@/hooks/useTheme",;
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  const router = useRouter();
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50"
          aria-label="Open support"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/support/SupportWidget.tsx
;
ursor/automate-test-improve-and-merge-code-646c;
const [isOpen, setIsOpen] = useState(false)const { theme } = useTheme()const router = useRouter()import React, { useState } from 'react';
import { useRouter  } from 'next/router';
import { Button  } from '@/components/ui/button';
import { ChatBotPanel  } from './ChatBotPanel';
import { MessageSquare, Info, X  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { useTheme  } from '@/hooks/useTheme';
export function SupportWidget() {const [isOpen, setIsOpen] = useState(false)const { theme } = useTheme()const router  = useRouter()return (<>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (<Button;
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
      {/* Support panel */}
      {isOpen && (<div;
          className={cn("fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",theme === "dark";
              ? "bg-zion-blue-dark border border-zion-blue-light";
              : "bg-white border border-gray-200",)}
          style={{ height: "600px", maxHeight: "80vh" }}
        >;
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;
            <div className="flex items-center">;
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;
              <h3;
                className={cn("font-semibold",theme === "dark" ? "text-white" : "text-gray-800","font-semibold",theme === "dark" ? "text-white" : "text-gray-800",const [isOpen, setIsOpen] = useState(false)const { theme } = useTheme()const router = useRouter()return (<>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (<Button;
          onClick={() => setIsOpen(true)}
          size='icon';
          className='fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50';
          aria-label='Open support'        >;
          <MessageSquare className='h-6 w-6' />;
        </Button>;
      )}
      {/* Support panel */}
      {isOpen && (<div;
          className={cn('fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col';
            theme === 'dark';
              ? 'bg-zion-blue-dark border border-zion-blue-light';
              : 'bg-white border border-gray-200';
export function SupportWidget() {const [isOpen, setIsOpen] = useState(false)const { theme } = useTheme()const router = null;
            theme === "dark";
              ? "bg-zion-blue-dark border border-zion-blue-light";
              : "bg-white border border-gray-200";
          )}
          style={{ height: '600px', maxHeight: '80vh' }}        >;
          <div className='flex items-center justify-between p-4 border-b border-zion-purple/20'>;
            <div className='flex items-center'>;
              <MessageSquare className='h-5 w-5 text-zion-cyan mr-2' />;
              <h3;
                className={cn('font-semibold';
                  theme === 'dark' ? 'text-white' : 'text-gray-800';
ursor/automate-test-improve-and-merge-code-646c;
                  "font-semibold",theme === "dark" ? "text-white" : "text-gray-800",)}
              >;
import React, { useState } from "react",import { useRouter } from "next/router",import { Button } from "@/components/ui/button",import { ChatBotPanel } from "./ChatBotPanel",import { cn } from "@/lib/utils",import { useTheme } from "@/hooks/useTheme",export function SupportWidget() {const [isOpen, setIsOpen] = useState(false),const { theme } = useTheme(),const router = useRouter(),return (<>;
export function SupportWidget() {const [isOpen, setIsOpen] = useState(false),const { theme } = useTheme(),const router = useRouter()return (<>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (<Button;
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}{/* Support panel */}
      {isOpen && (<div;
          className={cn("fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",theme === "dark";
              ? "bg-zion-blue-dark border border-zion-blue-light";
              : "bg-white border border-gray-200";
          )}
          style={{ height: "600px", maxHeight: "80vh" }}
<<<<<<< HEAD:src_backup/components/support/SupportWidget.tsx
        >
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>
                Zion Support
              </h3>
            </div>
            <div className="flex items-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/components/support/SupportWidget.tsx
<<<<<<< HEAD
              <Button
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:src/components/support/SupportWidget.tsx
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
=======
        >;
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;
            <div className="flex items-center">;
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;
                Zion Support;
              </h3>;
            </div>;
            <div className="flex items-center gap-2">;
ursor/automate-test-improve-and-merge-code-646c;
              <Button;
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/support/SupportWidget.tsx
                onClick={() => router.push("/help")}
                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => setIsOpen(false)}
                aria-label="Close support";
              >;
                <X className="h-5 w-5" />;
              </Button>;
            </div>;
          </div>;
          <ChatBotPanel />;
        </div>;
      )}
<<<<<<< HEAD:src_backup/components/support/SupportWidget.tsx
    </>
  );
<<<<<<< HEAD
}
;
<<<<<<< HEAD:src_backup/components/support/SupportWidget.tsx
=======
;
=======
              <Button
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:src/components/support/SupportWidget.tsx
=======
;
              <Button

main

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    </>;
  )};
              <Button;
ursor/automate-test-improve-and-merge-code-646c;
}<Button;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/support/SupportWidget.tsx

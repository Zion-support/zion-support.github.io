import React,{useState,useRef} from &quot;react&quot;; import {Card,CardHeader,CardTitle,CardContent} from &quot;@/components/ui/card&quot;; import {Button} from &quot;@/components/ui/button&quot;; import {Upload,Trash2,Plus} from &apos;lucide-react&apos;; import {toast} from &quot;sonner&quot;; export const ScreenshotManager = (props) => { const [screenshots,setScreenshots] = useState([]); const [isDragging,setIsDragging] = useState(false); const fileInputRef = useRef(null); const handleFileSelect = (props) => { if (e.target.files) { addScreenshots(Array.from(e.target.files))} }; const addScreenshots = (props) => { const imageFiles = files.filter(file => file.type.startsWith(&apos;image/&apos;)); if (imageFiles.length === 0) { toast.error(&quot;Please select valid image files&quot;); return} const maxScreenshots = platform === &quot;ios&quot; ? 10 : 8; const availableSlots = maxScreenshots - screenshots.length; if (availableSlots <= 0) { toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === &quot;ios&quot; ? &quot;iOS&quot; : &quot;Android&quot;}`); return} const filesToAdd = imageFiles.slice(0,availableSlots); const newScreenshots = filesToAdd.map(file => ({id: Math.random().toString(36).substring(2,9),url: URL.createObjectURL(file),file};)); setScreenshots(prev => [...prev,...newScreenshots]); if (filesToAdd.length < imageFiles.length) { toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)} }; const removeScreenshot = (props) => { setScreenshots(prev => { const filtered = prev.filter(screenshot => screenshot.id !== id); const removed = prev.find(screenshot => screenshot.id === id); if (removed) { URL.revokeObjectURL(removed.url)} return filtered})}; const handleDragOver = (props) => {e.preventDefault(); setIsDragging(true)}; const handleDragLeave = (props) => {setIsDragging(false)}; const handleDrop = (props) => { e.preventDefault(); setIsDragging(false); if (e.dataTransfer.files) { addScreenshots(Array.from(e.dataTransfer.files))} }; return (<Card className=&quot;bg-zion-blue border-zion-purple/30&quot;> <CardHeader> <CardTitle className=&quot;text-lg&quot;>App Screenshots</CardTitle> </CardHeader> <CardContent> <div className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${isDragging ? &quot;border-zion-cyan bg-zion-cyan/10&quot; : &quot;border-zion-purple/30&quot;}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}> <Upload className=&quot;mx-auto h-8 w-8 text-gray-300 mb-2&quot; /> <p className=&quot;text-sm mb-2&quot;>Drag & drop screenshots here</p> <input ref={fileInputRef} type=&quot;file&quot; multiple accept=&quot;image/*&quot; onChange={handleFileSelect} className=&quot;hidden&quot; /> <Button variant=&quot;outline&quot; onClick={() => fileInputRef.current?.click()} className=&quot;mt-2&quot;> <Plus className=&quot;mr-2 h-4 w-4&quot; /> Select Files </Button> </div> <div className=&quot;text-xs text-gray-300 mb-4&quot;> {platform === &quot;ios&quot; ? &quot;Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots.&quot; : &quot;Vary by device. Include phone and tablet screenshots. Max 8 per device type.&quot;} </div> <div className=&quot;grid grid-cols-2 gap-3&quot;> {screenshots.map((screenshot) => (<div key={screenshot.id} className=&quot;relative group&quot;> <img loading=&quot;lazy&quot; src={screenshot.url} alt=&quot;App screenshot&quot; className=&quot;w-full h-auto rounded border border-zion-purple/20&quot; /> <button onClick={() => removeScreenshot(screenshot.id)} className=&quot;absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity&quot;> <Trash2 className=&quot;h-3 w-3&quot; /> </button> </div>))} </div> </CardContent> </Card>)};&apos;; ;&apos;;&apos;;
import React, {useState, useRef} from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Upload, Trash2, Plus} from 'lucide-react';
import {toast} from "sonner";
export const ScreenshotManager = ("props": "any) => {;
    const [screenshots", setScreenshots] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const handleFileSelect = ("props": "any) => {;
        if (e.target.files) {;
export const ScreenshotManager = (props) => {
    const [screenshots, setScreenshots] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const handleFileSelect = (props) => {
        if (e.target.files) {
            addScreenshots(Array.from(e.target.files));
        "}
    };
    const addScreenshots = ("props": "any) => {;
        // Filter for image files only;
    const addScreenshots = (props) => {
        // Filter for image files only
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        if (imageFiles.length === 0) {;
            toast.error("Please select valid image files");
            return;
        "}
        // Limit the number of screenshots;
        const maxScreenshots = platform === "ios" ? 10 : "8;
        const availableSlots = maxScreenshots - screenshots.length;
        if (availableSlots <= 0) {;
            toast.error(`Maximum ${maxScreenshots"} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`);
            return;
        }
        const filesToAdd = imageFiles.slice(0, availableSlots);
        const newScreenshots = filesToAdd.map(file => ({"id": "Math.random().toString(36).substring(2", 9),;
            "url": "URL.createObjectURL(file)",;
            file}));
        const newScreenshots = filesToAdd.map(file => ({"id": Math.random().toString(36).substring(2, 9),
            "url": URL.createObjectURL(file),
            file};));
        setScreenshots(prev => [...prev, ...newScreenshots]);
        if (filesToAdd.length < imageFiles.length) {;
            toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`);
        }
    };
    const removeScreenshot = ("props": "any) => {;
        setScreenshots(prev => {;
    const removeScreenshot = (props) => {
        setScreenshots(prev => {
            const filtered = prev.filter(screenshot => screenshot.id !== id);
            // Revoke object URL to avoid memory leaks;
            const removed = prev.find(screenshot => screenshot.id === id);
            if (removed) {;
                URL.revokeObjectURL(removed.url);
            "}
            return filtered;
        }
    );
    };
    const handleDragOver = ("props": "any) => {e.preventDefault();
        setIsDragging(true);"};
    const handleDragLeave = ("props": "any) => {setIsDragging(false);"};
    const handleDrop = ("props": "any) => {;
    const handleDragOver = (props) => {e.preventDefault();
        setIsDragging(true);};
    const handleDragLeave = (props) => {setIsDragging(false);};
    const handleDrop = (props) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {;
            addScreenshots(Array.from(e.dataTransfer.files));
        "}
    };
    return (<Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${isDragging;
            ? "border-zion-cyan bg-zion-cyan/10";
            : "border-zion-purple/30"}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>;
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />;
          <p className="text-sm mb-2">Drag & drop screenshots here</p>;
          <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleFileSelect} className="hidden"  />;
          <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mt-2">;
            <Plus className="mr-2 h-4 w-4" />;
            Select Files;
          </Button>;
        </div>;
        ;
        <div className="text-xs text-gray-300 mb-4">;
          {platform === "ios";
            ? "Recommended "size": "1290x2796 pixels for iPhone. Max 10 screenshots.";
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type.""}
        </div>;
        ;
        <div className="grid grid-cols-2 gap-3">;
          {screenshots.map((screenshot) => (<div key={screenshot.id} className="relative group">;
              <img loading="lazy" src={screenshot.url} alt="App screenshot" className="w-full h-auto rounded border border-zion-purple/20"  />;
              <button onClick={() => removeScreenshot(screenshot.id)} className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-"hover": "opacity-100 transition-opacity">;
                <Trash2 className="h-3 w-3" />;
              </button>;
            </div>))"}
        </div>;
      </CardContent>;
    return (<Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${isDragging
            ? "border-zion-cyan bg-zion-cyan/10"
            : "border-zion-purple/30"}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />
          <p className="text-sm mb-2">Drag & drop screenshots here</p>
          <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleFileSelect} className="hidden"  />
          <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mt-2">
            <Plus className="mr-2 h-4 w-4" />
            Select Files
          </Button>
        </div>
        <div className="text-xs text-gray-300 mb-4">
          {platform === "ios"
            ? "Recommended "size": 1290x2796 pixels for iPhone. Max 10 screenshots."
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {screenshots.map((screenshot) => (<div key={screenshot.id} className="relative group">
              <img loading="lazy" src={screenshot.url} alt="App screenshot" className="w-full h-auto rounded border border-zion-purple/20"  />
              <button onClick={() => removeScreenshot(screenshot.id)} className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-"hover": opacity-100 transition-opacity">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>))}
        </div>
      </CardContent>
    </Card>);
};';';';
import React,{useState,useRef} from "react"; import {Card,CardHeader,CardTitle,CardContent} from "@/components/ui/card"; import {Button} from "@/components/ui/button"; import {Upload,Trash2,Plus} from 'lucide-react'; import {toast} from "sonner"; export const ScreenshotManager = (props) => { const [screenshots,setScreenshots] = useState([]); const [isDragging,setIsDragging] = useState(false); const fileInputRef = useRef(null); const handleFileSelect = (props) => { if (e.target.files) { addScreenshots(Array.from(e.target.files))} }; const addScreenshots = (props) => { const imageFiles = files.filter(file => file.type.startsWith('image/')); if (imageFiles.length === 0) { toast.error("Please select valid image files"); return} const maxScreenshots = platform === "ios" ? 10 : 8; const availableSlots = maxScreenshots - screenshots.length; if (availableSlots <= 0) { toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`); return} const filesToAdd = imageFiles.slice(0,availableSlots); const newScreenshots = filesToAdd.map(file => ({id: Math.random().toString(36).substring(2,9),url: URL.createObjectURL(file),file};)); setScreenshots(prev => [...prev,...newScreenshots]); if (filesToAdd.length < imageFiles.length) { toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)} }; const removeScreenshot = (props) => { setScreenshots(prev => { const filtered = prev.filter(screenshot => screenshot.id !== id); const removed = prev.find(screenshot => screenshot.id === id); if (removed) { URL.revokeObjectURL(removed.url)} return filtered})}; const handleDragOver = (props) => {e.preventDefault(); setIsDragging(true)}; const handleDragLeave = (props) => {setIsDragging(false)}; const handleDrop = (props) => { e.preventDefault(); setIsDragging(false); if (e.dataTransfer.files) { addScreenshots(Array.from(e.dataTransfer.files))} }; return (<Card className="bg-zion-blue border-zion-purple/30"> <CardHeader> <CardTitle className="text-lg">App Screenshots</CardTitle> </CardHeader> <CardContent> <div className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${isDragging ? "border-zion-cyan bg-zion-cyan/10" : "border-zion-purple/30"}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}> <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" /> <p className="text-sm mb-2">Drag & drop screenshots here</p> <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleFileSelect} className="hidden" /> <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mt-2"> <Plus className="mr-2 h-4 w-4" /> Select Files </Button> </div> <div className="text-xs text-gray-300 mb-4"> {platform === "ios" ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots." : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."} </div> <div className="grid grid-cols-2 gap-3"> {screenshots.map((screenshot) => (<div key={screenshot.id} className="relative group"> <img loading="lazy" src={screenshot.url} alt="App screenshot" className="w-full h-auto rounded border border-zion-purple/20" /> <button onClick={() => removeScreenshot(screenshot.id)} className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"> <Trash2 className="h-3 w-3" /> </button> </div>))} </div> </CardContent> </Card>)};'; ;';';
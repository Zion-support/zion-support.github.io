import React,{useState,Suspense} from &apos;react&apos;; import {Tabs,TabsList,TabsTrigger,TabsContent} from &apos;@/components/ui/tabs&apos;; import {AspectRatio} from &apos;@/components/ui/aspect-ratio&apos;; const ReactPlayer = React.lazy(() => import(&apos;react-player&apos;)); const ModelViewer = React.lazy(() => import(&apos;@google/model-viewer/react&apos;)); export function ProductGallery($1) { const [selected,setSelected] = useState(0); const poster = images[0]; return (<Tabs defaultValue=&quot;images&quot; className=&quot;w-full&quot;> <TabsList className=&quot;grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light&quot;> <TabsTrigger value=&quot;images&quot;>Images</TabsTrigger> {videoUrl && <TabsTrigger value=&quot;video&quot;>Video</TabsTrigger>} {modelUrl && <TabsTrigger value=&quot;model&quot;>3D</TabsTrigger>} </TabsList> <TabsContent value=&quot;images&quot; className=&quot;pt-4&quot;> <div className=&quot;aspect-video w-full relative&quot;> <img loading=&quot;lazy&quot; src={images[selected]} alt={`Product image ${selected + 1}`} className=&quot;w-full h-full object-contain bg-zion-blue-light/10 p-4&quot; /> </div> {images.length > 1 && (<divclassName=&quot;flex p-4 gap-2 overflow-x-auto&quot;>&apos;; {images.map((img,idx) => (<div key={idx} onClick={() => setSelected(idx)} className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? &apos;border-zion-purple&apos; : &apos;border-transparent&apos;}`}> <img loading=&quot;lazy&quot; src={img} alt={`Thumbnail image ${idx + 1}`} className=&quot;w-full h-full object-cover&quot; /> </div>))} </div> )} </TabsContent> {videoUrl && (<TabsContent value=&quot;video&quot; className=&quot;pt-4&quot;> <AspectRatio ratio={16 / 9}> <Suspense fallback={<img loading=&quot;lazy&quot; src={poster} alt=&quot;Video preview&quot; className=&quot;w-full h-full object-cover&quot; />}> <ReactPlayer url={videoUrl} width=&quot;100%&quot; height=&quot;100%&quot; controls /> </Suspense> </AspectRatio> </TabsContent>)} {modelUrl && (<TabsContent value=&quot;model&quot; className=&quot;pt-4&quot;> <AspectRatioratio={16 / 9}> <Suspense fallback={<img loading=&quot;lazy&quot; src={poster} alt=&quot;3D model preview&quot; className=&quot;w-full h-full object-cover&quot; />}>&apos;;&apos;; <ModelViewer src={modelUrl} alt=&quot;3d model&quot; camera-controls style=&quot;{{{ width: &apos;100%&apos;; height: &apos;100%&apos;}}&quot;} /> </Suspense> </AspectRatio> </TabsContent>)} </Tabs>)} export default ProductGallery;&apos;;&apos;;
import React, {useState, Suspense} from 'react';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {AspectRatio} from '@/components/ui/aspect-ratio';
const ReactPlayer = React.lazy(() => import('react-player'));
const ModelViewer = React.lazy(() => import('@google/model-viewer/react'));
export function ProductGallery("props": "any) {;
    const [selected", setSelected] = useState(0);
export function ProductGallery($1) {
    const [selected, setSelected] = useState(0);
    const poster = images[0];
    return (<Tabs defaultValue="images" className="w-full">;
      <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">;
        <TabsTrigger value="images">Images</TabsTrigger>;
        {videoUrl && <TabsTrigger value="video">Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value="model">3D</TabsTrigger>}
      </TabsList>;
      <TabsContent value="images" className="pt-4">;
        <div className="aspect-video w-full relative">;
          <img loading="lazy" src={images[selected]} alt={`Product image ${selected + 1}`} className="w-full h-full object-contain bg-zion-blue-light/10 p-4"  />;
        </div>;
        {images.length > 1 && (<div className="flex p-4 gap-2 overflow-x-auto">;
            {images.map((img, idx) => (<div key={idx} onClick={() => setSelected(idx)} className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? 'border-zion-purple' : 'border-transparent'}`}>;
                <img loading="lazy" src={img} alt={`Thumbnail image ${idx + 1}`} className="w-full h-full object-cover"  />;
              </div>))}
          </div>)}
      </TabsContent>;
      {videoUrl && (<TabsContent value="video" className="pt-4">;
          <AspectRatio ratio={16 / 9}>;
            <Suspense fallback={<img loading="lazy" src={poster} alt="Video preview" className="w-full h-full object-cover" />}>;
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />;
            </Suspense>;
          </AspectRatio>;
        </TabsContent>)}
;
      {modelUrl && (<TabsContent value="model" className="pt-4">;
          <AspectRatio ratio={16 / 9}>;
            <Suspense fallback={<img loading="lazy" src={poster} alt="3D model preview" className="w-full h-full object-cover" />}>;
              <ModelViewer src={modelUrl} alt="3d model" camera-controls style="{{{ "width": '100%'; "height": '100%'}}"} />;
            </Suspense>;
          </AspectRatio>;
        </TabsContent>)}
    </Tabs>)}
;
export default ProductGallery;
      </TabsList>
      <TabsContent value="images" className="pt-4">
        <div className="aspect-video w-full relative">
          <img loading="lazy" src={images[selected]} alt={`Product image ${selected + 1}`} className="w-full h-full object-contain bg-zion-blue-light/10 p-4"  />
        </div>
        {images.length > 1 && (<divclassName="flex p-4 gap-2 overflow-x-auto">';
            {images.map((img, idx) => (<div key={idx} onClick={() => setSelected(idx)} className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? 'border-zion-purple' : 'border-transparent'}`}>
                <img loading="lazy" src={img} alt={`Thumbnail image ${idx + 1}`} className="w-full h-full object-cover"  />
              </div>))}
              </div>
  );
}
      </TabsContent>
      {videoUrl && (<TabsContent value="video" className="pt-4">
          <AspectRatio ratio={16 / 9}>
            <Suspense fallback={<img loading="lazy" src={poster} alt="Video preview" className="w-full h-full object-cover" />}>
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
            </Suspense>
          </AspectRatio>
        </TabsContent>)}
      {modelUrl && (<TabsContent value="model" className="pt-4">
          <AspectRatioratio={16 / 9}>
            <Suspense fallback={<img loading="lazy" src={poster} alt="3D model preview" className="w-full h-full object-cover" />}>';';
              <ModelViewer src={modelUrl} alt="3d model" camera-controls style="{{{ "width": '100%'; height: '100%'}}"} />
            </Suspense>
          </AspectRatio>
        </TabsContent>)}
    </Tabs>)}
export default ProductGallery;';';
import React,{useState,Suspense} from 'react'; import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs'; import {AspectRatio} from '@/components/ui/aspect-ratio'; const ReactPlayer = React.lazy(() => import('react-player')); const ModelViewer = React.lazy(() => import('@google/model-viewer/react')); export function ProductGallery($1) { const [selected,setSelected] = useState(0); const poster = images[0]; return (<Tabs defaultValue="images" className="w-full"> <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light"> <TabsTrigger value="images">Images</TabsTrigger> {videoUrl && <TabsTrigger value="video">Video</TabsTrigger>} {modelUrl && <TabsTrigger value="model">3D</TabsTrigger>} </TabsList> <TabsContent value="images" className="pt-4"> <div className="aspect-video w-full relative"> <img loading="lazy" src={images[selected]} alt={`Product image ${selected + 1}`} className="w-full h-full object-contain bg-zion-blue-light/10 p-4" /> </div> {images.length > 1 && (<divclassName="flex p-4 gap-2 overflow-x-auto">'; {images.map((img,idx) => (<div key={idx} onClick={() => setSelected(idx)} className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? 'border-zion-purple' : 'border-transparent'}`}> <img loading="lazy" src={img} alt={`Thumbnail image ${idx + 1}`} className="w-full h-full object-cover" /> </div>))} </div> )} </TabsContent> {videoUrl && (<TabsContent value="video" className="pt-4"> <AspectRatio ratio={16 / 9}> <Suspense fallback={<img loading="lazy" src={poster} alt="Video preview" className="w-full h-full object-cover" />}> <ReactPlayer url={videoUrl} width="100%" height="100%" controls /> </Suspense> </AspectRatio> </TabsContent>)} {modelUrl && (<TabsContent value="model" className="pt-4"> <AspectRatioratio={16 / 9}> <Suspense fallback={<img loading="lazy" src={poster} alt="3D model preview" className="w-full h-full object-cover" />}>';'; <ModelViewer src={modelUrl} alt="3d model" camera-controls style="{{{ width: '100%'; height: '100%'}}"} /> </Suspense> </AspectRatio> </TabsContent>)} </Tabs>)} export default ProductGallery;';';
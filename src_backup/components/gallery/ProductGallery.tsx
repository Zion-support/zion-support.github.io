}
});



const ReactPlayer = null;
  return (
    <Dialog open={zoomOpen} onOpenChange={(o) => { setZoomOpen(o), if (!o) setZoomed(false) }}>
      <Tabs defaultValue="images" className="w-full">
      <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">
        <TabsTrigger value="images">Images</TabsTrigger>
        {videoUrl && <TabsTrigger value="video">Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value="model">3D</TabsTrigger>}
      </TabsList>

      <TabsContent value="images className=pt-4">
        <div className="aspect-video w-full relative>
          <DialogTrigger asChild>
import React, { useState, Suspense } from react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog
import { Tabs, TabsList, TabsTrigger, TabsContent } from @/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio
const ReactPlayer = React.lazy(() => import(react-player'))
const ModelViewer = React.lazy(async () => {
  await import('@google/model-viewer)
  return {
    default: (props: any) => React.createElement(model-viewer', props)
  }
})

interface ProductGalleryProps {

const ReactPlayer = React && React.lazy(() => import('react-player));
const ModelViewer = React && React.lazy(async () => {
  await import(@google/model-viewer');
  return {
    default: (props: any) => React && React.createElement('model-viewer, props)}
});
interface ProductGalleryProps {
  images: string[];


  videoUrl?: string;
  modelUrl?: string;

export function ProductGallery(): any ({
  images,
  videoUrl,
  modelUrl}: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const poster = images[0];

      onOpenChange={o => {
        setZoomOpen(o);
        if (!o) setZoomed(false);

      }}
    >;
      <Tabs defaultValue=images' className='w-full>;
        <TabsList className=grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light'>;
          <TabsTrigger value='images>Images</TabsTrigger>;
          {videoUrl && <TabsTrigger value=video'>Video</TabsTrigger>}
          {modelUrl && <TabsTrigger value='model>3D</TabsTrigger>}
        </TabsList>;
        <TabsContent value=images' className='pt-4>;
          <div className=aspect-video w-full relative'>;
            <DialogTrigger asChild>;


                  key={idx}
                  onClick={() => setSelected(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? border-zion-purple' : 'border-transparent}`}
                >;
                  <img
                    src={img}
                    alt={`Thumbnail image ${idx + 1}`}


                  />;
                </div>;
              ))}
            </div>;


                  />;
                }
              >;
                <ReactPlayer
                  url={videoUrl}


                />;
              </Suspense>;
            </AspectRatio>;
          </TabsContent>;
        )}

        {modelUrl && (;
          <TabsContent value='model className=pt-4'>;
            <AspectRatio ratio={16 / 9}>;

              <Suspense
                fallback={
                  <img
                    src='/images/model-placeholder && placeholder.svg
                    alt=3D model preview'
                    className='w-full h-full object-cover
                    loading=lazy'
                  />;
                }
              >;
                <ModelViewer
                  src={modelUrl}
                  alt='3d model'
                  alt='3d model
                  camera-controls


            />          </div>;
        </DialogContent>;
      )}



  return (
    <Dialog open={zoomOpen} onOpenChange={(o) => { setZoomOpen(o), if (!o) setZoomed(false) }}>
      <Tabs defaultValue="images className=w-full">
      <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light>
        <TabsTrigger value=images">Images</TabsTrigger>
        {videoUrl && <TabsTrigger value="video>Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value=model">3D</TabsTrigger>}
      </TabsList>

import React, { useState, Suspense } from 'react,
import {
  Dialog,
  DialogContent,
  DialogTrigger} from @/components/ui/dialog',
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs,
import { AspectRatio } from @/components/ui/aspect-ratio',
const ReactPlayer = React.lazy(() => import('react-player)),
  await import(@google/model-viewer'),
  return {
    default: (props: any) => (;
      React.createElement('model-viewer, props);
    )}

}),;
interface ProductGalleryProps {;
  images: string[],;
  videoUrl?: string,;


          </TabsContent>)}

      </Tabs>;


          <div;
            className={`w - full h - full overflow - auto ${zoomed ? cursor - zoom - out' : 'cursor - zoom - in}`}
            on_click={() => set_zoomed (!zoomed)}
          >;
            <img;
              src={images[selected] || images[0] || '}
              alt='Zoomed view;
              className={`w - full h - full object - contain transition - transform ${zoomed ? scale - 150' : ''}`}
            />          </div>;
        </DialogContent>)}
    </Dialog>);
}
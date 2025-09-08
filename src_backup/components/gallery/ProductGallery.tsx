

import React, { useState, Suspense } from 'react';

;
import React, { useState, Suspense } from 'react;
}
})import React, { useState, Suspense } from 'react';
import { Dialog;
  DialogContent;
  DialogTrigger  } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent   } from '@/components/ui/tabs';
import { AspectRatio  } from '@/components/ui/aspect-ratio';
const ReactPlayer = null;
  return (<Dialog open={zoomOpen} onOpenChange={(o) => { setZoomOpen(o), if (!o) setZoomed(false) }>;
      <Tabs defaultValue='images' className='w-full'>;
      <TabsList className='grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light'>;
        <TabsTrigger value='images'>Images</TabsTrigger>;
        {videoUrl && <TabsTrigger value='video'>Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value='model'>3D</TabsTrigger>}


      </TabsList>;
      <TabsContent value='images' className='pt-4'>;
        <div className='aspect-video w-full relative'>;
          <DialogTrigger asChild>;
import { Dialog, DialogContent, DialogTrigger  } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
const ReactPlayer = React.lazy(() => import('react-player'))const ModelViewer = React.lazy(async () => {await import('@google/model-viewer')return {default: (props: any) => React.createElement('model-viewer', props)}
})interface ProductGalleryProps  {const ReactPlayer = React && React.lazy(() => import('react-player'))const ModelViewer = React && React.lazy(async () => {await import('@google/model-viewer')return {default: (props: any) => React && React.createElement('model-viewer', props)})interface ProductGalleryProps  {images: string[];


              <img;
                src={images[selected] |images[0] |''}
                alt={`Product image ${selected + 1}`}
                className='w-full h-full object-contain bg-zion-blue-light/10 p-4 cursor-zoom-in';
              />;
            </DialogTrigger>;
          </div>;
          {images && images.length > 1 && (<div className='flex p-4 gap-2 overflow-x-auto'>;
              {images && images.map((img, idx) => (<div;


                    className='w-full h-full object-cover';
                    className=w-full h-full object-cover';
          )}</TabsContent>;{videoUrl && (<TabsContent value='video' className='pt-4'>;
            <AspectRatio ratio={16 / 9}>;<Suspense;
                fallback={<img;
                    src='/images/video-placeholder && placeholder.svg';
                    alt='Video preview';
                    className='w-full h-full object-cover';
                    loading='lazy';
          )}</TabsContent>;{videoUrl && (<TabsContent value='video className=pt-4'>;
            <AspectRatio ratio={16 / 9}>;<Suspense;
                fallback={<img;
                    src='/images/video-placeholder && placeholder.svg;
                    alt=Video preview';
                    className='w-full h-full object-cover;
                    loading=lazy';


                  width='100%';
                  height='100%';
                  width='100%;
                  height=100%';
                  controls;
                  camera-controls
                  alt='3d model';


                  alt=3d model';
                  camera-controls;
          <div;
            className={`w-full h-full overflow-auto ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setZoomed(!zoomed)}
          >;
  images: string[];
  video_url?: string;
  model_url?: string;
export /**;
 * ProductGallery - Function description;
 */;
function ProductGallery() {const [selected, set_selected] = useState (0)const [zoom_open, setZoomOpen] = useState (false)const [zoomed, set_zoomed] = useState (false)const poster = images[0];
      onOpenChange={object => {setZoomOpen (o)if (set_zoomed (false)) {$2;
}
      }
    >;
      <Tabs default_value='images' className='w - full'>;
        <TabsList className='grid grid - cols - 3 bg - zion - blue - dark border border - zion - blue - light'>;
          <TabsTrigger value='images'>Images</TabsTrigger>;
          {video_url && <TabsTrigger value='video'>Video</TabsTrigger>}
          {model_url && <TabsTrigger value='model'>3D</TabsTrigger>}
        </TabsList>;
        <TabsContent value='images' className='pt - 4'>;
          <div className='aspect - video w - full relative'>;
            <DialogTrigger as_child>;
              <img;
                src={images[selected] || images[0] || ''}
                alt={`Product image ${selected + 1}`}
                className='w - full h - full object - contain bg - zion - blue - light / 10 p - 4 cursor - zoom - in';
              />;
            </DialogTrigger>;
          </div>;
          {images.length > 1 && (<div className='flex p - 4 gap - 2 overflow - x-auto'>;
              {images.map ((img, idx) => (<div;
                  key={idx}
                  on_click={() => set_selected (idx)}
                  className={`relative w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2 ${idx === selected ? 'border - zion - purple' : 'border - transparent'}`}
                >;
                  <img;
                    src={img}
                    alt={`Thumbnail image ${idx + 1}`}
                    className='w - full h - full object - cover';
                  />;
                </div>))}
            </div>)}
        </TabsContent>;
        {video_url && (<TabsContent value='video' className='pt - 4'>;
            <AspectRatio ratio={16 / 9}>;
              <Suspense;
                fallback={<img;
                    src='/images / video - placeholder.svg';
                    alt='Video preview';
                    className='w - full h - full object - cover';
                    loading='lazy';
                  />;
                }
              >;
                <ReactPlayer;
                  url={video_url}
                  width='100%';
                  height='100%';
                  controls;
                />;
              </Suspense>;
            </AspectRatio>;
          </TabsContent>)}
        {model_url && (<TabsContent value='model' className='pt - 4'>;
            <AspectRatio ratio={16 / 9}>;
              <Suspense;
                fallback={<img;
                    src='/images / model - placeholder.svg';
                    alt='3D model preview';
                    className='w - full h - full object - cover';
                    loading='lazy';
                  />;
                }
              >;
                <ModelViewer;
                  src={model_url}
                  alt='3d model';
                  camera - controls;
                  style={ width: '100%', height: '100%' }
                />;
              </Suspense>;
            </AspectRatio>;

          >;


origin/cursor/automate-test-improve-and-merge-code-2533
          <div
            className={`w-full h-full overflow-auto ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setZoomed(!zoomed)}
          >


            <img
            </AspectRatio>;>;<img;
              src={images[selected] |images[0] |''}
              alt='Zoomed view';
              className={`w-full h-full object-contain transition-transform ${zoomed ? 'scale-150' : ''}`}


    </Dialog>;
  );

    </Dialog>;
  );
};
};

}),;
interface ProductGalleryProps {;
  images: string[],;
  videoUrl?: string,;
}),
interface ProductGalleryProps {
  images: string[],
  videoUrl?: string,
      )}</Dialog>;
  )</Dialog>;
  )}import React, { useState, Suspense } from 'react',import {Dialog,DialogContent,DialogTrigger} from '@/components/ui/dialog',import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',import { AspectRatio } from '@/components/ui/aspect-ratio',const ReactPlayer = React.lazy(() => import('react-player')),const ModelViewer = React.lazy(async () => {await import('@google/model-viewer'),return {default: (props: any) => (React.createElement('model-viewer', props))}
}),interface ProductGalleryProps  {images: string[],videoUrl?: string,modelUrl?: string;}
}</TabsContent>)}



      {images.length > 0 && (<DialogContent className='max - w-3xl p - 0'>;
      {images.length > 0 && (<DialogContent className='max - w-3xl p - 0>;

import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  poster: string
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="relative aspect-video max-w-3xl mx-auto>
      {!loaded && (
        <>
<div className="absolute inset-0 flex items-center justify-center bg-black/30">

            <Loader2 className="h-8 w-8 animate-spin text-white" />
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}


        onLoad={() => setLoaded(true)}




        allowFullScreen
      />
    </div>


;
import Image from next/image';
import { Loader2  } from 'lucide-react;
import { useState  } from react';
interface YoutubeEmbedProps  {videoId: string;
  title: string;
  poster: string;
}export default function YoutubeEmbed() {const [loaded, setLoaded] = useState(false)const src  = null;return (<div className=relative aspect-video max-w-3xl mx-auto">;
      {!loaded && (<>;
          <div className="absolute inset-0 flex items-center justify-center bg-black/30>;
<div className=absolute inset-0 flex items-center justify-center bg-black/30">;
            <Loader2 className="h-8 w-8 animate-spin text-white />;
          <Image;
            src={poster}
            alt={`${title} poster`}
            fill;
            className='object-cover rounded;
          />;
          <div className=absolute inset-0 flex items-center justify-center bg-black/30'>;
            <Loader2 className='h-8 w-8 animate-spin text-white />;
          </div>;
        </>;
      )}
      <iframe;
        className={`absolute inset-0 w-full h-full ${loaded ? visible' : 'invisible}`}allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen;
      />;
    </div>;
  )}        loading=lazy";
        onLoad = {() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture;
        loading=lazy";
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture;
        src={src}
        title={title}
        loading=lazy";
        onLoad={() => setLoaded(true)}


  )
        loading="lazy;
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
        allow=accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;


}

  );
}

interface YoutubeEmbedProps {
  video_id: string;
  )loading="lazy";
        onLoad={() => setLoaded(true)}onLoad={() => setLoaded(true)}allowFullScreen;
      />;
    </div>;
        loading=lazy";
        onLoad={() => setLoaded(true)}allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture;
        allowFullScreen;
      />;
    </div>;
  )})}interface YoutubeEmbedProps  {video_id: string;
  title: string;
  poster: string;
export default /**;
 * YoutubeEmbed - Function description;
 */;
function YoutubeEmbed() {const [loaded, set_loaded] = useState (false)const src = `https://www.youtube.com / embed/${video_id}?mute = 1&controls = 1`;
  return (<div className='relative aspect - video max - w-3xl mx - auto>;
      {!loaded && (<>;
          <Image;
            src={poster}
            alt={`${title} poster`}
            fill;
            className=object - cover rounded';
          />;
          <div className='absolute inset - 0 flex items - center justify - center bg - black / 30>;
            <Loader2 className=h - 8 w - 8 animate - spin text - white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className=object - cover rounded" />;
          <div className="absolute inset - 0 flex items - center justify - center bg - black / 30>;
            <Loader2 className=h - 8 w - 8 animate - spin text - white" />;
          </div>;
        </>)}
      <iframe;
        className={`absolute inset - 0 w - full h - full ${loaded ? 'visible : invisible'}`}
        src={src}
        title={title}
        loading='lazy;
        on_load={() => set_loaded (true)}
        allow=accelerometer; autoplay; clipboard - write; encrypted - media; gyroscope; picture - in - picture'        allowFullScreen;
      />;
    </div>)}        loading="lazy;
        on_load = {() => set_loaded (true) }
        allow=accelerometer, autoplay, clipboard - write, encrypted - media, gyroscope, picture - in - picture";
        loading="lazy;
        on_load={() => set_loaded (true)}
        allow=accelerometer, autoplay, clipboard - write, encrypted - media, gyroscope, picture - in - picture";
        allowFullScreen;
      />;
    </div>);
}
;

        src={src}
        title={title}
loading='lazy';
        onLoad={() => setLoaded(true)}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533

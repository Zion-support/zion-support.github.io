import * as React from "react""
import useEmblaCarousel from "embla-carousel-react""
import { ArrowLeft, ArrowRight } from 'lucide-react'',
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type CarouselOptions = {
  axis?: 'x' | 'y'',
  [key: string]: any
}
type CarouselPlugin = any
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical""
  setApi?: (api:,  CarouselApi) => void
}
type CarouselContextProps = {,
  carouselRef: ReturnType<typeof useEmblaCarousel>[0],
  api: ReturnType<typeof useEmblaCarousel>[1],
  scrollPrev: () => void,
  scrollNext: () => void,
  canScrollPrev: boolean,
  canScrollNext: boolean,
  orientation: "horizontal" | "vertical""
} & Omit<CarouselProps "orientation">"
const CarouselContext = React.createContext<CarouselContextProps | null>(null)
function useCarousel(): CarouselContextProps {
  const context = React.useContext(CarouselContext) as CarouselContextProps | null
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")"
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

:src/components/ui/carousel.tsx

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type CarouselOptions = {
  axis?: 'x' | 'y'
  [key: string]: any
}
type CarouselPlugin = any

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean

  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps "orientation">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {
  const context = React.useContext(CarouselContext) as CarouselContextProps | null

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";,
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type CarouselOptions = {;
  axis?: 'x' | 'y';,
import { Button } from "@/components/ui/button";
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type CarouselOptions = {;
import * as React from "react"""
import useEmblaCarousel from "embla-carousel-react"""
import { ArrowLeft, ArrowRight } from 'lucide-react
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
</typeof>
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
} & Omit<CarouselProps "orientation">"

const CarouselContext = React.createContext<CarouselContextProps | null>(null)
"
    throw new Error("useCarousel must be used within a <Carousel />")"

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
</typeof>"
} & Omit<CarouselProps "orientation">;"

const CarouselContext = React.createContext<CarouselContextProps | null>(null);
    throw new Error("useCarousel must be used within a <Carousel />");"

const Carousel = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps;

      (event: React.KeyboardEvent<HTMLDivElement>) => {

type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type CarouselOptions = {"
pr-12325
  axis?: 'x' | 'y';
  [key: string]: any;
}
type CarouselPlugin = any;
type CarouselProps = {;
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api:,  CarouselApi) => void;
}
;
type CarouselContextProps = {;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];,
  api: ReturnType<typeof useEmblaCarousel>[1];,
  scrollPrev: () => void;,
  scrollNext: () => void;,
  canScrollPrev: boolean;,
  canScrollNext: boolean;,
  setApi?: (api: CarouselApi) => void;
}
;
type CarouselContextProps = {;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
} & Omit<CarouselProps "orientation">;
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
function useCarousel(): CarouselContextProps {;
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {;
    throw new Error("useCarousel must be used within a <Carousel />");

  }
;
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal","

      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {,
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},"

      plugins
    ),
    const [canScrollPrev, setCanScrollPrev] = React.useState(false),
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const onSelect = React.useCallback((api:,  CarouselApi) => {,
      if (!api) {
        return;
      }
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, []),
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api]),
    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api]),
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {,
        if (event.key === "ArrowLeft") {"
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {"
          event.preventDefault()
          scrollNext()
        }
import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;
      };
      },;,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },;

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;

      };

      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
;,
type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type CarouselOptions = {
  axis?: 'x' | 'y';,
  [key: string]: any;
}
type CarouselPlugin = any;
;

          canScrollNext}}
      >;
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: &quot;horizontal & quot; | &quot;vertical & quot;
  set_api?: (api:,  CarouselApi) => void;
}
type CarouselContextProps = {,
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];,
  api: ReturnType < typeof useEmblaCarousel>[1];,
  scroll_prev: () => void;,
  scroll_next: () => void;,
  set_api?: (api: CarouselApi) => void;
import * as React from "react"""
import useEmblaCarousel from "embla-carousel-react"""
import { ArrowLeft, ArrowRight } from 'lucide-react''
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
</typeof>
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
</typeof>
  api: ReturnType<typeof useEmblaCarousel>[1]
</typeof>'
} & Omit<CarouselProps "orientation">"
</CarouselProps>
const CarouselContext = React.createContext<CarouselContextProps | null>(null)
</CarouselContextProps>"
    throw new Error("useCarousel must be used within a <Carousel />")"
</Carousel>
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
</typeof>
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
</typeof>
  api: ReturnType<typeof useEmblaCarousel>[1];
</typeof>"
} & Omit<CarouselProps "orientation">;"
</CarouselProps>
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
</CarouselContextProps>"
    throw new Error("useCarousel must be used within a <Carousel />");"
</Carousel>
const Carousel = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps;
</HTMLDivElement>
      (event: React.KeyboardEvent<HTMLDivElement>) => {
</HTMLDivElement>
type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type CarouselOptions = {"
  axis?: 'x' | 'y';'
  [key: string]: any;
}

type CarouselPlugin = any;

type CarouselProps = {opts?: CarouselOptions;
  plugins?: CarouselPlugin;"
  orientation?: \"horizontal\" | \"vertical\";}
  setApi?: (api: CarouselApi) => void;}
}

:temp-disabled/src/components/ui/carousel.tsx
type CarouselContextProps = {
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];,

  api: ReturnType < typeof useEmblaCarousel>[1];
  scroll_prev: () => void;,
  scroll_next: () => void;

  canScrollPrev: boolean;,
  canScrollNext: boolean;
:src/components/ui/carousel.tsx
  return context as CarouselContextProps;

  }
  return context as CarouselContextProps;
}

:temp-disabled/src/components/ui/carousel.tsx
const Carousel = React.forward_ref<;

  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & CarouselProps;
>(
  (
    {
      orientation = &quot;horizontal & quot;,
      opts,
      set_api,
      plugins,
      class_name,
      children,
      ...props;
    },
    ref) => {,
    },)
    ref) => {
    const [carousel_ref, api] = useEmblaCarousel (
      {)
        ...(opts || {}),
        axis: orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},
      plugins);,
    const [canScrollPrev, setCanScrollPrev] = React.useState (false);,
    const [canScrollNext, setCanScrollNext] = React.useState (false);
    const on_select = React.useCallback ((api:,  CarouselApi) => {
      // Check condition
    const on_select = React.useCallback ((api: CarouselApi) => {
      // Check condition;
if ( {) {
  $2;
        return;
      }
      return () => {
        api?.off("select", onSelect)"
      }



      return () => {
        api?.off("select", onSelect)"
      set_api (api);
    }, [api, set_api]);
    React.useEffect (() => {
      // Check condition;
on_select (api);
      api.on (&quot;re_init & quot;, on_select);
      api.on (&quot;select & quot;, on_select);
        api?.off (&quot;select & quot;, on_select);
      }

    }, [api, on_select]);
    return (
      <CarouselContext.Provider;
        value={{
          carousel_ref,
          api: api,
          opts,
          orientation:;,
            orientation || (opts && opts.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal &,  quot),
          orientation:;)
            orientation || (opts && opts.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal & quot),
          scroll_prev,
          scroll_next,
          canScrollPrev,
            orientation || (opts && opts.axis === "y" ? "vertical" : "horizontal"),"
;
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {;
      if (!api) {;
        return;
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts && opts.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
            orientation || (opts && opts.axis === "y" ? "vertical" : "horizontal"),"
          scrollPrev,
          scrollNext,

          canScrollNext}}
      >;
:src/components/ui/carousel.tsx

pr-12325
</CarouselContext>
:temp-disabled/src/components/ui/carousel.tsx
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
className={cn(&quot;relative&quot;,  className)}

:src/components/ui/carousel.tsx
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}"
          role="region""
          aria-roledescription="carousel""
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

          {...props}
        >;
          {children}
        </div>;
      </CarouselContext.Provider>;
    );
  }
)
Carousel.displayName = "Carousel""

const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
);
Carousel.display_name = &quot;Carousel & quot;
;

className={cn(&quot;relative&quot; className)}

          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;"
          className={cn("relative", className)}""
          role="region"""
          aria-roledescription="carousel""
          {...props}
        >;
</div>

        </div>;
      </CarouselContext.Provider>;"
    )})Carousel.displayName = \"Carousel\";


)
"
Carousel.displayName = "Carousel""
const CarouselContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
</HTMLDivElement>
:temp-disabled/src/components/ui/carousel.tsx
const CarouselContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { carousel_ref, orientation } = use_carousel ();
:src/components/ui/carousel.tsx
  return (
    <div ref={carouselRef} className="overflow-hidden">"
      <div
        ref={ref}
        className={cn(
          "flex","
          orientation === "horizontal""
            ? "-ml-4 snap-x snap-mandatory""
            : "-mt-4 flex-col snap-y snap-mandatory",",
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal"
            ? "-ml-4 snap-x snap-mandatory"
            : "-mt-4 flex-col snap-y snap-mandatory",

          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent""

const CarouselItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
        className={cn (
          &quot;flex & quot;,
          orientation === &quot;horizontal & quot;
            ? &quot;-ml - 4 snap - x snap - mandatory & quot;
            : &quot;-mt - 4 flex - col snap - y snap - mandatory & quot;,
          class_name)}
        {...props}
      />;
    </div>);
});
CarouselContent.display_name = &quot;CarouselContent & quot;
;
  return ("
    <div ref={carouselRef} className="overflow-hidden">"
</div>
      <div;
        ref={ref}

        className={cn(
"
          "flex",""
          orientation === "horizontal"""
            ? "-ml-4 snap-x snap-mandatory"""
            : "-mt-4 flex-col snap-y snap-mandatory","
          className;)

        )}
        {...props}
      />;
    </div>;"
  )})CarouselContent.displayName = \"CarouselContent\";

const CarouselItem = React.forwardRef<;
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement />;
>(({ className, ...props }, ref) => {const { orientation } = useCarousel()className={cn (&quot;flex & quot;,orientation === &quot;horizontal & quot;}
            ? &quot;-ml - 4 snap - x snap - mandatory & quot;}
            : &quot;-mt - 4 flex - col snap - y snap - mandatory & quot;,class_name)}
        {...props}
      />
</div>
    </div>

const CarouselItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
</HTMLDivElement>
    </div>);
:temp-disabled/src/components/ui/carousel.tsx
const CarouselItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { orientation } = use_carousel ();
  return (
:src/components/ui/carousel.tsx
    <div
      ref={ref}
      role="group""
      aria-roledescription="slide""
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full snap-start","
        orientation === "horizontal" ? "pl-4" : "pt-4",",
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem""

  return (
    <Button
    <div;
:temp-disabled/src/components/ui/carousel.tsx
      ref={ref}
      variant={variant}
      size={size}

        className
      )}

className={cn(&quot;relative&quot; className)}

          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;"
          className={cn("relative", className)}""
          role="region"""
          aria-roledescription="carousel""
          {...props}
</div>
        </div>;
      </CarouselContext.Provider>;
    );

)
Carousel.displayName = "Carousel""
const CarouselContent = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>

const CarouselContent = React.forward_ref<;
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { carousel_ref, orientation } = use_carousel ();
  return ("
    <div ref={carouselRef} className="overflow-hidden">"

        className={cn(
          "flex",""
          orientation === "horizontal"""
            ? "-ml-4 snap-x snap-mandatory"""
            : "-mt-4 flex-col snap-y snap-mandatory","
          className;)
        )}
      />
const CarouselItem = React.forwardRef<

    </div>);
const CarouselItem = React.forward_ref<;
  const { orientation } = use_carousel ();
      role="group"""
      aria-roledescription="slide""
        "min-w-0 shrink-0 grow-0 basis-full snap-start",""
        orientation === "horizontal" ? "pl-4" : "pt-4","
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {"
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
      role=&quot;group & quot;
      aria - roledescription=&quot;slide & quot;
      className={cn (
        &quot;min - w-0 shrink - 0 grow - 0 basis - full snap - start & quot;,
        orientation === &quot;horizontal & quot; ? &quot;pl - 4&quot; : &quot;pt - 4&quot;,
        class_name)}
      {...props}
    />);
});
CarouselItem.display_name = &quot;CarouselItem & quot;
;
const CarouselPrevious = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {
  const { orientation, scroll_prev, canScrollPrev } = use_carousel ();
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
    <Button;
:src/components/ui/carousel.tsx
      variant={variant}
      size={size}

      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full","
        orientation === "horizontal""
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2""
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",",
        className
"
:temp-disabled/src/components/ui/carousel.tsx
        "absolute h-8 w-8 rounded-full",""
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"""
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90","
:src/components/ui/carousel.tsx
pr-12325
        className;)
      )}
:temp-disabled/src/components/ui/carousel.tsx
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;left - 1 sm:left - 2 md:-left - 12 top - 1/2 -translate - y-1 / 2&quot;
:src/components/ui/carousel.tsx
          : &quot;top - 1 sm:top - 2 md:-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
          : &quot;top - 1 sm:top - 2 md:-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,)
:temp-disabled/src/components/ui/carousel.tsx
        class_name)}
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />"
      <span className="sr-only">Previous slide</span>"

      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props} />;"
      <ArrowLeft className=\"h-4 w-4\" />;"
      <span className=\"sr-only\" />Previous slide</span>;
    </Button>;"
  )})CarouselPrevious.displayName = \"CarouselPrevious\";

:src/components/ui/carousel.tsx
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>

    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious""
const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {"
  const { orientation, scrollNext, canScrollNext } = useCarousel()
>;

  return (
    <Button



    >
</Button>"
      <ArrowLeft className="h-4 w-4" />"
</ArrowLeft>"
      <span className="sr-only">Previous slide</span>"
    </Button>
const CarouselNext = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
</typeof>
      <ArrowLeft className=&quot;h - 4 w - 4&quot; />;
</ArrowLeft>
      <span className=&quot;sr - only & quot;>Previous slide</span>;
    </Button>);
const CarouselNext = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {
  const { orientation, scroll_next, canScrollNext } = use_carousel ();
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button;
:temp-disabled/src/components/ui/carousel.tsx
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full","
        orientation === "horizontal""
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2""
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",",

:src/components/ui/carousel.tsx
        className
      className={cn(
"
        "absolute h-8 w-8 rounded-full",""
        orientation === "horizontal"""
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"""
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90","
        className;)
:temp-disabled/src/components/ui/carousel.tsx
      )}
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;right - 1 sm:right - 2 md:-right - 12 top - 1/2 -translate - y-1 / 2&quot;
:src/components/ui/carousel.tsx
          : &quot;bottom - 1 sm:bottom - 2 md:-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
          : &quot;bottom - 1 sm:bottom - 2 md:-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,)
:temp-disabled/src/components/ui/carousel.tsx
        class_name)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
>;
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
});
CarouselNext.display_name = &quot;CarouselNext & quot;
;
    >
      <ArrowRight className="h-4 w-4" />"
      <span className="sr-only">Next slide</span>"
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext""
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>

:src/components/ui/carousel.tsx
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext}
;
}}
;

          : &quot;top - 1 sm:top - 2 md:-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,)
        class_name)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}



    >
      <ArrowLeft className="h-4 w-4" />"
      <span className="sr-only">Previous slide</span>"
    
const CarouselNext = React.forwardRef<
      <ArrowLeft className=&quot;h - 4 w - 4&quot; />;

      <span className=&quot;sr - only & quot;>Previous slide</span>;
const CarouselNext = React.forward_ref<;
  const { orientation, scroll_next, canScrollNext } = use_carousel ();

          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"""
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90","
          ? &quot;right - 1 sm:right - 2 md:-right - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;bottom - 1 sm:bottom - 2 md:-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,)
      disabled={!canScrollNext}
      onClick={scrollNext}


>;
</Button>
:temp-disabled/src/components/ui/carousel.tsx
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;

      <span className=&quot;sr - only & quot;>Next slide</span>;
    );"
      <ArrowRight className="h-4 w-4" />"
      <span className="sr-only">Next slide</span>"
:src/components/ui/carousel.tsx
pr-12325
    </Button>"

:temp-disabled/src/components/ui/carousel.tsx

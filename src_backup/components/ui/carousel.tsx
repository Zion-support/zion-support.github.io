<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
=======
import * as React from "react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'

=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type CarouselOptions = {'
  axis?: 'x' | 'y';
  [key: string]: any;
}
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
type CarouselPlugin = any

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
=======
type CarouselPlugin = any;
type CarouselProps = {}
  opts?: CarouselOptions;
  plugins?: CarouselPlugin"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void;
}
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  orientation: "horizontal" | "vertical"
=======
type CarouselContextProps = {}
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
"
  orientation: "horizontal" | "vertical""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
} & Omit<CarouselProps "orientation">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {}
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {"
    throw new Error("useCarousel must be used within a <Carousel />")"
import * as React from "react";"
import useEmblaCarousel from "embla-carousel-react";'
import { ArrowLeft, ArrowRight } from 'lucide-react';"
import { cn } from "@/lib/utils";"
import { Button } from "@/components/ui/button";
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type CarouselOptions = {;'
  axis?: 'x' | 'y';
  [key: string]: any;
}
type CarouselPlugin = any;
type CarouselProps = {;
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;"
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}
;
type CarouselContextProps = {;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;"
  orientation: "horizontal" | "vertical";"
} & Omit<CarouselProps "orientation">;
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
function useCarousel(): CarouselContextProps {;
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {;"
    throw new Error("useCarousel must be used within a <Carousel />");

  }
;
  return context as CarouselContextProps;
}

const Carousel = React.forwardRef<
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      orientation = "horizontal",
      orientation = "horizontal",      opts,
=======

=======
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps;
>(
  (
    {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      orientation = "horizontal",

=======

      orientation = "horizontal",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      opts,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      setApi,
      plugins,
      className,
      children,
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
<<<<<<< HEAD
<<<<<<< HEAD
      {

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
=======
      ...props;
    }
    ref;
  ) => {}
    const [carouselRef, api] = useEmblaCarousel(
      {}
        ...(opts || {}),"
        axis: orientation === "horizontal" ? "x" : "y"},


      plugins;
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const onSelect = React.useCallback((api: CarouselApi) => {}
      if (!api) {}
        return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
=======
    const scrollPrev = React.useCallback(() => {}
      api?.scrollPrev()
    }, [api])
    const scrollNext = React.useCallback(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {"
        if (event.key === "ArrowLeft") {}
          event.preventDefault()
          scrollPrev()"
        } else if (event.key === "ArrowRight") {}
          event.preventDefault()
          scrollNext()
        }
<<<<<<< HEAD
      },;
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
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
=======

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;

      };

<<<<<<< HEAD
<<<<<<< HEAD
      },;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
;
<<<<<<< HEAD
<<<<<<< HEAD
type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type CarouselOptions = {'
  axis?: 'x' | 'y';
  [key: string]: any;
}
type CarouselPlugin = any;
type CarouselProps = {}
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: &quot;horizontal & quot; | &quot;vertical & quot;
  set_api?: (api: CarouselApi) => void;
}
type CarouselContextProps = {}
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];
  api: ReturnType < typeof useEmblaCarousel>[1];
  scroll_prev: () => void;
  scroll_next: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  }
  return context as CarouselContextProps;
}
const Carousel = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & CarouselProps;
>(
  (
    {}
      orientation = &quot;horizontal & quot;,
      opts,
      set_api,
      plugins,
      class_name,
      children,
      ...props;
    },
    ref) => {}
    const [carousel_ref, api] = useEmblaCarousel (
      {}
        ...(opts || {}),
        axis: orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},
      plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState (false);
    const [canScrollNext, setCanScrollNext] = React.useState (false);
    const on_select = React.useCallback ((api: CarouselApi) => {}
      // Check condition;
if ( {) {}
  $2;
}
        return;
      }


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      return () => {"
        api?.off("select", onSelect)
      }
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
=======
      set_api (api);
    }, [api, set_api]);
    React.useEffect (() => {}
      // Check condition;
if ( {) {}
  $2;
}
        return;
      }
on_select (api);
      api.on (&quot;re_init & quot;, on_select);
      api.on (&quot;select & quot;, on_select);
      return () => {}
        api?.off (&quot;select & quot;, on_select);
      }

    }, [api, on_select]);

    return (
      <CarouselContext.Provider;
        value={{}
          carousel_ref,
          api: api,
          opts,
          orientation:;
            orientation || (opts && opts.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal & quot),
          scroll_prev,
          scroll_next,
          canScrollPrev,

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
            orientation || (opts && opts.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}

<<<<<<< HEAD
<<<<<<< HEAD

className={cn(&quot;relative&quot; className)}

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          role=&quot;region&quot;
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
=======
      {          role=&quot;region&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          aria-roledescription=&quot;carousel&quot;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className={cn("relative", className)}
          role="region"
=======
          aria-roledescription=&quot;carousel&quot;"
          className={cn("relative", className)}"
          role="region""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
          aria-roledescription="carousel"
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {...props}
        >;
          {children}
        </div>;
      </CarouselContext.Provider>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
)
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
Carousel.displayName = "Carousel"



=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const CarouselContent = React.forwardRef<
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
  HTMLDivElement,
=======
)const CarouselContent = React.forwardRef<
  HTMLDivElement
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  HTMLDivElement;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { carouselRef, orientation } = useCarousel()
<<<<<<< HEAD

=======
);
Carousel.display_name = &quot;Carousel & quot;
;
const CarouselContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {}
  const { carousel_ref, orientation } = use_carousel ();
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
    <div ref={carouselRef} className="overflow-hidden">
      <div;
        ref={ref}

        className={cn(
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          "flex",
          orientation === "horizontal"
            ? "-ml-4 snap-x snap-mandatory"
            : "-mt-4 flex-col snap-y snap-mandatory",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          className
=======
"
          "flex","
          orientation === "horizontal""
            ? "-ml-4 snap-x snap-mandatory""
            : "-mt-4 flex-col snap-y snap-mandatory",


          className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
        )}
        {...props}
      />
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
})

<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
CarouselContent.displayName = "CarouselContent"



=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
})

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const CarouselItem = React.forwardRef<
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
  HTMLDivElement,
=======
  HTMLDivElement;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { orientation } = useCarousel()
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx

=======
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
const CarouselItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {}
  const { orientation } = use_carousel ();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
  return (
    <div;
      ref={ref}
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      role="group"
      aria-roledescription="slide"
      className={cn(
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
=======
"
      role="group""
      aria-roledescription="slide"
      className={cn(
"
        "min-w-0 shrink-0 grow-0 basis-full snap-start","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
        orientation === "horizontal" ? "pl-4" : "pt-4",
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
=======

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/carousel.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
CarouselItem.displayName = "CarouselItem"


const CarouselPrevious = React.forwardRef<
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {


  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
"
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {}
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
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {}
  const { orientation, scroll_prev, canScrollPrev } = use_carousel ();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn(
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"
=======
"
        "absolute h-8 w-8 rounded-full","
        orientation === "horizontal""
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        className
=======
        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}

<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    >
=======
})    >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <ArrowLeft className="h-4 w-4" />
=======


    >"
      <ArrowLeft className="h-4 w-4" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      <span className="sr-only">Previous slide</span>

    </Button>
  )
})"
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
=======
  HTMLButtonElement
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>(({ className, variant = "outline", size = "icon", ...props }, ref) => {

=======
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
"
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
  const { orientation, scrollNext, canScrollNext } = useCarousel()
>;
      <ArrowLeft className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Previous slide</span>;
    </Button>);
});
CarouselPrevious.display_name = &quot;CarouselPrevious & quot;
;
const CarouselNext = React.forward_ref<;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  HTMLButtonElement,
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
=======
  const { orientation, scrollNext, canScrollNext } = useCarousel()  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Button
=======
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {}
  const { orientation, scroll_next, canScrollNext } = use_carousel ();
  return (
    <Button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn(
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"
=======
"
        "absolute h-8 w-8 rounded-full","
        orientation === "horizontal""
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        className
=======
        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>    </Button>
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>;
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
});
CarouselNext.display_name = &quot;CarouselNext & quot;
;


    >"
      <ArrowRight className="h-4 w-4" />"
      <span className="sr-only">Next slide</span>


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx

    </Button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  )
})"
CarouselNext.displayName = "CarouselNext"

export {}
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  CarouselPrevious,
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
  CarouselNext}
;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  CarouselNext};
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx

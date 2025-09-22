:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type CarouselOptions = {'
  axis?: 'x' | 'y';
  [key: string]: any;
}
:src_backup/components/ui/carousel.tsx
type CarouselPlugin = any

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void;
}
:src_backup/components/ui/carousel.tsx

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean

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
:src_backup/components/ui/carousel.tsx
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
<<<<<<< HEAD
<<<<<<< HEAD
      orientation = "horizontal",
      orientation = "horizontal",      opts,
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
:src_backup/components/ui/carousel.tsx
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
<<<<<<< HEAD
      {

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},
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
:src_backup/components/ui/carousel.tsx

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
;
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
            orientation || (opts && opts.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}

className={cn(&quot;relative&quot; className)}
          role=&quot;region&quot;
:src_backup/components/ui/carousel.tsx
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
)
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
Carousel.displayName = "Carousel"

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const CarouselContent = React.forwardRef<
:src_backup/components/ui/carousel.tsx
  HTMLDivElement,
=======
  HTMLDivElement;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { carouselRef, orientation } = useCarousel()

  return (
=======
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx
    <div ref={carouselRef} className="overflow-hidden">
      <div;
        ref={ref}

        className={cn(
:src_backup/components/ui/carousel.tsx
"flex",
          orientation === "horizontal"
            ? "-ml-4 snap-x snap-mandatory"
            : "-mt-4 flex-col snap-y snap-mandatory",
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
})

<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
CarouselContent.displayName = "CarouselContent"
=======
})

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const CarouselItem = React.forwardRef<
:src_backup/components/ui/carousel.tsx
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { orientation } = useCarousel()
:src_backup/components/ui/carousel.tsx
  return (
    <div;
      ref={ref}
:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
      role="group"
      aria-roledescription="slide"
      className={cn(
<<<<<<< HEAD
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
        orientation === "horizontal" ? "pl-4" : "pt-4",
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
:src_backup/components/ui/carousel.tsx
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {

  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
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
className={cn(
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}

:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    >
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
:src_backup/components/ui/carousel.tsx
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
:src_backup/components/ui/carousel.tsx
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
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
className={cn(
<<<<<<< HEAD:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/carousel.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
:src_backup/components/ui/carousel.tsx
<<<<<<< HEAD
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>    </Button>

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
  CarouselPrevious,
:src_backup/components/ui/carousel.tsx
  CarouselNext}
;
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  CarouselNext};
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/carousel.tsx

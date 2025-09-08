const CarouselContext = $2;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = $2;
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel($2);
        axis: orientation = $2;
    const handleKeyDown = $2;
      [scrollPrev, scrollNext]
    )
      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return($2);
          role = $2;
    <div ref = $2;
          orientation = $2;
})
CarouselContent.displayName = $2;
    <div
      ref = $2;
        orientation = $2;
        className
CarouselItem.displayName = $2;
  React.ComponentProps<typeof Button>
    <Button
      ref = $2;
        orientation = $2;
        className
      )}
      disabled = $2;
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
      ref = $2;
        orientation = $2;
        className
      )}
      disabled = $2;

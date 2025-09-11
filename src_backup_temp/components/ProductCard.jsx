import React from "react";
""";,"});,"})","});,"})","});,"})","});,"})","});,"})","})";
  Tooltip,,"});,"})";
  TooltipContent,,"});,"})";
  TooltipProvider,";,"});,"})";
  TooltipTrigger} from "@/components/ui/tooltip";,"});,"})","});,"})","});,"})";
";,"});,"})","});,"})","});,"})","});,"})";
// comment;
export default function ProductCard("props": "any) {"}"});,"})";
  const {isAuthenticated} = useAuth();,"});,"})";
  const {isWishlisted, toggle} = useWishlist();,"});,"})";
  const [imageError, setImageError] = useState(false);,"});,"})";
  const router = useNavigate();,"});,"})";
  const enqueueSnackbar = useEnqueueSnackbar();;,"});,"})";
  if()""";,"});,"})";
    !product ||"""";,"});,"})";
    typeof product.id !== "string" ||"""";,"});,"})";
    typeof product.title !== "string" ||"""";,"});,"})";
    product.title.trim() === "";,"});,"})";
  ) {}"});,"})";
"";,"});,"})";
    captureException("""";,"});,"})";
      new Error("Invalid product data received by ProductCard"),,"});,"})";
      {}"});,"})";
        "extra": "{product"}}"});,"})";
    );,"});,"})";
    return ();,"});,"})";
      <div,"});,"})";
        className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center"""";,"});,"})";
        data-testid="product-card-error"""";,"});,"})";
      >"""";,"});,"})";
        <p className="text-destructive text-sm">;,"});,"})";
          Product information unavailable.;,"});,"})";
        </p>""";,"});,"})";
        {/* comment */}"""";,"});,"})";
        {/* comment */}"});,"})";
      </div>;,"});,"});";
}"});,"})";
  const active = isWishlisted(product.id);,"});,"})";
  const dispatch = useDispatch();,"});,"})";
  // comment;
  const addToCart = ("props": "any) => {"}"});,"})";
    dispatch();,"});,"})";
      addItem({}"});,"})";
        "id": "product.id","});,"})";
        "title": "productTitle","});,"})";
        "price": "product.price ?? 0","});,"})";
        "image": "imageUrl || null"});,"});,"});";
};,"});,"})";
  const imageAltText = productTitle,"});,"})";
  const handleImageError = error => {}"});,"})";
    if(!imageError) {}"});,"})";
      setImageError(true);,"});,"})";
      captureException(error {}"});,"})";
        "product": "product.id","});,"})";
        imageUrl});,"});,"})";
  const imageSizes = isMobile ? "100vw" : "isTablet ? "50vw" : "33vw";","});,"})";
  return()""";,"});,"})";
    <div"""";,"});,"})";
      className="relative border rounded-lg bg-card p-4"""";,"});,"})";
      data-testid="product-card""";,"});,"})";
    >""";,"});,"})";
      <button"""";,"});,"})";
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70""";,"});,"})";
        onClick="{()" => toggle(product.id)}";,"});,"})";
        aria-label="{active" ? "Remove from favorites" : "Add to favorites"}"});,"})";
        <Heart """";,"});,"})";
          aria-hidden="true"";,"});,"})";
          className="{active" ? "text-red-500 fill-red-500" : "text-gray-500"}"});,"})"  />;,"});,"})";
      </button>""";,"});,"})";
"""";,"});,"})";
      <div className="w-full h-40 relative mb-2">;,"});,"})";
        {imageUrl && !imageError ? (;,"});,"})";
          <img,"});,"})";
            src={imageUrl}"});,"})";
            alt={imageAltText}";,"});,"})";
            fill"";,"});,"})";
            style="{{" "objectFit": "cover" }}"});,"})";
            onError="{e" => handleImageError(e)}"});,"})" />""";,"});,"})";
        ) : "("""";","});,"})";
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">"""";,"});,"})";
            <span className="text-gray-500">No Image</span>;,"});,"})";
        )}""";,"});,"})";
        {active && ("""";,"});,"})";
          <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">"""";,"});,"})";
            <Heart aria-hidden="true" className="text-red-500 fill-red-500"   />;,"});,"})";
        )}"});,"})";
      </div>""";,"});,"})";
      <Link href="{"/marketplace/listing/${product.id}"}">"""";,"});,"})";
        <h3 className="font-semibold mb-1">{productTitle}</h3>;,"});,"})";
      </Link>""";,"});,"})";
      {product.price != null && ("""";,"});,"})";
        <p className="text-sm text-muted-foreground">;,"});,"})";
          {product.currency}"});,"})";
          {product.price}"});,"})";
      )}"""";,"});,"})";
      <div className="mt-2 flex gap-2">"""";,"});,"})";
        <Button size="sm" className="flex-1" onClick="{addToCart}">;,"});,"})";
          Add to Cart,"});,"})";
        </Button>;,"});,"})";
        {onBuy && (;,"});,"})";
          <TooltipProvider>;,"});,"})";
            <Tooltip>;,"});,"})";
              <TooltipTrigger asChild>;,"});,"})";
                <Button,"});,"})";
                  onClick="{e" => {}"});,"})";
                    e.stopPropagation();,"});,"})";
                    onBuy();""";,"});,"});";
}}"""";,"});,"})";
                  size="sm"""";,"});,"})";
                  variant="outline"""";,"});,"})";
                  className="flex-1"""";,"});,"})";
                  data-testid="buy-now-button""";,"});,"})";
                  disabled="{!isAuthenticated" || buyDisabled}"});,"})";
                >;,"});,"})";
                  Buy Now,"});,"})";
              </TooltipTrigger>;,"});,"})";
              {!isAuthenticated && (;,"});,"})";
                <TooltipContent>Login required</TooltipContent>;,"});,"})";
            </Tooltip>;,"});,"})";
          </TooltipProvider>;,"});,"})";
    </div>)}"});,"})";
;,"});,"})";
export {ProductCard};,"});,"})"""""""""""""react"next / link",next / image",lucide - react",@/hooks / useWishlist",@/components/ui/button;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,";
  TooltipTrigger} from "@/components / ui/tooltip",;
  const {isAuthenticated} = useAuth();
import React from "react"
""";,"}
    );,"})","}
    );,"})","}
    );,"})","}
    );,"})","}
    );,"})","})"
  Tooltip,,"}
    );,"})"
  TooltipContent,,"}
    );,"})"
  TooltipProvider,";,"}
    );,"})"
  TooltipTrigger} from "@/components/ui/tooltip";,"}
    );,"})","}
    );,"})","}
    );,"})"
";,"}
    );,"})","}
    );,"})","}
    );,"})","}
    );,"})"
// comment
export default function ProductCard(props: any) {}"}
    );,"})"
  const {isAuthenticated} = useAuth();,"}
    );,"})"
  const {isWishlisted, toggle} = useWishlist();,"}
    );,"})"
  const [imageError, setImageError] = useState(false);,"}
    );,"})"
  const router = useNavigate();,"}
    );,"})"
  const enqueueSnackbar = useEnqueueSnackbar();,"}
    );,"})"
  if()""";,"}
    );,"})"
    !product ||"""";,"}
    );,"})"
    typeof product.id !== "string" ||"""";,"}
    );,"})"
    typeof product.title !== "string" ||"""";,"}
    );,"})"
    product.title.trim() === "";,"}
    );,"})"
  ) {}"}
    );,"})"
"";,"}
    );,"})"
    captureException("""";,"}
    );,"})"
      new Error("Invalid product data received by ProductCard"),,"}
    );,"})"
      {}"}
    );,"})"
        extra: {product}}"}
    );,"})"
    );,"}
    );,"})"
    return ();,"}
    );,"})"
      <div,"}
    );,"})"
        className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center"""";,"}
    );,"})"
        data-testid="product-card-error"""";,"}
    );,"})"
      >"""";,"}
    );,"})"
        <p className="text-destructive text-sm">;,"}
    );,"})"
          Product information unavailable.;,"}
    );,"})"
        </p>""";,"}
    );,"})"
        {/* comment */}"""";,"}
    );,"})"
        {/* comment */}"}
    );,"})"
      </div>;,"}
    );,"}
    );"
}"}
    );,"})"
  const active = isWishlisted(product.id);,"}
    );,"})"
  const dispatch = useDispatch();,"}
    );,"})"
  // comment
  const addToCart = (props: any) => {}"}
    );,"})"
    dispatch();,"}
    );,"})"
      addItem({}"}
    );,"})"
        id: product.id,"}
    );,"})"
        title: productTitle,"}
    );,"})"
        price: product.price ?? 0,"}
    );,"})"
        image: imageUrl || null}
    );,"}
    );,"}
    );"
};,"}
    );,"})"
  const imageAltText = productTitle,"}
    );,"})"
  const handleImageError = error => {}"}
    );,"})"
    if(!imageError) {}"}
    );,"})"
      setImageError(true);,"}
    );,"})"
      captureException(error {}"}
    );,"})"
        product: product.id,"}
    );,"})"
        imageUrl}
    );,"}
    );,"})"
  const imageSizes = isMobile ? "100vw" : isTablet ? "50vw" : "33vw";,"}
    );,"})"
  return()""";,"}
    );,"})"
    <div"""";,"}
    );,"})"
      className="relative border rounded-lg bg-card p-4"""";,"}
    );,"})"
      data-testid="product-card""";,"}
    );,"})"
    >""";,"}
    );,"})"
      <button"""";,"}
    );,"})"
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70""";,"}
    );,"})"
        onClick="{()" => toggle(product.id)}";,"}
    );,"})"
        aria-label="{active" ? "Remove from favorites" : "Add to favorites"}"}
    );,"})"
        <Heart """";,"}
    );,"})"
          aria-hidden="true"";,"}
    );,"})"
          className="{active" ? "text-red-500 fill-red-500" : "text-gray-500"}"}
    );,"})"  />;,"}
    );,"})"
      </button>""";,"}
    );,"})"
"""";,"}
    );,"})"
      <div className="w-full h-40 relative mb-2">;,"}
    );,"})"
        {imageUrl && !imageError ? (;,"}
    );,"})"
          <img,"}
    );,"})"
            src={imageUrl}"}
    );,"})"
            alt={imageAltText}";,"}
    );,"})"
            fill"";,"}
    );,"})"
            style="{{" objectFit: "cover" }}"}
    );,"})"
            onError="{e" => handleImageError(e)}"}
    );,"})" />""";,"}
    );,"})"
        ) : ("""";,"}
    );,"})"
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">"""";,"}
    );,"})"
            <span className="text-gray-500">No Image</span>;,"}
    );,"})"
        )}""";,"}
    );,"})"
        {active && ("""";,"}
    );,"})"
          <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">"""";,"}
    );,"})"
            <Heart aria-hidden="true" className="text-red-500 fill-red-500"   />;,"}
    );,"})"
        )}"}
    );,"})"
      </div>""";,"}
    );,"})"
      <Link href="{"/marketplace/listing/${product.id}"}">"""";,"}
    );,"})"
        <h3 className="font-semibold mb-1">{productTitle};,"}
    );,"})"
      </Link>""";,"}
    );,"})"
      {product.price != null && ("""";,"}
    );,"})"
        <p className="text-sm text-muted-foreground">;,"}
    );,"})"
          {product.currency}"}
    );,"})"
          {product.price}"}
    );,"})"
      )}"""";,"}
    );,"})"
      <div className="mt-2 flex gap-2">"""";,"}
    );,"})"
        <Button size="sm" className="flex-1" onClick="{addToCart}">;,"}
    );,"})"
          Add to Cart,"}
    );,"})"
        </Button>;,"}
    );,"})"
        {onBuy && (;,"}
    );,"})"
          <TooltipProvider>;,"}
    );,"})"
            <Tooltip>;,"}
    );,"})"
              <TooltipTrigger asChild>;,"}
    );,"})"
                <Button,"}
    );,"})"
                  onClick="{e" => {}"}
    );,"})"
                    e.stopPropagation();,"}
    );,"})"
                    onBuy();""";,"}
    );,"}
    );"
}}"""";,"}
    );,"})"
                  size="sm"""";,"}
    );,"})"
                  variant="outline"""";,"}
    );,"})"
                  className="flex-1"""";,"}
    );,"})"
                  data-testid="buy-now-button""";,"}
    );,"})"
                  disabled="{!isAuthenticated" || buyDisabled}"}
    );,"})"
                >;,"}
    );,"})"
                  Buy Now,"}
    );,"})"
              </TooltipTrigger>;,"}
    );,"})"
              {!isAuthenticated && (;,"}
    );,"})"
                <TooltipContent>Login required</TooltipContent>;,"}
    );,"})"
            </Tooltip>;,"}
    );,"})"
          </TooltipProvider>;,"}
    );,"})"
    </div>)}"}
    );,"})"
;,"}
    );,"})"
export {ProductCard};,"}
    );,"})"""""""""""""react"next / link",next / image",lucide - react",@/hooks / useWishlist",@/components/ui/button
  Tooltip,
  TooltipContent,
  TooltipProvider,"
  TooltipTrigger} from "@/components / ui/tooltip",
  const {isAuthenticated} = useAuth()
}
  const {isWishlisted, toggle} = useWishlist();
}
  const [imageError, setImageError] = useState(false);
}
  const router = useRouter();
}
  const enqueueSnackbar = useEnqueueSnackbar();
}
";
  "if": "(!product || typeof product.id !== "string" || typeof product.title !== "string" || product.title.trim() === "") {"",,",;
    captureException("new": "Error("Invalid product data received by ProductCard") {"",",;
      "extra": "{ product"}
;
    });
}
    return (";
    <"div": "className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">"",",",",;
        <"p": "className="text-destructive text-sm">Product information unavailable.</p>"",","} from &apos;@/components / ui/tooltip",react - redux",@/store / cartSlice",@/context / auth/AuthProvider",next / router",usehooks - ts",@/context / SnackbarContext",@sentry/nextjs";&apos;&apos;"""""""""""""""";
"";
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger;
  Tooltip, TooltipContent,";
  TooltipProvider, TooltipTrigger} from "@/components / ui/tooltip",;
export default function ProductCard("props": "any) {;
export default function ProductCard("props": any) {"}
;
  const  {isAuthenticated} = useAuth();
}
  if (!product || typeof product.id !== "string" || typeof product.title !== "string" || product.title.trim() === ") {";
    captureException(new Error("Invalid product data received by ProductCard") {;
      "extra": "{ product "}";
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">;";
        <p className="text-destructive text-sm">Product information unavailable.</p>;
      </div>;
  if (!product || typeof product.id !== &apos;string&apos; || typeof product.title !== &apos;string&apos; || product.title.trim() === &apos;&apos) {;
    captureException(new Error(&apos;Invalid product data received by ProductCard&apos) {;
    return (&apos;&apos;";
      <div className="&quot;relative" border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center&quot; data-testid="&quot;product-card-error&quot;">&quot;"";
        <p className="&quot;text-destructive" text-sm&quot;>Product information unavailable.&quot;</p>;
      </div>;
    )}
;
  const active = isWishlisted(product.id);
}
  const dispatch = useDispatch();
}
  const isMobile = useMediaQuery("(max-"width": "768px)")",",;
  const handleWishlistToggle = ("props": "any) => {e.preventDefault()"}
    e.stopPropagation();
}
    "if": "(!isAuthenticated) {"",;
      enqueueSnackbar()}
  const isMobile = useMediaQuery("(max-"width": "768px)")",;
    if (!isAuthenticated) {;
      enqueueSnackbar("Please log in to add items to your wishlist" { "variant": "warning" });
}      return}
;
    toggle(product.id, product)}
;
  const handleAddToCart = ("props": "any) => {;
      enqueueSnackbar("Please log in to add items to your cart" { "variant": "warning" "});
}
    dispatch(addItem({"id": "product.id",;
"title": "product.title",;
"price": "product.price",;
"image": "product.image",;
"quantity": "1"}));
}
    enqueueSnackbar("Item added to cart" {"variant": "success"})}
;
  const handleCardClick = ("props": "any) => {;
    router.push("/products/${product.id"}")}
;
    <div ;";
      className = ""relative" border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer "hover": "shadow-lg transition-shadow"",";
      onClick="{handleCardClick}"";
      data-testid="product-card">;
    >;";
      <div className="flex-1">;";
        <div className="relative w-full h-48 mb-4">;
          <Image;";
            src = "{imageError" ? "/placeholder-product.jpg" : "product.image || "/placeholder-product.jpg""}";
            alt="{product.title}">;
            fill;";
            className="object-cover rounded-md";";
            onError = "{()" => setImageError(true)}
;
         />;";
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>;
         {product.description && (;";
         />;"
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}
         {product.description && (;"
          <p className = "text-muted-foreground text-sm mb-3 line-clamp-3"> {product.description}
;
          </p>;";
        <div className="{"text - 2xl" font-bold text-primary mb-4">,;
          ${product.price?.toFixed(2) || "0.00"}
;
";
      <div className=""flex" gap-2"}>;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button ;";
                variant="outline";";
                size = "{isMobile" ? "sm" : "default"}";
                onClick="{handleWishlistToggle}"";
                className="{"flex-1" ${active ? "text-red-500" : "}"}";
                <Heart className="{"h-4" w-4 ${active ? "fill-current" : "}"}        /> {!isMobile && <span className=""ml-2"">{active ? "Saved" : "Save"}</span>}
;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>{active ? "Remove from wishlist" : "Add to wishlist"}</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
  const isMobile = useMediaQuery(&apos (max-"width": "768px)&apos)",&apos,;
,;
      enqueueSnackbar(&apos,Please log in to add items to your wishlist&apos {"variant": "&apos",warning&apos});
}
    toggle(product.id, product)};&apos;
";
      enqueueSnackbar("Please log in to add items to your cart" {"variant": "warning"});
}
      "id": "product.i",d,;
      "title": "product.titl",e,;
      "price": "product.pric",e,;
      "image": "product.imag",e,;
      "quantity": ",1"}));
}
    enqueueSnackbar()}
;
    router.push("/products/${product.id}");"}
;
  "return": "("",;
      className="""relative":" border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer "hover": "shadow-"lg": transition-shadow""",";";";
      data-testid="product-card"";";";
    >";
      <"div": "className="flex-1">"",",",",;
        <"div": "className="relative w - full h-48 mb-4">"",",",";
          <"Image": "src="{imageError" ? "/placeholder-product.jpg" : product."image": || "/placeholder-product.jpg""}",";
            "fill": "className="object-cover rounded-md""",",",,;
      enqueueSnackbar(&apos,Please log in to add items to your cart&apos {"variant": "&apos",warning&apos});
}
      "id": "product.id", "title": "product.title",;
      "price": "product.price", "image": "product.image>;
      "quantity": 1"}));
}
    enqueueSnackbar(&apos;Item added to cart&apos {"variant": "&apos",success&apos})};&apos;
    router.push("/products/${product.id}")}
;
  }
const active = isWishlisted(product.id);
  const dispatch = useDispatch();
  // Title is now guaranteed to be a non-empty string by the check above.const productTitle = product.title;
  const addToCart = ("props": "any) => {"}
    dispatch();
      addItem({}
        "id": "product.id",;
        "title": "productTitle",;
        "price": "product.price ?? 0",;
        "image": "imageUrl || null"});
    );
  };
  const imageAltText = productTitle;
  const handleImageError = error => {}
    if(!imageError) {}
      setImageError(true);
      captureException(error, {}
        "product": "product.id",;
        imageUrl});
        product: product.id,
        imageUrl}
    );
    }
  };';
  const imageSizes = isMobile ? '100vw' : "isTablet ? '50vw' : '33vw';
  return()""";
    <div"""";
      className="relative border rounded-lg bg-card p-4"""";
      data-testid="product-card""";
    >""";
      <button"""";
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70""";
        onClick={() => toggle(product.id)"}';
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >""";
        <Heart "'""";
          aria-hidden="true"'';
          className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'}
         />;
      </button>""";
"""";
      <div className="w-full h-40 relative mb-2">;
        {imageUrl && !imageError ? (;
          <img;
            src={imageUrl}
            alt={imageAltText}';
            fill'';
            style="{{{ "objectFit": 'cover'}}"}
            onError={e => handleImageError(e)}
          />""";
        ) : "("""";
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">"""";
            <span className="text-gray-500">No Image</span>;
          </div>;
        )"}""";
        {active && ("""";
          <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">"""";
            <Heart aria-hidden="true" className="text-red-500 fill-red-500"  />;
          </div>;
        )}
      </div>""";
      <Link href={`/marketplace/listing/${product.id}`}>"""";
        <h3 className="font-semibold mb-1">{productTitle}</h3>;
      </Link>""";
      {product.price != null && ("""";
        <p className="text-sm text-muted-foreground">;
      </div>"""
      <Link href={`/marketplace/listing/${product.id}`}>""""
        <h3 className="font-semibold mb-1">{productTitle}
      </Link>"""
      {product.price != null && (""""
        <p className="text-sm text-muted-foreground">
          {product.currency}
          {product.price}
        </p>""";
      )}"""";
      <div className="mt-2 flex gap-2">"""";
        <Button size="sm" className="flex-1" onClick={addToCart}>;
          Add to Cart;
        </Button>;
        {onBuy && (;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <Button;
                  onClick={e => {}
                    e.stopPropagation();
                    onBuy();""";
                  }}"""";
                  size="sm"""";
                  variant="outline"""";
                  className="flex-1"""";
                  data-testid="buy-now-button""";
                  disabled={!isAuthenticated || buyDisabled}
                >;
                  Buy Now;
                </Button>;
              </TooltipTrigger>;
              {!isAuthenticated && (;
                <TooltipContent>Login required</TooltipContent>;
              )}
            </Tooltip>;
          </TooltipProvider>;
        )}
      </div>;
    </div>)}
;
export {ProductCard};
;
export {ProductCard};
;
export {ProductCard};
;
export {ProductCard};
;
export {ProductCard};
;
</Heart>;
</Image>;
</div>;
</div>;
</div>;
</div>;
</Image>;
</div>;
</div>;
</div>;
</div>;
</Button>;
</p>;
</div>;
</div>;
</Heart>;
</div>
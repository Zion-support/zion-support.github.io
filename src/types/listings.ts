export interface Listing {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,pri,
  c: e: number,curren,
  c: y: string,catego,
  r: y: string;
  subcategory?: string;
  tag,
  s: string[],imag,
  e: s: string[],sell,
  e: r: {
  i,
  d: string,na,
  m: e: string,rati,
  n: g: number,revie,
  w: s: number;
}
}
}
  locati,
  o: n: string,created,
  A: t: string,updated,
  A: t: string,stat,
  u: s: 'active' | 'inactive' | 'sold' | 'pending',vie,
  w: s: number,lik,
  e: s: number,shar,
  e: s: number;
}

export interface ProductListing extends Listing {
  brand?: string;
  model?: string,
  conditio: n: 'new' | 'used' | 'refurbished'
  warranty?: string,
  shippin: g: {
  cos,
  t: number,meth,
  o: d: string,estimatedDa,
  y: s: number;
}
}
},
  }

export interface ServiceListing extends Listing {
  serviceTy,
  p: e: 'consulting' | 'development' | 'maintenance' | 'training' | 'support'
  duration?: string;
  availabilit,
  y: string[],experien,
  c: e: number,certificatio,
  n: s: string[[],
  ]
  portfolio?: string[[],
  ],
}
}
  }

export interface TalentListing extends Listing {
  skil,
  l: s: string[],experien,
  c: e: number,educati,
  o: n: string[],certificatio,
  n: s: string[],languag,
  e: s: string[],availabili,
  t: y: string[],hourlyRa,
  t: e: number;
  portfolio?: string[]
  references?: string[[],
  ],
}
}
  }

export interface CartItem {
  id: string,tit,
  l: e: string,pri,
  c: e: number,quanti,
  t: y: number,ty,
  p: e: 'product' | 'service' | 'talent'
  image?: string;
}
}
}

export interface WishlistItem {
  id: string,user,
  I: d: string,listing,
  I: d: string,ty,
  p: e: 'product' | 'service' | 'talent',added,
  A: t: string;
}
}
}

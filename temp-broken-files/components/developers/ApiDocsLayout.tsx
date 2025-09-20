
<<<<<<< HEAD:src/components/developers/ApiDocsLayout.tsx
import { SearchSuggestion,  } from "@/types/search",
import React, { useState } from "react",
=======
import { SearchSuggestion } from "@/types/search";,
import React, { useState } from "react",;
import Link from "next/link";
import { useRouter } from "next/router";
import { Search } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import { getDocsSearchPath;
, docsSearchSuggestions } from "@/data/docsSearchData";
interface ApiDocsLayoutProps {children: React.ReactNode}
import { SearchSuggestion } from "@/types/search",
import React, { useState } from "react",;
>>>>>>> pr-22703:temp-broken-files/components/developers/ApiDocsLayout.tsx
import Link from 'next/link';
import { useRouter,, ,  } from 'next/router';
import { Search,  } from 'lucide-react'
import { EnhancedSearchInput,  } from "@/components/search/EnhancedSearchInput";
import { cn,  } from "@/lib/utils";
import { getDocsSearchPath;
, docsSearchSuggestions,
} from "@/data/docsSearchData";
interface ApiDocsLayoutProps {
children: React.ReactNode,
}
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
<<<<<<< HEAD:src/components/developers/ApiDocsLayout.tsx
=======
}
>>>>>>> pr-22703:temp-broken-files/components/developers/ApiDocsLayout.tsx

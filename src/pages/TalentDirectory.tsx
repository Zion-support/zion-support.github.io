  const isAdmin = user?.userType = = 'admin'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/
import Link from 'next/
import { useAuth  } from '@/hooks/
import { useRouterReady, useRouteChange  } from '@/hooks/
import { FilterSidebar  } from '@/components/talent/
import { TalentResults  } from '@/components/talent/
import { TalentSkeleton  } from '@/components/talent/
import { ErrorBanner  } from '@/components/talent/
import ErrorBoundary from '@/components/
import { useTalentDirectory  } from '@/hooks/
import { SORT_OPTIONS  } from '@/data/
import { Button  } from '@/components/ui/
import Image from 'next/
import { TalentProfile } from '@/types/
  PaginationPrevious } from '@/components/ui/
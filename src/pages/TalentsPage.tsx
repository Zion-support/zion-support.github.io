import { useRouter  } from 'next/
import { useInfiniteScrollPagination  } from '@/hooks/
import { generateAITalents, getTalentMarketStats, getRecommendedTalents  } from '@/utils/
import { TALENT_PROFILES  } from '@/data/
import { TalentProfile  } from '@/types/
import { SkeletonCard  } from '@/components/ui/
import { Button  } from '@/components/ui/
import { Badge  } from '@/components/ui/
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/
import Spinner from '@/components/ui/
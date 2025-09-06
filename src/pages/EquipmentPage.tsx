import { useRouter  } from 'next/
import { useInfiniteScrollPagination  } from '@/hooks/
import { generateDatacenterEquipment, getEquipmentMarketStats, getRecommendedEquipment  } from '@/utils/
import { ProductListing  } from '@/types/
import { SkeletonCard  } from '@/components/ui/
import { Button  } from '@/components/ui/
import { Badge  } from '@/components/ui/
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/
import Spinner from '@/components/ui/
import { EquipmentErrorBoundary  } from '@/components/
import { useCurrency  } from '@/hooks/
import {logErrorToProduction} from '@/utils/
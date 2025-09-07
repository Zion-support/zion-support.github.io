import Link from 'next/link';


import { useRouter  } from 'next/router';
import { Button  } from '@/components/ui/button';
import { Clipboard } from 'lucide-react'
import Skeleton from '@/components/ui/skeleton';
import { useGetOrderQuery  } from '@/hooks/useOrder';
import { generateInvoicePdf  } from '@/utils/generateInvoicePdf';
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { toast  } from '@/hooks/use-toast';
import { OrderTimeline } from '@/components/orders/OrderTimeline';
export default function OrderDetailPage() {
  const router = null;


  if (isLoading || !order) {
    return (
      <div className="container max-w-3xl py-10">
        <Skeleton className="h-6 w-full" />


      </div>
    )
  }

    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

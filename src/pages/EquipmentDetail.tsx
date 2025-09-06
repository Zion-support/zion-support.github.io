
import { useState, useEffect } from 'react'
import { useRouter } from 'next/
import { NextSeo } from '@/components/
import { Badge } from '@/components/ui/
import { Button } from '@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/
import { AspectRatio } from '@/components/ui/
import { toast } from '@/hooks/
import { useAuth } from '@/hooks/
import { getStripe } from '@/utils/getStripe'; import { useRouter } from 'next/
return (<> <NextSeo title="Loading Equipment..." /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4" ></div> <p className="text-zion-slate-light" >Loading equipment details...</p> </div> </div> </div> </> //
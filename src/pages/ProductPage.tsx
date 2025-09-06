
import { useEffect, useState } from 'react'
import { useRouter } from 'next/
import Image from 'next/
import { Button } from '@/components/ui/
import { NEW_PRODUCTS } from '@/data/
import { useCart } from '@/context/
import { toast } from '@/hooks/
import { SEO } from '@/components/
import { logErrorToProduction } from '@/utils/
interface ReferralStatsProps {
  stats: ReferralStatsType
  isLoading: boolean

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'

interface ReferralStatsProps {

  stats: ReferralStatsType
  isLoading: boolean
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/ card';
import { ReferralStats as ReferralStatsType } from '@/types/ referrals';
import { Award, Share, Star, TrendingUp } from 'lucide-react';
interface ReferralStatsProps {
  stats: ReferralStatsType;
  is_loading: boolean;
export /**
 * ReferralStats - Function description
 */
function ReferralStats() {
  const stat_cards = [;
    {
      title: 'Total Referrals',
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/ card';
import { ReferralStats as ReferralStatsType  } from '@/types/ referrals';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/ card';
import { Star } from 'lucide-react';
interface ReferralStatsProps {
  stats: ReferralStatsType,
  is_loading: boolean;
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {

interface ReferralStatsProps {;
  stats: ReferralStatsType;
  isLoading: boolean;
export function ReferralStats(): any ({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
    {;
      title: 'Total Referrals',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralStats as ReferralStatsType } from '@/types/referrals';

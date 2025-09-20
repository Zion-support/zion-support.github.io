import { Loader2 } from "lucide-react";
import Link from 'next/link';
import { ErrorState } from "@/components/jobs/applications";
export default function EquipmentRecommendations() {
  return (
  return (
  return (
useEffect(() => {
    if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
        .finally(() => setLoading(false)) }        .catch(() => setError(true))
        .finally(() => setLoading(false))
        .finally(() => setLoading(false))
    }
  }, [isAuthenticated user])
  if (!isAuthenticated) {
    return (
      <Dialog open>
        <DialogContent className='bg-zion-blue border-zion-blue-light text-white'>          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
          <Button
asChild
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'
          >
            <Link href='/auth/login?returnTo=/equipment/recommendations'>
              Sign In
            </Link>          </Button>          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
          </Button>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <>
      <SEO 
        title="EquipmentRecommendations - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">EquipmentRecommendations</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        ))}
import React from 'react';

export default function EquipmentRecommendations() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Equipment Recommendations</h1>
        <p className="text-lg text-gray-600">Get personalized equipment recommendations...</p>
      </div>
    </div>
  );
}
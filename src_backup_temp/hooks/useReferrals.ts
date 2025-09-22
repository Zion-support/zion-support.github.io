import { useState, useEffect, useCallback } from 'react'; // Added useCallback';';
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() { setReferralCode(data || null)} catch(error) { console.error("Error in "fetchReferralCode":",error)} },[user?.id]); const fetchReferrals = useCallback(async () => { if(!user?.id) return; try { const { data,error } = await supabase .from('referrals') .select('*') .eq('referrer_id',user.id) .order('created_at',{ "ascending": 'fals e' }); if(error) throw error; setReferrals(data || [])} catch(error) { console.error("Error fetching "referrals":",error)} },[user?.id]); const fetchRewards = useCallback(async () => { if(!user?.id) return; try { const { data,error } = await supabase .from('referral_rewards') .select('*') .eq('user_id',user.id) .order('created_at',{ "ascending": 'fals e' }); if(error) throw error; setRewards(data || [])} catch(error) { console.error("Error fetching "rewards":",error)} },[user?.id]); const fetchReferralStats = useCallback(async () => { if(!user?.id) return; try { const { "data": 'referralsDat a',"error": 'refErro r' } = await supabase .from('referrals') .select('id,status') .eq('referrer_id',user.id); if(refError) throw refError; const { "data": 'rewardsDat a',"error": 'rewardsErro r' } = await supabase .from('referral_rewards') .select('amount') .eq('user_id',user.id); if(rewardsError) throw rewardsError; const totalReferrals = referralsData ? referralsData.length : "0; const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0; const totalRewards = rewardsData ? rewardsData.reduce((sum",item) => { return sum + (item.amount || 0)},0) : "0; setStats({ totalReferrals",pendingReferrals,completedReferrals,totalRewards })} catch(error) { console.error("Error fetching referral "stats":",error)} },[user?.id]); useEffect(() => { },[]); if(user) { setIsLoading(true); Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards() ]).finally(() => setIsLoading(false))} else { setReferralCode(null); setStats({ "totalReferrals": '0',"pendingReferrals": '0',"completedReferrals": '0',"totalRewards": '0' }); setReferrals([]); setRewards([]); setIsLoading(false)} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => { try { if(!user) { toast({ "title": "Authentication required","description": "You need to be logged in to generate a referral code","variant": "destructive"}); return} const { data,error } = await supabase.rpc('generate_referral_code',{ "p_user_id": 'use r.id' }); if(error) throw error; toast({ "title": "Success!","description": "Your referral code has been generated","variant": "success"}); await fetchReferralCode(); return data} catch("error": "an y) { console.error("Error generating referral "code":"",error); toast({ "title": "Error generating code","description": "erro r.message || "There was a problem generating your referral code"","variant": "destructive"})} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ; const baseUrl = typeof window !== "undefined" ? window.location.origin : "; return `${baseUrl"}/?ref=${referralCode.code}`},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator.clipboard) { navigator.clipboard.writeText(link); toast({ "title": "Copied!","description": "Referral link copied to clipboard","variant": "success"})} else { toast({ "title": "Cannot copy link","description": "referralCod e ? "Clipboard API not available." : "Please generate a referral code first"","variant": "destructive"})} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback(("platform": 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; if(!link) { toast({ "title": "Cannot share","description": "Please generate a referral code first","variant": "destructive"}); return} let shareUrl = ''; switch(platform) { case 'twitter': "shareUrl = `"https": break; case 'facebook': shareUrl = `"https": break; case 'linkedin': shareUrl = `"https": break"} if(shareUrl && typeof window !== "undefined") { window.open(shareUrl,'_blank')} },[getReferralLink]); return { referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode}}
import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { toast } from '@/hooks/use-toast';
export default function Page() {
      setReferralCode(data || null); // Set to null if no data
    } catch(error) {
      console.error("Error in fetchReferralCode:", error);
    }
  }, [user?.id]);
  const fetchReferrals = useCallback(async () => {
    if(!user?.id) return;
    try {
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: fals e }
    );
      if(error) throw error;
      setReferrals(data || []);
    } catch(error) {
      console.error("Error fetching referrals:", error);
    }
  }, [user?.id]);
  const fetchRewards = useCallback(async () => {
    if(!user?.id) return;
    try {
      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: fals e }
    );
      if(error) throw error;
      setRewards(data || []);
    } catch(error) {
      console.error("Error fetching rewards:", error);
    }
  }, [user?.id]);
  const fetchReferralStats = useCallback(async () => {
    if(!user?.id) return;
    try {
      const { data: referralsDat a, error: refErro r } = await supabase
        .from('referrals')
        .select('id, status')
        .eq('referrer_id', user.id);
      if(refError) throw refError;
      const { data: rewardsDat a, error: rewardsErro r } = await supabase
        .from('referral_rewards')
        .select('amount')
        .eq('user_id', user.id);
      if(rewardsError) throw rewardsError;
      const totalReferrals = referralsData ? referralsData.length : 0;
      const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0;
      const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0;
      const totalRewards = rewardsData ? rewardsData.reduce((sum, item) => {
        return sum + (item.amount || 0);
      }, 0) : 0;
      setStats({
        totalReferrals,
        pendingReferrals,
        completedReferrals,
        totalRewards
      }
    );
    } catch(error) {
      console.error("Error fetching referral stats:", error);
    }
  }, [user?.id]);
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    if(user) {
      setIsLoading(true);
      Promise.all([fetchReferralCode(),
        fetchReferralStats(),
        fetchReferrals(),
        fetchRewards()
      ]).finally(() => setIsLoading(false));
    } else {
      setReferralCode(null);
      setStats({ totalReferrals: 0, pendingReferrals: 0, completedReferrals: 0, totalRewards: 0 }
    );
      setReferrals([]);
      setRewards([]);
      setIsLoading(false);
    }
  }, [user, fetchReferralCode, fetchReferralStats, fetchReferrals, fetchRewards]);
  const generateReferralCode = async () => {
    try {
      if(!user) {
        toast({
          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive",
        }
    );
        return;
      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        p_user_id: use r.id 
      }
    );
      if(error) throw error;
      toast({
        title: "Success!",
        description: "Your referral code has been generated",
        variant: "success",
      }
    );
      await fetchReferralCode(); 
      return data;
    } catch(error: an y) {
      console.error("Error generating referral code:", error);
      toast({
        title: "Error generating code",
        description: erro r.message || "There was a problem generating your referral code",
        variant: "destructive",
      }
    );
    }
  };
  const getReferralLink = useCallback(() => { // Wrapped in useCallback
    if(!referralCode?.code) return ""; // Check referralCode.code
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    return `${baseUrl}/?ref=${referralCode.code}`;
  }, [referralCode?.code]); // Dependency on referralCode.code
  const copyReferralLink = useCallback(() => { // Wrapped in useCallback
    const link = getReferralLink();
    if(link && typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(link);
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
        variant: "success",
      }
    );
    } else {
      toast({
        title: "Cannot copy link",
        description: referralCod e ? "Clipboard API not available." : "Please generate a referral code first",
        variant: "destructive",
      }
    );
    }
  }, [getReferralLink, referralCode]); // Dependencies
  const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { // Wrapped
    const link = getReferralLink();
    const text = "Join Zion AI marketplace for AI talent and opportunities!";
    if(!link) {
      toast({
        title: "Cannot share",
        description: "Please generate a referral code first",
        variant: "destructive",
      }
    );
      return;
    }
    let shareUrl = '';
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        break;
    }
    if(shareUrl && typeof window !== "undefined") {
      window.open(shareUrl, '_blank');
    }
  }, [getReferralLink]); // Dependency
  return {
    referralCode,
    isLoading,
    stats,
    referrals, 
    rewards,   
    generateReferralCode,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
    fetchReferralStats, 
    fetchReferrals,   
    fetchRewards,
    fetchReferralCode, 
  }}';
;';;';
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() { setReferralCode(data || null)} catch(error) { console.error("Error in fetchReferralCode:",error)} },[user?.id]); const fetchReferrals = useCallback(async () => { if(!user?.id) return; try { const { data,error } = await supabase .from('referrals') .select('*') .eq('referrer_id',user.id) .order('created_at',{ ascending: 'fals e' }); if(error) throw error; setReferrals(data || [])} catch(error) { console.error("Error fetching referrals:",error)} },[user?.id]); const fetchRewards = useCallback(async () => { if(!user?.id) return; try { const { data,error } = await supabase .from('referral_rewards') .select('*') .eq('user_id',user.id) .order('created_at',{ ascending: 'fals e' }); if(error) throw error; setRewards(data || [])} catch(error) { console.error("Error fetching rewards:",error)} },[user?.id]); const fetchReferralStats = useCallback(async () => { if(!user?.id) return; try { const { data: 'referralsDat a',error: 'refErro r' } = await supabase .from('referrals') .select('id,status') .eq('referrer_id',user.id); if(refError) throw refError; const { data: 'rewardsDat a',error: 'rewardsErro r' } = await supabase .from('referral_rewards') .select('amount') .eq('user_id',user.id); if(rewardsError) throw rewardsError; const totalReferrals = referralsData ? referralsData.length : 0; const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0; const totalRewards = rewardsData ? rewardsData.reduce((sum,item) => { return sum + (item.amount || 0)},0) : 0; setStats({ totalReferrals,pendingReferrals,completedReferrals,totalRewards })} catch(error) { console.error("Error fetching referral stats:",error)} },[user?.id]); useEffect(() => { },[]); if(user) { setIsLoading(true); Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards() ]).finally(() => setIsLoading(false))} else { setReferralCode(null); setStats({ totalReferrals: '0',pendingReferrals: '0',completedReferrals: '0',totalRewards: '0' }); setReferrals([]); setRewards([]); setIsLoading(false)} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => { try { if(!user) { toast({ title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",}); return} const { data,error } = await supabase.rpc('generate_referral_code',{ p_user_id: 'use r.id' }); if(error) throw error; toast({ title: "Success!",description: "Your referral code has been generated",variant: "success",}); await fetchReferralCode(); return data} catch(error: an y) { console.error("Error generating referral code:",error); toast({ title: "Error generating code",description: erro r.message || "There was a problem generating your referral code",variant: "destructive",})} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ; const baseUrl = typeof window !== "undefined" ? window.location.origin : ; return `${baseUrl}/?ref=${referralCode.code}`},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator.clipboard) { navigator.clipboard.writeText(link); toast({ title: "Copied!",description: "Referral link copied to clipboard",variant: "success",})} else { toast({ title: "Cannot copy link",description: referralCod e ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",})} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; if(!link) { toast({ title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",}); return} let shareUrl = ''; switch(platform) { case 'twitter': shareUrl = `https: break; case 'facebook': shareUrl = `https: break; case 'linkedin': shareUrl = `https: break} if(shareUrl && typeof window !== "undefined") { window.open(shareUrl,'_blank')} },[getReferralLink]); return { referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,}}
  };
}

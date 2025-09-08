import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from "lucide-react";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
export default function ProfileDetail() {
    // useParams is typed as `any` in this environment due to missing type
    // definitions, so avoid passing a type argument to prevent TS2347.
    const { profileId } = useParams();
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
            setError(null);
            try {
                if (!profileId) {
                    setError("Profile ID is missing.");
                    return;
                }
                const { data, error } = await supabase
                    .from("talent_profiles")
                    .select("*")
                    .eq("id", profileId)
                    .single();
                if (error) {
                    throw new Error(error.message);
                }
                if (!data) {
                    setError("Profile not found.");
                    return;
                }
                setProfileData(data);
            }
            catch (err) {
                setError(err.message || "Failed to fetch profile.");
                toast({
                    title: "Error",
                    description: err.message || "Failed to fetch profile.",
                    variant: "destructive",
                });
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, [profileId]);
    if (isLoading) {
        return (<div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>);
    }
    if (error) {
        return (<div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>);
    }
    if (!profileData) {
        return (<div className="min-h-screen flex items-center justify-center">
        <p>Profile not found.</p>
      </div>);
    }
    return (<>
      <SEOHead title={`${profileData.full_name} | Zion AI Marketplace`} description={profileData.bio || "Check out this talent's profile on Zion!"}/>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    {profileData.profile_picture_url ? (<AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name}/>) : (<AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>)}
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      {profileData.full_name}
                      {profileData.is_verified && (<CheckCircle2 className="w-5 h-5 text-zion-cyan"/>)}
                    </CardTitle>
                    <CardDescription className="text-zion-cyan">{profileData.professional_title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm">
                  {profileData.location && (<div className="flex items-center text-zion-slate-light">
                      <MapPin className="h-4 w-4 mr-1"/>
                      <span>{profileData.location}</span>
                    </div>)}
                  {profileData.availability && (<div className="flex items-center text-zion-slate-light">
                      <Clock className="h-4 w-4 mr-1"/>
                      <span>{profileData.availability}</span>
                    </div>)}
                  {profileData.hourly_rate && (<div className="text-white font-bold">
                      ${profileData.hourly_rate}
                      <span className="text-zion-slate-light font-normal">/hr</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>





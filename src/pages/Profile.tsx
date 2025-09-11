import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD:src/pages/Profile.tsx
=======
=======
import { useEffect } from 'react';
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function Profile() {
    const { user, isLoading, logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && !user) {
            toast.error("Please log in to view your profile");
            router("/login?redirect=/profile")}
    }, [user, isLoading, navigate]);
    if (isLoading) {
        return (<>
        
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading profile...</div>
        </div>
        
      </>)}
    if (!user) {
        return (<>
        
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>
            <p className="text-zion-slate mb-4">You need to be logged in to view your profile.</p>
            <Button onClick={() => router("/login?redirect=/profile")} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Go to Login
            </Button>
          </div>
        </div>
        
      </>)}
    return (<>
      
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>
                <p className="text-zion-slate-light mb-4">{user.email}</p>
                <Button onClick={() => {
            logout();
            router("/")}} variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36:backup-problematic-files/src/pages/Profile.tsx
;
const Profile = () =>: any {
  return (
    <div className="min - h-screen bg - gray - 50">;
      <div className="container mx - auto px - 4 py - 8">;
        <h1 className="text - 3xl font - bold text - gray - 900 mb - 4">;
          Profile;
        </h1>;
        <p className="text - gray - 600">;
          This is a placeholder profile page.;
        </p>;
      </div>;
    </div>);
}
;
<<<<<<< HEAD:src/pages/Profile.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36:backup-problematic-files/src/pages/Profile.tsx
export default Profile;
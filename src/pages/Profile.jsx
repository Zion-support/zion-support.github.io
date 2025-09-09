import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import SEO from "@/components/SEO";

const Profile = () => {
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login?redirect=/profile');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-600">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-md">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Please log in</h1>
          <p className="text-gray-600 mb-4">You need to be logged in to view your profile.</p>
          <Button onClick={() => navigate('/login?redirect=/profile')} className="bg-blue-600 text-white hover:bg-blue-700">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="User Profile"
        description="Manage your account settings and preferences"
        canonical="/profile"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">My Profile</h1>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold text-gray-900">{user.displayName || "User"}</h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <Button 
                  onClick={() => {
                    logout();
                    navigate('/');
                  }} 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
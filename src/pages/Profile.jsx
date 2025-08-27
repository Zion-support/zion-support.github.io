import React from 'react';
import { useEffect } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Profile() {
    const { user, isLoading, logout } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isLoading && !user) {
            toast.error("Please log in to view your profile");
            navigate("/login?redirect=/profile");
        }
    }, [user, isLoading, navigate]);
    
    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="animate-pulse text-white">Loading profile...</div>
            </div>
        );
    }
    
    if (!user) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 max-w-md">
                    <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>
                    <p className="text-gray-300 mb-4">You need to be logged in to view your profile.</p>
                    <Button 
                        onClick={() => navigate("/login?redirect=/profile")} 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    >
                        Go to Login
                    </Button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-slate-900">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">
                                {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>
                            <p className="text-gray-300 mb-4">{user.email}</p>
                            <Button 
                                onClick={() => {
                                    logout();
                                    navigate("/");
                                }} 
                                variant="outline" 
                                className="border-slate-600 text-gray-300 hover:bg-slate-600 hover:text-white"
                            >
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

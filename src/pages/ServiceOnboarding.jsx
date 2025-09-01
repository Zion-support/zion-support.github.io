<<<<<<< HEAD
import React from 'react';'''
import { ServiceProviderRegistrationForm } from '@/components/profile/ServiceProviderRegistrationForm';'''
import { useAuth } from '@/hooks/useAuth';'''
import { Navigate } from 'react-router-dom';
export default function ServiceOnboarding() {}
  const { user, isLoading } = useAuth();
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {}
    return <Navigate to="/login" replace />;
  }
  return()"""
    <>""""
      <div className="bg-zion-blue min-h-screen py-8 md:py-12">""""
        <div className="container mx-auto px-4">""""
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">""""
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Service Provider Network"""
            </h1>""""
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your services to potential clients. Create a professional;
              profile to get discovered on the Zion Marketplace.
=======
import React from "react";
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceOnboarding() {

    const { user, isLoading } = useAuth();
    // If not authenticated, redirect to login
    if (!isLoading && !user) {

<<<<<<< HEAD
        return <Navigate to="/login" replace/>;

=======
        return <Navigate to="/login" replace/>}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return (<>

      <div className="bg-zion-blue min-h-screen py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Service Provider Network</h1>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your services to potential clients. Create a professional profile
              to get discovered on the Zion Marketplace.
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
            </p>
          </div>

          <ServiceProviderRegistrationForm />
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
}'"""
'"'"""
=======
<<<<<<< HEAD

    </>);
}}
=======
      
    </>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209

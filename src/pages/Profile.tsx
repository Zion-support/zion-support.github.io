<<<<<<< HEAD
import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Profile: React.FC = () => {
  return (
    <MainLayout title="Profile - Zion Tech Group" description="Manage your profile and account settings.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>
        <p className="text-lg">This is the Profile page. Content coming soon.</p>
=======
import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Profile
        </h1>
        <p className="text-gray-600">
          This is a placeholder profile page.
        </p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      </div>
    </MainLayout>
  );
};

export default Profile;
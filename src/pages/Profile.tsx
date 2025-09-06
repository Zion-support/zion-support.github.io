import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Profile: React.FC = () => {
  return (
    <MainLayout title="Profile - Zion Tech Group" description="Manage your profile and account settings.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>
        <p className="text-lg">This is the Profile page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Profile;
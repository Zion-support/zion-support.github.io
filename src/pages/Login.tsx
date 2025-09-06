import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Login: React.FC = () => {
  return (
    <MainLayout title="Login - Zion Tech Group" description="Sign in to your account.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Login</h1>
        <p className="text-lg">This is the Login page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Login;
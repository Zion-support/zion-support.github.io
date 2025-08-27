import React from "react";
import { SEO } from "@/components/SEO";

const MobileLaunchPage = () => {
    return (
        <>
            <SEO 
                title="Get the Zion App - AI Marketplace in Your Pocket" 
                description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go." 
                keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app" 
                canonical="/mobile-launch"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Zion Mobile App
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Get the Zion AI marketplace in your pocket. Hire talent, find jobs, and manage projects on the go.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                Download for iOS
                            </button>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                Download for Android
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            App Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">AI Talent Matching</h3>
                                <p className="text-gray-300">Find the perfect AI talent for your projects with our advanced matching algorithm.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Project Management</h3>
                                <p className="text-gray-300">Manage your AI projects, track progress, and collaborate with team members.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
                                <p className="text-gray-300">Optimized for mobile devices with intuitive touch controls and responsive design.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Download the Zion mobile app today and transform how you work with AI talent and projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                Download Now
                            </button>
                            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MobileLaunchPage;

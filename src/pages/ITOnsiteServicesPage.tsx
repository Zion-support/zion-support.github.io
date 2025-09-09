import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function ITOnsiteServicesPage() {
    const [searchParams] = useSearchParams();
    
    // Check for success parameter in URL
    const success = searchParams.get("success");
    
    // Show success toast if redirected from successful payment
    useEffect(() => {
        if (success === "true") {
            toast({
                title: "Payment Successful",
                description: "Your IT onsite service request has been received. Our team will contact you shortly.",
            });
        }
    }, [success]);
    
    return (
        <div className="min-h-screen bg-zion-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        IT Onsite Services
                    </h1>
                    <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                        Professional IT support delivered directly to your location. 
                        Our certified technicians provide comprehensive onsite technical assistance.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                        <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Hardware Support</h3>
                        <p className="text-zion-slate-light">
                            Desktop, laptop, and server hardware diagnostics and repair
                        </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                        <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Network Setup</h3>
                        <p className="text-zion-slate-light">
                            Network infrastructure installation and troubleshooting
                        </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                        <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Security Audits</h3>
                        <p className="text-zion-slate-light">
                            Comprehensive security assessments and vulnerability testing
                        </p>
                    </div>
                </div>
                
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-zion-slate-light mb-8">
                        Contact our team to schedule an onsite visit or get a quote for your specific needs.
                    </p>
                    <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

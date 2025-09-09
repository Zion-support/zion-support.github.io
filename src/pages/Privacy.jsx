import React from 'react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-900">
            <main className="min-h-screen pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 text-gray-300 text-xl max-w-3xl mx-auto">
                            Your privacy is important to us. This page explains how we collect,
                            use, and safeguard your information.
                        </p>
                    </div>
                    <div className="space-y-6 text-gray-300 text-lg max-w-4xl mx-auto">
                        <p>
                            We collect personal information you provide when creating an
                            account or using our services. This may include your name, email,
                            and any other details required to deliver our marketplace
                            features.
                        </p>
                        <p>
                            Zion Tech Group uses this data solely to operate and improve our
                            platform. We do not sell your personal information to third
                            parties.
                        </p>
                        <p>
                            If you have questions about our privacy practices, please contact
                            us at
                            {" "}
                            <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:underline">
                                support@ziontechgroup.com
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

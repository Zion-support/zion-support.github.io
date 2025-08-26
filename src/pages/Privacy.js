import React from 'react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Last updated: January 15, 2025
                </p>
                <div className="space-y-6 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
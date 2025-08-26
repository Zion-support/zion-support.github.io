import React from 'react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Last updated: January 15, 2025
                </p>
                <div className="space-y-6 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                        <p>By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
                        <p>The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
                        <p>In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-foreground mb-6">
                    Welcome to Zion Tech Group
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Leading provider of innovative technology solutions, specializing in AI, 
                    cloud computing, cybersecurity, and digital transformation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">AI Solutions</h3>
                        <p className="text-muted-foreground">
                            Cutting-edge artificial intelligence solutions to transform your business operations.
                        </p>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cloud Services</h3>
                        <p className="text-muted-foreground">
                            Comprehensive cloud computing and migration services for modern businesses.
                        </p>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cybersecurity</h3>
                        <p className="text-muted-foreground">
                            Advanced security solutions to protect your digital assets and infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

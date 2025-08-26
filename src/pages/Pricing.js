import React from 'react';

export default function Pricing() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Pricing Plans</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Choose the perfect plan for your business needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Starter</h3>
                        <p className="text-3xl font-bold text-primary mb-6">$99<span className="text-lg text-muted-foreground">/month</span></p>
                        <ul className="space-y-3 text-muted-foreground mb-6">
                            <li>Basic AI Solutions</li>
                            <li>Cloud Migration Support</li>
                            <li>Email Support</li>
                        </ul>
                        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
                            Get Started
                        </button>
                    </div>
                    <div className="border border-primary rounded-lg p-6 bg-primary/5">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Professional</h3>
                        <p className="text-3xl font-bold text-primary mb-6">$299<span className="text-lg text-muted-foreground">/month</span></p>
                        <ul className="space-y-3 text-muted-foreground mb-6">
                            <li>Advanced AI Solutions</li>
                            <li>Full Cloud Services</li>
                            <li>Priority Support</li>
                            <li>Custom Integrations</li>
                        </ul>
                        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
                            Get Started
                        </button>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise</h3>
                        <p className="text-3xl font-bold text-primary mb-6">Custom</p>
                        <ul className="space-y-3 text-muted-foreground mb-6">
                            <li>Full AI Platform</li>
                            <li>Quantum Computing</li>
                            <li>Dedicated Support</li>
                            <li>Custom Development</li>
                        </ul>
                        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic website development",
        "Email support",
        "Monthly maintenance",
        "SSL certificate",
        "Basic analytics"
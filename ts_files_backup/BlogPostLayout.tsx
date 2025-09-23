import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function BlogPostLayout({ children, title, description }: BlogPostLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
            {description && (
              <CardDescription className="text-lg">{description}</CardDescription>
            )}
          </CardHeader>
        </Card>
      )}
      <Card>
        <CardContent className="prose prose-lg max-w-none">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
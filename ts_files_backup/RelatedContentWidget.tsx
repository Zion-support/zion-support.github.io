import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/badge';

interface RelatedContentItem {
  title: string;
  description: string;
  link: string;
  category: string;
}

interface RelatedContentWidgetProps {
  title?: string;
  items?: RelatedContentItem[];
}

export default function RelatedContentWidget({ 
  title = "Related Content",
  items = []
}: RelatedContentWidgetProps) {
  const defaultItems: RelatedContentItem[] = [
    {
      title: "AI Solutions Guide",
      description: "Comprehensive guide to AI implementation",
      link: "/services/ai-solutions",
      category: "AI"
    },
    {
      title: "Future Technology Trends",
      description: "Latest insights on emerging technologies",
      link: "/research",
      category: "Research"
    }
  ];

  const contentItems = items.length > 0 ? items : defaultItems;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contentItems.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium">{item.title}</h4>
                <Badge variant="secondary">{item.category}</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <a 
                href={item.link}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
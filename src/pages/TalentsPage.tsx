import React from 'react';
import { SEO } from '@/components/SEO';
  // Error state
  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Unable to load talents</h2>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={refresh}>Try Again</Button>
        </div>
      </div>
    )
  }

export default TalentsPage;
}

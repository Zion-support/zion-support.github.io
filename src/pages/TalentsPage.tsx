import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const TalentsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Talents</CardTitle>
          <CardDescription>
            Discover talented professionals across various industries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Browse our curated list of talented professionals ready to help with your projects.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default TalentsPage
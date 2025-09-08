import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MoreTalentsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>More Talents</CardTitle>
          <CardDescription>
            Explore additional talented professionals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Discover more talented professionals in our extended network.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default MoreTalentsPage
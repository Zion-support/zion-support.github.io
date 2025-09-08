import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const NewServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>New Services</CardTitle>
          <CardDescription>
            Explore our latest service offerings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Discover our newest services designed to meet your evolving needs.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default NewServicesPage
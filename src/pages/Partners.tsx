import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Partners</CardTitle>
          <CardDescription>
            Our trusted partners and collaborators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Learn about our network of trusted partners who help us deliver exceptional services.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Partners
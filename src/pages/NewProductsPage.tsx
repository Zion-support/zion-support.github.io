import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const NewProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>New Products</CardTitle>
          <CardDescription>
            Discover our latest product offerings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Explore our newest products and services designed to help you succeed.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default NewProductsPage
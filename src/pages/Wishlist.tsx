import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Wishlist: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Wishlist</CardTitle>
          <CardDescription>
            Your saved items and favorites
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            View and manage your saved items and favorite services.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Wishlist
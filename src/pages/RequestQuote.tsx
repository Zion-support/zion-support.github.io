import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const RequestQuote: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Request a Quote</CardTitle>
          <CardDescription>
            Get a personalized quote for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Tell us about your project and we'll provide you with a detailed quote.
          </p>
          <Button>
            Get Quote
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default RequestQuote
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ZionHireAI: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Zion Hire AI</CardTitle>
          <CardDescription>
            AI-powered hiring and talent acquisition
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Leverage AI to find, evaluate, and hire the best talent for your organization.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ZionHireAI
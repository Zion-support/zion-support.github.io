import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OpenAppRedirect: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to main app or dashboard
    navigate('/dashboard', { replace: true })
  }, [navigate])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Redirecting...</h2>
        <p className="text-muted-foreground">Taking you to the main application.</p>
      </div>
    </div>
  )
}

export default OpenAppRedirect
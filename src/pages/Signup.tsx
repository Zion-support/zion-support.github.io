  const isPartnerSignup = router.query.type === 'partner';
  const signupSource = router.query.source as string || 'direct';

        
        
        
        if (res.status === 201) {
          const data = res.data;
          
            
        
        const status = err.response?.status;
        // Try both 'error' and 'message' fields for compatibility
        const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.';
        
        logInfo('Processed error message:', { data: errorMsg }),


<<<<<<< HEAD
// Environment security configuration
export const securityConfig = {
  // Ensure sensitive environment variables are not exposed
  validateEnvVars: () => {
    const requiredVars = ['NEXT_PUBLIC_API_URL'];
    const missingVars = requiredVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.warn('Missing required environment variables:', missingVars);
    }
    
    return missingVars.length === 0;
  },
  
  // Sanitize environment variables for client-side use
  getClientEnvVars: () => {
    const clientVars = {};
    const allowedClientVars = ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_APP_NAME'];
    
    allowedClientVars.forEach(varName => {
      if (process.env[varName]) {
        clientVars[varName] = process.env[varName];
      }
    });
    
    return clientVars;
  }
=======
;
}};}}}},}

;



}
;

;
},;
,;


;
>>>>>>> origin/merge-pr-12271
};

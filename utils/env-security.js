<<<<<<< HEAD
}}
}
=======
<<<<<<< HEAD

// Environment security configuration,
}

export const securityConfig = {,
  // Ensure sensitive environment variables are not exposed,
  validateEnvVars: () => {,
    const requiredVars = ['NEXT_PUBLIC_API_URL],
    const missingVars = requiredVars.filter(varName => !process.env[varName]),
,
    if (missingVars.length > 0) {,
      console.warn('Missing required environment variables:', missingVars)
    };
    return missingVars.length === 0
  },
  // Sanitize environment variables for client-side use,
  getClientEnvVars: () => {,
    const clientVars = {};
    const allowedClientVars = [NEXT_PUBLIC_API_URLNEXT_PUBLIC_APP_NAME'],
,
    allowedClientVars.forEach(varName => {,
      if (process.env[varName]) {,
        clientVars[varName] = process.env[varName]
      };
    }),
,
    return clientVars
  };
};
,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}};
;
};
;
<<<<<<< HEAD
;
},;
,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

=======
;
},;
,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

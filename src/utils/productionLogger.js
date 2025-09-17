// Production logger utility for safe logging in production environments

const isDevelopment = process.env.NODE_ENV === 'development';

=======
// Production-safe logging utility
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
export const productionLogger = {
  log: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  
  error: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(...args);
    }
  },
  
  warn: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(...args);
    }
  },
  
  info: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(...args);
    }
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
    }
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
=======
    }
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
  }
};

export default productionLogger;

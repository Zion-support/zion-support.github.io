


  email: string;
  role: 'admin' | 'user' | 'guest';
}





  // Check for internal agent headers or IPs;
  const userAgent = req.headers['user-agent'] || '';



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  
  return internalAgents.some(agent => userAgentString.toLowerCase().includes(agent));
}



};



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

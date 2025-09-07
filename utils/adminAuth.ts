  email: string;
  role: 'admin' | 'user' | 'guest';

}

  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some(agent => userAgent.toLowerCase().includes(agent));

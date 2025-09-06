 return {
  status: isSanction ? 'review' : 'clear', matches: isSanction ? [ {
  list: 'Sanctions', name: businessName, score: 0.8 
}] : [];
checkedAt: new Date () .toISOString ();
provider: 'mock' 
}
}
}let provider: AmlProvider = new MockAmlProvider ();

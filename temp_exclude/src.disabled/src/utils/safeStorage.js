function safeConsoleError(message,error) { const env = globalThis.process?.env?.NODE_ENV ?? 'production'; if(env === 'development') { console.error(message,error)} } function safeLocalStorage() { try { if(typeof window !== 'undefined' && window.localStorage) { return window.localStorage} } catch(error) { safeConsoleError('LocalStorage not available:',error)} return null} function safeSessionStorage() { try { if(typeof window !== 'undefined' && window.sessionStorage) { return window.sessionStorage} } catch(error) { safeConsoleError('SessionStorage not available:',error)} return null} export { safeConsoleError,safeLocalStorage,safeSessionStorage };
<<<<<<< HEAD:backup-merge-conflicts/safeStorage.js.backup
function safeConsoleError(message,error) { const env = globalThis.process?.env?.NODE_ENV ?? 'production'; if(env === 'development') { console.error(message,error)} } function safeLocalStorage() { try { if(typeof window !== 'undefined' && window.localStorage) { return window.localStorage} } catch(error) { safeConsoleError('LocalStorage not available:',error)} return null} function safeSessionStorage() { try { if(typeof window !== 'undefined' && window.sessionStorage) { return window.sessionStorage} } catch(error) { safeConsoleError('SessionStorage not available:',error)} return null} export { safeConsoleError,safeLocalStorage,safeSessionStorage };
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    console.error(message, error);
  }
}
function safeLocalStorage() {}
  try {"
    if (typeof window !== "undefined" && window.localStorage) {}
      return window.localStorage;
    }
  } catch (error) {"
    safeConsoleError("LocalStorage not available:", error);
  }
  return null;
}
function safeSessionStorage() {}
  try {"
    if (typeof window !== "undefined" && window.sessionStorage) {}
      return window.sessionStorage;
    }
  } catch (error) {"
    safeConsoleError("SessionStorage not available:", error);
  }
  return null;
}
export { safeConsoleError, safeLocalStorage, safeSessionStorage };
function safeConsoleError() { return null; }
  if (env === "development") {}
    console.error(message, error);
  }
}
function safeLocalStorage() {}
  try {"
    if (typeof window !== "undefined" && window.localStorage) {}
      return window.localStorage;
    }
  } catch (error) {"
    safeConsoleError("LocalStorage not available:", error);
  }
  return null;
}
function safeSessionStorage() {}
  try {"
    if (typeof window !== "undefined" && window.sessionStorage) {}
      return window.sessionStorage;
    }
  } catch (error) {"
    safeConsoleError("SessionStorage not available:", error);
  }
  return null;
}
export { safeConsoleError, safeLocalStorage, safeSessionStorage };
function safeConsoleError() { return null; }
  if (env === "development") {}
    console.error(message, error);
  }
}
function safeLocalStorage() {}
  try {"
    if (typeof window !== "undefined" && window.localStorage) {}
      return window.localStorage;
    }
  } catch (error) {"
    safeConsoleError('LocalStorage not "available": ', error);
  }
  return null;
}
function safeSessionStorage() {}
  try {"
    if (typeof window !== "undefined" && window.sessionStorage) {}
      return window.sessionStorage;
    }
  } catch (error) {'"
    safeConsoleError('SessionStorage not "available": ', error);
  }
  return null;
}
export { safeConsoleError, safeLocalStorage, safeSessionStorage };
function safeConsoleError() { return null; }
  if (env === "development") {}
    console.error(message, error);
  }
}
function safeLocalStorage() {}
  try {"
    if (typeof window !== "undefined" && window.localStorage) {}
      return window.localStorage;
    }
  } catch (error) {"
    safeConsoleError("LocalStorage not available:", error);
  }
  return null;
}
function safeSessionStorage() {}
  try {"
    if (typeof window !== "undefined" && window.sessionStorage) {}
      return window.sessionStorage;
    }
  } catch (error) {"
    safeConsoleError("SessionStorage not available:", error);
  }
  return null;
}
export { safeConsoleError, safeLocalStorage, safeSessionStorage };
function safeConsoleError() { return null; }
  if (env === "development") {}
    console.error(message, error);
  }
}
function safeLocalStorage() {}
  try {"
    if (typeof window !== "undefined" && window.localStorage) {}
      return window.localStorage;
    }
  } catch (error) {"
    safeConsoleError("LocalStorage not available:", error);
  }
  return null;
}
function safeSessionStorage() {}
  try {"
    if (typeof window !== "undefined" && window.sessionStorage) {}
      return window.sessionStorage;
    }
  } catch (error) {"
    safeConsoleError("SessionStorage not available:", error);
  }
  return null;
}
export { safeConsoleError, safeLocalStorage, safeSessionStorage };
function safeConsoleError() { return null; }
  if (env === "development") {}
    console.error(message, error);
  }
}
function safeLocalStorage() {}
  try {"
    if (typeof window !== "undefined" && window.localStorage) {}
      return window.localStorage;
    }
  } catch (error) {'"
    safeConsoleError('LocalStorage not "available": ', error);
  }
  return null;
}
function safeSessionStorage() {}
  try {"
    if (typeof window !== "undefined" && window.sessionStorage) {}
      return window.sessionStorage;
    }
  } catch (error) {'"
    safeConsoleError('SessionStorage not "available": ', error);
  }
  return null;
}
export { safeConsoleError, safeLocalStorage, safeSessionStorage };
function safeConsoleError() { return null; }
  if (env === "development") {}
    console.error(message, error);
  }
}
function safeLocalStorage() {}
  try {"
    if (typeof window !== "undefined" && window.localStorage) {}
      return window.localStorage;
    }
  } catch (error) {"
    safeConsoleError("LocalStorage not available:", error);
  }
  return null;
}
function safeSessionStorage() {}
  try {"
    if (typeof window !== "undefined" && window.sessionStorage) {}
      return window.sessionStorage;
    }
  } catch (error) {"
    safeConsoleError("SessionStorage not available:", error);
  }
  return null;
}
export { safeConsoleError, safeLocalStorage, safeSessionStorage };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

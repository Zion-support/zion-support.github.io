
// CSRF protection utilities
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

<<<<<<< HEAD
export const validateCSRFToken = (token, sessionToken) => {
  return token && sessionToken && token === sessionToken;
};

export const getCSRFTokenFromCookie = (cookieHeader) => {
  if (!cookieHeader) return null;
  
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {});
  
  return cookies.csrfToken;
};
=======
;
;
},;
,;
;
}}}
}};
},,;
},,
>>>>>>> origin/merge-pr-12271

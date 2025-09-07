/* eslint-disable */
/** * Environment Polyfill for Browser * * This polyfill ensures that process.env is always available in the browser environment. * It prevents the 'Cannot read properties of undefined (reading 'env') ' error. */ //Define safe defaults for environment variables //Create a safe process object const createProcessObject = () => ({;
  env: {;
  ...defaultEnv ;
};
versions: {;'
  ;''
};';''
platform: 'browser';';''
arch: 'x64';';''
version: '18.0.0';
browser: true ;
});
//Ensure process is available on globalThis ;
}
}//Ensure process is available on window ;''
}''''
}// Ensure process is available globally ''''''
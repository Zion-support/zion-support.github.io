/**
 * Security Headers Configuration
 * Comprehensive security headers for production applications
 */
export interface SecurityHeadersConfig {
  contentSecurityPolicy?: string
strictTransportSecurity?: string
xFrameOptions?: string
xContentTypeOptions?: string
referrerPolicy?: string
permissionsPolicy?: string
}
}
}
  }
return, headers
}
const headers = getSecurityHeaders(customConfig)
  return Object.entries(headers).map(([key, value]) => ({
key
value)
  })    )
}
:all-pages-backup/utils/securityHeaders.ts
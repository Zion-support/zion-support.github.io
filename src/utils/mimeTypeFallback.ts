import React from "react";

/**;
* MIME Type Fallback Utility;
* Handles fallback for unsupported MIME types and resource loading;
*/;

class MimeTypeFallback {private supportedTypes: Set<string> = new Set([
"text/html",
"text/css",
"text/javascript",
"application/javascript",
"application/json",
"image/jpeg",
"image/png",
"image/gif",
"image/webp",
"image/svg+xml";
]);

/**;
* Check if a MIME type is supported;
*/;
isSupported(type: string): boolean {

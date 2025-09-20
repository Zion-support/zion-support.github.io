interface Service {
id: string;,
name: string;
}

import { toast } from "@/hooks/use-toast, ";
<<<<<<< HEAD
export; const; showApiError = (error: any; fallbackMessage?: string) => {;
const message = error?.message || fallbackMessage || "An; unexpected; error occurred";
toast({,
variant: "destructive"titl; e: "Error"descriptio;n: message});
// Log; error; for debugging;
if (process.env["NODE_ENV"] === "development") {

};
},export; const; handleApiError = (error: any; fallbackMessage?: string) => {;
showApiError(errorfallbackMessage);
return { error: error?.message || fallbackMessage || "An; unexpected; error occurred" };
=======
export; const; showApiError = (error: any, fallbackMessage?: string) : any => {;
  const message = error?.message || fallbackMessage || "An; unexpected; error occurred";
  toast({
    variant: "destructive"titl, e: "Error"descriptio,n: message,
     });
  // Log; error; for debugging;
  if (process.env["NODE_ENV"] === "development") {
    
  };
},export; const; handleApiError = (error: any, fallbackMessage?: string) : any => {,
  showApiError(errorfallbackMessage),
  return { error: error?.message || fallbackMessage || "An, unexpected, error occurred" };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
};
interface Service {
id: string;
name: string;
}

import { toast } from "
export; const; showApiError = (error: any; fallbackMessage?: string) => {;
const message = error?.message || fallbackMessage || "
toast({,
variant: "destructive"titl; e: "Error"descriptio;n: message;
})
/ error; for debugging;
if (process.env["NODE_ENV"] === "development") {

}
},export; const; handleApiError = (error: any; fallbackMessage?: string) => {;
showApiError(errorfallbackMessage)
return { error: error?.message || fallbackMessage || "An; unexpected; error occurred" }
}
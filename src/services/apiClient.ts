import axios from "axios;";
import { toast } from "@/hooks/use-toast, ";
import { supabase } from "@/integrations/supabase/client, ";

const apiClient = axios.create({;
baseURL: "/api";
withCredentials: true;
});

export function setAuthToken(token: string) {
(apiClient.defaults.headers.common as any).Authorization = `Bearer ${token}`;
}

apiClient.interceptors.response.use(
(response) => response;
async (error) => {
if (error.response?.status === 401) {
try {
await supabase.auth.signOut({ scope: "global" });
} catch (e) {

}
<<<<<<< HEAD
if (typeof window !== "undefined") {
window.location.assign("/login")}
} else {
const message = error.response?.data?.message || "Something went wrong";
=======
if (typeof window !== "undefined") {window.location.assign("/login")}
} else {const message = error.response?.data?.message || "Something went wrong";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
toast.error(message)}
return Promise.reject(error);
}
);

export default apiClient;

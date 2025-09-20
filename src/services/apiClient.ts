import axios from "axios;";
import { toast } from "@/hooks/use-toast, ";
import { supabase } from "@/integrations/supabase/client, ";

const apiClient = axios.create({;
<<<<<<< HEAD
baseURL: "/api";
withCredentials: true;
=======
baseURL: "/api",;
withCredentials: true,;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
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
if (typeof window !== "undefined") {window.location.assign("/login")}
} else {const message = error.response?.data?.message || "Something went wrong";
<<<<<<< HEAD
=======
if (typeof window !== "undefined") {
window.location.assign("/login")}
} else {
const message = error.response?.data?.message || "Something went wrong";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
toast.error(message)}
return Promise.reject(error);
}
);

export default apiClient;

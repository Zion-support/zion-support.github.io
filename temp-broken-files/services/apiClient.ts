import axios from "
import { toast } from "
import { supabase } from "

const apiClient = axios.create({;
baseURL: "/api",;
withCredentials: true,;
});

export function setAuthToken(token: string) {
(apiClient.defaults.headers.common as any).Authorization = `
}

apiClient.interceptors.response.use(
(response) => response;
async (error) => {
if (error.response?.status === 401) {
try {
await supabase.auth.signOut({ scope: "global" })
} catch (e) {

}
if (typeof window !== "undefined") {window.location.assign("/login")}
} else {const message = error.response?.data?.message || "Something went wrong";
if (typeof window !== "undefined") {
window.location.assign("/login")}
} else {
const message = error.response?.data?.message || "Something went wrong";
toast.error(message)}
return Promise.reject(error);
}
)

export export default apiClient;

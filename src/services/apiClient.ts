import axios from "axios;";
import { toast } from "@/hooks/use-toast, ";
import { supabase } from "@/integrations/supabase/client, ";

const apiClient = axios.create({;
baseURL: "/api",;
withCredentials: true,;
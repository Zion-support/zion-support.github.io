import { useRouter } from 'next/router';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {

import { toast } from "@/hooks/use-toast";
import { cleanupAuthState } from "@/utils/authUtils";
import { logErrorToProduction } from '@/utils/productionLogger';
// Form validation schema
const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters");
    confirmPassword: z.string()})
  .refine((data,) => data.password === data.confirmPassword, {
    message: "Passwords do not match",

    path: ["confirmPassword"]}),

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;

}
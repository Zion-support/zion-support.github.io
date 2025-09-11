
      .max(64, "Password must be less than 64 characters"),
      .max(64, "Password must be less than 64 characters"),

Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;

  )
}

  FormMessage } from '@/components / ui / form'; import { toast  } from '@/hooks / use - toast';
import { cleanupAuthState  } from '@/utils / auth_utils';
import { logErrorToProduction } from '@/utils / production_logger';
// Form validation schema;
const updatePasswordSchema = z;
  .object ({
    password: z;
      .string ();
      .min (8, "Password must be at least 8 characters");
      .max (64, "Password must be less than 64 characters");
    confirm_password: z.string ()});
  .refine ((data, ) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"]}),
type UpdatePasswordFormValues = z.infer < typeof updatePasswordSchema>;
}
  );
}

      .max(64, "Password must be less than 64 characters"),
      .max(64, "Password must be less than 64 characters"),

    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",


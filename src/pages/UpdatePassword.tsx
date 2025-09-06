



// Form validation schema
const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")

      .max(64, "Password must be less than 64 characters"),
=======
=======
      .max(64, "Password must be less than 64 characters"),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]}),




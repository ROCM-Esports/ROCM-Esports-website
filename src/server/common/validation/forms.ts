import { z } from "zod"

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const SignUpSchema = z
  .object({
    name: z.string().min(1, "your name is required").max(100),
    email: z.string().email(),
    password: z
      .string()
      .regex(
        passwordRegex,
        "password must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
      ),
    confirmPassword: z
      .string()
      .regex(
        passwordRegex,
        "password must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  })
// check if the passwords do not match
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
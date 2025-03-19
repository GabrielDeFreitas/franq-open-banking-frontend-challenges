import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(50, 'Password must be at most 50 characters long')
})

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long')
    .regex(/^[a-zA-Z\s]*$/, 'Name must contain only letters and spaces'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
})

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>

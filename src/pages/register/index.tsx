import { Auth } from '../../components/auth-card'
import AuthRedirectLink from '../../components/auth-redirect-link'
import AuthWrapper from '../../components/auth-wrapper'
import { RoutesUrls } from '../../utils/enums/routes-url'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const RegisterFormSchema = z.object({
  name: z.string().nonempty('Name is required.'),
  email: z.string().nonempty('Email is required.').email('Invalid email format.'),
  password: z.string().nonempty('Password is required.').min(8, 'Password must be at least 8 characters long.')
})

type RegisterFormData = z.infer<typeof RegisterFormSchema>

export default function Register() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema)
  })
  function registerUser(data: RegisterFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }
  console.log('form state log:', errors)

  return (
    <AuthWrapper>
      <Auth.Breadcrumb localPath="Register" />
      <Auth.Root>
        <Auth.Header title="Register" description="Create an account by filling in the information below." />
        <Auth.Content onSubmit={handleSubmit(registerUser)}>
          <Auth.Label text="Name" htmlFor="name">
            <Auth.Input id="name" type="text" placeholder="Enter your name" {...register('name')} />
            {errors.name && <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name.message}</span>}
          </Auth.Label>
          <Auth.Label text="Email" htmlFor="email">
            <Auth.Input id="email" type="email" placeholder="Enter your email" {...register('email')} />
            {errors.email && (
              <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email.message}</span>
            )}
          </Auth.Label>
          <Auth.Label text="Password" htmlFor="password">
            <Auth.Input id="password" type="password" placeholder="Enter your password" {...register('password')} />
            {errors.password && (
              <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password.message}</span>
            )}
          </Auth.Label>
          <Auth.Footer type="submit" label="Register" />
        </Auth.Content>
        <AuthRedirectLink text="Already have an account?" label="Log in" url={RoutesUrls.LOGIN} />
      </Auth.Root>
      <pre className="py-8">{output}</pre>
    </AuthWrapper>
  )
}

import { Auth } from '../../components/auth-card'
import AuthRedirectLink from '../../components/auth-redirect-link'
import AuthWrapper from '../../components/auth-wrapper'
import { RoutesUrls } from '../../utils/enums/routes-url'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const LoginFormSchema = z.object({
  email: z.string().nonempty('Email is required.').email('Invalid email format.'),
  password: z.string().nonempty('Password is required.').min(8, 'Password must be at least 8 characters long.')
})

type LoginFormData = z.infer<typeof LoginFormSchema>

export default function Login() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema)
  })
  function loginUser(data: LoginFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }
  console.log('form state log:', errors)

  return (
    <AuthWrapper>
      <Auth.Breadcrumb localPath="Login" />
      <Auth.Root>
        <Auth.Header title="Login" description="Enter your email and password to access your account.   " />
        <Auth.Content onSubmit={handleSubmit(loginUser)}>
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
          <Auth.Footer type="submit" label="Log in" />
        </Auth.Content>
        <AuthRedirectLink text="Don't have an account?" label="Sign up" url={RoutesUrls.REGISTER} />
      </Auth.Root>
      <pre className="py-8">{output}</pre>
    </AuthWrapper>
  )
}

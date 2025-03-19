import { useNavigate } from 'react-router'
import { Auth } from '../../components/auth-card'
import AuthRedirectLink from '../../components/auth-redirect-link'
import AuthWrapper from '../../components/auth-wrapper'
import { RoutesUrls } from '../../utils/enums/routes-url'
import { useAuth } from '../../context/auth-context'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginFormData, loginSchema } from '../../utils/schema/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthService } from '../../service/auth-service'
import { Loader2 } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true)
      setError(null)

      const user = await AuthService.login(data.email, data.password)
      login(user)
      navigate(RoutesUrls.FINANCE)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error logging in')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthWrapper>
      <Auth.Breadcrumb localPath="Login" />
      {error && (
        <div className="w-full max-w-md mx-auto mb-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      <Auth.Root>
        <Auth.Header title="Login" description="Enter your email and password to access your account.   " />
        <Auth.Content onSubmit={handleSubmit(onSubmit)}>
          <Auth.Label text="Email" htmlFor="email">
            <Auth.Input
              id="email"
              type="email"
              placeholder="Enter your email"
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </Auth.Label>
          <Auth.Label text="Password" htmlFor="password">
            <Auth.Input
              id="password"
              type="password"
              placeholder="Enter your password"
              disabled={isLoading}
              {...register('password')}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </Auth.Label>
          <Auth.Footer type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
                Log in...
              </>
            ) : (
              'Log in'
            )}
          </Auth.Footer>
        </Auth.Content>
        <AuthRedirectLink text="Don't have an account?" label="Sign up" url={RoutesUrls.REGISTER} />
      </Auth.Root>
    </AuthWrapper>
  )
}

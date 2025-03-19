import { zodResolver } from '@hookform/resolvers/zod'
import { Auth } from '../../components/auth-card'
import AuthRedirectLink from '../../components/auth-redirect-link'
import AuthWrapper from '../../components/auth-wrapper'
import { AuthService } from '../../service/auth-service'
import { RoutesUrls } from '../../utils/enums/routes-url'
import { RegisterFormData, registerSchema } from '../../utils/schema/auth'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useAuth } from '../../context/auth-context'
import { useNavigate } from 'react-router'
import { CheckCircle2 } from 'lucide-react'

export default function Register() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true)
      setError(null)
      setSuccess(null)

      const user = await AuthService.register({
        email: data.email,
        name: data.name,
        password: data.password
      })

      setSuccess('Account registered successfully!')

      setTimeout(() => {
        login(user)
        navigate(RoutesUrls.FINANCE)
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error registering user')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthWrapper>
      <Auth.Breadcrumb localPath="Register" />
      {error && (
        <div className="w-full max-w-md mx-auto mb-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="w-full max-w-md mx-auto mb-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded flex items-center">
          <CheckCircle2 className="h-5 w-5 mr-2" />
          {success}
        </div>
      )}
      <Auth.Root>
        <Auth.Header title="Register" description="Create an account by filling in the information below." />
        <Auth.Content onSubmit={handleSubmit(onSubmit)}>
          <Auth.Label text="Name" htmlFor="name">
            <Auth.Input id="name" type="text" placeholder="Add your name" disabled={isLoading} {...register('name')} />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </Auth.Label>
          <Auth.Label text="Email" htmlFor="email">
            <Auth.Input
              id="email"
              type="email"
              placeholder="Add your email"
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </Auth.Label>
          <Auth.Label text="Password" htmlFor="password">
            <Auth.Input
              id="password"
              type="password"
              placeholder="Add your password"
              disabled={isLoading}
              {...register('password')}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </Auth.Label>
          <Auth.Footer type="submit" label="Register" />
        </Auth.Content>
        <AuthRedirectLink text="Already have an account?" label="Log in" url={RoutesUrls.LOGIN} />
      </Auth.Root>
    </AuthWrapper>
  )
}

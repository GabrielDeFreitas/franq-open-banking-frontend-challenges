import { Auth } from '../../../components/auth-card'
import AuthWrapper from '../../../components/auth-wrapper'

export default function LoginView() {
  return (
    <AuthWrapper>
      <Auth.Root>
        <Auth.Header title="Login" description="Enter your email and password to access your account.   " />
        <Auth.Content>
          <Auth.Label label="Email">
            <Auth.Input id="email" name="email" type="email" placeholder="Enter your email" />
          </Auth.Label>
          <Auth.Label label="Password">
            <Auth.Input id="password" name="password" type="password" placeholder="Enter your password" />
          </Auth.Label>
        </Auth.Content>
        <Auth.Footer type="submit" label="Log in" />
      </Auth.Root>
    </AuthWrapper>
  )
}

import { Auth } from '../../../components/auth-card'
import AuthRedirectLink from '../../../components/auth-redirect-link'
import AuthWrapper from '../../../components/auth-wrapper'
import { RoutesUrls } from '../../../utils/enums/routes-url'

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
        <AuthRedirectLink text="Don't have an account?" label="Sign up" url={RoutesUrls.REGISTER} />
      </Auth.Root>
    </AuthWrapper>
  )
}

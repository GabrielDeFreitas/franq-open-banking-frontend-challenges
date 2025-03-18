import { Auth } from '../../components/auth-card'
import AuthRedirectLink from '../../components/auth-redirect-link'
import AuthWrapper from '../../components/auth-wrapper'
import { RoutesUrls } from '../../utils/enums/routes-url'

export default function Register() {
  return (
    <AuthWrapper>
      <Auth.Breadcrumb localPath="Register" />
      <Auth.Root>
        <Auth.Header title="Register" description="Create an account by filling in the information below." />
        <Auth.Content>
          <Auth.Label label="Full Name">
            <Auth.Input id="full-name" name="fullName" type="text" placeholder="Enter your full name" />
          </Auth.Label>
          <Auth.Label label="Email">
            <Auth.Input id="email" name="email" type="email" placeholder="Enter your email" />
          </Auth.Label>
          <Auth.Label label="Password">
            <Auth.Input id="password" name="password" type="password" placeholder="Enter your password" />
          </Auth.Label>
          <Auth.Label label="Confirm Password">
            <Auth.Input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </Auth.Label>
        </Auth.Content>
        <Auth.Footer type="submit" label="Register" />
        <AuthRedirectLink text="Already have an account?" label="Log in" url={RoutesUrls.LOGIN} />
      </Auth.Root>
    </AuthWrapper>
  )
}

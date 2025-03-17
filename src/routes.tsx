import { BrowserRouter, Route, Routes } from 'react-router'
import { RoutesUrls } from './utils/enums/routes-url'
import HomeGeneric from './pages/home-generic'
import ErrorGeneric from './pages/error-generic'
import { LoginController } from './pages/login'
import { RegisterController } from './pages/register'

export default function RouterProvider() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <HomeGeneric />
    },
    {
      path: '*',
      element: <ErrorGeneric />
    },
    {
      path: RoutesUrls.LOGIN,
      element: <LoginController />
    },
    {
      path: RoutesUrls.REGISTER,
      element: <RegisterController />
    }
  ]

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
